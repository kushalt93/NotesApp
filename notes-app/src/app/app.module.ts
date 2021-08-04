import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ToastContainerModule, ToastrModule } from 'ngx-toastr';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LuxonModule } from 'luxon-angular';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesDetailsComponent,
    UpdateNoteComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    LuxonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ToastContainerModule,
    MatToolbarModule,
    MatDialogModule,
    ],
  providers: [
    
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
