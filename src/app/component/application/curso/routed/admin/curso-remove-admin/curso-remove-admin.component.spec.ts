import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoRemoveAdminComponent } from './curso-remove-admin.component';

describe('CursoRemoveAdminComponent', () => {
  let component: CursoRemoveAdminComponent;
  let fixture: ComponentFixture<CursoRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
