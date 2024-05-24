import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updatemember',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './updatemember.component.html',
  styleUrl: './updatemember.component.css'
})


  export class UpdatememberComponent implements OnInit {
    memberId !: number;
    member !: Member;

  
    constructor(
      private route: ActivatedRoute,
      private memberService: MemberService
    ) { }
  
    ngOnInit(): void {
      this.memberId = this.route.snapshot.params['id'];
      this.memberService.getMember(this.memberId)
        .subscribe(member => {
          this.member = member;
        });
    }
    
    
    
  
    updateMember(): void {
      this.memberService.updateMember(this.member)
        .subscribe(() => {
          console.log('Member updated successfully');
          
        });
    }

}
