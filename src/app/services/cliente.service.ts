import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../models/cliente.model";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    //método construtor
    constructor(
        private httpClient: HttpClient
    ) {}

    /*
        Método para realizar uma chamada HTTP GET para consulta de clientes
    */
   consultar(): Observable<Cliente[]> {
       return this.httpClient.get<Cliente[]>(environment.clientesApi); 
   }
}