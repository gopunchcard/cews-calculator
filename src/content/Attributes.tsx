import React from 'react';

interface IProps { }

const Attributes: React.FC<IProps> = (_props: IProps) => {
	return (
		<React.Fragment>
			<div className="row align-items-center justify-content-center">
				<div className="col-8 col-sm-6 col-md-3">
					<a href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems">
						<img src={require('../components/images/logo-punchcard-inverse-coloured.svg')} alt="Punchcard Systems Logo" className="w-100" />
					</a>
				</div>
				<div className="h2 col-12 col-md mb-0 py-4 py-md-0 text-center text-monospace">
					+
				</div>
				<div className="col-5 col-sm-4 col-md-2">
					<a href="https://www.videotax.com/" target="_blank" rel="noreferrer noopener" aria-label="Video Tax News">
						<img src={require('../components/images/logo-vtn-inverse.png')} alt="Video Tax News Logo" className="w-100" />
					</a>
				</div>
				<div className="h2 col-12 col-md mb-0 py-4 py-md-0 text-center text-monospace">
					+
				</div>
				<div className="col-10 col-sm-8 col-md-4">
					<a href="https://covidcontinuity.com/" target="_blank" rel="noreferrer noopener" aria-label="Covid Continuity">
						<img src={require('../components/images/logo-cc-inverse.svg')} alt="Video Tax News Logo" className="w-100" />
					</a>
				</div>
			</div>
			<p className="mt-5 mb-0">
				This calculator was created through the volunteer joint efforts of {` `}
				<a className="text-primary-light font-weight-bold" href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems">Punchcard Systems</a>, {` `}
				<a className="text-primary-light font-weight-bold" href="https://www.videotax.com/" target="_blank" rel="noreferrer noopener" aria-label="Video Tax News">Video Tax News</a>, and {` `}
				<a className="text-primary-light font-weight-bold" href="https://covidcontinuity.com/" target="_blank" rel="noreferrer noopener" aria-label="Covid Continuity">Covidcontinuity.com</a> {` `}
				as part of our fight to support and strengthen Canadian businesses and their employees.  
				We are all in this together – If you have any suggestions for improvements or corrections, please email {` `}
				<a className="text-primary-light font-weight-bold" href="mailto:support@punchcard.io" arial-label="Email support@punchcard.io">support@punchcard.io</a>.
			</p>
		</React.Fragment>
	);
};

export default Attributes;
