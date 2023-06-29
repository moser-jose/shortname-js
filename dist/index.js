"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortName = void 0;
const shortName = (fullName) => {
    let nameSplit = fullName.split(' ');
    let array = ['de', 'do', 'dos', 'da', 'das', 'e'];
    var penultimate = '';
    if (array.includes(nameSplit[nameSplit.length - 2])) {
        penultimate = nameSplit[nameSplit.length - 2];
    }
    let pattern = new RegExp(' de | do | dos | da | das | e ', 'gi');
    let name = fullName.replace(pattern, ' ').split(' ');
    let middleName = ' ';
    if (name.length > 2) {
        for (let i = 1; i < name.length - 1; i++) {
            let string = name[i].normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^a-zA-Z0-9]/g, "");
            if (string[0] !== undefined) {
                middleName += string[0].toUpperCase() + '. ';
            }
        }
    }
    let first = name.shift();
    let last = name.pop();
    if (first && last) {
        if (penultimate !== '') {
            return first[0].toUpperCase() + first.substring(1).toLowerCase() +
                middleName + penultimate + ' ' + last[0].toUpperCase() + last.substring(1).toLowerCase();
        }
        return first[0].toUpperCase() + first.substring(1).toLowerCase() + middleName +
            last[0].toUpperCase() + last.substring(1).toLowerCase();
    }
};
exports.shortName = shortName;
