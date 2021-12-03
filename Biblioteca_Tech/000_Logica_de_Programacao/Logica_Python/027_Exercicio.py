# Desenvolva um gerador de tábuada, capaz de gerar a tábuada de qualquer número inteiro entre 1 a 10. O úsuario deve informar de qual número ele deseja ver a tábuada. A saída deve ser conforme o exemplo abaixo.
# Tábuada de 5:
# 5 X 1 = 5
# 5 X 2 = 10
# 5 X 10 = 50

numero = int(input("Informe um número entre 1 e 10: "))

while numero < 1 or numero > 10:
    numero = int(input("Informe um número entre 1 e 10: "))

print("Tabuada de {0}".format(numero))

for n in range(1, 11):
    print("{0} X {1} = {2}".format(numero, n, (numero * n)))