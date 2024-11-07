import { Router as ExpressRouter } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { ErrorMiddleware } from './express/ErrorMiddleware';
 
export const Router = (apiRouter: ExpressRouter,errorMiddleware: ErrorMiddleware): ExpressRouter => {
    const router = ExpressRouter();

    router
        .use(cors())
        .use(helmet())
        .use(morgan('dev'))
    router.use(apiRouter);
    router.use(errorMiddleware.routeNotFoundErrorHandler);
    router.use(errorMiddleware.clientErrorHandler);
    router.use(errorMiddleware.customErrorHandler);
    router.use(errorMiddleware.globalErrorHandler);
    
    return router;
}