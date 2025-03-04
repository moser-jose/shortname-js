const PREPOSITIONS = ['de', 'do', 'dos', 'da', 'das', 'e']
const normalized = (name: string): string => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z\s]/g, '')
}

const capitalizeWord = (word: string): string => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export function shortName(fullName: string): string | undefined {
  if (!fullName?.trim()) return undefined

  let nameSplit: string[] = fullName
    .split(' ')
    .filter(Boolean)
    .map(part => part.replace(/[^a-záàâãéèêíïóôõöúçA-ZÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇ\s]/g, ''))
    .filter(part => part !== '')

  let penultimate: string = ''

  if (PREPOSITIONS.includes(nameSplit[nameSplit.length - 2])) {
    penultimate = nameSplit[nameSplit.length - 2]
  }

  nameSplit = nameSplit.slice(0, -2).concat(nameSplit.slice(-2))

  let middleName: string = ' '

  if (nameSplit.length === 0) return undefined
  if (nameSplit.length === 1) return capitalizeWord(normalized(nameSplit[0]))
  else if (nameSplit.length > 2) {
    const lastIndex = penultimate ? nameSplit.length - 2 : nameSplit.length - 1
    for (let i = 1; i < lastIndex; i++) {
      const normalizedName = normalized(nameSplit[i])
      if (PREPOSITIONS.includes(normalizedName)) {
        middleName += `${normalizedName} `
      }
      if (normalizedName[0] && !PREPOSITIONS.includes(normalizedName)) {
        middleName += `${normalizedName[0].toUpperCase()}. `
      }
    }
    if (PREPOSITIONS.includes(penultimate)) {
      middleName += `${penultimate} `
    }
  }
  let first = capitalizeWord(nameSplit[0])
  let last = capitalizeWord(nameSplit[nameSplit.length - 1])

  if (first && last) {
    return first + middleName + last
  }
}
