import { Component } from '@angular/core';
import { Pessoa } from '../../services/types/types';
import { PessoaService } from '../../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pessoa-form',
  imports: [FormsModule],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {

  titulo: string = 'Cadastro de Pessoas';

  pessoa: Pessoa = {} as Pessoa;

  pessoaId?: number;

  constructor(private service: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    //Verifico se é alteração ou inclusão
    this.pessoaId = Number(this.route.snapshot.params['id']);
    if (this.pessoaId) {
      service.buscarPorId(this.pessoaId).subscribe(pessoa => {

        if (this.pessoaId) {
          service.buscarPorId(this.pessoaId).subscribe(pessoa => {
            if (pessoa) {
              this.pessoa.id = pessoa.id;
              this.pessoa.nome = pessoa.nome;
              this.pessoa.sobrenome = pessoa.sobrenome;
              this.pessoa.dtNascimento = pessoa.dtNascimento;
            }
          })
        }
      })
    }
  }
  


  submeter(){

    if(this.pessoaId){
      this.service.editar(this.pessoa).subscribe(()=>{
        this.router.navigate(['/pessoas']);
      })
    }else{
      this.service.incluir(this.pessoa).subscribe(() => {
        this.router.navigate(['/pessoas']);
    })
  }
}
}