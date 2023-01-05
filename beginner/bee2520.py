from sys import stdin

def index_in_grid(element, grid: 'list[list]'):
	for i, row in enumerate(grid):
		for j, item in enumerate(row):
			if item == element: return i, j

def min_movements_to_reach_target(grid: 'list[list]'):
	x, y = index_in_grid('1', grid)
	tx, ty = index_in_grid('2', grid)
	return abs(x - tx) + abs(y - ty)

def main():
	for line in stdin:
		if line == '\n': break
		rows, cols = map(int, line.split(maxsplit=2))
		grid = [input().split(maxsplit=cols) for _ in range(rows)]
		print(min_movements_to_reach_target(grid))

if __name__ == '__main__':
	main()