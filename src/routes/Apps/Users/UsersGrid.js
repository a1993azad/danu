import React from 'react';

import { CardColumns } from './../../../components';
import { UsersCardGrid } from "../../components/Users/UsersCardGrid";
import { Paginations } from "../../components/Paginations";

const UsersGrid = (props) => (
	<React.Fragment>
		<CardColumns>
			<UsersCardGrid id="1"
						   {...props}/>
			<UsersCardGrid
				id="2"
							   {...props}
			/>
			<UsersCardGrid
				id="3"
						   {...props}
			/>
			<UsersCardGrid
				id="4"
							   {...props}
			/>
			<UsersCardGrid
				id="5"
						   {...props}
			/>
			<UsersCardGrid
				id="6"
							   {...props}
			/>
			<UsersCardGrid
				id="7"
						   {...props}
			/>
			<UsersCardGrid
				id="8"
							   {...props}
			/>
			<UsersCardGrid
				id="9"
						   {...props}
			/>
			<UsersCardGrid
				id="10"
							   {...props}
			/>
			<UsersCardGrid
				id="11"
						   {...props}
			/>
			<UsersCardGrid
				id="12"
							   {...props}
			/>
		</CardColumns>
		<div className="d-flex justify-content-center">
			<Paginations />
		</div>
    </React.Fragment>
);

export default UsersGrid;
