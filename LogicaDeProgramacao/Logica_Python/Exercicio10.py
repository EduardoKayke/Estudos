# Tendo como dado de entrada altura e o sexo de uma pessoa. Contrua um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas. Homem: (72.7 * altura) - 58. Mulher: (62.1 * altura) - 44.7.

# Entrada e variáveis.
altura = float(input("Qual sua altura: "))
sexo = input("Informe o sexo m/f: ")

# Processamento.
if sexo.lower() == 'm':
    peso_ideal = (72.7 * altura) - 58

elif sexo.lower() == 'f':
    peso_ideal = (62.1 * altura) - 44.7

else:
    peso_ideal = 0
    print("Sexo não reconhecido.")

# Saída.
print("Seu peso ideal é {0:.1f} Kg.".format(peso_ideal))