//importing from angular core package
//component is a decorator function (this is what turns plain TypeScript class into an angularS component)
//signal is a feature for reactive state
import { Component, signal } from '@angular/core';

//importing RouterOutlet component class from angular router package
// this is th exact thing that give meaning to  <router-outlet> tag in app.html
import { RouterOutlet } from '@angular/router';

//decorator a special syntax that attaches extra metadata/configuration to class below it
//it says: the class that follows this is an Angular component, and here's how it should behave.
//selector defines HTNL tag (used once in index.html) name for this comonent, very first thing the browser loads
//imports is conectted to app.html, says: this component tamplet is allowed to use <router-outlet>)
//templateUrl tells angular: the HTMLfor this component is in app.html
//styleUrl tells angular: use this file for this component CSS
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

//actual component class named App
//export makes it importable elsewhere
//signal creates a reactive signal holding the string 'angular_app'
export class App {
  protected readonly title = signal('angular_app');
}