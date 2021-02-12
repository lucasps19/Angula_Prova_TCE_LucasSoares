import { Component, OnInit } from '@angular/core';
import { EstudanteService } from 'src/app/services/estudante.service';

@Component({
  selector: 'app-estudante-create',
  templateUrl: './estudante-create.component.html',
  styleUrls: ['./estudante-create.component.css']
})
export class EstudanteCreateComponent implements OnInit {

  estudante = {
    nome: ''
  };
  submitted = false;

  constructor(private estudanteService: EstudanteService) { }

  ngOnInit(): void {
  }

  createEstudante(): void {
    const data = {
      nome: this.estudante.nome
    };

    this.estudanteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newEstudante(): void {
    this.submitted = false;
    this.estudante = {
      nome: ''
    };
  }

}
