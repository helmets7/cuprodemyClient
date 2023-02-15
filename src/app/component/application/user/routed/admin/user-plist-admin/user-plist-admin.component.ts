import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/User.service';
import { IPage } from 'src/app/model/generic';
import { SessionService } from 'src/app/service/session.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/model/user-interface';

@Component({
  selector: 'app-user-plist-admin',
  templateUrl: './user-plist-admin.component.html',
  styleUrls: ['./user-plist-admin.component.css']
})
export class UserPlistAdminComponent implements OnInit {
  responseFromServer: IPage<IUser>;
  //
  strTermFilter: string = "";
  id_tipousuarioFilter: number = null;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oUserService: UserService,
    private oActivatedRoute: ActivatedRoute,

    ) {
      const id_tipousuario =  this.oActivatedRoute.snapshot.params['id_tipousuario'];
      if(id_tipousuario == null){
          this.id_tipousuarioFilter = 0;
      }else{
          this.id_tipousuarioFilter = id_tipousuario;
      }


  }

  ngOnInit() {
    this.getPage();
  }

  getPage() {
    this.oUserService.getUserPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection, this.id_tipousuarioFilter)
    .subscribe({
      next: (resp: IPage<IUser>) => {
        this.responseFromServer = resp;
        console.log(resp);
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },

      })
  }


  generateUser(){

    this.oUserService.generate().subscribe({
      next: (resp: IUser) => {

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
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByTipousuario(id: number): void {
    this.id_tipousuarioFilter = id;
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
