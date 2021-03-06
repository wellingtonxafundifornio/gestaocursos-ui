import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosCadastroComponent } from './alunos/alunos-cadastro/alunos-cadastro.component';
import { AlunosDataTableComponent } from './alunos/alunos-data-table/alunos-data-table.component';

import { CursosCadastroComponent } from './cursos/cursos-cadastro/cursos-cadastro.component';
import { CursosDatableComponent } from './cursos/cursos-datable/cursos-datable.component';

import { TurmasDataTableComponent } from './turmas/turmas-data-table/turmas-data-table.component';
import { TurmasCadastroComponent } from './turmas/turmas-cadastro/turmas-cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunosDataTableComponent },
  { path: 'alunos/novo', component: AlunosCadastroComponent },
  { path: 'alunos/:codigo', component: AlunosCadastroComponent },
  { path: 'cursos', component: CursosDatableComponent },
  { path: 'cursos/novo', component: CursosCadastroComponent },
  { path: 'cursos/:codigo', component: CursosCadastroComponent },
  { path: 'turmas', component: TurmasDataTableComponent },
  { path: 'turmas/novo', component: TurmasCadastroComponent },
  { path: 'turmas/:codigo', component: TurmasCadastroComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
