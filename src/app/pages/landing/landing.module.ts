import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [LandingComponent, JumbotronComponent, AboutComponent, ServicesComponent, ContactComponent],
  imports: [RouterModule.forChild([{ path: '', component: LandingComponent }])],
})
export default class LandingModule {}
