import { Routes, RouterModule } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { OurclassesComponent } from './ourclasses/ourclasses.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UpdatememberComponent } from './updatemember/updatemember.component';
import { AdminComponent } from './admin/admin.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { MemberlistComponent } from './memberlist/memberlist.component';
import { CoacheslistComponent } from './coacheslist/coacheslist.component';
import { EquipmentslistComponent } from './equipmentslist/equipmentslist.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'members', component: MemberComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'ourclasses', component: OurclassesComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'updatemember/:id', component: UpdatememberComponent},
    { path: 'admindashboard', component: AdminComponent},
    { path: 'adminprofile', component: AdminprofileComponent},
    { path: 'memberlist', component: MemberlistComponent},
    { path: 'coacheslist', component: CoacheslistComponent},
    { path: 'equipmentlist', component: EquipmentslistComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }