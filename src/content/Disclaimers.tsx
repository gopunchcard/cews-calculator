import React from 'react';

interface IProps { }

const Disclaimers: React.FC<IProps> = (_props: IProps) => {
	return (
		<div className="small" id="disclaimers">
			<p>
				The calculator is intended for financial professionals.
			</p>
			<p>
				The calculator is provided for general informational purposes only.  Several assumptions and operations in the calculator deal with dynamic, time-sensitive and complex legislation.  We have endeavored to ensure the tool provided to you is accurate at the time of each update. However, all information provided to you is provided “as is”, with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied.
			</p>
			<p>
				The calculator may not apply to, or incorporate, your particular facts and circumstances. Information provided should not be relied upon as a substitute for specialized professional advice in connection with any particular matter.
			</p>
			<p className="mb-0">
				Neither Video Tax News Inc., Punchcard Systems, Covidcontinuity.com, nor any of their related partnerships or corporations, or their directors, agents, contractors, contributors or employees will be liable to you or anyone else for any decision made or action taken in reliance on any information provided to you by or through this calculator for any consequential, special, or similar damages.  Any information provided to you is not a substitute for professional legal, tax, or accounting advice.
			</p>
		</div>
	);
};

export default Disclaimers;
