import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

interface AppState {
  contador: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
    this.store.subscribe(estado => {
      console.log(estado);
      this.contador = estado.contador;
    });
  }

  incrementar() {
    // this.contador++;
    const accion: Action = {
      type: 'INCREMENTAR'
    };
    this.store.dispatch(accion);
  }

  decrementar() {
    // this.contador--;
    this.store.dispatch({type: 'DECREMENTAR'});
  }

}
