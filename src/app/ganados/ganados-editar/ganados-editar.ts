import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GanadosService } from '../../services/ganados-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importante para [(ngModel)]
import { Ganados } from '../../interfaces/ganados';

@Component({
  selector: 'app-ganados-editar',
  imports: [RouterLink, CommonModule, FormsModule], // Añadido
  standalone: true,
  templateUrl: './ganados-editar.html',
  styleUrl: './ganados-editar.css'
})
export class GanadosEditar implements OnInit {

  idDeRuta: number = 0;
  // Objeto para el formulario
  ganado: Ganados = {
    id: 0,
    edad: 0,
    sexo: 'Hembra', // Valor por defecto
    peso: 0,
    precio: 0,
    origen: '',
    altura: 0,
    imagen: '',
    estado: 'activo', // Valor por defecto
    raza_id: 0,
    categoria_id: 0,
    corral_id: 0,
    proveedor_id: 0
  };
  // Variable para guardar el NUEVO archivo de imagen
  archivoImagen: File | null = null;
  // Variable para la URL de la imagen actual (para la vista previa)
  imagenActualUrl: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ganadosServicio: GanadosService
  ) {}

  ngOnInit(): void {
    this.idDeRuta = this.route.snapshot.params['id'];
    if (this.idDeRuta) {
      this.ganadosServicio.buscarGanado(this.idDeRuta).subscribe({
        next: (response: any) => {
          this.ganado = response.data; 
          if (this.ganado.imagen) {
            this.imagenActualUrl = 'http://localhost:3000/' + this.ganado.imagen;
          }
        },
        error: (err) => console.error('Error al cargar:', err)
      });
    }
  }

  // Método para capturar el archivo seleccionado
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      
      // 1. Guardamos el archivo en una constante local (que no es nula)
      const file: File = event.target.files[0];

      // 2. Asignamos el archivo a la variable de la clase
      this.archivoImagen = file;

      // 3. Creamos la URL usando la constante local 'file' (esto ya no da error)
      this.imagenActualUrl = URL.createObjectURL(file);
    }
  }

  // Método para enviar el formulario
  actualizarGanado(): void {
    // 1. Crear FormData
    const formData = new FormData();

    // 2. Adjuntar todos los campos de 'this.ganado' (excepto imagen)
    formData.append('edad', this.ganado.edad.toString());
    formData.append('sexo', this.ganado.sexo);
    formData.append('peso', this.ganado.peso.toString());
    formData.append('precio', this.ganado.precio.toString());
    formData.append('origen', this.ganado.origen);
    formData.append('altura', this.ganado.altura.toString());
    formData.append('estado', this.ganado.estado);
    formData.append('raza_id', this.ganado.raza_id.toString());
    formData.append('categoria_id', this.ganado.categoria_id.toString());
    // Manejar nulos
    if (this.ganado.corral_id) {
      formData.append('corral_id', this.ganado.corral_id.toString());
    }
    formData.append('proveedor_id', this.ganado.proveedor_id.toString());
    
    // 3. Adjuntar la NUEVA imagen (si el usuario seleccionó una)
    if (this.archivoImagen) {
      formData.append('imagen', this.archivoImagen, this.archivoImagen.name);
    }

    // 4. Enviar el FormData al servicio
    this.ganadosServicio.actualizarGanado(this.idDeRuta, formData).subscribe({
      next: () => {
        console.log('Ganado actualizado');
        this.router.navigate(['/ganados']); // Redirigimos a la lista
      },
      error: (err) => console.error('Error al actualizar:', err)
    });
  }
}