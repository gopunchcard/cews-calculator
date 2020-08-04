import React from 'react';
import Year from './year';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';
import { ReactComponent as IconArrowRight } from './components/icons/icon-arrow-right.svg';

interface IProps { }

const Calculator: React.FC<IProps> = (props: IProps) => {
	const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const defaultValues2019 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	const defaultValues2020 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	const defaultEnabledPeriods = [false, false, false, false, false, false, false, false, false, false, false, false];
	const mobileEnabledPeriods = [true, true, true, true, true, true, true, true, true, true, true, true];
	const periodStart = 2;
	const enabledValues = [
		[2, 3, 4, 5, 6, 7, 8, 9, 10, 11], //Jan
		[2, 3, 4, 5, 6, 7, 8, 9, 10, 11], //Feb

		[2, 3], // Mar = Feb and March
		[3, 4, 6],
		[4, 5, 6, 7],
		[5, 6, 7, 8],
		[6, 7, 8, 9],
		[7, 8, 9, 10],
		[8, 9, 10],
		[9, 10],
		[10],
		[]
	];
	const [values2019, setValues2019] = React.useState<Array<any>>(defaultValues2019);
	const [values2020, setValues2020] = React.useState<Array<any>>(defaultValues2020);
	const [resultsGeneral, setResultsGeneral] = React.useState<number[]>([]);
	const [resultsAlt, setResultsAlt] = React.useState<number[]>([]);
	const [fieldsWithErrors, setfieldsWithErrors] = React.useState<string[]>([]);

	const [enabledPeriods, setEnabledPeriods] = React.useState<boolean[]>(defaultEnabledPeriods);

	React.useEffect(init, []);
	React.useEffect(update, [values2019, values2020]);
	var x = window.matchMedia("(max-width: 991px)")
	checkWindowSize(x) // Call listener function at run time
	x.addListener(checkWindowSize)

	return (
		<div className="row mx-lg-0">
			<div className="col-lg px-lg-0 py-lg-3">
				<div className="row mx-lg-0">
					<h2 className="d-none d-sm-block col-12 px-lg-0 h6 text-sm-center text-monospace text-uppercase">
						Enter your revenue below
					</h2>
					<div className="d-none d-lg-block col-lg-auto px-lg-0">
						<table className="table table-sm table-striped table-borderless mb-0">
							<thead>
								<tr className="text-monospace">
									<th className="px-3">
										<br />Enable
									</th>
									<th className="px-3">
										<br />Period
									</th>
									<th className="px-3">
										Reference<br />Month
									</th>
								</tr>
							</thead>
							<tbody>
								{values2019.map((item, index: number) => {
									return (
										<tr key={`row-labels-${index}`}>
											<td className="px-3">
												<div className="form-control bg-transparent border-transparent px-0">
													<input type="checkbox" disabled={index - periodStart < 0} value={index} onChange={updateEnabledPeriods} checked={enabledPeriods[index]} />

												</div>
											</td>
											<td className="px-3">
												<div className="form-control bg-transparent border-transparent px-0">
													<small className="text-uppercase text-monospace text-right">{index - periodStart >= 0 ? index - periodStart + 1 : '-'}</small>
												</div>
											</td>

											<td className="px-3">
												<div className="form-control bg-transparent border-transparent px-0">
													<small className="text-uppercase text-monospace text-right">{monthLabels[index]}</small>
												</div>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className="col-sm-6 col-lg pr-sm-1 px-lg-0">
						<h2 className="d-sm-none h6 text-monospace text-uppercase">
							Enter your 2019 revenue
						</h2>
						<table className="table table-sm table-striped table-borderless mb-0">
							<thead>
								<tr>
									<th className="d-none d-sm-block px-3 px-lg-1 text-monospace">
										<br className="d-none d-lg-inline" />2019
									</th>
								</tr>
							</thead>
							<tbody>
								{values2019.map((item, index: number) => {
									return (
										<tr key={`column-2019-${index}`} className={classnames(index < periodStart && 'd-none d-sm-table-row')}>
											<td className="d-lg-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">
												{monthLabels[index]}
												<small className="d-block mt-n2">
													{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
												</small>
											</td>
											<td className="pr-3">
												{index >= periodStart ? (
													<div className="input-group">
														<div className="input-group-prepend">
															<span className="input-group-text">$</span>
														</div>
														<NumberFormat
															thousandSeparator=","
															className={
																classnames(
																	'form-control text-right',
																	fieldsWithErrors.includes(`field-2019-${index}`) && "is-invalid",
																)
															}
															value={index >= 2 && values2019[index]}
															onValueChange={({ floatValue }) => {
																updateArray2019(index, floatValue);
																if (floatValue !== undefined && Math.sign(floatValue) !== -1) {
																	removeError(`field-2019-${index}`);
																} else {
																	addError(`field-2019-${index}`);
																}
															}}
															disabled={!checkEnabledPeriods(index)}
														/>
													</div>
												) : (
														<div className="form-control bg-transparent border-transparent px-0 text-right text-monospace">
															<small className="d-inline-flex align-items-center align-middle mx-n4 mx-lg-n3">
																Field for Alt.<IconArrowRight />
															</small>
														</div>
													)}
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className="col-sm-6 col-lg mt-4 mt-sm-0 pl-sm-1 px-lg-0">
						<h2 className="d-sm-none h6 text-monospace text-uppercase">
							Enter your 2020 revenue
						</h2>
						<table className="table table-sm table-striped table-borderless mb-0">
							<thead>
								<tr>
									<th className="d-none d-sm-block px-3 px-lg-1 text-monospace">
										<br className="d-none d-lg-inline" />2020
									</th>
								</tr>
							</thead>
							<tbody>
								{values2020.map((item, index: number) => {
									return (
										<tr key={`column-2020-${index}`}>
											<td className="d-lg-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">
												{monthLabels[index]}
												<small className="d-block mt-n2">
													{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
												</small>
											</td>
											<td className="pr-3">
												<div className="input-group">
													<div className="input-group-prepend">
														<span className="input-group-text">$</span>
													</div>
													<NumberFormat
														thousandSeparator=","
														className={
															classnames(
																'form-control text-right',
																fieldsWithErrors.includes(`field-2020-${index}`) && "is-invalid"
															)
														}
														value={values2020[index]}
														onValueChange={({ floatValue }) => {
															updateArray2020(index, floatValue);
															if (floatValue !== undefined && Math.sign(floatValue) !== -1) {
																removeError(`field-2020-${index}`);
															} else {
																addError(`field-2020-${index}`);
															}
														}}
														disabled={!checkEnabledPeriods(index)}
													/>
												</div>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
				<div className="text-center text-lg-left">
					<button className="btn btn-outline-primary mt-4" onClick={reset}>Reset fields</button>
				</div>
			</div>
			<div className="col-lg-auto mt-4 mt-lg-0 pt-4 px-lg-0 pt-lg-3 bg-quinary">
				<h2 className="h6 px-sm-3 text-sm-center text-monospace text-uppercase">
					Estimated subsidy
				</h2>
				<table className="table table-sm table-striped table-borderless mb-0">
					<thead>
						<tr>
							<th className="d-lg-none px-3 text-monospace">
								Reference Month
							</th>
							<th className="px-3 text-monospace text-right">
								<span><br className="d-none d-lg-inline-block" />General</span>
							</th>
							<th className="px-3 text-monospace text-right">
								<a href="#general-notes-7"><br className="d-none d-lg-inline-block" />Alt.<sup>7</sup></a>
							</th>
						</tr>
					</thead>
					<tbody>
						{values2019.map((item, index: number) => {
							return (
								<tr key={`column-results-${index}`}>
									<td className="px-3 text-uppercase text-monospace small text-nowrap align-middle d-lg-none">
										{monthLabels[index]}
										<small className="d-block mt-n2">
											{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
										</small>
									</td>
									<td className="px-3">
										<div className="form-control px-0 bg-transparent border-transparent text-right">
											{(enabledPeriods[index] && (resultsGeneral[index] !== undefined)) ? (
												<span className={classnames(resultsGeneral[index] > 0 && 'font-weight-bold')}>{round(resultsGeneral[index])}%</span>)
												:
												"-"
											}
										</div>
									</td>
									<td className="px-3">
										<div className="form-control px-0 bg-transparent border-transparent text-right">
											{(enabledPeriods[index] && (resultsAlt[index] !== undefined)) ? (
												<span className={classnames(resultsAlt[index] > 0 && 'font-weight-bold')}>{round(resultsAlt[index])}%</span>)
												:
												"-"
											}
										</div>
									</td>
								</tr>
							)
						})}
						<tr className="bg-quinary border-top border-dark">
							<td colSpan={2} className="d-none d-lg-table-cell pb-0 text-uppercase text-monospace small text-nowrap text-center">Average Subsidy</td>
						</tr>
						<tr className="bg-quinary">
							<td className="px-3 text-uppercase text-monospace small text-nowrap align-middle d-lg-none">
								<small className="font-weight-bold">
									Average Subsidy
								</small>
							</td>
							<td className="px-3">
								<div className="form-control px-0 bg-transparent border-transparent text-right">
									{resultsGeneral[0] !== undefined ? (
										<span className="font-weight-bold">{round(showAverage(resultsGeneral))}%</span>)
										:
										"-"
									}
								</div>
							</td>
							<td className="px-3">
								<div className="form-control px-0 bg-transparent border-transparent text-right">
									{resultsAlt[0] !== undefined ? (
										<span className="font-weight-bold">{round(showAverage(resultsAlt))}%</span>)
										:
										"-"
									}
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
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

	function updateEnabledPeriods(event: React.ChangeEvent<HTMLInputElement>) {
		const oldValues = [...enabledPeriods];
		oldValues[parseInt(event.target.value)] = event.target.checked;
		setEnabledPeriods(oldValues);
	}
	function init() {
		const year = new Year(defaultValues2019, defaultValues2020, [], []);
		year.getvalues();
		setResultsGeneral(year.finalGeneralResults);
		setResultsAlt(year.finalAltResults);
	}

	function reset() {
		setValues2019(defaultValues2019);
		setValues2020(defaultValues2020);
		setEnabledPeriods(defaultEnabledPeriods);
		init();
	}

	function addError(field: string) {
		if (!fieldsWithErrors.includes(field)) {
			setfieldsWithErrors([...fieldsWithErrors, field]);
		}
	}

	function removeError(field: string) {
		if (fieldsWithErrors.includes(field)) {
			const i = fieldsWithErrors.findIndex((v) => v === field);
			const oldValues = [...fieldsWithErrors];
			oldValues.splice(i, 1);
			setfieldsWithErrors(oldValues);
		}
	}

	function round(input: number) {
		return Math.round(input * 100);
	}

	function showAverage(input: number[]) {
		const numItems = input.length;
		let total = input.reduce(function (a, b) {
			return a + b;
		}, 0);
		return total / numItems;
	}

	function update() {
		if (fieldsWithErrors.length === 0) {
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

	function checkEnabledPeriods(index: number) {
		let enableIfChecked = enabledValues[index];
		for (let i = 0; i < enableIfChecked.length; i++) {
			if (enabledPeriods[enableIfChecked[i]] === true)
				return true;
		}
		return false;
	}

	function checkWindowSize(x: any) {
		if (x.matches) { // If media query matches
			console.log('small');
			if (enabledPeriods.includes(false))
				setEnabledPeriods(mobileEnabledPeriods);
		} else {
			console.log('big');
			// if (enabledPeriods.includes(true))
			// 	setEnabledPeriods(defaultEnabledPeriods);
		}
	}


};

export default Calculator;
