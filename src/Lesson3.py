#רשימות
#רשימה רגילה
#רשימה יכולה להכיל איברים מטיפוסים שונים
#x = [1,2,3,4,5]
#הוספת איבר לרשימה
#x.append(6)
#print(x)
#ניתן להוסיף ע"י פקודת חיבור
#מומלץ להימנע מכך, כיון שיכול ליצור רשימה חדשה
#x + [7]
#print(x)
#גישה לאיבר
#x[2] = 8
#print(x)
#מחיקת איבר
#del x[3]
#print(x)
#הכפלת רשימה
#y = x*3
#print(x)
#print(len(y))
#slicing: חיתוך
#קבלת תת רשימה ממקום מסוים עד מקום מסוים בדילוג רצוי
#x = [1,2,3,4,5,3,7,8,3,10]
#start:end (לא כולל)
#y = x[2:8]
#print(y)
#מתחילת הרשימה עד המקום המצוין
#print(x[:5])
#מהמקום המצוין עד סוף הרשימה
#print(x[5:])
#דילוג ע"י 2 נקודתיים
#מדלג כל 2 איברים
#print(x[::2])
#דילוג במינוס משמעותו מעבר מסוף הרשימה
#print(x[::-1])
#גישה לאיבר האחרון גם אם לא ידוע גודל הרשימה
#print(x[-1])
#משתנים בפייתון הם מצביעים
#לכן הצבה של משתנה אחד למשתנה שני
#משמעותה כהצבה למצביע
#כל שינוי שנעשה במשתנה אחד ישפיע על המשתנה השני
#y=x
#x[3]=22
#print(y)
#כדי לקבל עותק של רשימה, 
# ניתן להשתמש בחיתוך של רשימה שלמה
#y = x[:]
#x[3]=4
#print(y)
#clear: הסרת כל האיברים מהרשימה
#extends: הוספת רשימה לרשימה
#index: מחזיר מיקום של איבר ברשימה
#insert: מוסיף איבר במיקום מסוים
#revers: הפיכת רשימה
#count: מחזיר כמה פעמים איבר מופיע ברשימה
#print(x.count(3))
#רשימה מקוננת
#list = ['a', 'b','x','y', [1,2,3],'c','d']
#גישה למיקום של תחילת הרשימה המקוננת יביא את כל הרשימה
#print(list[4])
#ניתן לגשת למיקום מסוים בתוך הרשימה המקוננת
#print(list[4][2])
#צורת עבודה זו שימושית במערך מחרוזת
#fruits = ["apple", "orange", "strawebbery", "mellon"]
#print(fruits[2])
#print(fruits[2][1:3])
#Tuple: רשימה בגודל קבוע שלא ניתן לשנות את ערכיה
#טאפל מוגדר ע"י סוגריים עגולות בשונה מרשימה ע"י סוגריים מרובעות
#myTuple=(1,2,3,4,5)
#לא ניתן לשנות את איברי הטאפל, במידה וננסה לעשות זאת נקבל שגיאה
#'tuple' object does not support item assignment
#myTuple[0]=8
#t1 = (4,5,6)
#ניתן לאחד בין טאפלס אך אסור לאחד טאפל ורשימה רגילה
#all = myTuple + t1
#print(all)
#חיתוך
#print(all[:4])
#השמה בין 2 טאפלס
#אם הטאפלס מכיל משתנים ולא קבועים
#ניתן לבצע השמה ישירה
#(x,y) = (1,2)
#print((x,y))
#באמצעות השמה ישירה ניתן להחליף בין 2 משתנים בפקודה אחת
#(x,y)=(y,x)
#print((x,y))
#השימוש בטאפלס מיועד לרשימת קבועות 
#או להחזרת מספר איברים מפונקציה
#כיון שטאפל מחושב כמשתנה יחיד
#def myFunc():
   # return ("aaaa", "bbbb", "cccc")

