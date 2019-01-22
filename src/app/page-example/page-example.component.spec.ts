import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExampleComponent } from './page-example.component';

describe('PageExampleComponent', () => {
  let component: PageExampleComponent;
  let fixture: ComponentFixture<PageExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
