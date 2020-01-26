import React from 'react';
import faker from 'faker/locale/fa';
import { Link } from 'react-router-dom';

import {
    Badge,
    Avatar,
    AvatarAddOn,
    Media
} from './../../../../components';

import { randomArray } from './../../../../utilities';

const status = [
    "warning",
    "danger",
    "success",
    "secondary"
];

const tag = [
    "primary",
    "secondary",
    "info"
];


const TrTableMessages = () => (
    <React.Fragment>
        <tr>
            <td className="align-middle">
                <Media>
                    <Media left className="align-self-center mr-3">
                        <Avatar.Image
                            size="sm"
                            src="http://bs4.webkom.co/img/avatars/2.jpg"
                            addOns={[
                                <AvatarAddOn.Icon
                                    className="fa fa-circle"
                                    color="white"
                                    key="avatar-icon-bg"
                                />,
                                <AvatarAddOn.Icon
                                    className="fa fa-circle"
                                    color={ randomArray(status) }
                                    key="avatar-icon-fg"
                                />
                            ]}
                        />
                    </Media>
                    <Media body>
                        <div className="mt-0 d-flex text-center iranSansBold" style={{fontSize:'.8em'}}>
                            { faker.name.firstName() } { faker.name.lastName() }
                        </div>
                        <span className="d-block text-center" style={{fontSize:'.8em'}}>
                            { faker.address.state() }
                        </span>
                    </Media>
                </Media>
            </td>
            <td className="align-middle text-justify">
                <Link to="/apps/email-details">
                    { faker.company.catchPhrase() }
                </Link>
                <br />
                <div>
                    { faker.lorem.sentence() }
                </div>
                <Badge color={ randomArray(tag) } pill className="mr-1">
                    { faker.commerce.department() }
                </Badge>
            </td>
            <td className="align-middle text-center">
                20 اسفند 1398<br />
                13:54
            </td>
        </tr>
    </React.Fragment>
)

export { TrTableMessages };
