import React from 'react';
import { Link } from 'react-router-dom';
import { translate } from "react-translate";

import {
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroup,
    Button,
    Label,
    EmptyLayout,
    ThemeConsumer
} from './../../../components';

import { HeaderAuth } from "../../components/Pages/HeaderAuth";
import { FooterAuth } from "../../components/Pages/FooterAuth";

const Error404 = ({t,history}) => (
    <EmptyLayout>
        <EmptyLayout.Section center>
            { /* START Header */}
            <HeaderAuth
                title={t("Error 404")}
                text={t("Page Not Found.")}
            />
            { /* END Header */}
            { /* START Form */}
            <Form className="mb-3 text-right">
                <FormGroup>
                    <Label for="search">
                        {t("Search")}
                    </Label>
                    <InputGroup>
                        <InputGroupAddon addonType="append">
                            <ThemeConsumer>
                                {
                                    ({ color }) => (
                                        <Button color={ color } tag={ Link } to="/">
                                            <i className="fa fa-search"></i>
                                        </Button>
                                    )
                                }
                            </ThemeConsumer>
                        </InputGroupAddon>
                        <Input type="text" name="text" id="search" placeholder={t("Enter search phrase here")+"..."} className="bg-white" />

                    </InputGroup>
                </FormGroup>
            </Form>
            { /* END Form */}
            { /* START Bottom Links */}
            <div className="d-flex mb-5 text-center">
                <button onClick={history.goBack} className="btn btn-outline-primary rounded-pill mr-auto ml-2 d-block" style={{minWidth:115}}>
                    {t("Back to Home")}
                </button>
                <Link to="/" className="btn btn-primary rounded-pill ml-auto mr-2 d-block" style={{minWidth:115}}>
                    {t("Support")}
                </Link>
            </div>
            { /* END Bottom Links */}
            { /* START Footer */}
            <FooterAuth />
            { /* END Footer */}
        </EmptyLayout.Section>
    </EmptyLayout>
);

export default translate("FA")(Error404);
