import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-curso-view-admin',
  templateUrl: './curso-view-admin.component.html',
  styleUrls: ['./curso-view-admin.component.css']
})
export class CursoViewAdminComponent implements OnInit {

  id: number = 0;
  oCurso: ICurso = null;
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
