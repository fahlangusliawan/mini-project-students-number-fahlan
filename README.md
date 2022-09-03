# mini-project-students-number-fahlan

## Penjelasan singkat project
![my project erd](https://drive.google.com/file/d/1Zp5lnMc8m-gI_8a16WcwpBz3FV9OvmrC/view?usp=sharing)
Ini adalah mini project untuk meng-generate NPM(Nomor Pokok Mahasiswa) secara otomatis ketika mahasiswa didaftarkan. ketika mahasiswa mendaftar akan dimasukan data diri, fakultas serta jurusan yg ia daftar. Sistem akan menghasilkan npm secara otomatis serta mengisi tabel tagihan secara otomatis. yang berisi tagihan spp semestar 1.
mini-project ini memiliki 4 buah tabel yaitu tabel faculties, programs, students dan bills.
- faculties : berisi data id dan nama fakultas
- programs : berisi data id, nama dan id fakultas dari jurusan yang ada
- students : berisi data mahasiswa
- bills : berisi tagihan pembayaran mahasiswa
Keempat tabel ini sudah dengan CRUD masing-masing.

## endpoint dan beberapa hasil tes

### tabel faculties

endpoint: localhost:8181/faculty
method: **GET**
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": [
        {
            "id": "01",
            "name": "FMIPA"
        },
        {
            "id": "02",
            "name": "FH"
        },
        {
            "id": "03",
            "name": "FK"
        }
    ]
}
```

endpoint: localhost:8181/faculty
method: **POSTT**
body json:
```
        {
            "id": "04",
            "name": "FM"
        }
```
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": {
        "id": "04",
        "name": "FM"
    }
}
```

endpoint: localhost:8181/faculty
method: **PUT**
body json:
```
        {
            "id": "04",
            "name": "FT"
        }
```
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": {
        "id": "04",
        "name": "FT"
    }
}
```

endpoint: localhost:8181/faculty/04
method: **DELETE**
body json:
hasil:
```
{
    "code": 200,
    "msg": "SUCCESS",
    "data": "Delete with ID 04 success"
}
```

### programs
endpoint: localhost:8181/programs
method: **GET**
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": [
        {
            "id": "01",
            "name": "Fisika",
            "faculties_id": "01",
            "faculties": {
                "id": "01",
                "name": "FMIPA"
            }
        },
        {
            "id": "02",
            "name": "Kimia",
            "faculties_id": "01",
            "faculties": {
                "id": "01",
                "name": "FMIPA"
            }
        },
        {
            "id": "03",
            "name": "Biology",
            "faculties_id": "01",
            "faculties": {
                "id": "01",
                "name": "FMIPA"
            }
        },
        {
            "id": "04",
            "name": "Ilmu Hukum",
            "faculties_id": "02",
            "faculties": {
                "id": "02",
                "name": "FH"
            }
        },
        {
            "id": "05",
            "name": "Ilmu Hukum Islam",
            "faculties_id": "02",
            "faculties": {
                "id": "02",
                "name": "FH"
            }
        }
    ]
}
```

endpoint: localhost:8181/programs
method: **POSTT**
body json:
```
        {
            "id": "06",
            "name": "Geografi",
            "faculties_id": "01"
        }
```
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": {
        "id": "06",
        "name": "Geografi",
        "faculties_id": "01",
        "faculties": {
            "id": "01",
            "name": "FMIPA"
        }
    }
}
```

endpoint: localhost:8181/programs
method: **PUT**
body json:
```
        {
            "id": "04",
            "name": "Geografi update",
            "faculties_id": "01"
        }
