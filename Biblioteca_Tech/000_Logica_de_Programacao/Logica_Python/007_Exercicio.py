# Faça um algoritmo para calcular o estoque médio de uma peça.
# estoque_medio = (quantidade_minima + quantidade_maxima) / 2.

# Entrada de dados e váriaveis. 
quantidade_minima = int(input("Diga a quantidade mínima de peças: "))
quantidade_maxima = int(input("Diga a quantidade máxima de peças: "))

# Processamento.
divisao = (quantidade_minima + quantidade_maxima) / 2

# Saída
print("A média de peças em seu estoque é {0}".format(divisao))