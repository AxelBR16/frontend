import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiURL = 'https://inventario-nhtz.onrender.com/api'

  constructor(private http:HttpClient) { }

  getCategorias(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/categorias`);
  }

}
