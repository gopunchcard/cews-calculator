import React from 'react';
import classnames from 'classnames';

interface IProps {
	className?: string;
}

const Video: React.FC<IProps> = (props: IProps) => {
	const { className } = props;
	return (
		<div className={classnames("embed-responsive embed-responsive-16by9", className)}>
			<iframe className="embed-responsive-item" title="CEWS Estimator" src="https://player.vimeo.com/video/443879770" width="960" height="540" frameBorder="0" allowFullScreen={true}></iframe>
		</div>
	);
};

export default Video;
