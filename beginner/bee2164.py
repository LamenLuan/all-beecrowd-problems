import math

def main():
	SQRT_OF_5 = math.sqrt(5)
	entrada = int(input())
	aux1 = pow((1 + SQRT_OF_5) / 2, entrada)
	aux2 = pow((1 - SQRT_OF_5) / 2, entrada)
	fibonacci = (aux1 - aux2) / SQRT_OF_5
	print(f'{fibonacci:3.1f}')

if __name__ == '__main__':
	main()