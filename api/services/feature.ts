import {inject, injectable} from "inversify";

import {Service} from "./base-service";
import {iocTypes} from "../ioc-types";
import {FeatureDbSchema} from "../schema/feature";

@injectable()
export class FeatureService extends Service {
    constructor(@inject(iocTypes.FeatureDbSchema) featureDbSchema: FeatureDbSchema) {
        super(featureDbSchema);
    }

    async create(args): Promise<any> {
        return super.create(args);
    }

    async destroy(id): Promise<any> {
        return super.destroy(id);
    }

    async update(id, args): Promise<any> {
        return super.update(id, args);
    }

    private normalizeClientPriority() {
        //todo check client priority normalize it across all feature requests
    }
}
