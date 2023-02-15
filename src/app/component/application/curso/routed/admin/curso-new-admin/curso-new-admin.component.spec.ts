import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNewAdminComponent } from './curso-new-admin.component';

describe('CursoNewAdminComponent', () => {
  let component: CursoNewAdminComponent;
  let fixture: ComponentFixture<CursoNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
