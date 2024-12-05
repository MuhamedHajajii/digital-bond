import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankNavbarComponent } from './components/navbar/blank-navbar/blank-navbar.component';
import { AuthNavbarComponent } from './components/navbar/auth-navbar/auth-navbar.component';

@NgModule({
  declarations: [],
  imports: [BlankNavbarComponent, AuthNavbarComponent],
  exports: [AuthNavbarComponent, BlankNavbarComponent],
})
export class CoreModule {}
