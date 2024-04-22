import { Component, ElementRef, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { Observable, map } from 'rxjs';
import { UserAuthServiceService } from 'src/app/serives/auth/user-auth-service.service';
import { AuthenticationService } from 'src/app/serives/authentication.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{
  constructor(private elementRef: ElementRef,private service : AuthenticationService) {}
  public NbrMEDECIN:number=0;
  public NbrAMBILANCIER:number=0;
  public NbrINFERMIER:number=0;
  public NbrPATIENT:number=0;
  public NbrVISITEUR:number=0;
  public NbrDONATEUR:number=0;
  public NbrHOMELESS:number=0;
  public NbrORGANISATEUR:number=0;
  public NbrCHEF:number=0;
  ngOnInit() {
    this.service.getLengthByRole("MEDECIN").subscribe((data) => {
     // console.log(data);
      this.NbrMEDECIN = data;
  
      this.NbrUserWithRole("AMBILANCIER").subscribe((data) => {
       // console.log(data);
        this.NbrAMBILANCIER = data;
  
        this.NbrUserWithRole("INFERMIER").subscribe((data) => {
         // console.log(data);
          this.NbrINFERMIER = data;
  
          this.NbrUserWithRole("PATIENT").subscribe((data) => {
           // console.log(data);
            this.NbrPATIENT = data;
          
            this.NbrUserWithRole("VISITEUR").subscribe((data) => {
              // console.log(data);
               this.NbrVISITEUR = data;
           
               this.NbrUserWithRole("DONATEUR").subscribe((data) => {
                // console.log(data);
                 this.NbrDONATEUR = data;
          
                 this.NbrUserWithRole("HOMELESS").subscribe((data) => {
                  // console.log(data);
                   this.NbrHOMELESS = data;
                
                   this.NbrUserWithRole("ORGANISATEUR").subscribe((data) => {
                    // console.log(data);
                     this.NbrORGANISATEUR = data;
                     
               
                     this.NbrUserWithRole("CUISINIER").subscribe((data) => {
                      // console.log(data);
                       this.NbrCHEF = data;
                       this.createChart();
                 
                     });
                   });
                 });
           
               });

             });
      
          });
        });
      });
    });
  }


  public NbrUserWithRole(role:string): Observable<number> {
    return this.service.getLengthByRole(role).pipe(map(data => {
      if (role === "MEDECIN") {
        this.NbrMEDECIN = data;
      }
      if (role === "AMBILANCIER") {
        this.NbrAMBILANCIER = data;
      }
      if (role === "INFERMIER") {
        this.NbrINFERMIER = data;
      }
      if (role === "PATIENT") {
        this.NbrPATIENT = data;
      }
      if (role === "VISITEUR") {
        this.NbrVISITEUR = data;
      }
      if (role === "DONATEUR") {
        this.NbrDONATEUR = data;
      }
      if (role === "HOMELESS") {
        this.NbrHOMELESS = data;
      }
      if (role === "ORGANISATEUR") {
        this.NbrORGANISATEUR = data;
      }
      if (role === "CHEF") {
        this.NbrCHEF = data;
      }
     // console.log(role + " : " + data);
      return data;
    }));
  }
  createChart(): void {
    const canvas = this.elementRef.nativeElement.querySelector('#myChart');
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: ["MEDECIN","AMBILANCIER","INFERMIER","PATIENT","VISITEUR","DONATEUR","HOMELESS","ORGANISATEUR","CHEF"],
        datasets: [{
          label: '# of Votes',
          data: [this.NbrMEDECIN, this.NbrAMBILANCIER, this.NbrINFERMIER, this.NbrPATIENT, this.NbrVISITEUR, this.NbrDONATEUR,this.NbrHOMELESS, this.NbrORGANISATEUR,this.NbrCHEF],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
 
}
