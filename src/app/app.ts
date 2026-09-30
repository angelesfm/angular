import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet],
  template: `
    <main>
      <!-- Envolvemos el encabezado en un enlace para poder volver al inicio -->
      <a [routerLink]="['/']" style="text-decoration: none;">
        <header class="brand-name">
          <span class="material-icons">home</span>
          Homes
        </header>
      </a>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
  styleUrls: ['./app.css'], // (O déjalo borrado si ya no usas este archivo)
})
export class App {
  title = 'homes';
}