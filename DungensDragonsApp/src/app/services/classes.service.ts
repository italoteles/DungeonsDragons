import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { DDClass } from '../models/Classes/DDClass';



@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  baseURL = environment.apiURL + "api/classes/";

constructor(private http : HttpClient) { }

public getClass(classe : string) : Observable<DDClass>{

    return this.http.get<DDClass>(this.baseURL+classe).pipe(take(1));
}




}
