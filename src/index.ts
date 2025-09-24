import { Micro, Apurado, Claustrofobico, Fiaca, Moderado, Obsecuente, Empresa} from "./micros/index-micros";

function main(): void {

    const empresaUno = new Empresa('UTHGRA COLECTIVOS');
    const micro1 = new Micro(1, 100, true, 10, 5, 5);
    const micro2 = new Micro(2, 110, true, 15, 8, 7);
    const micro3 = new Micro(3, 125, true, 20, 10, 10);
    
    const claustro1 = new Claustrofobico('Sergio', 'Rodriguez', 8763, true);
    const fiaca2 = new Fiaca('Ruperta', 'Muñasci', 7125, true);
    const apurado2 = new Apurado('Roberto', 'Semañon', 4587, true, claustro1);
    const claustro2 = new Claustrofobico('Matilde', 'Iglesias', 796, true, apurado2);

    const apurado1 = new Apurado('Pedro', 'Gonzalez', 22345, false);
    const fiaca1 = new Fiaca('Hernesto', 'Villaflores de las Nieves', 76421, false, claustro2);

    const moderado1 = new Moderado('Lucian', 'Peralta', 1946, true, claustro1);
    const moderado2 = new Moderado('Francisca', 'Valles', 123890, false, moderado1);

    const obsecuent1 = new Obsecuente('Osvaldo', 'Lopez Bueno', 987, false, claustro1);
    const obsecuente2 = new Obsecuente('Jose', 'Ramos', 312, false, fiaca2);

    micro1.subirPasajero(claustro1);


    


}

main();