import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashMessageService {
  private flashMessagesSubject = new BehaviorSubject<string[]>([]);

  constructor() { }

  addFlashMessage(message: string): void {
    const currentMessages = this.flashMessagesSubject.value;
    const updatedMessages = [...currentMessages, message];
    this.flashMessagesSubject.next(updatedMessages);
  }

  getFlashMessages(): Observable<string[]> {
    return this.flashMessagesSubject.asObservable();
  }

  clearFlashMessages(): void {
    this.flashMessagesSubject.next([]);
  }
}
