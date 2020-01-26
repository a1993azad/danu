import React from 'react';
import { translate } from "react-translate";
import { SidebarMenu } from './../../components';

const SidebarMiddleNav = ({t}) => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title={t("Dashboard")}
        >
            <SidebarMenu.Item title={t("Analytics")} to='/dashboards/analytics' exact />
            <SidebarMenu.Item title={t("Projects")} to='/dashboards/projects' exact />
            <SidebarMenu.Item title={t("System")} to='/dashboards/system' exact />
            <SidebarMenu.Item title={t("Monitor")} to='/dashboards/monitor' exact />
            <SidebarMenu.Item title={t("Financial")} to='/dashboards/financial' exact />
            <SidebarMenu.Item title={t("Stock")} to='/dashboards/stock' exact />
            <SidebarMenu.Item title={t("Reports")} to='/dashboards/reports' exact />
        </SidebarMenu.Item>
        <SidebarMenu.Item
            to='/users/list'

            icon={<i className="fa fa-fw fa-user"></i>}
            title={t("Users")}
        />
    </SidebarMenu >

);
const t=translate('FA')(SidebarMiddleNav);
export {t as SidebarMiddleNav}
