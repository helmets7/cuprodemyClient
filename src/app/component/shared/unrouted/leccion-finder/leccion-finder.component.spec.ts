import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeccionFinderComponent } from './leccion-finder.component';

describe('LeccionFinderComponent', () => {
  let component: LeccionFinderComponent;
  let fixture: ComponentFixture<LeccionFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeccionFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeccionFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
