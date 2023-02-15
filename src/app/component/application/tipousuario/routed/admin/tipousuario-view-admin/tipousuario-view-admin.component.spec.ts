import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioViewAdminComponent } from './tipousuario-view-admin.component';

describe('TipousuarioViewAdminComponent', () => {
  let component: TipousuarioViewAdminComponent;
  let fixture: ComponentFixture<TipousuarioViewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioViewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioViewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
