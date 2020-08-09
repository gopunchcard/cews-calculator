import React from 'react';

interface IProps { }

const Updates: React.FC<IProps> = (_props: IProps) => {
	return (
		<div className="small" id="updates">
			<hr />
			<h3 className="h6 text-uppercase">Updates:</h3>
			<ul>
				<li><strong>V2 (August 9, 2020)</strong></li>
				<ol type="a">
					<li>Eligible remuneration column and calculation added.</li>
					<li>Correction to minor calculation glitches for Periods 4 and 9.</li>
				</ol>
				<li><strong>V1 (August 5, 2020)</strong></li>
				<ol type="a">
					<li>Initial launch.</li>
				</ol>
			</ul>
		</div>
	);
};

export default Updates;
