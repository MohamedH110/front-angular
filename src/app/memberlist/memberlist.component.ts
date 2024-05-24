import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoachesService } from '../coaches.service';
import { Coaches } from '../coaches';
@Component({
  selector: 'app-memberlist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './memberlist.component.html',
  styleUrl: './memberlist.component.css'
})
export class MemberlistComponent implements OnInit {
  members: Member[] = [];
  coaches: Coaches[] = []; 


  constructor(private memberService: MemberService,private router: Router,private coachesService: CoachesService) { }

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
      sport:formValue.sport,
      password:formValue.password,
      coach_id: formValue.coach_id
    };

    this.memberService.createMember(newMember)
      .subscribe(member => {
        this.members.push(member);
      });
      console.log(newMember);
      alert('Member Is successfully ');
  }

  

  deleteMember(id: number): void {
    this.memberService.deleteMember(id)
      .subscribe(() => {
        this.members = this.members.filter(m => m.id !== id);
      });
  }

  
  


}
