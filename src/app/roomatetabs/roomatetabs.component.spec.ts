import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomatetabsComponent } from './roomatetabs.component';

describe('RoomatetabsComponent', () => {
  let component: RoomatetabsComponent;
  let fixture: ComponentFixture<RoomatetabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomatetabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomatetabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
