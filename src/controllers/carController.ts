import { Request, Response } from 'express';
import { cars } from '../data/cars';

export const getAllCars = (req: Request, res: Response): void => {
  res.json(cars);
};

export const getCarById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const car = cars.find(c => c.id === id);
  if (!car) {
    res.status(404).json({ message: 'Auto no encontrado' });
    return;
  }
  res.json(car);
};
