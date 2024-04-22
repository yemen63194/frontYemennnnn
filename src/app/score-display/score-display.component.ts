import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {

  private webSocket!: WebSocket;
  scores: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Créez une connexion WebSocket
    this.webSocket = new WebSocket('ws://localhost:8087/ws');

    // Écoutez les messages WebSocket entrants
    this.webSocket.onmessage = (event) => {
      // Mettez à jour les scores avec les données reçues
      this.scores = JSON.parse(event.data);
    };
  }

  ngOnDestroy(): void {
    // Fermez la connexion WebSocket lorsque le composant est détruit
    this.webSocket.close();
  }

}
