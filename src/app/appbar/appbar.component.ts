import { Component } from '@angular/core';
import { AuthService } from '../services/AuthGuard/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent {
  constructor(private authService: AuthService, private router: Router) { }

  //Méthode pour déclancher la déconnexion via le Authservice
  deconnexion(): void {
    this.authService.seDeconnecter();
    this.router.navigate(['/']); // Retour à la page de connexion
  }
}
