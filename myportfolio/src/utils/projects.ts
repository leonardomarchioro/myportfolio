export interface IProject {
  name: string;
  link: string;
  repo: string;
  about: string[];
  techs: string[];
}

export const projects = [
  {
    name: "Bico.com",
    link: "https://bico.vercel.app/",
    repo: "https://github.com/leonardomarchioro/projetocapstone_bico.com",
    about: [
      `Uma plataforma online que permite a contratação de trabalhadores braçais cadastrados. A plataforma é voltada para pessoas que precisam de serviços pontuais, como limpeza de quintal, carregamento de materiais pesados ou serviços de jardinagem, por exemplo.`,
      `Os trabalhadores cadastrados na plataforma possuem um perfil que inclui informações sobre suas habilidades, experiência e avaliações de trabalhos anteriores. Os contratantes podem avaliar o perfil dos trabalhadores e escolher o mais adequado para a tarefa que precisa ser realizada.`,
      `Ao solicitar um serviço, o contratante especifica detalhes sobre o trabalho a ser realizado, como horário, localização e duração do trabalho. Os trabalhadores cadastrados podem se candidatar ao serviço e, caso sejam selecionados pelo contratante, realizam o trabalho requisitado.`,
      `Após a conclusão do trabalho, o contratante avalia o desempenho do trabalhador, o que ajuda a construir a reputação do trabalhador na plataforma. Dessa forma, outros contratantes podem avaliar o perfil do trabalhador e tomar uma decisão mais informada ao selecionar um trabalhador para um trabalho específico.`,
    ],    
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
    about: [
      `Backend dá bico.com, um backend completo para uma plataforma que permite a contratação de serviços freelancers. A plataforma permite o cadastro de usuários, com perfis de clientes com a role 'client' e de prestadores de serviço com a role 'supplier'.`,
      `Os clientes podem criar requisições de serviços na plataforma, especificando detalhes sobre o trabalho a ser realizado e as habilidades necessárias do prestador de serviço. Os usuários com a role 'supplier' podem se candidatar aos trabalhos e, caso sejam escolhidos pelo cliente, prestam o serviço requisitado.`,
      `Ao final da prestação de serviço, o cliente pode avaliar o trabalho realizado pelo prestador de serviço. Essas avaliações ficam registradas no perfil do usuário com a role 'supplier' e ajudam a construir sua reputação na plataforma.`
    ],
    techs: ["TypeScript", "NodeJS", "Docker", "Prisma", "Jest", "PostgreSQL"],
  },
  {
    name: "KenzieHub",
    link: "https://react-entrega-s2-kenzie-hub-leonardomarchioro.vercel.app/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s2-kenzie-hub-leonardomarchioro",
    about: [
      `Uma plataforma que permite aos usuários cadastrarem as tecnologias que estão estudando, além de definir seu nível de conhecimento nessas tecnologias. Os usuários podem escolher entre três níveis de conhecimento: iniciante, intermediário e avançado.`,
      `A plataforma permite que os usuários editem ou excluam as tecnologias cadastradas a qualquer momento. Essa funcionalidade é especialmente útil para quem está em constante evolução na sua jornada de aprendizado e precisa atualizar seus registros periodicamente.`,
],
    techs: ["ReactJs", "Styled-components", "Axios", "Yup"],
  },
  {
    name: "KenzieShop",
    link: "https://react-entrega-s3-kenzieshop-leonardomarchioro.vercel.app/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-leonardomarchioro",
    about: [
      `Esse projeto consiste em um e-commerce voltado para gamers, oferecendo produtos relacionados ao mundo dos jogos eletrônicos, como consoles, jogos, periféricos, acessórios, camisetas, entre outros itens.`,
      `A plataforma permite a navegação dos usuários por categorias específicas de produtos, como consoles, jogos, acessórios, entre outras. A plataforma também possui um carrinho de compras, onde os usuários podem adicionar os produtos desejados e finalizar a compra.`,
    ],
    techs: ["ReactJs", "Redux-Thunk", "Styled-components"],
  },
  {
    name: "NuKenzie",
    link: "https://nukenzie-indol.vercel.app/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-nu-kenzie-LeonardoMarchioro",
    about: [
      `Esse projeto consiste em uma aplicação que permite aos usuários controlar suas finanças, registrando seus gastos e ganhos mensais em um sistema simples de contabilidade pessoal.`,
  ],
    techs: ["ReactJs"],
  },
  {
    name: "KenzieFood",
    link: "https://kenzie-academy-brasil-developers.github.io/api-kenziefood-m2-marceloasf92/",
    repo: "https://github.com/Kenzie-Academy-Brasil-Developers/api-kenziefood-m2-marceloasf92",
    about: [
      `Este projeto consiste em uma aplicação de delivery, semelhante ao Ifood.`,
      `A aplicação permite adicionar itens no carrinho de comprar e visualizar o total do pedido.`
    ],
    techs: ["HTML5", "CSS", "JavaScript"],
  },
  {
    name: "Avalanche Cursos",
    link: "https://avalanche-cursos.herokuapp.com/api/docs/",
    repo: "https://github.com/felipesindeaux/avalanche-cursos",
    about: [
        `Uma plataforma de educação online que permite que qualquer pessoa crie e ofereça seus próprios cursos em diversas categorias.`,
        `Os instrutores têm a opção de criar cursos de todos os tipos e níveis, desde iniciantes até avançados, e em vários formatos, incluindo vídeo, áudio e texto.`,
        `Os alunos têm acesso a um fórum por categorias, onde podem interagir com outros estudantes e instrutores, fazer perguntas, compartilhar conhecimentos e aprender juntos.`,
    ],
    techs: ["Python", "Django Rest Framework", "Docker", "PostgreSQL"],
  },
];
