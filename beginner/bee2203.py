from math import sqrt
from sys import stdin

def ao_quadrado(valor):
	return valor * valor

def distancia_entre_pontos(x1, y1, x2, y2):
	return sqrt(ao_quadrado(x2 - x1) + ao_quadrado(y2 - y1))

def main():
	for line in stdin:
		if line == '\n': break
		xf, yf, xi, yi, v, r1, r2 = map(int, line.split())
		distancia_fuga = v * 1.5
		distancia_total = distancia_entre_pontos(xf, yf, xi, yi) + distancia_fuga
		print("Y" if r1 + r2 >= distancia_total else "N")

if __name__ == '__main__':
	main()