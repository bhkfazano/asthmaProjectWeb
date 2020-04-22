import BaseRepository from "./BaseRepository.js";

export default class ProfessionalRepository extends BaseRepository {

    constructor() {
        super();
    }

    async signup(body) {
        return await this.post('/registerProfessional', body);
    }

    async login(body) {
        return await this.post('/loginProfessional',body);
    }

    async fetch() {
        return await this.get('/professionals');
    }

}