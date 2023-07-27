import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Race } from '../models/Races/Race';

@Injectable({
  providedIn: 'root'
})
export class RacesService {


baseURL = environment.apiURL + "api/races/";

constructor(private http : HttpClient) { }

public getRace(race : string) : Observable<Race>{

    return this.http.get<Race>(this.baseURL+race).pipe(take(1));
}
}
