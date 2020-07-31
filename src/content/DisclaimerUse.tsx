import React from 'react';

interface IProps { }

const DisclaimerUse: React.FC<IProps> = (_props: IProps) => {
	return (
		<p className="small mb-0">This estimator reflects the authors’ original understanding of the Canada Emergency Wage Subsidy Rules.  Note that there are many exceptions and variables associated with the rules.  Further, as this program is new, there is limited guidance and court/government interpretation.  Due to the high level of uncertainties, variables, and potential for error, the results of the estimator cannot be relied upon for the filing of a claim, but rather, is meant to be used for estimation purposes.  Professional assistance from your accountant should be sought.  No party associated with the creation, presentation, or distribution of the estimator may be held liable in any way.  Further details on the terms of use can be found here (link this to a disclaimer).</p>
	);
};

export default DisclaimerUse;
