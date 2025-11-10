import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  // Definimos el formulario
  loginForm: FormGroup;
  loginError: string = ''; // Para mostrar mensajes de error

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicializamos el formulario (vacío por ahora)
    this.loginForm = this.fb.group({});
  }

  ngOnInit(): void {
    // Construimos el formulario con sus campos y validaciones
    this.loginForm = this.fb.group({
    username: ['', [Validators.required]], // <-- CAMBIADO
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  // Este método se llama cuando el formulario se envía
  onSubmit(): void {
    // Limpiamos errores previos
    this.loginError = '';

    // Verificamos si el formulario es válido
    if (this.loginForm.invalid) {
      // Marcamos todos los campos como "tocados" para mostrar errores
      this.loginForm.markAllAsTouched();
      return;
    }

    // Si es válido, llamamos al servicio de autenticación
    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        // ¡Éxito! El servicio ya guardó el token (gracias al .pipe(tap(...))
        console.log('Login exitoso', response);

        // Redirigimos al dashboard (o a la ruta principal de tu app)
        this.router.navigate(['/dashboard']); // Asegúrate que esta ruta exista
      },
      error: (err) => {
        // Manejo de errores (ej. credenciales incorrectas)
        console.error('Error en el login', err);
        this.loginError = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
      }
    });
  }

  // --- Métodos de ayuda para mostrar errores en el HTML (opcional pero recomendado) ---
  get username() {
  return this.loginForm.get('username');
}

  get password() {
    return this.loginForm.get('password');
  }
}


