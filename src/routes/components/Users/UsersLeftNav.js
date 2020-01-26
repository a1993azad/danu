import React from 'react';

import {
    Nav,
    NavItem,
    NavLink,
    Badge
} from './../../../components';
import {translate} from "react-translate";

const UsersLeftNav = ({t}) => (
    <React.Fragment>
        { /* START Left Nav  */}
        <div className="mb-4 text-right">
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" active>
                        {t("Newest")}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        {t("Family")}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        {t("Favorite")}
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
        { /* END Left Nav  */}
        { /* START Left Nav  */}
        <div className="mb-4">
            <div className="small mb-3 text-right">
                {t("User Types")}
            </div>
            <Nav pills vertical>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-primary align-self-center mr-2"></i>
                        {t("manager")}
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            1
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-info align-self-center mr-2"></i>
                        {t("teacher")}
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            3
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-success align-self-center mr-2"></i>
                        {t("student")}
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            67
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-warning align-self-center mr-2"></i>
                        {t("staff")}
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            5
                        </Badge>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#" className="d-flex">
                        <i className="fa fa-fw fa-circle text-danger align-self-center mr-2"></i>
                        {t("parent")}
                        <Badge color="secondary" pill className="ml-auto align-self-center">
                            1
                        </Badge>
                    </NavLink>
                </NavItem>
               {/* <NavItem>
                    <NavLink href="#">
                        <i className="fa fa-fw fa-plus mr-2"></i>
                        Add New Label
                    </NavLink>
                </NavItem>*/}
            </Nav>
        </div>
        { /* END Left Nav  */}
    </React.Fragment>
)
const  t=translate('FA')(UsersLeftNav);
export { t as UsersLeftNav };
