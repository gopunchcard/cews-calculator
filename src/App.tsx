import React from 'react';
import Year from './year';
import classnames from 'classnames';
interface IProps {
}

const App: React.FC<IProps> = ( props: IProps ) => {
	const defaultValues2019 = [83000, 190000, 140000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
	const defaultValues2020 = [85000, 85000, 140000, 65000, 100000, 60000, 8000, 85000, 8000, 0, 0, 0];

	const [values2019, setValues2019] = React.useState<Array<any>>(defaultValues2019);
	const [values2020, setValues2020] = React.useState<Array<any>>(defaultValues2020);
	const [resultsGeneral, setResultsGeneral] = React.useState<number[]>([]);
	const [resultsAlt, setResultsAlt] = React.useState<number[]>([]);
	const [fieldsWithErrors, setfieldsWithErrors] = React.useState<string[]>([])

	React.useEffect(init, []);
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-primary">
				<a className="navbar-brand" href="#">CEWS Calculator</a>
			</nav>
			<div className="row">
				<div className="col-lg-3">
					<div className="alert alert-warning">
						Canada Emergency Wage Subsidy Estimator (Periods 1-9)
						This estimator reflects the authors’ original understanding of the Canada Emergency Wage Subsidy Rules.  Note that there are many exceptions and variables associated with the rules.  Further, as this program is new, there is limited guidance and court/government interpretation.  Due to the high level of uncertainties, variables, and potential for error, the results of the estimator cannot be relied upon for the filing of a claim, but rather, is meant to be used for estimation purposes.  Professional assistance from your accountant should be sought.  No party associated with the creation, presentation, or distribution of the estimator may be held liable in any way.  Further details on the terms of use can be found here (link this to a disclaimer).
					</div>
				</div>
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-2">
							&nbsp;
						</div>
						<div className="col-lg-3">
							2019
						</div>
						<div className="col-lg-3">
							2020
						</div>
						<div className="col-lg-2">
							General
						</div>
						<div className="col-lg-2">
							Alt.
						</div>
					</div>
					{values2019.map((item, index: number) => {
						return (
							<div className="row">
								<div className="col-lg-2"></div>
								<div className="col-lg-3">
									<div className="input-group mb-3">
										<div className="input-group-prepend">
											<span className="input-group-text">$</span>
										</div>
										<input
											className={classnames('form-control', fieldsWithErrors.includes(`2019${index}`) && "is-invalid")}
											value={item}
											onChange={(evt) => {
												updateArray2019(index, evt);
												if( !isNaN(evt.target.value as any) ) {
													if(fieldsWithErrors.includes(`2019${index}`)) {
														let i = fieldsWithErrors.findIndex((v) => v === `2019${index}`);
														let oldValues = [...fieldsWithErrors];
														oldValues.splice(i, 1);
														setfieldsWithErrors(oldValues);
													}
													update();
												} else {
													setfieldsWithErrors([...fieldsWithErrors, `2019${index}`]);
													clear();
												}
											}}
										/>
									</div>
								</div>
								<div className="col-lg-3">
									<div className="input-group mb-3">
										<div className="input-group-prepend">
											<span className="input-group-text">$</span>
										</div>
										<input
											className={classnames('form-control', fieldsWithErrors.includes(`2020${index}`) && "is-invalid")}
											value={values2020[index]}
											onChange={(evt) => {
												updateArray2020(index, evt);
												if( !isNaN(evt.target.value as any) ) {
													if(fieldsWithErrors.includes(`2020${index}`)) {
														const i = fieldsWithErrors.findIndex((v) => v === `2020${index}`);
														const oldValues = [...fieldsWithErrors];
														oldValues.splice(i, 1);
														setfieldsWithErrors(oldValues);
													}
													update();
												} else {
													setfieldsWithErrors([...fieldsWithErrors, `2020${index}`]);
													clear();
												}
											}}
										/>
									</div>	
								</div>
								<div className="col-lg-2">
									{resultsGeneral[index] !== undefined ? ( `${Math.round(resultsGeneral[index] * 100)}%`) : ""}
								</div>
								<div className="col-lg-2">
									{resultsAlt[index] !== undefined ? ( `${Math.round(resultsAlt[index] * 100)}%`) : ""}
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
	function init() {
		const year = new Year(defaultValues2019, defaultValues2020, [], []);
		year.getvalues();
		setResultsGeneral(year.finalGeneralResults);
		setResultsAlt(year.finalAltResults);
	}
	function update() {
		if ( fieldsWithErrors.length === 0 ) {
			const year = new Year(values2019, values2020, [], []);
			year.getvalues();
			setResultsGeneral(year.finalGeneralResults);
			setResultsAlt(year.finalAltResults);
		} else {
			clear();
		}
	}
	function clear() {
		setResultsGeneral([]);
		setResultsAlt([]);
	}
};

export default App;
