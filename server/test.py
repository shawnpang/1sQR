import requests

BASE = "http://127.0.0.1:5000"

data = [{'likes':111, 'name':'shawn', 'views':123},
        {'likes':143, 'name':'hacks', 'views':333},
        {'likes':10000, 'name':'western', 'views':444}

]

for i in range(len(data)):
    response = requests.put(BASE+"/video/"+str(i), data[i])
    print(response.json())
#
# input()

response = requests.patch(BASE+"/video/1", {"views":999999})
print(response.json())
