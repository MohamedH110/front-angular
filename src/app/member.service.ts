import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:8087/api/v1/members'; 

  constructor(private http: HttpClient) { }

  
  createMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.apiUrl, member);
  }

  
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  
  getMember(id: number): Observable<Member> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Member>(url);
  }

 
  updateMember(member: Member): Observable<Member> {
    const url = `${this.apiUrl}/${member.id}`;
    return this.http.put<Member>(url, member);
  }

  
  deleteMember(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }


  login(email: string, password: string): Observable<Member> {
    const loginUrl = 'http://localhost:8087/api/v1/login';
    return this.http.post<Member>(loginUrl, { email, password });
  }
  
}

