import React, { FormEvent } from 'react';
import jsonp from 'jsonp';
interface IProps {
	formName: string;
}

const ContactForm: React.FC<IProps> = (props: IProps) => {


	// 	<!-- SharpSpring Form for Wage Subsidy Short Form  -->
	// 	<script type="text/javascript">
	//     var __ss_noform = __ss_noform || [];
	//     __ss_noform.push(['baseURI', 'https://app-3QNBM47FBO.marketingautomation.services/webforms/receivePostback/MzawMDEzMrOwAAA/']);
	//     __ss_noform.push(['endpoint', 'a17db563-a78e-40f5-871a-2c0a1ac3d6b2']);
	// </script>
	// <script type="text/javascript" src="https://koi-3QNBM47FBO.marketingautomation.services/client/noform.js?ver=1.24" ></script>


	const sharpSpringUrl = 'https://app-3QNBM47FBO.marketingautomation.services/webforms/receivePostback/MzawMDEzMrOwAAA/'
	const endpoint = "a17db563-a78e-40f5-871a-2c0a1ac3d6b2";

	const [email, setEmail] = React.useState("");
	const [consent, setConsent] = React.useState(false);
	const [submitSuccess, setSubmitSuccess] = React.useState(false);
	
	function submit(event: FormEvent) {
		console.log('test');
		var post = `/jsonp/?email=${email}&consent=${!consent}` // Need to reverse; SharpSpring treats the consent value as unsubscribe
		var url = sharpSpringUrl + endpoint + post;
		jsonp(url, undefined, function (err: any, data: any) {
			if (err) {
				console.error(err.message);
			} else {
				console.log(data);
				setSubmitSuccess(true);
				// TODO: Clear fields on success
			}
		});

		event.preventDefault();
		return false;
	}

	const handleClick = () => setConsent(!consent);

	return (
		<React.Fragment>
			{submitSuccess && (
				<div className="position-relative bg-success mb-3 p-3 pr-5 text-white font-weight-bold">
					<button
						type="button"
						className="position-absolute top-0 right-0 py-1 px-3 bg-transparent border-0 text-white large font-weight-bold"
						data-dismiss="modal"
						aria-label="Close"
						onClick={() => setSubmitSuccess(false)}
					>
						<span aria-hidden="true">&times;</span>
					</button>
					Thank you for subscribing. We will let you know of updates the CEWS 2.0 Estimator.
				</div>
			)}
			<form onSubmit={submit}>
				<div className="form-group">
					<label htmlFor={`${props.formName}-contact-email`} className="font-weight-bold">E-mail</label>
					<input id={`${props.formName}-contact-email`} type="email" className="form-control bg-white" onChange={e => setEmail(e.target.value)} />
				</div>
				<div className="form-group form-check">
					<input id={`${props.formName}-contact-gdpr`} type="checkbox" checked={consent} onClick={handleClick} className="form-check-input" />
					<label htmlFor={`${props.formName}-contact-gdpr`} className="form-check-label">I'd like to receive relevant updates from you</label>
				</div>
				<button type="button" onClick={submit} className="btn btn-primary">Subscribe</button>
			</form>
		</React.Fragment>
	);
};

export default ContactForm;
