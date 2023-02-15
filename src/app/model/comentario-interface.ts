import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";
import { ITipocomentario } from "./tipo-comentario-interface";

import { IUser } from "./user-interface";
import { ICurso } from "./curso-interface";

export interface IUserBean {
    nickname: string;
    pass: string;
}

export interface IUserBean2Form {
    nickname: FormControl<string>;
    pass: FormControl<string>;
}

export interface IComentario {
    id: number;
    comentario: string;
    firmatiempo: string;
    usuario: IUser;
    tipocomentario: ITipocomentario;
    curso: ICurso;
}


export interface IComentario2Form {
    id: FormControl<number>;
    comentario: FormControl<string>;
    firmatiempo: FormControl<string>;//no se el tipo
    id_usuario: FormControl<number>;
    id_tipocomentario: FormControl<number>;
    id_curso: FormControl<number>;
}
export interface IComentario2Send {
    id: number;
    comentario: string
    firmatiempo: string;//no se el tipo x2
    usuario:     IEntity;
    tipocomentario:    IEntity;
    curso:       IEntity;

}
