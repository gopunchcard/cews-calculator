import React from 'react';
import Year from './year';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';

interface IProps {
}

const Calculator: React.FC<IProps> = ( props: IProps ) => {
	const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const defaultValues2019 = [0, 0, 140000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
	const defaultValues2020 = [85000, 85000, 140000, 65000, 100000, 60000, 8000, 85000, 8000, 0, 0, 0];
	const periodStart = 2;

	const [values2019, setValues2019] = React.useState<Array<any>>(defaultValues2019);
	const [values2020, setValues2020] = React.useState<Array<any>>(defaultValues2020);
	const [resultsGeneral, setResultsGeneral] = React.useState<number[]>([]);
	const [resultsAlt, setResultsAlt] = React.useState<number[]>([]);
	const [fieldsWithErrors, setfieldsWithErrors] = React.useState<string[]>([]);

	React.useEffect(init, []);
	React.useEffect(update, [values2019, values2020]);
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
										Period
									</th>
									<th className="px-3">
										Month
									</th>
								</tr>
							</thead>
							<tbody>
								{values2019.map((item, index: number) => {
									return (
										<tr key={`row-labels-${index}`}>
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
					<div className="col-sm-6 col-lg px-lg-0">
						<h2 className="d-sm-none h6 text-monospace text-uppercase">
							Enter your 2019 revenue
						</h2>
						<table className="table table-sm table-striped table-borderless mb-0">
							<thead>
								<tr>
									<th>
										<span className="d-none d-sm-block text-monospace">2019</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{values2019.map((item, index: number) => {
									return (
										<tr key={`column-2019-${index}`}>
											<td className="d-lg-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">
												{ monthLabels[index] }
												<small className="d-block mt-n2">
													{	index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
												</small>
											</td>
											<td className="pr-3">
												<div className="input-group">
													<div className="input-group-prepend">
														<span className="input-group-text">$</span>
													</div>
													<NumberFormat
														disabled={index < 2} // disabling january & february 2019
														thousandSeparator=","
														className={
															classnames(
																'form-control text-right',
																fieldsWithErrors.includes(`field-2019-${index}`) && "is-invalid",
																index < 2 && 'bg-transparent', // disabling january & february 2019
															)
														}
														value={index >= 2 && values2019[index]}
														onValueChange={({floatValue}) => {
															updateArray2019(index, floatValue);
															if( floatValue !== undefined && Math.sign(floatValue) !== -1 ) {
																removeError(`field-2019-${index}`);
															} else {
																addError(`field-2019-${index}`);
															}
														}}
													/>
												</div>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					<div className="col-sm-6 col-lg mt-4 mt-sm-0 px-lg-0">
						<h2 className="d-sm-none h6 text-monospace text-uppercase">
							Enter your 2020 revenue
						</h2>
						<table className="table table-sm table-striped table-borderless mb-0">
							<thead>
								<tr>
									<th>
										<span className="d-none d-sm-block text-monospace">2020</span>
									</th>
								</tr>
							</thead>
							<tbody>
								{values2020.map((item, index: number) => {
									return (
										<tr key={`column-2020-${index}`}>
											<td className="d-lg-none pl-3 text-uppercase text-monospace small text-nowrap align-middle">
												{ monthLabels[index] }
												<small className="d-block mt-n2">
													{	index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
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
														onValueChange={({floatValue}) => {
															updateArray2020(index, floatValue);
															if( floatValue !== undefined && Math.sign(floatValue) !== -1 ) {
																removeError(`field-2020-${index}`);
															} else {
																addError(`field-2020-${index}`);
															}
														}}
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
			</div>
			<div className="col-lg-auto mt-4 mt-lg-0 py-4 px-lg-0 py-lg-3 bg-quinary">
				<h2 className="h6 px-sm-3 text-sm-center text-monospace text-uppercase">
					Estimated subsidy
				</h2>
				<table className="table table-sm table-striped table-borderless mb-0">
					<thead>
						<tr>
							<th className="d-lg-none px-3 text-monospace">
								<span className="text-monospace">Month</span>
							</th>
							<th className="px-3 text-monospace text-right">
								<span>General</span>
							</th>
							<th className="px-3 text-monospace text-right">
								<span>Alt.</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{values2019.map((item, index: number) => {
							return (
								<tr key={`column-results-${index}`}>
									<td className="px-3 text-uppercase text-monospace small text-nowrap align-middle d-lg-none">
										{ monthLabels[index] }
										<small className="d-block mt-n2">
											{	index - periodStart >= 0 ? `Period ${index - periodStart + 1}` : '-'}
										</small>
									</td>
									<td className="px-3">
										<div className="form-control px-0 bg-transparent border-transparent text-right">
											{resultsGeneral[index] !== undefined ? ( 
												<span className={classnames(resultsGeneral[index] > 0 && 'font-weight-bold')}>{round(resultsGeneral[index])}%</span>)
											: 
												"-"
											}
										</div>
									</td>
									<td className="px-3">
										<div className="form-control px-0 bg-transparent border-transparent text-right">
											{resultsAlt[index] !== undefined ? (
												<span className={classnames(resultsAlt[index] > 0 && 'font-weight-bold')}>{round(resultsAlt[index])}%</span>)
											:
												"-"
											}
										</div>
									</td>
								</tr>
							)
						})}
						<tr>
							<td className="px-3 text-uppercase text-monospace small text-nowrap align-middle d-lg-none">
								<small className="d-block mt-n2">
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

	function round(input: number) {
		return Math.round(input * 100);
	}

	function showAverage( input: number[] ) {
		const numItems = input.length;
		let total = input.reduce(function(a, b){
			return a + b;
		}, 0);
		return total / numItems;	
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

export default Calculator;
