import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITipocomentario } from 'src/app/model/tipo-comentario-interface';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-tipocomentario-view-admin',
  templateUrl: './tipocomentario-view-admin.component.html',
  styleUrls: ['./tipocomentario-view-admin.component.css']
})
export class TipocomentarioViewAdminComponent implements OnInit {

  id: number = 0;
  oTipocomentario: ITipocomentario = null;
  strTipousuario: string = "";

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,
  ) {
/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    }
 */

    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {

  }

}
