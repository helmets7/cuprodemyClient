import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, IUser2Form, IUser2Send } from 'src/app/model/user-interface';

import { UserService } from 'src/app/service/User.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;
@Component({
  selector: 'app-user-edit-usuario',
  templateUrl: './user-edit-usuario.component.html',
  styleUrls: ['./user-edit-usuario.component.css']
})
export class UserEditUsuarioComponent implements OnInit {
  id: number = 0;
  oUser: IUser = null;
  oUser2Form: IUser2Form = null;
  oUser2Send: IUser2Send = null;
  oForm: FormGroup<IUser2Form>;
  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  // foreigns
  tipousuarioDescription: string = '';
  tipoUsuarioID: number = 0;
  find = true;

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
    private oFormBuilder: FormBuilder,
    private oAuthService: SessionService,
  ) {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: ['', [Validators.required]],
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      dni: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      apellido1: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      apellido2: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      nickname: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(50),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          //Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      id_tipousuario: [
        '',
        [Validators.required, Validators.pattern(/^[1,3]$/)],
      ],
    });


    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;

        console.log(data);

        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [
            data.nombre,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          dni: [
            data.dni,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          apellido1: [
            data.apellido1,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          apellido2: [
            data.apellido2,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          nickname: [
            data.nickname,
            [
              Validators.required,
              Validators.minLength(1),
              Validators.maxLength(50),
            ],
          ],
          email: [
            data.email,
            [
              Validators.required,
              //Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ],
          ],
          id_tipousuario: [
            data.tipousuario.id,
            [Validators.required, Validators.pattern(/^[{1,2}]$/)],
          ],
        });
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');

    this.oUser2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      dni: this.oForm.value.dni,
      apellido1: this.oForm.value.apellido1,
      apellido2: this.oForm.value.apellido2,
      email: this.oForm.value.email,
      nickname: this.oForm.value.nickname,
      tipousuario: {id: this.oForm.value.id_tipousuario}
      //tipousuario: { id: this.tipoUsuarioID },
    };

    if (this.oForm.valid) {


      console.log("Entra pero no va");
      console.log(this.oUser2Send);

      this.oUserService.updateOne(this.oUser2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = 'CUPRODEMY';
          this.modalContent = 'User ' + this.id + ' updated';
          this.oRouter.navigate(['/usuario/user/view', this.id]);
        },
      });
    }
  }

}
