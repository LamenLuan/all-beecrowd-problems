def main():
	qtd_participantes, qtd_hot_dogs = map(int, input().split(maxsplit=2))
	print(f"{(qtd_participantes / qtd_hot_dogs):.2f}")

if __name__ == '__main__':
	main()