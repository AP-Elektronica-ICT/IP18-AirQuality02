import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDataComponent } from './detailed-data.component';

describe('DetailedDataComponent', () => {
  let component: DetailedDataComponent;
  let fixture: ComponentFixture<DetailedDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
