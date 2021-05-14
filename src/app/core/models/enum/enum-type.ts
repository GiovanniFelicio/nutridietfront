export class EnumType {
    static MAIN = {value: "M", label: "Principal"}
    static ADDITIONAL = {value: "A", label: "Adicional"}
    static COMMERCIAL = {value: "C", label: "Comercial"}
    static WORK = {value: "W", label: "Trabalho"}

    getChoices(): object[] {
        let choices: object[] = [];

        for (const key in EnumType) {
            choices.push(EnumType[key]);
        }

        return choices;
    }
}