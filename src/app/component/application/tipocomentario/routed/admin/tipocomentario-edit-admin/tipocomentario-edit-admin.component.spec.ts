import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocomentarioEditAdminComponent } from './tipocomentario-edit-admin.component';

describe('TipocomentarioEditAdminComponent', () => {
  let component: TipocomentarioEditAdminComponent;
  let fixture: ComponentFixture<TipocomentarioEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocomentarioEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocomentarioEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
