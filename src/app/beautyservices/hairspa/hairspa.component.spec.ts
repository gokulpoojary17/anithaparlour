import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HairspaComponent } from './hairspa.component';

describe('HairspaComponent', () => {
  let component: HairspaComponent;
  let fixture: ComponentFixture<HairspaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HairspaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairspaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
