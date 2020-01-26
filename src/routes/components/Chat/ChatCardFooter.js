import React from 'react';
import { Link } from 'react-router-dom';

import {
    InputGroup,
    InputGroupAddon,
    Button,
    Input
} from './../../../components';
import {translate} from 'react-translate';
const ChatCardFooter = ({t}) => (
    <React.Fragment>
        <InputGroup>
            <InputGroupAddon addonType="append">
                <Button color="primary" tag={ Link } to="/apps/chat">
                    <i className="fa fa fa-send"></i>
                </Button>
            </InputGroupAddon>
            <InputGroupAddon addonType="prepend">
                <Button color="secondary" outline className="border-left-0 border-right-0 btn btn-outline-secondary rounded-0">
                    <i className="fa fa fa-paperclip"></i>
                </Button>
            </InputGroupAddon>
            <Input placeholder={t("Your message")+'...'} />

        </InputGroup>
    </React.Fragment>
)
const t=translate('FA')(ChatCardFooter);
export { t as ChatCardFooter };
