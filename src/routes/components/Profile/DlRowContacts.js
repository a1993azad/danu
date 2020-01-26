import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';
const DlRowContacts = (props) => (
    <React.Fragment>
        <dl className="row">
            <dt className={ `col-sm-4 ${ props.leftSideClassName }` }>{props.t('Phone')}</dt>
            <dd className={ `col-sm-8 ${ props.rightSideClassName }` }>340-702-6720</dd>
            <dt className={ `col-sm-4 ${ props.leftSideClassName }` }>{props.t('Mobile')}</dt>
            <dd className={ `col-sm-8 ${ props.rightSideClassName }` }>363-999-9380</dd>
            <dt className={ `col-sm-4 ${ props.leftSideClassName }` }>{props.t('Fax')}</dt>
            <dd className={ `col-sm-8 ${ props.rightSideClassName }` }>727-613-5840</dd>
            <dt className={ `col-sm-4 ${ props.leftSideClassName }` }>{props.t('Email')}</dt>
            <dd className={ `col-sm-8 ${ props.rightSideClassName }` }>
                <a href="mailto:t.herald@gmail.com">t.herald@gmail.com</a>
            </dd>
        </dl>
    </React.Fragment>
)
DlRowContacts.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node
};
DlRowContacts.defaultProps = {
    leftSideClassName: "text-right",
    rightSideClassName: "text-left"
};
const t=translate('FA')(DlRowContacts);
export { t as DlRowContacts };
