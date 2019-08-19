import { Component, OnInit } from '@angular/core';
import { ClienteService } from './../cliente.service';
import { InCliente } from "./../incliente";

@Component({
  selector: 'app-incluir-cliente',
  templateUrl: './incluir-cliente.component.html',
  styleUrls: ['./incluir-cliente.component.css']
})
export class IncluirClienteComponent implements OnInit {

  cliente: InCliente = new InCliente();
  submitted = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }

  novoCliente(): void {
    this.submitted = false;
    this.cliente = new InCliente();
  }

  salvar() {
    this.clienteService.incluirCliente(this.cliente)
      .subscribe(data => console.log(data), error => console.log(error));
    this.cliente = new InCliente();
  }

  onSubmit() {
    this.submitted = true;
    this.salvar();
  }

}
