from hospital import *


def show_menu():
    options = [
        'Admin Login',
        'Patient Login',
        'Doctor Login',
        'View Reports',
        'Doctor\'s Appointment',
    ]
    for i in range(len(options)):
        print(i + 1, ".", options[i])

    return int(input(":: "))


h = Hospital()

while True:
    x = show_menu()

    if x == 1:
        if not h.admin_login():
            continue
        else:
            break
