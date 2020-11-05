import { Role } from '../role/role.model';

export class User {
    constructor(
        public userID: number,
        public firstName: string,
        public lastName: string,
        public email: string,
        public userName: string,
        public password: string,
        public roleID: Role["roleID"]
    ) { }
}
