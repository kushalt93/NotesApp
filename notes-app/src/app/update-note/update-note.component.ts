import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import { FormGroup, FormControl } from '@angular/forms';


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
  isAuth: boolean;
  creator: any;
  userInfo: any;
  constructor(
    public route: ActivatedRoute,
    
    ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        let id = params['id'];
        this.creator = params['email']
       this.getNotebyID(id);
    });
  }
  getNotebyID(id){
    
    // this.NotesService
    //   .getNotebyId(id)
    //   .subscribe((response: Note) => {
    //   this.note = response
    //   //console.log(this.note);
    //   this.initForm()
    // });
    // }
    // initForm() {
    //   this.form = new FormGroup({
    //     title: new FormControl(this.note[0].title),
    //     content: new FormControl(this.note[0].content)
    // });
    
  }
  onSubmit() {
    this.newNote = {
      id: this.note[0].id,
      title: this.form.value.title,
      content: this.form.value.content,
      date_modified: Date.now()
    }
    this.updateNote(this.newNote)
  }
   updateNote(newNote){
  //   this.NotesService
  //   .updateNotes(newNote)
  //   .subscribe((Response) => console.log(Response),
  //               (error) => console.log(error)
  //    )
  //    location.assign('')
  }
  deleteNote(){
  //   let id = this.note[0]._id
  //   this.NotesService
  //   .deleteNote(id)
  //   .subscribe((Response) => console.log(Response),
  //             (error) => console.log(error)
  //     )
  }
}
