import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BocniMenuComponent } from './bocni-menu.component';

describe('BocniMenuComponent', () => {
  let component: BocniMenuComponent;
  let fixture: ComponentFixture<BocniMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BocniMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BocniMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
