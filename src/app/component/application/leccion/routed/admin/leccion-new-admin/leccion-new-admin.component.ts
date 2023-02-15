import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { ILeccion, ILeccion2Form, ILeccion2Send } from 'src/app/model/leccion-interface';
import { CursoService } from 'src/app/service/curso.service';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';


declare let bootstrap: any;
@Component({
  selector: 'app-leccion-new-admin',
  templateUrl: './leccion-new-admin.component.html',
  styleUrls: ['./leccion-new-admin.component.css']
})
export class LeccionNewAdminComponent implements OnInit {


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
    private oLeccionService: LeccionService,
    private oFormBuilder: FormBuilder,
    private oCursoService: CursoService,
    private oAuthService: SessionService,

  ) {

/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */

  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      recurso: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
      orden: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      id_curso: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oLeccion2Send = {
      id: this.oForm.value.id,
      recurso: this.oForm.value.recurso,
      descripcion: this.oForm.value.descripcion,
      orden: this.oForm.value.orden,
      curso: { id: this.oForm.value.id_curso }
    }
    if (this.oForm.valid) {
      this.oLeccionService.newOne(this.oLeccion2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "CUPRODEMY";
          this.modalContent = "Leccion " + data + " created";
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
