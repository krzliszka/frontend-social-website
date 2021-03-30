import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubsocialComponent } from './create-subsocial.component';

describe('CreateSubsocialComponent', () => {
  let component: CreateSubsocialComponent;
  let fixture: ComponentFixture<CreateSubsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubsocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
