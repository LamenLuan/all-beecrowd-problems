def recursao(repeticoes):
	if repeticoes == 0: return 0
	return 1 / (2 + recursao(repeticoes - 1))

def repeticao_fracoes(repeticoes):
	return 1 + recursao(repeticoes)

def main():
	repeticoes = int(input())
	print(f"{repeticao_fracoes(repeticoes):.10f}")

if __name__ == '__main__':
	main()