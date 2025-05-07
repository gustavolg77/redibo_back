export interface IRental {
    id: number;
    carId: number;
    startDate: string;
    endDate: string;
    status: 'active' | 'completed';
    owner: string;
    carBrand: string; 
    carModel: string;   
  }
  
  export interface IInquilino {
    id: number;
    name: string;
    phone: string;
    email: string;
    image: string;
    totalRentals: number;
    rentals: IRental[];
  }