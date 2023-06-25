#given a dict of value and weight
#write a f n to calculate the maximum value to construct using a given target weight

def maximum_value(target_weight, weight_value_array):
    if not weight_value_array:
        return 0
    if target_weight ==0:
        return 0
    arr = []
    value = 0
    length = len(weight_value_array)
    for i in range(length):
        for j in range(target_weight):
            arr.push(max(
                arr[i-1][j], weight_value_array[i][0] + weight_value_array[i-1][j-weight_value_array[i][i-target_weight]]
            ))
def maximum_value():
    pass