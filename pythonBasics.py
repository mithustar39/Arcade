print("Hello")

print("------------------------------------")

x = 10

print(type(x))

# datatype --> int (integers / whole numbers) , str (string/alphabet/special charchters) , float (decimal nos) , bool (boolean)

# ---------------- functions ---------------------------------

# indentation --> there must be 4 spaces (or u can press the tab key) to keep the lines within a block

print("------------------------------------")

# defining the func
def greeting():
    print("Hello Mithun")


# func call statement
greeting()


#  we can pass arguments to the func so that we can reuse the same funct for different purposes

print("------------------------------------")

def greeting(name):
    print("Hello " + name)


greeting("Mithun")

print("------------------------------------")

# wap to convert the temp from celcius to farenheit where the temp is 25°C

# f = 9/5 * c + 32

def conversion(temp):
    farenheit = ( (9/5) * temp) + 32
    print(farenheit)

conversion(34)


# ---------------- input function ---------------------------------

# print("------------------------------------")

# age = int(input("Enter your age : "))

# print(age)

# print(type(age))

# by default the input func takes the input in string
# so if we want it to take the input in integer then we need to use the int()

# print("------------------------------------")

# wap to find the average of marks in 3 subjects - Maths , Physics & Chemistry
# def average(x,y,z):
#     avg=(x+y+z)/3
#     print(avg)


# x=int(input("Enter Math score: "))
# y=int(input("Enter Physics score: "))
# z=int(input("Enter Chemisty score: "))

# average(x,y,z)

print("------------------------------------")

# return statement will return the value to wherever the function is called 
def sum(a,b):
    return a+b

print(sum(10,20))


# ---------------- if-else ---------------------------------

# print("------------------------------------")

# program to check if a user is eligible for vote or not

# age = int(input("Enter your age : "))

# if age < 18 :
#     print("Sorry, can't vote")

# elif age == 18:
#     print("You can get your voter card!!")

# else :
#     print("You can vote!!")


# ---------------- random func ---------------------------------

print("------------------------------------")

import random

x = random.randint(1,5)
print(x)

# wap to create a calculator in python by asking the user to enter 2 nos and also give the user 4 choices --> 1)Add , 2)SUbtraction , 3)Multiplication , 4)Division

def calculate(x,y,z):
    if z == 1 :
        sol = x+y
        print("You chose Addition - " , sol)
    if z == 2:
        sol=x-y
        print("You chose Subtraction - " ,sol)
    if z == 3:
        sol=x * y
        print("You chose Multiplication - " ,sol)
    if z == 4:
        sol=x/y
        print("You chose Division - " ,sol)
        
x=int(input("Enter first number for equation"))
y=int(input("Enter second number for equation"))
z = int(input("Enter your choice , 1 for Add, 2 for Subtraction, 3 for Multiplication, 4 for Division - "))

calculate(x,y,z)

y = [23,78,90,45,77]
#    0  1  2  3  4   

# index number represents the positions of the elements in the list
# it starts with 0

# listname[index number]
print(y[4])

# len() --> returns total number of elements
print(len(y))

# -------------- Indexing are of 2 types ~ Positive & Negative -------------------------------

#    0     1    2     3     4    5    6    7    8    9   ---> +ve Indexing --> left to right --> starts with 0
x = [89 , 90 ,"abc" , 56 , 80 , 23 , 78 , 99 , 45 , 77]
#   -10   -9   -8     -7   -6   -5   -4   -3   -2   -1   <--- -ve Indexing --> right to left --> starts with -1

print("---------------------------------")

print(x[-6])

# accessing/traversing through a list 

# [ starting element's index number : ending element's index number + 1 ]

print("---------------------------------")
# [56 , 80 , 23 , 78 , 99]
print(x[3:8])

print("---------------------------------")
# [90 ,"abc" , 56 , 80 , 23 , 78]
print(x[1:7])

print("---------------------------------")
# [23 , 78 , 99 , 45 , 77]
# if u want all the elements from a certain number to the end of the list --> [ starting element's index number : ]
print(x[-5:])

print("---------------------------------")
# [89 , 90 ,"abc" , 56 ]
print(x[:-6])


# ----------------------------------- for loop ----------------------------------------------------------

a = [23 , 78 , 99 , 45 , 77]

print("---------------------------------")

for i in a:
    print(i)

print("---------------------------------")

# range(starting number , ending number + 1 , step)
# step --> represents the value by which you're either incrementing or decrementing the element
# by default step is 1

# staring no > ending number  --> step can be -ve

for i in range(1 , 11 , 3):
    print(i)

# print all the numbers from 50 - 105 which are multiples of 5
for i in range(50,106,5):
    print(i)

# print all the numbers from 90 - 10 which are multiples of 9
for i in range(90,11,-9):
    print(i)


# COUNT the occurance of 62 in the list
marks = [75, 98, 89, 86, 79, 62, 78, 61, 90, 97, 92, 61, 64, 97, 82, 69, 87, 96, 65, 75, 85, 76, 95, 83, 62, 80, 80, 77, 94, 71, 86, 94, 85, 99, 77, 68, 92, 91, 99, 90]

counter = 0
for i in marks:
    if i == 62:
        counter += 1

print(counter)

# print all the even numbers from the list

# % --> modulus operator --> returns remainder

num = [75, 98, 89, 86, 79, 62, 78, 61, 90, 97, 92, 61, 64, 97, 82, 69, 87, 96, 65, 75, 85, 76, 95, 83, 62, 80, 80, 77, 94, 71, 86, 94, 85, 99, 77, 68, 92, 91, 99, 90]

for i in num :
    if i % 2 == 0:
        print(i)

