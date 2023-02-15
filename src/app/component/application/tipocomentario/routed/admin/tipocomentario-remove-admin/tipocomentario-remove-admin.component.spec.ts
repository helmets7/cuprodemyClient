import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocomentarioRemoveAdminComponent } from './tipocomentario-remove-admin.component';

describe('TipocomentarioRemoveAdminComponent', () => {
  let component: TipocomentarioRemoveAdminComponent;
  let fixture: ComponentFixture<TipocomentarioRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocomentarioRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocomentarioRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
