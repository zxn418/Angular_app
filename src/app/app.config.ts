//this is the file that activates the route map built in app.routes.ts

//import from the angular core package
//ApplicationConfig it describes the shape the shape that our configuration 
//object must follow, it doesnt do anything its just used to check we build config correctly
//provideBrowserGlobalErrorListeners a function to catch and report global broweser errors
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

//import from angular router package
//provideRouter this function swiches on routing for the app
//you should call <router-outlet> (in app.html) and Router.navigate() (in .ts file of any component that need navigation) so it works anywhere in app
import { provideRouter } from '@angular/router';

//import routes variable (an array of objects) we create in app.routes.ts file
//this is the connection point between this file and app.routes.ts file
//in app.routes.ts we we definded the route map, in this file it how its actually used in app
import { routes } from './app.routes';

//declared a constant called appConfig
//: ApplicationConfig says that this object must match the shape anglar expect for app configuaraion
//export makes this constant variable available to be imported anywhere
//providers is a list of services/featuresyou want avaliable throughout entire app
//calling error listener function, default
//calling provideRouter() function and passing our array routes, like saying this is the app route map
//use it to know which comonent to show for which url and enale Router and ActivatedRoute into any component that ask for them
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
}; 