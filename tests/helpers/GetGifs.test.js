import { getGifts } from '../../src/helpers/GetGifs';

describe('Pruebas en GetGifs', () => { 

    test('Debe Retornar un arreglo de gift', async() => { 
        
        const gifs = await getGifts('One Punch');
        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
     });

 });