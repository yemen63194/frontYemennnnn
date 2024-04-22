import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CoungeService } from 'src/app/services/counge.service';
import { Cuisinier } from '../../models/Cuisinier';

@Component({
  selector: 'app-affiche-counge-front',
  templateUrl: './affiche-counge-front.component.html',
  styleUrls: ['./affiche-counge-front.component.css']
})
export class AfficheCoungeFrontComponent implements OnInit {
  counges: any;
  cuisinier_Connecter!: Cuisinier;
  msg: string = ''; // Initialisation dans le constructeur
  idStat: number = 0;

  socket!: WebSocket;

  constructor(private toast: NgToastService, private shared: CoungeService, private router: Router) { }

  ngOnInit(): void {
    this.initWebSocket();
    
    this.shared.listeCounge().subscribe(
      response => {
        console.log(response);
        this.msg = response.message; // Extraire le message
        this.counges = response.coungeList; // Extraire la liste de counge
      },
      error => {
        console.log('Erreur survenue :', error);
      }
    );
    this.shared.gettst().subscribe(
      response => {
        console.log(response);
        this.msg = response.message; // Extraire le message
        this.counges = response.coungeList; // Extraire la liste de counge
      },
      error => {
        console.log('Erreur survenue :', error);
      }
    );
    

    const UserConnected_String = localStorage.getItem('Cuisinier');
    const UserConnected = UserConnected_String ? JSON.parse(UserConnected_String) : null;
    if (UserConnected) {
      this.cuisinier_Connecter = {
        idC: UserConnected.idC,
        user: UserConnected.user,
        nom: UserConnected.nom,
        prenom: UserConnected.prenom,
        dateAjout: UserConnected.dateAjout,
        salaire: UserConnected.salaire,
        disponiblee: UserConnected.disponiblee,
        sexe: UserConnected.sexe
      }
      console.log(this.cuisinier_Connecter.idC);
      this.idStat = this.cuisinier_Connecter.idC; // Déclaration de idStat ici
    }
  }

  initWebSocket(): void {
    this.socket = new WebSocket('ws://localhost:4200/ng-cli-ws');

    this.socket.onopen = (event) => {
      console.log('WebSocket connection established.');
      // Envoyer un message au serveur une fois la connexion établie
      this.socket.send('Hello from client!');
    };

    this.socket.onmessage = (event) => {
      console.log('Received message from server:', event.data);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed.');
    };
  }

  delete(id: number) {
    console.log("Deleting aide with ID:", id);
    this.shared.supprimerCounge(id)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
        },
        err => {
          console.log(err);
        }
      );
  }

  buttonAjouter() {
    this.router.navigate(['/ajouterCounge']);
  }

  buttonModifier(id: any) {
    this.router.navigate(['FrontUpdateCounges/' + id]);
  }
}
