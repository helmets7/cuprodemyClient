import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComentario } from 'src/app/model/comentario-interface';
import { ComentarioService } from 'src/app/service/comentario.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-comentario-detail-admin-unrouted',
  templateUrl: './comentario-detail-admin-unrouted.component.html',
  styleUrls: ['./comentario-detail-admin-unrouted.component.css']
})
export class ComentarioDetailAdminUnroutedComponent implements OnInit {


  @Input() id: number;
  oComentario: IComentario;
  strTipousuario: string = "";

  constructor(
    private oComentarioService: ComentarioService,
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
    this.oComentarioService.getOne(this.id).subscribe({
      next: (data: IComentario) => {
        this.oComentario = data;
        console.log(data);
      }
    })
  }

  changeID(ev){
    this.id = ev.target.value;
  }

}
