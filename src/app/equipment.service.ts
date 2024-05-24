import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Equipment } from './equipment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private apiUrl = 'http://localhost:8087/api/v3/equipments';

  constructor(private http: HttpClient) { }

  createEquipment(equipment: Equipment): Observable<Equipment> {
    return this.http.post<Equipment>(this.apiUrl, equipment);
  }

  getEquipments(): Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.apiUrl);
  }

  getEquipment(number: number): Observable<Equipment> {
    const url = `${this.apiUrl}/${number}`;
    return this.http.get<Equipment>(url);
  }

  updateEquipment(equipment: Equipment): Observable<Equipment> {
    const url = `${this.apiUrl}/${equipment.number}`;
    return this.http.put<Equipment>(url, equipment);
  }

  deleteEquipment(number: number): Observable<void> {
    const url = `${this.apiUrl}/${number}`;
    return this.http.delete<void>(url);
  }
}
