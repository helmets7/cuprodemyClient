import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionNewAdminComponent } from './leccion-new-admin.component';

describe('LeccionNewAdminComponent', () => {
  let component: LeccionNewAdminComponent;
  let fixture: ComponentFixture<LeccionNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
