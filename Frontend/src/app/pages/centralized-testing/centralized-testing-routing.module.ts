import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralizedTestingComponent } from './centralized-testing.component';
import { TestInitializationComponent } from './test-initialization/test-initialization.component';
import { TestingFlowComponent } from './testing-flow/testing-flow.component';
import { TestingResultsComponent } from './testing-results/testing-results.component';
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
  },
  {
    path: 'results',
    component: TestingResultsComponent
  },
  {
    path: ':taskId',
    component: TestingFlowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentralizedTestingRoutingModule {
}
