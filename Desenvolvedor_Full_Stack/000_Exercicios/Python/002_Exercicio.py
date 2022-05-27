# Construa um algoritmo que receba do usuário 4 números. Imprima o maior, o menor e a média deles.

n1 = float(input("Escreva o primeiro número: "))
n2 = float(input("Escreva o segundo número: "))
n3 = float(input("Escreva o terceiro número: "))
n4 = float(input("Escreva o quarto número: "))

if n1 > n2 and n1 > n3 and n1 > n4:
    maior = n1
elif n2 > n1 and n2 > n3 and n2 > n4:
    maior = n2
elif n3 > n1 and n3 > n2 and n3 > n4:
    maior = n3
elif n4 > n1 and n4 > n2 and n4 > n3:
    maior = n4

if n1 < n2 and n1 < n3 and n1 < n4:
    menor = n1
elif n2 < n1 and n2 < n3 and n2 < n4:
    menor = n2
elif n3 < n1 and n3 < n2 and n3 < n4:
    menor = n3
elif n4 < n1 and n4 < n2 and n4 < n3:
    menor = n4


media = (n1 + n2 + n3 + n4) / 4

print("O maior número dentre os que digitou é: {0:.1f}".format(maior))
print("O menor número dentre os que digitou é: {0:.1f}".format(menor))
print("A média dos números dentre os que digitou é: {0:.1f}".format(media))