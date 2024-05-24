import { Component } from '@angular/core';
import { CoachesService } from '../coaches.service';
import { Coaches } from '../coaches';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coacheslist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './coacheslist.component.html',
  styleUrl: './coacheslist.component.css'
})
export class CoacheslistComponent {
  coaches: Coaches[] = [];

  constructor(private coachesService: CoachesService,private router: Router) { }

  ngOnInit(): void {
    this.getCoaches();
  }

  getCoaches(): void {
    this.coachesService.getCoaches().subscribe(coaches => this.coaches =coaches);
  }

  addCoache(formValue:Coaches): void {
    const newCoach: Coaches = {
      id: 0, 
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      email: formValue.email,
      age: formValue.age,
      sport:formValue.sport,
      
    };

    this.coachesService.createCoach(newCoach)
      .subscribe(coaches => {
        this.coaches.push(coaches);
      });
      console.log(newCoach);
      alert('Coach is added successfully ');
  }

  

  deleteMember(id: number): void {
    this.coachesService.deleteCoach(id)
      .subscribe(() => {
        this.coaches = this.coaches.filter(m => m.id !== id);
      });
  }

  
  


}
