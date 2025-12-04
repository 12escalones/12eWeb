import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apoyo } from './apoyo';

describe('Apoyo', () => {
  let component: Apoyo;
  let fixture: ComponentFixture<Apoyo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apoyo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apoyo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
