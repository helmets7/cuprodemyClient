import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic';
import { IUser } from 'src/app/model/user-interface';
import { UserService } from 'src/app/service/User.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-usuario-finder',
  templateUrl: './usuario-finder.component.html',
  styleUrls: ['./usuario-finder.component.css']
})
export class UsuarioFinderComponent implements OnInit {
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IUser>;
  //
  strTermFilter: string = "";
  id_usertypeFilter: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oUserService: UserService,
    private oAuthService: SessionService,
    private oRouter: Router

    ) {

  }

  ngOnInit() {
    this.getPage();

  }

  getPage() {
    this.oUserService.getUserPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection, this.id_usertypeFilter)
      .subscribe({
        next: (resp: IPage<IUser>) => {
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

  setFilterByUsertype(id: number): void {
    this.id_usertypeFilter = id;
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
