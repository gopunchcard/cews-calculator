import React from 'react';
import Year from './year';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';
import { ReactComponent as IconArrowRight } from './components/icons/icon-arrow-right.svg';

interface IProps { }

const Calculator: React.FC<IProps> = (props: IProps) => {
	const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
	const defaultValues2019 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	const defaultValues2020 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	const defaultRenumeration = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	const defaultEnabledPeriods = [false, false, false, false, false, false, false, false, false, false, false, false];
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
	const [renumerationValues, setRenumeration] = React.useState<Array<number>>(defaultRenumeration);



	React.useEffect(init, []);
	React.useEffect(update, [values2019, values2020]);

	return (
		<React.Fragment>
			<div className="mb-4 p-3 bg-quinary-light border border-dark">
				<h2 className="h6 text-monospace text-uppercase mb-2">
					Choose the months you want to calculate the subsidy for
				</h2>
				<div className="row">
					{monthLabels.map((month, index: number) => index - periodStart >= 0 && (
						<div className="col-auto" key={month}>
							<label className="mb-0 py-2 text-monospace" htmlFor={`enable-${month}`}>
								<input id={`enable-${month}`} type="checkbox" value={index} onChange={updateEnabledPeriods} checked={enabledPeriods[index]} className="mr-2" />
								{month}
							</label>
						</div>
					))}
				</div>
			</div>
			<div className="row mx-lg-0">
				<div className="col-lg px-lg-0 py-lg-3">
					<div className="row mx-md-0">
						<h2 className="d-none d-md-block col-12 px-lg-0 h6 text-sm-center text-monospace text-uppercase">
							Enter your gross revenue below
						</h2>
						<div className="d-none d-md-block col-md-auto px-md-0">
							<table className="table table-sm table-striped table-borderless mb-0">
								<thead>
									<tr className="text-monospace">
										<th className="px-3 line-height-1 visibil">
											<br className="d-none d-lg-inline" />Period
										</th>
										<th className="d-none d-lg-table-cell px-3 pl-lg-1 line-height-1">
											Reference<br />Month
										</th>
									</tr>
								</thead>
								<tbody>
									{values2019.map((item, index: number) => {
										return (
											<tr key={`row-labels-${index}`} className={classnames(!checkEnabledPeriods(index) && 'disabled')}>
												<td className="d-lg-none px-3 text-uppercase text-monospace small text-nowrap align-middle">
													<div className="d-flex flex-column justify-content-center form-control px-0 bg-transparent border-transparent">
														<small>
															{monthLabels[index]}
															<small className="d-block mt-n2">
																{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
															</small>
														</small>
													</div>
												</td>
												<td className="d-none d-lg-table-cell px-3">
													<div className="form-control bg-transparent border-transparent px-0">
														<small className="text-uppercase text-monospace text-right">{index - periodStart >= 0 ? index - periodStart + 1 : '-'}</small>
													</div>
												</td>
												<td className="d-none d-lg-table-cell px-3 pl-lg-1">
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
						<div className="col-md px-md-0">
							<h2 className="d-md-none h6 text-monospace text-uppercase">
								Enter your 2019 revenue
							</h2>
							<table className="table table-sm table-striped table-borderless mb-0">
								<thead>
									<tr>
										<th className="d-none d-md-table-cell px-3 px-md-1 text-monospace line-height-1">
											<br className="d-none d-lg-inline" />2019
										</th>
									</tr>
								</thead>
								<tbody>
									{values2019.map((item, index: number) => (
										<tr key={`column-2019-${index}`} className={classnames(!checkEnabledPeriods(index) && 'd-none d-md-table-row disabled', index < periodStart && checkEnabledPeriods(index) && 'd-none d-md-table-row')}>
											<td className="d-md-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">
												{monthLabels[index]}
												<small className="d-block mt-n2">
													{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
												</small>
											</td>
											<td className="pr-3">
												{index >= periodStart ? (
													<div className={classnames("input-group", !checkEnabledPeriods(index) && 'disabled')}>
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
															<small className="d-inline-flex align-items-center align-middle mx-md-n3">
																Field for Alt.<IconArrowRight />
															</small>
														</div>
													)}
											</td>
										</tr>
									))}
									{!enabledPeriods.includes(true) && (
										<tr className="bg-transparent d-md-none"><td className="px-0 font-italic text-muted">No months selected. Choose the months you want to calculate above.</td></tr>
									)}
								</tbody>
							</table>
						</div>
						<div className="col-md mt-4 mt-md-0 px-md-0">
							<h2 className="d-md-none h6 text-monospace text-uppercase">
								Enter your 2020 revenue
							</h2>
							<table className="table table-sm table-striped table-borderless mb-0">
								<thead>
									<tr>
										<th className="d-none d-md-table-cell px-3 px-md-1 text-monospace line-height-1">
											<br className="d-none d-lg-inline" />2020
										</th>
									</tr>
								</thead>
								<tbody>
									{values2020.map((item, index: number) => {
										return (
											<tr key={`column-2020-${index}`} className={classnames(!checkEnabledPeriods(index) && 'd-none d-md-table-row disabled')}>
												<td className="d-md-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">
													{monthLabels[index]}
													<small className="d-block mt-n2">
														{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
													</small>
												</td>
												<td className="pr-3">
													<div className={classnames("input-group", !checkEnabledPeriods(index) && 'disabled')}>
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
									{!enabledPeriods.includes(true) && (
										<tr className="bg-transparent d-md-none"><td className="px-0 font-italic text-muted">No months selected. Choose the months you want to calculate above.</td></tr>
									)}
								</tbody>
							</table>
						</div>
						<div className="col-md mt-4 mt-md-0 px-md-0">
							<h2 className="d-md-none h6 text-monospace text-uppercase">
								Eligible Renumeration<a href="#general-notes-8"><sup>8</sup></a>
							</h2>
							<table className="table table-sm table-striped table-borderless mb-0">
								<thead>
									<tr className="text-monospace">
										<th className="d-none d-md-table-cell px-3 px-md-1 text-monospace line-height-1">
											Eligible<br className="d-none d-lg-inline" /> Renumeration<a href="#general-notes-8"><sup>8</sup></a>
										</th>
									</tr>
								</thead>
								<tbody>
									{renumerationValues.map((item, index: number) => {
										return (
											<tr key={`column-2020-${index}`} className={classnames(!checkEnabledPeriods(index) && 'disabled', !enabledPeriods[index] && 'd-none d-md-table-row')}>
												<td className="d-md-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">
													{monthLabels[index]}
													<small className="d-block mt-n2">
														{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
													</small>
												</td>
												<td className="pr-3">
													<div className={classnames("input-group", !enabledPeriods[index] && 'disabled')}>
														<div className="input-group-prepend">
															<span className="input-group-text">$</span>
														</div>
														<NumberFormat
															thousandSeparator=","
															className={
																classnames(
																	'form-control text-right',
																	fieldsWithErrors.includes(`field-ren-${index}`) && "is-invalid"
																)
															}
															value={renumerationValues[index]}
															onValueChange={({ floatValue }) => {
																updateArrayRenumeration(index, floatValue);
																if (floatValue !== undefined && Math.sign(floatValue) !== -1) {
																	removeError(`field-ren-${index}`);
																} else {
																	addError(`field-ren0-${index}`);
																}
															}}
															disabled={!enabledPeriods[index]}
														/>
													</div>
												</td>
											</tr>
										)
									})}
									<tr className="d-none d-md-table-row">
										<td className="d-md-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">SubTotal</td>
										<td className="pr-3">Period 1-4 Subtotal</td>
									</tr>
									<tr className="d-none d-md-table-row">
										<td className="d-md-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">SubTotal</td>
										<td className="pr-3">Period 5-9 Subtotal</td>
									</tr>
									{!enabledPeriods.includes(true) && (
										<tr className="bg-transparent d-md-none"><td className="px-0 font-italic text-muted">No months selected. Choose the months you want to calculate above.</td></tr>
									)}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div className="align-self-start col-lg-auto mt-4 mt-lg-0 py-4 px-lg-0 pt-lg-3 pb-lg-0 bg-quinary">
					<h2 className="h6 text-md-center text-monospace text-uppercase">
						Estimated subsidy
					</h2>
					<table className="table table-sm table-striped table-borderless mb-0">
						<thead>
							<tr>
								<th className="d-none d-md-table-cell d-lg-none pl-3 text-monospace line-height-1">
									Period
								</th>
								<th className="px-3 text-monospace text-right line-height-1">
									<span><br className="d-none d-lg-inline-block" />General</span>
								</th>
								<th className="px-3 text-monospace text-right line-height-1">
									<br className="d-none d-lg-inline-block" />Alt.<a href="#general-notes-6"><sup>6</sup></a>
								</th>
							</tr>
						</thead>
						<tbody>
							{values2019.map((item, index: number) => {
								return (
									<tr key={`column-results-${index}`} className={classnames(!checkEnabledPeriods(index) && 'disabled', !enabledPeriods[index] && 'd-none d-lg-table-row')}>
										<td className="pl-3 text-uppercase text-monospace small text-nowrap align-middle d-lg-none">
											{monthLabels[index]}
											<small className="d-block mt-n2">
												{index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
											</small>
										</td>
										<td className="pl-lg-3 pr-lg-2">
											<div
												className={classnames(
													"d-flex flex-column justify-content-center form-control px-0 bg-transparent border-transparent text-right line-height-1 min-width-5",
													resultsGeneral[index] > 0 && 'font-weight-bold',
													!enabledPeriods[index] && 'disabled',
												)}
											>
												{(enabledPeriods[index] && (resultsGeneral[index] !== undefined)) ? (
													getGeneralSubsidyAmount(index))
													:
													"-"
												}
											</div>
										</td>
										<td className="pl-lg-2 pr-3">
											<div
												className={classnames(
													"d-flex flex-column justify-content-center form-control px-0 bg-transparent border-transparent text-right line-height-1 min-width-5",
													resultsAlt[index] > 0 && 'font-weight-bold',
													!enabledPeriods[index] && 'disabled',
												)}
											>
												{(enabledPeriods[index] && (resultsAlt[index] !== undefined)) ? (
													getAltSubsidyAmount(index))
													:
													"-"
												}
											</div>
										</td>
									</tr>
								)
							})}
							<tr className="d-none d-lg-table-row">

								<td className="pl-lg-3 pr-lg-2" >{getGeneralSubTotals1to4()}</td>
								<td className="pl-lg-2 pr-3" >{getAltSubTotals1to4()}</td>
							</tr>
							<tr className="d-none d-lg-table-row">

								<td className="pl-lg-3 pr-lg-2" >{getGeneralSubTotals5to9()}</td>
								<td className="pl-lg-2 pr-3" >{getAltSubTotals5to9()}</td>
							</tr>
							{!enabledPeriods.includes(true) && (

								<tr className="bg-transparent d-md-none"><td className="px-0 font-italic text-muted" colSpan={3}>No months selected. Choose the months you want to calculate above.</td></tr>
							)}
						</tbody>
					</table>
				</div>
			</div>
			<div className="text-center text-lg-left mt-4 mt-lg-3">
				<button className="btn btn-outline-primary" onClick={reset}>Reset fields</button>
			</div>
		</React.Fragment>
	);

	function getGeneralSubsidyAmount(index: number) {
		return getSubsidyAmount(renumerationValues[index], resultsGeneral[index])
	}
	function getAltSubsidyAmount(index: number) {
		return getSubsidyAmount(renumerationValues[index], resultsAlt[index])
	}
	function getSubsidyAmount(renumerationValue: number, percentLost: number) {

		if (renumerationValue > 0) {
			return (
				<React.Fragment>
					${round((percentLost / 100) * renumerationValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<br />
					<span className="small font-weight-inherit">({round(percentLost)}%)</span>
				</React.Fragment>
			);
		}
		return round(percentLost) + "%"
	}

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
	function updateArrayRenumeration(arrindex: number, value: any) {
		const oldValues = [...renumerationValues];
		oldValues[arrindex] = value;
		setRenumeration(oldValues);
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
	function getGeneralSubTotals1to4() {
		let total = 0;
		for (let i = 2; i < 6; i++) {
			total += (resultsGeneral[i]) * renumerationValues[i];
		}
		return '$' + round(total / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	function getAltSubTotals1to4() {
		let total = 0;
		for (let i = 2; i < 6; i++) {
			total += (resultsAlt[i]) * renumerationValues[i];
		}
		return '$' + round(total / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	function getGeneralSubTotals5to9() {
		let total = 0;
		for (let i = 6; i < 11; i++) {
			total += (resultsGeneral[i]) * renumerationValues[i];
		}
		return '$' + round(total / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	function getAltSubTotals5to9() {
		let total = 0;
		for (let i = 6; i < 11; i++) {
			total += (resultsAlt[i]) * renumerationValues[i];
		}
		return '$' + round(total / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	function reset() {
		setValues2019(defaultValues2019);
		setValues2020(defaultValues2020);
		setRenumeration(defaultRenumeration);
		setEnabledPeriods(defaultEnabledPeriods);
		init();
		document.getElementById("wrapper-calculator")!.scrollIntoView({ behavior: "smooth" });
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

};

export default Calculator;
