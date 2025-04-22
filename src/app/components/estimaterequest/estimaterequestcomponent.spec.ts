import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  EstimateRequest } from './estimaterequest.component';

describe(' EstimateRequest', () => {
  let component:  EstimateRequest;
  let fixture: ComponentFixture< EstimateRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EstimateRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent( EstimateRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
