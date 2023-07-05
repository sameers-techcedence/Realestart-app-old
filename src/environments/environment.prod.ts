import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,
  appTitle: "RealeStart",
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8',
  }),
  apiURL: "http://localhost:8080/api",
  baseUrl: "http://localhost:4200/"
};
