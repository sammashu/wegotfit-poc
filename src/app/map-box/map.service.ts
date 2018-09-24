import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() {
    console.log("service map");
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }
}
