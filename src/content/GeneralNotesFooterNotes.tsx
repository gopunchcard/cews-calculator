import React from 'react';

interface IProps { }

const GeneralNotesFooterNotes: React.FC<IProps> = (_props: IProps) => {
	return (
		<React.Fragment>
			<hr />
			<h3 className="h6 text-uppercase">Notes:</h3>
			<ol className="small">
				<li id="general-notes-1">
					<strong>“Current reference period”</strong> refers to a particular month in 2020 that is defined by legislation in respect of each particular period.  They are:  Period 1 – March, 2 – April, 3 – May, 4 – June, 5 – July, 6 – August, 7 – September, 8 – October, 9 – November.  Gross revenue from this month is used in determining entitlement to the subsidy.
				</li>
				<li id="general-notes-2">
					<strong>“Current period”</strong> refers to the period for which the claim is being made.
				</li>	
				<li id="general-notes-3">
					<strong>“Prior reference period”</strong> – Gross revenue from the prior reference period is measured against that of the current reference period to determine the revenue reduction percentage<sup>8</sup>.  It is the same month from the prior year as the current reference period.  However, an election can be made which effectively changes it to January and February of 2020.
				</li>
				<li id="general-notes-4">
					<strong>“Pre-crisis weekly remuneration” (baseline remuneration)</strong> is calculated based on the January 1 to March 15, 2020 time span.  However, elections could be made for the period to be: March 1, 2019 to May 31, 2019 for Periods 1-3; March 1, 2019 to June 30, 2019 or March 1, 2019 to May 31, 2019 for Period 4; and July 1, 2019 to December 31, 2019 for Periods 5-9.
				</li>
				<li id="general-notes-5">
					<strong>“Gross revenue”</strong> – is basically total revenues not reduced by expenses. There are several restrictions and possibilities for determining gross revenue for a period.  For example, it could be calculated on the cash or accrual basis, non-arm’s length revenue is generally excluded (but there is an exception available), and there are possibilities for aggregating or separating income within corporate groups.  The calculation assumes that these items have been taken into account when the gross revenue is entered into the calculator for each particular month.
				</li>
				<li id="general-notes-6">
					<strong>“Eligible remuneration”</strong> generally includes wages, salaries and benefits paid.  Note that the amount of remuneration eligible is limited by several factors.  For example, there is a cap of $1,129 per eligible employee per week, and amounts vary based on whether the employee was arm’s length or not, and what their pre-crisis remuneration was.  Further, there have been some slight changes to the amounts that can be claimed under the original method as compared to the new method.  For example, under the original method, if 75% of an arm’s length employee’s pre-crisis remuneration was greater than 75% of remuneration paid during the particular period, the claim could be based on the pre-crisis remuneration instead.  This could have potentially led to a 100% subsidy.  The option to use pre-crisis remuneration for arm’s length employees has been eliminated under the new method.  It is assumed that the user has already determined how much eligible remuneration is available for use.
				</li>
				<li id="general-notes-7">
					<strong>“Alternative calculation”</strong> – The election to use the alternative method (average of January and February, 2020) is made once for <strong>all four of the first periods</strong> (ended July 4, 2020) and again for all remaining periods.  For these remaining periods, if the alternative method is selected, it must be used for both the top-up and base subsidy calculations.
				</li>
				<li id="general-notes-8">
					<strong>“Revenue reduction percentage”</strong> of an eligible entity for a qualifying period, means the result (expressed as a percentage) of the formula: <strong>1 − A/B</strong><br />
					where
				<ol type="A">
					<li>
						is the eligible entity’s qualifying revenue for the current reference period for the qualifying period; and
					</li>
					<li>
						is the eligible entity’s qualifying revenue for the prior reference period for the qualifying period – or, if the prior reference period is January and February 2020, the amount determined by the formula in subparagraph (c)(ii) of the definition <em>qualifying entity</em> – or a period prescribed by regulation in respect of the eligible entity for the qualifying period. <em>(pourcentage de baisse de revenu)</em>
					</li>
				</ol>
				</li>
				<li id="general-notes-9">
					<strong>Elections for Periods 5 and 6</strong> – In determining the subsidy under the original method for periods 5 and 6, it is assumed that the decision of whether or not to elect to use the January/February prior reference period has stayed that same for Periods 5-9 as it was for Periods 1-4.
				</li>
				<li id="general-notes-10">
					It is assumed that the business operated throughout January and February of 2020.
				</li>
				<li id="general-notes-11">
					No information entered in the calculator is saved.
				</li>
				<li id="general-notes-12">
					For more information on the subsidy, see the following Government of Canada documents: {` `}
					<a href="https://www.canada.ca/en/department-finance/news/2020/04/additional-details-on-the-canada-emergency-wage-subsidy0.html" target="_blank" rel="noreferrer noopener">
						Backgrounder 1
					</a> {` `}
					| {` `}
					<a href="https://www.canada.ca/en/department-finance/news/2020/07/adapting-the-canada-emergency-wage-subsidy-to-protect-jobs-and-promote-growth.html" target="_blank" rel="noreferrer noopener">
						Backgrounder 2
					</a> {` `}
					| {` `}
					<a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy.html" target="_blank" rel="noreferrer noopener">
						Application Process
					</a> {` `}
					| {` `}
					<a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-apply-guide.html" target="_blank" rel="noreferrer noopener">
						Application guide
					</a> {` `}
					| {` `}
					<a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-frequently-asked-questions.html" target="_blank" rel="noreferrer noopener">
						FAQ
					</a> {` `}
					| {` `}
					<a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-apply-guide.html" target="_blank" rel="noreferrer noopener">
						Application guide
					</a> {` `}
					| {` `}
					<a href="https://www.parl.ca/DocumentViewer/en/43-1/bill/C-14/royal-assent" target="_blank" rel="noreferrer noopener">
						Bill C-14
					</a> {` `}
					| {` `}
					<a href="https://www.parl.ca/LegisInfo/BillDetails.aspx?Language=E&billId=10833096" target="_blank" rel="noreferrer noopener">
						Bill C-20
					</a> {` `}
					| {` `}
					<a href="https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit/cesb-statistics.html" target="_blank" rel="noreferrer noopener">
						Statistics
					</a>
				</li>
			</ol>

		</React.Fragment>
	);
};
export default GeneralNotesFooterNotes;
