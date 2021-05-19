export class DocumentType {
    static CPF = {value: "CPF", label: "CPF"}
    static CNPJ = {value: "CNPJ", label: "CNPJ"}
    static RG = {value: "RG", label: "RG"}
    static CNH = {value: "CNH", label: "CNH"}
    static CTPS = {value: "CTPS", label: "CTPS"}

    getChoices(): object[] {
        let choices: object[] = [];

        for (const key in DocumentType) {
            choices.push(DocumentType[key]);
        }

        return choices;
    }
}