// flash-messages.component.ts
import { Component, OnInit } from '@angular/core';
import { FlashMessageService } from 'src/app/services/flash-message-service.service';

@Component({
  selector: 'app-flash-message',
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {
  flashMessages: string[] = [];

  constructor(private flashMessageService: FlashMessageService) { }

  ngOnInit(): void {
    this.flashMessageService.getFlashMessages()
      .subscribe(messages => {
        this.flashMessages = messages;
      });
  }
}
