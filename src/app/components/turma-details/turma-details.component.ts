import { Component, OnInit } from '@angular/core';
import { TurmaService } from 'src/app/services/turma.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-turma-details',
  templateUrl: './turma-details.component.html',
  styleUrls: ['./turma-details.component.css']
})
export class TurmaDetailsComponent implements OnInit {

  currentTurma = { id: 0, disciplina: '', professorRegistro: 0 };
  message = '';
  submitted = false;

  constructor(
    private turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTurma(this.route.snapshot.paramMap.get('id'));
  }

  getTurma(id: any): void{
    this.turmaService.read(id)
      .subscribe(
        turma => {
          this.currentTurma = turma;
          console.log(turma);
        },
        error => {
          console.log(error);
        });
  }

  updateTurma(): void{
    this.turmaService.update(this.currentTurma.id, this.currentTurma)
    .subscribe(
      response => {
        console.log(response);
        this.message = 'A turma foi atualizada com sucesso!';
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  deleteTurma(): void {
    this.turmaService.delete(this.currentTurma.id)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/turma', { msg: 'Turma excluída com sucesso!' }]);
      },
      error => {
        console.log(error);
      });
  }
}
