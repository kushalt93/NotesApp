import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { NotesComponent } from './notes.component';
import { AddNoteComponent } from '../add-note/add-note.component'
import { RouterTestingModule } from '@angular/router/testing';
import { NotesDetailsComponent } from '../notes-details/notes-details.component';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { routes } from '../app-routing.module';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;
  let location: Location;
  let router: Router;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesComponent, NotesDetailsComponent ],
      providers: [ ],
     imports: [RouterTestingModule.withRoutes(routes),
               //AddNoteComponent,
               //UpdateNoteComponent,
               RouterTestingModule,
               HttpClientTestingModule]
    })
    .compileComponents();
  });
  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //add expect to not logged in 
  it('navigate to "" redirects you to /login', fakeAsync(() => { 
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/login');
  }));

  // it('should trigger a click event', () => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //   let href = fixture.debugElement.query(By.css('add')).nativeElement
  //   .getAttribute('href');
  //   expect(href).toEqual('/home/note');
  //   });
  // });
  
  // it('should trigger a click event', () => {
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     let comp = fixture.componentInstance;
  //     spyOn(comp, 'onSelect');
  
  //     let el = fixture.debugElement.query(By.css('li')).nativeElement.click();
  //     expect(comp.onSelect).toHaveBeenCalled();
  //   });
  // });
});
