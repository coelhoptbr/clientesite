import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../cliente.service';
import { InCliente } from "./../incliente";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-incluir-cliente',
  templateUrl: './incluir-cliente.component.html',
  styleUrls: ['./incluir-cliente.component.css']
})
export class IncluirClienteComponent implements OnInit {

  dadosinvalidos: boolean = false;
  mensagemErro: string = "";
  cliente: InCliente = new InCliente();
  submitted = false;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
  }

  novoCliente(): void {
    this.dadosinvalidos = false;
    this.mensagemErro = "";
    this.submitted = false;
    this.cliente = new InCliente();
  }

  salvar() {
    this.clienteService.incluirCliente(this.cliente)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cliente = new InCliente();
    this.router.navigate(['/clientes']);
  }

  onSubmit(formvalido) {
    this.mensagemErro = "";
    if (formvalido) {   
      this.submitted = true;         
      this.salvar();
    } else {      
      this.dadosinvalidos = true;
      
      if (this.cliente.nome) {
        if ((this.cliente.nome.length < 10 || this.cliente.nome.length > 60))
          this.mensagemErro = "Digite um nome de 10 a 60 caracteres.";
      } else {
        this.mensagemErro = "Digite um nome.";
      }

      if (!this.mensagemErro) {
        if (this.cliente.limite) {
          if (this.cliente.limite < 100)
            this.mensagemErro = "Digite um limite a partir de R$100.";
        } else {
          this.mensagemErro = "Digite um limite.";
        }
      }

      if (!this.mensagemErro) {
        if (!this.cliente.risco) {
          this.mensagemErro = "Selecione o risco.";
        }
      }
    }
  }

}
