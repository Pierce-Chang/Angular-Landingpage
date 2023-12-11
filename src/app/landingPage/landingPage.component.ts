import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: "app-landingPage",
    standalone: true,
    imports: [CommonModule],
    template: `
    <section>
        <h1>SAKURA RAMEN</h1>
        <h2>BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ["./landingPage.component.scss"]
})
export class LadingPageComponent { }