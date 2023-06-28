class Votante {
    nombre: string;
    dni: number;

    constructor(nombre: string, dni: number) {
        this.nombre = nombre;
        this.dni = dni;
    }
}

class Candidato {
    nombre: string;
    partido: PartidoPolitico;

    constructor(nombre: string, partido: PartidoPolitico) {
        this.nombre = nombre;
        this.partido = partido;
    }
}

class PartidoPolitico {
    nombre: string;
    candidatos: Candidato[];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarCandidato(candidato: Candidato): void {
        this.candidatos.push(candidato);
    }
}

class Voto {
    votante: Votante;
    candidato: Candidato;

    constructor(votante: Votante, candidato: Candidato) {
        this.votante = votante;
        this.candidato = candidato;
    }
}

class ListaElectoral {
    candidatos: Candidato[];

    constructor() {
        this.candidatos = [];
    }

    agregarCandidato(candidato: Candidato): void {
        this.candidatos.push(candidato);
    }
}

class SistemaVotoElectronico {
    partidoPolitico: PartidoPolitico[];
    votantes: Votante[];
    votos: Voto[]

    constructor() {
        this.partidoPolitico = [];
        this.votantes = [];
        this.votos = [];
    }

    agregarPartidoPolitico(nombre: string): void {
        const partido = new PartidoPolitico(nombre);
        this.partidoPolitico.push(partido);
    }

    agregarCandidatoAPartido(candidato: Candidato, partidoNombre: string): void {
        const partido = this.partidoPolitico.find((partido)=> partido.nombre === partidoNombre)

        if(partido) {
            partido.agregarCandidato(candidato);    
        } else {       
            console.log(`El partido político ${partidoNombre} no existe.`);
        }
    }

    agregarListaElectoral(lista: ListaElectoral): void {
        lista.candidatos.forEach((candidato) => {
            this.agregarCandidatoAPartido(candidato, candidato.partido.nombre);
        });
    }

    agregarVotante(votante: Votante): void {
        this.votantes.push(votante);
    }

    realizarVoto(votante: Votante, candidato: Candidato): void {
        const voto = new Voto(votante, candidato)
        this.votos.push(voto);
    }

    obtenerResultados() {
        console.log("Resultados de la elección:");
        this.partidoPolitico.forEach((partido) => {
          console.log(`${partido.nombre}:`);
          partido.candidatos.forEach((candidato) => {
            const votosCandidato = this.votos.filter((voto) => voto.candidato === candidato).length;
            console.log(`- ${candidato.nombre}: ${votosCandidato} votos`);
            });
        });
    }
}

