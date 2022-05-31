def sliding_window(k,arr):
    results = []
    window_sum =0 
    window_tail = 0
    loop = 0
    for window_head in range(len(arr)):
        window_sum += arr[window_head]
        print(f"So far windowhead  {window_head} is less than array length {len(arr)} run this loop")
        if window_head >= k-1:
            results.append(window_sum / k)
            window_sum -= arr[window_tail]
            window_tail += 1
            loop+=1
            print(f"{loop}. Window slide")
    return results

def main():
  print("Averages of subarrays of size K: " + str(sliding_window(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])))
main()