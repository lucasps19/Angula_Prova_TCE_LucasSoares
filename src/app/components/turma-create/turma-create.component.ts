import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styleUrls: ['./turma-create.component.css']
})
export class TurmaCreateComponent implements OnInit {

  turma = {
    disciplina: '',
    professorRegistro: 0
  }
  submitted = false;

  constructor(private turmaService: TurmaService) { }

  ngOnInit(): void {
  }

  createTurma(): void{
    const data = {
      disciplina: this.turma.disciplina,
      professorRegistro: this.turma.professorRegistro
    };

    this.turmaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTurma(): void{
    this.submitted = false;
    this.turma= {
      disciplina: '',
      professorRegistro: 0
    };
  }



}
