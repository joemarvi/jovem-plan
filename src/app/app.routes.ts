import { Routes } from '@angular/router';
import { ContatosComponent } from './admin/contatos/contatos.component';
import { DashAdminComponent } from './admin/dash-admin/dash-admin.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/partner/register/register.component';
import { NavbarDiretoriaComponent } from './components/diretoria/navbar-diretoria/navbar-diretoria.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HomeComponent } from './components/home/home.component';
import { MediaComponent } from './components/media/media.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ProjetosIncentivosComponent } from './components/projetos-incentivos/projetos-incentivos.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { TabelaJogosComponent } from './components/tabela-jogos/tabela-jogos.component';
import { TitulosComponent } from './components/titulos/titulos.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'diretoria', component: NavbarDiretoriaComponent},
  {path: 'historia', component: HistoriaComponent},
  {path: 'titulos', component: TitulosComponent},
  {path: 'projetos', component: ProjetosIncentivosComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'jogos', component: TabelaJogosComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'midias', component: MediaComponent},
  {path: 'contatos', component: ContatosComponent},
  {path: 'register-partner', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dash-admin', component: DashAdminComponent},

];
