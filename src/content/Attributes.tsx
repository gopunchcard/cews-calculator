import React from 'react';

interface IProps { }

const Attributes: React.FC<IProps> = (_props: IProps) => {
	return (
		<p className="mb-0">
			This calculator was created through the volunteer joint efforts of Punchcard Systems, Video Tax News, and Covidcontinuity.com as part of our fight to support and strengthen Canadian businesses and their employees.  We are all in this together – If you have any suggestions for improvements or corrections, please click here (link to an email address).
		</p>
	);
};

export default Attributes;
