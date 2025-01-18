import { shortName } from '../index';

describe('shortName', () => {
    test('should format simple first and last name', () => {
        expect(shortName('John Doe')).toBe('John Doe');
    });

    test('should format name with middle name', () => {
        expect(shortName('John James Doe')).toBe('John J. Doe');
    });

    test('should format name with multiple middle names', () => {
        expect(shortName('John James Robert Doe')).toBe('John J. R. Doe');
    });

    test('should handle prepositions correctly', () => {
        expect(shortName('João da Silva')).toBe('João da Silva');
        expect(shortName('Maria do Santos')).toBe('Maria do Santos');
        expect(shortName('Pedro dos Reis')).toBe('Pedro dos Reis');
    });

    test('should handle number in name', () => {
        expect(shortName('Mário Pedro4 António')).toBe('Mário P. António');
        expect(shortName('4MAteus Pereira dos4 Santos')).toBe('Mateus P. dos Santos');
        expect(shortName('Luiz 4de Jesus5 Mateus3 d1e Almeida3')).toBe('Luiz J. M. de Almeida');
        expect(shortName('Marciano3 3 Âng3elo e3 3 Sim3ão de 3Almeida')).toBe('Marciano A. S. de Almeida');

    });

    test('should handle accented characters', () => {
        expect(shortName('José María Rodriguez')).toBe('José M. Rodriguez');
        expect(shortName('António Marta dos Prazeres')).toBe('António M. dos Prazeres');
        expect(shortName('Ângelo de Jesus Mateus de Almeida')).toBe('Ângelo J. M. de Almeida');
        expect(shortName('Marciâno Ângelo e Simão de Almeida')).toBe('Marciâno A. S. de Almeida');
        expect(shortName('Moça Ângelo e Simão de Almeida')).toBe('Moça A. S. de Almeida');

    });

    test('should handle multiple prepositions and middle names', () => {
        expect(shortName('Ana de Maria da Silva Santos')).toBe('Ana M. S. Santos');
        expect(shortName(' de João da   Pedro dos Santos   Silveira   ')).toBe('João P. S. Silveira');
    });

    test('should handle single name', () => {
        expect(shortName('John')).toBeUndefined();
    });

    test('should handle empty string', () => {
        expect(shortName('')).toBeUndefined();
    });
});