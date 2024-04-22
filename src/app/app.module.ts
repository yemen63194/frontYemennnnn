import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateBackComponent } from './BackOffice/all-template-back/all-template-back.component';
import { MainBackComponent } from './BackOffice/main-back/main-back.component';
import { SidebarBackComponent } from './BackOffice/sidebar-back/sidebar-back.component';
import { FooterFrontComponent } from './FrontOffice/footer-front/footer-front.component';
import { HeaderFrontComponent } from './FrontOffice/header-front/header-front.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFrontComponent } from './FrontOffice/home-front/home-front.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { AjouterEtablissementComponent } from './BackOffice/ajouter-etablissement/ajouter-etablissement.component';
import { ListeetablissementComponent } from './BackOffice/listeetablissement/listeetablissement.component';
import { ModifieretablissementComponent } from './BackOffice/modifieretablissement/modifieretablissement.component';
import { AllTempleteFrontComponent } from './FrontOffice/all-templete-front/all-templete-front.component';
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
import { ListeFoodComponent } from './BackOffice/food/liste-food/liste-food.component';
import { AjouterFoodComponent } from './BackOffice/food/ajouter-food/ajouter-food.component';
import { ModifierFoodComponent } from './BackOffice/food/modifier-food/modifier-food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { ListRepasComponent } from './BackOffice/repas/list-repas/list-repas.component';
import { AjouterRepasComponent } from './BackOffice/repas/ajouter-repas/ajouter-repas.component';
import { ListeMaladieComponent } from './BackOffice/maladie/liste-maladie/liste-maladie.component';
import { AjouterMaladieComponent } from './BackOffice/maladie/ajouter-maladie/ajouter-maladie.component';
import { ModifierMaladieComponent } from './BackOffice/maladie/modifier-maladie/modifier-maladie.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AffichePlatExisteComponent } from './FrontOffice/plat/affiche-plat-existe/affiche-plat-existe.component';
import { CardPlatComponent } from './FrontOffice/plat/affiche-plat-existe/card-plat/card-plat.component';
import { AfficheCoungeComponent } from './BackOffice/Counge/affiche-counge/affiche-counge.component';
import { AjouterCoungeComponent } from './FrontOffice/counge/ajouter-counge/ajouter-counge.component';
import { AfficheCoungeFrontComponent } from './FrontOffice/counge/affiche-counge-front/affiche-counge-front.component';
import { UpdateCoungeFrontComponent } from './FrontOffice/counge/update-counge-front/update-counge-front.component';
import { FlashMessageComponent } from './BackOffice/Bundle/flash-message/flash-message.component';
import { ModifierCoungeComponent } from './BackOffice/Counge/modifier-counge/modifier-counge.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { NgToastModule } from 'ng-angular-popup' 
import { AfficherRepasComponent } from './FrontOffice/Repas/afficher-repas/afficher-repas.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PlotlyViaCDNModule } from 'angular-plotly.js';
import { NgxWhatsappModule } from '@ngodings/ngx-whatsapp';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './serives/Auths-Last/auth.guard';
import { AuthInterceptor } from './serives/Auths-Last/auth.interceptor';
import { AuthenticationService } from './serives/authentication.service';
import { RegisterComponent } from './FrontOffice/register/register.component';
import { WelcomComponent } from './FrontOffice/welcom/welcom.component';
import { UserComponent } from './FrontOffice/user/user.component';
import { ForbiddenComponent } from './BackOffice/forbidden/forbidden.component';
import { PasswordComponent } from './FrontOffice/password/password.component';
import { StatsComponent } from './BackOffice/stats/stats.component';
import { AdminComponent } from './FrontOffice/admin/admin.component';
import { StatBadgeComponent } from './BackOffice/stat-badge/stat-badge.component';
import { ScoresComponent } from './BackOffice/scores/scores.component';
import { ListShelterComponent } from './BackOffice/list-shelter/list-shelter.component';
import { AjoutShelterComponent } from './BackOffice/ajout-shelter/ajout-shelter.component';
import { UpdateShelterComponent } from './BackOffice/update-shelter/update-shelter.component';
import { AfficheSheltersFrontComponent } from './FrontOffice/affiche-shelters-front/affiche-shelters-front.component';
import { ListAideComponent } from './BackOffice/list-aide/list-aide.component';
import { AjoutAideComponent } from './BackOffice/ajout-aide/ajout-aide.component';
import { UpdateAideComponent } from './BackOffice/update-aide/update-aide.component';
import { ListServiceShelterComponent } from './BackOffice/list-service-shelter/list-service-shelter.component';
import { AjoutServiceShelterComponent } from './BackOffice/ajout-service-shelter/ajout-service-shelter.component';
import { UpdateServiceShelterComponent } from './BackOffice/update-service-shelter/update-service-shelter.component';
import { AjoutAideDonateurComponent } from './FrontOffice/ajout-aide-donateur/ajout-aide-donateur.component';
import { ListDonateurAvecAideComponent } from './BackOffice/list-donateur-avec-aide/list-donateur-avec-aide.component';
import { AjoutAndAffectServiceToShelterComponent } from './BackOffice/ajout-and-affect-service-to-shelter/ajout-and-affect-service-to-shelter.component';
import { ServicesModalComponent } from './FrontOffice/services-modal/services-modal.component';
import { AfficheCauseComponent } from './FrontOffice/affiche-cause/affiche-cause.component';
import { AddCauseShelterComponent } from './BackOffice/add-cause-shelter/add-cause-shelter.component';
import { AfficheCauseBackComponent } from './BackOffice/affiche-cause-back/affiche-cause-back.component';
import { UpdateCauseComponent } from './BackOffice/update-cause/update-cause.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ScoreDisplayComponent } from './score-display/score-display.component';




