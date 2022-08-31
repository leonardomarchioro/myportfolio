export interface IProject {
  name: string;
  link: string;
  repo: string;
  sobre: string;
  techs: string[];
}

export const projects = [
  {
    name: "Bico.com",
    link: "https://bico.vercel.app/",
    repo: "https://github.com/leonardomarchioro/projetocapstone_bico.com",
    sobre: `Nossa aplicação tem como objetivo principal ligar um trabalhador 
              autônomo prestador de serviços com aquela pessoa que precisa de um serviço. 
              Podendo criar um histórico de serviços prestados/tomados, e através de avaliações, 
              cria-se um lugar onde se pode avaliar de forma pública os usuários, para que assim tenha mais confiança 
              na hora de chamar alguém para realizar uma simples 
              tarefa que não se tem tempo para fazer na correria do dia a dia.`,
    techs: [
      "ReactJs",
      "ContexAPI",
      "Styled-components",
      "Axios",
      "JSON Server",
      "Yup",
    ],
  },
  {
    name: "Bico.com Back-end",
    link: "https://capstone-m4.herokuapp.com/",
    repo: "https://github.com/leonardomarchioro/capstone-m4",
    sobre: `Backend dá bico.com, backend com cadastro de usuários, criação de requisições de serviços para os usuários 
              clientes com a role 'client', um usuário com a role 'supplier' pode se candidatar para o serviço e assim prestar o serviço
              para o cliente e receber uma review do serviço prestado. `,
    techs: ["TypeScript", "NodeJS", "Docker", "Prisma", "Jest", "PostgreSQL"],
  },
  {
    name: "KenzieHub",
    link: "https://react-entrega-s2-kenzie-hub-leonardomarchioro.vercel.app/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-leonardomarchioro",
    sobre: `Aplicação onde os usuário podem cadastrar as tecnologias que estão estudando e também setar um nível
              de conhecimento da mesma podendo ser entre 'iniciante', 'intermediário' e 'avançado', além também de
              poder editar ou excluir as tecnologias já cadastradas.`,
    techs: ["ReactJs", "Styled-components", "Axios", "Yup"],
  },
  {
    name: "KenzieShop",
    link: "https://react-entrega-s3-kenzieshop-leonardomarchioro.vercel.app/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-leonardomarchioro",
    sobre: `Um e-comerce para gamers.`,
    techs: ["ReactJs", "Redux-Thunk", "Styled-components"],
  },
  {
    name: "NuKenzie",
    link: "https://nukenzie-indol.vercel.app/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-LeonardoMarchioro",
    sobre: `Aplicação para fazer a contabilidade dos seus gastos e ganhos do mês.`,
    techs: ["ReactJs"],
  },
  {
    name: "KenzieFood",
    link: "https://kenzie-academy-brasil-developers.github.io/api-kenziefood-m2-marceloasf92/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-marceloasf92",
    sobre: `Aplicação de delivery, tipo Ifood.`,
    techs: ["HTML5", "CSS", "JavaScript"],
  },
  {
    name: "Avalanche Cursos",
    link: "https://avalanche-cursos.herokuapp.com/api/docs/",
    repo: "https://github.com/felipesindeaux/avalanche-cursos",
    sobre: `Pessoas de todos os tipos poderão criar e oferecer cursos de todos os tipos, sejam eles mais avançados, específicos, rasos, abrangentes e também com taxas de valores e durações das mais variadas possível.`,
    techs: ["Python", "Django Rest Framework", "Docker", "PostgreSQL"],
  },
];
