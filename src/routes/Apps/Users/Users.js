import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Row,
    Col,
    Modal,
    ModalHeader,
    Button,
    ModalBody,
    ModalFooter,
    CardBody, FormGroup, Label, Input, setupPage
} from './../../../components';
import { HeaderMain } from "../../components/HeaderMain";
import UsersList from './UsersList';
import UsersGrid from './UsersGrid';
import { UsersLeftNav } from "../../components/Users/UsersLeftNav";
import { ProjectsSmHeader } from "../../components/Projects/ProjectsSmHeader";
import {translate} from "react-translate";
import MaskedInput from "react-text-mask";
import Card from "../../../components/Card";
import {userActions} from "../../../_actions";
import {FormFeedback} from "reactstrap";


const Users = (props) => {
    const [addModal,setAddModal]=React.useState(false);
    const [invalid_phone_number,setInvalid_phone_number]=React.useState(false);
    const [invalid_national_code,setInvalid_national_code]=React.useState(false);
    const [invalid_first_name,setInvalid_first_name]=React.useState(false);
    const [invalid_last_name,setInvalid_last_name]=React.useState(false);
    const [phone_number,setPhone_number]=React.useState('');
    const [national_code,setNational_code]=React.useState('');
    const [first_name,setFirst_name]=React.useState('');
    const [last_name,setLast_name]=React.useState('');
    const addClick=()=>{
        setAddModal(true);
    }
    const submit=(e)=>{
        e.preventDefault();
        if(userActions.isValid(phone_number,"phone_number")){
            if(userActions.isValid(national_code,"national_code")){
                if(first_name.length){
                    if(last_name.length){

                    }else{
                        setInvalid_last_name(true);
                    }
                }else{
                    setInvalid_first_name(true);
                }
            }else{
                setInvalid_national_code(true);
            }
        }else{
            setInvalid_phone_number(true);
        }
    }
    const toggleModal=()=>{
        setAddModal(false);
    }
    return(
    <React.Fragment>
        <Container>
            <HeaderMain
                title={props.t("Users")}
                className="mb-5 mt-4"
            />
            <Row>
                <Col lg={ 3 }>
                    <UsersLeftNav />
                </Col>
                <Col lg={ 9 }>
                    <ProjectsSmHeader
                       /* subTitle={props.match.params.type === "list"?"Users List":"Users Grid"}*/
                        linkList="/users/list"
                        linkGrid="/users/grid"
                        hideBreadcrumb
                        addClick={addClick}
                    />
                    <div className="mt-2">
                    {
                        props.match.params.type === "list" ?
                            <UsersList {...props}/> :
                            <UsersGrid {...props}/>
                    }
                    </div>
                </Col>
            </Row>
        </Container>
        <Modal isOpen={addModal} toggle={toggleModal} backdrop={true} >
            <ModalHeader className="text-center d-flex justify-content-around" toggle={toggleModal}>{props.t("New User")}</ModalHeader>
            <ModalBody>
                <Card>
                    <CardBody>
                        <Row>
                            <Col lg={ 6 }>
                                <FormGroup className="text-right">
                                    <Label for="phone_number">
                                        {props.t("Phone Number")}
                                    </Label>
                                    <Input id="phone_number" type="tel" maxLength={11} className="rounded-pill" value={phone_number} invalid={invalid_phone_number} name="phone_number" onChange={(e)=>{if(userActions.onlyDigit(e.target.value))setPhone_number(e.target.value);setInvalid_phone_number(false)}}/>
                                    <FormFeedback >{props.t("phone number must be valid!")}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg={ 6 }>
                                <FormGroup className="text-right">
                                    <Label for="national_code">
                                        {props.t("National Code")}
                                    </Label>
                                    <Input id="national_code" type="tel" maxLength={10} className="rounded-pill" value={national_code} invalid={invalid_national_code} name="national_code" onChange={(e)=>{if(userActions.onlyDigit(e.target.value))setNational_code(e.target.value);setInvalid_national_code(false)}}/>
                                    <FormFeedback >{props.t("National Code must be valid!")}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={ 6 }>
                                <FormGroup className="text-right">
                                    <Label for="first_name">
                                        {props.t("First Name")}
                                    </Label>
                                    <Input id="first_name" type="text" className="rounded-pill" value={first_name} invalid={invalid_first_name} name="first_name" onChange={(e)=>{setFirst_name(e.target.value);setInvalid_first_name(false)}}/>
                                    <FormFeedback >{props.t("please enter user first name")}</FormFeedback>
                                </FormGroup>
                            </Col>
                            <Col lg={ 6 }>
                                <FormGroup className="text-right">
                                    <Label for="last_name">
                                        {props.t("Last Name")}
                                    </Label>
                                    <Input id="last_name" type="text"  className="rounded-pill" value={last_name} invalid={invalid_last_name} name="last_name" onChange={(e)=>{setLast_name(e.target.value);setInvalid_last_name(false)}}/>
                                    <FormFeedback >{props.t("please enter user last name!")}</FormFeedback>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </ModalBody>
            <ModalFooter className="d-flex justify-content-center">
                <Button color="primary" className="m-2 rounded-pill" style={{width:120}} outline type="submit" onClick={submit}>{props.t("Submit")}</Button>
                <Button color="danger" className="m-2 rounded-pill" style={{width:120}} outline type="reset" onClick={toggleModal}>{props.t("Cancel")}</Button>
            </ModalFooter>
        </Modal>
    </React.Fragment>
)
};
Users.propTypes = {
    match: PropTypes.object.isRequired
};


export default translate('FA')(setupPage({
    pageTitle: "کاربران"
})(Users));
