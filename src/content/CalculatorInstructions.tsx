import React from 'react';

interface IProps { }

const CalculatorInstructions: React.FC<IProps> = (_props: IProps) => {
	return (
		<ol className="mb-0 pl-4 text-monospace small font-weight-bold">
			<li>
				Choose the months you want to determine the subsidy for.
			</li>
			<li>
				Enter your gross revenue<a href="#general-notes-1"><sup>1</sup></a> and eligible remuneration<a href="#general-notes-8"><sup>8</sup></a> in the enabled fields.
			</li>
		</ol>		
	);
};

export default CalculatorInstructions;
