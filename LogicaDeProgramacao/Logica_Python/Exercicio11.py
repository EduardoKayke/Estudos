# João da Silva, pescador, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior do que o estabelecido pelo regulamento de pesca do Estado de São Paulo (50 quilos), deve pagar uma multa de R$: 4,00 por quilo excedente. João precisa que você faça um algoritmo que leia a variável "p" (peso de peixes) e verifique se há excessos. Se houver, gravar na variável "e" (excesso) e na variável "m" o valor da multa que João deverá pagar. Caso contrário mostrar tais variáveis com o conteúd "0".

#Entrada de dados e variáveis. 
p = float(input("Total de quilos da carga: "))

# Processamento e saída de dados.
if p > 50:
    m = p - 50
    e = m * 4

    print("Excesso em {0:.0f} quilos.".format(m))
    print("Você deverá pagar R$:{0:.2f} de multa.".format(e))

else:
    e = 0
    m = 0
    print("Multa: {0}".format(m))
    print("Excesso: {0}".format(e))