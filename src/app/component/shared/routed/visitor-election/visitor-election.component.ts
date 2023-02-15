import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-visitor-election',
  templateUrl: './visitor-election.component.html',
  styleUrls: ['./visitor-election.component.css']
})
export class VisitorElectionComponent implements OnInit {

  strUserName: string = "";

  constructor(
    protected oRouter: Router,
    private oSessionService: SessionService
  ) {

    if (this.oSessionService.isSessionActive()) {
      this.strUserName = this.oSessionService.getUserName();
    } else {
      this.oRouter.navigate(['/home']);
    }

  }

  ngOnInit() {
  }


  irLogin() {
    this.oSessionService.logout();
    this.oSessionService.emit(new EmitEvent(Events.logout, ""));
    this.oRouter.navigate(['/login']);
  }

}
