import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';

 
  enviarAlert(fecha,dato)
  {
   alert('fecha de envio :'+fecha+' :dato enviado:'+dato);
        return false;
  }
}
