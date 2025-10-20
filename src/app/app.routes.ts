import { Routes } from '@angular/router';
import { ClienteListar } from './cliente/cliente-listar/cliente-listar';
import { ClienteCrear } from './cliente/cliente-crear/cliente-crear';
import { AdministradoresListar } from './administradores/administradores-listar/administradores-listar';
import { AdministradoresCrear } from './administradores/administradores-crear/administradores-crear';
import { CategoriasCrear } from './categorias/categorias-crear/categorias-crear';
import { CategoriasListar } from './categorias/categorias-listar/categorias-listar';
import { CorralesListar } from './corrales/corrales-listar/corrales-listar';
import { CorralesCrear } from './corrales/corrales-crear/corrales-crear';
import { GanadosListar } from './ganados/ganados-listar/ganados-listar';
import { GanadosCrear } from './ganados/ganados-crear/ganados-crear';

export const routes: Routes = [

    {path:'cliente', component: ClienteListar},
    {path:'cliente/crear', component: ClienteCrear},
    {path:'administradores', component: AdministradoresListar},
    {path:'administradores/crear', component: AdministradoresCrear},
    {path:'categorias', component: CategoriasListar},
    {path:'categorias/crear', component: CategoriasCrear},
    {path:'corrales', component: CorralesListar},
    {path:'corrales/crear', component: CorralesCrear},
    {path:'ganados', component: GanadosListar},
    {path:'ganados/crear', component: GanadosCrear},
    
];
