// Parâmetro (Nota) -> Retorno (Conceito)

function notaParaConceito(nota) {
    switch(Math.ceil(nota)) {
        case 10: return 'A+';
        case 9: return 'A';
        case 8: return 'B+';
        case 7: return 'B';
        case 6: return 'C+';
        case 5: return 'C';
        case 4: return 'D+';
        case 3: return 'D';
        case 2: return 'E+';
        case 1: return 'E';
        case 0: return 'F';
        default: return null;
    }
}

console.log(`O conceito do Edu é ${notaParaConceito(8.7)}.`);
console.log(`O conceito da Ana é ${notaParaConceito(6.7)}.`);

// Outro Desafio

function boletim(nota1, nota2, nota3) {
    if(nota1 < nota2 && nota3) {
        let notas = (nota2 + nota3) / 2;

        if(notas >= 7) {
            return `Aprovado`;
        } else if (notas < 7 || notas >= 4) {
            return `Recuperação`;
        } else if (notas < 4 || notas >= 0) {
            return `Reprovado`;
        }

    } else if (nota2 < nota1 && nota3) {
        let notas = (nota1 + nota3) / 2;

        if(notas >= 7) {
            return `Aprovado`;
        } else if (notas < 7 || notas >= 4) {
            return `Recuperação`;
        } else if (notas < 4 || notas >= 0) {
            return `Reprovado`;
        }

    } else if (nota3 < nota1 && nota2) {
        let notas = (nota1 + nota2) / 2;

        if(notas >= 7) {
            return `Aprovado`;
        } else if (notas < 7 || notas >= 4) {
            return `Recuperação`;
        } else if (notas < 4 || notas >= 0) {
            return `Reprovado`;
        }

    }
}

console.log(boletim(3, 8, 7));