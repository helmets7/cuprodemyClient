import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILeccion } from 'src/app/model/leccion-interface';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-leccion-view-admin',
  templateUrl: './leccion-view-admin.component.html',
  styleUrls: ['./leccion-view-admin.component.css']
})
export class LeccionViewAdminComponent implements OnInit {

  id: number = 0;
  oLeccion: ILeccion = null;
  strTipousuario: string = "";

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,


  ) {
/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

  }

}
