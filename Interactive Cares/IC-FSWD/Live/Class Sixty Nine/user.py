class HospitalAdmin:
    def __init__(self, id, name, password):
        self.id = id
        self.name = name
        self.password = password

    def save(self):
        with open('admin.csv', 'a') as file:
            file.write(f"{self.id},{self.name},{self.password}\n")


class Patient:
    def __init__(self, id, name, password):
        self.id = id
        self.name = name
        self.password = password
        self.date = None
        self.disease = None
        self.description = None

    def add_description(self, name, description, date):
        self.disease = name
        self.description = description
        self.date = date

    def save(self):
        with open('admin.csv', 'a') as file:
            file.write(
                f"{self.id},{self.name},{self.password},{self.date},{self.disease},{self.description}\n"
            )
