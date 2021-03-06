import React from 'react';

interface IProps { }

const GeneralNotesFooterNotes: React.FC<IProps> = (_props: IProps) => {
	return (
		<React.Fragment>
			<hr />
			<h3 className="h6 text-uppercase">Notes:</h3>
			<ol className="small">
				<li id="general-notes-1">
					<p><strong>“Gross revenue” (qualifying revenue)</strong> is total revenues arising in the course of the ordinary activities of the eligible entity (generally from the sale of goods, the rendering of services and the use by others of resources of the eligible entity), not reduced by expenses. There are several restrictions and possible elections (some of which must be made for multiple or all periods) for determining gross revenue for a period.  For example, gross revenues could be calculated on the cash or accrual basis, non-arm’s length revenue is generally excluded (but there is an exception available), and there are possibilities for aggregating or separating income within corporate groups.  The calculation assumes that these items have been taken into account when the gross revenue is entered into the calculator for each particular month.</p>
				</li>
				<li id="general-notes-2">
					<p><strong>“Current reference period”</strong> refers to a particular month in 2020 that is defined by legislation in respect of each particular claim period.  They are:  Period 1 – March, 2 – April, 3 – May, 4 – June, 5 – July, 6 – August, 7 – September, 8 – October, 9 – November, 10 - December, 11 - December, 12 - January, 13 - February, 14 - March, 15 - April, 16 - May. The current reference period for both periods 10 and 11 is December of 2020 as announced in the Fall Economic Statement. Gross revenue from this month is used in determining entitlement to the subsidy.</p>
				</li>
				<li id="general-notes-3">
					<p><strong>“Current period”</strong> refers to the period for which the claim is being made.</p>
				</li>
				<li id="general-notes-4">
					<p><strong>“Prior reference period”</strong> Gross revenue from the prior reference period is measured against that of the current reference period to determine the revenue reduction percentage<sup>5</sup>.  It is the same month from the prior year as the current reference period.  However, an election can be made which effectively changes it to January and February of 2020.  See “Alternative calculation” in note 6.</p>
				</li>
				<li id="general-notes-5">
					<p className="mb-0"><strong>“Revenue reduction percentage”</strong>of an eligible entity for a qualifying period is the percentage by which revenue has declined from the prior reference period to the current reference period.  In particular, it is calculated using this formula (expressed as a percentage): <strong>1 − A/B</strong><br /> where</p>
					<ol type="A" className="mb-3">
						<li>
							is the eligible entity’s qualifying revenue for the current reference period for the qualifying period; and
					</li>
						<li>
							is the eligible entity’s qualifying revenue for the prior reference period for the qualifying period – or, if the prior reference period is January and February 2020, the amount determined by the formula in subparagraph (c)(ii) of the definition <em>qualifying entity</em> – or a period prescribed by regulation in respect of the eligible entity for the qualifying period. <em>(pourcentage de baisse de revenu)</em>
						</li>
					</ol>
				</li>
				<li id="general-notes-6">
					<p><strong>“Alternative calculation”</strong> The election to use the alternative method (average of January and February 2020) is made once for all 4 of the first periods (ended July 4, 2020) and again for all remaining periods (5-13).  For these remaining periods  , if the alternative method is selected, it must be used for both the top-up and base subsidy calculations.</p>
				</li>
				<li id="general-notes-7">
					<p><strong>“Election for Period 5”</strong> – In determining the subsidy for Period 5, the results may depend on the revenue reduction percentage from Period 4.  There is a possibility that a different decision (election) has been made in respect of using the alternative prior reference period of January and February 2020 for Periods 1-4 as for Periods 5-13.  The estimator assumes that the same decision was made for both sets of periods.</p>
				</li>
				<li id="general-notes-8">
					<p><strong>“Eligible remuneration”</strong> generally includes wages, salaries and benefits paid.  Note that the amount of remuneration eligible for the subsidy is limited by several factors.  It is assumed that the Estimator user has already determined the available weekly eligible remuneration (and baseline remuneration, where applicable) for each employee.</p>
					<p className="mb-0">There are limits to the amount of eligible remuneration paid which is available for the subsidy.  See the “Subsidy Calculation” details in the General Estimator Logic section above.  There are different, but similar rules for Periods 1-4 as compared to Periods 5-16.  In the “Eligible Remuneration” column, please only enter the amount of eligible remuneration that is available as a result of the “Subsidy Calculation”.  Also, note that Eligible Remuneration paid is not calculated in respect of the reference month, but rather, in respect of the specific days covered by the 4-week claim period in 2020.  They claim periods are:</p>
					<ul className="mb-3">
						<li>Period 1 Mar 15 – April 11</li>
						<li>Period 2 April 12 – May 9</li>
						<li>Period 3 May 10 – June 6</li>
						<li>Period 4 June 7 – July 4</li>
						<li>Period 5 July 5 – Aug 1</li>
						<li>Period 6 Aug 2 – Aug 29</li>
						<li>Period 7 Aug 30 – Sep 26</li>
						<li>Period 8 Sep 27 – Oct 24</li>
						<li>Period 9 Oct 25 – Nov 21</li>
						<li>Period 10 Nov 22 – Dec 19</li>
						<li>Period 11: Dec 20, 2020 – Jan 16, 2021	</li>
						<li>Period 12: Jan 17, 2021 – Feb 13, 2021	</li>
						<li>Period 13: Feb 14, 2021 – Mar 13, 2021</li>
						<li>Period 14: Mar 14, 2021 - Apr 10, 2021</li>
						<li>Period 15: Apr 11, 2021 - May 8, 2021</li>
						<li>Period 16: May 9, 2021 - June 5, 2021</li>
					</ul>
				</li>
				<li id="general-notes-9">
					<p className="mb-0"><strong>"Pre-crisis weekly remuneration" (baseline remuneration)</strong> is generally the average weekly eligible remuneration paid to the eligible employee by the eligible entity during the January 1 to March 15, 2020 period.  However, elections could be made for the period to change.  The available election dates for each claim period are:</p>
					<ul className="mb-3">
						<li>Periods 1-3: March 1, 2019 to May 31, 2019 </li>
						<li>Period 4: March 1, 2019 to June 30, 2019 or March 1, 2019 to May 31, 2019</li>
						<li>Periods 5-13: July 1, 2019 to December 31, 2019, or if the employee was on certain kinds of long-term leave from July 1, 2019, to March 15, 2020, the 90-day period ending before the leave started</li>
						<li>Period 14-16: March 1 to June 30, 2019 or July 1 to December 31, 2019, or
if the employee was on certain kinds of long-term leave from July 1, 2019, to March 15, 2020, the 90-day period ending before the leave started</li>

					</ul>
					<p>These elections can be made on an employee by employee basis.  It is assumed that the Estimator user has determined the baseline remuneration and any impacts on remuneration eligible for the subsidy.</p>
				</li>
				<li id="general-notes-10">
					<p className="mb-0"><strong>3-month reference periods for top-up subsidy </strong> The applicable months are as follows:</p>
					<ul className="mb-3">
						<li>Period 5 – April to June</li>
						<li>Period 6 – May to July</li>
						<li>Period 7 – June to August</li>
						<li>Period 8 – July to September</li>
						<li>Period 9 – August to October</li>
						<li>Period 10 – September to November</li>
						<li>Period 11 to 16 – Not applicable.</li>
					</ul>
				</li>
				<li id="general-notes-11">
					<p>This calculator does not provide results in respect of furloughed employees (those being paid but who are not working).</p>
				</li>
				<li id="general-notes-12">
					<p>No information entered in the calculator is saved.</p>
				</li>

				<li id="general-notes-14">
					<p>The current reference period month for both Periods 10 and 11 is December, 2020.  In other words, the revenue decline for these two claim periods is based on the same months, however, the formula is slightly different.  This anomaly occurred since each claim period covers less than a full month (only 28 days).</p>
				</li>
				<li id="general-notes-15">
					<p>
						For more information on the subsidy, see the following Government of Canada documents: {` `}
						<a href="https://www.canada.ca/en/department-finance/news/2020/04/additional-details-on-the-canada-emergency-wage-subsidy0.html" target="_blank" rel="noreferrer noopener">
							Backgrounder 1
						</a> {` `}
						| {` `}
						<a href="https://www.canada.ca/en/department-finance/news/2020/07/adapting-the-canada-emergency-wage-subsidy-to-protect-jobs-and-promote-growth.html" target="_blank" rel="noreferrer noopener">
							Backgrounder 2
						</a> {` `}
						| {` `}
						<a href="https://www.canada.ca/en/department-finance/news/2020/10/extending-the-canada-emergency-wage-subsidy.html" target="_blank" rel="noreferrer noopener">
							Backgrounder 3
						</a> {` `}
						| {` `}
						<a href="https://www.canada.ca/en/department-finance/news/2020/11/details-on-the-canada-emergency-wage-subsidy-extension.htm" target="_blank" rel="noreferrer noopener">
							Backgrounder 4
						</a> {` `}
						| {` `}
						<a href="https://www.canada.ca/en/department-finance/news/2021/03/government-announces-wage-and-rent-subsidy-amounts-to-remain-unchanged-through-to-june0.html" target="_blank" rel="noreferrer noopener">
							Backgrounder 5
						</a> {` `}
						| {` `}
						<a href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy.html" target="_blank" rel="noreferrer noopener">
							Application Process
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
						<a href="https://parl.ca/DocumentViewer/en/43-2/bill/C-9/royal-assent" target="_blank" rel="noreferrer noopener">
							Bill C-9
						</a> {` `}
						| {` `}
						<a href="https://www.videotax.com/web-tips-articles/2020-fall-economic-statement" target="_blank" rel="noreferrer noopener">
							Fall Economic Statement
						</a> {` `}
						| {` `}
						<a href="https://www.canada.ca/en/revenue-agency/services/benefits/emergency-student-benefit/cesb-statistics.html" target="_blank" rel="noreferrer noopener">
							Statistics
						</a>
					</p>
				</li>
				<li id="general-notes-16">
					<p>
						The calculations and rules will remain largely the same as for Periods 11-13 with the exception that any comparisons using March, April, or May revenues will incorporate prior period revenues from the same month in 2019 as opposed to 2020.
				</p>
				</li>
			</ol>

		</React.Fragment>
	);
};
export default GeneralNotesFooterNotes;
