import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { FormGroup, FormControl } from '@angular/forms';
import  noteArr  from '../../../Notes';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent{
  note: Note;
  form: FormGroup;
  newNote: Note;
  date: Date;
  id: string;
  user: any;
  note1: Note;
  constructor(
    public route: ActivatedRoute,
    
    ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
       this.getNotebyID(id);
    });
  }
  getNotebyID(id){
    for(let i=0; i<noteArr.length; i++){
      if(noteArr[i].id === id){
        this.note = noteArr[i]
      }
    }
    this.initForm(this.note);
  }
   
  initForm(note1) {
      this.form = new FormGroup({
      title: new FormControl(note1.title),
      content: new FormControl(note1.content)
    });
    
  }
  onSubmit() {
    this.newNote = {
      id: this.note.id,
      title: this.form.value.title,
      content: this.form.value.content,
      date_modified: Date.now()
    }
    this.updateNote(this.newNote)
  }
   updateNote(newNote){
    location.assign('');
  }
  deleteNote(){
    location.assign('');
  }
}
