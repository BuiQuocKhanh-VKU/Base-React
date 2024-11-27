import actionTypes from '../actions/actionTypes';

const initialState = {
	genders: [],
	roles: [],
	positiona: [],
}

const adminReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_GENDER_START:
			console.log('Khanh fire fetch gender start:', action);
			return {
				...state
			}

		case actionTypes.FETCH_GENDER_SUCCESS:
			let copyState = { ...state };
			copyState.genders = action.data;
			console.log('Khanh fire fetch gender success:', copyState);
			return {
				...state
			}

		case actionTypes.FETCH_GENDER_FAILED:
			console.log('Khanh fire fetch gender fail:', action);
			return {
				...state
			}

		default:
			return state;
	}
}

export default adminReducer;