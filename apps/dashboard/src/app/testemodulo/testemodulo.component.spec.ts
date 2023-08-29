import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestemoduloComponent } from './testemodulo.component';

describe('TestemoduloComponent', () => {
  let component: TestemoduloComponent;
  let fixture: ComponentFixture<TestemoduloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestemoduloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestemoduloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
