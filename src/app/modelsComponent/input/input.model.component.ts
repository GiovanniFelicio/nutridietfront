export class InputModelComponent{
    constructor(public id: string, 
                public type: string, 
                public name: string, 
                public _class: string) {}

    toHtml(): string {
        let html = `<input id="${this.id}" type="${this.type}" name="${this.name}" class="form-control ${this._class}"/>`;

        return html;
    }
}