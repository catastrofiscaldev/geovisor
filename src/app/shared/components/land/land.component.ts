import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-land',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatTooltipModule
    ],
    templateUrl: './land.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandComponent {
    @Input() item;
    @Input() showIncon:boolean;

    constructor(
        private router: Router,
        private _activatedRoute: ActivatedRoute,
    ){}
    zoomIn():void {}

    goToDetail(id):void {
        this.router.navigate([`./${id}`], {relativeTo: this._activatedRoute })
    }
}
