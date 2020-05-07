import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mapa: Mapboxgl.Map;


  ngOnInit() {

    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapa-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-1.8284037, 51.1788853], // LNG, LAT
      zoom: 15.5
    });

    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new Mapboxgl.NavigationControl());

    this.crearMarcador(-1.8284037, 51.1788853);


  }

  crearMarcador(lng: number, lat: number) {

    const marker = new Mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([lng, lat])
      .addTo(this.mapa);

    marker.on('drag', () => {
      console.log(marker.getLngLat());
    })

  }
}
