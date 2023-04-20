import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICurso } from 'src/app/model/curso-interface';
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
  suscribedCourses: SuscribedCourses[] = [];


  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oSessionService: SessionService,
    private oRouter: Router,
    private http: HttpClient

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


    this.getAllCursos()

}




getAllCursos() {

  this.http.get('http://localhost:8082/usuario_curso').subscribe(
    (response:iContent) => {

      this.suscribedCourses = response.content.filter(element => element.usuario.id == this.strUserId)

    },
    (error) => {
      console.error(error);
    }
  );
}


cancelSuscription(id: number) {

  this.http.delete('http://localhost:8082/usuario_curso/' + id).subscribe(
    (response) => {

      this.getAllCursos()
    },
    (error) => {
      console.error(error);
    }
  );



}

}


interface iContent {
  content: any;
}


interface SuscribedCourses {
  id: number,
  curso: ICurso,
  usuario: IUser

}
