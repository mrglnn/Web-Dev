import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section>
      <h2>Welcome to the Albums App</h2>
      <p>This simple app demonstrates routing and HTTP services.</p>
      <p><a routerLink="/albums">Browse Albums</a></p>
    </section>
  `,
})
export class HomeComponent {}
