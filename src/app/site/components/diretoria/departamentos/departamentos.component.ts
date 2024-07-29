import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { MemberDialogComponent } from '../member-dialog/member-dialog.component';

interface Department {
  title: string;
  content: string;
  members: Member[];
}

interface Member {
  name: string;
  icon: string;
  photo: string;
  description: string;
}

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.scss']
})
export class DepartamentosComponent {
  departments: Department[] = [
    {
      title: 'Vice Diretoria',
      content: 'Vice Diretoria Jovem Plan',
      members: [
        {
          name: 'Carlos Silva',
          icon: 'fa-solid fa-id-card',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-2.jpg',
          description: `
            Carlos Silva é um dos membros fundadores da Vice Diretoria da Jovem Plan, trazendo consigo mais de 10 anos de experiência em gestão esportiva. Com um forte background em administração e um profundo compromisso com o desenvolvimento do clube, Carlos lidera iniciativas estratégicas para promover o crescimento sustentável e a integridade dentro da organização. Além de suas responsabilidades administrativas, Carlos é conhecido por sua abordagem colaborativa e por cultivar um ambiente de trabalho positivo e inclusivo para todos os membros da equipe.
          `
        },
        {
          name: 'Diego Costa dos Santos',
          icon: 'fa-solid fa-id-card',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-2.jpg',
          description: `
            Diego Costa dos Santos desempenha um papel crucial na Vice Diretoria da Jovem Plan, onde lidera as operações diárias com um foco especial na excelência operacional e no atendimento ao cliente. Com uma carreira de sucesso na gestão esportiva e uma paixão por estratégia organizacional, Diego é responsável por supervisionar todas as iniciativas de melhoria contínua e pela implementação de melhores práticas dentro da organização. Sua abordagem proativa e sua capacidade de resolver problemas têm sido fundamentais para o sucesso e a sustentabilidade a longo prazo da Jovem Plan.
          `
        },
        {
          name: 'João Almeida',
          icon: 'fa-solid fa-id-card',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-2.jpg',
          description: `
            João Almeida é um líder dinâmico na Vice Diretoria da Jovem Plan, trazendo consigo uma combinação única de experiência em liderança e paixão pelo esporte. Com um histórico comprovado em desenvolvimento de equipes de alto desempenho e gestão de recursos humanos, João desempenha um papel vital na promoção de uma cultura organizacional positiva e colaborativa. Ele é conhecido por sua habilidade em motivar e inspirar os outros, enquanto trabalha incansavelmente para alcançar metas estratégicas e fortalecer a posição da Jovem Plan como um líder no cenário esportivo local.
          `
        }
      ]
    },
    {
      title: 'Financeiro',
      content: 'Controle e gerenciamento de finanças',
      members: [
        {
          name: 'Ana Paula Souza',
          icon: 'fa-solid fa-hand-holding-dollar',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-1',
          description: `
            Ana Paula Souza é uma profissional altamente qualificada que lidera a equipe financeira da Jovem Plan com integridade e compromisso. Com uma sólida formação acadêmica em contabilidade e uma vasta experiência em gestão financeira, Ana Paula é responsável por garantir a precisão e transparência nas operações financeiras do clube. Além de suas responsabilidades diárias, Ana Paula desafia constantemente a equipe a alcançar novos padrões de excelência, promovendo uma cultura de responsabilidade e eficiência dentro do departamento financeiro.
          `
        },
        {
          name: 'Bruno Marques',
          icon: 'fa-solid fa-hand-holding-dollar',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-2.jpg',
          description: `
            Bruno Marques desempenha um papel essencial na gestão financeira da Jovem Plan, onde é responsável por otimizar os processos de contabilidade e relatórios financeiros. Com uma abordagem analítica e orientada para resultados, Bruno tem sido fundamental na implementação de estratégias financeiras que garantem a estabilidade econômica e o crescimento sustentável do clube. Sua capacidade de tomar decisões informadas e sua dedicação à integridade financeira são um exemplo para toda a equipe, fortalecendo a posição da Jovem Plan como um modelo de gestão financeira eficaz no esporte local.
          `
        }
      ]
    },
    {
      title: 'Coordenação de Torcida',
      content: 'Coordenadoria de torcida Jovem Plan',
      members: [
        {
          name: 'Flávio Nogueira',
          icon: 'fa-solid fa-users',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-2.jpg',
          description: `
            Flávio Nogueira é um entusiasta apaixonado pela coordenação de torcida da Jovem Plan, onde desempenha um papel vital na criação de experiências memoráveis para os torcedores. Com um profundo conhecimento das dinâmicas de torcida e um compromisso inabalável com a cultura esportiva, Flávio lidera iniciativas para aumentar o engajamento da comunidade e fortalecer os laços entre o clube e seus adeptos. Sua energia contagiante e sua capacidade de mobilizar pessoas têm sido fundamentais para o crescimento da base de torcedores da Jovem Plan, tornando-a uma força a ser reconhecida no cenário esportivo local.
          `
        }
      ]
    },
    {
      title: 'Logística',
      content: 'Responsáveis pela logística nos jogos',
      members: [
        {
          name: 'Leandro Farias',
          icon: 'fa-solid fa-truck-fast',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-2.jpg',
          description: `
            Leandro Farias é um profissional dedicado na área de logística da Jovem Plan, onde supervisiona todas as operações logísticas com eficiência e precisão. Com uma carreira sólida na gestão de cadeias de suprimentos e uma paixão por excelência operacional, Leandro é responsável por garantir que todos os eventos e jogos sejam executados de maneira suave e sem problemas. Sua capacidade de resolver problemas e sua abordagem proativa têm sido cruciais para o sucesso operacional do clube, proporcionando uma experiência positiva para jogadores, funcionários e torcedores da Jovem Plan.
          `
        },
        {
          name: 'Marta Gonçalves',
          icon: 'fa-solid fa-truck-fast',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-1',
          description: `
            Marta Gonçalves desempenha um papel fundamental na equipe de logística da Jovem Plan, onde coordena todas as atividades logísticas com dedicação e expertise. Com uma habilidade excepcional em planejamento e organização, Marta garante que todas as necessidades logísticas sejam atendidas de forma eficiente e dentro do prazo. Sua determinação em alcançar a excelência operacional e sua capacidade de gerenciar múltiplas tarefas complexas têm sido cruciais para o sucesso contínuo das operações de logística da Jovem Plan.
          `
        },
        {
          name: 'Natan Castro',
          icon: 'fa-solid fa-truck-fast',
          photo: '../../../../assets/diretoria/vice-diretoria/vice-diretoria-2.jpg',
          description: `
            Natan Castro é um profissional experiente na área de logística da Jovem Plan, onde desempenha um papel essencial na coordenação de todas as atividades logísticas relacionadas aos jogos e eventos do clube. Com uma abordagem focada em resultados e um compromisso com a eficiência operacional, Natan garante que todas as operações logísticas sejam executadas com precisão e profissionalismo. Sua capacidade de resolver problemas rapidamente e sua habilidade em liderar equipes têm sido fundamentais para o sucesso da Jovem Plan em fornecer experiências de jogo excepcionais para jogadores e fãs.
          `
        }
      ]
    }
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(member: Member): void {
    this.dialog.open(MemberDialogComponent, {
      data: member,
      width: '650px',
      disableClose: false
    });
  }
}
