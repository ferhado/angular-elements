import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { AppService } from "./app.service";

@Component({
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div>
      <h1>{{ text }}</h1>
      <button (click)="changeText()" mat-raised-button color="primary">
        <mat-icon>add</mat-icon>
        Change Text sad
      </button>
    </div>
  `,
  styles: [],
})
export class RootComponent implements OnInit {
  @Input() text = "Initial Text";
  @Output() textChanged = new EventEmitter<string>();

  constructor(private cd: ChangeDetectorRef, private appService: AppService) {
    console.log("Angular component constructor");
  }

  ngOnInit() {
    console.log("Angular component initialized");
  }

  changeText() {
    this.text = "Text Changed";
    this.textChanged.emit(this.text);
  }

  setText(newText: string) {
    this.text = newText;
    this.cd.detectChanges();
  }
}
