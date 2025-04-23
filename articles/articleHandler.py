#Just allows you to order the articles so the JS dynamically loads the order of them for the nav bar
import json
import os

def clear_console():
    os.system('cls' if os.name == 'nt' else 'clear')

clear_console()

def listArticles():
    with open("articles/articles.json", "r") as file:
        articleOrder = json.load(file)
        for article in articleOrder:
            print(f"{article["order"]}: {article["name"]} | {article["src"]}")
        file.close()
        print("\n")

def change_position():
    clear_console()

    listArticles()

    articleOrder = None

    path = input("Enter Article Path: ")
    newPos = int(input("Enter New Position: "))

    clear_console()

    with open("articles/articles.json", "r") as file:
        articleOrder = json.load(file)
        file.close()

    articleOrder = sorted(articleOrder, key=lambda d: d['order'])
    
    movingArticle = None

    for i, article in enumerate(articleOrder):
        if article["src"] == path:
            movingArticle = articleOrder.pop(i)
            movingArticle["order"] = newPos

    articleOrder.insert(newPos, movingArticle)

    for article in articleOrder[newPos+1:]:
        article['order'] = article['order'] + 1

    with open("articles/articles.json", "w") as file:
        json.dump(articleOrder, file)
        file.close()


def append():
    clear_console()

    listArticles()

    articleOrder = None

    path = input("Enter Article Path: ")
    name = input("Enter Article Name")

    clear_console()

    with open("articles/articles.json", "r") as file:
        articleOrder = json.load(file)
        file.close()

    print(articleOrder)
    with open("articles/articles.json", "w") as file:
        articleOrder.append({"src" : path, "order" : len(articleOrder), "name" : name})
        json.dump(articleOrder, file)
        file.close()

def remove():
    clear_console()

    listArticles()

    articleOrder = None

    path = input("Enter Article Path To Remove: ")

    clear_console()

    with open("articles/articles.json", "r") as file:
        articleOrder = json.load(file)
        file.close()

    print(articleOrder)
    with open("articles/articles.json", "w") as file:
        for i, article in enumerate(articleOrder): 
            if article["src"] == path:
                articleOrder.pop(i)
                for article2 in articleOrder[i:]:
                    article2["order"] = article2["order"] - 1

        json.dump(articleOrder, file)
        file.close()

def switch():
    clear_console()

    listArticles()

    articleOrder = None

    path = input("Enter Article Path 1: ")
    path2 = input("Enter Article Path 2: ")

    clear_console()

    with open("articles/articles.json", "r") as file:
        articleOrder = json.load(file)
        file.close()

    articleA = None
    articleB = None

    with open("articles/articles.json", "w") as file:
        for i, article in enumerate(articleOrder): 
            if article["src"] == path:
                articleA = i
            elif article["src"] == path2:
                articleB = i

        tempSpot = articleOrder[articleA]["order"]

        articleOrder[articleA]["order"] = articleOrder[articleB]["order"]

        articleOrder[articleB]["order"] = tempSpot

        json.dump(articleOrder, file)
        file.close()


while True:

    print("1: Append To End")
    print("2: Move To Spot")
    print("3: Remove")
    print("4: Change Position")
    print("5: Quit")

    match input(""):
        case "1":
            append()
        case "2":
            switch()
        case "3":
            remove()
        case "4":
            change_position()
        case "5":
            clear_console()
            print("Done")
            break
        case _:
            clear_console()
            print("Invalid Input")
            




