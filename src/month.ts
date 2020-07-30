import calcPercentLostNoNegative from "./calcPercentLossNoNegative";

const constants = [

    { month: 1, cewsPeriod: -1, threshold: 200, baseModifier: 0, baseCap: 0 },
    { month: 2, cewsPeriod: -2, threshold: 200, baseModifier: 0, baseCap: 0 },
    { month: 3, cewsPeriod: 1, threshold: .15, baseModifier: 0, baseCap: 0 },
    { month: 4, cewsPeriod: 2, threshold: .30, baseModifier: 0, baseCap: 0 },
    { month: 5, cewsPeriod: 3, threshold: .30, baseModifier: 0, baseCap: 0 },
    { month: 6, cewsPeriod: 4, threshold: .30, baseModifier: 0, baseCap: 0 },
    { month: 7, cewsPeriod: 5, threshold: .30, baseModifier: 1.2, baseCap: .6 },
    { month: 8, cewsPeriod: 6, threshold: .30, baseModifier: 1.2, baseCap: .6 },
    { month: 9, cewsPeriod: 7, threshold: 200, baseModifier: 1.0, baseCap: .5 },
    { month: 10, cewsPeriod: 8, threshold: 200, baseModifier: 0.8, baseCap: .4 },
    { month: 11, cewsPeriod: 9, threshold: 200, baseModifier: 0.4, baseCap: .4 },
    { month: 12, cewsPeriod: 10, threshold: 200, baseModifier: 0, baseCap: 0 },
];

class Month {
    private prevYearMonthlyRevenue: number;
    private currentYearMontlyRevenue: number;
    private prevYearPreviousMonthlyRevenue: number;
    private currentYearPreviousMontlyRevenue: number;
    private janFebValue: number;
    private currentYearPreceding3MonthsRevenue: number;
    private prevYear3PrecedingMonthsRevenue: number;
    private _prevNewGeneral: number = 0;
    private _prevNewAlternative: number = 0;

    constructor(public month: number,
        public constraintsMonth: number,
        public revenue2019: Array<number>,
        public revenue2020: Array<number>,
    ) {
        this.prevYearMonthlyRevenue = revenue2019[month];
        this.currentYearMontlyRevenue = revenue2020[month];
        this.prevYearPreviousMonthlyRevenue = revenue2019[month - 1];
        this.currentYearPreviousMontlyRevenue = revenue2020[month - 1];
        this.janFebValue = (revenue2020[0] + revenue2020[1]) / 2;
        if (month < 3) {
            this.currentYearPreceding3MonthsRevenue = 0;
            this.prevYear3PrecedingMonthsRevenue = 0;
        }
        else {
            this.currentYearPreceding3MonthsRevenue = (this.revenue2020[month - 1] + this.revenue2020[month - 2] + this.revenue2020[month - 3]) / 3
            this.prevYear3PrecedingMonthsRevenue = (this.revenue2019[month - 1] + this.revenue2019[month - 2] + this.revenue2019[month - 3]) / 3

        }
    }

    get generalPercentChange(): number {
        return calcPercentLostNoNegative(this.prevYearMonthlyRevenue, this.currentYearMontlyRevenue);
    }
    get alternativePercentChange(): number {
        return calcPercentLostNoNegative(this.janFebValue, this.currentYearMontlyRevenue)
    };
    get generalPercentChangePreviousMonth(): number {
        if (this.month < 3) return 0; // Don't calculate previous month before Apr
        return calcPercentLostNoNegative(this.prevYearPreviousMonthlyRevenue, this.currentYearPreviousMontlyRevenue);
    }
    get alternativePercentChangePreviousMonth(): number {
        if (this.month < 3) return 0; // Don't calculate previous month before Apr
        return calcPercentLostNoNegative(this.janFebValue, this.currentYearPreviousMontlyRevenue)
    };
    get oldgeneralEligiblePercent(): number {
        if (this.month > 7) //Not available after month 7
            return 0
        if (this.generalPercentChange > constants[this.constraintsMonth]?.threshold) return .75;

        if (this.generalPercentChangePreviousMonth > constants[this.constraintsMonth - 1]?.threshold) return .75;
        return 0;
    }
    get oldAlternativeEligiblePercent(): number {
        if (this.month > 7) //Not available after month 7
            return 0
        if (this.alternativePercentChange > constants[this.constraintsMonth]?.threshold) return .75;
        if (this.alternativePercentChangePreviousMonth > constants[this.constraintsMonth - 1]?.threshold) return .75;
        return 0;
    }

    get generalBasePercent(): number {
        return Math.min(this.generalPercentChange * constants[this.constraintsMonth].baseModifier, constants[this.constraintsMonth].baseCap);
    }
    get altBasePercent(): number {
        return Math.min(this.alternativePercentChange * constants[this.constraintsMonth].baseModifier, constants[this.constraintsMonth].baseCap);
    }
    get generalTopUpRevenueDrop(): number {
        return calcPercentLostNoNegative(this.prevYear3PrecedingMonthsRevenue, this.currentYearPreceding3MonthsRevenue)
    }
    get altTopUpRevenueDrop(): number {
        return calcPercentLostNoNegative(this.janFebValue, this.currentYearPreceding3MonthsRevenue)
    }
    get generalTopUpPercent(): number {
        return this.calulateTopUpRate(this.generalTopUpRevenueDrop);
    }
    get altTopUpPercent(): number {
        return this.calulateTopUpRate(this.altTopUpRevenueDrop);
    }
    // Need to now see if they qualify with last months numbers
    get generalEligiblePercentWithoutPreviousMonth(): number {

        return Math.max(this.generalBasePercent + this.generalTopUpPercent);
    }
    get altEligiblePercentWithoutPreviousMonth(): number {
        return Math.max(this.altBasePercent + this.altTopUpPercent);
    }
    get generalEligiblePercent(): number {

        return Math.max(this.generalEligiblePercentWithoutPreviousMonth, this._prevNewGeneral, this.oldgeneralEligiblePercent);
    }
    get altEligiblePercent(): number {
        return Math.max(this.altEligiblePercentWithoutPreviousMonth, this._prevNewAlternative, this.oldAlternativeEligiblePercent);
    }
    // This is used to supply last months values as you can use last months values for the new Numbers
    set prevNewGeneral(value: number) {
        this._prevNewGeneral = value + this.generalTopUpPercent;
    }
    set prevNewAlternative(value: number) {
        this._prevNewAlternative = value + this.altTopUpPercent;
    }
    calulateTopUpRate(revenueDrop: number): number {
        if (revenueDrop <= .5)
            return 0;
        return Math.min(1.25 * (revenueDrop - 0.5), 0.25);
    }
}

export default Month;