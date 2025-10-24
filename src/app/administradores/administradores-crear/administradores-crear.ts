import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Administradores } from '../../interfaces/administradores';
import { AdministradoresService } from '../../services/administradores-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administradores-crear',
  imports: [FormsModule],
  templateUrl: './administradores-crear.html',
  styleUrl: './administradores-crear.css'
})
export class AdministradoresCrear {

}
