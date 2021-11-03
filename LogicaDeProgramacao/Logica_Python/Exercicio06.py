# Tendo como dados de entrada e altura de uma pessoa, construa um algoritmo que calcule seu peso ideal. Usando a seguinte fórmula: (72.7 * altura) - 58

# Entrada de dados e variáveis.
altura = float(input("Digite a sua altura: "))

# Processamento.
peso_ideal = (altura * 72.7) - 58

# Saída de dados. 
print("Seu peso ideal é {0:.2f} Kg.".format(peso_ideal))