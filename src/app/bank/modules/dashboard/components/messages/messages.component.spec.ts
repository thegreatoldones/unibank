import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { SharedModule } from '../../../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessagesService } from './messages.service';

describe('MessagesComponent', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;
  let messagesService;

  beforeEach(async(() => {
    const MessagesServiceStatic = {};
    TestBed.configureTestingModule({
      imports: [SharedModule, HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [MessagesComponent],
      providers: [{ provide: MessagesService, useValue: MessagesServiceStatic }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    messagesService = TestBed.get(MessagesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
