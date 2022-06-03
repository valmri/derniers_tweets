import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetlistComponent } from './tweetlist.component';

describe('TweetlistComponent', () => {
  let component: TweetlistComponent;
  let fixture: ComponentFixture<TweetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TweetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
