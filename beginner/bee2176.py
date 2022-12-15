def main():
	message = input()
	num_of_ones = message.count("1")
	message += "0" if num_of_ones % 2 == 0 else "1"
	print(message)

if __name__ == '__main__':
	main()