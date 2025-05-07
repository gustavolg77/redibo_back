// src/types/car.ts

export interface Rental {
  rentalId: number;
  tenant: string;
  startDate: string;
  endDate: string;
  price: number;
}

export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  image: string;
  status: string;
  totalRentals: number;
  totalUsageDays: number;
  pricePerDay: number;
  description: string;
  features: string[];
  owner?: string;
  color?: string;

  // ← Nuevas propiedades:
  topRank?: number;
  rentals: Rental[];
}
