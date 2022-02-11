import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditorDilogComponent } from './components/editor-dilog/editor-dilog.component';
import { MaterialModule } from '../material/material.module';
import { TableGridComponent } from './components/table-grid/table-grid.component';

@NgModule({
  declarations: [PageNotFoundComponent, EditorDilogComponent, TableGridComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    PageNotFoundComponent,
    EditorDilogComponent,
    TableGridComponent
  ],
  entryComponents: [EditorDilogComponent]
})
export class SharedModule { }
