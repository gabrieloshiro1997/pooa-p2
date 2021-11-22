import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { RecomendacaoListarComponent } from './recomendacao-listar/recomendacao-listar.component';
import { RecomendacaoFormComponent } from './recomendacao-form/recomendacao-form.component';
import { MatButtonModule } from '@angular/material/button'
import { RecomendacaoService } from './recomendacao.service';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    RecomendacaoService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
