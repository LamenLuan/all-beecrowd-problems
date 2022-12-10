def main():
	linha_texto = input()
	print("MUTE" if len(linha_texto) > 140 else "TWEET")

if __name__ == '__main__':
	main()