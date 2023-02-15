import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from 'src/app/service/curso.service';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;
@Component({
  selector: 'app-curso-remove-admin',
  templateUrl: './curso-remove-admin.component.html',
  styleUrls: ['./curso-remove-admin.component.css']
})
export class CursoRemoveAdminComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  strTipousuario: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oCursoService: CursoService,
    private oAuthService: SessionService,
    private oRouter: Router,

  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
/*
    this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oCursoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Curso " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }
}
