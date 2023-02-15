import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic';
import { ILeccion } from 'src/app/model/leccion-interface';
import { CursoService } from 'src/app/service/curso.service';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-leccion-finder',
  templateUrl: './leccion-finder.component.html',
  styleUrls: ['./leccion-finder.component.css']
})
export class LeccionFinderComponent implements OnInit {

  @Output() idSeleccionado = new EventEmitter<number>();
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<ILeccion>;
  //
  id_cursoFilter: number = 0;
  strTermFilter: string = "";
  private pListContent!: ILeccion[];
  private pagesCount!: number;
  private numberPage: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  private pageRegister: number = 5;
  private termino: string = "";
  id_leccion: number = 0;

  constructor(
    private oCurso: CursoService,
    private oAuthService: SessionService,
    private oRouter: Router,
    private oLeccionService: LeccionService,
    private oSessionService: SessionService

  ) {
   }

  ngOnInit() {
    this.getPage();

  }

  getPage() {
    this.oLeccionService.getLeccionPlist(this.numberPage, this.pageRegister, this.termino, this.sortField, this.sortDirection, this.id_cursoFilter)
      .subscribe({
        next: (resp: IPage<ILeccion>) => {
          this.pListContent = resp.content;
          this.pagesCount = resp.totalPages;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }
  getPageNumber(): number {
    return this.numberPage;
  }
  getPlistContent(): ILeccion[] {
    return this.pListContent;
  }

  getPagesCount(): number {
    return this.pagesCount;
  }

  setPage(e:number){
    this.numberPage = e -1;
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

  filterByLeccion(id: number): void {
    this.id_leccion = id;
    this.numberPage = 0;
    this.getPage();
  }
  selectionLeccion(id: number): void {
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

  setFilterByCurso(id: number): void {
    this.id_cursoFilter = id;
    this.getPage();
  }

}

