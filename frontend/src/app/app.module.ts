import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RecomendacaoListarComponent } from './recomendacao-listar/recomendacao-listar.component';
import { RecomendacaoFormComponent } from './recomendacao-form/recomendacao-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RecomendacaoListarComponent,
    RecomendacaoFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
