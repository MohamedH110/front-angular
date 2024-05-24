import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { MemberComponent } from "./member/member.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MemberComponent,RouterModule,CommonModule,HomeComponent]
})
export class AppComponent {
  title = 'Gym';
}
