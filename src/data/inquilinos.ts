// src/data/tenants.ts

export const tenants = [
  {
    id: 1,
    name: "Juan Carlos Perez Gomez",
    phone: "+591 71242310",
    email: "juan.perez@gmail.com",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    totalRentals: 3,
    rentals: [
      {
        id: 1,
        carId: 2,
        carBrand: "Honda Civic",
        startDate: "2025-05-01",
        endDate: "2025-05-05",
        status: "completed",
        owner: "Elena Rivas"
      },
      {
        id: 101,
        carId: 5,
        carBrand: "Nissan Altima",
        startDate: "2025-03-12",
        endDate: "2025-03-15",
        status: "completed",
        owner: "Elena Rivas"
      },
      {
        id: 102,
        carId: 3,
        carBrand: "Ford Mustang",
        startDate: "2025-01-10",
        endDate: "2025-01-18",
        status: "completed",
        owner: "Elena Rivas"
      }
    ]
  },
  {
    id: 2,
    name: "Maria Fernandez Lopez",
    phone: "+591 68924567",
    email: "maria.fernandez@hotmail.com",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    totalRentals: 2,
    rentals: [
      {
        id: 2,
        carId: 1,
        carBrand: "Toyota Corolla",
        startDate: "2025-05-05",
        endDate: "2025-05-08",
        status: "completed",
        owner: "Elena Rivas"
      },
      {
        id: 103,
        carId: 4,
        carBrand: "Toyota Rav 4",
        startDate: "2025-03-01",
        endDate: "2025-03-05",
        status: "completed",
        owner: "Elena Rivas"
      }
    ]
  },
  {
    id: 3,
    name: "Polo Lopez",
    phone: "+591 78965412",
    email: "polo.lopez@gmail.com",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    totalRentals: 2,
    rentals: [
      {
        id: 6,
        carId: 1,
        carBrand: "Toyota Corolla",
        startDate: "2025-05-16",
        endDate: "2025-05-25",
        status: "upcoming",
        owner: "Elena Rivas"
      },
      {
        id: 104,
        carId: 5,
        carBrand: "Nissan Altima",
        startDate: "2025-02-10",
        endDate: "2025-02-12",
        status: "completed",
        owner: "Elena Rivas"
      }
    ]
  },
  {
    id: 4,
    name: "Ana",
    phone: "+591 77881234",
    email: "ana@email.com",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    totalRentals: 1,
    rentals: [
      {
        id: 5,
        carId: 2,
        carBrand: "Honda Civic",
        startDate: "2025-05-10",
        endDate: "2025-05-15",
        status: "upcoming",
        owner: "Elena Rivas"
      }
    ]
  },
  {
    id: 5,
    name: "George Lomada",
    phone: "+591 74589612",
    email: "george.lomada@email.com",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    totalRentals: 1,
    rentals: [
      {
        id: 3,
        carId: 2,
        carBrand: "Honda Civic",
        startDate: "2025-05-18",
        endDate: "2025-05-19",
        status: "upcoming",
        owner: "Elena Rivas"
      }
    ]
  },
  {
    id: 6,
    name: "Alex Furt",
    phone: "+591 71234123",
    email: "alex.furt@email.com",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    totalRentals: 1,
    rentals: [
      {
        id: 4,
        carId: 2,
        carBrand: "Honda Civic",
        startDate: "2025-05-25",
        endDate: "2025-05-28",
        status: "upcoming",
        owner: "Elena Rivas"
      }
    ]
  },
  {
    id: 7,
    name: "Pepito",
    phone: "+591 70000000",
    email: "pepito@email.com",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    totalRentals: 1,
    rentals: [
      {
        id: 7,
        carId: 4,
        carBrand: "Toyota Rav 4",
        startDate: "2025-05-04",
        endDate: "2025-05-06",
        status: "completed",
        owner: "Elena Rivas"
      }
    ]
  },
  {
    id: 8,
    name: "Sol Paz",
    phone: "+591 72222222",
    email: "sol.paz@email.com",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    totalRentals: 1,
    rentals: [
      {
        id: 8,
        carId: 4,
        carBrand: "Toyota Rav 4",
        startDate: "2025-05-10",
        endDate: "2025-05-18",
        status: "upcoming",
        owner: "Elena Rivas"
      }
    ]
  }
];

export const getTenantById = (id: number) => {
  return tenants.find(tenant => tenant.id === id);
};

export const getAllTenants = () => {
  return tenants;
};
