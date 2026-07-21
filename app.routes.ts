//this file is the middle layer: it takes components and url and links them togather into one map
//(app.config.ts, <router-outlet>, Router.navigate()) exists to use this map.

//importing Routes type from angular router package
//it tells typescript the array i'm about to buld (routers) must follow this structure
import { Routes } from '@angular/router';

//importing the User class (the component) from user.ts
//path is ./user/user
//importing so we can use in lines down
import { UserComponent } from './user/user';

//importing the User class (the component) from user-detail.ts
//path is ./user-detail/user-detail
//importing so we can use in lines down
import { UserDetail } from './user-detail/user-detail';

//declaring constant called routes typed as Routes (type we imported above)
//export makes it available to imported elsewhere
//its an array because app can have many routes each one is an object describing one URL pattern 
export const routes: Routes = [
//when url is /users display the User (class name) component    
    {path: 'users', component: UserComponent
    },
//when url looks like /users/ followed by something display UserDetail
//:id is a route parameter : colon means this segment is a variable 
    {path: 'users/:id', component: UserDetail},
//a rule when url is empty, instead of showing a component auto redirct to /users
//pathMatch: 'full means only apply this rule when URL exactly empty
    {path: '', redirectTo: '/users', pathMatch: 'full'},
];