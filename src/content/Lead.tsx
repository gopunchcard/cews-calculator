import React from 'react';

interface IProps { }

const Lead: React.FC<IProps> = (_props: IProps) => {
	return (
		<React.Fragment>
			<p>
				This tool estimates entitlement to the Canada Emergency Wage Subsidy for periods 1 through 16 (March 15, 2020 to June 5, 2021). In general, the subsidy is determined by multiplying the percentages calculated below by the {` `}
				<a className="text-primary-light font-weight-bold" href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-frequently-asked-questions.html#h_5" target="_blank" rel="noreferrer noopener">
					eligible remuneration
				</a>{` `}
				paid in respect of the applicable period (to {` `}
				<a className="text-primary-light font-weight-bold" href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-wage-subsidy/cews-frequently-asked-questions.html#h_6" target="_blank" rel="noreferrer noopener">
					certain limits
				</a>).
			</p>
			<p>
				The rules for calculating the subsidy changed after Period 4 from an {` `}
				<a className="text-primary-light font-weight-bold" href="https://www.videotax.com/covid19-implications-cews" target="_blank" rel="noreferrer noopener">
					“all or nothing” system
				</a>{` `}
				dependent on a 30% decline in revenue “original system”, to a {` `}
				<a className="text-primary-light font-weight-bold" href="https://www.videotax.com/web-tips-articles/major-cews-update-increased-amounts-lower-thresholds" target="_blank" rel="noreferrer noopener">
					scaling system
				</a>{` `}
				(comprised of a top-up subsidy and base subsidy) available from the first dollar of revenue decline “new system”.
			</p>
			<p>
				Important: The rules for calculating specific subsidies and eligibility are very complex and dynamic. Professional assistance should be sought. See {` `}
				<a href="#disclaimers" className="text-primary-light font-weight-bold">Disclaimer below</a>.
			</p>
			<p>UPDATED MARCH 7<sup>th</sup>, 2020</p>
		</React.Fragment>
	);
};

export default Lead;
