import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-detail-land',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatTableModule, MatDividerModule],

    templateUrl: './detail-land.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailLandComponent implements OnInit {

    _unsubscribeAll: Subject<any> = new Subject<any>();
    id:string;
    constructor(
        private _activatedRoute: ActivatedRoute,

        ) { }
    ngOnInit(): void {

        this._activatedRoute.params.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ id }) => {
            console.log(id, 'cod');
            this.id = id
        });
    }

    // tabla contribuyente
    ELEMENT_DATA = [
        { position: 1, typeDocument: 'DNI', document: '47859612', typeCont: '-', name:'Juan Carlos Meneses Diaz', direction:'Av. Abancay 620', phone:'968574120', email: '' },

    ];

    displayedColumns: string[] = ['position', 'typeDocument', 'document', 'typeCont', 'name', 'direction', 'phone', 'email'];
    dataSource = this.ELEMENT_DATA;

    // tabla propiedad
        propertiy = [
        { floor: 1, class: '1', state_cons: '1', yearConst: '2011', ceiling:'B', walls:'C', doors:'C'},

    ];

    displayedColumnsP: string[] = ['floor', 'class', 'state_cons', 'yearConst', 'ceiling', 'walls', 'doors'];
    dataSourceP = this.propertiy;

    data = [
        {
            title:'Tipo de propiedad',
            val:'Propietario único'
        },
        {
            title:'Area total predio',
            val:'5.852 m2'
        },
        {
            title:'Area total terreno',
            val:'1.82 m2'
        },
        {
            title:'Area total terreno comun',
            val:'2 m2'
        },
        {
            title:'Area total construida',
            val:'5.82 m2'
        },
        {
            title:'Longitud Frente',
            val:'5.80 m2'
        },
        {
            title:'Uso',
            val:'Casa habitacional'
        },
        {
            title:'Cantidad Habitantes ',
            val:'3'
        },
        {
            title:'Autovaluo',
            val:'S/. 252'
        },
        {
            title:'Arancel',
            val:'S/. 252'
        },
        {
            title:'Depreciación ',
            val:'3%'
        }
    ]
}
