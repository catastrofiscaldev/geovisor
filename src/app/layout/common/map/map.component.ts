import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import ol from 'ol'

import { fromLonLat } from 'ol/proj';
import { Zoom, Control } from 'ol/control';
import LayerSwitcher from 'ol-ext/control/LayerSwitcher';
import LayerSwitcherImage from 'ol-ext/control/LayerSwitcherImage';

@Component({
    selector: 'map',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
    @ViewChild('mapElement', { static: true }) mapElement: ElementRef;

    ngOnInit(): void {
        this.initializeMap();
    }

    private initializeMap(): void {

        const layerGoogle = new TileLayer({
            visible: false,
            source: new OSM({
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
                maxZoom: 20,
                attributions: '© Google',
            }),

        });
        layerGoogle.set('title', 'Google'); // Agregar título a la capa
        layerGoogle.set('baseLayer', 'true'); // Agregar título a la capa

        const layerGoogle1 = new TileLayer({
            visible: false,
            source: new OSM({
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
                maxZoom: 20,
                attributions: '© Google',
            }),

        });
        layerGoogle1.set('title', 'Google'); // Agregar título a la capa
        layerGoogle1.set('baseLayer', 'true'); // Agregar título a la capa

        const layerGoogle2 = new TileLayer({
            visible: false,
            source: new OSM({
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
                maxZoom: 20,
                attributions: '© Google',
            }),

        });
        layerGoogle2.set('title', 'Google'); // Agregar título a la capa
        layerGoogle2.set('baseLayer', 'true'); // Agregar título a la capa

        const layerOSM = new TileLayer({
            source: new OSM(),
            visible: true,
        });

        layerOSM.set('title', 'StreetMap'); // Agregar título a la capa
        layerOSM.set('baseLayer', 'true'); // Agregar título a la capa

        const map = new Map({
            target: this.mapElement.nativeElement,
            layers: [layerOSM,layerGoogle,layerGoogle2,layerGoogle1],
            view: new View({
                center: fromLonLat([-77.0309151, -12.0462692]),
                zoom: 6,
            }),
            controls: [],
        });
        const zoomControl = new Zoom({
            className: 'custom-zoom',
            target: document.getElementById('map-zoom-control'),
        });
        map.addControl(zoomControl);

        // const overviewMapControl = new OverviewMap({
        //     layers: [
        //         new TileLayer({
        //             source: new OSM(),
        //         }),
        //     ],
        // });

        // map.addControl(overviewMapControl);

        // Add a new Layerswitcher to the map
        map.addControl(new LayerSwitcherImage());
    }
}
