import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PaginatedResult } from '../models/PaginatedResult';
import { MonsterList } from '../models/monsters/MonsterList';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  baseURL = environment.apiURL + "api/monsters";

constructor(private http : HttpClient) { }

public getMonsters(page? :number, itemsPerPage? : number, term? : string) : Observable<MonsterList>{

    return this.http.get<MonsterList>(this.baseURL).pipe(take(1));
}

}
