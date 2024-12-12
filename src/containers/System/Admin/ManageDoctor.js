import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import './ManageDoctor.scss'; //import css;
import MarkdownIt from 'markdown-it'; //import thu vien markdown-it
import MdEditor from 'react-markdown-editor-lite'; //import thu vien react-markdown-editor-lite
// css
import 'react-markdown-editor-lite/lib/index.css'; //import css


import Select from 'react-select'; //import thu vien react-select
const options = [ //khoi tao mang options
	{ value: 'chocolate', label: 'Chocolate' },
	{ value: 'strawberry', label: 'Strawberry' },
	{ value: 'vanilla', label: 'Vanilla' }
]
const mdParser = new MarkdownIt(/* Markdown-it options */); //khoi tao markdown-it

class ManageDoctor extends Component { //khoi tao component TableManageUser

	constructor(props) { //khoi tao constructor de khoi tao state
		super(props);
		this.state = {
			contentMarkdown: '',
			contentHTML: '',
			selectedOption: '',
			description: '',
		}
	}

	componentDidMount() {

	}

	componentDidUpdate(prevProps, prevState, snapshot) {

	}

	//Finish import
	handleEditorChange = ({ html, text }) => { //khoi tao ham handleEditorChange
		this.setState({
			contentMarkdown: text,
			contentHTML: html,
		})
	}

	handleSaveContentMarkdown = () => {

	}

	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	}

	handleOnChangeDesc = (event) => {
		this.setState({
			description: event.target.value
		})
	}

	render() {

		return (
			<div className="manage-doctor-container">
				<div className="manage-doctor-title">
					Creating Doctors Information
				</div>
				<div className="more-infor">
					<div className="content-left form-group">

						<label>Selecting Doctor</label>
						<Select
							value={this.state.selectedOption}
							onChange={this.handleChange}
							options={options}
							className="form-control"
						/>
					</div>
					<div className='content-right '>
						<label>Introduction Information:</label>
						<textarea className="form-control" rows="4"
							onChange={(event) => this.handleOnChangeDesc(event)}
							value={this.state.description}
						>
							More Information
						</textarea>
					</div>
				</div>
				<div className="manage-doctor-editor">
					<MdEditor style={{ height: '500px' }}
						renderHTML={text => mdParser.render(text)}
						onChange={this.handleEditorChange}
					/>
				</div>
				<button
					onClick={() => this.handleSaveContentMarkdown}
					className="save-content-doctor">Save Information</button>
			</div>

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
