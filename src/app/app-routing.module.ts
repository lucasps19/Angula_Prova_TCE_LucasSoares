import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EstudanteListComponent } from './components/estudante-list/estudante-list.component';
import { EstudanteDetailsComponent } from './components/estudante-details/estudante-details.component';
import { EstudanteCreateComponent } from './components/estudante-create/estudante-create.component';
import { ProfessorListComponent } from './components/professor-list/professor-list.component';
import { ProfessorDetailsComponent } from './components/professor-details/professor-details.component';
import { ProfessorCreateComponent } from './components/professor-create/professor-create.component';
import { TurmaListComponent } from './components/turma-list/turma-list.component';
import { TurmaDetailsComponent } from './components/turma-details/turma-details.component';
import { TurmaCreateComponent } from './components/turma-create/turma-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'estudante', pathMatch: 'full' },
  { path: 'estudante', component: EstudanteListComponent },
  { path: 'estudante/:id', component: EstudanteDetailsComponent },
  { path: 'estudante-create', component: EstudanteCreateComponent },
  { path: 'professor', component: ProfessorListComponent },
  { path: 'professor/:id', component: ProfessorDetailsComponent },
  { path: 'professor-create', component: ProfessorCreateComponent},
  { path: 'turma', component: TurmaListComponent},
  { path: 'turma/:id', component: TurmaDetailsComponent},
  { path: 'turma-create', component: TurmaCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
