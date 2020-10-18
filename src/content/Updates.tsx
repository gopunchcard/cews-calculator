import React from 'react';

interface IProps { }

const Updates: React.FC<IProps> = (_props: IProps) => {
	return (
		<div className="small" id="updates">
			<h3 className="h6 text-uppercase">Updates:</h3>
			<ul><li>
				<strong>V4 (October 9, 2020)</strong>
				<ol type="a">
					<li>Added calculation for Period 10 and adjusted calculations for period 9 per October 9, 2020 announcement (see note 13)</li>
				</ol>
			</li>
				<li>
					<strong>V3 (September 30, 2020)</strong>
					<ol type="a">
						<li>Added subtotals and total subsidy.</li>
					</ol>
				</li>
				<li>
					<strong>V2 (August 9, 2020)</strong>
					<ol type="a">
						<li>Eligible remuneration column and calculation added.</li>
						<li>Correction to minor calculation glitches for Periods 4 and 9.</li>
					</ol>
				</li>
				<li>
					<strong>V1 (August 5, 2020)</strong>
					<ol type="a">
						<li>Initial launch.</li>
					</ol>
				</li>
			</ul>
		</div>
	);
};

export default Updates;
