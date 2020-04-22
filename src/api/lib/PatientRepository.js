import BaseRepository from "./BaseRepository.js";

export default class PatientRepository extends BaseRepository {

    constructor() {
        super();
    }

    async register(body) {
        return await this.post('/registerPatient', body);
    }

}