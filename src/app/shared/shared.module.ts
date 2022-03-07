import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { MaterialModule } from './modules/material/material.module';


@NgModule({
    declarations: [HeaderComponent],
    imports: [
        MaterialModule,
        CommonModule,
    ],
    exports: [
        HeaderComponent,
        MaterialModule,
    ]
})
export class SharedModule {
}