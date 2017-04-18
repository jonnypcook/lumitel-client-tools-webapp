import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'capitalizeWords'
})
export class CapitalizeWordsPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (!value) return value;

        return value.replace(/\b\w/g, symbol => symbol.toLocaleUpperCase());
    }

}
