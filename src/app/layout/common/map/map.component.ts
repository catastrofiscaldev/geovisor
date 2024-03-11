import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import View from 'ol/View';

import { fromLonLat } from 'ol/proj';
import { Zoom, Control } from 'ol/control';
import { Map as OLMap } from 'ol';
import { Image as ImageLayer, Tile as TileLayer } from 'ol/layer';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { ImageWMS, OSM } from 'ol/source';


// Data
const centerMap = [-75.0152, -9.189967];
const urlGeosever = 'http://vmd120205.contaboserver.net:8080/geoserver/pcfgis/wms';

@Component({
    selector: 'map',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatCheckboxModule,
        MatRadioModule,
    ],
    templateUrl: './map.component.html',
    styleUrl: './map.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit {
    @ViewChild('mapElement', { static: true }) mapElement: ElementRef;
    map: OLMap;
    layersMap: Map<string, ImageLayer<any>> = new Map();
    layersBaseMap: Map<string, TileLayer<any>> = new Map();
    isLayerContainerVisible: boolean = false;
    isBaseMapContainerVisible: boolean = false;

    features = [
        {
            'name': 'pcfgis:cf_lote',
            'title': 'Lotes',
            'visible': true,
        }
    ];

    baseMaps = [
        {
            'name': 'OpenStreetMap',
            'title': 'StreetMap',
            'url': 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'visible': true,
            'attributions': '© OpenStreetMap contributors',
        },
        {
            'name': 'GoogleMaps',
            'title': 'Google Maps',
            'url': 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}',
            'visible': false,
            'attributions': '© Google',
        },
        {
            'name': 'Satellite',
            'title': 'Satelite',
            'url': 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            'visible': false,
            'attributions': [
                'Powered by Esri',
                'Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community'
            ]
        }
    ];


    ngOnInit(): void {
        this.initializeMap();
    }

    private initializeMap(): void {

        this.map = new OLMap({
            target: this.mapElement.nativeElement,
            layers: [],
            view: new View({
                center: fromLonLat(centerMap),
                zoom: 6,
            }),
            controls: [],
        });
        const zoomControl = new Zoom({
            className: 'custom-zoom',
            target: document.getElementById('map-zoom-control'),
        });
        this.map.addControl(zoomControl);

        for (const baseMap of this.baseMaps) {
            this.addBaseLayerToMap(baseMap, baseMap.visible);
        }

        // map.addControl(overviewMapControl);
        for (const feature of this.features) {
            this.addLayerToMap(feature.name, feature.visible);
        }

        // Add a new Layerswitcher to the map
        // this.map.addControl(new LayerSwitcherImage());

        // this.map.addControl(new LayerSwitcher());

    }

    private addBaseLayerToMap(baseMap: any, visible: boolean): void {
        const layer = new TileLayer({
            visible: visible,
            source: new OSM({
                url: baseMap.url,
                maxZoom: 20,
                attributions: baseMap.attributions,
            }),
        });
        layer.set('title', baseMap.title);
        layer.set('baseLayer', 'true');
        this.map.addLayer(layer);
        this.layersBaseMap.set(baseMap.name, layer);
    }

    private addLayerToMap(featureName: string, visible: boolean): void {
        const layer = new ImageLayer({
            source: new ImageWMS({
                url: urlGeosever,
                params: {
                    LAYERS: featureName,
                },
                serverType: 'geoserver',
            }),
            visible: visible,
        });
        layer.set('baseLayer', 'false');
        this.map.addLayer(layer);
        this.layersMap.set(featureName, layer);
    }

    toggleFeatureVisibility(feature: any): void {
        console.log('feature', feature);
        feature.visible = !feature.visible;
        const layer = this.layersMap.get(feature.name);
        if (layer) {
            layer.setVisible(feature.visible);
        }
    }

    toggleBaseMapVisibility(baseMap: any): void {
        this.map.getAllLayers().forEach((layer) => {
            if (layer.get('baseLayer') === 'true' && layer.get('title') !== baseMap.title) {
                layer.setVisible(false);
            } else {
                layer.setVisible(true);
            }
        });
    }

    toggleLayerContainerVisibility(): void {
        this.isLayerContainerVisible = !this.isLayerContainerVisible;
    }

    toggleBaseMapContainerVisibility(): void {
        this.isBaseMapContainerVisible = !this.isBaseMapContainerVisible;
    }
}
