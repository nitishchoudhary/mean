export class User{
    
    constructor(
        public password: string,
        public email:string,
        public firstName?: string,
        public lastName?: string,
    ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

}