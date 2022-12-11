def num_of_cameras(cameras_map, row, col):
	num_of_cameras = 0

	for i in range(2):
		for j in range(2):
			if cameras_map[row + i][col + j] == '1': 
				num_of_cameras += 1

	return num_of_cameras

def main():
	num_of_blocks = int(input())
	map_size = num_of_blocks + 1
	cameras_map = [input().split(maxsplit = map_size) for _ in range(map_size)]

	for i in range(num_of_blocks):
		row_str = ""
		for j in range(num_of_blocks):
			row_str += 'S' if num_of_cameras(cameras_map, i, j) > 1 else 'U'
		print(row_str)		

if __name__ == '__main__':
	main()