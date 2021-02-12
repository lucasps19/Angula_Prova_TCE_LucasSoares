import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {

  turma: any;
  currentTurma = { id: '', disciplina: '', professorRegistro: '' }
  currentIndex = -1;
  disciplina = '';
  msg = '';

  constructor(private turmaService: TurmaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.readTurma();
    let params: any = this.route.snapshot.params;
    this.msg = params.msg;
  }

  readTurma(): void {
    this.turmaService.readAll()
      .subscribe(
        turma => {
          this.turma = turma;
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readTurma();
    this.currentTurma = { 'id': '', 'disciplina': '', 'professorRegistro': '' };
    this.currentIndex = -1;
    this.msg = '';
  }

  setCurrentTurma(turma: { 'id': '', 'disciplina': '', 'professorRegistro': '' }, index: number): void {
    this.currentTurma = turma;
    this.currentIndex = index;
    this.msg = '';
  }

  searchByDisciplina(): void {
    this.turmaService.searchByNome(this.disciplina)
      .subscribe(
        turma => {
          this.turma = turma;
        },
        error => {
          console.log(error);
        });
  }
}
