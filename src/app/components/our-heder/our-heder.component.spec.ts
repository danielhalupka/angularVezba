import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHederComponent } from './our-heder.component';

describe('OurHederComponent', () => {
  let component: OurHederComponent;
  let fixture: ComponentFixture<OurHederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurHederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