#print(myFunc())
#הפונקציה tuple
#מקבל רשימה והופכת אותה לטאפל
#list = [1,2,3]
#t = tuple(list)

#Set - רשימה של ערכים ללא כפילויות
#הרשימה מוגדרת בתוך צומדיים
#הגדרת set
#ע"י הפונקציה set
#set1 = set()
#או ע"י הכנסת ערכים בתוך צומדיים
#לא ניתן להגדיר סט ע"י צומדיים ריקות

#mySet = {1, 2, 3, 4, 5}
#יצירת סט מתוך רשימה קיימת
#אם הרשימה כוללת כפילויות , מסיר אותם
#list = [1,2,3,4, 3, 4]
#newSet = set(list)
#print(newSet)
#mySet.add(9)
#הסרת איבר, במידה והאיבר אינו קיים יחזיר שגיאה
#mySet.remove(2)
#במידה והאיבר לא קיים לא יחזיר שגיאה
#mySet.discard(8)
#copy: שכפול הרשימה
#clear: הסרת כל האיברים

#Dictionary - רשימה מילונית
#יצירת רשימה מילונית ע"י הפונקציה dict
myDict = dict()
#או ע"י צומדיים
myDict2 = {}
#הכנסת איברים לרשימה מילונית
#כל איבר מורכב ממפתח וערך
myDict = {1:"sara", 2:"rivka", 3:"lea"}
#הוספת איבר למילון ע"י יצירת מפתח והשמת ערך
myDict[4] = "lea"
print(myDict)
#המפתחות ברשימה יכולים להיות מכל טיפוס לא רק מספרי
myDict = {"Isreal":"Jerualem", "USA":"Washington", "Russia":"Moscowa"}
myDict["England"] = "london"
print(myDict)
#גישה לאיבר לפי המפתח
#אם האיבר כבר קיים, משנה את הערך שלו
myDict["USA"] = "new york"
print(myDict)
#גישה לאיבר שאינו קיים מחזיר שגיאה
#KeyError: 'Jappan'
#in: אופרטור זה מחזיר ערך בוליאני האם איבר קיים ברשימה
if "Jappan" in myDict:  
    print(myDict["Jappan"])
del myDict["England"]
print(myDict)
#כיון שהערכים במילון לא נשמרים לפי סדר הכנסתם
#לא ניתן להמיר מילון לרשימה רגילה

myDict = {"Isreal":"Jerualem", "USA":"Washington", "Russia":"Moscowa"}
myDict["England"] = "london"
#מעבר בלולאה על רשימה מילונית

#דיפולטיבית, משתנה הלולאה עובר על רשימת המפתחות
#for item in myDict:
#   print(item)

#ניתן להגדיר שמשתנה הלולאה יעבור על רשימת הערכים
#for capital in myDict.values():
 #  print(capital)

#ניתן להגדיר משתנים עבור המפתח והערך ולעבור על שניהם
#for state, capital in myDict.items():
#   print(state + ":" + capital)

myDict = {"Israel":"Jerualem", "USA":"Washington", "Russia":"Moscowa"}
myDict["England"] = "london"
#פונקציות על רשימה מילונית
#clear: הסרת כל האיברים ברשימה
#copy: העתקת רשימה
#get: מקבל מפתח ומחזיר את הערך
#במידה והמפתח לא קיים מחזיר none
#capital = myDict.get("Israel")
#print(capital)

#print(myDict.keys())
#update: הוספת איבר ע"י פונקציה
myDict.update({"Jappan":"Tokyo"})

#print(myDict)
#pop: הסרת איבר לפי מפתח
#מחזיר את ערך האיבר שהוסר
#popItem: מסיר את האיבר האחרון ברשימה
delItem = myDict.pop("Jappan")
print(delItem)
print(myDict)
#setDefault: מקבלת אובייקט ומחפשת אותו
#אם אינו קיים - מוסיפה