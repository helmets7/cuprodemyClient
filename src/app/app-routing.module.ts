import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UserEditAdminComponent } from './component/application/user/routed/admin/user-edit-admin/user-edit-admin.component';
import { UserNewAdminComponent } from './component/application/user/routed/admin/user-new-admin/user-new-admin.component';
import { UserPlistAdminComponent } from './component/application/user/routed/admin/user-plist-admin/user-plist-admin.component';
import { UserRemoveAdminComponent } from './component/application/user/routed/admin/user-remove-admin/user-remove-admin.component';
import { UserViewAdminComponent } from './component/application/user/routed/admin/user-view-admin/user-view-admin.component';

import { UserViewUserComponent } from './component/application/user/routed/user/user-view-user/user-view-user.component';
import { UserEditUsuarioComponent } from './component/application/user/routed/user/user-edit-usuario/user-edit-usuario.component';


import { ComentarioPlistAdminComponent } from './component/application/comentario/routed/admin/comentario-plist-admin/comentario-plist-admin.component';
import { ComentarioRemoveAdminComponent } from './component/application/comentario/routed/admin/comentario-remove-admin/comentario-remove-admin.component';
import { ComentarioViewAdminComponent } from './component/application/comentario/routed/admin/comentario-view-admin/comentario-view-admin.component';
import { ComentarioEditAdminComponent } from './component/application/comentario/routed/admin/comentario-edit-admin/comentario-edit-admin.component';
import { ComentarioNewAdminComponent } from './component/application/comentario/routed/admin/comentario-new-admin/comentario-new-admin.component';


import { CursoPlistAdminComponent } from './component/application/curso/routed/admin/curso-plist-admin/curso-plist-admin.component';
import { CursoRemoveAdminComponent } from './component/application/curso/routed/admin/curso-remove-admin/curso-remove-admin.component';
import { CursoViewAdminComponent } from './component/application/curso/routed/admin/curso-view-admin/curso-view-admin.component';
import { CursoEditAdminComponent } from './component/application/curso/routed/admin/curso-edit-admin/curso-edit-admin.component';
import { CursoNewAdminComponent } from './component/application/curso/routed/admin/curso-new-admin/curso-new-admin.component';

import { CursoViewUsuarioComponent } from './component/application/curso/routed/usuario/curso-view-usuario/curso-view-usuario.component';

import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { LoginGuard } from './guards/login.guard';
import { VisitorElectionComponent } from './component/shared/routed/visitor-election/visitor-election.component';


import { LeccionEditAdminComponent } from './component/application/leccion/routed/admin/leccion-edit-admin/leccion-edit-admin.component';
import { LeccionNewAdminComponent } from './component/application/leccion/routed/admin/leccion-new-admin/leccion-new-admin.component';
import { LeccionPlistAdminComponent } from './component/application/leccion/routed/admin/leccion-plist-admin/leccion-plist-admin.component';
import { LeccionRemoveAdminComponent } from './component/application/leccion/routed/admin/leccion-remove-admin/leccion-remove-admin.component';
import { LeccionViewAdminComponent } from './component/application/leccion/routed/admin/leccion-view-admin/leccion-view-admin.component';


import { TipocomentarioPlistAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-plist-admin/tipocomentario-plist-admin.component';
import { TipocomentarioViewAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-view-admin/tipocomentario-view-admin.component';
import { TipocomentarioRemoveAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-remove-admin/tipocomentario-remove-admin.component';
import { TipocomentarioEditAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-edit-admin/tipocomentario-edit-admin.component';
import { TipocomentarioNewAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-new-admin/tipocomentario-new-admin.component';


import { TipousuarioEditAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin/tipousuario-edit-admin.component';
import { TipousuarioNewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-new-admin/tipousuario-new-admin.component';
import { TipousuarioRemoveAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-remove-admin/tipousuario-remove-admin.component';
import { TipousuarioViewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin/tipousuario-view-admin.component';
import { TipousuarioPlistAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin/tipousuario-plist-admin.component';



const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'logout', component: LogoutComponent, title: 'Logout'},
  { path: 'visitorElection', component: VisitorElectionComponent, title: 'Eleccion de usuario'},



  { path: 'admin/user/plist', component: UserPlistAdminComponent, title: 'Listado de usuarios' },
  { path: 'admin/user/view/:id', component: UserViewAdminComponent, title: 'Vista usuario' },
  { path: 'admin/user/remove/:id', component: UserRemoveAdminComponent, title: 'Borrar usuario' },
  { path: 'admin/user/edit/:id', component: UserEditAdminComponent, title: 'Editar usuario' },
  { path: 'admin/user/new', component: UserNewAdminComponent, title: 'Nuevo usuario' },
  { path: 'admin/user/plist/tipousuario/:id_tipousuario', component: UserPlistAdminComponent, title: 'Listado de usuarios filtrado por tipo' },

  { path : 'usuario/user/view/:id', component: UserViewUserComponent, title: 'Vista usuario' },
  { path : 'usuario/user/edit/:id', component: UserEditUsuarioComponent, title: 'Editar usuario' },

  { path: 'admin/comentario/plist', component: ComentarioPlistAdminComponent, title: 'Listado de comentarios' },
  { path: 'admin/comentario/view/:id', component: ComentarioViewAdminComponent, title: 'Vista comentario' },
  { path: 'admin/comentario/remove/:id', component: ComentarioRemoveAdminComponent, title: 'Borrar comentario' },
  { path: 'admin/comentario/edit/:id', component: ComentarioEditAdminComponent, title: 'Editar comentario' },
  { path: 'admin/comentario/new', component: ComentarioNewAdminComponent, title: 'Nuevo comentario' },
  { path: 'admin/comentario/plist/curso/:id_curso', component: ComentarioPlistAdminComponent, title: 'Listado de comentarios filtrado por curso' },
  { path: 'admin/comentario/plist/usuario/:id_usuario', component: ComentarioPlistAdminComponent, title: 'Listado de comentarios filtrado por usuario' },
  { path: 'admin/comentario/plist/tipocomentario/:id_tipocomentario', component: ComentarioPlistAdminComponent, title: 'Listado de comentarios filtrado por tipo' },


  { path: 'admin/curso/plist', component: CursoPlistAdminComponent, title: 'Listado de cursos' },
  { path: 'admin/curso/view/:id', component: CursoViewAdminComponent, title: 'Vista curso' },
  { path: 'admin/curso/remove/:id', component: CursoRemoveAdminComponent, title: 'Borrar curso' },
  { path: 'admin/curso/edit/:id', component: CursoEditAdminComponent, title: 'Editar curso' },
  { path: 'admin/curso/new', component: CursoNewAdminComponent, title: 'Nuevo curso' },
  { path: 'admin/curso/plist/leccion/:id_leccion', component: CursoPlistAdminComponent, title: 'Listado de cursos filtrado por leccion' },

  { path : 'usuario/curso/view/:id', canActivate:[LoginGuard], component: CursoViewUsuarioComponent, title: 'Vista curso' },


  { path: 'admin/leccion/plist', component: LeccionPlistAdminComponent, title: 'Listado de lecciones' },
  { path: 'admin/leccion/view/:id', component: LeccionViewAdminComponent, title: 'Vista leccion' },
  { path: 'admin/leccion/remove/:id', component: LeccionRemoveAdminComponent, title: 'Borrar leccion' },
  { path: 'admin/leccion/edit/:id', component: LeccionEditAdminComponent, title: 'Editar leccion' },
  { path: 'admin/leccion/new', component: LeccionNewAdminComponent, title: 'Nueva leccion' },


  { path: 'admin/tipocomentario/plist', component: TipocomentarioPlistAdminComponent, title: 'Listado de tipocomentarios' },
  { path: 'admin/tipocomentario/view/:id', component: TipocomentarioViewAdminComponent, title: 'Vista tipocomentario' },
  { path: 'admin/tipocomentario/remove/:id', component: TipocomentarioRemoveAdminComponent, title: 'Borrar tipocomentario' },
  { path: 'admin/tipocomentario/edit/:id', component: TipocomentarioEditAdminComponent, title: 'Editar tipocomentario' },
  { path: 'admin/tipocomentario/new', component: TipocomentarioNewAdminComponent, title: 'Nuevo tipocomentario' },


  { path: 'admin/tipousuario/view/:id', component: TipousuarioViewAdminComponent, title: 'Vista tipousuario' },
  { path: 'admin/tipousuario/remove/:id', component: TipousuarioRemoveAdminComponent, title: 'Borrar tipousuario' },
  { path: 'admin/tipousuario/edit/:id', component: TipousuarioEditAdminComponent, title: 'Editar tipousuario' },
  { path: 'admin/tipousuario/new', component: TipousuarioNewAdminComponent, title: 'Nuevo tipousuario' },
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminComponent, title: 'Listado de tipousuarios' },
  { path: 'admin/tipousuario/plist/user/:id_user', component: TipousuarioPlistAdminComponent, title: 'Listado de usuarios filtrado por tipo' },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
