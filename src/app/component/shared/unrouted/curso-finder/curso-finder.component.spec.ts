import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoFinderComponent } from './curso-finder.component';

describe('CursoFinderComponent', () => {
  let component: CursoFinderComponent;
  let fixture: ComponentFixture<CursoFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoFinderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
