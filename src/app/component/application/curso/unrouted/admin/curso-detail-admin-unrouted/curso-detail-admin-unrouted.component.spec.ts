import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetailAdminUnroutedComponent } from './curso-detail-admin-unrouted.component';

describe('CursoDetailAdminUnroutedComponent', () => {
  let component: CursoDetailAdminUnroutedComponent;
  let fixture: ComponentFixture<CursoDetailAdminUnroutedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoDetailAdminUnroutedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoDetailAdminUnroutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
