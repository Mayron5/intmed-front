import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {


  transform(value: string[], filter: string): any {

    function removeSpecialtyCases(value: string) {
      return value.trim().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }


    return value.filter((item: string) => removeSpecialtyCases(item).includes(removeSpecialtyCases(filter)));
  }

}
