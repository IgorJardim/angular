import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacaoStarComponent } from './programacao-star.component';

describe('ProgramacaoStarComponent', () => {
  let component: ProgramacaoStarComponent;
  let fixture: ComponentFixture<ProgramacaoStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgramacaoStarComponent]
    });
    fixture = TestBed.createComponent(ProgramacaoStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
