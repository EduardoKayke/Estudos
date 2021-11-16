# Faça um algoritmo que leia um número inteiro e mostre uma mensagem indicando se este número é par ou ímpar. E se é positivo ou negativo.

# Entrada e variáveis.
n = int(input("Digite um número: "))

# Processamento e saída. 
if n % 2 == 0:
    if n > 0:
        print("O número {0} é par e positivo.".format(n))
    else:
        print("O número {0} é par e negativo.".format(n))

else:
    if n > 0:
        print("O número {0} é ímpar e positivo.".format(n))
    else:
        print("O número {0} é ímpar e negativo.".format(n))