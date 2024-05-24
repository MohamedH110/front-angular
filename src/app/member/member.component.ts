import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Coaches } from '../coaches'; 
import { CoachesService } from '../coaches.service';


@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})

export class MemberComponent implements OnInit {
  members: Member[] = [];
  coaches: Coaches[] = []; // Array to hold coaches
  selectedCoach!: number; 

  constructor(private memberService: MemberService,private router: Router, private coachesService: CoachesService) { }

  ngOnInit(): void {
    this.getMembers();
    this.getCoaches(); 
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe(members => this.members = members);
  }
  getCoaches(): void {
    this.coachesService.getCoaches().subscribe(coaches => this.coaches = coaches); // Use CoachesService to fetch coaches
  }

  addMember(formValue:Member): void {
    const newMember: Member = {
      id: 0,
      first_name: formValue.first_name,
      last_name: formValue.last_name,
      email: formValue.email,
      age: formValue.age,
      sport: formValue.sport,
      password: formValue.password,
      coach_id: formValue.coach_id
    };

    this.memberService.createMember(newMember)
      .subscribe(member => {
        this.members.push(member);
      });
      console.log(newMember);
      alert('Account created successfully you can login now'+ (this.selectedCoach ? this.selectedCoach : 'Not selected'));
  }

  

  deleteMember(id: number): void {
    this.memberService.deleteMember(id)
      .subscribe(() => {
        this.members = this.members.filter(m => m.id !== id);
      });
  }

  onSubmit(form: any): void {
    console.log('onSubmit called');
    if (form.valid) {
      const email = form.value.email;
      const password = form.value.password;
      this.memberService.login(email, password)
        .subscribe(member => {
          // Handle successful login, e.g., redirect or store token
          console.log('Login successful');
          alert('login successful');
          this.router.navigate(['/updatemember',member.id]);
          
        }, error => {
          // Handle login error, e.g., display error message
          console.log('Login error');
        });
    }
  }

}
