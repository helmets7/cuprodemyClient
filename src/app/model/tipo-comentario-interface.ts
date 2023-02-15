import { FormControl } from "@angular/forms";


export interface IUserBean {
    nickname: string;
    pass: string;
}

export interface IUserBean2Form {
    nickname: FormControl<string>;
    pass: FormControl<string>;
}

export interface ITipocomentario {
    id: number;
    tipo: string;
    comentarios: number;


}


export interface ITipocomentario2Form {
    id: FormControl<number>;
    tipo: FormControl<string>;


}
export interface ITipocomentario2Send {
    id: number;
    tipo: string


}
