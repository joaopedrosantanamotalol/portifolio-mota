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
    id: 'java-micro-service',
    nome: 'Java Micro Service',
    status: 'Em desenvolvimento',
    resumo:
      'Microsserviço em Java com Spring Boot. A branch produto reúne o serviço do domínio de produtos, com persistência em banco relacional e camada de segurança.',
    destaques: [
      'Persistência com Spring Data JPA e MariaDB',
      'Segurança com Spring Security e OAuth2 Client',
      'Mapeamento entre entidades e DTOs com MapStruct',
      'Build com Maven, Java 17 e Spring Boot 4',
    ],
    tecnologias: [
      'Java 17',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'MariaDB',
      'MapStruct',
      'Maven',
    ],
    link: 'https://github.com/joaopedrosantanamotalol/JAVA-MICRO-SERVICE',
  },
  {
    id: 'saas-architecture-model',
    nome: 'SaaS Architecture Model',
    status: 'Em desenvolvimento',
    resumo:
      'Arquitetura base para o desenvolvimento de aplicações, pensada para ser adaptada e expandida conforme as necessidades de cada cliente. Também é o meu espaço de estudo e experimentação em arquitetura.',
    destaques: [
      'Organizado em branches por parte do sistema: API, aplicativo mobile (FRONTEND) e frontend web (em breve)',
      'Separação de responsabilidades e arquitetura em camadas',
      'Trabalha DTOs, injeção de dependências, APIs REST, segurança e containerização',
      'Estrutura evolutiva: recebe novos módulos, regras e integrações conforme o projeto pede',
    ],
    tecnologias: [
      'Arquitetura em camadas',
      'API REST',
      'DTOs',
      'Injeção de dependências',
      'Segurança',
      'Containerização',
    ],
    link: 'https://github.com/joaopedrosantanamotalol/SAAS_ARCHTECTURE_MODEL',
  },
  {
    id: 'python-audio-task-manager',
    nome: 'Python Audio Task Manager',
    status: 'Em desenvolvimento',
    resumo:
      'Projeto em Python para gerenciar tarefas por áudio, com transcrição de fala feita localmente e interface de linha de comando.',
    destaques: [
      'Transcrição de áudio com faster-whisper (Whisper via CTranslate2)',
      'Captura e manipulação de áudio com sounddevice',
      'CLI com Typer e saída formatada com Rich',
      'Código organizado nas pastas models e principal',
    ],
    tecnologias: ['Python', 'faster-whisper', 'sounddevice', 'Typer', 'Rich'],
    link: 'https://github.com/joaopedrosantanamotalol/PYTHON_AUDIO_TASK_MANAGER_',
  },
]