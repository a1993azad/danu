import React from 'react';
import PropTypes from 'prop-types';

const FooterText = (props) => (
	<p className="text-center">
		 { props.year }
        (C)
		 تمـام حقوق مادی اثر محفوظ می باشد.
<br/>

		طراحی شده توسط
        {' '}

		<a
			href="http://www.daneshnu.ir"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
            { props.name }
		</a>
        .
	</p>
)
FooterText.propTypes = {
    year: PropTypes.node,
	name: PropTypes.node,
	desc: PropTypes.node,
};
FooterText.defaultProps = {
    year: "1398",
    name: "گروه دانــو",
    desc: ""
};

export { FooterText };
