import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudanteCreateComponent } from './components/estudante-create/estudante-create.component';
import { EstudanteDetailsComponent } from './components/estudante-details/estudante-details.component';
import { EstudanteListComponent } from './components/estudante-list/estudante-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfessorCreateComponent } from './components/professor-create/professor-create.component';
import { ProfessorDetailsComponent } from './components/professor-details/professor-details.component';
import { ProfessorListComponent } from './components/professor-list/professor-list.component';
import { TurmaCreateComponent } from './components/turma-create/turma-create.component';
import { TurmaListComponent } from './components/turma-list/turma-list.component';
import { TurmaDetailsComponent } from './components/turma-details/turma-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudanteCreateComponent,
    EstudanteDetailsComponent,
    EstudanteListComponent,
    ProfessorCreateComponent,
    ProfessorDetailsComponent,
    ProfessorListComponent,
    TurmaCreateComponent,
    TurmaListComponent,
    TurmaDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
