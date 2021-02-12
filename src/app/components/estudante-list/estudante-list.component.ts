import { Component, OnInit } from '@angular/core';
import { EstudanteService } from 'src/app/services/estudante.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-estudante-list',
  templateUrl: './estudante-list.component.html',
  styleUrls: ['./estudante-list.component.css']
})
export class EstudanteListComponent implements OnInit {

  estudante: any;
  currentEstudante = {'matricula': '', 'nome': ''};
  currentIndex = -1;
  nome = '';
  msg = '';

  constructor(private estudanteService: EstudanteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.readEstudante();
    let params: any = this.route.snapshot.params
    this.msg = params.msg;
  }

  readEstudante(): void {
    this.estudanteService.readAll()
      .subscribe(
        estudante => {
          this.estudante = estudante;
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readEstudante();
    this.currentEstudante = {'matricula': '', 'nome': ''};
    this.currentIndex = -1;
    this.msg = '';
  }

  setCurrentEstudante(estudante: {'matricula': '', 'nome': ''}, index: number): void {
    this.currentEstudante = estudante;
    this.currentIndex = index;
    this.msg = '';
  }

  searchByNome(): void {
    this.estudanteService.searchByNome(this.nome)
      .subscribe(
        estudante => {
          this.estudante = estudante;
          console.log(estudante);
        },
        error => {
          console.log(error);
        });
  }
}
