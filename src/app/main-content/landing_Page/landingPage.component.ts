import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './nav_bar/navbar.component';

@Component({
    selector: "app-landingPage",
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section class="main-section">
        <div><app-navbar></app-navbar></div>
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ["./landingPage.component.scss"]
})
export class LadingPageComponent { }