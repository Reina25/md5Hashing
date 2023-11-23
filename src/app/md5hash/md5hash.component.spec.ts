import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Md5hashComponent } from './md5hash.component';

describe('Md5hashComponent', () => {
  let component: Md5hashComponent;
  let fixture: ComponentFixture<Md5hashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Md5hashComponent]
    });
    fixture = TestBed.createComponent(Md5hashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
