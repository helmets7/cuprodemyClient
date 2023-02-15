import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IComentario } from 'src/app/model/comentario-interface';
import { IPage } from 'src/app/model/generic';
import { ComentarioService } from 'src/app/service/comentario.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-comentario-plist-admin',
  templateUrl: './comentario-plist-admin.component.html',
  styleUrls: ['./comentario-plist-admin.component.css']
})
export class ComentarioPlistAdminComponent implements OnInit {
  responseFromServer: IPage<IComentario>;
  //
  strTermFilter: string = "";
  id_tipocomentarioFilter: number = 0;
  id_usuarioFilter: number = 0;
  id_cursoFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  strTipousuario: string = "";



  constructor(
    private oComentarioService: ComentarioService,
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,
    ) {
/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */


      const id_tipocomentario =  this.oActivatedRoute.snapshot.params['id_tipocomentario'];
      if(id_tipocomentario == null){
          this.id_tipocomentarioFilter = 0;
      }else{
          this.id_tipocomentarioFilter = id_tipocomentario;
      }
      const id_usuario =  this.oActivatedRoute.snapshot.params['id_usuario'];
      if(id_usuario == null){
          this.id_usuarioFilter = 0;
      }else{
          this.id_usuarioFilter = id_usuario;
      }
      const id_curso =  this.oActivatedRoute.snapshot.params['id_curso'];
      if(id_curso == null){
          this.id_cursoFilter = 0;
      }else{
          this.id_cursoFilter = id_curso;
      }



  }


  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oComentarioService.getComentarioPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection,  this.id_tipocomentarioFilter,  this.id_usuarioFilter, this.id_cursoFilter)
    .subscribe({
      next: (resp: IPage<IComentario>) => {
        this.responseFromServer = resp;
        console.log(resp);
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },

      })
  }

  generateComentario(){

    this.oComentarioService.generate().subscribe({
      next: (resp: IComentario) => {

        this.setPage(this.responseFromServer.totalPages)
        this.getPage();
      }
    });
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    console.log(this.numberOfElements);
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }


  setFilterByTipocomentario(id: number): void {

    this.id_tipocomentarioFilter = id;
    this.getPage();
  }

  setFilterByUsuario(id: number): void {
    this.id_usuarioFilter = id;
    this.getPage();
  }

  setFilterByCurso(id: number): void {
    this.id_cursoFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
