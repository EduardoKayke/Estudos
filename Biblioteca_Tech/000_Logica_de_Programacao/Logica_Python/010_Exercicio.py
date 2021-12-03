# Faça um algoritmo que pergunte o quanto você ganha por horas. O número de horas trabalhadas no mês. Calcule e mostre o total recebido no mês.

# Entrada de dados e variáveis. 
ganho_hora = float(input("Quanto você recebe por hora? "))
horas_trabalhadas = int(input("Quantas horas você trabalhou no mês? "))

# Processamento.
salario = ganho_hora * horas_trabalhadas

# Saída de dados. 
print("Você receberá ao final do mês um total de R$:{0:.2f} por ter trabalhado {1} horas.".format(salario, horas_trabalhadas))