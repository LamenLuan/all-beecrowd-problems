from math import sqrt, pow

def ao_quadrado(valor):
	return pow(valor, 2)

def distancia_entre_pontos(x1, y1, x2, y2):
	return sqrt(ao_quadrado(x2 - x1) + ao_quadrado(y2 - y1))

def main():
	xf, yf, xi, yi, v, r1, r2 = map(int, input().split())
	distancia_percorrida = v * 1.5
	distancia = distancia_entre_pontos(xf, yf, xi, yi) + distancia_percorrida
	possivel_alcancar = (r1 + r2) >= distancia
	
	print("Y" if possivel_alcancar else "N")
	return

if __name__ == '__main__':
	main()