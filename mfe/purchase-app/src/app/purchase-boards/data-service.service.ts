import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserData[]> {
     return this.httpClient.get<DataResponse<UserData[]>>("https://reqres.in/api/users").pipe(map(r => r.data));

  }
}

export interface DataResponse<T> {
  data: T;
}

export interface UserData {
  email: string;
}
