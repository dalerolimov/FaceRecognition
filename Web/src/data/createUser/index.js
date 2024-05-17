import api from 'data/axios';

export default {
  refreshUser() {
    return api.get('User/GetAll');
  },
  UserId(user) {
    return api.get(`User/GetById/${user}`);
  },
  createUser(formData) {
    return api.post('User/Create', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  editUser(formData) {
    return api.put('User/Update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  deleteUser(user) {
    return api.delete(`User/Delete?id=${user}`);
  }
};
