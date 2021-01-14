import * as L from 'leaflet';
import 'mapbox-gl-leaflet';

export class App {
  mapUrl: string = 'https://api.maptiler.com/maps/{MapId}/style.json?key={ApiKey}';

  map: L.Map;
  mapContainer: HTMLElement;

  constructor() {
  }

  attached() {
    return new Promise(async (resolve, reject) => {
      this.map = L.map(this.mapContainer).setView([45.50291, -73.63761], 14);
      (L as any).mapboxGL({ style: this.mapUrl }).addTo(this.map);
    });
  }
}
