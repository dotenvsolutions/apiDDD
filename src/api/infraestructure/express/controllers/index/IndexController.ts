import { Request, Response } from 'express';
 

export class IndexController {
  public async invoke(req: Request, res: Response): Promise<any> {
    return res.status(200).json({'msg':'Bienvenido'});
  }
}