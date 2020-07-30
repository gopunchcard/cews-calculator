import React from 'react';
import Year from './year';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';
import { Modal } from './components';

interface IProps {
}

const App: React.FC<IProps> = ( props: IProps ) => {
	const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const defaultValues2019 = [83000, 190000, 140000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
	const defaultValues2020 = [85000, 85000, 140000, 65000, 100000, 60000, 8000, 85000, 8000, 0, 0, 0];
	const periodStart = 2;

	const [values2019, setValues2019] = React.useState<Array<any>>(defaultValues2019);
	const [values2020, setValues2020] = React.useState<Array<any>>(defaultValues2020);
	const [resultsGeneral, setResultsGeneral] = React.useState<number[]>([]);
	const [resultsAlt, setResultsAlt] = React.useState<number[]>([]);
	const [fieldsWithErrors, setfieldsWithErrors] = React.useState<string[]>([]);
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

	React.useEffect(init, []);
	React.useEffect(update, [values2019, values2020]);
	return (
		<div className="container py-4">
			<h1 className="h4 mb-3">
				Canadian Wage Subsidy Calculator
			</h1>
			<div className="row">
				<div className="col-lg-4">
					<div className="alert bg-light small">
						<h2 className="h6">Canada Emergency Wage Subsidy Estimator (Periods 1-9)</h2>
						<p>This estimator reflects the authors’ original understanding of the Canada Emergency Wage Subsidy Rules.  Note that there are many exceptions and variables associated with the rules.  Further, as this program is new, there is limited guidance and court/government interpretation.  Due to the high level of uncertainties, variables, and potential for error, the results of the estimator cannot be relied upon for the filing of a claim, but rather, is meant to be used for estimation purposes.  Professional assistance from your accountant should be sought.  No party associated with the creation, presentation, or distribution of the estimator may be held liable in any way.  Further details on the terms of use can be found here (link this to a disclaimer).</p>
					</div>
					<button onClick={() => setIsModalOpen(true)}>Open test modal</button>
				</div>
				<div className="col-lg-8">
					<div className="row">
						<div className="col-2">
							&nbsp;
						</div>
						<div className="col-3 text-uppercase text-monospace small">
							2019
						</div>
						<div className="col-3 text-uppercase text-monospace small">
							2020
						</div>
						<div className="col-2 text-uppercase text-monospace small">
							General
						</div>
						<div className="col-2 text-uppercase text-monospace small">
							Alt.
						</div>
					</div>
					{values2019.map((item, index: number) => {
						return (
							<div className={`row ${index % 2 && 'bg-light'}`}>
								<div className="col-2 text-uppercase text-monospace small text-right">
									{	index - periodStart >= 0 && index - periodStart + 1 } { monthLabels[index] }
								</div>
								<div className="col-3">
									<div className="input-group mb-3">
										<div className="input-group-prepend">
											<span className="input-group-text">$</span>
										</div>
										<NumberFormat
											thousandSeparator=","
											className={classnames('form-control', fieldsWithErrors.includes(`field-2019-${index}`) && "is-invalid")}
											value={values2019[index]}
											onValueChange={({floatValue}) => {
												updateArray2019(index, floatValue);
												if( floatValue && Math.sign(floatValue) !== -1 ) {
													removeError(`field-2019-${index}`);
												} else {
													addError(`field-2019-${index}`);
												}
											}}
										/>
									</div>
								</div>
								<div className="col-3">
									<div className="input-group mb-3">
										<div className="input-group-prepend">
											<span className="input-group-text">$</span>
										</div>
										<NumberFormat
											thousandSeparator=","
											className={classnames('form-control', fieldsWithErrors.includes(`field-2020-${index}`) && "is-invalid")}
											value={values2020[index]}
											onValueChange={({floatValue}) => {
												updateArray2020(index, floatValue);
												if( floatValue && Math.sign(floatValue) !== -1 ) {
													removeError(`field-2020-${index}`);
												} else {
													addError(`field-2020-${index}`);
												}
											}}
										/>
									</div>	
								</div>
								<div className="col-2">
									{resultsGeneral[index] !== undefined ? ( `${Math.round(resultsGeneral[index] * 100)}%`) : ""}
								</div>
								<div className="col-2">
									{resultsAlt[index] !== undefined ? ( `${Math.round(resultsAlt[index] * 100)}%`) : ""}
								</div>
							</div>
						)
					})}					
				</div>
			</div>
			<Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} shouldCloseOnEsc={true}>
				hello
			</Modal>
		</div>
	);

	function updateArray2019(arrindex: number, value: any) {
		const oldValues = [...values2019];
		oldValues[arrindex] = value;
		setValues2019(oldValues);
	}

	function updateArray2020(arrindex: number, value: any) {
		const oldValues = [...values2020];
		oldValues[arrindex] = value;
		setValues2020(oldValues);
	}
	function init() {
		const year = new Year(defaultValues2019, defaultValues2020, [], []);
		year.getvalues();
		setResultsGeneral(year.finalGeneralResults);
		setResultsAlt(year.finalAltResults);
	}

	function addError(field: string) {
		if(!fieldsWithErrors.includes(field)) {
			setfieldsWithErrors([...fieldsWithErrors, field]);
		}
	}

	function removeError(field: string) {
		if(fieldsWithErrors.includes(field)) {
			const i = fieldsWithErrors.findIndex((v) => v === field);
			const oldValues = [...fieldsWithErrors];
			oldValues.splice(i, 1);
			setfieldsWithErrors(oldValues);
		}
	}

	function update() {
		console.log(fieldsWithErrors.length);
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
