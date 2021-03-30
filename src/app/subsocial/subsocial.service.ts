import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubsocialModel } from './subsocial-response';

@Injectable({
  providedIn: 'root'
})
export class SubsocialService {

  constructor(private httpClient: HttpClient) { }

  getAllSubsocials(): Observable<Array<SubsocialModel>> {
    return this.httpClient.get<Array<SubsocialModel>>('http://localhost:8080/api/subsocial');
  }

  createSubsocial(subsocialModel: SubsocialModel): Observable<SubsocialModel> {
    return this.httpClient.post<SubsocialModel>('http://localhost:8080/api/subsocial',
      subsocialModel);
  }
}
