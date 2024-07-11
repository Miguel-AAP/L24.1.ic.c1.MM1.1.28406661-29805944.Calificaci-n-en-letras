export class Calificacion{
    constructor(nombre,notaFinal){
        this.nombre = nombre
        this.notaFinal = notaFinal

    }

    get nombre(){
        return this._nombre
    }

    set nombre(n){
        this._nombre = n
    }

    get notaFinal(){
        return this._notaFinal
    }

    set notaFinal(n){
        this._notaFinal = +n
    }

    calcularNotaLetras(){
       
         if (this.notaFinal <= 100 && this.notaFinal >=90){
            return "A"
         }
             
        else if(this.notaFinal <= 89 && this.notaFinal >=80){
            return "B"
        }
        else if(this.notaFinal <= 79 && this.notaFinal >=70){
            return "C"
        }
        else if(this.notaFinal <= 69 && this.notaFinal >=60){
            return "D"
        }
        else return "F"

    }

}