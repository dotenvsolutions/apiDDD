import {
    asClass,
    createContainer,
    asFunction,
    InjectionMode,
    AwilixContainer,
    asValue
} from 'awilix';
import { Server } from './Server';
import { config } from '../config';
import { Router } from './Router';
import * as ApiController from '../../../api/infraestructure/express/controllers';
import { ApiRouter } from '../../../api/infraestructure/express/router';
import { ErrorMiddleware } from './express/ErrorMiddleware';
import { ServerLogger } from '../logger';

export class Container {
    private readonly container: AwilixContainer;

    constructor() {
        this.container = createContainer({
            injectionMode: InjectionMode.CLASSIC,
            strict: true,
        });
    
        this.register();
    }

    public register():void {
        this.container
        .register({
            server: asClass(Server).singleton(),
            config: asValue(config),
            router: asFunction(Router).singleton(),
            logger: asClass(ServerLogger).singleton(),
        })
        .register({
            errorMiddleware: asClass(ErrorMiddleware).singleton(),
            apiRouter: asFunction(ApiRouter).singleton()
        })
        .register({
            indexController: asClass(ApiController.IndexController).singleton()
        })
    }

    public invoke(): AwilixContainer {
        return this.container;
    }
}