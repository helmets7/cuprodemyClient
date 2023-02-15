import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipocomentarioNewAdminComponent } from './tipocomentario-new-admin.component';

describe('TipocomentarioNewAdminComponent', () => {
  let component: TipocomentarioNewAdminComponent;
  let fixture: ComponentFixture<TipocomentarioNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipocomentarioNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipocomentarioNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
