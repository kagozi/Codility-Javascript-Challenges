def passingCars(A):
    hash = {}
    count = 0
    for i in range(0, len(A)):
        hash[i] = A[i]
    # return hash
    for i in hash:
        for j in hash:
            if(hash[j] < hash[i] == 1 and j < i):
                count += 1
    return count
print(passingCars([0,1,0,1,1]))