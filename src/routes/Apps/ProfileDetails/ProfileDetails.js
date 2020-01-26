import React from 'react';
import faker from 'faker/locale/fa';
import { Link } from 'react-router-dom';

import {
    Container,
    Row,
    Col,
    CardHeader,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledButtonDropdown,
    Card,
    ButtonGroup,
    Button,
    CardBody,
    CardFooter,
    CardGroup,
    Table,
    TabPane,
    Badge,
    Nav,
    NavItem,
    UncontrolledTabs
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";

import { Profile } from "../../components/Profile";
import { ProfileOverviewCard } from "../../components/Profile/ProfileOverviewCard";
import { DlRowContacts } from "../../components/Profile/DlRowContacts";
import { DlRowAddress } from "../../components/Profile/DlRowAddress";
import { ChatLeft } from "../../components/Chat/ChatLeft";
import { ChatRight } from "../../components/Chat/ChatRight";
import { ChatCardFooter } from "../../components/Chat/ChatCardFooter";
import { TrTableMessages } from "./components/TrTableMessages";
import { TimelineDefault } from "../../components/Timeline/TimelineDefault";
import {translate} from "react-translate";
import {NavLink} from "reactstrap";

const ProfileDetails = (props) => {
    return(
    <React.Fragment>
        <Container>
            { /* START Content */}
            <Row>
                <Col lg={ 4 }>
                    <Card>
                        <CardBody className="text-right">
                            <Profile />

                            <Row className="mt-3">
                                <Col sm={ 12 } md={ 4 }>
                                    <Button color="primary" block tag={ Link } to="/apps/new-email" className="mb-3 mb-lg-0 rounded-pill">
                                        {props.t("Email")}
                                    </Button>
                                </Col>
                                <Col sm={ 12 } md={ 4 }>
                                    <Button color="primary" outline block tag={ Link } to="/apps/new-email" className="mb-3 mb-lg-0 rounded-pill">
                                        {props.t("Message")}
                                    </Button>
                                </Col>
                                <Col sm={ 12 } md={ 4 }>
                                    <Button color="primary" className=" mb-3 mb-lg-0 rounded-pill" outline block tag={ Link } to="/apps/profile-edit">
                                        {props.t("Edit")}
                                    </Button>
                                </Col>
                            </Row>
                            <div className="mt-4 mb-2 ">
                                <span className="small iranSansBold">
                                    {props.t("Bio")}
                                </span>
                            </div>
                            <p className="text-justify">
                                متنی از زندگینامه شما در این مکان نمایش داده شده است
                            </p>
                            <div className="mt-4 mb-2">
                                <span className="small iranSansBold">
                                    {props.t("User Types")}
                                </span>
                            </div>
                            <div className=" mb-4">
                                <Badge pill color="primary" className="mr-1">
                                    {props.t("manager")}
                                </Badge>
                                <Badge pill color="info" className="mr-1">
                                    {props.t("teacher")}
                                </Badge>
                            </div>
                            <div className="mt-4 mb-2 ">
                                <span className="small iranSansBold">{props.t('Contact')}</span>
                            </div>
                            <DlRowContacts
                                leftSideClassName="text-right"
                                rightSideClassName="text-left "
                            />
                            <div className="mt-4 mb-2">
                                <span className="small iranSansBold">{props.t('Address')}</span>
                            </div>
                            <DlRowAddress
                                leftSideClassName="text-right"
                                rightSideClassName="text-left "
                            />
                        </CardBody>
                    </Card>
                </Col>
                <Col lg={ 8 }>
                    <UncontrolledTabs initialActiveTabId="overview">
                        { /* START Pills Nav */}
                        <Nav pills className="mb-4 flex-column flex-md-row mt-4 mt-lg-0 text-right">
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="overview">
                                    {props.t('Overview')}
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="detailContact">
                                    {props.t('Detail Contact')}
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="chat">
                                    {props.t('Chat')}
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                            <NavItem>
                                <UncontrolledTabs.NavLink tabId="messages">
                                    {props.t('Messages')} <Badge pill color="secondary" className="ml-2">5</Badge>
                                </UncontrolledTabs.NavLink>
                            </NavItem>
                        </Nav>
                        { /* END Pills Nav */}
                        <UncontrolledTabs.TabContent>
                            <TabPane tabId="overview">
                                <div className="mb-5 d-flex justify-content-center">
                                    <Card body className={"m-1"}>
                                        <ProfileOverviewCard
                                            title="Views"
                                            badgeColor="primary"
                                                badgeTitle="Monthly"
                                            value="6.200"
                                                valueTitle="Total Views"
                                            footerTitle="Last Month"
                                            footerTitleClassName="text-success"
                                                footerIcon="caret-up"
                                                footerValue="23%"
                                        />
                                    </Card>
                                    <Card body className={"m-1"}>
                                        <ProfileOverviewCard
                                            title="Orders"
                                            badgeColor="info"
                                                badgeTitle="Annual"
                                            value="75.938"
                                                valueTitle="New Orders"
                                            footerTitle="Last Annual"
                                            footerTitleClassName="text-danger"
                                                footerIcon="caret-down"
                                                footerValue="96%"
                                        />
                                    </Card>
                                    <Card body className={"m-1"}>
                                        <ProfileOverviewCard
                                            title="Visits"
                                            badgeColor="secondary"
                                                badgeTitle="Today"
                                            value="75.938"
                                                valueTitle="Total Visits"
                                            footerTitle="Yesterday"
                                            footerTitleClassName="text-success"
                                                footerIcon="caret-up"
                                                footerValue="40%"
                                        />
                                    </Card>
                                </div>
                                <TimelineDefault
                                    showPillDate
                                        pillDate="Today"
                                    smallIconColor="danger"
                                    iconCircleColor="danger"
                                        iconCircle="exclamation"
                                />
                                <TimelineDefault
                                    showPillDate
                                        pillDate="Yesterday"
                                    smallIconColor="info"
                                    iconCircleColor="info"
                                        iconCircle="comment"
                                />
                                <TimelineDefault
                                    showPillDate
                                        pillDate="2 Days ago"
                                    smallIconColor="primary"
                                    iconCircleColor="primary"
                                        iconCircle="envelope"
                                />
                                <TimelineDefault
                                    showPillDate
                                        pillDate="3 Months ago"
                                    smallIconColor="warning"
                                    iconCircleColor="warning"
                                        iconCircle="clock-o"
                                />
                                <TimelineDefault
                                    showPillDate
                                        pillDate="Year ago"
                                    smallIconColor="success"
                                    iconCircleColor="success"
                                        iconCircle="check"
                                />
                                <TimelineDefault
                                    iconCircle="close"
                                />
                            </TabPane>
                            <TabPane tabId="detailContact">
                                <Card body className="text-right">
                                    <div className="mb-2">
                                        <span className="small">{props.t('Contact')}</span>
                                    </div>
                                    <DlRowContacts
                                    leftSideClassName="text-right"
                                    rightSideClassName="text-left"
                                    />
                                    <div className="mt-4 mb-2">
                                        <span className="small">{props.t('Address')}</span>
                                    </div>
                                    <DlRowAddress
                                        leftSideClassName="text-right"
                                        rightSideClassName="text-left"
                                    />
                                </Card>
                            </TabPane>
                            <TabPane tabId="chat">
                                <Card>
                                    <CardHeader className="d-flex bg-white bb-0">
                                        <h6 className="align-self-center mb-0">
                                            {props.t('Chat with')+" "}
                                            علی حسینی
                                        </h6>
                                        <UncontrolledButtonDropdown className="align-self-center ml-auto">
                                            <DropdownToggle color="link" size="sm">
                                                <i className="fa fa-gear"></i><i className="fa fa-angle-down ml-2" />
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-comment mr-2"></i>
                                                    {props.t("Private Message")}
                                                </DropdownItem>
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-search mr-2"></i>
                                                    {props.t("Search")}
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    <i className="fa fa-fw fa-ban mr-2"></i>
                                                    {props.t('Block this User')}
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                    </CardHeader>
                                    <CardBody>
                                        <ChatLeft cardClassName="bg-gray-300 b-0 text-dark" />
                                        <ChatRight cardClassName="text-dark"/>
                                        <ChatLeft cardClassName="bg-gray-300 b-0 text-dark" />
                                        <div className="mt-4 mb-3 text-center">
                                            <span className="small">
                                                دیروز
                                            </span>
                                        </div>
                                        <ChatRight cardClassName="text-dark" />
                                    </CardBody>
                                    <CardFooter>
                                       <ChatCardFooter />
                                    </CardFooter>
                                </Card>
                            </TabPane>
                            <TabPane tabId="messages">
                                <Card>
                                    <CardBody className="d-flex">
                                        <ButtonGroup size="sm">
                                            <Button color="secondary" outline active>
                                                {props.t('Inbox')}
                                            </Button>
                                            <Button color="secondary" outline>
                                                {props.t('Archive')}
                                            </Button>
                                        </ButtonGroup>
                                        <span className="mr-auto">
                                            {props.t('PAGINATION_BY_FROM_TO_TOTAL',{from:1,to:10,total:57})}
                                        </span>
                                    </CardBody>
                                    { /* START Table */}
                                    <Table className="mb-0" hover responsive>
                                        <thead>
                                            <tr>
                                                <th className="bt-0 text-center">{props.t('From')}</th>
                                                <th className="bt-0 text-center">{props.t('Subject')}</th>
                                                <th className="bt-0 text-center">
                                                    {props.t("Date")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           <TrTableMessages />
                                           <TrTableMessages />
                                           <TrTableMessages />
                                           <TrTableMessages />
                                           <TrTableMessages />
                                           <TrTableMessages />
                                           <TrTableMessages />
                                           <TrTableMessages />
                                           <TrTableMessages />
                                        </tbody>
                                    </Table>
                                    { /* END Table */}
                                    <CardFooter className="d-flex">
                                        <ButtonGroup size="sm">
                                            <Button color="secondary" outline>
                                                <i className="fa fa-fw fa-angle-right"></i>
                                            </Button>
                                            <Button color="secondary" outline>
                                                <i className="fa fa-fw fa-angle-left"></i>
                                            </Button>
                                        </ButtonGroup>
                                        <span className="mr-auto align-self-center">
                                            {props.t('PAGINATION_BY_FROM_TO_TOTAL',{from:1,to:10,total:57})}
                                        </span>
                                    </CardFooter>
                                </Card>
                            </TabPane>
                        </UncontrolledTabs.TabContent>
                    </UncontrolledTabs>
                </Col>
            </Row>
            { /* END Content */}

        </Container>
    </React.Fragment>
)
};
export default translate('FA')(ProfileDetails);
