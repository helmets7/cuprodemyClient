import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocomentarioViewAdminComponent } from './tipocomentario-view-admin.component';

describe('TipocomentarioViewAdminComponent', () => {
  let component: TipocomentarioViewAdminComponent;
  let fixture: ComponentFixture<TipocomentarioViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocomentarioViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocomentarioViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
