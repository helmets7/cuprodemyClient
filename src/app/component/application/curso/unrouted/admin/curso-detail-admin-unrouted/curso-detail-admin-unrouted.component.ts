import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { CursoService } from 'src/app/service/curso.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-curso-detail-admin-unrouted',
  templateUrl: './curso-detail-admin-unrouted.component.html',
  styleUrls: ['./curso-detail-admin-unrouted.component.css']
})
export class CursoDetailAdminUnroutedComponent implements OnInit {


  @Input() id: number;
  oCurso: ICurso;
  strTipousuario: string = "";

  constructor(
    private oCursoService: CursoService,
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
    this.oCursoService.getOne(this.id).subscribe({
      next: (data: ICurso) => {
        this.oCurso = data;
        console.log(data);
      }
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }

}
