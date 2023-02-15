import { Events, SessionService } from 'src/app/service/session.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strUserName: string = "";
  strTipousuario: string = "";
  strUserId: number = 0;


  constructor(
    private oSessionService: SessionService,
    public ruta: Router,
  ) {
    this.strUserName = this.oSessionService.getUserName();
    this.strTipousuario = this.oSessionService.getTipousuario();
    this.oSessionService.getUserId().subscribe((n: number) => this.strUserId = n);

  }

  ngOnInit() {
    this.oSessionService.on(Events.login).subscribe(
        (data: string) => {
          this.strUserName = this.oSessionService.getUserName();
          this.strTipousuario = this.oSessionService.getTipousuario();
          this.oSessionService.getUserId().subscribe((n: number) => this.strUserId = n);
          console.log(this.strUserId);
        });
      this.oSessionService.on(Events.logout).subscribe(
        (data: string) => {
          this.strUserName = '';
          this.strTipousuario = "";
          this.strUserId = 0;

        });
  }



}
