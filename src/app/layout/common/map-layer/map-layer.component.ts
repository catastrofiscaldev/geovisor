import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';


@Component({
    selector       : 'map-layer',
    templateUrl    : './map-layer.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'shortcuts',
    standalone     : true,
    imports        : [MatButtonModule, MatIconModule, NgIf, MatTooltipModule, NgFor, NgClass, NgTemplateOutlet, RouterLink, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
})
export class MapLayerComponent implements OnInit, OnDestroy
{
    @ViewChild('mapLayersOrigin') private _mapLayersOrigin: MatButton;
    @ViewChild('mapLayersPanel') private _mapLayersPanel: TemplateRef<any>;

    mode: 'view' | 'modify' | 'add' | 'edit' = 'view';
    shortcutForm: UntypedFormGroup;
    private _overlayRef: OverlayRef;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _formBuilder: UntypedFormBuilder,
        private _overlay: Overlay,
        private _viewContainerRef: ViewContainerRef,
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Initialize the form
        this.shortcutForm = this._formBuilder.group({
            id         : [null],
            label      : ['', Validators.required],
            description: [''],
            icon       : ['', Validators.required],
            link       : ['', Validators.required],
            useRouter  : ['', Validators.required],
        });


    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();

        // Dispose the overlay
        if ( this._overlayRef )
        {
            this._overlayRef.dispose();
        }
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Open the shortcuts panel
     */
    openPanel(): void
    {
        // Return if the  panel or its origin is not defined
        if ( !this._mapLayersPanel || !this._mapLayersOrigin )
        {
            return;
        }

        // Make sure to start in 'view' mode
        this.mode = 'view';

        // Create the overlay if it doesn't exist
        if ( !this._overlayRef )
        {
            this._createOverlay();
        }

        // Attach the portal to the overlay
        this._overlayRef.attach(new TemplatePortal(this._mapLayersPanel, this._viewContainerRef));
    }

    /**
     * Close the shortcuts panel
     */
    closePanel(): void
    {
        this._overlayRef.detach();
    }



    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create the overlay
     */
    private _createOverlay(): void
    {
        // Create the overlay
        this._overlayRef = this._overlay.create({
            hasBackdrop     : true,
            backdropClass   : 'fuse-backdrop-on-mobile',
            scrollStrategy  : this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
            .flexibleConnectedTo(this._mapLayersOrigin._elementRef.nativeElement)
            .withPositions([
                {
                    originX : 'end',
                    originY : 'top',
                    overlayX: 'start',
                    overlayY: 'top',
                }
            ])
            .withLockedPosition(true)
            .withPush(true),
        });

        // Detach the overlay from the portal on backdrop click
        this._overlayRef.backdropClick().subscribe(() =>
        {
            this._overlayRef.detach();
        });
    }
}
