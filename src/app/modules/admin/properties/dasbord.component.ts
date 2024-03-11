import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandComponent } from 'app/shared/components/land/land.component';
import { ListLandComponent } from './list-land/list-land.component';
import { DetailLandComponent } from './detail-land/detail.land.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-dasbord',
    standalone: true,
    imports: [
        CommonModule,
        ListLandComponent,
        DetailLandComponent,
        RouterOutlet
    ],
    templateUrl: './dasbord.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DasbordComponent {

}
