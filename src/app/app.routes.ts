import { Routes } from '@angular/router';
import { ClienteListar } from './cliente/cliente-listar/cliente-listar';
import { ClienteCrear } from './cliente/cliente-crear/cliente-crear';
import { ClienteEditar } from './cliente/cliente-editar/cliente-editar';
import { ClienteMostrar } from './cliente/cliente-mostrar/cliente-mostrar';

import { AdministradoresListar } from './administradores/administradores-listar/administradores-listar';
import { AdministradoresCrear } from './administradores/administradores-crear/administradores-crear';
import { AdministradoresEditar} from './administradores/administradores-editar/administradores-editar';
import { AdministradoresMostrar } from './administradores/administradores-mostrar/administradores-mostrar';

import { CategoriasCrear } from './categorias/categorias-crear/categorias-crear';
import { CategoriasListar } from './categorias/categorias-listar/categorias-listar';
import { CategoriasEditar } from './categorias/categorias-editar/categorias-editar';
import { CategoriasMostrar } from './categorias/categorias-mostrar/categorias-mostrar';

import { CorralesListar } from './corrales/corrales-listar/corrales-listar';
import { CorralesCrear } from './corrales/corrales-crear/corrales-crear';
import { CorralesEditar } from './corrales/corrales-editar/corrales-editar';
import { CorralesMostrar } from './corrales/corrales-mostrar/corrales-mostrar';

import { GanadosListar } from './ganados/ganados-listar/ganados-listar';
import { GanadosCrear } from './ganados/ganados-crear/ganados-crear';
import { GanadosEditar } from './ganados/ganados-editar/ganados-editar';
import { GanadosMostrar } from './ganados/ganados-mostrar/ganados-mostrar';

import { LechesListar } from './leches/leches-listar/leches-listar';
import { LechesCrear } from './leches/leches-crear/leches-crear';
import { LechesEditar } from './leches/leches-editar/leches-editar';
import { LechesMostrar } from './leches/leches-mostrar/leches-mostrar';

import { ProveedoresListar } from './proveedores/proveedores-listar/proveedores-listar';
import { ProveedoresCrear } from './proveedores/proveedores-crear/proveedores-crear';

import { RastrosListar } from './rastros/rastros-listar/rastros-listar';
import { RastrosCrear } from './rastros/rastros-crear/rastros-crear';
import { RastrosEditar } from './rastros/rastros-editar/rastros-editar';
import { RastrosMostrar } from './rastros/rastros-mostrar/rastros-mostrar';

import { RazasListar } from './razas/razas-listar/razas-listar';
import { RazasCrear } from './razas/razas-crear/razas-crear';

import { TanquesListar } from './tanques/tanques-listar/tanques-listar';
import { TanquesCrear } from './tanques/tanques-crear/tanques-crear';


export const routes: Routes = [

    {path:'cliente', component: ClienteListar},
    {path:'cliente/crear', component: ClienteCrear},
    {path:'cliente/:id/editar', component: ClienteEditar},
    {path:'cliente/:id', component: ClienteMostrar},

    {path:'administradores', component: AdministradoresListar},
    {path:'administradores/crear', component: AdministradoresCrear},
    {path:'administradores/:id/editar', component: AdministradoresEditar },
    {path:'administradores/:id', component: AdministradoresMostrar},

    {path:'categorias', component: CategoriasListar},
    {path:'categorias/crear', component: CategoriasCrear},
    {path:'categorias/:id/editar', component: CategoriasEditar},
    {path:'categorias/:id', component: CategoriasMostrar},

    {path:'corrales', component: CorralesListar},
    {path:'corrales/crear', component: CorralesCrear},
    {path:'corrales/:id/editar', component: CorralesEditar},
    {path:'corrales/:id', component: CorralesMostrar},

    {path:'ganados', component: GanadosListar},
    {path:'ganados/crear', component: GanadosCrear},
    {path:'ganados/:id/editar', component: GanadosEditar},
    {path:'ganados/:id', component: GanadosMostrar},
    
    {path:'leches', component: LechesListar},
    {path:'leches/crear', component: LechesCrear},
    {path:'leches/:id/editar', component: LechesEditar},
    {path:'leches/:id', component: LechesMostrar},

    {path:'proveedores', component: ProveedoresListar},
    {path:'proveedores/crear', component: ProveedoresCrear},

    {path:'rastros', component: RastrosListar},
    {path:'rastros/crear', component: RastrosCrear},
    {path:'rastros/:id/editar', component: RastrosEditar},
    {path:'rastros/:id', component: RastrosMostrar},

    {path:'razas', component: RazasListar},
    {path:'razas/crear', component: RazasCrear},

    {path:'tanques', component: TanquesListar},
    {path:'tanques/crear', component: TanquesCrear},
];
