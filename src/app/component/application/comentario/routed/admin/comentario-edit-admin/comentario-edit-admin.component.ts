import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IComentario, IComentario2Form, IComentario2Send } from 'src/app/model/comentario-interface';
import { ITipocomentario } from 'src/app/model/tipo-comentario-interface';
import { IUser } from 'src/app/model/user-interface';
import { UserService } from 'src/app/service/User.service';
import { ComentarioService } from 'src/app/service/comentario.service';
import { CursoService } from 'src/app/service/curso.service';
import { SessionService } from 'src/app/service/session.service';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';

declare let bootstrap: any;
@Component({
  selector: 'app-comentario-edit-admin',
  templateUrl: './comentario-edit-admin.component.html',
  styleUrls: ['./comentario-edit-admin.component.css']
})
export class ComentarioEditAdminComponent implements OnInit {

  id: number = 0;
  oComentario: IComentario = null;
  oComentario2Form: IComentario2Form = null;
  oComentario2Send: IComentario2Send = null;
  oForm: FormGroup<IComentario2Form>;
  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  // foreigns
  tipocomentarioDescription: string = '';
  tipocomentarioID: number = 0;

  usuarioDescription: string = '';
  usuarioID: number = 0;
  strTipousuario: string = "";

  cursoDescription: string = '';
  cursoID: number = 0;

  find = true;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oComentarioService: ComentarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oTipocomentarioService: TipocomentarioService,
    private oUserService: UserService,
    private oCursoService: CursoService
  ) {
/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      comentario: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
      firmatiempo: [
        '',
         [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
      id_usuario: [
        '',
        [Validators.required, Validators.pattern(/^[1,3]$/)],
      ],
      id_curso: [
        '',
        [Validators.required, Validators.pattern(/^[1,3]$/)],
      ],
      id_tipocomentario: [
        '',
        [Validators.required, Validators.pattern(/^[1,3]$/)],
      ],

    });

    this.id = oActivatedRoute.snapshot.params['id'];

  }

   ngOnInit() {

    this.getOne();


  }

  getOne() {
    this.oComentarioService.getOne(this.id).subscribe({
      next: (data: IComentario) => {
        this.oComentario = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          comentario: [
            data.comentario,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(200),
            ],
          ],
          firmatiempo: [
            data.firmatiempo,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(200),
            ],
          ],
          id_tipocomentario: [
            data.tipocomentario.id,
            [
              Validators.required,
              Validators.pattern(/^[{1,2}]$/),
            ],
          ],
          id_usuario: [
            data.usuario.id,
            [
              Validators.required,
              Validators.minLength(1),
            ],
          ],
          id_curso: [
            data.curso.id,
            [
              Validators.required,
              Validators.minLength(1),
            ],
          ],

        });
      },
    });
    this.updateCursoDescription(this.oComentario.curso.id);
    this.updateTipocomentarioDescription(this.oComentario.tipocomentario.id);
    this.updateUsuarioDescription(this.oComentario.usuario.id);
  }


   onSubmit() {
    console.log('onSubmit');

    this.oComentario2Send = {
      id: this.oForm.value.id,
      comentario: this.oForm.value.comentario,
      firmatiempo: this.oForm.value.firmatiempo,
      tipocomentario: {id: this.oForm.value.id_tipocomentario},
      usuario: {id: this.oForm.value.id_usuario},
      curso: {id: this.oForm.value.id_curso}

    };

    if (this.oForm.valid) {
      this.oComentarioService.updateOne(this.oComentario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = 'CUPRODEMY';
          this.modalContent = 'comentario ' + this.id + ' updated';
          this.oRouter.navigate(['/admin/comentario/view', this.id]);
        },
      });
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    var myModalEl = document.getElementById(this.mimodal);

    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/comentario/view', this.id]);
    });
    this.myModal.show();
  };


  updateTipocomentarioDescription(id_tipocomentario: number) {
    this.oTipocomentarioService.getOne(id_tipocomentario).subscribe({
      next: (data: ITipocomentario) => {
        this.tipocomentarioDescription = data.tipo;
        this.tipocomentarioID = data.id;
        this.find = false;
      },
      error: (error: any) => {
        this.tipocomentarioDescription = 'Tipocomentario not found';
        this.oForm.controls['tipocomentario'].setErrors({ incorrect: true });
      },
    });
  }

  closeTipocomentarioModal(id_tipocomentario: number) {
    this.oForm.controls['id_tipocomentario'].setValue(id_tipocomentario);
    this.updateTipocomentarioDescription(id_tipocomentario);
    this.oForm.markAsDirty();
    this.myModal.hide();
  }

  openModalFindTipocomentario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findtipocomentario"), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    this.myModal.show();
    console.log(this.myModal);
  }




  updateUsuarioDescription(id_usuario: number) {
    this.oUserService.getOne(id_usuario).subscribe({
      next: (data: IUser) => {
        this.usuarioDescription = data.nombre;
        this.usuarioID = data.id;
        this.find = false;
      },
      error: (error: any) => {
        this.usuarioDescription = 'Usuario not found';
        this.oForm.controls['usuario'].setErrors({ incorrect: true });
      },
    });
  }

  closeUsuarioModal(id_usuario: number) {
    this.oForm.controls['id_usuario'].setValue(id_usuario);
    this.updateUsuarioDescription(id_usuario);
    this.oForm.markAsDirty();
    this.myModal.hide();
  }

  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findusuario"), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    this.myModal.show();
    console.log(this.myModal);
  }




  updateCursoDescription(id_curso: number) {
    this.oUserService.getOne(id_curso).subscribe({
      next: (data: IUser) => {
        this.cursoDescription = data.nombre;
        this.cursoID = data.id;
        this.find = false;
      },
      error: (error: any) => {
        this.cursoDescription = 'curso not found';
        this.oForm.controls['curso'].setErrors({ incorrect: true });
      },
    });
  }

  closeCursoModal(id_curso: number) {
    this.oForm.controls['id_curso'].setValue(id_curso);
    this.updateCursoDescription(id_curso);
    this.oForm.markAsDirty();
    this.myModal.hide();
  }

  openModalFindCurso(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findcurso"), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    this.myModal.show();
    console.log(this.myModal);
  }

}
