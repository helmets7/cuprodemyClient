import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComentarioService } from 'src/app/service/comentario.service';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;
@Component({
  selector: 'app-comentario-remove-admin',
  templateUrl: './comentario-remove-admin.component.html',
  styleUrls: ['./comentario-remove-admin.component.css']
})
export class ComentarioRemoveAdminComponent implements OnInit {

  id: number=0;
  msg: string = "";
  strTipousuario: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oComentarioService: ComentarioService,
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

  removeOne() {
    this.oComentarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "comentario " + this.id + " has been removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }

}
