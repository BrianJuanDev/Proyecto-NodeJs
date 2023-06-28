abstract class  Animal {
    vivo: boolean;

    constructor(vivo: boolean) {
        this.vivo = vivo;
    }
}

class Perro extends Animal {
    raza: string;

    constructor(vivo: boolean, raza: string) {
        super(vivo);
        this.raza = raza;
    }

    hacerSonido(): void {
        console.log("guauu") 
    }
} 

class Gato extends Animal {
    genero: string;

    constructor(vivo: boolean, genero: string) {
        super(vivo);
        this.genero = genero
    }

    hacerSonido(): void {
        console.log("miauu") 
    }
}

let gato1 = new Gato(true, 'femenino')
gato1.hacerSonido()

let perro1 = new Perro(true, 'Labrador')
perro1.hacerSonido()
