import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITipocomentario, ITipocomentario2Form, ITipocomentario2Send } from 'src/app/model/tipo-comentario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';

@Component({
  selector: 'app-tipocomentario-edit-admin',
  templateUrl: './tipocomentario-edit-admin.component.html',
  styleUrls: ['./tipocomentario-edit-admin.component.css']
})
export class TipocomentarioEditAdminComponent implements OnInit {

  id: number = 0;
  oTipocomentario: ITipocomentario = null;
  oTipocomentario2Form: ITipocomentario2Form = null;
  oTipocomentario2Send: ITipocomentario2Send = null;
  oForm: FormGroup<ITipocomentario2Form>;
    // modal
    mimodal: string = 'miModal';
    myModal: any;
    modalTitle: string = '';
    modalContent: string = '';
    strTipousuario: string = "";


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oTipocomentarioService: TipocomentarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,

  ) {

  /*   this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      tipo: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
    });


    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oTipocomentarioService.getOne(this.id).subscribe({
      next: (data: ITipocomentario) => {
        this.oTipocomentario = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          tipo: [
            data.tipo,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(10),
            ],
          ],
        });
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');

    this.oTipocomentario2Send = {
      id: this.oForm.value.id,
      tipo: this.oForm.value.tipo

    };

    if (this.oForm.valid) {
      this.oTipocomentarioService.updateOne(this.oTipocomentario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = 'CUPRODEMY';
          this.modalContent = 'Tipocomentario ' + this.id + ' updated';
          this.oRouter.navigate(['/admin/tipocomentario/view', this.id]);
        },
      });
    }
  }
}
