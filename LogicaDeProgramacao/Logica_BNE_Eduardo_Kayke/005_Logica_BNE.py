# Construa um algoritmo que identifique a quantidade de vogais a partir de um texto informado pelo usuário.

print('Descubra quantas vogais tem em seu texto.')

i = 0
vogais = 0
string = str (input('Digite ou cole o seu texto aqui: '))
string = string.lower()
for i in string:
    if (i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u'):
            vogais+=1

print('O seu texto tem a quantidade de {0} vogais.'.format(vogais))