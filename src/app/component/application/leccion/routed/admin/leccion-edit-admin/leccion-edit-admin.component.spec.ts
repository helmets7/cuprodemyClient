import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionEditAdminComponent } from './leccion-edit-admin.component';

describe('LeccionEditAdminComponent', () => {
  let component: LeccionEditAdminComponent;
  let fixture: ComponentFixture<LeccionEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
