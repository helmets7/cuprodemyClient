import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ICurso,
  ICurso2Form,
  ICurso2Send,
} from 'src/app/model/curso-interface';
import { ILeccion } from 'src/app/model/leccion-interface';
import { CursoService } from 'src/app/service/curso.service';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;
@Component({
  selector: 'app-curso-edit-admin',
  templateUrl: './curso-edit-admin.component.html',
  styleUrls: ['./curso-edit-admin.component.css'],
})
export class CursoEditAdminComponent implements OnInit {
  id: number = 0;
  oCurso: ICurso = null;
  ocurso2Form: ICurso2Form = null;
  oCurso2Send: ICurso2Send = null;
  oForm: FormGroup<ICurso2Form>;
  //modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  // foreigns
  leccionDescription: string = '';
  leccionID: number = 0;
  find = true;
  strTipousuario: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oCursoService: CursoService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oLeccionService: LeccionService
  ) {

 /*    this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      miniatura: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      videoUrl: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      duracion: ['', [Validators.required]],
      id_leccion: ['', [Validators.required]],
    });


    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oCursoService.getOne(this.id).subscribe({
      next: (data: ICurso) => {
        this.oCurso = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [this.oCurso.id, [Validators.required]],
          nombre: [
            data.nombre,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          descripcion: [
            data.descripcion,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          miniatura: [
            data.miniatura,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          videoUrl: [
            data.videoUrl,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          duracion: [data.duracion, [Validators.required]]
        });
      },
    });
  }
  onSubmit() {
    console.log('onSubmit');

    this.oCurso2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      descripcion: this.oForm.value.descripcion,
      miniatura: this.oForm.value.miniatura,
      videoUrl: this.oForm.value.videoUrl,
      duracion: this.oForm.value.duracion,
    };

    if (this.oForm.valid) {
      this.oCursoService.updateOne(this.oCurso2Send).subscribe({
        next: (data: number) => {
          this.modalTitle = 'CUPRODEMY';
          this.modalContent = 'Curso ' + this.id + ' editado';
          this.oRouter.navigate(['/admin/curso/view/' + this.id]);
        },
      });
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      keyboard: false,
    });
    var myModalEl = document.getElementById(this.mimodal);

    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/curso/view/' + this.id]);
    });
    this.myModal.show();
  };

  updateLeccionDescription(id_leccion: number) {
    this.oLeccionService.getOne(id_leccion).subscribe({
      next: (data: ILeccion) => {
        this.leccionDescription = data.descripcion;
        this.leccionID = data.id;
        this.find = false;
      },
      error: (error: any) => {
        this.leccionDescription = 'Leccion not found';
        this.oForm.controls['id_leccion'].setErrors({ incorrect: true });
      },
      });
  }

  closeLeccionModal(id_leccion: number) {
    this.oForm.controls['id_leccion'].setValue(id_leccion);
    this.updateLeccionDescription(id_leccion);
    this.oForm.markAsDirty();
    this.myModal.hide();
  }
  openModalFindLeccion() {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      keyboard: false,
    });
    this.myModal.show();
    console.log(this.myModal);
  }
}
