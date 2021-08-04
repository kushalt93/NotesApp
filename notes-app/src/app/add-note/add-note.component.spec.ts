import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AddNoteComponent } from './add-note.component';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Note } from '../note'

describe('AddNoteComponent', () => {
  let component: AddNoteComponent;
  let fixture: ComponentFixture<AddNoteComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNoteComponent ],
      providers: [],
     imports: [RouterTestingModule, HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNoteComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges()
    component.ngOnInit();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submitting a form saves a Note', () => {
        component.form.controls["title"].setValue("Title1234");
        component.form.controls['content'].setValue("Hello i am test content");
        expect(component.form.value["title"]).toBe("Title1234");
        expect(component.form.value['content']).toBe("Hello i am test content");
    });
});
