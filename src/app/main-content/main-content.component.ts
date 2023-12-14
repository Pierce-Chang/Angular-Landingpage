import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HowtoorderComponent } from "./howtoorder/howtoorder.component";
import { MenuComponent } from "./menu/menu.component";
import { FindusComponent } from "./findus/findus.component";
import { LadingPageComponent } from './landing_Page/landingPage.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, HowtoorderComponent, MenuComponent, FindusComponent, LadingPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
