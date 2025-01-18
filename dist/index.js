"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortName = void 0;
const shortName = (fullName) => {
    let nameSplit = fullName.split(' ').filter(Boolean);
    let array = ['de', 'do', 'dos', 'da', 'das', 'e'];
    var penultimate = '';
    if (array.includes(nameSplit[nameSplit.length - 2])) {
        penultimate = nameSplit[nameSplit.length - 2];
    }
    for (let i = 0; i < nameSplit.length - 2; i++) {
        if (array.includes(nameSplit[i])) {
            nameSplit.splice(i, 1);
            i--;
        }
    }
    let middleName = ' ';
    if (nameSplit.length > 2) {
        let integer = 0;
        penultimate ? integer = nameSplit.length - 2 : integer = nameSplit.length - 1;
        let prep = '';
        let flag = false;
        for (let i = 1; i < integer; i++) {
            let string = nameSplit[i].normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-zA-Z\s]/g, "");
            flag = false;
            for (let j = 0; j < array.length; j++) {
                if (string === array[j]) {
                    prep = string;
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                if (string[0] !== undefined) {
                    middleName += string[0].toUpperCase() + '. ';
                }
            }
        }
        if (flag)
            middleName += prep + ' ';
    }
    let first = nameSplit.shift();
    let last = nameSplit.pop();
    if (first && last) {
        first = first
            .replace(/[^a-záàâãéèêíïóôõöúçñA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g, "");
        last = last
            .replace(/[^a-záàâãéèêíïóôõöúçñA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ\s]/g, "");
        if (penultimate) {
            return first[0].toUpperCase() + first.substring(1).toLowerCase() +
                middleName + penultimate + ' ' + last[0].toUpperCase() + last.substring(1).toLowerCase();
        }
        return first[0].toUpperCase() + first.substring(1).toLowerCase() + middleName +
            last[0].toUpperCase() + last.substring(1).toLowerCase();
    }
};
exports.shortName = shortName;
