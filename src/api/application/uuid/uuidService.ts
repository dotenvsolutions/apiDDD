import { IUuidGenerator } from '../../../shared/infraestructure/shared/domain/uuidGenerator';

type HealthCheckResponse = {
    id: string;
    success: boolean;
    date: string;
};

export class HealthCheckService {
    constructor(private uuidGenerator: IUuidGenerator) {}
    public async invoke(): Promise<HealthCheckResponse> {
        return {
            id: this.uuidGenerator.generate(),
            success: true,
            date: new Date().toISOString()
        };
    }
}