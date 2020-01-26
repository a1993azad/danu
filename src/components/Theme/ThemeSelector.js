import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    Button,
    FormGroup,
    CustomInput
} from 'reactstrap';

import './../../styles/components/theme-selector.scss';
import { Consumer } from './ThemeContext';
import {  translate  } from "react-translate";

class ThemeSelector extends React.Component {
    static propTypes = {
        style: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        styleOptions: PropTypes.array,
        styleDisabled: PropTypes.bool,
        colorOptions: PropTypes.array,
        onChangeTheme: PropTypes.func,
    };
    static defaultProps = {
        styleOptions: [
            { name: 'Light', value: 'light' },
            { name: 'Dark', value: 'dark' },
            { name: 'Color', value: 'color' }
        ],
        colorOptions: [
            { name: 'Primary', value: 'primary' },
            { name: 'Success', value: 'success' },
            { name: 'Info', value: 'info' },
            { name: 'Danger', value: 'danger' },
            { name: 'Warning', value: 'warning' },
            { name: 'Indigo', value: 'indigo' },
            { name: 'Purple', value: 'purple' },
            { name: 'Pink', value: 'pink' },
            { name: 'Yellow', value: 'yellow' }
        ]
    };

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            initialStyle: '',
            initialColor: '',
        };
    }

    componentDidMount() {
        this.setState({
            initialColor: this.props.color,
            initialStyle: this.props.style
        });
    }

    render() {
        const rootClass = classNames('theme-config', {
            'theme-config--active': this.state.isActive,
        });

        return (
            <div className={ rootClass }>
                <Button
                    color="primary"
                    className="theme-config__trigger"
                    onClick={() => { this.setState({isActive: !this.state.isActive}) }}
                >
                    <i className="fa fa-paint-brush fa-fw"></i>
                </Button>
                <Card className="theme-config__body">
                    <CardBody>
                        <h6 className="text-center mb-3">
                            تنظیمات پوسته
                        </h6>

                        <FormGroup>
                            <span className="h6 small mb-2 d-block text-right">
                                رنگبندی
                            </span>
                            {
                                _.map(this.props.colorOptions, (option, index) => (
                                        <CustomInput
                                            key={ index }
                                            type="radio"
                                            name="sidebarColor"
                                            id={ `sidebarStyle--${option.value}` }
                                            value={ option.value }
                                            checked={ this.props.color === option.value }
                                            onChange={(ev) => {
                                                if (ev.target.checked) {
                                                    this.props.onChangeTheme({
                                                        color: option.value
                                                    });
                                                }
                                            }}
                                            label={(
                                                <span className="d-flex align-items-center text-right">
                                                    <i className={`fa fa-circle ml-2 text-${option.value}`} />
                                                    { this.props.t(option.name) }
                                                </span>
                                            )}
                                        />
                                ))
                            }
                        </FormGroup>
                        <FormGroup>
                            <span className="h6 small mb-2 d-block text-right">
                                حالت نمایش
                            </span>
                            {
                                _.map(this.props.styleOptions, (option, index) => (
                                    <CustomInput
                                        key={ index }
                                        type="radio"
                                        className={"text-right"}
                                        name="sidebarStyle"
                                        id={ `sidebarStyle--${option.value}` }
                                        value={ option.value }
                                        disabled={ this.props.styleDisabled }
                                        checked={ this.props.style === option.value }
                                        onChange={(ev) => {
                                            if (ev.target.checked) {
                                                this.props.onChangeTheme({
                                                    style: option.value
                                                });
                                            }
                                        }}
                                        label={ this.props.t(option.name) }
                                    />
                                ))
                            }
                        </FormGroup>
                        <FormGroup className="mb-0">
                            <Button
                                color="secondary"
                                outline
                                className="d-block w-100"
                                onClick={() => {
                                    this.props.onChangeTheme({
                                        color: this.state.initialColor,
                                        style: this.state.initialStyle
                                    });
                                }}
                            >
                                {this.props.t('Reset')+ " "+this.props.t('Options')}
                            </Button>
                        </FormGroup>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

const ContextThemeSelector = (props) =>
    <Consumer>
        {
            (themeState) => <ThemeSelector { ...themeState } { ...props } />
        }
    </Consumer>
const t=translate('FA')(ContextThemeSelector);
export { t as ThemeSelector };
