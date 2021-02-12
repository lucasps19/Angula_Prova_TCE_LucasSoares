import { Component, OnInit } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professor-details',
  templateUrl: './professor-details.component.html',
  styleUrls: ['./professor-details.component.css']
})
export class ProfessorDetailsComponent implements OnInit {

  currentProfessor = { 'registro': 0, 'nome': '' };
  message = '';
  submitted = false;

  constructor(
    private professorServise: ProfessorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getProfessor(this.route.snapshot.paramMap.get('id'));
  }

  getProfessor(id: any): void {
    this.professorServise.read(id)
      .subscribe(
        professor => {
          this.currentProfessor = professor;
          console.log(professor);
        },
        error => {
          console.log(error);
        });
  }

  updateProfessor(): void {
    this.professorServise.update(this.currentProfessor.registro, this.currentProfessor)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'O professor foi atualizado com sucesso!';
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  deleteProfessor(): void {
    this.professorServise.delete(this.currentProfessor.registro)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/professor', { msg: 'Professor excluído com sucesso!' }]);
        },
        error => {
          console.log(error);
        });
  }
}
