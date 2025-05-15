import { Request, Response } from 'express';

export const validateWhatsapp = (req: Request, res: Response): void => {
  const { phone } = req.body;

  if (!phone) {
    res.status(400).json({ error: 'Falta el número' });
    return;
  }

  const isValid = /^\+591\s[67]\d{7}$/.test(phone);

  if (!isValid) {
    res.status(200).json({
      valid: false,
      message: 'Número inválido para WhatsApp Bolivia. Debe seguir el formato +591 71234567',
    });
    return;
  }

  res.status(200).json({ valid: true, message: 'Número válido' });
};