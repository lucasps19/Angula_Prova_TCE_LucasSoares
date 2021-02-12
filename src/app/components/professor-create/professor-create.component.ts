import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';

@Component({
  selector: 'app-professor-create',
  templateUrl: './professor-create.component.html',
  styleUrls: ['./professor-create.component.css']
})
export class ProfessorCreateComponent implements OnInit {

  professor = {
    nome: ''
  };
  submitted = false;

  constructor(private professorService: ProfessorService) { }

  ngOnInit(): void {
  }

  createProfessor(): void {
    const data = {
      nome: this.professor.nome
    };

    this.professorService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newProfessor(): void {
    this.submitted = false;
    this.professor = {
      nome: ''
    };
  }
}
