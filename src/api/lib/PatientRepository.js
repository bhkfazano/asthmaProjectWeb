import BaseRepository from "./BaseRepository.js";

export default class PatientRepository extends BaseRepository {

    constructor() {
        super();
    }

    async register(body) {
        return await this.post('/registerPatient', body);
    }

    async fetchByProfessional(body) {
        return await this.post('/fetchByProfessional', body);
    }

    async updateGoals(body) {
        return await this.post('/updateGoals', body)
    }

}