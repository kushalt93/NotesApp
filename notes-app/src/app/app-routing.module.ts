import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotesComponent } from './notes/notes.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { AddNoteComponent } from "./add-note/add-note.component";

export const routes: Routes = [
{
  path: '', redirectTo: '/home', pathMatch: 'full'
},
{ path: 'home', component: NotesComponent,
    children: [
      { path: 'noteDetails/:id', component: NotesDetailsComponent },
      { path: 'note', component: AddNoteComponent},
      {path: 'update/:id/:email', component: UpdateNoteComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}