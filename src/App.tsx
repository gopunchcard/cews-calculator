import React from 'react';
import Year from './year';

interface IProps {
}

const App: React.FC<IProps> = (props: IProps) => {
	const defaultValues2019 = [83000, 190000, 140000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
	const defaultValues2020 = [85000, 85000, 140000, 65000, 100000, 60000, 8000, 85000, 8000, 0, 0, 0];

	const [values2019, setValues2019] = React.useState<Array<any>>(defaultValues2019);
	const [values2020, setValues2020] = React.useState<Array<any>>(defaultValues2020);

	let year = new Year(values2019, values2020, [], []);
	year.getvalues();
	let results = year.finalGeneralResults;
	let altResults = year.finalAltResults;

	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-primary">
				<a className="navbar-brand" href="#">CEWS Calculator</a>
			</nav>
			<div className="row">
				<div className="col-lg-3">
					<div className="alert alert-warning">
						Canada Emergency Wage Subsidy Estimator (Periods 1-9)!
						This estimator reflects the authors’ original understanding of the Canada Emergency Wage Subsidy Rules.  Note that there are many exceptions and variables associated with the rules.  Further, as this program is new, there is limited guidance and court/government interpretation.  Due to the high level of uncertainties, variables, and potential for error, the results of the estimator cannot be relied upon for the filing of a claim, but rather, is meant to be used for estimation purposes.  Professional assistance from your accountant should be sought.  No party associated with the creation, presentation, or distribution of the estimator may be held liable in any way.  Further details on the terms of use can be found here (link this to a disclaimer).
					</div>
				</div>
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-3">
							2019
						</div>
						<div className="col-lg-3">
							2020
						</div>
						<div className="col-lg-3">
							General
						</div>
						<div className="col-lg-3">
							Alternative</div>
					</div>
					{values2019.map((item, index: number) => {
						return (
							<div className="row">
								<div className="col-lg-3">
									<input
										className="form-control"
										value={item}
										onChange={(val) => updateArray2019(index, val)}
									/>
								</div>
								<div className="col-lg-3">
									<input
										className="form-control"
										value={values2020[index]}
										onChange={(val) => updateArray2020(index, val)}
									/>
								</div>
								<div className="col-lg-3">
									{Math.round(results[index] * 100)}%
								</div>
								<div className="col-lg-3">
									{Math.round(altResults[index] * 100)}%
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);

	function updateArray2019(arrindex: number, event: any) {
		const oldValues = [...values2019];
		const value = event.target.value;
		oldValues[arrindex] = value;
		setValues2019(oldValues);
	}

	function updateArray2020(arrindex: number, event: any) {
		const oldValues = [...values2020];
		const value = event.target.value;
		oldValues[arrindex] = value;
		setValues2020(oldValues);
	}

};

export default App;
