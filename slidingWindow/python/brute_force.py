def find_averages_of_subarrays(K, arr):
  result = []
  total_loop = 0
  for i in range(len(arr) - K+1):
    # find sum of next 'K' elements
    _sum = 0.0
    loop = i
    print("Loop starts") if total_loop == 0 else print(f"Another loop {loop} bouta start")
    for j in range(i, i + K):
      _sum += arr[j]
      total_loop +=1
      print( i, j, _sum )
    result.append(_sum/K)  # calculate average

  return result


def main():
  result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
  print("Averages of subarrays of size K: " + str(result))
main()
