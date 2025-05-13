import { tenants } from '../data/inquilinos';
import { cars } from '../data/cars';

export const getInquilinoSummary = async (id: number) => {
  const inquilino = tenants.find(t => t.id === id);
  
  if (!inquilino) {
    throw new Error('Inquilino no encontrado');
  }
  const usuarioLogueadoId = 1;

  const rentalsWithCarInfo = inquilino.rentals.map(rental => {
    const car = cars.find(c => c.id === rental.carId);
    return {
      ...rental,
      carBrand: car?.brand || 'Desconocido',
      carModel: car?.model || 'Desconocido',
      carImage: car?.image || '',
      owner: id === usuarioLogueadoId ? 'Tú' : rental.owner
    };
  });

  return {
    id: inquilino.id,
    name: inquilino.name,
    totalRentals: inquilino.totalRentals,
    activeRentals: inquilino.rentals.filter(r => r.status === 'active').length,
    lastRental: rentalsWithCarInfo[0] || null,
    rentals: rentalsWithCarInfo
  };
};