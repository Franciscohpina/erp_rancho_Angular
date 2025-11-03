import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Ganados } from '../../interfaces/ganados';
import { GanadosService } from '../../services/ganados-service';

@Component({
  selector: 'app-ganados-listar',
  imports: [RouterLink, CommonModule],
  templateUrl: './ganados-listar.html',
  styleUrl: './ganados-listar.css'
})
export class GanadosListar {
ganados: Ganados[] = [];

  constructor(private ganadosServicio: GanadosService){} //le dice que debe estar desde que se cargue la pagina

  ngOnInit(): void{ //carga los datos al iniciar la pagina
            console.log("Registros devueltos");
    this.cargarGanados();
  }  

  cargarGanados(){
    this.ganadosServicio.obtenerGanados().subscribe(
      (registros: any)=>{
        console.log("Registros devueltos desde SQL" + registros);
        this.ganados=registros.data;
      });
  }

  eliminarGanado(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este animal?')) {
      this.ganadosServicio.eliminarGanado(id).subscribe(() => {
        console.log('Ganado eliminado');
        // Actualiza la lista en el frontend
        this.ganados = this.ganados.filter(g => g.id !== id);
      });
    }
  }

// ganados = [
//     {id:1, edad:'10 meses', sexo:'hembra', peso:'750',precio:'12000.00',origen:'indegsa', altura:'153',imagen:'vaca.jpg',estado: 'activo',raza_id: '1',categoria_id:'1',corral_id: '1',proveedor_id:'1'}
//   ];
}
