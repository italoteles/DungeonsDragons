import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../models/monsters/Result';

@Pipe({
  name: 'FilterMonterPipe'
})
export class FilterMonsterPipe implements PipeTransform {

  transform(monsterList: Result[], search : string): Result[] {

    if (monsterList){
      return monsterList.filter((d) => d.name.indexOf(search) > -1);
    }
    return monsterList;


  }

}
