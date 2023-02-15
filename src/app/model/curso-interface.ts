import { FormControl } from "@angular/forms";
import { IEntity } from "./generic";
import { Time } from "@angular/common";
import { ILeccion } from "./leccion-interface";

export interface IUserBean {
    nickname: string;
    pass: string;
}

export interface IUserBean2Form {
    nickname: FormControl<string>;
    pass: FormControl<string>;
}

export interface ICurso {
    id: number;
    nombre: string;
    descripcion: string;
    miniatura: string;
    videoUrl: string;
    duracion: Time;
    comentarios: number;
    lecciones:number;
}


export interface ICurso2Form {
    id: FormControl<number>;
    nombre: FormControl<string>;
    descripcion: FormControl<string>;
    miniatura: FormControl<string>;
    videoUrl: FormControl<string>;
    duracion: FormControl<Time>;
}
export interface ICurso2Send {
    id: number;
    nombre: string
    descripcion: string;
    miniatura: string;
    videoUrl: string;
    duracion: Time;
}