```
hasil:
```
{
    "code": 200,
    "msg": "SUCCESS",
    "data": {
        "id": "04",
        "name": "Geografi update",
        "faculties_id": "01",
        "faculties": {
            "id": "01",
            "name": "FMIPA"
        }
    }
}
```

endpoint: localhost:8181/programs/03
method: **DELETE**
body json:
hasil:
```
{
    "code": 200,
    "msg": "SUCCESS",
    "data": "Delete with ID 03 success"
}
```

### tabel students

endpoint: localhost:8181/students/2001010003
method: **GET**
hasil:
```
{
    "code": 200,
    "msg": "SUCCESS",
    "data": {
        "id": "0003",
        "npm": "2001010003",
        "name": "zahra",
        "gender": false,
        "semester": 1,
        "address": "Jakarta",
        "year": 2020,
        "faculties_id": "01",
        "programs_id": "01"
    }
}
```

endpoint: localhost:8181/students
method: **GET**
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": [
        {
            "id": "0001",
            "npm": "1902050001",
            "name": "budi",
            "gender": true,
            "semester": 1,
            "address": "Bali",
            "year": 2019,
            "faculties_id": "02",
            "programs_id": "05"
        },
        {
            "id": "0002",
            "npm": "1902050002",
            "name": "joko",
            "gender": true,
            "semester": 1,
            "address": "Bali",
            "year": 2019,
            "faculties_id": "02",
            "programs_id": "05"
        },
        {
            "id": "0003",
            "npm": "2001010003",
            "name": "zahra",
            "gender": false,
            "semester": 1,
            "address": "Jakarta",
            "year": 2020,
            "faculties_id": "01",
            "programs_id": "01"
        },
        {
            "id": "0004",
            "npm": "1801020004",
            "name": "nisa",
            "gender": false,
            "semester": 1,
            "address": "Jakarta",
            "year": 2018,
            "faculties_id": "01",
            "programs_id": "02"
        },
        {
            "id": "0005",
            "npm": "1901020005",
            "name": "jono",
            "gender": true,
            "semester": 1,
            "address": "Bandung",
            "year": 2019,
            "faculties_id": "01",
            "programs_id": "02"
        }
    ]
}
```

endpoint: localhost:8181/students
method: **POST**
body json:
```
        {
            "id": "0006",
            "name": "susan",
            "gender": false,
            "semester": 1,
            "address": "Palembang",
            "year": 2021,
            "faculties_id": "01",
            "programs_id": "02"
        }
```
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": {
        "id": "0006",
        "npm": "2101020006",
        "name": "susan",
        "gender": false,
        "semester": 1,
        "address": "Palembang",
        "year": 2021,
        "faculties_id": "01",
        "programs_id": "02"
    }
}
```

endpoint: localhost:8181/students
method: **PUT**
body json:
```
        {
            "id": "0006",
            "name": "susana",
            "gender": false,
            "address": "Pekan baru"
        }
```
hasil:
```
{
    "code": 200,
    "msg": "SUCCESS",
    "data": {
        "id": "0006",
        "npm": "2101020006",
        "name": "susana",
        "gender": false,
        "semester": 1,
        "address": "Pekan baru",
        "year": 2021,
        "faculties_id": "01",
        "programs_id": "02"
    }
}
```

endpoint: localhost:8181/students/0002
method: **DELETE**
body json:
hasil:
```
{
    "code": 200,
    "msg": "SUCCESS",
    "data": "Delete with ID 0002 success"
}
```

### tabel bills

endpoint: localhost:8181/bills
method: **GET**
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": [
        {
            "id": 1,
            "students_npm": "1902050002",
            "bill_name": "semester 1",
            "amount": 1000,
            "status": "Not Paid"
        },
        {
            "id": 3,
            "students_npm": "1901020005",
            "bill_name": "semester 1",
            "amount": 5000000,
            "status": "Not Paid"
        },
        {
            "id": 4,
            "students_npm": "2101020006",
            "bill_name": "semester 1",
            "amount": 5000000,
            "status": "Not Paid"
        }
    ]
}
```

endpoint: localhost:8181/bills
method: **POST**
body json:
```
{
    "students_npm":"2001010003",
    "bill_name":"semester 1",
    "amount":"1000",
    "status":"Not Paid"
}
```
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": {
        "id": 5,
        "students_npm": "2001010003",
        "bill_name": "semester 1",
        "amount": 1000,
        "status": "Not Paid"
    }
}
```

endpoint: localhost:8181/bills
method: **PUT**
body json:
```
{
    "students_npm":"2001010003",
    "bill_name":"semester 1",
    "amount":"1000",
    "status":"Paid"
}
```
hasil:
```
{
    "code": 200,
    "msg": "Success",
    "data": {
        "id": 5,
        "students_npm": "2001010003",
        "bill_name": "semester 1",
        "amount": 1000,
        "status": "Paid"
    }
}
```

endpoint: localhost:8181/bills/04
method: **DELETE**
body json:
hasil:
```
{
    "code": 200,
    "msg": "SUCCESS",
    "data": "Delete with ID 04 success"
}
```
