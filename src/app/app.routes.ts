import { Routes } from '@angular/router';
import { ClienteListar } from './cliente/cliente-listar/cliente-listar';
import { ClienteCrear } from './cliente/cliente-crear/cliente-crear';
import { ClienteEditar } from './cliente/cliente-editar/cliente-editar';
import { AdministradoresListar } from './administradores/administradores-listar/administradores-listar';
import { AdministradoresCrear } from './administradores/administradores-crear/administradores-crear';
import { AdministradoresEditar} from './administradores/administradores-editar/administradores-editar';
import { AdministradoresMostrar } from './administradores/administradores-mostrar/administradores-mostrar';
import { CategoriasCrear } from './categorias/categorias-crear/categorias-crear';
import { CategoriasListar } from './categorias/categorias-listar/categorias-listar';
import { CategoriasEditar } from './categorias/categorias-editar/categorias-editar';
import { CorralesListar } from './corrales/corrales-listar/corrales-listar';
import { CorralesCrear } from './corrales/corrales-crear/corrales-crear';
import { CorralesEditar } from './corrales/corrales-editar/corrales-editar';
import { GanadosListar } from './ganados/ganados-listar/ganados-listar';
import { GanadosCrear } from './ganados/ganados-crear/ganados-crear';
import { GanadosEditar } from './ganados/ganados-editar/ganados-editar';
import { LechesListar } from './leches/leches-listar/leches-listar';
import { LechesCrear } from './leches/leches-crear/leches-crear';
import { ProveedoresListar } from './proveedores/proveedores-listar/proveedores-listar';
import { ProveedoresCrear } from './proveedores/proveedores-crear/proveedores-crear';
import { RastrosListar } from './rastros/rastros-listar/rastros-listar';
import { RastrosCrear } from './rastros/rastros-crear/rastros-crear';
import { RazasListar } from './razas/razas-listar/razas-listar';
import { RazasCrear } from './razas/razas-crear/razas-crear';
import { TanquesListar } from './tanques/tanques-listar/tanques-listar';
import { TanquesCrear } from './tanques/tanques-crear/tanques-crear';


export const routes: Routes = [

    {path:'cliente', component: ClienteListar},
    {path:'cliente/crear', component: ClienteCrear},
    {path:'cliente/:cliente.id/editar', component: ClienteEditar},
    {path:'administradores', component: AdministradoresListar},
    {path:'administradores/crear', component: AdministradoresCrear},
    {path:'administradores/:id/editar', component: AdministradoresEditar },
    {path:'administradores/:administradores.id', component: AdministradoresMostrar},
    {path:'categorias', component: CategoriasListar},
    {path:'categorias/crear', component: CategoriasCrear},
    {path:'categorias/:categorias.id/editar', component: CategoriasEditar},
    {path:'corrales', component: CorralesListar},
    {path:'corrales/crear', component: CorralesCrear},
    {path:'corrales/:corrales.id/editar', component: CorralesEditar},
    {path:'ganados', component: GanadosListar},
    {path:'ganados/crear', component: GanadosCrear},
    {path:'ganados/:ganados.id/editar', component: GanadosEditar},
    {path:'leches', component: LechesListar},
    {path:'leches/crear', component: LechesCrear},
    {path:'proveedores', component: ProveedoresListar},
    {path:'proveedores/crear', component: ProveedoresCrear},
    {path:'rastros', component: RastrosListar},
    {path:'rastros/crear', component: RastrosCrear},
    {path:'razas', component: RazasListar},
    {path:'razas/crear', component: RazasCrear},
    {path:'tanques', component: TanquesListar},
    {path:'tanques/crear', component: TanquesCrear},
];
