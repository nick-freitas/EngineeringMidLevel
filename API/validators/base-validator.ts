import * as Joi from 'joi';
import {injectable} from "inversify";

@injectable()
export abstract class Validator {
    idParamValidation;

    constructor() {
        this.idParamValidation = Joi.number().integer().min(1).required();
    }

    getOneValidation() {
        return {
            params: {
                id: this.idParamValidation
            }
        };
    }

    destroyValidation() {
        return {
            params: {
                id: this.idParamValidation
            }
        };
    }

    createValidation() {
        return {};
    }

    updateValidation() {
        return {
            params: {
                id: this.idParamValidation
            }
        };
    }
}
