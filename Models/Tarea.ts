class ListaDeTareas {
    private tareas: Tarea[]

    constructor() {
        this.tareas = []
    }

    agregarTarea(tarea: Tarea): void {
        this.tareas.push(tarea);
    }

    marcarTareaCompleta(id: number): void {
        for(let tarea of this.tareas) {
            if(tarea.id === id) {
                tarea.completado = true;
            }
        }
    }

    listarTareas(): void {
        for(let tarea of this.tareas) {
            console.log(
                `id: ${tarea.id}`,
                `descripcion: ${tarea.descripcion}`,
                `completado: ${tarea.completado}`               
            )
        }
    }
}


class Tarea {
    id: number;
    descripcion: string;
    completado: boolean;
}