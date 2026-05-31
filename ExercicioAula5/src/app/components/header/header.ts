import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Avatar } from '../avatar/avatar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, Avatar],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
