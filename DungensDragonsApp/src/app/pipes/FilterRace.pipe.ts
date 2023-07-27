import { Pipe, PipeTransform } from '@angular/core';
import { Race } from '../models/Races/Race';

@Pipe({
  name: 'FilterRace'
})
export class FilterRacePipe implements PipeTransform {

  transform(raceList: Race[], search : string): Race[] {
    if (raceList && search != ""){
      return raceList.filter((d) => d.name.indexOf(search) > -1);
    }
    return raceList;
  }

}
