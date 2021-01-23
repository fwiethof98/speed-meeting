ssh gathr@cloud.johannes-prodinger.de -p 50000 python3 sqlite_to_csv.py
scp -P 50000 gathr@cloud.johannes-prodinger.de:~/data.csv data.csv
