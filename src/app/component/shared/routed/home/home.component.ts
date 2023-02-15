import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
import { IPage } from 'src/app/model/generic';
import { CursoService } from 'src/app/service/curso.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  responseFromServer: IPage<ICurso>;
  //
  strTermFilter: string = "";
  id_leccionFilter: number = 0;
  numberOfElements: number = 8;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oCursoService: CursoService,
    private oActivatedRoute: ActivatedRoute,
    ) {

    }

  ngOnInit(): void {
    this.getPage();
  }


  getPage() {
    this.oCursoService.getCursoPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<ICurso>) => {
        this.responseFromServer = resp;
        console.log(resp);
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
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByLeccion(id: number): void {
    this.id_leccionFilter = id;
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
