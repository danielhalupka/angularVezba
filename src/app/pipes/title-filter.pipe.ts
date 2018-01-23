import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(values: any, queryString:any): any {
    let result = [];
    for(let i=0; i< values.length; i++){
      if(values[i].title.indexOf(queryString) > -1){
        result.push(values[i]);
      }
    }
    if(!queryString){
      return values;
    }
    return result;
  }

}
