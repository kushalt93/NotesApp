import { HttpHeaders } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from '../note';
import  noteArr  from '../../../Notes';

@Component({
  selector: 'app-notes-details',
  templateUrl: './notes-details.component.html',
  styleUrls: ['./notes-details.component.css']
})


export class NotesDetailsComponent{
  note: Note | undefined;
  rawNote: Note;
  
  constructor(
    public route: ActivatedRoute
    ) { 
      
  }
  ngOnInit(): void {
    //console.log(user)
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
    }
}

