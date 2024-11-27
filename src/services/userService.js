// de goi phia server
import axios from "../axios";

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword });  //truyen tham so vao
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);  //truyen tham so vao
}

const createNewUserService = (data) => {
    console.log('check data from service: ', data);
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = (userId) => {
    return axios.delete(`/api/delete-user`, { //goi phuong thuc delete 
        data: { //truyen tham so vao 
            id: userId      //truyen id cua user can xoa
        }
    });
}

const editUserService = (inputData) => {
    return axios.put(`/api/edit-user`, inputData); //goi phuong thuc put de edit user
};

const getAllCodeService = (inputType) => {
return axios.get(`/api/allcode?type=${inputType}`); //truyen tham so vao
}

export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService,editUserService,getAllCodeService }; //export cac ham de su dung o file khac