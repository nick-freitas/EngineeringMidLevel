import * as Joi from "joi";
import {Validator} from "./base-validator";
import {injectable} from "inversify";

@injectable()
export class FeatureValidator extends Validator {
    titlePayloadValidation;
    descriptionPayloadValidation;
    clientPropertyPayloadValidation;
    targetDatePayloadValidation;
    ticketUrlPayloadValidation;
    ClientPayloadValidation;
    productAreaPayloadValidation;
    statusPayloadValidation;

    constructor() {
        super();

        this.titlePayloadValidation = Joi.string().min(1).max(255);
        this.descriptionPayloadValidation = Joi.string().min(1);
        this.clientPropertyPayloadValidation = Joi.number().integer().min(1);
        this.targetDatePayloadValidation = Joi.date.min('now');
        this.ticketUrlPayloadValidation = Joi.string().min(1).max(255);
        this.ClientPayloadValidation = Joi.number().integer().min(1);
        this.productAreaPayloadValidation = Joi.number().integer().min(1);
        this.statusPayloadValidation = Joi.number().integer().min(1);
    }

    createValidation() {
        const genericValidation = super.createValidation();
        const specificValidation = {
            payload: {
                title: this.titlePayloadValidation.required(),
                description: this.descriptionPayloadValidation.required(),
                clientProperty: this.clientPropertyPayloadValidation.required(),
                targetDate: this.targetDatePayloadValidation.required(),
                ticketUrl: this.ticketUrlPayloadValidation.required(),
                Client: this.ClientPayloadValidation.required(),
                productArea: this.productAreaPayloadValidation.required(),
                status: this.statusPayloadValidation.required()
            }
        };

        return Object.assign({}, genericValidation, specificValidation);
    }

    updateValidation() {
        const genericValidation = super.updateValidation();
        const specificValidation = {
            payload: {
                title: this.titlePayloadValidation,
                description: this.descriptionPayloadValidation,
                clientProperty: this.clientPropertyPayloadValidation,
                targetDate: this.targetDatePayloadValidation,
                ticketUrl: this.ticketUrlPayloadValidation,
                Client: this.ClientPayloadValidation,
                productArea: this.productAreaPayloadValidation,
                status: this.statusPayloadValidation
            }
        };

        return Object.assign({}, genericValidation, specificValidation);
    }
}
