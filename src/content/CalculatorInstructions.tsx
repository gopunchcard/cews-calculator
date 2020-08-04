import React from 'react';

interface IProps { }

const CalculatorInstructions: React.FC<IProps> = (_props: IProps) => {
	return (
		<ol className="mb-0 pl-4 text-monospace small font-weight-bold">
			<li>
				Enable the months you want to determine the subsidy for.
			</li>
			<li>
				Enter your gross revenue<a href="#general-notes-1"><sup>1</sup></a> in the enabled fields.
			</li>
			<li>
				Multiply the resulting calculated percentage by the applicable amount of eligible remuneration8 to estimate your subsidy.
			</li>
		</ol>		
	);
};

export default CalculatorInstructions;
