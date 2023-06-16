export class Coachee {
    public name: string;
    public email: string;
    public password: string;

    constructor(name: string, email: string, password: string){
        this.email=email;
        this.name=name;
        this.password=password;
    }
}