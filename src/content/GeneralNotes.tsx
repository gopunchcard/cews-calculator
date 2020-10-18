import React from 'react';

interface IProps { }

const GeneralNotes: React.FC<IProps> = (_props: IProps) => {
	return (
		<React.Fragment>
			<h2>General Estimator Logic</h2>
			<p>
				The following are the general rules that the Estimator attempts to follow<sup>12</sup>.  Note that there are many exceptions.  Further, clarification from CRA as to how many aspects of the rules work has not yet been received.  These assumptions and calculations are based on our understanding of the rules but cannot be relied upon for the filing of a claim.  Professional assistance is required. For the government application site, click <a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy.html">here</a>.
			</p>
			<p>
				The calculation can be separated into four period groups: Periods 1-4 (March 15 to July 4), Periods 5-6 (July 5 to August 29), Periods 7 – 9 (August 30 to November 21), and Period 10 (November 22 to December 19).

			</p>
			<h3>Periods 1-4 (original method)</h3>
			<p>
				<strong>General –</strong> Gross revenue<sup>1</sup> from the current reference period<sup>2</sup> is compared to the same month of the prior year (the prior reference period<sup>4</sup>). A claim is available for periods where the decline (the revenue reduction percentage<sup>5</sup>) is at least 30% (15% for Period 1 ). There are several considerations for calculating gross revenue in Note 1.
			</p>
			<p>
				<strong>Election –</strong> An election can be made to use the average monthly gross revenues from January and February of 2020 as the prior reference period<sup>4</sup> gross revenue instead.  We refer to this as the “Alternative Calculation”<sup>6</sup>.  If the election is made, the alternative calculation method must be used for all of these periods (1-4).
			</p>
			<p>
				<strong>Safe Harbour –</strong> If eligible for the immediately preceding period based on that period’s revenue reduction percentage<sup>5</sup>, you will also be eligible in the current period<sup>3</sup>.
			</p>

			<p>
				<strong>Subsidy Calculation –</strong> If eligible under one of the above possibilities, the subsidy would be the greater of:
			</p>
			<ul>
				<li>
					75% of the amount of eligible remuneration<sup>8</sup> paid, up to a maximum benefit of $847 per week; and
				</li>
				<li>
					the amount of remuneration paid, up to a maximum benefit of $847 per week or 75% of the employee's pre-crisis weekly remuneration (baseline remuneration)<sup>9</sup>, whichever is less.  In effect, employers may be eligible for a subsidy of up to 100% of the first 75% of pre-crisis<sup>4</sup> wages or salaries of existing employees. The claim for a non-arm’s length employee cannot exceed 75% of baseline remuneration.
				</li>
			</ul>

			<h3>Periods 5-6</h3>
			<p>
				The greater of the results as calculated under the Period 1-4 method (original) and the Period 7-9 method (new) will be used.  Note that an election to use the average of January and February 2020 as the prior reference period<sup>4</sup> in respect of periods 5-9, means that the computation under both the old and new methods for Period 5 must incorporate that election, regardless of whether the election was made for periods 1-4.
			</p>
			<h3>Periods 7-9</h3>
			<p>
				The subsidy is split into two components: the base subsidy and the top-up subsidy.  The subsidy is the sum of the two components.
			</p>
			<h4>Base Subsidy</h4>
			<p>
				<strong>General –</strong> Gross revenue<sup>1</sup> from the current reference period<sup>2</sup> is compared to that of the   same month in 2019 (prior reference period<sup>4</sup>).
			</p>
			<p>
				<strong>Election –</strong> An election can be made to use the average monthly gross revenues from January and February of 2020 as the prior reference period4 gross revenue. We refer to this as the “Alternative Calculation”<sup>6</sup>.  If the election is made, the alternative calculation method must be used for all of these periods (5-9).
			</p>
			<p>
				<strong>Safe Harbour –</strong> – If the revenue reduction percentage<sup>5</sup> is greater for the immediately preceding period, that prior period decline will be deemed to be the current revenue reduction percentage<sup>5</sup>.  However, if the prior period also benefited from the deemed decline, the actual decline from the prior period must be used to determine if there is a deemed decline in the current period.
			</p>

			<p>
				<strong>Base Subsidy Calculation –</strong> Once the revenue reduction percentage<sup>5</sup> is determined based on the above, it is multiplied by a pre-defined factor which decreases over time.  The factors and related claim caps are: 1.2 and 60% for Periods 5 and 6, 1.0 and 50% for Period 7, and 0.8 and 40% for Period 8, Period 9 was previously set at 0.4 and 20%, however, periods 9 and 10 were subsequently announced to be frozen at the maximum 65% claim from period 8. This percentage would generally be applied to the amount of remuneration paid to the employee for the eligibility period, on remuneration of up to $1,129 per week.  For non-arm’s length employees, the percentage would be applied to the employee’s weekly eligible remuneration<sup>8</sup> or pre-crisis remuneration<sup>9</sup>, whichever is less, up to a maximum of $1,129.  These limits on eligible remuneration apply to Periods 5 through 9.
			</p>
			<h4>Top-up Subsidy</h4>
			<p>
				<strong>General –</strong> Average monthly gross revenue for the last 3 calendar months that ended prior<sup>11</sup> to the current reference period is compared to the average of the same months in 2019.
			</p>
			<p>
				<strong>Election –</strong> If the election is made for the base subsidy, the average monthly gross revenue for the last 3 calendar months that ended prior<sup>11</sup> to the current reference period is compared to the average monthly revenue in January and February 2020 for the top-up subsidy instead.
			</p>
			<p>
				<strong>Top-up Subsidy Calculation –</strong> The 3-month average revenue decline in excess of 50% is multiplied by 1.25.  This new percentage, capped at 25%, is added to the percentage calculated under the base subsidy.
			</p>
			<h3>Period 10</h3>
			<p>See note 13.</p>
		</React.Fragment>
	);
};

export default GeneralNotes;
