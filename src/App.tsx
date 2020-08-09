import React from 'react';
import Calculator from './Calculator';

import GeneralNotes from './content/GeneralNotes';
import Lead from './content/Lead';
import Disclaimers from './content/Disclaimers';
import DisclaimerUse from './content/DisclaimerUse';
import Attributes from './content/Attributes';
import GeneralNotesFooterNotes from './content/GeneralNotesFooterNotes';
import CalculatorInstructions from './content/CalculatorInstructions';
import Video from './content/Video';

interface IProps { }

const App: React.FC<IProps> = (_props: IProps) => {
	return (
		<article>
			<section className="container-fluid px-lg-4 bg-texture-senary text-white">
				<div className="d-md-flex align-items-md-center mb-4 mb-xl-3">
					<h1 className="d-inline-block h5 p-3 text-monospace text-uppercase bg-texture-gray-900 shadow">
						<span className="d-flex d-md-none align-items-center mb-3 text-monospace text-uppercase">
							<a href="https://www.videotax.com/" target="_blank" rel="noreferrer noopener" aria-label="Video Tax News" className="navbar-brand-vtn">
								<img src={require('./components/images/logo-vtn-inverse.png')} alt="Video Tax News Logo" className="w-100" />
							</a>
							<span className="h4 mx-3 mb-0 text-center text-monospace">
								+
							</span>
							<a href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems" className="navbar-brand-pcs">
								<img src={require('./components/images/logo-punchcard-inverse-coloured.svg')} alt="Punchcard Systems Logo" className="w-100" />
							</a>
						</span>
						Canada Emergency Wage Subsidy<br />
						<small>2.0 Estimator</small>
					</h1>
					<div className="d-none d-md-flex align-items-center ml-md-auto text-monospace text-uppercase">
						<a href="https://www.videotax.com/" target="_blank" rel="noreferrer noopener" aria-label="Video Tax News" className="navbar-brand-vtn">
							<img src={require('./components/images/logo-vtn-inverse.png')} alt="Video Tax News Logo" className="w-100" />
						</a>
						<div className="h4 mx-3 mb-0 text-center text-monospace">
							+
						</div>
						<a href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems" className="navbar-brand-pcs">
							<img src={require('./components/images/logo-punchcard-inverse-coloured.svg')} alt="Punchcard Systems Logo" className="w-100" />
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-xxl-4">
						<div className="mt-xl-4 mr-xl-4">
							<h2 className="display-1 mb-3 mb-xl-4">
								How much can I get?
							</h2>
							<div className="row">
								<div className="col-xl-6 col-xxl-12">
									<Lead />
								</div>
								<div className="d-none d-xl-flex align-items-center col-xl-5 col-xxl-12 mt-xxl-4 ml-xl-auto">
									<Video />
								</div>
							</div>
						</div>
					</div>
					<div className="col-xxl-8 mt-5 mt-xxl-0 hero-block text-dark mb-n5">
						<div className="punchcard-wrapper shadow">
							<div className="punchcard">
								<div className="bg-quinary-light px-3 py-4 px-lg-4">
									<div className="mt-n3 mx-n3 mb-4 mx-lg-n4 mb-lg-4 px-3 px-lg-4 pb-3 border-bottom border-dark">
										<CalculatorInstructions />
									</div>
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
			<section className="d-xl-none py-6 bg-light">
				<div className="container pt-4">
					<Video />
				</div>
			</section>
			<section className="py-6">
				<div className="container py-xl-6">
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
				<section className="text-monospace text-center">
					<div className="d-flex align-items-center justify-content-center ml-md-auto border-top small mt-6 mb-3 pt-5 text-monospace text-uppercase">
						<a href="https://www.videotax.com/" target="_blank" rel="noreferrer noopener" aria-label="Video Tax News" className="navbar-brand-vtn">
							<img src={require('./components/images/logo-vtn-blue.png')} alt="Video Tax News Logo" className="w-100" />
						</a>
						<div className="h4 mx-3 mb-0 text-center text-monospace">
							+
						</div>
						<a href="https://punchcard.io" target="_blank" rel="noreferrer noopener" aria-label="Punchcard Systems" className="navbar-brand-pcs">
							<img src={require('./components/images/logo-punchcard-coloured.svg')} alt="Punchcard Systems Logo" className="w-100" />
						</a>
					</div>
					<a href="https://github.com/gopunchcard/cews-calculator" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="text-uppercase">
						GitHub
					</a>
				</section>
			</footer>
		</article>
	);
};

export default App;
