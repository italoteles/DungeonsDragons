import { Pipe, PipeTransform } from '@angular/core';
import { DDClass } from '../models/Classes/DDClass';

@Pipe({
  name: 'FilterClass'
})
export class FilterClassPipe implements PipeTransform {

  transform(classList: DDClass[], search : string): DDClass[]{
    if (classList && search != ""){
      return classList.filter((d) => d.name.indexOf(search) > -1);
    }
    return classList;
  }

}
