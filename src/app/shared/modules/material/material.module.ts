import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';

//exports
const matModules = [ 
  MatToolbarModule,
  MatCardModule,
  MatInputModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatTooltipModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Se importan los modulos material
    [...matModules]
  ],
  exports: [...matModules] //Se exportan a app.module.ts
})
export class MaterialModule { }
