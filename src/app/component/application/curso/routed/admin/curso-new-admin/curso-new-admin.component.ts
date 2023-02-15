import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICurso, ICurso2Form, ICurso2Send } from 'src/app/model/curso-interface';
import { ILeccion } from 'src/app/model/leccion-interface';
import { CursoService } from 'src/app/service/curso.service';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap : any;
@Component({
  selector: 'app-curso-new-admin',
  templateUrl: './curso-new-admin.component.html',
  styleUrls: ['./curso-new-admin.component.css']
})
export class CursoNewAdminComponent implements OnInit {

  id: number = 0;
  oCurso: ICurso = null;
  oCurso2Form: ICurso2Form = null;
  oCurso2Send: ICurso2Send = null;
  oForm: FormGroup<ICurso2Form>;
//modal
mimodal: string = "miModal";
myModal: any;
modalTitle: string = "";
modalContent: string = "";
leccionDescription: string = "";
id_leccion: number;
strTipousuario: string = "";

  constructor(
    private oRouter: Router,
    private oCursoService: CursoService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
    private oLeccionService: LeccionService
  ) {

/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */
}

ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [''],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      descripcion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      miniatura: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      videoUrl: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      duracion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    });
  }

  onSubmit(){
    console.log("onSubmit");
    this.oCurso2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      descripcion: this.oForm.value.descripcion,
      miniatura: this.oForm.value.miniatura,
      videoUrl: this.oForm.value.videoUrl,
      duracion: this.oForm.value.duracion

    }

    if(this.oForm.valid){
      console.log(this.oCurso2Send);
      this.oCursoService.newOne(this.oCurso2Send).subscribe({
        next: (data: number) =>{
          this.modalTitle = "CUPRODEMY";
          this.modalContent= "Curso "+data+" created";
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
      this.oRouter.navigate(['/admin/curso/view', data])
    })
    this.myModal.show()
  }

  updateLeccionDescription(id_leccion: number) {
    this.oLeccionService.getOne(id_leccion).subscribe({
      next: (data: ILeccion) => {
        this.leccionDescription = data.descripcion;
      },
      error: (error: any) => {
        this.leccionDescription = "Leccion not found";
        this.oForm.controls['id_leccion'].setErrors({'incorrect': true});
      }
    })
  }

  closeLeccionModal(id_leccion: number) {
    this.oForm.controls['id_leccion'].setValue(id_leccion);
    this.updateLeccionDescription(id_leccion);
    this.myModal.hide();
  }

  openModalFindLeccion(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findleccion"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }
}
