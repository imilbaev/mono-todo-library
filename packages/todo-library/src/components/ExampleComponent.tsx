import * as React from 'react';

export interface Props {
	/**
	* Simple text prop
	**/
	text: string;
}

/** My First component */
export class ExampleComponent extends React.Component<Props> {
	render() {
		const { text } = this.props;
		
		return (
			<div className="test">
			Example Component Text is <strong>{text}</strong>
			</div>
		);
	}
}