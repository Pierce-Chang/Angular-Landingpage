import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from './navbar/navbar.component';
import { HowtoorderComponent } from "./howtoorder/howtoorder.component";
import { MenuComponent } from "./menu/menu.component";
import { FindusComponent } from "./findus/findus.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
    selector: "app-landingPage",
    standalone: true,
    imports: [CommonModule, NavbarComponent, HowtoorderComponent, MenuComponent, FindusComponent, FooterComponent],
    template: `
    <section class="main-section">
        <div><app-navbar></app-navbar></div>
        <h1 class="fontRaleway">SAKURA RAMEN</h1>
        <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
    <section>
    <div><app-howtoorder></app-howtoorder></div>
    </section>
    <section>
    <div><app-menu></app-menu></div>
    </section>
    <section>
    <div><app-findus></app-findus></div>
    </section>
    <section>
    <div><app-footer></app-footer></div>
    </section>
    `,
    styleUrls: ["./landingPage.component.scss"]
})
export class LadingPageComponent { }