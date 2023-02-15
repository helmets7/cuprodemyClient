import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IComentario,
  IComentario2Form,
  IComentario2Send,
} from 'src/app/model/comentario-interface';
import { ICurso } from 'src/app/model/curso-interface';
import { ITipocomentario } from 'src/app/model/tipo-comentario-interface';
import { IUser } from 'src/app/model/user-interface';
import { UserService } from 'src/app/service/User.service';
import { ComentarioService } from 'src/app/service/comentario.service';
import { CursoService } from 'src/app/service/curso.service';
import { SessionService } from 'src/app/service/session.service';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';

declare let bootstrap: any;
@Component({
  selector: 'app-comentario-new-admin',
  templateUrl: './comentario-new-admin.component.html',
  styleUrls: ['./comentario-new-admin.component.css'],
})
export class ComentarioNewAdminComponent implements OnInit {
  id: number = 0;
  oComentario: IComentario = null;
  oComentario2Form: IComentario2Form = null;
  oComentario2Send: IComentario2Send = null;
  oForm: FormGroup<IComentario2Form>;
  //modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  tipocomentarioDescription: string = '';
  id_tipocomentario: number;
  id_usuario: number;
  id_curso: number;
  strTipousuario: string = "";
  cursoDescription: string = "";
  usuarioDescription: string = "";


  constructor(
    private oRouter: Router,
    private oComentarioService: ComentarioService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oTipocomentarioService: TipocomentarioService,
    private oUsuarioService: UserService,
    private oCursoService: CursoService
  ) {
/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      comentario: ['', [Validators.required]],
      firmatiempo: ['', [Validators.required]],
      id_tipocomentario: ['', [Validators.required, Validators.pattern(/^[{1,2}]$/)]],
      id_curso: ['', [Validators.required]],
      id_usuario: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('onSubmit');
    this.oComentario2Send = {
      id: this.oForm.value.id,
      comentario: this.oForm.value.comentario,
      firmatiempo: this.oForm.value.firmatiempo,
      tipocomentario: { id: this.oForm.value.id_tipocomentario },
      curso: { id: this.oForm.value.id_curso},
      usuario: { id: this.oForm.value.id_usuario },
    };
    if (this.oForm.valid) {
      this.oComentarioService.newOne(this.oComentario2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = 'CUPRODEMY';
          this.modalContent = 'Comentario ' + data + ' created';
          this.showModal(data);
        },
      });
    }
  }

  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      keyboard: false,
    });
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/comentario/view', data]);
    });
    this.myModal.show();
  };

  updateTipocomentarioDescription(id_tipocomentario: number) {
    this.oTipocomentarioService.getOne(id_tipocomentario).subscribe({
      next: (data: ITipocomentario) => {
        this.tipocomentarioDescription = data.tipo;
      },
      error: (error: any) => {
        this.tipocomentarioDescription = 'Tipocomentario not found';
        this.oForm.controls['id_tipocomentario'].setErrors({ incorrect: true });
      },
    });
  }

  closeTipocomentarioModal(id_tipocomentario: number) {
    this.oForm.controls['id_tipocomentario'].setValue(id_tipocomentario);
    this.updateTipocomentarioDescription(id_tipocomentario);
    this.myModal.hide();
  }

  openModalFindTipocomentario(): void {
    this.myModal = new bootstrap.Modal(
      document.getElementById('findTipocomentario'),
      {
        keyboard: false,
      }
    );
    this.myModal.show();
  }


  updateCursoDescription(id_curso: number) {
    this.oCursoService.getOne(id_curso).subscribe({
      next: (data: ICurso) => {
        this.cursoDescription = data.descripcion;
      },
      error: (error: any) => {
        this.cursoDescription = "curso not found";
        this.oForm.controls['id_curso'].setErrors({'incorrect': true});
      }
    })
  }

  closeCursoModal(id_curso: number) {
    this.oForm.controls['id_curso'].setValue(id_curso);
    this.updateCursoDescription(id_curso);
    this.myModal.hide();
  }

  openModalFindCurso(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findCurso"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }




  updateUsuarioDescription(id_usuario: number) {
    this.oUsuarioService.getOne(id_usuario).subscribe({
      next: (data: IUser) => {
        this.usuarioDescription = data.nombre;
      },
      error: (error: any) => {
        this.usuarioDescription = "Usuario not found";
        this.oForm.controls['id_usuario'].setErrors({'incorrect': true});
      }
    })
  }

  closeUsuarioModal(id_usuario: number) {
    this.oForm.controls['id_usuario'].setValue(id_usuario);
    this.updateUsuarioDescription(id_usuario);
    this.myModal.hide();
  }

  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

}
