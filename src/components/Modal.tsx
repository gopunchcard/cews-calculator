import React from 'react';
import ReactModal from 'react-modal';

interface IProps extends ReactModal.Props {
	children: {};
}

export const Modal: React.FC<IProps> = ( props: IProps ) => {
	const { children, ...otherProps } = props;
	return (
		<ReactModal {...otherProps} >
			{props.children}
        </ReactModal>
	);
};