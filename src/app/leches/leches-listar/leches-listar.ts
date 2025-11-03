import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Leches } from '../../interfaces/leches';
import { LechesService } from '../../services/leches-service';

@Component({
  selector: 'app-leches-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './leches-listar.html',
  styleUrl: './leches-listar.css'
})
export class LechesListar {
 leches: Leches[] = [];

  constructor(private lechesServicio: LechesService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarLeches();
  }  

  cargarLeches(){
    this.lechesServicio.obtenerLeches().subscribe(
      (registros: any)=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.leches=registros.data;
      });
  }

  eliminarLeche(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este registro de ordeña?')) {
      this.lechesServicio.eliminarLeche(id).subscribe(() => {
        console.log('Registro eliminado');
        // Actualiza la lista en el frontend
        this.leches = this.leches.filter(l => l.id !== id);
      });
    }
  }

  // leches = [
  //   {id:1, fecha:'2024-06-01', cantidad:50, densidad:1.03, tanque_id:1, ganado_id:1}
  // ];
}
