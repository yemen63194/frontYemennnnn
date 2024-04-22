import { Component } from '@angular/core';
import { RegisterRequest, Sexe, specialite } from '../models/register-request';
import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationService } from 'src/app/serives/authentication.service';
import { Router } from '@angular/router';
import { VerificationRequest } from '../models/verification-request';
import { Role } from '../models/Role';
import { FormControl } from '@angular/forms';
import { TypePatient } from '../models/Patient';
import { Specialite } from '../models/Medecin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isPatientRoleSelected: boolean = false;
  isCuisinerRoleSelected: boolean = false;
  isHOMELESSRoleSelected: boolean = false;
  isORGANISATEURRoleSelected: boolean = false;
  isINFERMIERRoleSelected: boolean = false;
  isAMBILANCIERRoleSelected: boolean = false;
  isMEDECINRoleSelected: boolean = false;
  isDONATEURoleSelected: boolean = false;
  

  // Make sure to initialize 'role' property with an appropriate value
  registerRequest: RegisterRequest = {
    roles: [],
   typeePatient : TypePatient.NORMAL, // Initialisez typeePatient avec une valeur de l'énumération TypePatient
   sexee: Sexe.FEMME,
    archiverr: true,
    poidd: 0,
    longueurr: 0,
    dateeDeNaissance: new Date() ,
    disponiblee: true,
    specialitee: Specialite.GENERAL,
    nom:"",
    prenom: "",
    dateAjoutee:new Date(), 
    sexeeee:Sexe.HOMME,
    salaire:0,
    disponibleeee:true,
    age: 0,
    situationMedicalee:" ",
     situationSocialee:" ",
     besoinsSpecifiquess:" ",
    localisationActuellee:" ",
    ffirstname:"",
    llastname:"",
   emaill:"",
   ntelephone:""


    // Initialisez la date de naissance avec la date actuelle
  };
  typePatients = Object.values(TypePatient); // Obtenez les valeurs de l'énumération TypePatient
  sexees = Object.values(Sexe); 
  specialitee = Object.values(Specialite);
  sexeeee= Object.values(Sexe); 
  authResponse: AuthenticationResponse = {};
  message = '';
  otpCode = '';
  roles: string[] = ['USER', 'MEDECIN', 'AMBILANCIER', 'INFERMIER', 'PATIENT', 'VISITEUR', 'ADMIN', 'DONATEUR', 'HOMELESS', 'ORGANISATEUR','CUISINIER'];
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }
   roleChosing!:any;

  registerUser() {
    this.roleChosing= this.registerRequest.roles;
    const role1: Role = {
      name: this.roleChosing
  };
    this.registerRequest.roles = [];
    this.registerRequest.roles.push(role1);
    
    this.isPatientRoleSelected = this.registerRequest.roles.some(role => role.name === 'PATIENT');
    this.isCuisinerRoleSelected = this.registerRequest.roles.some(role => role.name === 'CUISINIER');
    this.isMEDECINRoleSelected = this.registerRequest.roles.some(role => role.name === 'MEDECIN');
    this.isDONATEURoleSelected = this.registerRequest.roles.some(role => role.name === 'DONATEUR');
    this.isHOMELESSRoleSelected = this.registerRequest.roles.some(role => role.name === 'HOMELESS');
    this.isAMBILANCIERRoleSelected = this.registerRequest.roles.some(role => role.name === 'AMBILANCIER');
    this.isINFERMIERRoleSelected = this.registerRequest.roles.some(role => role.name === 'INFERMIER');
    this.isORGANISATEURRoleSelected = this.registerRequest.roles.some(role => role.name === 'ORGANISATEUR');
  

    this.message = '';
    console.log(this.registerRequest);
    this.authService.register(this.registerRequest)
      .subscribe({
        next: (response) => {
          if (response) {
            this.authResponse = response;
          } else {
            // inform the user
            this.message = 'Account created successfully\nYou will be redirected to the Login page in 3 seconds';
            setTimeout(() => {
              this.router.navigate(['login']);
            }, 3000)
          }
        }
      });

  }

  verifyTfa() {
    this.message = '';
    const verifyRequest: VerificationRequest = {
      email: this.registerRequest.email,
      code: this.otpCode
    };
    this.authService.verifyCode(verifyRequest)
      .subscribe({
        next: (response) => {
          this.message = 'Account created successfully\nYou will be redirected to the login page in 3 seconds';
          setTimeout(() => {
            localStorage.setItem('token', response.token as string);
            this.router.navigate(['welcome']);
          }, 30);
        }
      });
  }
  addForm =new FormControl({
    


  })
}
