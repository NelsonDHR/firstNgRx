import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [
  ]
})
export class NietoComponent implements OnInit {

  contador: number;
  
  
  constructor(private store:Store<AppState>) { 
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  ngOnInit(): void {
  }

  reset(){
    this.store.dispatch( actions.reset());
 
  }

}
