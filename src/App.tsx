import React from 'react';
import Calculator from './Calculator';

import GeneralNotes from './content/GeneralNotes';
import Lead from './content/Lead';
import Disclaimers from './content/Disclaimers';
import DisclaimerUse from './content/DisclaimerUse';
import Attributes from './content/Attributes';
import GeneralNotesFooterNotes from './content/GeneralNotesFooterNotes';

interface IProps { }

const App: React.FC<IProps> = ( _props: IProps ) => {
	return (
		<article>
			<section className="container-fluid px-lg-4 bg-texture-senary text-white">
				<div className="d-md-flex align-items-md-center mb-4 ">
					<h1 className="d-inline-block h5 p-3 text-monospace text-uppercase bg-texture-gray-900 shadow">
						<a href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems" className="d-block d-md-none navbar-brand-pcs mb-3">
							<img src={require('./components/images/logo-punchcard-inverse-coloured.svg')} alt="Punchcard Systems Logo" className="w-100" />
						</a>
						Canada Emergency Wage Subsidy<br />
						<small>2.0 Estimator</small>
					</h1>
					<div className="d-none d-md-block ml-md-auto text-monospace text-uppercase">
						Built by
						<a href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems" className="navbar-brand-pcs ml-2">
							<img src={require('./components/images/logo-punchcard-inverse-coloured.svg')} alt="Punchcard Systems Logo" className="w-100" />
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-4">
						<div className="mt-xl-4 mr-xl-4">
							<h2 className="display-1 mb-3 mb-xl-4">
								How much can I get?
							</h2>
							<Lead />
						</div>
					</div>
					<div className="col-xl-8 mt-5 mt-xl-0 hero-block text-dark mb-n5">
						<div className="punchcard-wrapper shadow">
							<div className="punchcard">
								<div className="bg-quinary-light px-3 py-4 px-lg-4">
									<Calculator />
									<div className="mt-4">
										<DisclaimerUse />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="py-6">
				<div className="container pt-6">
					<GeneralNotes />
				</div>
			</section>
			<section className="py-5 bg-dark text-white">
				<div className="container">
					<Attributes />
				</div>
			</section>
			<footer className="py-5 bg-light">
				<section className="container">
					<Disclaimers />
					<GeneralNotesFooterNotes />
				</section>
				<section>
					<div className="text-monospace text-uppercase border-top small mt-6 pt-5 text-center">
						Built by
						<a href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems" className="navbar-brand-pcs ml-2">
							<img src={require('./components/images/logo-punchcard-coloured.svg')} alt="Punchcard Systems Logo" className="w-100" />
						</a>
					</div>
				</section>
			</footer>
		</article>
	);
};

export default App;
