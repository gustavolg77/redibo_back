import { Request, Response } from 'express';
import { alerts } from '../data/alerts';

export const getAllAlerts = (req: Request, res: Response): void => {
  res.json(alerts);
};

export const getAlertById = (req: Request, res: Response): void => {
  const { id } = req.params;
  const alert = alerts.find(a => a.id === Number(id));
  if (!alert) {
    res.status(404).json({ message: 'Alerta no encontrada' });
    return;
  }
  res.json(alert);
};

export const deleteAlert = (req: Request, res: Response): void => {
  const { id } = req.params;
  const index = alerts.findIndex(a => a.id === Number(id));
  if (index === -1) {
    res.status(404).json({ message: 'Alerta no encontrada' });
    return;
  }
  alerts.splice(index, 1);
  res.json({ message: 'Alerta eliminada correctamente' });
};
