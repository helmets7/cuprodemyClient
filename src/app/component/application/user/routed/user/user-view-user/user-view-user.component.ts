import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/user-interface';
import { Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-user-view-user',
  templateUrl: './user-view-user.component.html',
  styleUrls: ['./user-view-user.component.css']
})
export class UserViewUserComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;
  strUserId: number = 0;


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oSessionService: SessionService,
    private oRouter: Router,
  ) {

    this.oSessionService.getUserId().subscribe((n: number) => this.strUserId = n);

    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.oSessionService.on(Events.login).subscribe(
      (data: string) => {

        this.oSessionService.getUserId().subscribe((n: number) => this.strUserId = n);
        console.log(this.strUserId);
      });
    this.oSessionService.on(Events.logout).subscribe(
      (data: string) => {

        this.strUserId = 0;

      });
}


}
