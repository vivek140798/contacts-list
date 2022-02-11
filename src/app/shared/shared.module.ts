import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditorDilogComponent } from './components/editor-dilog/editor-dilog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PageNotFoundComponent, EditorDilogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PageNotFoundComponent
  ]
})
export class SharedModule { }
