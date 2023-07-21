import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { PaginatedResult } from '../models/PaginatedResult';
import { MonsterList } from '../models/monsters/MonsterList';
import { Monster } from '../models/monsters/Monster';

@Injectable({
  providedIn: 'root'
})
export class MonstersService {

  baseURL = environment.apiURL + "api/monsters";

constructor(private http : HttpClient) { }

public getMonsters(term? : string) : Observable<MonsterList>{

    return this.http.get<MonsterList>(this.baseURL).pipe(take(1));
}

public getMonstersDetails(monsterIndex : string) : Observable<Monster>{

    return this.http.get<Monster>(this.baseURL+'/'+monsterIndex).pipe(take(1));
}



}
