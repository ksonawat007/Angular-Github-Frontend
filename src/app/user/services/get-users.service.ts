import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { repos } from '../repositories/repository';
import { userInfo } from '../user-detail/user';

@Injectable({
  providedIn: 'root',
})
export class GetUsersService {
  url1 = 'http://localhost:8000';
  url2 = 'https://angular-github-backend-production.up.railway.app';
  constructor(private http: HttpClient) {}

  getUserData(username: string) {
    return this.http.get<userInfo>(
      `https://angular-github-backend-production.up.railway.app/api/${username}/`
    );
  }

  getRepoData(username: string) {
    return this.http.get<repos[]>(
      `https://angular-github-backend-production.up.railway.app/api/${username}/repos/`
    );
  }
}
