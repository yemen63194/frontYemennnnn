export interface Patient {
    idpatient: number;
    user: number;
    typePatient: TypePatient;
    archiver: boolean;
    poid :number;
    longueur:number;
    sexe:Sexe;
    dateDeNaissance:Date;
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