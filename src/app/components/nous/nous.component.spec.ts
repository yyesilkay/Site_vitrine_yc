import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NousComponent } from './nous.component';

describe('NousComponent', () => {
  let component: NousComponent;
  let fixture: ComponentFixture<NousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
