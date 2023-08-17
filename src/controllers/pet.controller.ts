import { Request, Response } from 'express'

export const getPets = async (req: Request, res: Response) => {
  return res.send("Pets")
}

export const getPet = async (req: Request, res: Response) => {
    return res.send("Pets")
}

export const createPet = async (req: Request, res: Response) => {
    return res.send("Pets")
}

export const updatePet = async (req: Request, res: Response) => {
    return res.send("Pets")
}

export const deletePet = async (req: Request, res: Response) => {
    return res.send("Pets")
}
