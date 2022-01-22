def sumar(ar1, ar2):
    print(ar1+ar2)

def restar(ar1, ar2):
    print(ar1-ar2)

def multiplicar(ar1, ar2):
    print(ar1*ar2)

def dividir(ar1, ar2):
    if ar2!=0 :
        print(ar1/ar2)
    else:
        print("no existe divicion para cero")

#sumar(5, 7)
#restar(4,2)
#multiplicar(5,4)
#dividir(9,0)

color = ['rojo', 'verde', 'negro']
color2 = list('azul')
print(color)
print(color2)

for c in color:
    print(c)

#numero = list(range(1, 10))
#print(numero)

i = 1
while i<6:
    print(i)
    i+=1

# Ingresar un número y calcular su factorial

def factorial():
    numero = int(input("Ingrese un número para calcular el factorial: "))
    i = 1
    acumulador = 1
    while i <= numero:
        acumulador = acumulador * i
        print(acumulador)
        i+=1

factorial()