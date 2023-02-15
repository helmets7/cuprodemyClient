import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { IPage } from 'src/app/model/generic';
import { CursoService } from 'src/app/service/curso.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-curso-finder',
  templateUrl: './curso-finder.component.html',
  styleUrls: ['./curso-finder.component.css']
})
export class CursoFinderComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<ICurso>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oCursoService: CursoService,
    private oAuthService: SessionService,
    private oRouter: Router

    ) {

  }

  ngOnInit() {
    this.getPage();

  }

  getPage() {
    this.oCursoService.getCursoPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<ICurso>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },

      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
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

  seleccionarId(id: number) {
    this.closeEvent.emit(id);
  }
}
