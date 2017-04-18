import { NgModule }                 from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe';
import { PagesPipe } from './pages.pipe';
import { IterableObjectPipe } from './iterable-object.pipe';
import { CapitalizeWordsPipe } from './capitalize-words.pipe';

@NgModule({
    imports: [ ],
    declarations: [ CapitalizePipe, PagesPipe, IterableObjectPipe, CapitalizeWordsPipe ],
    providers: [],
    exports: [ CapitalizePipe, PagesPipe, IterableObjectPipe, CapitalizeWordsPipe ]
})
export class PipesModule { }
