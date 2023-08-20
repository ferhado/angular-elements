/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, ViewEncapsulation } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";

@Component({
  encapsulation: ViewEncapsulation.None,
  template: `
    <mat-stepper [linear]="true" #stepper>
      <mat-step [completed]="firstStep.valid">
        <form #firstStep="ngForm">
          <ng-template matStepLabel>Fill out your name</ng-template>
          <mat-form-field>
            <input matInput placeholder="Last name, First name" name="firstCtrl" ngModel required />
          </mat-form-field>
          <div>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>

      <mat-step [completed]="secondStep.valid">
        <form #secondStep="ngForm">
          <ng-template matStepLabel>Fill out your address</ng-template>
          <mat-form-field>
            <input matInput placeholder="Address" name="secondCtrl" ngModel required />
          </mat-form-field>
          <div>
            <button mat-button matStepperPrevious>Back</button>
            <button mat-button matStepperNext>Next</button>
          </div>
        </form>
      </mat-step>

      <mat-step>
        <ng-template matStepLabel>Done</ng-template>
        You are now done.
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: [
    `
      .example-input-wrapper {
        margin-bottom: 16px;
      }

      label {
        margin-right: 4px;
      }
    `,
  ],
  standalone: true,
  imports: [MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class StepperComponent {}
