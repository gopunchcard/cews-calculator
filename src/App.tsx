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
			<section className="container-fluid pt-3 pb-6 p-lg-4 pb-lg-7 bg-dark text-white">
				<h1 className="h5 mb-4 text-monospace text-uppercase">
					Canada Emergency Wage Subsidy<br />
					<small>2.0 Estimator</small>
				</h1>
				<div className="row">
					<div className="col-lg-4">
						<div className="mt-lg-4 mr-lg-4">
							<h2 className="display-1 mb-3 mb-lg-4">
								How much can I get?
							</h2>
							<Lead />
						</div>
					</div>
					<div className="col-lg-8 mt-5 mt-lg-0">
						<div className="p-4 bg-white text-dark shadow">
							<Calculator />
							<DisclaimerUse />
						</div>
					</div>
				</div>
			</section>
			<section className="container mt-6">
				<GeneralNotes />
			</section>
			<section className="mt-6 py-5 bg-dark text-white">
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
