"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = shortName;
const PREPOSITIONS = ['de', 'do', 'dos', 'da', 'das', 'e'];
const normalized = (name) => {
    return name.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z\s]/g, "");
};
const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
function shortName(fullName) {
    if (!fullName?.trim())
        return undefined;
    let nameSplit = fullName
        .split(' ')
        .filter(Boolean)
        .map(part => part.replace(/[^a-záàâãéèêíïóôõöúçA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ\s]/g, ''))
        .filter(part => part !== '');
    let penultimate = '';
    if (PREPOSITIONS.includes(nameSplit[nameSplit.length - 2])) {
        penultimate = nameSplit[nameSplit.length - 2];
    }
    nameSplit = nameSplit
        .slice(0, -2)
        .filter(word => !PREPOSITIONS.includes(word))
        .concat(nameSplit.slice(-2));
    let middleName = ' ';
    if (nameSplit.length === 0)
        return undefined;
    if (nameSplit.length === 1)
        return capitalizeWord(normalized(nameSplit[0]));
    else if (nameSplit.length > 2) {
        const lastIndex = penultimate ? nameSplit.length - 2 : nameSplit.length - 1;
        let lastPreposition = '';
        for (let i = 1; i < lastIndex; i++) {
            const normalizedName = normalized(nameSplit[i]);
            if (PREPOSITIONS.includes(normalizedName)) {
                lastPreposition = normalizedName;
                continue;
            }
            if (normalizedName[0]) {
                middleName += `${normalizedName[0].toUpperCase()}. `;
            }
        }
        if (lastPreposition) {
            middleName += `${lastPreposition} `;
        }
    }
    let first = capitalizeWord(nameSplit[0]);
    let last = capitalizeWord(nameSplit[nameSplit.length - 1]);
    if (first && last) {
        if (penultimate) {
            return first + middleName + penultimate + ' ' + last;
        }
        return first + middleName + last;
    }
}
