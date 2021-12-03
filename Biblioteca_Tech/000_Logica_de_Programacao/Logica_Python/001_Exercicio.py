# Construa um algoritmo que calcula o tamanho de um edifício com base na altura de cada andar e o número de andares informados pelo usuário. 

numeroAndares = int(input("Digite a quantidade de andares: "))
alturaAndares = float(input("Digite a altura de um andar: "))

alturaEdificio = numeroAndares * alturaAndares

print('A altura do seu edifício é {0:.2f} metros.'.format(alturaEdificio))