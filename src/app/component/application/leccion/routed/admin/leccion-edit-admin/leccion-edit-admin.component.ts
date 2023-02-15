import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { ILeccion, ILeccion2Form, ILeccion2Send } from 'src/app/model/leccion-interface';
import { CursoService } from 'src/app/service/curso.service';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-leccion-edit-admin',
  templateUrl: './leccion-edit-admin.component.html',
  styleUrls: ['./leccion-edit-admin.component.css']
})
export class LeccionEditAdminComponent implements OnInit {

  id: number = 0;
  oLeccion: ILeccion = null;
  oLeccion2Form: ILeccion2Form = null;
  oLeccion2Send: ILeccion2Send = null;
  oForm: FormGroup<ILeccion2Form>;
    // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  cursoDescription: string = "";
  id_leccion: number;
  strTipousuario: string = "";


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oLeccionService: LeccionService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oCursoService: CursoService,
  ) {
/*
    this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */


    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
      recurso: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(200),
        ],
      ],
      orden: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
    });


    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oLeccionService.getOne(this.id).subscribe({
      next: (data: ILeccion) => {
        this.oLeccion = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          descripcion: [
            data.descripcion,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(200),
            ],
          ],
          recurso: [
            data.recurso,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(200),
            ],
          ],
          orden: [
            data.orden,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(200),
            ],
          ],
          id_curso: [data.curso.id, [Validators.required]]
        });
      },

    });
    this.updateCursoDescription(this.oLeccion.curso.id);
  }

  onSubmit() {
    console.log('onSubmit');

    this.oLeccion2Send = {
      id: this.oForm.value.id,
      descripcion: this.oForm.value.descripcion,
      recurso: this.oForm.value.recurso,
      orden: this.oForm.value.orden,
      curso: { id: this.oForm.value.id_curso }

    };

    if (this.oForm.valid) {
      this.oLeccionService.updateOne(this.oLeccion2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = 'CUPRODEMY';
          this.modalContent = 'Leccion ' + this.id + ' updated';
          this.oRouter.navigate(['/admin/leccion/view', this.id]);
        },
      });
    }
  }
  showModal = (data) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/leccion/view', data])
    })
    this.myModal.show()
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

  }
