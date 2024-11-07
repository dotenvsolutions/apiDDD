 
import { Request, Response, NextFunction, Router } from 'express';
import { Authorize } from '../../../domain/model/authentication/authorize';
import * as controllers from '../controllers';

export const ApiRouter  = (
    indexController: controllers.IndexController,
    
): Router => {
    const apiRouter = Router();
    const v1Router = Router();

    apiRouter.get('/', indexController.invoke.bind(indexController));
    
    return apiRouter;
}