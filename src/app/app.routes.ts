import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { ContatosComponent } from './portal-administrator/contatos/contatos.component';
import { LoginComponent } from './portal-administrator/login/login.component';
import { RegisterNewsComponent } from './portal-administrator/news/register-news/register-news.component';
import { DashboardComponent } from './portal-associete/dashboard/dashboard.component';
import { NavbarPartnerAdminComponent } from './portal-associete/navbar-partner-admin/navbar-partner-admin.component';
import { RegisterAssocieteComponent } from './portal-associete/register-associete/register-associete.component';
import { NavbarDiretoriaComponent } from './site/components/diretoria/navbar-diretoria/navbar-diretoria.component';
import { HistoriaComponent } from './site/components/historia/historia.component';
import { HomeComponent } from './site/components/home/home.component';
import { MediaComponent } from './site/components/media/media.component';
import { NoticiasComponent } from './site/components/noticias/noticias.component';
import { ProjetosIncentivosComponent } from './site/components/projetos-incentivos/projetos-incentivos.component';
import { ResultadosComponent } from './site/components/resultados/resultados.component';
import { TabelaJogosComponent } from './site/components/tabela-jogos/tabela-jogos.component';
import { TitulosComponent } from './site/components/titulos/titulos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'diretoria', component: NavbarDiretoriaComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'titulos', component: TitulosComponent },
  { path: 'projetos', component: ProjetosIncentivosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'jogos', component: TabelaJogosComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'midias', component: MediaComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'partner-dash', component: DashboardComponent },
  { path: 'register-associete', component: RegisterAssocieteComponent },

  { path: 'partner-admin', component: NavbarPartnerAdminComponent, canActivate: [AuthGuard] },
  { path: 'register-news', component: RegisterNewsComponent, canActivate: [AuthGuard] },
  { path: 'list-news', component: RegisterNewsComponent, canActivate: [AuthGuard] },
  { path: 'edit-news/:id', component: RegisterNewsComponent, canActivate: [AuthGuard] },
];
