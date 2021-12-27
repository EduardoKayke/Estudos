let nota = 11.9;

switch(Math.ceil(nota)){
    case 10: case 9: case 8: case 7:
        console.log('Parabéns');
        break;
    case 6: case 5:
        console.log('Recuperação');
        break;
    case 4: 
    case 3: 
    case 2:
        console.log('Segunda Recuperação');
        break;
    case 1: case 0:
        console.log('Reprovado');
        break;
    default:
        console.log('Nota inválida.');
}

//PS tanto faz os cases serem na mesma linha.
// Se for o último caso não precisa por break.