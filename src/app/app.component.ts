import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UpComponent } from './up/up.component';
import { MidleComponent } from './midle/midle.component';
import { DowndComponent } from './downd/downd.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UpComponent, MidleComponent, DowndComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'enerofinal';
}
