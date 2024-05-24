import { Injectable } from '@angular/core';
import { Coaches } from './coaches';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoachesService {

  private apiUrl = 'http://localhost:8087/api/v2/coaches';

  constructor(private http: HttpClient) { }

  createCoach(coach: Coaches): Observable<Coaches> {
    return this.http.post<Coaches>(this.apiUrl, coach);
  }

  getCoaches(): Observable<Coaches[]> {
    return this.http.get<Coaches[]>(this.apiUrl);
  }

  getCoach(id: number): Observable<Coaches> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Coaches>(url);
  }

  updateCoach(coach: Coaches): Observable<Coaches> {
    const url = `${this.apiUrl}/${coach.id}`;
    return this.http.put<Coaches>(url, coach);
  }

  deleteCoach(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
