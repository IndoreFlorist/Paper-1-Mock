var rawQuestions = [
    {
        q: "<b>June 2014</b><br>A man started walking from his house towards south. After walking 6 km, he turned to his left and walked 5 km. Then he walked further 3 km after turning left. He then turned to his left and continued his walk for 9 km. How far is he away from his house ?",
        opts: ["(A) 3 km", "(B) 4 km", "(C) 5 km", "(D) 6 km"],
        ans: 2,
        exp: "<b>(C) 5 km</b><br>Start at I and walk 6 km South to R. Turn left (East) and walk 5 km. Turn left (North) and walk 3 km. Turn left (West) and walk 9 km to P. The final point P is 4 km West and 3 km South of the starting point, so the distance = &radic;(3&sup2; + 4&sup2;) = 5 km."
    },
    {
        q: "<b>DEC 2014</b><br>A is brother of B. B is the brother of C. C is the husband of D. E is the father of A. D is related to E as",
        opts: ["(A) Daughter", "(B) Daughter-in-law", "(C) Sister-in-law", "(D) Sister"],
        ans: 1,
        exp: "<b>(B) Daughter-in-law</b><br>E(+) is the father of A(+), B(+) and C(+) (A &harr; B &harr; C are brothers). C(+) = D(-), so D is the wife of E's son, i.e. E's daughter-in-law."
    },
    {
        q: "<b>DEC 2014</b><br>Namita and Sumita are brilliant and studious. Anita and kaberi are obedient and irregular. Babita and Namita are irregular but brilliant. Sumita and Kabita are regular and obedient. Who among them is/are brilliant, obedient, regular and studious?",
        opts: ["(A) Sumita alone", "(B) Namita and Samita", "(C) Kabita alone", "(D) Anita alone"],
        ans: 0,
        exp: "<b>(A) Sumita alone</b><br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><td>Brilliant</td><td>Studious</td><td>Obedient</td><td>Irregular</td><td>Regular</td></tr><tr><td>Namita</td><td>Sumita</td><td>Anita</td><td>Anita</td><td>Sumita</td></tr><tr><td>Sumita</td><td>Namita</td><td>Kaberi</td><td>Kaberi</td><td>Kabita</td></tr><tr><td>Babita</td><td></td><td>Sumita</td><td>Babita</td><td></td></tr><tr><td></td><td></td><td>Kabita</td><td>Namita</td><td></td></tr></table>Only Sumita appears in the Brilliant, Studious, Obedient and Regular columns."
    },
    {
        q: "<b>June 2015</b><br>One day Prakash left home and walked 10 km towards south, turned right and walked 5 km, turned right and walked 10 km and turned left and walked 10 km. How many km will he have to walk to reach his home straight?",
        opts: ["(A) 30", "(B) 10", "(C) 20", "(D) 15"],
        ans: 3,
        exp: "<b>(D) 15</b><br>The final point is 'E' and the initial point is 'A' which is home.<br>The distance between 'A' and 'E' will be: AE = AD + DE = 5 + 10 = 15 km"
    },
    {
        q: "<b>June 2015</b><br>A girl introduced a boy as the son of the daughter of the father of her uncle. The boy is related to the girl as:",
        opts: ["(A) Son", "(B) Cousin Brother", "(C) Uncle", "(D) Nephew"],
        ans: 1,
        exp: "<b>(B) Cousin Brother</b><br>Grand Father(+) has children: Father(+) (the girl's father), Uncle(+) and Daughter(-). The Girl(-) is the child of Father; the Boy(+) is the son of the Daughter(-). So the boy is the girl's cousin brother."
    },
    {
        q: "<b>DEC 2015</b><br>Anil after travelling 6 km towards East from his house realized that he has travelled in a wrong direction, lie turned and travelled 12 km towards West, turned right and travelled 8 km to reach his office. The straight distance of the office from his house is:",
        opts: ["(A) 20 km", "(B) 14 km", "(C) 12 km", "(D) 10 km"],
        ans: 3,
        exp: "<b>(D) 10 km</b><br>Here Point O is the home of Anil and Point A is the office. In right triangle AOB, using Pythagoras theorem,<br>(OA)&sup2; = (OB)&sup2; + (AB)&sup2;<br>(OA)&sup2; = 36 + 64<br>(OA)&sup2; = 100<br>OA = 10"
    },
    {
        q: "<b>DEC 2015</b><br>A party was held in which a grandmother, father, mother, four sons, their wives and one son and two daughters to each of the sons were present. The number of females present in the party is:",
        opts: ["(A) 12", "(B) 14", "(C) 18", "(D) 24"],
        ans: 1,
        exp: "<b>(B) 14</b><br>Grandmother = 1<br>Mother = 1<br>four sons, their wives = 4<br>two daughters to each of the sons = 8<br>Total females = 1 + 1 + 4 + 8 = 14"
    },
    {
        q: "<b>DEC 2015</b><br>P and Q are brothers. R and S are sisters. The son of P is brother of S. Q is related to R as:",
        opts: ["(A) Son", "(B) Brother", "(C) Uncle", "(D) Father"],
        ans: 2,
        exp: "<b>(C) Uncle</b><br>P(+) &harr; Q(+) are brothers. P's Son(+) &harr; S(-) &harr; R(-) are siblings. So R is the daughter of P, and Q is the brother of R's father, i.e. R's uncle."
    },
    {
        q: "<b>JULY 2016</b><br>A person walks 10 m in front and 10 m to the right. Then every time turning to his left, he walks 5, 15 and 15 m respectively. How far is he from his starting point?",
        opts: ["(A) 20 m", "(B) 15 m", "(C) 10 m", "(D) 5 m"],
        ans: 3,
        exp: "<b>(D) 5 m</b><br>Starting point: 10 m North, 10 m East, then (turning left each time) 5 m North, 15 m West, 15 m South. The final point is on the same line as the starting point, 5 m to its West. So he is 5 m from the starting point."
    },
    {
        q: "<b>JULY 2016</b><br>A sister of B. F is daughter of G. C is mother of B. D is father of C. E is mother of D. A is related to D as",
        opts: ["(A) Grand daughter", "(B) Daughter", "(C) Daughter-in-law", "(D) Sister"],
        ans: 0,
        exp: "<b>(A) Grand daughter</b><br>E(-) &rarr; D(+) &rarr; C(-) &rarr; A(-) &harr; B. A is the daughter of C, and C is the daughter of D, so A is the granddaughter of D."
    },
    {
        q: "<b>NOV 2017</b><br>Ajay is a friend of Rakesh, Pointing to an old man Ajay asked Rakesh who is he? Rakesh said &ldquo;His son is my son's uncle&rdquo;. The old man is related to Rakesh as:",
        opts: ["(a) Father-in law", "(b) Father", "(c) Uncle", "(d) Grandfather"],
        ans: 1,
        exp: "<b>(b) Father</b><br>Old man(+) &rarr; Rakesh(+) &harr; Uncle(+); Rakesh &rarr; Son(+). The old man's son is the uncle of Rakesh's son, i.e. Rakesh's brother. So the old man is Rakesh's father."
    },
    {
        q: "<b>NOV 2017</b><br>A postman walked 20 m straight from his office, turned right and walked 10 m. After turning left he walked 10 m and after turning right walked 20 m. He again turned right and walked 70m. How far he is from his office.",
        opts: ["(1) 40 m", "(2) 60 m", "(3) 20 m", "(4) 50 m"],
        ans: 3,
        exp: "<b>(4) 50 m</b><br>The final point is 30 m (in the direction of the first walk's opposite side) and 40 m to the side from the office.<br>Distance from his office = &radic;(30&sup2; + 40&sup2;) m = &radic;(900 + 1600) m = &radic;2500 m = 50 m"
    },
    {
        q: "<b>JULY 2018</b><br>Introducing, Rakesh to her husband a women said, &ldquo;His brother's father is the only son of my grandfather&rdquo;. The woman is related to Rakesh as:",
        opts: ["(1) Aunt", "(2) Mother", "(3) Sister", "(4) Daughter"],
        ans: 2,
        exp: "<b>(3) Sister</b><br>Grand Father(+) &rarr; Son(+) &rarr; Woman(-); Rakesh(+) &harr; Woman(-) = Husband(+). The only son of the woman's grandfather is her father, who is also Rakesh's father (his brother's father). So the woman is Rakesh's sister."
    },
    {
        q: "<b>JUNE 2019</b><br>Among the five friends, Vineet is taller than Monika, but not as tall as Ram. Jacob is taller than Dalip but shorter than Monika. Who is the tallest in their group?",
        opts: ["(A) Ram", "(B) Monika", "(C) Vineet", "(D) Jacob"],
        ans: 0,
        exp: "<b>(A) Ram</b><br>1) Vineet is taller than Monika, but not as tall as Ram &rarr; Ram &gt; Vineet &gt; Monika<br>2) Jacob is taller than Dalip but shorter than Monika &rarr; Monika &gt; Jacob &gt; Dalip<br>From the above two we can get the final arrangement: Ram &gt; Vineet &gt; Monika &gt; Jacob &gt; Dalip<br>Ram is the tallest in the group."
    },
    {
        q: "<b>Dec 2019</b><br>A, B, C, D, E and F are six members in a family in which there are two married couples. E, a teacher is married to the doctor, who is the mother of C and F. B, the layer is married to A. A has one son and one grandson. Of the two married ladies, one is a housewife. There is also one student and one male engineer in the family. How is A related to C?",
        opts: ["(A) Grandfather", "(B) Mother", "(C) Sister", "(D) Grandmother"],
        ans: 3,
        exp: "<b>(D) Grandmother</b><br>The following information can be deduced from the above information:<br>D (female) is a doctor and A (female) is a housewife.<br>E is the son of B and A. That means C and F are grandchildren of A.<br>The gender of C and F cannot be determined.<br>But in all cases, A is the grandmother of C.<br>(B, Lawyer) = Spouse = (A, Housewife); (E, Teacher) = Spouse = (D, Doctor); C and F are siblings (children of E and D)."
    },
    {
        q: "<b>Nov 2021</b><br>Smita rode her scooty Northwards, then turned left and then again rode to her left 4 km. She found herself exactly 2 km West of her starting point. How far did she ride Northward initially?",
        opts: ["(A) 2 km", "(B) 5 km", "(C) 4 km", "(D) 6 km"],
        ans: 2,
        exp: "<b>(C) 4 km</b><br>She rides North from A to C, turns left (West) and rides to D, then turns left (South) and rides 4 km to B. B is exactly 2 km West of A, so the distance C&ndash;D = 2 km and the Northward distance AC = DB = 4 km."
    },
    {
        q: "<b>Nov 2022</b><br>One day a man left his home for a morning walk and went 12 km southwards. He then turned right and walked 8 km. Again turned right and walked 12 km, turned left and walked 10 km. How many Killometers the man has to walk to reach straight to his home?",
        opts: ["(A) 22 km", "(B) 18 km", "(C) 20 km", "(D) 24 km"],
        ans: 1,
        exp: "<b>(B) 18 km</b><br>Path: A &rarr; 12 km South to B &rarr; 8 km West to C &rarr; 12 km North to D &rarr; 10 km West to E. D lies 8 km West of A on the same line, and E is a further 10 km West.<br>Distance between EA = ED + DA = 10 + 8 = 18 km"
    },
    {
        q: "<b>Feb 2023</b><br>Raman said to Aman, &ldquo;That boy playing football there is the younger of the two brothers of the daughter of my father's wife&quot;. How is the boy playing football related to Raman?",
        opts: ["(A) Cousin", "(B) Brother-in-law", "(C) Son", "(D) Brother"],
        ans: 3,
        exp: "<b>(D) Brother</b><br>Grand Father(+) &rarr; Father(+) = Wife(-). Father's wife is Raman's mother; her daughter is Raman's sister, who has two brothers: Raman and the boy. Since the boy is the younger of the two, he is Raman's brother."
    },
    {
        q: "<b>Feb 2023</b><br>A man 'P' introduces another man 'Q' by saying, &quot;He is the husband of the grand daughter of the father of my father&quot;. How is 'Q' related to 'P' ?",
        opts: ["(A) Cousin", "(B) Brother-in-law", "(C) Son", "(D) Uncle"],
        ans: 1,
        exp: "<b>(B) Brother-in-law</b><br>Grand Father(+) &rarr; Father(+) &rarr; P(+) &harr; Daughter(-) = Q(+). The father of P's father is the grandfather; his granddaughter is P's sister. Q is the husband of P's sister, so Q is P's brother-in-law."
    },
    {
        q: "<b>Mar 2023</b><br>A, B, C and D are all distinct individuals. The details of their relationships are given as :<br>I. A is the daughter of B<br>II. B is the son of C<br>III. C is the Father of D<br>Which of the following statements is true?",
        opts: ["a) C is the Uncle of A", "b) D and B are cousins", "c) A is the daughter of D", "d) If P is the daughter of B, then A and P are sisters."],
        ans: 3,
        exp: "<b>d) If P is the daughter of B, then A and P are sisters.</b><br>C(+) &rarr; B(+) &harr; D and B &rarr; A(-) &harr; P(-). C is the grandfather of A, B and D are siblings, and if P is also a daughter of B, then A and P are sisters."
    },
    {
        q: "A women while introducing a man says 'His wife is the only daughter of my father'. How is that man related to the woman?",
        opts: ["(a) Father in law", "(b) Brother in law", "(c) Husbad", "(d) Brother"],
        ans: 2,
        exp: "<b>(c) Husbad</b><br>Fathers(+) &rarr; Woman(-). Since the man's wife is the only daughter of the woman's father, the wife is the woman herself: Man(+) = Woman(-). So the man is the woman's husband."
    },
    {
        q: "A man while pointing towards a lady said, 'Her husband is the only son of my mother'. How is the man related to the lady?",
        opts: ["(a) Husband", "(b) Son", "(c) Father-in-law", "(d) Brother-in-law"],
        ans: 0,
        exp: "<b>(a) Husband</b><br>"
    },
    {
        q: "<b>JUNE 2019</b><br>Six friends A, B, C, D, E and F are sitting in a closed circle facing the center. E is to the left of D. C is between A and B. F is between E and A. Who is to the right of C?",
        opts: ["(A) A", "(B) B", "(C) D", "(D) E"],
        ans: 0,
        exp: "<b>(A) A</b><br>The seating arrangement of six friends in a circle (going around the circle) is: A, C, B, D, E, F (F is between E and A, C is between A and B).<br>The circular arrangement helps us understand clearly that A is sitting to the right of C and B to the left. So, 'A' is sitting to the right of 'C'."
    },
    {
        q: "<b>JUNE 2019</b><br>In a class of 35 students, Rajan is placed seventh from the bottom whereas Karan is placed ninth from the top. Divya is placed exactly in between the two. What is the differences in the positions of Rajan and Divya?",
        opts: ["(A) 9", "(B) 10", "(C) 11", "(D) 13"],
        ans: 1,
        exp: "<b>(B) 10</b><br>Total students = 35<br>Rajan is 7th from bottom, Karan is 9th from top and Divya is exactly between Karan and Rajan.<br>Position from top = (Total + 1 - n)<br>Rajan = 7th from bottom = (35 + 1 - 7)th from top = 29th from top<br>Karan = 9th from top<br>Divya is placed exactly in between Rajan and Karan.<br>Total students between Karan and Rajan = 35 - (9 + 7) = 35 - 16 = 19<br>Thus, Divya's position from Karan = (19 + 1)/2 = 10<br>Divya's position from top = 9 + 10 = 19<br>Hence, differences in the positions of Rajan and Divya = 29 - 19 = 10<br>i.e total 10 seats."
    },
    {
        q: "<b>NOV 2020</b><br>Six girls A, B, C, D, E and F are standing in a row. Only B is standing between D and F. A does not stand next to either For D. C does not stand next to D. Only E stands between A and C.<br>a) Only F stands between B and C<br>b) Only C stands between A and F<br>c) D and A occupy extreme ends<br>d) Only E stands between F and A<br>e) Only B stands between D and F<br>Choose the most appropriate answer from the options given below :",
        opts: ["(A) (a), (b), (c) and (d) only", "(B) (a), (c) and (e) only", "(C) (b), (c) and (d) only", "(D) (b), (d) and (e) only"],
        ans: 1,
        exp: "<b>(B) (a), (c) and (e) only</b><br>Girls: A, B, C, D, E and F are standing in row.<br>1. Only B is standing between D and F.<br>2. A does not stand next to either F or D.<br>3. C does not stand next to D.<br>4. Only E stands between A and C.<br>Possible arrangements: Case I: D B F C E A; Case II: A E C F B D.<br>(A) Only F stands between B and C - True<br>(B) Only C stands between A and F - False<br>(C) D and A occupy extreme ends - True<br>(D) Only E stands between F and A - False<br>(E) Only B stands between D and F - True"
    },
    {
        q: "<b>NOV 2020</b><br>In a class of 65 students. 27 speak Hindi. 21 speak English and 17 speak Bangla . 7 speak only English and Hindi. 6 speak only Hindi and Bangla and 5 speak only English and Bangla. If 12 speak only Hindi then how many speak all the three languages.",
        opts: ["(A) 5", "(B) 4", "(C) 3", "(D) 2"],
        ans: 3,
        exp: "<b>(D) 2</b><br>Venn diagram (English, Hindi, Bangla): only English = 7; only English and Hindi = 7; only Hindi = 12; only English and Bangla = 5; all three = 2; only Hindi and Bangla = 6; only Bangla = 4.<br>Check: Hindi = 12 + 7 + 6 + 2 = 27; English = 7 + 7 + 5 + 2 = 21; Bangla = 4 + 5 + 6 + 2 = 17. So the number who speak all three languages is 2."
    },
    {
        q: "<b>NOV 2020</b><br>In a family of four A, B, C and D; Dis taller than B, C is shortest of all and A is taller than only one person, then<br>a) Number of persons taller than A is the number of persons shorter than B<br>b) D is tallest<br>c) A is shortest<br>d) No one is shorter than C<br>e) Only one person is shorter than B<br>Choose the correct answer from the options given below:",
        opts: ["(A) a, b and e only", "(B) a, b and d only", "(C) b and c only", "(D) a and d only"],
        ans: 1,
        exp: "<b>(B) a, b and d only</b><br>Arranging according to the given information:<br>I. D is taller than B: D &gt; B<br>II. C is the shortest of all. There are two possibilities - (a) D &gt; B &gt; _ &gt; C (b) _ &gt; D &gt; B &gt; C<br>III. A is taller than only one person (Only case (a) is possible). Case (b) discarded.<br>Final arrangement: D &gt; B &gt; A &gt; C.<br>A. Number of persons taller than A is the number of persons shorter than B &rarr; True {Number of persons taller than A = 2 (D and B); Number of persons shorter than B = 2 (A and C)}.<br>B. D is the tallest &rarr; True (In the final arrangement, we can see that D is the tallest one).<br>C. A is the shortest &rarr; False (In the final arrangement, we can see that C is the shortest one).<br>D. No one is shorter than C &rarr; True (In the final arrangement, we can see that C is the shortest one).<br>E. Only one person is shorter than B &rarr; False (In the final arrangement, we can see that 2 persons are shorter than B i.e. A and C).<br>Thus, only statements A, B and D are true."
    },
    {
        q: "<b>NOV 2020</b><br>A clock takes 5 seconds to strike 5 times at 5 O'clock. How long will it take to strike 9 times at 9 O'clock?",
        opts: ["(A) 9 seconds", "(B) 10 seconds", "(C) 12 seconds", "(D) 8 seconds"],
        ans: 1,
        exp: "<b>(B) 10 seconds</b><br>between 5 strikes, there must have 4 intervals of time.<br>And it is given that it takes 5 seconds for that 4 intervals.<br>Hence, 5 strikes &rarr; 4 intervals &rarr; 5 seconds. So, each interval is 5/4 seconds long.<br>Now we have to find out the time taken to strike 9 times at 9 O'clock.<br>As per the given concept, between 9 strikes, there must have 8 intervals of time.<br>That is : 9 strikes &rarr; 8 intervals.<br>Then the time taken for 9 strikes = Number of intervals between them &times; Time taken for one interval = 8 &times; 5/4 = 2 &times; 5 = 10 seconds"
    },
    {
        q: "<b>NOV 2020</b><br>At what angle the hands of a clock are inclined at 15 minutes past 5?",
        opts: ["(1) 58&frac12;&deg;", "(2) 67&frac12;&deg;", "(3) 68&frac12;&deg;", "(4) 72&frac12;&deg;"],
        ans: 1,
        exp: "<b>(2) 67&frac12;&deg;</b><br>Time = 15 minutes past 5<br>Angle = &theta; = |(60 &times; hour - 11 &times; minute) / 2|<br>And another angle = (360 - &theta;)&deg;<br>&there4; &theta; = |(60 &times; 5 - 11 &times; 15) / 2| = |(300 - 165) / 2|&deg; = (135/2)&deg; = 67.5&deg;<br>And another angle = (360 - &theta;)&deg; = (360 - 67.5)&deg; = 292.5&deg;<br>Hence, '67 1/2&deg;' is the correct answer."
    },
    {
        q: "<b>NOV 2020</b><br>At what time between 2 and 3 o'clock will the hour and minute hand of a clock together",
        opts: ["1. 10 11/10 min, past 2", "2. 10 10/11 min. past 2", "3. 11 10/11 min past 2", "4. 11 min. past 2"],
        ans: 1,
        exp: "<b>2. 10 10/11 min. past 2</b><br>Time = H : (H &times; 5 &plusmn; &theta; &divide; 6) &times; 12/11<br>2 : (2 &times; 5 &plusmn; 0 &divide; 6) &times; 12/11<br>= 2 : (10 &plusmn; 0) &times; 12/11<br>= 2 : 10 &times; 12/11 or 2 : (10) &times; 12/11 {Both the values will be same as &theta; = 0&deg;}<br>= 2 : 120/11<br>= 2 : 10 10/11"
    },
    {
        q: "<b>NOV 2021</b><br>Given below are two statements<br>Statement I: The angle between the minute hand and the hour hand of a clock when the clock shows 3 hours 20 minutes is 25&deg;<br>Statement II: Between 4 and 5, the minute hand and hour hand of a clock will be coincident at 21 9/11 minutes past 4.<br>In light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are false", "(B) Both Statement I and Statement II are true", "(C) Statement I is false but Statement II is true", "(D) Statement I is true but Statement II is false"],
        ans: 2,
        exp: "<b>(C) Statement I is false but Statement II is true</b><br>At 12:00 both hour and minute hands have an angle of 0&deg;. For t minutes past 12: minute hand angle = 6t degrees, hour hand angle = t/2 degrees.<br>For Statement 1: 3 hours 20 minutes = 200 minutes, so t = 200. Minute angle = 6 &times; 200 = 1200&deg; = 1200&deg; mod 360&deg; = 120&deg;. Hour angle = 200/2 = 100&deg;. So difference = 120&deg; - 100&deg; = 20&deg;.<br>For Statement 2: After t minutes the hour hand and minute hand coincide. Hour angle for t minutes past 4 = (4/12) &times; 360 + t/2. Coincident means 6t = (4/12) &times; 360 + t/2, so (11/2)t = 120 and t = 240/11 = 21 9/11.<br>Hence, statement 1 is false and the statement 2 is true."
    },
    {
        q: "<b>NOV 2021</b><br>The angle made by the minute hand of a clock while moving from 4:40 pm to 6:10 pm is",
        opts: ["(A) 450&deg;", "(B) 490&deg;", "(C) 540&deg;", "(D) 610&deg;"],
        ans: 2,
        exp: "<b>(C) 540&deg;</b><br>The given time = 4:40 pm to 6:10 pm<br>Minute hand makes 6&deg; in 1 minute.<br>1 hour = 60 minutes<br>Total time from 4:40 pm to 6:10 pm = 1 hour 30 minutes<br>1 hour 30 minutes = (1 &times; 60) + 30 minutes = 90 minutes<br>The angle made by the minute hand of a clock while moving from 4:40 pm to 6:10 pm = 90 &times; 6 = 540&deg;<br>&there4; The angle made by the minute hand of a clock while moving from 4:40 pm to 6:10 pm is 540&deg;"
    },
    {
        q: "<b>Oct 2022</b><br>A clock is set right at 5 A.M. The clock loses 16 minutes in 24 hours. What will be the true time when the clock indicates 10 P.M. on 4th day?",
        opts: ["(A) 11 A.M.", "(B) 11 P.M.", "(C) 9 P.M.", "(D) 10 P.M."],
        ans: 1,
        exp: "<b>(B) 11 P.M.</b><br>Number of hours between 5 A.M. to 10 P.M. of the Fourth day = 24 + 24 + 24 + 17 = 89 hours<br>The clock loses 16 minutes in 24 hours.<br>Thus, the clock shows 23 hours 44 minutes = Actual correct clock time is 24 hours.<br>&rarr; 23 + 44/60 = 24 hours<br>&rarr; 23 + 11/15 = 24 hours<br>&rarr; {(23 &times; 15) + 11}/15 = 24 hours<br>&rarr; 356/15 = 24 hours. Now, for 1 hour = (24 &times; 15) / 356<br>&rarr; 360 / 356. And, for 89 hours = 89 &times; 360 / 356<br>&rarr; 90 hours<br>Therefore, the true time of the clock is (90 - 89 = 1 hour) more than the current showing time = 10 P.M. on the fourth day + 1 hour = 11 P.M. on the fourth day."
    },
    {
        q: "<b>NOV 2021</b><br>The collection of all the objects to which a term may correctly be applied is culled<br>A. The intension of that term<br>B. Connotation of that term<br>C. The extension of that term<br>D. Denotation of that term<br>Choose the correct answer from the options given below:",
        opts: ["(A) A and B only", "(B) B and C only", "(C) A and D only", "(D) C and D only"],
        ans: 3,
        exp: "<b>(D) C and D only</b><br>Extension, in logic, correlative words that indicate the reference of a term or concept: 'extension' indicates its range of applicability by naming the particular objects that it denotes.<br>The denotation, or extension, of a term, is the list of a class of objects referred to by the word (think of it as 'how far does this word extend?'). Thus the word 'planet' denotes specific objects such as Venus, Earth, Jupiter, and Neptune."
    },
    {
        q: "<b>DEC 2023</b><br>Which of the following is arranged in order of increasing denotation ?",
        opts: ["a) Cow, bovine, mammal, vertebrate, animal", "b) Mammal, Vertebrate, bovine, animal, cow", "c) Vertebrate, animal, mammal, bovine, cow", "d) Animal, Vertebrate, mammal, bovine, cow"],
        ans: 0,
        exp: "<b>a) Cow, bovine, mammal, vertebrate, animal</b><br>Denotation refers to the literal meaning of a word, the specific object or concept it refers to. As we move from cow to animal, the terms become increasingly broader in their meaning, encompassing more and more things. Here's the breakdown:<br>&bull; Cow: Refers to a specific type of animal within the Bovidae family.<br>&bull; Bovine: Refers to the entire family of animals that includes cows, buffaloes, yaks, etc.<br>&bull; Mammal: Refers to a class of warm-blooded animals that have fur or hair, nurse their young with milk, and give birth to live young. This includes not only cows and other bovines but also humans, elephants, whales, etc.<br>&bull; Vertebrate: Refers to animals with a backbone, which includes mammals, birds, fish, reptiles, amphibians, etc. This is even broader than mammal.<br>&bull; Animal: Refers to any multicellular, eukaryotic organism of the kingdom Animalia, which includes not only vertebrates but also insects, jellyfish, worms, etc. This is the broadest term of all."
    },
    {
        q: "<b>DEC 2023</b><br>Arrange the following group of terms in order of increasing extension.<br>(A) Mammal<br>(B) Wildcat<br>(C) Feline<br>(D) Animal<br>(E) Vertebrate<br>Choose the correct answer from the options given below.",
        opts: ["1. (B), (C), (A), (E), (D).", "2. (D), (E), (A), (C), (B).", "3. (D), (A), (E), (B), (C).", "4. (C), (B), (E), (A), (D)."],
        ans: 0,
        exp: "<b>1. (B), (C), (A), (E), (D).</b><br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><td>Term</td><td>Intension</td><td>Extension</td></tr><tr><td>Living beings</td><td>life</td><td>plants, animals</td></tr><tr><td>Animals</td><td>life, senses</td><td>molluscs, arthropods, vertebrates, etc.</td></tr><tr><td>Vertebrates</td><td>life, senses, backbones</td><td>reptiles, birds, mammals, etc.</td></tr><tr><td>Mammals</td><td>life, senses, backbones, suckle their young</td><td>primates, carnivores, etc.</td></tr><tr><td>Primates</td><td>life, senses, backbones, suckle their young, ability to grasp</td><td>apes, human beings</td></tr><tr><td>Humankind</td><td>life, senses, backbones, suckle their young, ability to grasp, reason</td><td>individual persons</td></tr></table>Extension increases as intension decreases: Wildcat &lt; Feline &lt; Mammal &lt; Vertebrate &lt; Animal."
    },
    {
        q: "<b>DEC 2023</b><br>Given below are two statements :<br>Statement (I): The statement - &quot;Pradeep's mind is a cave: deep, dark and full of bats&quot; is an analogy which is only descriptive in nature.<br>Statement (II): The statement - &quot;Pradeep's mind is a cave; deep, dark and full of bats&quot; is an analogy which contains an argument.<br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["a) Both Statement I and Statement II are correct", "b) Both Statement I and Statement II are incorrect", "c) Statement I is correct but Statement II is incorrect", "d) Statement I is incorrect but Statement II is correct"],
        ans: 2,
        exp: "<b>c) Statement I is correct but Statement II is incorrect</b><br>Statement I: The statement - &quot;Pradeep's mind is a cave: deep, dark and full of bats&quot; is an analogy which is only descriptive in nature. This statement is correct. An analogy is a comparison between two things that are otherwise unlike. The analogy in the given statement is between Pradeep's mind and a cave. The analogy is descriptive in nature because it simply describes the characteristics of Pradeep's mind, without making any argument.<br>Statement II: The statement - &quot;Pradeep's mind is a cave; deep, dark and full of bats&quot; is an analogy which contains an argument. This statement is incorrect. The analogy in the given statement does not contain an argument. An argument is a series of statements that are used to support a conclusion. The analogy in the given statement simply describes the characteristics of Pradeep's mind, without making any argument."
    },
    {
        q: "<b>DEC 2023</b><br>Given below are two statements:<br>Statement (I): Arguments from analogy are generally deductive, weak or strong<br>Statement (II): Arguments from analogy are generally inductive and neither valid nor invalid.<br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(1) Both Statement I and Statement II are correct", "(2) Both Statement I and Statement II are incorrect", "(3) Statement I is correct but Statement II is incorrect", "(4) Statement 1 is incorrect but Statement II is correct"],
        ans: 3,
        exp: "<b>(4) Statement 1 is incorrect but Statement II is correct</b><br>"
    },
    {
        q: "<b>DEC 2023</b><br>In order to know if the argument is deductive or inductive, out of the four given tests which one applies to the following example ?<br>&quot;Alan is a father. Therefore, Alan is a male&quot;.",
        opts: ["(1) The Indicator word test", "(2) The Strict necessity test", "(3) The Common pattern test", "(4) The Principle of charity test"],
        ans: 1,
        exp: "<b>(2) The Strict necessity test</b><br>An argument's conclusion either follows with strict logical necessity from its premises or it does not. If an argument's conclusion does follow with strict logical necessity from its premises, the argument should always be treated as deductive. If an arguments conclusion does not follow with strict logical necessity from its premises, the argument should normally be treated as inductive.<br>Examples: Alan is a father. Therefore Alan is a male. Jill is a six-year-old. Therefore, Jill cannot run a mile in one minute flat."
    }
];