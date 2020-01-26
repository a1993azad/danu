import React from 'react';
import faker from 'faker/locale/fa';
import { Link } from 'react-router-dom';
import { translate } from "react-translate";

import {
    Sidebar,
    UncontrolledButtonDropdown,
    Avatar,
    AvatarAddOn,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../components';
import { randomAvatar } from './../../../utilities';

const avatarImg = randomAvatar();

const SidebarTopA = ({t}) => (
    <React.Fragment>
        { /* START: Sidebar Default */ }
        <Sidebar.HideSlim>
            <Sidebar.Section className="pt-0 text-right">
                <Link to="/" className="d-block text-right">
                    <Sidebar.HideSlim>
                        <Avatar.Image
                            size="lg"
                            src={ avatarImg }
                            addOns={[
                                <AvatarAddOn.Icon
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                />,
                                <AvatarAddOn.Icon
                                    className="fa fa-circle"
                                    color="success"
                                    key="avatar-icon-fg"
                                />
                            ]}
                        />
                    </Sidebar.HideSlim>
                </Link>

                <UncontrolledButtonDropdown>
                    <DropdownToggle color="link" className="pl-0 pb-0 btn-profile sidebar__link">
                        { faker.name.firstName() } { faker.name.lastName() }
                        <i className="fa fa-angle-down ml-2"></i>
                    </DropdownToggle>
                    <DropdownMenu persist>
                    <DropdownItem header>
                        { faker.name.firstName() } { faker.name.lastName() }
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/apps/profile-details">
                        {t('My Profile')}
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/settings-edit">
                        {t('Settings')}
                    </DropdownItem>
                    <DropdownItem tag={ Link } to="/apps/billing-edit">
                        {t('Billings')}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ Link } to="/pages/login">
                        <i className="fa fa-fw fa-sign-out mr-2"></i>
                        {t('Sign Out')}
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
                <div className="small sidebar__link--muted">
                    { faker.name.jobTitle() }
                </div>
            </Sidebar.Section>
        </Sidebar.HideSlim>
        { /* END: Sidebar Default */ }

        { /* START: Sidebar Slim */ }
        <Sidebar.ShowSlim>
            <Sidebar.Section>
                <Avatar.Image
                    size="sm"
                    src={ avatarImg }
                    addOns={[
                        <AvatarAddOn.Icon
                            className="fa fa-circle"
                            color="white"
                            key="avatar-icon-bg"
                        />,
                        <AvatarAddOn.Icon
                            className="fa fa-circle"
                            color="success"
                            key="avatar-icon-fg"
                        />
                    ]}
                />
            </Sidebar.Section>
        </Sidebar.ShowSlim>
        { /* END: Sidebar Slim */ }
    </React.Fragment>
)
const t=translate('FA')(SidebarTopA);
export {t as SidebarTopA};
