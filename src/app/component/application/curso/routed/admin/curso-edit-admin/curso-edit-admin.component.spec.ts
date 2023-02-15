import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoEditAdminComponent } from './curso-edit-admin.component';

describe('CursoEditAdminComponent', () => {
  let component: CursoEditAdminComponent;
  let fixture: ComponentFixture<CursoEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
