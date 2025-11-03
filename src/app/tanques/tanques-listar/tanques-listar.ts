import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Tanques } from '../../interfaces/tanques';
import { TanquesService } from '../../services/tanques-service';

@Component({
  selector: 'app-tanques-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './tanques-listar.html',
  styleUrl: './tanques-listar.css'
})
export class TanquesListar {
tanques: Tanques[] = [];

  constructor(private tanquesServicio: TanquesService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarTanques();
  }  

  cargarTanques(){
    this.tanquesServicio.obtenerTanques().subscribe(
      (registros: any)=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.tanques=registros.data;
      });
  }

    eliminarTanque(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro de tanque?')) {
      this.tanquesServicio.eliminarTanque(id).subscribe(() => {
        console.log('Registro eliminado');
        // Actualiza la lista en el frontend
        this.tanques = this.tanques.filter(l => l.id !== id);
      });
    }
  }

  // tanques = [
  //   {id:1, capacidad:'5000L', temperatura:'5ºC', estado:'Lleno', leche_id:'1'}
  // ];
}
