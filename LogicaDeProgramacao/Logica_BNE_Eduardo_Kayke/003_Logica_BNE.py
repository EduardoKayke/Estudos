# Construa um algoritmo que instancia um array de inteiros com os seguintes valores: 1,3,35,40,85,123,121,209,200,305,350. Após, crie uma lógica que separe estes números entre pares e ímpares em outros 2 arrays.

numeros = [1, 3, 35, 40, 85, 123, 121, 209, 200, 305, 350]
numerosPares = []
numerosImpares = []

for i in numeros:
  if i % 2 == 0:
    numerosPares.append(i)
  else:
    numerosImpares.append(i)

print(numerosPares)
print(numerosImpares)
