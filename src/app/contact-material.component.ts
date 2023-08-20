import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-contact-us",
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <div class="contact-container">
      <mat-card class="contact-card">
        <mat-card-title>Contact Us</mat-card-title>
        <mat-card-content>
          <form #contactForm="ngForm" (ngSubmit)="sendMessage(contactForm)">
            <mat-form-field appearance="outline">
              <mat-label>Name</mat-label>
              <input matInput name="name" ngModel placeholder="Your Name" required />
              <mat-error>name required</mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput name="email" ngModel email placeholder="Your Email" required />
              <mat-error>Valid email required</mat-error>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Message</mat-label>
              <textarea matInput name="message" ngModel placeholder="Your Message" required></textarea>
              <mat-error>message required</mat-error>
            </mat-form-field>
            <br />
            <button mat-raised-button color="primary" type="submit">Send</button>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
      .contact-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .contact-card {
        width: 400px;
        margin: 20px;
      }
    `,
  ],
})
export class ContactMaterialComponent {
  sendMessage(form: NgForm) {
    if (form.valid) {
      console.log("Sending message", form.value);
      // You can send the form.value to a server or process it according to your needs.
    }
  }
}
