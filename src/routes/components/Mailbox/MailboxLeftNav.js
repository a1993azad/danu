import React from 'react';
import {translate} from "react-translate";
import {
    Nav,
    NavItem,
    NavLink,
    Badge
} from './../../../components';

const MailboxLeftNav = ({t}) => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4">
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" active className="d-flex">
                        {t("Inbox")}
                        <Badge pill color="secondary" className="align-self-center ml-auto">
                            12
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        {t("Draft")}
                        <Badge pill color="secondary" className="align-self-center ml-auto">
                            12
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        {t("Sent")}
                        <Badge pill color="secondary" className="align-self-center ml-auto">
                            2
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        {t("Trash")}
                        <Badge pill color="secondary" className="align-self-center ml-auto">
                            45
                        </Badge>
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4 text-right">
            <div className="small mb-3">
                {t("Labels")}
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-primary mr-2"></i>
                        خانوادگی
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-info mr-2"></i>
                        دوستان
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-success mr-2"></i>
                        کاری
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-circle text-danger mr-2"></i>
                        سایر موارد
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-plus mr-2"></i>
                        {t('Add New Label')}
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)
const t=translate('FA')(MailboxLeftNav)
export { t as MailboxLeftNav };
