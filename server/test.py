import requests

BASE = "http://127.0.0.1:5000"
# BASE = "http://155.138.150.43:5000/"

files = {"1" : open('C:/Users/14166/Desktop/download.png', 'rb'),
         "2" : open('C:/Users/14166/Desktop/sample2.png', 'rb'),}
print(files)
response = requests.post(BASE+"/upload", files=files)
print(response)
# data = [{'likes':111, 'name':'shawn', 'views':123},
#         {'likes':143, 'name':'hacks', 'views':333},
#         {'likes':10000, 'name':'western', 'views':444}
#
# ]
#
# for i in range(len(data)):
#     response = requests.put(BASE+"/video/"+str(i), data[i])
#     print(response.json())
# #
# # input()
#
# response = requests.patch(BASE+"/video/1", {"views":999999})
# print(response.json())
