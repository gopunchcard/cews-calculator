import React from 'react';
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
	function submit() {
		console.log('test');
		var post = `/jsonp/?email=${email}&consent=${consent}`
		var url = sharpSpringUrl + endpoint + post;
		jsonp(url, undefined, function (err: any, data: any) {
			if (err) {
				console.error(err.message);
			} else {
				console.log(data);
			}
		});
	}
	const handleClick = () => setConsent(!consent)
	return (
		<form>
			<div className="form-group">
				<label htmlFor={`${props.formName}-contact-email`}>E-mail</label>
				<input id={`${props.formName}-contact-email`} type="email" className="form-control" onChange={e => setEmail(e.target.value)} />
			</div>
			<div className="form-group">
				<input id={`${props.formName}-contact-gdpr`} type="checkbox" checked={consent} onClick={handleClick} />
				<label htmlFor={`${props.formName}-contact-gdpr`}>I'd like to receive relevant updates from you</label>
			</div>
			<button type="button" onClick={submit} className="btn btn-primary">Submit</button>
		</form>
	);
};

export default ContactForm;
