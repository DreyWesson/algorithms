def twoSum(arr, target):
    result = [];
    tail = 0;
    _sum = 0;
    two_sum = [];
    k=2;

    for i in range(len(arr)):
        _sum += arr[i];
        result.append(i);
        if (i >= k - 1):
            if (_sum == target):
                two_sum.append(result);
                result=[]
            else:
                result = [i];
            _sum -= arr[tail];
            tail += 1;
    return two_sum

def main():
    print(str(twoSum([11, -2, 15, 5, 8, 2, 7, 6, 3], 9)))
main()