import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, InfoEquipo } from '../interfaces/tipos.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: InfoEquipo[] = [];

  constructor(private http: HttpClient) {

    this.cargarInfo();
    this.cargarEquipo();

  }

  private cargarInfo() {
    console.log('Servicio de infoPagina listo');
    // Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;

        // console.log(resp);
      }
      );

  }

  private cargarEquipo() {

    this.http.get('https://angular-html-81959.firebaseio.com/equipo.json')
      .subscribe((resp: InfoEquipo[]) => {
        this.cargada = true;
        this.equipo = resp;

        // console.log(resp);
      });

  }

} // End Class
