import { createCustomElement } from "@angular/elements";
import { createApplication } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AboutComponent } from "./app/about.component";
import { ContactMaterialComponent } from "./app/contact-material.component";
import { ContactUsComponent } from "./app/contact.component";
import { RootComponent } from "./app/root.component";
import { StepperComponent } from "./app/stepper.component";

createApplication({
  providers: [provideAnimations()],
}).then((appRef) => {
  const injector = appRef.injector;
  customElements.define("root-element", createCustomElement(RootComponent, { injector }));
  customElements.define("about-element", createCustomElement(AboutComponent, { injector }));
  customElements.define("contact-element", createCustomElement(ContactUsComponent, { injector }));
  customElements.define("stepper-element", createCustomElement(StepperComponent, { injector }));
  customElements.define("contact-material-element", createCustomElement(ContactMaterialComponent, { injector }));
});
