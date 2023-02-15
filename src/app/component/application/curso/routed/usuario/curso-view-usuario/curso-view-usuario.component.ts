import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { CursoService } from 'src/app/service/curso.service';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-curso-view-usuario',
  templateUrl: './curso-view-usuario.component.html',
  styleUrls: ['./curso-view-usuario.component.css']
})
export class CursoViewUsuarioComponent implements OnInit {

  curso: ICurso;
  safeURL: SafeResourceUrl;
  id: number = 0;
  strTipousuario: string = "";




  constructor(
    private cursoService: CursoService,
    private rutaActiva: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private oAuthService: SessionService,
    private oRouter: Router,


  ){
/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    }
 */
  }


  ngOnInit(): void {

   this.cursoService.getOne(this.rutaActiva.snapshot.params["id"]).subscribe((curso)=>{
      this.curso = curso;
      this.safeURL = this.sanitizer.bypassSecurityTrustResourceUrl(curso.videoUrl);
    });
    this.id = this.rutaActiva.snapshot.params["id"];
  }

}
