import React from 'react';
import Year from './year';
import classnames from 'classnames';
import NumberFormat from 'react-number-format';

interface IProps {
}

const Calculator: React.FC<IProps> = ( props: IProps ) => {
	const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const defaultValues2019 = [83000, 190000, 140000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 100000, 140000];
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
		<div className="container">
			<div className="row text-uppercase text-monospace text-right">
				<div className="col-lg-7 offset-lg-1 font-weight-bold text-center border-right border-left">
					Enter your revenue below
				</div>
				<div className="col-lg-4 font-weight-bold">
					Amount covered
				</div>
			</div>
			<div className="row text-uppercase text-monospace text-right">
				<div className="col-lg-1 small">
					Per.
				</div>
				<div className="col-lg-1 border-left">
					&nbsp;
				</div>
				<div className="col-lg-3 small text-left">
					2019
				</div>
				<div className="col-lg-3 small text-left border-right">
					2020
				</div>
				<div className="col-lg-2 small">
					General
				</div>
				<div className="col-lg-2 small">
					Alt.
				</div>
			</div>
			{values2019.map((item, index: number) => {
				return (
					<div className={classnames('row', index % 2 && 'bg-light')} key={index}>
						<div className="col-lg-1 text-uppercase text-monospace small text-right align-self-center">
							{	index - periodStart >= 0 ? index - periodStart + 1 : '-'}
						</div>
						<div className="col-lg-1 text-uppercase text-monospace small border-left d-flex align-items-center justify-content-end">
							{ monthLabels[index] }
						</div>
						<div className="col-lg-3 py-1">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">$</span>
								</div>
								<NumberFormat
									thousandSeparator=","
									className={classnames('form-control text-right', fieldsWithErrors.includes(`field-2019-${index}`) && "is-invalid")}
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
						<div className="col-lg-3 border-right py-1">
							<div className="input-group">
								<div className="input-group-prepend">
									<span className="input-group-text">$</span>
								</div>
								<NumberFormat
									thousandSeparator=","
									className={classnames('form-control text-right', fieldsWithErrors.includes(`field-2020-${index}`) && "is-invalid")}
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
						<div className="col-lg-2 d-flex align-items-center justify-content-end">
							{resultsGeneral[index] !== undefined ? ( 
								<span className={classnames(resultsGeneral[index] > 0 && 'font-weight-bold')}>{Math.round(resultsGeneral[index] * 100)}%</span>)
							: 
								"-"
							}
						</div>
						<div className="col-lg-2 d-flex align-items-center justify-content-end">
							{resultsAlt[index] !== undefined ? (
								<span className={classnames(resultsAlt[index] > 0 && 'font-weight-bold')}>{Math.round(resultsAlt[index] * 100)}%</span>)
							:
								"-"
							}
						</div>
					</div>
				)
			})}					
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

export default Calculator;
