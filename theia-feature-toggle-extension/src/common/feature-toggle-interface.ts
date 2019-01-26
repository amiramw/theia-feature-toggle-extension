export const featureToggleServicePath = '/services/featureToggle';

interface FeatureToggleServiceBase {
    isActive(toggle: string): Promise<boolean>;
}
export const FeatureToggleService = Symbol('FeatureToggleService');
export interface FeatureToggleService extends FeatureToggleServiceBase{
}
export const ConcreteFeatureToggleService = Symbol('ConcreteFeatureToggleService');
export interface ConcreteFeatureToggleService extends FeatureToggleServiceBase{
}
