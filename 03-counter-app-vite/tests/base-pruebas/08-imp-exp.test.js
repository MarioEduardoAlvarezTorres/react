import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });
    
    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner retornar los héroes de DC',()=>{
        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        
        expect(heroesDC.length).toBe(3);
        expect(heroesDC).toEqual([
            {id: 1,name: 'Batman',owner: 'DC'},
            {id: 3,name: 'Superman',owner: 'DC'},
            {id: 4,name: 'Flash',owner: 'DC'},
        ])
    });
})