export const environment = {
  production: true
};

import { HttpHeaders } from "@angular/common/http";

export const production = false;
export const baseURL = "http://localhost:8082";
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  }),
  withCredentials: true
}

