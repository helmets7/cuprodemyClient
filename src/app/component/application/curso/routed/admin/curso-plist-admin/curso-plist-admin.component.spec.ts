import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPlistAdminComponent } from './curso-plist-admin.component';

describe('CursoPlistAdminComponent', () => {
  let component: CursoPlistAdminComponent;
  let fixture: ComponentFixture<CursoPlistAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoPlistAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoPlistAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
