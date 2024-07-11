import { Calificacion } from "./Calificación.js";
import { ICalificacion } from "./ICalificación.js";

let ICali = new ICalificacion(),
    n = ICali.leerNombre(),
    nt = ICali.leerNotaFinal(),
    Cali = new Calificacion(n,nt)


salida = document.getElementById("salida")

salida.innerHTML = ICali.reporte(n,nt,Cali.calcularNotaLetras())

