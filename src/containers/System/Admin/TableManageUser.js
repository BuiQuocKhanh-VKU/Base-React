import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './TableManageUser.scss'; //import css;
import MarkdownIt from 'markdown-it'; //import thu vien markdown-it
import MdEditor from 'react-markdown-editor-lite'; //import thu vien react-markdown-editor-lite
// css
import 'react-markdown-editor-lite/lib/index.css'; //import css

const mdParser = new MarkdownIt(/* Markdown-it options */); //khoi tao markdown-it
//Finish import
function handleEditorChange({ html, text }) { //khoi tao ham handleEditorChange
	console.log('handleEditorChange', html, text); //in ra html va text
}
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
			<React.Fragment>
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
							})
						}
					</tbody>
				</table>

				<MdEditor style={{ height: '500px' }}
				renderHTML ={text => mdParser.render(text)}
				onChange={handleEditorChange}
				/>
			</React.Fragment>
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
