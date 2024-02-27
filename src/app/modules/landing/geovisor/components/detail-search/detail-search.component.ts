import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'detail-search',
    standalone: true,
    imports: [
        CommonModule,MatIconModule, MatButtonModule, MatDividerModule
    ],
    templateUrl: './detail-search.component.html',

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailSearchComponent {

    constructor(
        private _router : Router,
        private _activatedRoute: ActivatedRoute
    ) { }


    icons = [
        {
            name: 'Compartir',
            icon: 'mat_outline:share'
        },
        {
            name: 'Ubicar',
            icon: 'heroicons_outline:map-pin'
        }
    ]
    goBack(){
        this._router.navigate([''], {relativeTo: this._activatedRoute});
    }
}
