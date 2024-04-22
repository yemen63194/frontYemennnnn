import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AfficheEtablissmentFrontComponent } from './FrontOffice/affiche-etablissment-front/affiche-etablissment-front.component';
import { AfficheMedicamentComponent } from './BackOffice/medicament/affiche-medicament/affiche-medicament.component';
import { AjouterMedicamentComponent } from './BackOffice/medicament/ajouter-medicament/ajouter-medicament.component';
import { ModifierMedicamentComponent } from './BackOffice/medicament/modifier-medicament/modifier-medicament.component';
import { AfficheRestaurantComponent } from './BackOffice/restaurant/affiche-restaurant/affiche-restaurant.component';
import { AjouterRestaurantComponent } from './BackOffice/restaurant/ajouter-restaurant/ajouter-restaurant.component';
import { ModifierRestaurantComponent } from './BackOffice/restaurant/modifier-restaurant/modifier-restaurant.component';
import { AffichePlatComponent } from './BackOffice/Plat/affiche-plat/affiche-plat.component';
import { AjouterPlatComponent } from './BackOffice/Plat/ajouter-plat/ajouter-plat.component';
import { UpdatePlatComponent } from './BackOffice/Plat/update-plat/update-plat.component';
import { AjouterFoodComponent } from './BackOffice/food/ajouter-food/ajouter-food.component';
import { ListeFoodComponent } from './BackOffice/food/liste-food/liste-food.component';
import { ModifierFoodComponent } from './BackOffice/food/modifier-food/modifier-food.component';
import { ListRepasComponent } from './BackOffice/repas/list-repas/list-repas.component';
import { ListeMaladieComponent } from './BackOffice/maladie/liste-maladie/liste-maladie.component';
import { AjouterMaladieComponent } from './BackOffice/maladie/ajouter-maladie/ajouter-maladie.component';
import { ModifierMaladieComponent } from './BackOffice/maladie/modifier-maladie/modifier-maladie.component';
import { AjouterRepasComponent } from './BackOffice/repas/ajouter-repas/ajouter-repas.component';
import { AffichePlatExisteComponent } from './FrontOffice/plat/affiche-plat-existe/affiche-plat-existe.component';
import { AfficheCoungeComponent } from './BackOffice/Counge/affiche-counge/affiche-counge.component';
import { AjouterCoungeComponent } from './FrontOffice/counge/ajouter-counge/ajouter-counge.component';
import { AfficheCoungeFrontComponent } from './FrontOffice/counge/affiche-counge-front/affiche-counge-front.component';
import { UpdateCoungeFrontComponent } from './FrontOffice/counge/update-counge-front/update-counge-front.component';
import { ModifierCoungeComponent } from './BackOffice/Counge/modifier-counge/modifier-counge.component';
import { AfficherRepasComponent } from './FrontOffice/Repas/afficher-repas/afficher-repas.component';
import { ForbiddenComponent } from './BackOffice/forbidden/forbidden.component';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { UserComponent } from './FrontOffice/user/user.component';
import { AuthGuard } from './serives/Auths-Last/auth.guard';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { StatBadgeComponent } from './BackOffice/stat-badge/stat-badge.component';
import { ScoresComponent } from './BackOffice/scores/scores.component';
import { AfficheSheltersFrontComponent } from './FrontOffice/affiche-shelters-front/affiche-shelters-front.component';
import { AjoutAideDonateurComponent } from './FrontOffice/ajout-aide-donateur/ajout-aide-donateur.component';
import { AfficheCauseComponent } from './FrontOffice/affiche-cause/affiche-cause.component';
import { ListShelterComponent } from './BackOffice/list-shelter/list-shelter.component';
import { AjoutShelterComponent } from './BackOffice/ajout-shelter/ajout-shelter.component';
import { UpdateShelterComponent } from './BackOffice/update-shelter/update-shelter.component';
import { AjoutAideComponent } from './BackOffice/ajout-aide/ajout-aide.component';
import { ListAideComponent } from './BackOffice/list-aide/list-aide.component';
import { UpdateAideComponent } from './BackOffice/update-aide/update-aide.component';
import { AjoutServiceShelterComponent } from './BackOffice/ajout-service-shelter/ajout-service-shelter.component';
import { AjoutAndAffectServiceToShelterComponent } from './BackOffice/ajout-and-affect-service-to-shelter/ajout-and-affect-service-to-shelter.component';
import { ListServiceShelterComponent } from './BackOffice/list-service-shelter/list-service-shelter.component';
import { UpdateServiceShelterComponent } from './BackOffice/update-service-shelter/update-service-shelter.component';
import { ListDonateurAvecAideComponent } from './BackOffice/list-donateur-avec-aide/list-donateur-avec-aide.component';
import { AddCauseShelterComponent } from './BackOffice/add-cause-shelter/add-cause-shelter.component';
import { AfficheCauseBackComponent } from './BackOffice/affiche-cause-back/affiche-cause-back.component';
import { UpdateCauseComponent } from './BackOffice/update-cause/update-cause.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';

