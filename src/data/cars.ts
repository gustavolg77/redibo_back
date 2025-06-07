// src/data/cars.ts
export const cars = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Corolla',
    year: 2022,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&auto=format&fit=crop',
    status: 'Disponible',
    totalRentals: 35,
    totalUsageDays: 42,
    pricePerDay: 45,
    description: 'El Toyota Corolla 2022 es un sedán compacto confiable y eficiente en combustible, perfecto para viajes urbanos.',
    features: ['Aire acondicionado', 'Cámara de retroceso', 'Control crucero', 'Bluetooth'],
    topRank: 2,
    owner: 'Elena Rivas',
    color: 'Azul',
    rentals: [
      {
        rentalId: 2,
        tenant: 'Maria Fernandez Lopez',
        startDate: '2025-05-05',
        endDate: '2025-05-08',
        price: 250
      },
      {
        rentalId: 6,
        tenant: 'Polo Lopez',
        startDate: '2025-05-16',
        endDate: '2025-05-25',
        price: 150
      },
    ] // agregado
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
    image: '',
    status: 'Alquilado',
    totalRentals: 22,
    totalUsageDays: 67,
    pricePerDay: 50,
    description: 'El Honda Civic 2021 ofrece un manejo ágil y un interior espacioso con tecnología avanzada.',
    features: ['Asientos de cuero', 'Pantalla táctil', 'Sensores de estacionamiento', 'Apple CarPlay'],
    topRank: 1,
    owner: 'Elena Rivas',
    color: 'Rojo',
    rentals: [
      {
        rentalId: 1,
        tenant: 'Juan Carlos Perez Gomez',
        startDate: '2025-05-01',
        endDate: '2025-05-05',
        price: 250
      },
      {
        rentalId: 5,
        tenant: 'Ana',
        startDate: '2025-05-10',
        endDate: '2025-05-15',
        price: 150
      },
      {
        rentalId: 3,
        tenant: 'George Lomada',
        startDate: '2025-05-18',
        endDate: '2025-05-19',
        price: 150
      },
      {
        rentalId: 4,
        tenant: 'Alex Furt',
        startDate: '2025-05-25',
        endDate: '2025-05-28',
        price: 150
      }
    ]
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Mustang',
    year: 2023,
    image: '',
    status: 'Disponible',
    totalRentals: 8,
    totalUsageDays: 18,
    pricePerDay: 90,
    description: 'El Ford Mustang 2023 es un muscle car potente con un diseño icónico y un rendimiento excepcional.',
    features: ['Motor V8', 'Sistema de escape activo', 'Asientos deportivos', 'Modos de conducción'],
    topRank: 3,
    owner: 'Elena Rivas',
    color: 'Negro',
    rentals: [] // agregado
  },
  {
    id: 4,
    brand: 'Toyota',
    model: 'RAV4',
    year: 2021,
    image: 'https://www.webmotors.com.br/rbx/_next/image?url=https%3A%2F%2Fimage.webmotors.com.br%2F_fotos%2Fanunciousados%2Fgigante%2F2025%2F202504%2F20250410%2Ftoyota-rav4-2-5-vvtie-hybrid-s-awd-cvt-wmimagem13585420622.webp&w=256&q=75',
    status: 'Disponible',
    totalRentals: 9,
    totalUsageDays: 18,
    pricePerDay: 90,
    description: 'El Toyota Rav 4 es un SUV híbrido que combina potencia, economía y confort.',
    features: ['Tracción en las cuatro ruedas', 'Sensor de lluvia', 'Pantalla multimedia'],
    topRank: 5,
    owner: 'Elena Rivas',
    color: 'Blanco',
    rentals: [
      {
        rentalId: 7,
        tenant: 'Pepito',
        startDate: '2025-05-04',
        endDate: '2025-05-06',
        price: 250
      },
      {
        rentalId: 8,
        tenant: 'Sol Paz',
        startDate: '2025-05-10',
        endDate: '2025-05-18',
        price: 150
      },
    ] // agregado
  },
  {
    id: 5,
    brand: 'Nissan',
    model: 'Altima',
    year: 2020,
    image: '',
    status: 'Disponible',
    totalRentals: 30,
    totalUsageDays: 12,
    pricePerDay: 90,
    description: 'El Nissan Altima 2020 ofrece comodidad y eficiencia con tecnología moderna.',
    features: ['Motor turbo', 'Pantalla táctil', 'Asistente de carril'],
    topRank: 4,
    owner: 'Elena Rivas',
    color: 'Azul',
    rentals: [] // agregado
  }
];
  /*
  {
    id: 6,
    brand: 'Nissan',
    model: 'Kicks',
    year: 2022,
    image: 'https://www.tourinnovacion.cl/wp-content/uploads/2023/12/NISSAN-KICKS.jpg',
    status: 'Disponible',
    totalRentals: 28,
    totalUsageDays: 11,
    pricePerDay: 40,
    description: 'El Ford Mustang 2023 es un muscle car potente con un diseño icónico y un rendimiento excepcional.',
    features: ['Motor V8', 'Sistema de escape activo', 'Asientos deportivos', 'Modos de conducción'],
    topRank: 4,
    owner: 'Elena Rivas',
    color: 'Rojo'
  },
  {
    id: 7,
    brand: 'Chevrolet',
    model: 'Onix',
    year: 2018,
    image: 'https://anteriorportal.erbol.com.bo/sites/default/files/img_noticias/dscn9986_0.jpg',
    status: 'Disponible',
    totalRentals: 27,
    totalUsageDays: 11,
    pricePerDay: 55,
    description: 'El Ford Mustang 2023 es un muscle car potente con un diseño icónico y un rendimiento excepcional.',
    features: ['Motor V8', 'Sistema de escape activo', 'Asientos deportivos', 'Modos de conducción'],
    topRank: 4,
    owner: 'Elena Rivas',
    color: 'Gris'
  },
  {
    id: 8,
    brand: 'Ford',
    model: 'EcoSport',
    year: 2021,
    image: 'https://static.abw.by/upload/2024/11/19/d4c399fea43227c83b70d720bdc99f1c/d4c399fea43227c83b70d720bdc99f1c-600.jpeg',
    status: 'Disponible',
    totalRentals: 25,
    totalUsageDays: 10,
    pricePerDay: 60,
    description: 'El Ford Mustang 2023 es un muscle car potente con un diseño icónico y un rendimiento excepcional.',
    features: ['Motor V8', 'Sistema de escape activo', 'Asientos deportivos', 'Modos de conducción'],
    topRank: 4,
    owner: 'Elena Rivas',
    color: 'Rojo'
  },
  {
    id: 9,
    brand: 'Nissan',
    model: 'March',
    year: 2020,
    image: 'https://www.webmotors.com.br/rbx/_next/image?url=https%3A%2F%2Fimage.webmotors.com.br%2F_fotos%2Fanunciousados%2Fgigante%2F2025%5C202504%5C20250410%5Cnissan-march-1.6-sv-16v-flexstart-4p-manual-wmimagem15143746251.jpg&w=256&q=75',
    status: 'Disponible',
    totalRentals: 15,
    totalUsageDays: 8,
    pricePerDay: 30,
    description: 'El Ford Mustang 2023 es un muscle car potente con un diseño icónico y un rendimiento excepcional.',
    features: ['Motor V8', 'Sistema de escape activo', 'Asientos deportivos', 'Modos de conducción'],
    topRank: 4,
    owner: 'Elena Rivas',
    color: 'Blanco'
  }
];
*/