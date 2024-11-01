import { lang } from 'moment';
import actionTypes from './actionTypes';

export const appStartUpComplete = () => ({ //khi app start up xong
    type: actionTypes.APP_START_UP_COMPLETE //(kieu redux ko truyen data)
});

export const setContentOfConfirmModal = (contentOfConfirmModal) => ({ //set nội dung của modal  xác nhận 
    type: actionTypes.SET_CONTENT_OF_CONFIRM_MODAL,
    contentOfConfirmModal: contentOfConfirmModal //nội dung của modal(kieu redux truyen data)
});

export const changeLanguageApp = (languageInput) => ({
    type: actionTypes.CHANGE_LANGUAGE,
    language: languageInput
})//thay đổi ngôn ngữ
    