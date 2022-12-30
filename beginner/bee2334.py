def get_ducks_remaining(duck_amount: int):
	return duck_amount - 1 if duck_amount > 0 else duck_amount 

def main():
	while True:
		duck_amount = int(input())
		if duck_amount < 0: break
		print(get_ducks_remaining(duck_amount))

if __name__ == '__main__':
	main()