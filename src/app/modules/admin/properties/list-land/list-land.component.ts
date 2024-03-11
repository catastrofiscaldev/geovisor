import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { FuseScrollbarDirective } from '@fuse/directives/scrollbar';
import { LandComponent } from 'app/shared/components/land/land.component';

@Component({
    selector: 'app-list-land',
    standalone: true,
    imports: [
        CommonModule,
        FuseScrollbarDirective,
        LandComponent,
        MatDividerModule
    ],
    templateUrl: './list-land.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListLandComponent {
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
 }
