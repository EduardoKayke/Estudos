# Faça um algoritmo que determine o maior entre N números. A condição de parada é até que a entrada seja igual a zero.

# Entrada de dados e variáveis.
maior = 0

n = int(input("Informe um número: "))

# Processamento.
while n != 0:
    if n > maior:
        maior = n
    n = int(input("Informe um número: "))

print("O maior número é {0}".format(maior))