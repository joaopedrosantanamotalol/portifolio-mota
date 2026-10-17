export interface Projeto {
  id: string
  nome: string
  resumo: string
  destaques: string[]
  tecnologias: string[]
  link: string
  status?: string
}

export const projetos: Projeto[] = [
  {
    id: 'python-assistive-software',
    nome: 'Merlin',
    status: 'Concluído',
    resumo:
      'O Merlin é um software assistivo desenvolvido em Python como projeto de conclusão de curso, com foco em ampliar a acessibilidade digital para pessoas com deficiência motora. A proposta é oferecer formas alternativas de interação com notebooks por meio de comandos e movimentos faciais, reduzindo a dependência dos métodos tradicionais de entrada. O projeto utiliza técnicas de visão computacional para a captação e análise do rosto, combinadas com uma interface gráfica voltada à simplicidade de uso. A aplicação também explora o armazenamento local de dados e a integração entre diferentes bibliotecas Python para construir uma solução direcionada à autonomia e à inclusão digital.',
    destaques: [
      'Visão computacional com OpenCV para captura e processamento de imagens em tempo real.',
      'Utilização do MediaPipe para detectar características faciais e identificar movimentos que podem servir como comandos de interação.',
      'Desenvolvimento em Python, integrando bibliotecas especializadas em processamento de imagem e criação de interfaces.',
      'Interface gráfica construída com CustomTkinter, priorizando uma apresentação simples e objetiva das funcionalidades.',
      'Uso do SQLite para armazenamento local de dados, sem exigir necessariamente um banco de dados remoto.',
      'Foco em acessibilidade digital, buscando oferecer alternativas de interação para pessoas com limitações motoras.',
      'Projeto acadêmico que reúne programação, visão computacional, interface gráfica e persistência de dados em uma única aplicação.',
      'Documentação de apoio para facilitar a compreensão da proposta, da utilização e da estrutura do software.',
    ],
    tecnologias: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'CustomTkinter',
      'SQLite',
    ],
    link: 'https://github.com/RgoSL/M.E.R.LIN',
  },
  {
    id: 'java-micro-service',
    nome: 'Java Micro Service',
    status: 'Em desenvolvimento',
    resumo:
      'Projeto de desenvolvimento de uma arquitetura de microsserviços utilizando Java e Spring Boot, com o objetivo de separar funcionalidades de negócio em serviços independentes. O repositório organiza os serviços por domínio, incluindo o módulo de produtos, e explora a construção de APIs REST com persistência em banco de dados relacional. A estrutura também contempla estudos e implementações de segurança, autenticação, mapeamento de dados e execução em ambientes conteinerizados. A proposta é evoluir para uma arquitetura em que os serviços possam ser desenvolvidos, executados e mantidos separadamente, facilitando a organização do código e a expansão do sistema.',
    destaques: [
      'Arquitetura organizada em serviços separados por domínio, favorecendo a separação de responsabilidades.',
      'API REST para exposição das funcionalidades do serviço de produtos.',
      'Persistência de dados com Spring Data JPA e banco de dados MariaDB.',
      'Mapeamento entre entidades de persistência e DTOs utilizando MapStruct.',
      'Estudos e implementação de mecanismos de segurança com Spring Security.',
      'Exploração de autenticação e integração com OAuth2 Client, conforme as necessidades de cada módulo.',
      'Gerenciamento de dependências e compilação com Maven, utilizando Java 17.',
      'Organização do código em módulos e branches de trabalho para facilitar o desenvolvimento independente dos serviços.',
      'Uso de Docker e Docker Compose no ambiente de execução dos componentes do projeto.',
      'Base para evolução de uma arquitetura com múltiplos serviços e futura integração por meio de um API Gateway.',
    ],
    tecnologias: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'MariaDB',
      'MapStruct',
      'Maven',
      'Docker',
      'API REST',
      'OAuth2 Client',
    ],
    link: 'https://github.com/joaopedrosantanamotalol/JAVA-MICRO-SERVICE',
  },
  {
    id: 'saas-architecture-model',
    nome: 'SaaS Architecture Model',
    status: 'Em desenvolvimento',
    resumo:
      'Modelo arquitetural reutilizável para servir como ponto de partida no desenvolvimento de aplicações e sistemas SaaS. O projeto busca estabelecer uma base organizada, com separação de responsabilidades, componentes independentes e estrutura preparada para receber novos módulos conforme as necessidades de cada aplicação. Além de funcionar como referência técnica para projetos futuros, o repositório é um ambiente de estudo e experimentação com arquitetura de software, APIs REST, segurança, injeção de dependências e containerização. A proposta é evoluir continuamente a estrutura, mantendo flexibilidade para diferentes domínios de negócio e possibilidades de integração com aplicações web e mobile.',
    destaques: [
      'Estrutura arquitetural pensada para reutilização e adaptação em diferentes aplicações.',
      'Separação de responsabilidades para facilitar a manutenção, a leitura e a evolução do código.',
      'Organização de componentes em camadas, buscando reduzir o acoplamento entre as partes do sistema.',
      'Construção de APIs REST para comunicação entre clientes e serviços de backend.',
      'Utilização de DTOs para estruturar os dados de entrada e saída das operações.',
      'Injeção de dependências para organizar a criação e o relacionamento entre os componentes.',
      'Exploração de mecanismos de autenticação e autorização para proteger recursos da aplicação.',
      'Containerização com Docker para padronizar o ambiente de execução e facilitar a configuração.',
      'Organização do repositório em branches para separar a evolução da API, do frontend mobile e de futuras interfaces web.',
      'Base preparada para incorporar novos módulos, regras de negócio e integrações conforme os requisitos do projeto.',
      'Aplicação de princípios de organização e manutenibilidade para facilitar a expansão gradual da arquitetura.',
      'Ambiente de experimentação para testar decisões arquiteturais e consolidar boas práticas de desenvolvimento backend.',
    ],
    tecnologias: [
      'Java',
      'Spring Boot',
      'Arquitetura em camadas',
      'API REST',
      'DTOs',
      'Injeção de dependências',
      'Segurança',
      'Docker',
      'MariaDB',
    ],
    link: 'https://github.com/joaopedrosantanamotalol/SAAS_ARCHTECTURE_MODEL',
  },
  {
    id: 'python-audio-task-manager',
    nome: 'Python Audio Task Manager',
    status: 'Em desenvolvimento',
    resumo:
      'Aplicação desenvolvida em Python para explorar o gerenciamento de tarefas por meio de comandos de voz, combinando captura de áudio, transcrição local e interação pelo terminal. O projeto utiliza o faster-whisper para transformar fala em texto, permitindo estudar alternativas de processamento de linguagem falada sem depender obrigatoriamente de um serviço de transcrição em nuvem. A interface de linha de comando é construída com Typer e utiliza Rich para apresentar informações de maneira organizada. A estrutura também busca separar as responsabilidades do código, criando uma base para evoluir a interpretação dos comandos e o gerenciamento das tarefas.',
    destaques: [
      'Transcrição de áudio com faster-whisper, baseado no modelo Whisper e no mecanismo CTranslate2.',
      'Processamento local de fala para explorar reconhecimento de voz sem exigir o envio do áudio para um serviço externo de transcrição.',
      'Captura e manipulação de áudio utilizando a biblioteca sounddevice.',
      'Interface de linha de comando construída com Typer para organizar comandos e opções de execução.',
      'Apresentação de informações no terminal utilizando Rich, com foco em legibilidade e organização visual.',
      'Separação de responsabilidades em diretórios como models e principal.',
      'Base para experimentar o fluxo entre captura de áudio, transcrição textual e interpretação dos comandos.',
      'Possibilidade de evolução para operações de criação, consulta, atualização e conclusão de tarefas por voz.',
      'Projeto voltado ao estudo de automação, reconhecimento de fala e desenvolvimento de ferramentas de produtividade em Python.',
      'Exploração de bibliotecas especializadas para combinar recursos de áudio com uma interface leve de terminal.',
    ],
    tecnologias: [
      'Python',
      'faster-whisper',
      'Whisper',
      'CTranslate2',
      'sounddevice',
      'Typer',
      'Rich',
    ],
    link: 'https://github.com/joaopedrosantanamotalol/PYTHON_AUDIO_TASK_MANAGER_',
  },
]