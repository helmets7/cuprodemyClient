import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoViewAdminComponent } from './curso-view-admin.component';

describe('CursoViewAdminComponent', () => {
  let component: CursoViewAdminComponent;
  let fixture: ComponentFixture<CursoViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
