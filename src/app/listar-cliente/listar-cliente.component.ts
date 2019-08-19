import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ClienteService } from "./../cliente.service";
import { OutCliente } from "./../outcliente";

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {

  clientes: Observable<OutCliente[]>;

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clientes = this.clienteService.listarClientes();
  }

  excluirCliente(id: number) {
    this.clienteService.excluirCliente(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

}
