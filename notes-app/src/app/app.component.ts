import { Component } from '@angular/core'; 
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { LuxonModule } from 'luxon-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Notes';
  
  constructor( private toast: ToastrService, private router: Router) {
  }

  ngOnInit() {
  }
}
