def main():

	while True:
		exp_modifier, exp_value = map(int, input().split(maxsplit=2))
		if exp_modifier == 0: break
		print(exp_modifier * exp_value)

if __name__ == '__main__':
	main()