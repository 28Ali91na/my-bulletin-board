import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ComponentHomeComponent} from './components/component-home/component-home.component';
import {HomeMainComponent} from './components/component-home-main/home-main.component' 
  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentHomeComponent, HomeMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-bulletin-board';
}
