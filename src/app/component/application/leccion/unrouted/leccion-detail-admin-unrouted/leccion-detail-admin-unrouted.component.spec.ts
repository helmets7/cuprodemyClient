import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionDetailAdminUnroutedComponent } from './leccion-detail-admin-unrouted.component';

describe('LeccionDetailAdminUnroutedComponent', () => {
  let component: LeccionDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<LeccionDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
