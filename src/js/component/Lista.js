import React from "react";
import PropTypes from "prop-types";

export const Lista = props => {
	return (
		<li className="separated">
			{props.text} <span onClick={props.action}>X</span>
		</li>
	);
};

Lista.propTypes = {
	text: PropTypes.string,
	action: PropTypes.func
};
