export interface Medecin {
    idMedecin: number;
    disponible: boolean;
    user: number;
    specialite: Specialite;
    


}
  export enum Specialite {
    PSYCHIATRIE='PSYCHIATRIE'
    ,PEDIATRIE='PEDIATRIE'
    ,CARDIOLOGIE='CARDIOLOGIE'
    ,DERMATOLOGIE='DERMATOLOGIE'
    ,ANESTHESIOLOGIE='ANESTHESIOLOGIE'
    ,CHIRURGIE='CHIRURGIE'
    ,GENERAL='GENERAL'
  }
