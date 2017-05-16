import * as Joi from 'joi';
import {Validator} from "./base-validator";
import {injectable} from "inversify";

@injectable()
export class ProductAreaValidator extends Validator {
    namePayloadValidation;

    constructor() {
        super();

        this.namePayloadValidation = Joi.string().min(1).max(255).required();
    }

    createValidation() {
        const genericValidation = super.createValidation();
        const specificValidation = {
            payload: {
                name: this.namePayloadValidation
            }
        };

        return Object.assign({}, genericValidation, specificValidation);
    }

    updateValidation() {
        const genericValidation = super.updateValidation();
        const specificValidation = {
            payload: {
                name: this.namePayloadValidation
            }
        };

        return Object.assign({}, genericValidation, specificValidation);
    }
}
