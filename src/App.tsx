import React from 'react';
import { Modal } from './components';
import Calculator from './Calculator';

import GeneralNotes from './content/GeneralNotes';
import Lead from './content/Lead';
import Disclaimers from './content/Disclaimers';
import DisclaimerUse from './content/DisclaimerUse';
import Attributes from './content/Attributes';
import GeneralNotesFooterNotes from './content/GeneralNotesFooterNotes';

interface IProps {
}

const App: React.FC<IProps> = ( props: IProps ) => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
	return (
		<article>
			<section className="container-fluid py-4 px-lg-5">
				<h1 className="h2 mb-0">Canada Emergency Wage Subsidy 2.0 Estimator</h1>
				<h2 className="h1">
					How much can I get?
				</h2>
				<div className="row">
					<div className="col-lg-4">
						<div className="mr-lg-3">
							<Lead />
						</div>
					</div>
					<div className="col-lg-8">
						<Calculator />
						<DisclaimerUse />
					</div>
				</div>
			</section>
			<section className="container mt-5">
				<GeneralNotes />
			</section>
			<section className="container mt-5">
				<Attributes />
			</section>
			<footer className="py-5">
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
