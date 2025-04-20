import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        title:'Home'
    },
    {
        path:'pessoas/login',
        component: LoginComponent,
        title:'Login'
    },
    {
        path:'pessoas',
        component: PessoaListagemComponent,
        title: 'Lista de pessoas cadastradas'
    },
    {
        path:'pessoas/incluir',
        component: PessoaFormComponent,
        title: 'Pessoas - Incluir'
    },
    {
        path:'pessoas/alterar/:id',
        component: PessoaFormComponent,
        title: 'Pessoas -'
    }

];
