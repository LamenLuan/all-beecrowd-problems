def main():
	num_of_iters = int(input())
	inputs = [int(i) for i in input().split(maxsplit=num_of_iters)]

	last_rpm = 0
	for i, rpm in enumerate(inputs, 1):
		if rpm < last_rpm:
			print(i)
			return
		last_rpm = rpm
	
	print(0)


if __name__ == '__main__':
	main()