import { Component, OnInit } from '@angular/core';
import { EstudanteService } from 'src/app/services/estudante.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estudante-details',
  templateUrl: './estudante-details.component.html',
  styleUrls: ['./estudante-details.component.css']
})
export class EstudanteDetailsComponent implements OnInit {

  currentEstudante = {'matricula': 0, 'nome':''};
  message = '';
  submitted = false;

  constructor(
    private estudanteService: EstudanteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getEstudante(this.route.snapshot.paramMap.get('id'));
  }

  getEstudante(id: any): void {
    this.estudanteService.read(id)
      .subscribe(
        estudante => {
          this.currentEstudante = estudante;
          console.log(estudante);
        },
        error => {
          console.log(error);
        });
  }

  updateEstudante(): void {
    this.estudanteService.update(this.currentEstudante.matricula, this.currentEstudante)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The estudante was updated!';
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  deleteEstudante(): void {
    this.estudanteService.delete(this.currentEstudante.matricula)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/estudante', {msg: 'Usuário excluído com sucesso!'}]);
        },
        error => {
          console.log(error);
        });
  }
}
