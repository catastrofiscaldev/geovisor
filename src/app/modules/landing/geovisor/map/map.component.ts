import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { OverviewMap, defaults as defaultControls, Zoom } from 'ol/control';

@Component({
    selector: 'map',
    standalone: true,
    imports: [
        CommonModule,
    ],
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
        const map = new Map({
            target: this.mapElement.nativeElement,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([-75.0152, -9.189967]),
                zoom: 6,
            }),
            controls: [],
        });
        const zoomControl = new Zoom({
            className: 'custom-zoom',
            target: document.getElementById('map-zoom-control')
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
    }
}
