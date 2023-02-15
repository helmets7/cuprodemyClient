import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserService } from './service/User.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationService } from './service/pagination.service';
import { UserPlistAdminComponent } from './component/application/user/routed/admin/user-plist-admin/user-plist-admin.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { UserDetailAdminUnroutedComponent } from './component/application/user/unrouted/admin/developer-detail-admin-unrouted/user-detail-admin-unrouted.component';
import { UserRemoveAdminComponent } from './component/application/user/routed/admin/user-remove-admin/user-remove-admin.component';
import { UserEditAdminComponent } from './component/application/user/routed/admin/user-edit-admin/user-edit-admin.component';
import { UserNewAdminComponent } from './component/application/user/routed/admin/user-new-admin/user-new-admin.component';
import { UserViewAdminComponent } from './component/application/user/routed/admin/user-view-admin/user-view-admin.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted.component';
import { MenuComponent } from './component/shared/routed/menu/menu.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { LoginComponent } from './component/shared/routed/login/login.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioFinderComponent } from './component/shared/unrouted/usuario-finder/usuario-finder.component';
import { TipousuarioFinderComponent } from './component/shared/unrouted/tipousuario-finder/tipousuario-finder.component';
import { ComentarioPlistAdminComponent } from './component/application/comentario/routed/admin/comentario-plist-admin/comentario-plist-admin.component';
import { ComentarioNewAdminComponent } from './component/application/comentario/routed/admin/comentario-new-admin/comentario-new-admin.component';
import { ComentarioRemoveAdminComponent } from './component/application/comentario/routed/admin/comentario-remove-admin/comentario-remove-admin.component';
import { ComentarioViewAdminComponent } from './component/application/comentario/routed/admin/comentario-view-admin/comentario-view-admin.component';
import { ComentarioEditAdminComponent } from './component/application/comentario/routed/admin/comentario-edit-admin/comentario-edit-admin.component';
import { TipocomentarioFinderComponent } from './component/shared/unrouted/tipocomentario-finder/tipocomentario-finder.component';
import { ComentarioDetailAdminUnroutedComponent } from './component/application/comentario/unrouted/admin/comentario-detail-admin-unrouted/comentario-detail-admin-unrouted.component';
import { CursoEditAdminComponent } from './component/application/curso/routed/admin/curso-edit-admin/curso-edit-admin.component';
import { CursoNewAdminComponent } from './component/application/curso/routed/admin/curso-new-admin/curso-new-admin.component';
import { CursoPlistAdminComponent } from './component/application/curso/routed/admin/curso-plist-admin/curso-plist-admin.component';
import { CursoRemoveAdminComponent } from './component/application/curso/routed/admin/curso-remove-admin/curso-remove-admin.component';
import { CursoViewAdminComponent } from './component/application/curso/routed/admin/curso-view-admin/curso-view-admin.component';
import { CursoDetailAdminUnroutedComponent } from './component/application/curso/unrouted/admin/curso-detail-admin-unrouted/curso-detail-admin-unrouted.component';
import { LeccionFinderComponent } from './component/shared/unrouted/leccion-finder/leccion-finder.component';
import { LeccionEditAdminComponent } from './component/application/leccion/routed/admin/leccion-edit-admin/leccion-edit-admin.component';
import { LeccionDetailAdminUnroutedComponent } from './component/application/leccion/unrouted/leccion-detail-admin-unrouted/leccion-detail-admin-unrouted.component';
import { LeccionNewAdminComponent } from './component/application/leccion/routed/admin/leccion-new-admin/leccion-new-admin.component';
import { LeccionPlistAdminComponent } from './component/application/leccion/routed/admin/leccion-plist-admin/leccion-plist-admin.component';
import { LeccionRemoveAdminComponent } from './component/application/leccion/routed/admin/leccion-remove-admin/leccion-remove-admin.component';
import { LeccionViewAdminComponent } from './component/application/leccion/routed/admin/leccion-view-admin/leccion-view-admin.component';
import { TipocomentarioEditAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-edit-admin/tipocomentario-edit-admin.component';
import { TipocomentarioNewAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-new-admin/tipocomentario-new-admin.component';
import { TipocomentarioPlistAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-plist-admin/tipocomentario-plist-admin.component';
import { TipocomentarioRemoveAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-remove-admin/tipocomentario-remove-admin.component';
import { TipocomentarioViewAdminComponent } from './component/application/tipocomentario/routed/admin/tipocomentario-view-admin/tipocomentario-view-admin.component';
import { TipocomentarioDetailAdminUnroutedComponent } from './component/application/tipocomentario/unrouted/admin/tipocomentario-detail-admin-unrouted/tipocomentario-detail-admin-unrouted.component';
import { TipousuarioEditAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-edit-admin/tipousuario-edit-admin.component';
import { TipousuarioNewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-new-admin/tipousuario-new-admin.component';
import { TipousuarioRemoveAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-remove-admin/tipousuario-remove-admin.component';
import { TipousuarioViewAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-view-admin/tipousuario-view-admin.component';
import { TipousuarioDetailAdminUnroutedComponent } from './component/application/tipousuario/unrouted/admin/tipousuario-detail-admin-unrouted/tipousuario-detail-admin-unrouted.component';
import { TipousuarioPlistAdminComponent } from './component/application/tipousuario/routed/admin/tipousuario-plist-admin/tipousuario-plist-admin.component';
import { AuthInterceptor } from './component/interceptor/auth.interceptor';
import { CryptoService } from './service/crypto.service';
import { DecodeService } from './service/decode.service';
import { CursoFinderComponent } from './component/shared/unrouted/curso-finder/curso-finder.component';
import { UserViewUserComponent } from './component/application/user/routed/user/user-view-user/user-view-user.component';
import { CursoViewUsuarioComponent } from './component/application/curso/routed/usuario/curso-view-usuario/curso-view-usuario.component';
import { UserEditUsuarioComponent } from './component/application/user/routed/user/user-edit-usuario/user-edit-usuario.component';
import { UserDetailUsuarioUnroutedComponent } from './component/application/user/unrouted/usuario/user-detail-usuario-unrouted/user-detail-usuario-unrouted.component';
import { LeccionPlistUsuarioComponent } from './component/application/leccion/unrouted/leccion-plist-usuario/leccion-plist-usuario.component';
import { ComentarioPlistUsuarioComponent } from './component/application/comentario/unrouted/usuario/comentario-plist-usuario/comentario-plist-usuario.component';
import { VisitorElectionComponent } from './component/shared/routed/visitor-election/visitor-election.component';

@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    AppComponent,
    UserPlistAdminComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UserViewAdminComponent,
    UserNewAdminComponent,
    UserEditAdminComponent,
    UserRemoveAdminComponent,
    UserDetailAdminUnroutedComponent,
    LoginComponent,
    LogoutComponent,
    UsuarioFinderComponent,
    TipousuarioFinderComponent,
    ComentarioPlistAdminComponent,
    ComentarioNewAdminComponent,
    ComentarioRemoveAdminComponent,
    ComentarioViewAdminComponent,
    ComentarioEditAdminComponent,
    TipocomentarioFinderComponent,
    ComentarioDetailAdminUnroutedComponent,
    CursoEditAdminComponent,
    CursoNewAdminComponent,
    CursoPlistAdminComponent,
    CursoRemoveAdminComponent,
    CursoViewAdminComponent,
    CursoDetailAdminUnroutedComponent,
    LeccionFinderComponent,
    LeccionEditAdminComponent,
    LeccionDetailAdminUnroutedComponent,
    LeccionNewAdminComponent,
    LeccionPlistAdminComponent,
    LeccionRemoveAdminComponent,
    LeccionViewAdminComponent,
    TipocomentarioEditAdminComponent,
    TipocomentarioNewAdminComponent,
    TipocomentarioPlistAdminComponent,
    TipocomentarioRemoveAdminComponent,
    TipocomentarioViewAdminComponent,
    TipocomentarioDetailAdminUnroutedComponent,
    TipousuarioEditAdminComponent,
    TipousuarioNewAdminComponent,
    TipousuarioRemoveAdminComponent,
    TipousuarioViewAdminComponent,
    TipousuarioDetailAdminUnroutedComponent,
    TipousuarioPlistAdminComponent,
    CursoFinderComponent,
    UserViewUserComponent,
    CursoViewUsuarioComponent,
    UserEditUsuarioComponent,
    UserDetailUsuarioUnroutedComponent,
    LeccionPlistUsuarioComponent,
    ComentarioPlistUsuarioComponent,
    VisitorElectionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    CryptoService,
    DecodeService,
    PaginationService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
       multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
