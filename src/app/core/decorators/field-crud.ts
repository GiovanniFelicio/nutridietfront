import 'reflect-metadata'

export const FieldCrud = (label: string, type: string, component: any): PropertyDecorator => {
    return (target, propertyKey: string): void => {
        if (!Reflect.hasMetadata('fields', target.constructor)) {
            Reflect.defineMetadata('fields', [], target.constructor);
        }

        const fields = Reflect.getMetadata('fields', target.constructor) as Array<any>;

        fields.push({label: label, type: type, name: propertyKey, component: component});

        Reflect.defineMetadata('fields', fields, target.constructor);
    }
}