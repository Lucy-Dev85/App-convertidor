import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrl: './convertidor.component.css'
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'UDS';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['UDS', 'EUR', 'LIBRA']

  convertir() {
    switch (this.tengo) {
      case 'UDS':
        if (this.quiero === 'UDS') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.84
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad *0.75
        }
        break;
      case 'EUR':
        if (this.quiero === 'UDS') {
          this.total = this.cantidad *1.20;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad 
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad *0.9
        }        break;
      case 'LIBRA':
        if (this.quiero === 'UDS') {
          this.total = this.cantidad * 1.33;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.11
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad
        }        break;

    }
  }
}
