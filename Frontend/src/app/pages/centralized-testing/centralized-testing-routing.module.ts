import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralizedTestingComponent } from './centralized-testing.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TestInitializationComponent } from './test-initialization/test-initialization.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {
    path: '',
    component: CentralizedTestingComponent,
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'init',
    component: TestInitializationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralizedTestingRoutingModule {
}
