import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ILeccion } from 'src/app/model/leccion-interface';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-leccion-detail-admin-unrouted',
  templateUrl: './leccion-detail-admin-unrouted.component.html',
  styleUrls: ['./leccion-detail-admin-unrouted.component.css']
})
export class LeccionDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oLeccion: ILeccion;
  strTipousuario: string = "";

  constructor(
    private oLeccionService: LeccionService,
    private oAuthService: SessionService,
    private oRouter: Router,
  ) {

/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oLeccionService.getOne(this.id).subscribe({
      next: (data: ILeccion) => {
        this.oLeccion = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }


}
