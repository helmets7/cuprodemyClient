import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComentario } from 'src/app/model/comentario-interface';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-comentario-view-admin',
  templateUrl: './comentario-view-admin.component.html',
  styleUrls: ['./comentario-view-admin.component.css']
})
export class ComentarioViewAdminComponent implements OnInit {

  id: number = 0;
  oComentario: IComentario = null;
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
