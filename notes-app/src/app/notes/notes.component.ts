import { Component, OnInit } from '@angular/core';
import { Note } from '../note'
import { Router } from '@angular/router';
import  noteArr  from '../../../Notes';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[]
  user: any;
  profile: any;
  token: any;
  error: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fetchNotes()
  }

  fetchNotes(){
    this.notes = noteArr;
  }
};
