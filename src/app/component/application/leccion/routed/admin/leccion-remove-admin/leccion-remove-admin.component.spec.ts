import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionRemoveAdminComponent } from './leccion-remove-admin.component';

describe('LeccionRemoveAdminComponent', () => {
  let component: LeccionRemoveAdminComponent;
  let fixture: ComponentFixture<LeccionRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
