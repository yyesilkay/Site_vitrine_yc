import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimateRequestComponent } from './estimate-request.component';

describe('EstimateRequestComponent', () => {
  let component: EstimateRequestComponent;
  let fixture: ComponentFixture<EstimateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimateRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
