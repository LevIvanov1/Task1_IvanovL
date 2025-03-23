
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