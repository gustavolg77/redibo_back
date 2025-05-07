import { Request, Response } from 'express';
import { tenants } from '../data/inquilinos';
import { getInquilinoSummary } from '../query/inquilinoQuery';

export const getAllInquilinos = (req: Request, res: Response): void => {
  res.json(tenants);
};

export const getInquilinoById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    res.status(400).json({ error: 'ID inválido' });
    return;
  }

  const inquilino = tenants.find(t => t.id === id);
  
  if (!inquilino) {
    res.status(404).json({ message: 'Inquilino no encontrado' });
    return;
  }
  
  res.json(inquilino);
};

export const getInquilinoSummaryController = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    res.status(400).json({ error: 'ID inválido' });
    return;
  }

  try {
    const resultado = await getInquilinoSummary(id);
    res.json(resultado);
  } catch (error) {
    console.error('Error al obtener resumen del inquilino:', error);
    res.status(500).json({ error: 'Error al obtener el resumen del inquilino' });
  }
};

export const createInquilino = (req: Request, res: Response): void => {
  const { name, phone, email, image } = req.body;
  
  if (!name || !phone || !email || !image) {
    res.status(400).json({ error: 'Faltan campos obligatorios' });
    return;
  }

  const newId = Math.max(...tenants.map(t => t.id)) + 1;
  const newInquilino = {
    id: newId,
    name,
    phone,
    email,
    image,
    totalRentals: 0,
    rentals: []
  };

  tenants.push(newInquilino);
  res.status(201).json(newInquilino);
};

export const updateInquilino = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const { name, phone, email, image } = req.body;
  
  if (isNaN(id)) {
    res.status(400).json({ error: 'ID inválido' });
    return;
  }

  const index = tenants.findIndex(t => t.id === id);
  
  if (index === -1) {
    res.status(404).json({ message: 'Inquilino no encontrado' });
    return;
  }

  const updatedInquilino = {
    ...tenants[index],
    name: name || tenants[index].name,
    phone: phone || tenants[index].phone,
    email: email || tenants[index].email,
    image: image || tenants[index].image
  };

  tenants[index] = updatedInquilino;
  res.json(updatedInquilino);
};

export const deleteInquilino = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  
  if (isNaN(id)) {
    res.status(400).json({ error: 'ID inválido' });
    return;
  }

  const index = tenants.findIndex(t => t.id === id);
  
  if (index === -1) {
    res.status(404).json({ message: 'Inquilino no encontrado' });
    return;
  }

  const deletedInquilino = tenants.splice(index, 1)[0];
  res.json(deletedInquilino);
};
