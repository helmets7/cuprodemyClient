import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITipocomentario, ITipocomentario2Form, ITipocomentario2Send } from 'src/app/model/tipo-comentario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';

declare let bootstrap: any;
@Component({
  selector: 'app-tipocomentario-new-admin',
  templateUrl: './tipocomentario-new-admin.component.html',
  styleUrls: ['./tipocomentario-new-admin.component.css']
})
export class TipocomentarioNewAdminComponent implements OnInit {

  id: number = 0;
  oTipocomentario: ITipocomentario = null;
  oTipocomentario2Form: ITipocomentario2Form = null;
  oTipocomentario2Send: ITipocomentario2Send = null;
  oForm: FormGroup<ITipocomentario2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  strTipousuario: string = "";


  constructor(
    private oRouter: Router,
    private oTipocomentarioService: TipocomentarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,

  ) {

 /*    this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      tipo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oTipocomentario2Send = {
      id: this.oForm.value.id,
      tipo: this.oForm.value.tipo
    }
    if (this.oForm.valid) {
      this.oTipocomentarioService.newOne(this.oTipocomentario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "CUPRODEMY";
          this.modalContent = "Tipocomentario " + data + " created";
          this.showModal(data);
        }
      })
    }

  }



  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/tipocomentario/view', data])
    })
    this.myModal.show()
  }

}
