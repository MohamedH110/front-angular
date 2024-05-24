export class Coaches {
    id!: number;
    first_name: String;
    last_name: string;
    age: number;
    email: string;
    sport: string;
    



    constructor(first_name:string ,last_name:string,email:string,age:number,sport:string) {
        
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.age = age;
        this.sport = sport;
      
    }
}
