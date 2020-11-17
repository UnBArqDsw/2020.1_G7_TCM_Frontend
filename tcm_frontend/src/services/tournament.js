/* eslint-disable class-methods-use-this */
import api from './api';

class Tournament {
  async createTournament(data) {
    const response = await api.post('/tournament', data);
    return response;
  }
}

export default new Tournament();
