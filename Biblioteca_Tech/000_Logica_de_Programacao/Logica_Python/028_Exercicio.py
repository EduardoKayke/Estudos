'''Sua organização acaba de contratar um estagiário para trabalhar no supore de informática, com a intenção de fazer um levantamento nas sucatas encontradas nesta área. A primeira tarefa dele é testar todos os cerca de 200 mouses que se encontram lá, testando e anotando o estado de cada um deles, para verificar o que se pode aproveitar deles. Foi requisitado que você desenvolva um programa para registrar esse levantamento. O programa deverá receber um número de identificação do mouse o tipo de defeito:

- Necessita de esfera:
- Necessita de limpeza:
- Necessita troca do cabo ou conector:
- Quebrado ou inutilizado:

Uma identificação igual a zero encerra o programa. Ao final o programa deverá emitir o seguinte relatório:

Quantidade de mouses: 100

Situação                                   Quantidade   Percentual

1 - Necessita de esfera:                      40           40%
2 - Necessita de limpeza:                     30           30%
3 - Necessita troca do cabo ou conector:      15           15% 
4 - Quebrado ou inutilizado:                  15           15% '''

# Variáveis, entradas e processamento.
contador_quantidade_mouses = 0
contador_esfera = 0
contador_limpeza = 0
contador_cabo_conector = 0
contador_quebrado = 0

identificador = int(input("Digite o código do produto: "))

while identificador != 0:
    print("1 - Necessidade de Esferas.")
    print("2 - Necessidade de Limpeza.")
    print("3 - Necessidade de Cabo ou Conector.")
    print("4 - Quebrado ou inutilizado.")

    defeito = int(input("Informe o tipo de defeito: "))

    if defeito == 1:
        contador_esfera = contador_esfera + 1
    elif defeito == 2:
        contador_limpeza = contador_limpeza + 1
    elif defeito == 3:
        contador_cabo_conector = contador_cabo_conector + 1
    elif defeito == 4:
        contador_quebrado = contador_quebrado + 1
    
    contador_quantidade_mouses = contador_quantidade_mouses + 1

    identificador = int(input("Digite o código do produto: "))

p1 = contador_esfera / contador_quantidade_mouses * 100.0
p2 = contador_limpeza / contador_quantidade_mouses * 100.0
p3 = contador_cabo_conector / contador_quantidade_mouses * 100.0
p4 = contador_quebrado / contador_quantidade_mouses * 100.0

print("Quantidade de mouses {0}.".format(contador_quantidade_mouses))
print("           Situação                   Quantidade   Percentual")
print("1 - Necessidade de Esferas.               {0}           {1:.2f}%".format(contador_esfera, p1))
print("2 - Necessidade de Limpeza.               {0}           {1:.2f}%".format(contador_limpeza, p2))
print("3 - Necessidade de Cabo ou Conector.      {0}           {1:.2f}%".format(contador_cabo_conector, p3))
print("4 - Quebrado ou inutilizado.              {0}           {1:.2f}%".format(contador_quebrado, p4))