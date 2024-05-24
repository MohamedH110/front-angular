import { Coaches } from "./coaches";
export class Equipment {
    number!: number;
    name: String;
    category: string;
    availability: Boolean;
    weight: number;
    coach_id!: number;

    
    



    constructor(name:string , category: string,availability: Boolean,weight: number,coach :number) {
        
        this.name =name;
        this.category= category;
        this.availability = availability;
        this.weight = weight;
        this.coach_id=coach;
      
      
    }
}
