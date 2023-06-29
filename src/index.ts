export const shortName= (fullName: string) => {
    let nameSplit: string[] = fullName.split(' ');
    let array: string[] = ['de', 'do', 'dos', 'da', 'das', 'e'];
    var penultimate: string = '';
    if (array.includes(nameSplit[nameSplit.length - 2])) {
        penultimate = nameSplit[nameSplit.length - 2];
    }
    let pattern: RegExp = new RegExp(' de | do | dos | da | das | e ', 'gi');
    let name: string[] = fullName.replace(pattern, ' ').split(' ');
    let middleName: string = ' ';
    if (name.length > 2) {
        for (let i: number = 1; i < name.length - 1; i++) {
            let string: string =name[i].normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-zA-Z0-9]/g, "");
            if(string[0]!==undefined){
                middleName += string[0].toUpperCase() + '. ';
            }
        }
    }
    let first: string | undefined = name.shift();
    let last: string | undefined = name.pop();
    if (first && last) {
        if (penultimate !== '') {
            return first[0].toUpperCase() + first.substring(1).toLowerCase() +
            middleName + penultimate + ' ' + last[0].toUpperCase() + last.substring(1).toLowerCase();
        }
        return first[0].toUpperCase() + first.substring(1).toLowerCase() + middleName +
            last[0].toUpperCase() + last.substring(1).toLowerCase();
    }
}