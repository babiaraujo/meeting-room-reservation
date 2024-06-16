# Sistema de Reserva de Salas de Reunião

Este é um sistema simples de reserva de salas de reunião implementado em Node.js e Express. Ele permite que usuários se registrem, façam login e reservem salas de reunião. As reservas e os usuários são armazenados em memória (variáveis) e a autenticação é feita usando JWT.

## Estrutura do Projeto
meeting-room-reservation/
├── src/
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── reservationController.js
│ ├── middlewares/
│ │ └── authMiddleware.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── reservationRoutes.js
│ └── app.js
├── node_modules/
├── package.json
└── .gitignore


## Instalação

1. **Clone o repositório:**
   git clone https://github.com/seu-usuario/meeting-room-reservation.git
   cd meeting-room-reservation

2. **Instale as Dependencias**
 npm install      

3. **Inicie o servidor:**
 npm start



# meeting-room-reservation
