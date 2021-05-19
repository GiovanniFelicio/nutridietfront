export class EnumGenre {
    static FEMALE = {value: 'F', label: 'Feminino'}
    static MALE = {value: 'M', label: 'Masculino'}

    getChoices(): object[] {
        let choices: object[] = [];

        for (const key in EnumGenre) {
            choices.push(EnumGenre[key]);
        }

        return choices;
    }
}