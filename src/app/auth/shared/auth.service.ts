import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { SignupRequestPayload } from '../signup/signup-request.payload';
import { Observable} from 'rxjs';
import { LoginRequestPayload } from '../login/login-request.payload';
import { LoginResponse } from '../login/login-response.payload';
import { LocalStorageService } from 'ngx-webstorage';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private httpClient: HttpClient,
    private localStorage: LocalStorageService) {
   }

   refreshToken() {
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUserName()
    }
    return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/refresh/token',
      refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.store('authenticationToken', response.authenticationToken);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  getUserName() {
    return this.localStorage.retrieve('username');
  }

  getExpirationTime() {
    return this.localStorage.retrieve('expiresAt');
  }
    
  getJwtToken() {
      return this.localStorage.retrieve('authentificationToken');
  }

   signup(signupRequestPayload: SignupRequestPayload): Observable<any> {
     return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, { responseType : 'text'});
   }

   login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
     return this.httpClient.post<LoginResponse>('http://localhost:8080/api/auth/login', loginRequestPayload)
     .pipe(map(data => {
          this.localStorage.store('authenticationToken', data.authenticationToken);
          this.localStorage.store('username', data.username);
          this.localStorage.store('refreshToken', data.refreshToken);
          this.localStorage.store('expiresAt', data.expiresAt);

          return true;
     }));
   }
}


