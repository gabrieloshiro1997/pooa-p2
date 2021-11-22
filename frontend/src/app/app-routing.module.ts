import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendacaoFormComponent } from './recomendacao-form/recomendacao-form.component';
import { RecomendacaoListarComponent } from './recomendacao-listar/recomendacao-listar.component';

const routes: Routes = [
  {
    path: '',
    component: RecomendacaoListarComponent,
  },
  {
    path: 'criar',
    component: RecomendacaoFormComponent,
  },
  {
    path: 'editar/:id',
    component: RecomendacaoFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
