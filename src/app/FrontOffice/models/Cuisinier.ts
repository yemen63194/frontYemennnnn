export interface Cuisinier {
    idC:number;
     nom:string;
    prenom: string;
    dateAjout: Date; 
     sexe:Sexe;
    salaire:number;
    disponiblee:boolean;
    user:number;
}
export enum Sexe {
 
    HOMME ='HOMME',
    FEMME ='FEMME',
    

  }