import { Component, ViewEncapsulation } from "@angular/core";
import { AppService } from "./app.service";

@Component({
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="about-container">
      <h1 class="about-title">About Us</h1>
      <p class="about-text">We are a leading company in the tech industry, providing exceptional service and quality products.</p>
      <img class="about-image" src="http://localhost/rush2deliver/.backend/api/image-placeholder?d=400" alt="About Us" />
      <div class="about-details">
        <h2 class="about-subtitle">Our Mission</h2>
        <p class="about-text">To deliver high-quality products that inspire and enable people to be more efficient.</p>
        <h2 class="about-subtitle">Our Team</h2>
        <p class="about-text">We have a dedicated team of experts who strive to deliver excellence at every step.</p>
      </div>
    </div>
  `,
  styles: [
    `
      .about-container {
        max-width: 800px;
        margin: auto;
        padding: 20px;
        text-align: center;
      }
      .about-title {
        font-size: 36px;
        margin-bottom: 20px;
      }
      .about-subtitle {
        font-size: 24px;
        margin: 20px 0;
      }
      .about-text {
        font-size: 16px;
        line-height: 1.5;
      }
      .about-image {
        width: 100%;
        margin: 20px 0;
      }
    `,
  ],
})
export class AboutComponent {
  constructor(private appService: AppService) {}
}
