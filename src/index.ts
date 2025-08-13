// import { Person } from "./personas";
// import { Vehiculo } from "./vehiculo";
import { Articulo } from "./articulo";
import { Cine } from "./cine";
import { Fruta } from "./fruta";
// import { Ninja } from "./ninja";

function main(): void {
    // console.log("----------PERSONA---------");
    // const myVariable = new Person('Al', 'Goritmo');
    // myVariable.setName('Pedro alfonso');
    // console.log(myVariable.getName())
    // console.log(myVariable.getLastname());


    // const myCar = new Vehiculo('Ford', 'Falcon', '12345');
    // console.log("----------MI AUTO---------");
    // console.log(myCar.marca);
    // console.log(myCar.modelo);

    // const articuloUno = new Articulo('Holanda', 'Trece');
    // articuloUno.setMarca('Techo');
    // articuloUno.setModelo('Rueda');
    // console.log(articuloUno.getMarca());
    // console.log(articuloUno.getModelo());

    // const cine = new Cine('Rocky', '20HS');
    // const cine2 = new Cine('Saw', '23HS');
    // console.log("Cartelera 1: " + cine.obtenerCartelera());
    // console.log("Cartelera 2: " + cine2.obtenerCartelera());
    // cine.setPelicula("Rocky 2");
    // cine.setHorario('21HS');
    // console.log("Cartelera 1: " + cine.obtenerCartelera());
    // console.log("Cartelera 2: " + cine2.obtenerCartelera());

    // const manzanaRojaChica =  new Fruta('Rojo', '100g', true);
    // const manzanaRojaGrande =  new Fruta('Rojo', '200g', true);
    // console.log(manzanaRojaChica.esComestible());
    // console.log(manzanaRojaGrande.esComestible());
    // const ninja1 = new Ninja('Judo', 'Cuerpo', 100, 30);
    // console.log(ninja1.getArteMarcial());
    // console.log(ninja1.getArma());
    // ninja1.setArma('Cuchillo');
    // console.log(ninja1.getArma());
    const cine1 =  new Cine('Rocky', '23HS');
    console.log(cine1.getPelicula());
}

main();

