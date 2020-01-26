import React from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';
const DlRowAddress = (props) => (
    <React.Fragment>
        <dl className="row">
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>{props.t('Address')}</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>700 Zemlak Glen</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>{props.t('City')}</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>Jacobiton</dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>{props.t('State')}</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }><a href="#">West Virginia</a></dd>
            <dt className={ `col-sm-3 ${ props.leftSideClassName }` }>{props.t('ZIP')}</dt>
            <dd className={ `col-sm-9 ${ props.rightSideClassName }` }>87032</dd>
        </dl>
    </React.Fragment>
)
DlRowAddress.propTypes = {
    leftSideClassName: PropTypes.node,
    rightSideClassName: PropTypes.node
};
DlRowAddress.defaultProps = {
    leftSideClassName: "",
    rightSideClassName: ""
};
const t=translate('FA')(DlRowAddress)
export { t as DlRowAddress };
