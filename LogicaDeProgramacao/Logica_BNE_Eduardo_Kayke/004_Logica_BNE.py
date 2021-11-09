# Construa um algoritmo que recebe do usuário 5 números. Após recebê-los, retorne a lista de números em ordem decrescente.

n1 = float(input("Escreva o primeiro número: "))
n2 = float(input("Escreva o segundo número: "))
n3 = float(input("Escreva o terceiro número: "))
n4 = float(input("Escreva o quarto número: "))
n5 = float(input("Escreva o quinto número: "))

lista = [n1, n2, n3, n4, n5]

lista.sort(reverse = True)

print('Está lista está apresentada em ordem decrescente: {0}'.format(lista))