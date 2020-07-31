import React from 'react';
import { Modal } from './components';
import Calculator from './Calculator';

interface IProps {
}

const App: React.FC<IProps> = ( props: IProps ) => {
	const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
	return (
		<div className="container py-4">
			<h1 className="h2">
				Canada Emergency Wage Subsidy Estimator <br />
				<small>(Periods 1-9)</small>
			</h1>
			<div className="row">
				<div className="col-lg-4">
					<div className="alert bg-light mr-lg-3">
						<p className="mb-0">This estimator reflects the authors’ original understanding of the Canada Emergency Wage Subsidy Rules.  Note that there are many exceptions and variables associated with the rules.  Further, as this program is new, there is limited guidance and court/government interpretation.  Due to the high level of uncertainties, variables, and potential for error, the results of the estimator cannot be relied upon for the filing of a claim, but rather, is meant to be used for estimation purposes.  Professional assistance from your accountant should be sought.  No party associated with the creation, presentation, or distribution of the estimator may be held liable in any way.  Further details on the terms of use can be found here (link this to a disclaimer).</p>
					</div>
					<button onClick={() => setIsModalOpen(true)}>Open test modal</button>
				</div>
				<div className="col-lg-8">
					<Calculator />
				</div>
			</div>
			<Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} shouldCloseOnEsc={true}>
				hello
			</Modal>
		</div>
	);
};

export default App;
