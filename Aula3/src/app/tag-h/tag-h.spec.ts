import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagH } from './tag-h';

describe('TagH', () => {
  let component: TagH;
  let fixture: ComponentFixture<TagH>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagH],
    }).compileComponents();

    fixture = TestBed.createComponent(TagH);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
