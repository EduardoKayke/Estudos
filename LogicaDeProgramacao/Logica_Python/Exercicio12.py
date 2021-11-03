# Elabore um algoritmo que leia as variáveis "c" e "n", respectivamente código e número de horas trabalhadas de um operário. Calcule o salário sabendo que ele ganha R$:10,00 por hora. Quando o número de horas exceder 50, calcule o excesso de pagamento armazenando-o na variável "e". Caso contrário zerar tal variável. A hora excedente de trabalho vale R$:20,00. No final do processamento imprima o salário total e o salário excedente. 

# Entrada de variáveis e constantes dos dados. 
valor_hora_trabalhada = 10.00
valor_hora_excedete = 20.00
e = 0

c = int(input("Informe o código: "))
n = float(input("Informe a quantidade de horas trabalhadas: "))

# Processamento.
if n > 50:
    e = n - 50
    salario = e * valor_hora_excedete
    salario_total = (50 * 10) + (e * valor_hora_excedete)
    print("\nNo mês atual você trabalhou {0:.0f} horas extras. \nReceberá um total de R$:{1:.2f} a mais em seu salário. \nTotalizando R$:{2:.2f} reais.".format(e, salario, salario_total))

else:
    n < 50
    salario_total = n * valor_hora_trabalhada
    print("\nNo mês atual você trabalhou {0:.0f} horas. \nReceberá um total de R$:{1:.2f} reais. \nNão há extras desta vez.".format(n, salario_total))