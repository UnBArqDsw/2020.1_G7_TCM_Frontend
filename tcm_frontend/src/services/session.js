/* eslint-disable class-methods-use-this */
import api from './api';

class SessionService {
  async signIn(email, password) {
    const data = { email, password };
    const response = await api.post('/session', data);
    await localStorage.setItem('accessToken', response.data.token);
    return response;
  }

  async signUp(data) {
    const response = await api.post('/user', data);
    await this.signIn(data.email, data.password);
    return response;
  }

  async signOut() {
    await localStorage.removeItem('accessToken');
    return true;
  }
}
export default new SessionService();
