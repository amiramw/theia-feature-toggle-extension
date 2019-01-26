import {ContainerModule} from 'inversify';
import {ConnectionHandler, JsonRpcConnectionHandler} from '@theia/core/lib/common';
import {FeatureToggleService, featureToggleServicePath} from '../common/feature-toggle-interface';
import {FeatureToggleServiceImpl} from './feature-toggle-service-impl';

export default new ContainerModule(bind => {
    bind(FeatureToggleService).to(FeatureToggleServiceImpl).inSingletonScope();
    bind(ConnectionHandler).toDynamicValue(ctx =>
        new JsonRpcConnectionHandler(featureToggleServicePath, () =>
            ctx.container.get(FeatureToggleService)
        )
    ).inSingletonScope();
});
