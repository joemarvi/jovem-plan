import { Routes } from '@angular/router';
import { ContatosComponent } from './admin/contatos/contatos.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterNewsComponent } from './admin/news/register-news/register-news.component';
import { DashboardComponent } from './admin/partner/dashboard/dashboard.component';
import { NavbarPartnerAdminComponent } from './admin/partner/navbar-partner-admin/navbar-partner-admin.component';
import { RegisterAssocieteComponent } from './admin/partner/register-associete/register-associete.component';
import { NavbarDiretoriaComponent } from './components/diretoria/navbar-diretoria/navbar-diretoria.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HomeComponent } from './components/home/home.component';
import { MediaComponent } from './components/media/media.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProjetosIncentivosComponent } from './components/projetos-incentivos/projetos-incentivos.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { TabelaJogosComponent } from './components/tabela-jogos/tabela-jogos.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { AuthGuard } from './guards/auth.guard';

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
