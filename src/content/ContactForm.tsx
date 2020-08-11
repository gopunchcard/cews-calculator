import React from 'react';

interface IProps { 
	formName: string;
}

const ContactForm: React.FC<IProps> = (props: IProps) => {
	return (
		<form>
			<div className="form-group">
				<label htmlFor={`${props.formName}-contact-email`}>E-mail</label>
				<input id={`${props.formName}-contact-email`} type="email" className="form-control" />
			</div>
			<div className="form-group">
				<input id={`${props.formName}-contact-gdpr`} type="checkbox" />
				<label htmlFor={`${props.formName}-contact-gdpr`}>I'd like to receive relevant updates from you</label>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	);
};

export default ContactForm;
