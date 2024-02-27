import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'detail-search',
    standalone: true,
    imports: [
        CommonModule,MatIconModule, MatButtonModule
    ],
    templateUrl: './detail-search.component.html',

    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailSearchComponent { }
