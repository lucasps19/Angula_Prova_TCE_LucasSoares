import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {

  professor: any;
  currentProfessor = { 'registro': '', 'nome': '' };
  currentIndex = -1;
  nome = '';
  msg = '';

  constructor(private professorService: ProfessorService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.readProfessor();
    let params: any = this.route.snapshot.params;
    this.msg = params.msg;
  }

  readProfessor(): void {
    this.professorService.readAll()
      .subscribe(
        professor => {
          this.professor = professor;
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readProfessor();
    this.currentProfessor = { 'registro': '', 'nome': '' };
    this.currentIndex = -1;
    this.msg = '';
  }

  setCurrentProfessor(professor: { 'registro': '', 'nome': '' }, index: number): void {
    this.currentProfessor = professor;
    this.currentIndex = index;
    this.msg = '';
  }

  searchByNome(): void {
    this.professorService.searchByNome(this.nome)
      .subscribe(
        professor => {
          this.professor = professor;
        },
        error => {
          console.log(error);
        });
  }
}
