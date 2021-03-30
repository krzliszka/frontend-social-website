import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsocialSideBarComponent } from './subsocial-side-bar.component';

describe('SubsocialSideBarComponent', () => {
  let component: SubsocialSideBarComponent;
  let fixture: ComponentFixture<SubsocialSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsocialSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsocialSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
