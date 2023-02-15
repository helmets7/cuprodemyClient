import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionPlistAdminComponent } from './leccion-plist-admin.component';

describe('LeccionPlistAdminComponent', () => {
  let component: LeccionPlistAdminComponent;
  let fixture: ComponentFixture<LeccionPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
