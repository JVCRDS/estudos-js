const users = [
  {
    name: "João Silva",
    email: "joao.silva@example.com",
    isAdmin: true,
    createdAt: "2024-01-01",
  },
  {
    name: "Maria Souza",
    email: "maria.souza@example.com",
    isAdmin: false,
    createdAt: "2024-02-10",
  },
  {
    name: "Carlos Pereira",
    email: "carlos.pereira@example.com",
    isAdmin: false,
    createdAt: "2024-03-15",
  },
  {
    name: "Ana Oliveira",
    email: "ana.oliveira@example.com",
    isAdmin: true,
    createdAt: "2024-04-20",
  },
  {
    name: "Lucas Fernandes",
    email: "lucas.fernandes@example.com",
    isAdmin: false,
    createdAt: "2024-05-05",
  },
  {
    name: "Fernanda Lima",
    email: "fernanda.lima@example.com",
    isAdmin: true,
    createdAt: "2024-06-25",
  },
  {
    name: "Gabriel Rocha",
    email: "gabriel.rocha@example.com",
    isAdmin: false,
    createdAt: "2024-07-12",
  },
  {
    name: "Beatriz Mendes",
    email: "beatriz.mendes@example.com",
    isAdmin: false,
    createdAt: "2024-08-30",
  },
  {
    name: "Ricardo Almeida",
    email: "ricardo.almeida@example.com",
    isAdmin: true,
    createdAt: "2024-09-18",
  },
  {
    name: "Camila Nunes",
    email: "camila.nunes@example.com",
    isAdmin: false,
    createdAt: "2024-10-02",
  },
];

// Filtrar usuários administradores

// Filtrar usuários criados após o mes 07
// Usar new Date().getMonth()

const criadosApos07 = users.filter((user) => {
  const [,mes,] = user.createdAt.split('-')
  const criadoAposjulho = mes > 6;
  const isAdm = user.isAdmin === true
  return criadoAposjulho && isAdm;
}).map((user) => user.name)


console.log(criadosApos07);


