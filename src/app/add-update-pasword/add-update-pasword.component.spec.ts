import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdatePaswordComponent } from './add-update-pasword.component';

describe('AddUpdatePaswordComponent', () => {
  let component: AddUpdatePaswordComponent;
  let fixture: ComponentFixture<AddUpdatePaswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddUpdatePaswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddUpdatePaswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
