import { Component, ViewEncapsulation } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { AboutComponent } from "./about.component";
import { AppService } from "./app.service";

@Component({
  standalone: true,
  imports: [FormsModule, AboutComponent],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="contact-container">
      <h1 class="contact-title">Contact Us</h1>
      <form class="contact-form" #f="ngForm" (ngSubmit)="onSubmit(f)">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" ngModel required />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Your Email" ngModel required />
        </div>

        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" placeholder="Your Message" ngModel required></textarea>
        </div>

        <button type="submit" class="submit-button">Send</button>
      </form>
    </div>
  `,
  styles: [
    `
      .contact-container {
        max-width: 600px;
        margin: auto;
        padding: 20px;
        text-align: center;
      }
      .contact-title {
        font-size: 36px;
        margin-bottom: 20px;
      }
      .contact-form {
        display: flex;
        flex-direction: column;
      }
      .form-group {
        margin-bottom: 20px;
      }
      label {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 16px;
      }
      input,
      textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
      }
      textarea {
        height: 100px;
      }
      .submit-button {
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
      }
    `,
  ],
})
export class ContactUsComponent {
  constructor(private appService: AppService) {}

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
