import { Request, Response } from 'express';
export const getRatings = (req: Request, res: Response) => {
  const ratings = [
    {
      id: 1,
      idCar: 5,
      name: "Jorge Perez",
      date: "2025-05-08",
      time: "17:15",
      rating: 4.9,
      comments: 3,
      review: "Excelente inquilino, muy responsable con los pagos.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      commentsList: [
        { user: "Carlos M.", text: "Estoy de acuerdo, siempre puntual." },
        { user: "Ana S.", text: "Muy buen trato con el vehículo." },
        { user: "Luis R.", text: "Recomendado 100%." }
      ]
    },
    {
      id: 2,
      idCar: 2,
      name: "Marta Ramírez",
      time: "19:15",
      date: "2025-05-15",
      rating: 4.0,
      comments: 2,
      review: "Buena comunicación durante el alquiler.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      commentsList: [
        { user: "Pedro G.", text: "Siempre respondía rápido los mensajes." },
        { user: "Sofía L.", text: "Muy educada y responsable." }
      ]
    },
    {
      id: 3,
      idCar: 7,
      name: "Diego Flores",
      time: "21:14",
      date: "2025-05-05",
      rating: 4.0,
      comments: 4,
      review: "El auto fue devuelto en perfectas condiciones.",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      commentsList: [
        { user: "María T.", text: "Impecable el estado del auto." },
        { user: "Juan P.", text: "Cumplió con todas las normas." },
        { user: "Laura M.", text: "Muy buen inquilino." },
        { user: "Oscar R.", text: "Lo recomiendo." }
      ]
    },
    {
      id: 4,
      idCar: 1,
      name: "Lucía Gómez",
      time: "16:30",
      date: "2025-05-24",
      rating: 5.0,
      comments: 2,
      review: "Un automovil util, comodo y se viaja con mucho comfort",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      commentsList: [
        { user: "Andrés Q.", text: "Siempre amable y puntual." },
        { user: "Fabiola D.", text: "El auto quedó impecable." }
      ]
    },
    {
      id: 5,
      idCar: 9,
      name: "Carlos Medina",
      time: "10:20",
      date: "2025-05-21",
      rating: 3.8,
      comments: 2,
      review: "Tuvo un pequeño retraso, pero todo bien.",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      commentsList: [
        { user: "Jessica R.", text: "Tardó un poco, pero comunicó a tiempo." },
        { user: "Felipe S.", text: "Cumplió con lo acordado." }
      ]
    },
    {
      id: 6,
      idCar: 3,
      name: "Paola Torres",
      time: "13:45",
      date: "2025-05-24",
      rating: 4.7,
      comments: 3,
      review: "Muy buena experiencia, repetiría sin duda.",
      image: "https://randomuser.me/api/portraits/women/25.jpg",
      commentsList: [
        { user: "Alonso M.", text: "Muy cordial." },
        { user: "Marcela B.", text: "Auto cuidado y limpia." },
        { user: "Kevin Z.", text: "Recomendada." }
      ]
    },
    {
      id: 7,
      idCar: 2,
      name: "Ricardo Díaz",
      time: "09:00",
      date: "2025-05-18",
      rating: 4.2,
      comments: 1,
      review: "Cumplió con las reglas, todo en orden.",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      commentsList: [
        { user: "Sabrina G.", text: "No hubo problemas." }
      ]
    },
    {
      id: 8,
      idCar: 4,
      name: "Elena Suárez",
      time: "11:50",
      date: "2025-05-25",
      rating: 3.4,
      comments: 2,
      review: "Muy buena actitud y cuidado del vehículo.",
      image: "https://randomuser.me/api/portraits/women/52.jpg",
      commentsList: [
        { user: "Hugo L.", text: "Todo perfecto." },
        { user: "Lina V.", text: "Inquilina muy amable." }
      ]
    },
    {
      id: 9,
      idCar: 8,
      name: "Andrés Martínez",
      time: "15:05",
      date: "2025-05-12",
      rating: 3.5,
      comments: 2,
      review: "Podría mejorar en puntualidad.",
      image: "https://randomuser.me/api/portraits/men/90.jpg",
      commentsList: [
        { user: "Valeria P.", text: "Llegó tarde a la entrega." },
        { user: "Fernando T.", text: "Cumplió con el resto de lo pactado." }
      ]
    },
    {
      id: 10,
      idCar: 1,
      name: "Valentina López",
      time: "18:20",
      date: "2025-05-15",
      rating: 4.8,
      comments: 3,
      review: "Muy responsable y cuidadosa.",
      image: "https://randomuser.me/api/portraits/women/41.jpg",
      commentsList: [
        { user: "Bruno K.", text: "Excelente trato." },
        { user: "Sara N.", text: "Todo limpio y ordenado." },
        { user: "Mauricio J.", text: "La recomiendo sin dudar." }
      ]
    }
  ];

  res.json(ratings);
};
