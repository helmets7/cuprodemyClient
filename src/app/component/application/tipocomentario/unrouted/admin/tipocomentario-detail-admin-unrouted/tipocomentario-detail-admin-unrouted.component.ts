import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITipocomentario } from 'src/app/model/tipo-comentario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';

@Component({
  selector: 'app-tipocomentario-detail-admin-unrouted',
  templateUrl: './tipocomentario-detail-admin-unrouted.component.html',
  styleUrls: ['./tipocomentario-detail-admin-unrouted.component.css']
})
export class TipocomentarioDetailAdminUnroutedComponent implements OnInit {


  @Input() id: number;
  oTipocomentario: ITipocomentario;
  strTipousuario: string = "";

  constructor(
    private oTipocomentarioService: TipocomentarioService,
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
    this.oTipocomentarioService.getOne(this.id).subscribe({
      next: (data: ITipocomentario) => {
        this.oTipocomentario = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }


}
