import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Md5hashComponent } from './md5hash/md5hash.component';

const routes: Routes = [
  { path: '', redirectTo: '/md5hash', pathMatch: 'full'},
  { path: 'md5hash', component: Md5hashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
