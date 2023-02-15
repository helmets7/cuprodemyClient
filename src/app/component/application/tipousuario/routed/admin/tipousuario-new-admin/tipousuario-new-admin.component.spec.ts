import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipousuarioNewAdminComponent } from './tipousuario-new-admin.component';

describe('TipousuarioNewAdminComponent', () => {
  let component: TipousuarioNewAdminComponent;
  let fixture: ComponentFixture<TipousuarioNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipousuarioNewAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipousuarioNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
