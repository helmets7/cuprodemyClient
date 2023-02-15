import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionViewAdminComponent } from './leccion-view-admin.component';

describe('LeccionViewAdminComponent', () => {
  let component: LeccionViewAdminComponent;
  let fixture: ComponentFixture<LeccionViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
