import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { CursoService } from 'src/app/service/curso.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SessionService } from 'src/app/service/session.service';
import { ComentarioService } from 'src/app/service/comentario.service';
import {
  IComentario2Form,
  IComentario2Send,
} from 'src/app/model/comentario-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IUser } from 'src/app/model/user-interface';

@Component({
  selector: 'app-curso-view-usuario',
  templateUrl: './curso-view-usuario.component.html',
  styleUrls: ['./curso-view-usuario.component.css'],
})
export class CursoViewUsuarioComponent implements OnInit {
  curso: ICurso;
  safeURL: SafeResourceUrl;
  id: number = 0;
  strTipousuario: string = '';

  newComentario: string = '';

  oComentario2Send: IComentario2Send = null;
  oForm: FormGroup<IComentario2Form>;

  idTipoComentario = 1
  userId;

  isSuscribed = false;

  courseIDG = 0;

  constructor(
    private cursoService: CursoService,
    private rutaActiva: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private oAuthService: SessionService,
    private oRouter: Router,
    private oComentarioService: ComentarioService,
    private oFormBuilder: FormBuilder,
    private http: HttpClient
  ) {
    /*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    }
 */
  }

  ngOnInit(): void {
    this.cursoService
      .getOne(this.rutaActiva.snapshot.params['id'])
      .subscribe((curso) => {
        this.curso = curso;
        this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
          curso.videoUrl
        );
      });
    this.id = this.rutaActiva.snapshot.params['id'];

    this.oAuthService.getUserId().subscribe((n: number) => this.userId = n);


    this.getIsSuscribed()



  }



  getIsSuscribed() {
    this.http.get('http://localhost:8082/usuario_curso').subscribe(
      (response:iContent) => {

        const courses = response.content.filter(element => (element.usuario.id == this.userId && element.curso.id == this.id))

        if(courses.length > 0){
          this.isSuscribed = true
         this.courseIDG = courses[0].id
        }else{
          this.isSuscribed = false
        }



      },
      (error) => {
        console.error(error);
      }
    );
  }


  getTimestamp() {
    const date = new Date();

    const timeStamp =
      '' +
      date.getFullYear() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds() +
      '';

    return timeStamp;
  }



  handleTipoComentario(id:number){
    this.idTipoComentario = id
  }


  sendComment() {


    const data = {
      id: 0,
      comentario: this.newComentario,
      firmatiempo: this.getTimestamp(),
      usuario: { id: this.userId },
      tipocomentario: { id: this.idTipoComentario },
      curso: { id: this.id },
    };

    this.http.post('http://localhost:8082/comentario', data).subscribe(
      (response) => {
        this.cursoService
        .getOne(this.rutaActiva.snapshot.params['id'])
        .subscribe((curso) => {
          this.curso = curso;
          this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(
            curso.videoUrl
          );
        });
      },
      (error) => {
        console.error(error);
      }
    );

  }


  suscribeCourse() {
    const data = {
      usuario: { id: this.userId },
      curso: { id: this.id },
    };



    this.http.post('http://localhost:8082/usuario_curso', data).subscribe(
      (response) => {
        this.getIsSuscribed()

      },
      (error) => {
        console.error(error);
      }
    );



  }

  unsubscribeCourse() {

    this.http
      .request('delete', 'http://localhost:8082/usuario_curso/' + this.courseIDG, )
      .subscribe(
        (response) => {
          console.log('Funciono al finl' + response);
        },
        (error) => {
          console.error(error);
        }
      );


    this.getIsSuscribed()

  }











}

interface iContent {
  content: any;
}


interface SuscribedCourses {
  id: number,
  curso: ICurso,
  usuario: IUser

}


