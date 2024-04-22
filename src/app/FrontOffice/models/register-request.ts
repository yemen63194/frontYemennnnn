import { Specialite } from "./Medecin";
import { Role } from "./Role";
export interface RegisterRequest {
    firstname?: string;
    lastname?: string;
    email?: string;
    passwd?: string;
    numphone?: string;
    roles: Role[];
    mfaEnabled?: string;
    typeePatient: TypePatient;
    sexee: Sexe;
    archiverr: boolean; // Assurez-vous que 'archiverr' est correctement déclaré ici
    poidd: number;
    longueurr: number;
    dateeDeNaissance: Date;
    disponiblee: boolean;
    specialitee: Specialite;
    nom:string;
   prenom: string;
   dateAjoutee: Date; 
   sexeeee:Sexe;
   salaire:number;
   disponibleeee:boolean;
   age: number;
   situationMedicalee:string;
    situationSocialee:string;
    besoinsSpecifiquess:string;
   localisationActuellee:string;
   ffirstname:string;
   llastname:string;
  emaill:string;
  ntelephone:string;
   
  }

    export enum TypePatient {
        NORMAL = 'NORMAL',
        URGENT = 'URGENT',
        DECEDE = 'DECEDE'
      }
      export enum Sexe {
 
        HOMME ='HOMME',
        FEMME ='FEMME',
      }
      export enum specialite {
        PSYCHIATRIE='PSYCHIATRIE'
        ,PEDIATRIE='PEDIATRIE'
        ,CARDIOLOGIE='CARDIOLOGIE'
        ,DERMATOLOGIE='DERMATOLOGIE'
        ,ANESTHESIOLOGIE='ANESTHESIOLOGIE'
        ,CHIRURGIE='CHIRURGIE'
        ,GENERAL='GENERAL'
      }