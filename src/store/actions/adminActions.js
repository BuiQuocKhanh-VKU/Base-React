import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
	return async (dispatch, getstate) => {
		try {
			dispatch({ type: actionTypes.FETCH_GENDER_START })

			let res = await getAllCodeService("GENDER");
			if (res && res.errCode === 0) {
				dispatch(fetchGenderSuccess(res.data));
			} else {
				dispatch(fetchGenderFailed());
			}
		} catch (e) {
			dispatch(fetchGenderFailed());
			console.log('fetchGenderStart error', e);
		}
	}
}
export const fetchGenderSuccess = (genderData) => ({
	type: actionTypes.FETCH_GENDER_SUCCESS,
	data: genderData
})


export const fetchGenderFailed = () => ({ 
	type: actionTypes.FETCH_GENDER_FAILED
})


						//porsition

export const fetchPositionStart = () => {
	return async (dispatch, getstate) => {
		try {
			
			let res = await getAllCodeService("POSITION");
			if (res && res.errCode === 0) {
				dispatch(fetchPositionSuccess(res.data));
			} else {
				dispatch(fetchPositionFailed());
			}
		} catch (e) {
			dispatch(fetchPositionFailed());
			console.log('fetchPositionStart error', e);
		}
	}
}
export const fetchPositionSuccess = (positionData) => ({
	type: actionTypes.FETCH_POSITION_SUCCESS,
	data: positionData
}) 


export const fetchPositionFailed = () => ({
	type: actionTypes.FETCH_POSITION_FAILED
})


							//role

export const fetchRoleStart = () => {
	return async (dispatch, getstate) => {
		try {
			let res = await getAllCodeService("ROLE");
			if (res && res.errCode === 0) {
				dispatch(fetchRoleSuccess(res.data));
			} else {
				dispatch(fetchPositionFailed());
			}
		} catch (e) {
			dispatch(fetchRoleFailed());
			console.log('fetchRoleStart error', e); 
		}
	}
}
export const fetchRoleSuccess = (roleData) => ({
	type: actionTypes.FETCH_ROLE_SUCCESS,
	data: roleData
})


export const fetchRoleFailed = () => ({
	type: actionTypes.FETCH_ROLE_FAILED
})

