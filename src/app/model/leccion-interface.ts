import { FormControl } from "@angular/forms";
import { ICurso } from "./curso-interface";
import { IEntity } from "./generic";


export interface IUserBean {
    nickname: string;
    pass: string;
}

export interface IUserBean2Form {
    nickname: FormControl<string>;
    pass: FormControl<string>;
}

export interface ILeccion {
    id: number;
    descripcion: string;
    recurso: string;
    orden: string;
    curso: ICurso;

}


export interface ILeccion2Form {
    id: FormControl<number>;
    descripcion: FormControl<string>;
    recurso: FormControl<string>;
    orden: FormControl<string>;
    id_curso: FormControl<number>;
}
export interface ILeccion2Send {
    id: number;
    descripcion: string
    recurso: string;
    orden:     string;
    curso: IEntity;

}
