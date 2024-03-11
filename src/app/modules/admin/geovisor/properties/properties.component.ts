import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-properties',
    standalone: true,
    imports: [
        CommonModule,
    ],
   templateUrl: './properties.component.html',
    styleUrl: './properties.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesComponent { }
