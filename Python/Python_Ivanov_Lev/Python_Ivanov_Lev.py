

print("===========ZADANIE 1======================")
name = input("Name: ")
surname = input("Surname: ")
age = input("Age: ")

print("==============================================================")
format = "Name: {}, Surname: {}, Age: {}".format(name, surname, age)
print("format:")
print(format)

print("==============================================================")
fstring = f"Name: {name}, Surname: {surname}, Age: {age}"
print("f-string:")
print(fstring)


print("===========ZADANIE 2======================")

while True:
    try:
      num_str = input("Input number: ")
      num = int(num_str)

      if num <= 0:
        print("STOP!! A positive number (> 0)")
      else:
        if num %2 == 0:
          print(f"Digit {num} even number")
        else:
          print(f"Digit {num} an odd number")
        break
    except ValueError:
      print("STOP-error: The entered number is not")



print("===========ZADANIE 3======================")
age_input = input("Age: ")
try:
        age = int(age_input)
        if age < 0:
            print("Err! Age is negative (-age)")
        elif age >= 60:
            print("It's time to pensia :)")
        elif age >= 18:
            print("Are you an adult")
        else:
            print("Are you a minor")
except ValueError:
        print("Err - not a number")


print("===========ZADANIE 4======================")
while True:
    num = input("Input Digit: ")
    if num == "exit":
        print("Exit...")
        break
    elif num.lstrip('-').isdigit():
        print(f"In this number {len(num.lstrip('-'))} nubmers.")
    else:
        print("Err - not a number")