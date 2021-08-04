import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent{
  form: FormGroup;
  newNote: Note;
  date: Date;


  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm()
    
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl(''),
      content: new FormControl('')
  })
}

  onSubmit(){
    
    this.newNote = {
      title: this.form.value.title,
      content: this.form.value.content,
      created_date: Date.now(),
      
    }
    //console.log(this.newNote);
    this.addNote(this.newNote)
    location.assign('')
  }

  addNote(newNote){
    
     
  }
}
