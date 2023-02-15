import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioEditAdminComponent } from './tipousuario-edit-admin.component';

describe('TipousuarioEditAdminComponent', () => {
  let component: TipousuarioEditAdminComponent;
  let fixture: ComponentFixture<TipousuarioEditAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioEditAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
