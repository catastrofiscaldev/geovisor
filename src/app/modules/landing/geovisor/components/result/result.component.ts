import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'result',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatDividerModule,
        MatButtonModule,
        FuseScrollbarDirective,
        MatTooltipModule
    ],
    templateUrl: './result.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultComponent {
    data = [
        {
            id: '1',
            type: 'CPU',
            value: '528066940-0003-2',
            dir: 'av. abancay 620',
        },
        {
            id: '2',
            type: 'CPU',
            value: '528066940-0003-3',
            dir: 'av. abancay 620',
        },
        {
            id: '3',
            type: 'CPU',
            value: '528066940-0003-2',
            dir: 'av. abancay 620',
        },
        {
            id: '4',
            type: 'CPU',
            value: '528066940-0003-3',
            dir: 'av. abancay 620',
        },
        {
            id: '5',
            type: 'CPU',
            value: '528066940-0003-2',
            dir: 'av. abancay 620',
        },
        {
            id: '6',
            type: 'CPU',
            value: '528066940-0003-3',
            dir: 'av. abancay 620',
        },
        {
            id: '7',
            type: 'CPU',
            value: '528066940-0003-2',
            dir: 'av. abancay 620',
        },
        {
            id: '8',
            type: 'CPU',
            value: '528066940-0003-3',
            dir: 'av. abancay 620',
        },
    ];

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
    ) {

    }
    goToDetail(id){
        this._router.navigate(['./', id], {relativeTo: this._activatedRoute});
    }
    zoomIn(){

    }
}
