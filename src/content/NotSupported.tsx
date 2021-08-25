import React from 'react';

interface IProps { }

const NotSupported: React.FC<IProps> = (_props: IProps) => {
	return (
		<div className="bg-texture-gray-900 border-left border-primary border-width-lg mt-3 mt-md-5 mb-5 mb-md-7 p-4 large rounded-right shadow">
			<p>
				<strong className="display-2 text-heading">No longer supported as of June 6, 2021</strong>
			</p>
			<p>
				Thank you for visiting the Canada Emergency Wage Subsidy Estimator! The estimator was supported up until June 6, 2021.  At that point modifications to the Canada Emergency Wage Subsidy (CEWS) program were introduced along with an alternative subsidy entitled the Canada Recovery Hiring Program.
			</p>
			<p>
				For calculations for periods commencing June 6, 2021 or later, see{' '}
				<a href="https://www.canada.ca/en/revenue-agency/services/subsidy/recovery-hiring-program/crhp-compare-cews.html" target="_blank" rel="noopener noreferrer" className="text-primary-light font-weight-bold">
					CEWS vs. CERS
				</a>.
			</p>
		</div>
	);
};

export default NotSupported;
