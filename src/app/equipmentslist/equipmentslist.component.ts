import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Equipment } from '../equipment';
import { EquipmentService } from '../equipment.service';
import { CoachesService } from '../coaches.service';
import { Coaches } from '../coaches';

@Component({
  selector: 'app-equipmentslist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './equipmentslist.component.html',
  styleUrl: './equipmentslist.component.css'
})
export class EquipmentslistComponent {
  equipments: Equipment[] = [];
  coaches: Coaches[] = []; 

  constructor(private equipmentService: EquipmentService, private router: Router,private coachesService: CoachesService) { }

  ngOnInit(): void {
    this.getEquipments();
    this.getCoaches(); 
  }

  getEquipments(): void {
    this.equipmentService.getEquipments().subscribe(equipments => this.equipments = equipments);
  }
  getCoaches(): void {
    this.coachesService.getCoaches().subscribe(coaches => this.coaches = coaches); // Use CoachesService to fetch coaches
  }

  addEquipment(formValue: Equipment): void {
    const newEquipment: Equipment = {
      number: 0,
      name: formValue.name,
      category: formValue.category,
      availability: formValue.availability,
      weight: formValue.weight,
      coach_id: formValue.coach_id
    };

    this.equipmentService.createEquipment(newEquipment)
      .subscribe(equipment => {
        this.equipments.push(equipment);
      });
    console.log(newEquipment);
    alert('Equipment is added successfully ');
  }

  deleteEquipment(number: number): void {
    this.equipmentService.deleteEquipment(number)
      .subscribe(() => {
        this.equipments = this.equipments.filter(e => e.number !== number);
      });
  }
}
