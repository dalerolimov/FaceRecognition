import api from 'data/axios';

export default {
  loginUser(login) {
    return api.post(`Auth/Login`, login);
  }
};
