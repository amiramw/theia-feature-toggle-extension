import {ContainerModule} from "inversify";
import {FeatureToggleService, featureToggleServicePath} from "../common/feature-toggle-interface";
import {WebSocketConnectionProvider} from "@theia/core/lib/browser";

export default new ContainerModule(bind => {
    bind(FeatureToggleService).toDynamicValue(ctx => {
        const provider = ctx.container.get(WebSocketConnectionProvider);
        return provider.createProxy<FeatureToggleService>(featureToggleServicePath);
    }).inSingletonScope();
});