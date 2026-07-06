import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',

  imports: [RouterOutlet],
  templateUrl: './main.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./main.css'],
})
export class Main {}