const routes: Routes = [
  {
    path:"forbiden",
    component:ForbiddenComponent
  },
 { path:"",
  component:AllTempleteFrontComponent,
  children:[
    {
      path:"",
      component:HomeFrontComponent
    },
    {
      path:"register",
      component:RegisterComponent
    },
    {
      path:"login",
      component:LoginComponent
    },
    {
      path:"etablissment",
      component:AfficheEtablissmentFrontComponent
    },
  
      {
      path:"listePlats",
      component:AffichePlatExisteComponent
    },
    {
      path:"ajouterCounge",
      component:AjouterCoungeComponent
    },
    {
      path:"FrontlisteCounges",
      component:AfficheCoungeFrontComponent
    },
    {
      path:"FrontUpdateCounges/:id",
      component:UpdateCoungeFrontComponent
    },
    {
      path:"affRepas",
      component:AfficherRepasComponent
    },
    {
      path:"statBadge",
      component:StatBadgeComponent
    },
    {
      path:"score",
      component:ScoresComponent
    },

    {
      path:"shelters",
      component:AfficheSheltersFrontComponent
    },
     {path: 'ajoutDonateurEtAide',component: AjoutAideDonateurComponent},
     {path: 'cause',component: AfficheCauseComponent},
    
     {path: 'scores',component: ScoreDisplayComponent},
  ]
 },
 {
  path:"user",
  component:UserComponent , canActivate:[AuthGuard],data:{roles:['USER']}
  },


{
  path:"admin",
  component:AllTemplateBackComponent,
  children:[
    {
      path:"stats",
      component:StatsComponent 
      },
    {
      path:"listeEtablissement",
      component:ListeetablissementComponent
    },
    {
      path:"modifierEtablissement/:id",
      component:ModifieretablissementComponent
    },
        
   {
      path:"ajouterEtablissement",
      component:AjouterEtablissementComponent
    },
    { path:"Listerestos",
    component:AfficheRestaurantComponent},
    
    
    {
      path:"listeMedicaments",
      component:AfficheMedicamentComponent
    }, 
    {
      path:"ajouterMedicament",
      component:AjouterMedicamentComponent
    },
    {
      path:"modifierMedicament/:id",
      component:ModifierMedicamentComponent
    },

    {
      path:"ajouterRestaurant",
      component:AjouterRestaurantComponent
    },
    {
      path:"modifierRestaurant/:id",
      component:ModifierRestaurantComponent
    },
    {
      path:"listePlats",
      component:AffichePlatComponent
    },
    {
      path:"ajouterPlats",
      component:AjouterPlatComponent
    },
    {
      path:"modifierPlat/:id",
      component:UpdatePlatComponent
    },
    {
      path:"ajouterFood",
      component:AjouterFoodComponent
    },
    {
      path:"listeIngredients",
      component:ListeFoodComponent
    },
    {
      path:"modifierFood/:id",
      component:ModifierFoodComponent
    },
    {
      path:"listeRepas",
      component:ListRepasComponent
    },
    {
      path:"listeMaladies",
      component:ListeMaladieComponent
    },
    {
      path:"ajouterMaladie",
      component:AjouterMaladieComponent
    },
    {
      path:"modofierMaladie/:id",
      component:ModifierMaladieComponent
    },
    {
      path:"ajouterRepas",
      component:AjouterRepasComponent
    },
    {
      path:"listecounge",
      component:AfficheCoungeComponent
    },
    {
      path:"UpdateCounges/:id",
      component:ModifierCoungeComponent
    },

     {path: 'listShelter',component: ListShelterComponent},
    {path: 'ajoutShelter',component : AjoutShelterComponent},
    {path: 'editShelter/:id',component: UpdateShelterComponent},

    {path: 'ajoutAide',component : AjoutAideComponent},
    {path: 'listAide',component: ListAideComponent},
    {path: 'editAide/:id',component: UpdateAideComponent},

    {path: 'ajoutService',component : AjoutServiceShelterComponent},
    {path: 'ajoutServiceAndAffect',component: AjoutAndAffectServiceToShelterComponent},

    {path: 'listService',component: ListServiceShelterComponent},
    {path: 'editService/:id',component: UpdateServiceShelterComponent},
    {path: 'listDonateurAide',component: ListDonateurAvecAideComponent},
    {path: 'addCause',component: AddCauseShelterComponent},
    {path: 'listCause',component: AfficheCauseBackComponent},
    {path: 'updateCause/:id',component: UpdateCauseComponent},

    
  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
