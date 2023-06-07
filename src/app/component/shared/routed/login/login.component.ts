import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IUserBean2Form } from "src/app/model/tipo-usuario.interface";
import { DecodeService } from "src/app/service/decode.service";
import { EmitEvent, Events, SessionService } from "src/app/service/session.service";

declare let bootstrap : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  oFormularioLogin: FormGroup<IUserBean2Form>;
  suscribemodal: any

  constructor(
    protected oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oDecodeService: DecodeService
  ) {

    if (this.oSessionService.isSessionActive()) {
      this.oRouter.navigate(['/home']);
    }



    this.oFormularioLogin = <FormGroup>this.oFormBuilder.group({
      nickname: ['', [Validators.required, Validators.minLength(5)]],
      pass: ['', [Validators.required, Validators.minLength(5)]]
    });

  }

  ngOnInit() {
  }

  login() {
    this.oSessionService.login(this.oFormularioLogin.get('nickname')!.value, this.oFormularioLogin.get('pass')!.value)
      .subscribe({
        next: (data: string) => {
          localStorage.setItem("token", data);
          this.oSessionService.emit(new EmitEvent(Events.login, data));
          this.oRouter.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status, error.statusText);
        }
      })
  }


  openModal(){

    this.suscribemodal = new bootstrap.Modal(document.getElementById("suscribeModal"), { //pasar el myModal como parámetro
      keyboard: false
    })
    this.suscribemodal.show()

  }



  loginVisitor(user, pass) {
    this.oSessionService.login(user, pass)
      .subscribe({
        next: (data: string) => {
          localStorage.setItem("token", data);
          this.oSessionService.emit(new EmitEvent(Events.login, data));
          this.oRouter.navigate(['/home']);
        },
        error: (error: HttpErrorResponse) => {
          console.log(error.status, error.statusText);
        }
      })
  }


  loginAsAdmin() {
    console.log("loginAsAdmin");
    this.oFormularioLogin.controls.nickname.setValue("admin");
    this.oFormularioLogin.controls.pass.setValue("cuprodemy");

  }


}
