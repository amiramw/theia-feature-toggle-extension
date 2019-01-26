import {inject, injectable, optional} from 'inversify';
import {ConcreteFeatureToggleService, FeatureToggleService} from '../common/feature-toggle-interface';

@injectable()
export class FeatureToggleServiceImpl implements FeatureToggleService {

    @inject(ConcreteFeatureToggleService)
    @optional()
    protected readonly concreteFeatureToggleService: ConcreteFeatureToggleService;

    async isActive(toggle: string): Promise<boolean> {
        return this.concreteFeatureToggleService ? this.concreteFeatureToggleService.isActive(toggle) : false;
    }

}
