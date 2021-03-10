import React from 'react';

interface IProps { }

const Updates: React.FC<IProps> = (_props: IProps) => {
	return (
		<div className="small" id="updates">
			<h3 className="h6 text-uppercase">Updates:</h3>
			<ul>
				<li>
					<strong>V7 (March 7, 2020)</strong>
					<ol type="a">
						<li> Added in calculations for Periods 14-16</li>
					</ol>
				</li><li>
					<strong>V6 (March 1, 2020)</strong>
					<ol type="a">
						<li> Corrected calculations for Periods 11-13 in relation to the interaction between the base subsidy and safe harbour rules. </li>
					</ol>
				</li><li>
					<strong>V5 (December 9, 2020)</strong>
					<ol type="a">
						<li>Added in calculations for Periods 11-13 per November 30, 2020 Fall Economic Update.</li>
					</ol>
				</li>
				<li>
					<strong>V4 (October 9, 2020)</strong>
					<ol type="a">
						<li>Added calculation for Period 10 and adjusted calculations for Periods 8 and 9 per October 14, 2020 backgrounder (see note 13).</li>
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
