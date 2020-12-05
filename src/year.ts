import Month from "./month";

class Year {


	constructor(
		public revenue2019: Array<number>,
		public revenue2020: Array<number>,
		public finalGeneralResults: Array<number> = [],
		public finalAltResults: Array<number> = []
	) {

	}

	getvalues() {
		var results = [];
		let noZeroRevenue2019 = [];
		let noZeroRevenue2020 = [];
		for (let i = 0; i < 14; i++) {
			this.revenue2019[i] === 0 ? noZeroRevenue2019[i] = 0.001 : noZeroRevenue2019[i] = this.revenue2019[i];
			this.revenue2020[i] === 0 ? noZeroRevenue2020[i] = 0.001 : noZeroRevenue2020[i] = this.revenue2020[i];
		}
		for (let i = 0; i < 14; i++) {
			let prevMonthTest = null;
			let month = new Month(i, i, noZeroRevenue2019, noZeroRevenue2020);

			if (i >= 6) { //This only applies to the newcalculations
				// This should only apply to the new values, not the old values..
				prevMonthTest = new Month(i - 1, i, noZeroRevenue2019, noZeroRevenue2020);
				month.prevNewGeneral = (prevMonthTest.generalBasePercent);
				month.prevNewAlternative = (prevMonthTest.altBasePercent);
				//we need to inject the results
				// finalGeneral = Math.max(month.generalEligiblePercent, prevMonthTest.generalEligiblePercent)
				// finalAlt = Math.max(month.altEligiblePercent, prevMonthTest.altEligiblePercent)
			}
			let finalGeneral = month.generalEligiblePercent;
			let finalAlt = month.altEligiblePercent;
			this.finalGeneralResults.push(finalGeneral);
			this.finalAltResults.push(finalAlt);
			results.push(month);
			console.log(i + " " + new Date(2019, month.month, 1).toLocaleString('default', { month: 'short' }) + ' ');
			console.log('    '
				+ month.generalPercentChange.toFixed(2) + ' '
				+ month.alternativePercentChange.toFixed(2) + ' '
				+ month.oldgeneralEligiblePercent.toFixed(2) + ' '
				+ month.oldAlternativeEligiblePercent.toFixed(2));
			console.log('    new '
				+ ' base ' + month.generalBasePercent.toFixed(2)
				+ ' top ' + month.generalTopUpPercent.toFixed(2)
				+ ' altBase ' + month.altBasePercent.toFixed(2)
				+ ' altTop ' + month.altTopUpPercent.toFixed(2));
			if (prevMonthTest != null)
				console.log('    prev '
					+ ' base ' + prevMonthTest.generalBasePercent.toFixed(2)
					+ ' top ' + prevMonthTest.generalTopUpPercent.toFixed(2)
					+ ' altBase ' + prevMonthTest.altBasePercent.toFixed(2)
					+ ' altTop ' + prevMonthTest.altTopUpPercent.toFixed(2));
			console.log(
				'     final ' + month.generalEligiblePercent.toFixed(2) + ' ' + month.altEligiblePercent.toFixed(2));
		}
	}
}

export default Year;