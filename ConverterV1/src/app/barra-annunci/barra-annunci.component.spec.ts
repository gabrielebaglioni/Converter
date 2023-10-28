import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAnnunciComponent } from './barra-annunci.component';

describe('BarraAnnunciComponent', () => {
  let component: BarraAnnunciComponent;
  let fixture: ComponentFixture<BarraAnnunciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraAnnunciComponent]
    });
    fixture = TestBed.createComponent(BarraAnnunciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
