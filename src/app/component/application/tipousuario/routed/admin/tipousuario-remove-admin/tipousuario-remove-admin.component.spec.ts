import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioRemoveAdminComponent } from './tipousuario-remove-admin.component';

describe('TipousuarioRemoveAdminComponent', () => {
  let component: TipousuarioRemoveAdminComponent;
  let fixture: ComponentFixture<TipousuarioRemoveAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioRemoveAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioRemoveAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
