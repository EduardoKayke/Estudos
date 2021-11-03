# Faça um algoritmo para somar dois números e multiplicar o resultado pelo primeiro número.

# Entrada de dados e váriaveis. 
n1 = int(input("Informe o primeiro número: "))
n2 = int(input("Informe o segundo número: "))

# Processamento.
soma = n1 + n2
multiplicacao = soma * n1

# Saída.
print("O resultado da multiplicação é {0}.".format(multiplicacao))