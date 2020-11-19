/* eslint-disable class-methods-use-this */
import api from './api';

class User {
  async findById(data) {
    const response = await api.get(`/users/${data}`);
    return response;
  }
}

export default new User();