const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateBackComponent,
    MainBackComponent,
    SidebarBackComponent,
    FooterFrontComponent,
    HeaderFrontComponent,
    HomeFrontComponent,
    LoginComponent,
    RegisterComponent,
    WelcomComponent,
    AdminComponent,
    UserComponent,
    ForbiddenComponent,
    PasswordComponent,
    StatsComponent,
    AllTempleteFrontComponent,
    AjouterEtablissementComponent,
    ListeetablissementComponent,
    ModifieretablissementComponent,
    AllTempleteFrontComponent,
    AfficheEtablissmentFrontComponent,
    AfficheMedicamentComponent,
    AjouterMedicamentComponent,
    ModifierMedicamentComponent,
    AfficheRestaurantComponent,
    AjouterRestaurantComponent,
    ModifierRestaurantComponent,
    AffichePlatComponent,
    AjouterPlatComponent,
    UpdatePlatComponent,
    ListeFoodComponent,
    AjouterFoodComponent,
    ModifierFoodComponent,
    ListRepasComponent,
    AjouterRepasComponent,
    ListeMaladieComponent,
    AjouterMaladieComponent,
    ModifierMaladieComponent,
    AffichePlatExisteComponent,
    CardPlatComponent,
    AfficheCoungeComponent,
    AjouterCoungeComponent,
    AfficheCoungeFrontComponent,
    UpdateCoungeFrontComponent,
    FlashMessageComponent,
    ModifierCoungeComponent,
    AfficherRepasComponent,
    StatBadgeComponent,
    ScoresComponent,
    ListShelterComponent,
    AjoutShelterComponent,
    UpdateShelterComponent,
    AfficheSheltersFrontComponent,
    ListAideComponent,
    AjoutAideComponent,
    UpdateAideComponent,
    ListServiceShelterComponent,
    AjoutServiceShelterComponent,
    UpdateServiceShelterComponent,
    AjoutAideDonateurComponent,
    ListDonateurAvecAideComponent,
    AjoutAndAffectServiceToShelterComponent,
    ServicesModalComponent,
    AfficheCauseComponent,
    AddCauseShelterComponent,
    AfficheCauseBackComponent,
    UpdateCauseComponent,
    ScoreDisplayComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MultiSelectModule,
    MatCheckboxModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    NgToastModule,
    MatTabsModule,
    PlotlyViaCDNModule,
    NgxWhatsappModule,
    NgbModule, 
    SocketIoModule.forRoot(config),
    MatDialogModule // Utilisez la configuration ici
    
  ],
  providers: [
   
    AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
    },
    HttpClient,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
