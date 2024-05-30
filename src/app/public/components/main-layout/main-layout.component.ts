import { Component } from '@angular/core';
import {HeaderContentComponent} from "../header-content/header-content.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-layout',
  standalone: true,
    imports: [
        HeaderContentComponent,
        RouterOutlet
    ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
