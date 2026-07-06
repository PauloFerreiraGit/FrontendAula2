import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Avatar } from '../avatar/avatar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, Avatar],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
})
export class Header {}
