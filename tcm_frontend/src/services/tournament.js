/* eslint-disable class-methods-use-this */
import api from './api';

class Tournament {
  async createTournament(data) {
    const response = await api.post('/tournament', data);
    return response;
  }

  async solicitationTournament(tournamentId) {
    const response = await api.post(`/solicitation/${tournamentId}`);
    return response;
  }

  async acceptSolicitation(tournamentId, requester) {
    const response = await api.post(`/accept/${tournamentId}`, { requester });
    return response;
  }
}

export default new Tournament();
