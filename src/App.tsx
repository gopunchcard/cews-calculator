import React from 'react';
import { Modal } from './components';
import Calculator from './Calculator';

import GeneralNotes from './content/GeneralNotes';
import Lead from './content/Lead';
import Disclaimers from './content/Disclaimers';
import DisclaimerUse from './content/DisclaimerUse';
import Attributes from './content/Attributes';
import GeneralNotesFooterNotes from './content/GeneralNotesFooterNotes';

interface IProps { }

const App: React.FC<IProps> = ( _props: IProps ) => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
	return (
		<article>
			<section className="container-fluid px-lg-4 bg-texture-senary text-white">
				<h1 className="d-inline-block h5 mb-4 p-3 text-monospace text-uppercase bg-texture-gray-900 shadow">
					Canada Emergency Wage Subsidy<br />
					<small>2.0 Estimator</small>
				</h1>
				<div className="row">
					<div className="col-xl-4">
						<div className="mt-lg-4 mr-lg-4">
							<h2 className="display-1 mb-3 mb-lg-4">
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
			</footer>
			<Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} shouldCloseOnEsc={true}>
				hello
			</Modal>
		</article>
	);
};

export default App;
