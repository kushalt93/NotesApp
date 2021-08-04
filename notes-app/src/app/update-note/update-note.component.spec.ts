import { HttpHeaders } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { UpdateNoteComponent } from './update-note.component';

describe('UpdateNoteComponent', () => {
  let component: UpdateNoteComponent;
  let fixture: ComponentFixture<UpdateNoteComponent>;
  const mockNote= [
    {
      "_id": "60f5c8d0e0a93a1facafcf25",
      "title": "TestNotee",
      "content": "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.",
      "created_date": "2021-07-19T18:47:43.950Z",
      "creator_email": "Kushal.Topnani@axleinfo.com",
      "__v": 0,
      "date_modified": "2021-07-19T18:58:49.496Z"
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNoteComponent ],
      providers: [ {useValue: mockNote}],
      imports: [RouterTestingModule, HttpClientTestingModule]
      // imports: [
      // HttpClientTestingModule, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNoteComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // fit('user should have userInfo', () => {
  //   spyOn(service, 'userInfo').and.returnValue('kushal.topnani@axleinfo.com');
  //   expect(component.user).toBe('Kushal.topnani@axleinfo.com');
  //   expect(service.userInfo).toHaveBeenCalled();

  // });

  // fit('getNotebyID should retrive note', () => {

  //   spyOn(component, 'getNotebyID');
  //   spyOn(backend, 'getNotebyId');
  //   component.getNotebyID;
  //   expect(backend.getNotebyId).toHaveBeenCalled;
  //   expect(component.getNotebyID).toHaveBeenCalled;
  //   //expect(component.note).toEqual(mockNote[0]);

  //   });
});
