import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IComentario } from 'src/app/model/comentario-interface';
import { IPage } from 'src/app/model/generic';
import { ITipocomentario } from 'src/app/model/tipo-comentario-interface';
import { ComentarioService } from 'src/app/service/comentario.service';
import { SessionService } from 'src/app/service/session.service';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';

@Component({
  selector: 'app-tipocomentario-finder',
  templateUrl: './tipocomentario-finder.component.html',
  styleUrls: ['./tipocomentario-finder.component.css']
})
export class TipocomentarioFinderComponent implements OnInit {

  @Output() idSeleccionado = new EventEmitter<number>();
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IComentario>;
  //
  private pListContent!: ITipocomentario[];
  private pagesCount!: number;
  private numberPage: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  private pageRegister: number = 5;
  private termino: string = "";
  id_Tipocomentario: number = 0;

  constructor(
    private oComentarioService: ComentarioService,
    private oAuthService: SessionService,
    private oRouter: Router,
    private oTipocomentarioService: TipocomentarioService,
    private oSessionService: SessionService

  ) {

   }

  ngOnInit() {
    this.getPage();

  }

  getPage() {
    this.oTipocomentarioService.getTipocomentarioPlist(this.numberPage, this.pageRegister, this.termino, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp : IPage<ITipocomentario>) =>{
        this.pListContent = resp.content;
        this.pagesCount = resp.totalPages;
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  }
  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): ITipocomentario[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }

  filterByTipocomentario(id: number): void {
    this.id_Tipocomentario = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionTipocomentario(id: number): void {
    this.closeEvent.emit(id);
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
