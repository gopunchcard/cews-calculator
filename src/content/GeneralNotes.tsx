import React from 'react';

interface IProps { }

const GeneralNotes: React.FC<IProps> = (_props: IProps) => {
	return (
		<React.Fragment>
			<h2>General Estimator Logic</h2>
			<p>
				The following are the general rules that the estimator attempts to follow. Note that there are many exceptions. 
				Further, clarification from CRA as to how the rules work has not yet been received. 
				These assumptions and calculations are based on our original understanding of the rules but cannot be relied upon for the filing of a claim. 
				Professional assistance is required.
			</p>
			<h3>Periods 1-4 (original method)</h3>
			<p>
				<strong>General –</strong> Gross revenue<sup>5</sup> from the current reference period<sup>1</sup> is compared to the same month of the prior year (the prior reference period<sup>3</sup>). Declines of at least 30% are eligible.
			</p>
			<p>
				<strong>Safe Harbour –</strong> If eligible for the immediately preceding period based on that period’s revenue reduction percentage<sup>8</sup>, you will also be eligible in the current period<sup>2</sup>.
			</p>
			<p>
				<strong>Election –</strong> If an election is made, you can use the average monthly gross revenues from January and February of 2020 as the prior reference period<sup>3</sup> gross revenue. We refer to this as the “Alternative Calculation”<sup>7</sup>. The election must be used for all of these periods (1-4). Revenue declines of at least 30% are eligible
			</p>
			<p>
				<strong>Subsidy Calculation –</strong> If eligible under one of the above possibilities, the subsidy would be the greater of:
			</p>
			<ul>
				<li>
					75% of the amount of eligible remuneration paid, up to a maximum benefit of $847 per week; and
				</li>
				<li>
					the amount of remuneration paid, up to a maximum benefit of $847 per week or 75% of the employee's pre-crisis<sup>4</sup> weekly remuneration, whichever is less.
				</li>
			</ul>
			<p>
				In effect, employers may be eligible for a subsidy of up to 100% of the first 75% of pre-crisis<sup>4</sup> wages or salaries of existing employees. Special rules apply where the employee is not at arm’s length from the company.
			</p>
			<h3>Periods 5-6</h3>
			<p>
				The greater of the results as calculated under the Period 1-4 method (original) and the Period 7-9 method (new) will be used. Note that an election to use the average of January and February 2020 as the prior reference period in respect of periods 5-9, means that the computation under both the old and new methods for Period 5 must incorporate that election, regardless of whether the election was made for periods 1-4.
			</p>
			<h3>Periods 7-9</h3>
			<p>
				The subsidy is split into two components: the base subsidy and the top-up subsidy.
			</p>
			<h4>Base Subsidy</h4>
			<p>
				<strong>General –</strong> Gross revenues from the current reference period is compared to the same month of the prior year.
			</p>
			<p>
				<strong>Safe Harbour –</strong> If the revenue reduction percentage<sup>8</sup> is greater for the immediately preceding period, that prior period decline will be deemed to be the current revenue reduction percentage<sup>8</sup>. However, if the prior period also benefited from the deemed decline, the actual decline from the prior period must be used to determine if there is a deemed decline in the current period.
			</p>
			<p>
				<strong>Election –</strong> If an election is made, you can compare the current gross revenues to the average monthly gross revenues from January and February of 2020 instead. We refer to this as the “Alternative Calculation”<sup>7</sup>. The same method must be used for all of periods 5 through 9.
			</p>
			<p>
				<strong>Subsidy Calculation –</strong> Once the revenue reduction percentage<sup>8</sup> is determined based on the above, it is multiplied by a pre-defined factor which decreases over time. The factors are: 1.2 for Period 5 and 6, 1.0 for Period 7, 0.8 for Period 8, and 0.4 for Period 9. Details on Period 10 have not yet been released. It is also possible that the program may be extended.
			</p>
			<h4>Top-up Subsidy</h4>
			<p>
				<strong>General –</strong> Average monthly gross revenue for the last 3 calendar months that ended prior to the current reference period is compared to the same months in the prior year. 
			</p>
			<p>
				<strong>Election –</strong> Average monthly gross revenue for the last 3 calendar months that ended prior to the current reference period is compared to the average monthly revenue in January and February 2020.
			</p>
			<p>
				<strong>Subsidy Calculation –</strong> The 3-month average revenue decline in excess of 50% is multiplied by 1.25. This new percentage, capped at 25%, is added to the percentage calculated under the base subsidy.
			</p>
		</React.Fragment>
	);
};

export default GeneralNotes;
