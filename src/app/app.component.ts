import { Component } from '@angular/core';
import { LocalizeFn } from '@angular/localize/init';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = $localize `Choose your dream destination...${environment.title}`;
  
}
