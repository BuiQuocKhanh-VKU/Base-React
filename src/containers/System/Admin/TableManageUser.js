import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './TableManageUser.scss'; //import css

class TableManageUser extends Component { //khoi tao component TableManageUser

	constructor(props) { //khoi tao constructor de khoi tao state
		super(props);
		this.state = {
			usersRedux: [], //khoi tao mang usersRedux

		}
	}

	componentDidMount() {
		this.props.fetchUserRedux(); //goi ham fetchUserRedux
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.listUsers !== this.props.listUsers) { //kiem tra xem ListUsers co thay doi khong
			this.setState({
				usersRedux: this.props.listUsers
			}) //neu co thi gan ListUsers vao arrUsers
		}
	}

	handleDeleteUser = (user) => {
		this.props.deleteAUserRedux(user.id); //goi ham deleteAUserRedux
	}

	handleEditUser = (user) => {
		this.props.handleEditUserFromParentKey(user); //goi ham editAUserRedux
	}

	render() {
		let arrUsers = this.state.usersRedux; //lay mang usersRedux tu state

		return (

			<table id="TableManageUser">
				<tbody>
					<tr>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Address</th>
						<th>Actions</th>
					</tr>
					{arrUsers && arrUsers.length > 0 &&
						arrUsers.map((item, index) => { //map qua tung phan tu cua arrUsers
							return (
								<tr key={index}>
									<td>{item.email}</td>
									<td>{item.firstName}</td>
									<td>{item.lastName}</td>
									<td>{item.address}</td>
									<td>
										<button
											onClick={() => this.handleEditUser(item)}
											className="btn-edit" ><i className="fas fa-pencil-alt"></i></button>
										<button
											onClick={() => this.handleDeleteUser(item)}
											className="btn-delete" ><i className="fas fa-trash"></i></button>
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>

		);
	}


}

const mapStateToProps = state => {
	return {
		listUsers: state.admin.users //lay mang users tu store
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()), //goi ham fetchUserRedux
		deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id)) //goi ham deleteAUserRedux
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
