import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubsocialsComponent } from './list-subsocials.component';

describe('ListSubsocialsComponent', () => {
  let component: ListSubsocialsComponent;
  let fixture: ComponentFixture<ListSubsocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubsocialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubsocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
