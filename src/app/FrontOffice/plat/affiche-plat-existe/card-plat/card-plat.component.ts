import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-plat',
  templateUrl: './card-plat.component.html',
  styleUrls: ['./card-plat.component.css']
})
export class CardPlatComponent {
@Input() plat:any
@Output() addPlatToList=new EventEmitter<any>()
@Output() detailsCard =new EventEmitter<any>()
@Output() likePlat=new  EventEmitter<any>()
@Output() dislikePlat=new  EventEmitter<any>()
addPlat(){
  this.addPlatToList.emit(this.plat.idPlat)
}
details(){
  this.detailsCard.emit()

}
like(){
  this.likePlat.emit(this.plat.idPlat)
}
dislike(){
  this.dislikePlat.emit(this.plat.idPlat)
}

@Input() selected=false

}
