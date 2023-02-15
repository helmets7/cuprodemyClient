import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;
@Component({
  selector: 'app-tipocomentario-remove-admin',
  templateUrl: './tipocomentario-remove-admin.component.html',
  styleUrls: ['./tipocomentario-remove-admin.component.css']
})
export class TipocomentarioRemoveAdminComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  strTipousuario: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,
    private oTipocomentarioService: TipocomentarioService,
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

  removeOne() {
    this.oTipocomentarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Tipocomentario " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }

}
