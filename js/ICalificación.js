export class ICalificacion{

    leerNombre(){
        return prompt("Introducir nombre")
    }

    leerNotaFinal(){
        return prompt("Introducir nota final")
    }

    reporte(a,b,c){
        return `
        Nombre: ${a}
        <br>Nota Final: ${b}
        <br>Calificación en letra: ${c}
            `


    }
}