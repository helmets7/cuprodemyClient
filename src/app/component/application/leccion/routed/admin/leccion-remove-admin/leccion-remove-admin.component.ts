import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;
@Component({
  selector: 'app-leccion-remove-admin',
  templateUrl: './leccion-remove-admin.component.html',
  styleUrls: ['./leccion-remove-admin.component.css']
})
export class LeccionRemoveAdminComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  strTipousuario: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oLeccionService: LeccionService,
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
    this.oLeccionService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Leccion " + this.id + " removed";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }

}
