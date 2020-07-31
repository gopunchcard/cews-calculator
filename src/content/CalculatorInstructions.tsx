import React from 'react';

interface IProps { }

const CalculatorInstructions: React.FC<IProps> = (_props: IProps) => {
	return (
		<ol className="mb-0 text-monospace small font-weight-bold">
			<li>
				Enter the gross income for the month relating to period you want to claim. 
			</li>
			<li>
				Enter gross income for the 3 previous months.
			</li>
			<li>
				Enter the 2019 gross income for each of those 4 same months (month of claim plus 3 prior).
			</li>
			<li>
				To see the <a href="#general-notes-7">Alt.<sup>7</sup></a> calculations, enter gross revenue for January and February of 2020.
			</li>
		</ol>		
	);
};

export default CalculatorInstructions;
