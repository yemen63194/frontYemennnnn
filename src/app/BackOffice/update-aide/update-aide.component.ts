import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AideService } from 'src/app/services/aide.service';

@Component({
  selector: 'app-update-aide',
  templateUrl: './update-aide.component.html',
  styleUrls: ['./update-aide.component.css']
})
export class UpdateAideComponent {
  aide: any; 
  id: any;

  constructor(private act: ActivatedRoute, private _shared: AideService, private router: Router) {}

  update() {
    this._shared.updateAide(this.aide) 
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/listAide']);
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');

    this._shared.getAideById(this.id) 
      .subscribe(
        res => {
          this.aide = res;
        },
        err => {
          console.log(err);
        }
      );
  }
}
