import { Coaches } from "./coaches";
export class Member {
    id!: number;
    first_name: String;
    last_name: string;
    email: string;
    age: number;
    sport: string;
    password:string;
    coach_id!: number;



    constructor(first_name:string ,last_name:string,email:string,age:number,sport:string,password:string,coach_id: number) {
        
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.age = age;
        this.sport = sport;
        this.password=password;
        this.coach_id=coach_id;
    }

}
