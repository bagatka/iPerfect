import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskPageComponent } from './task-page/task-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'welcome',
        component: WelcomePageComponent
      },
      {
        path: ':taskId',
        component: TaskPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralizedTestingRoutingModule {
}
