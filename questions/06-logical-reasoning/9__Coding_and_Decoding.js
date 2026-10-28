var rawQuestions = [
    {
        q: "<b>June 2014</b><br>Given below are two premises and four conclusions drawn from those premises. Select the code that expresses conclusion drawn validly from the premises (separately or jointly).<br><br>Premises:<br>(a) All dogs are mammals.<br>(b) No cats are dogs.<br><br>Conclusions:<br>(i) No cats are mammals.<br>(ii) Some cats are mammals.<br>(iii) No dogs are cats.<br>(iv) No dogs are non-mammals.<br><br>Codes:",
        opts: ["(A) (i) only", "(B) (i) and (ii)", "(C) (iii) and (iv)", "(D) (ii) and (iii)"],
        ans: 2,
        exp: "<b>(C) (iii) and (iv)</b><br>Dogs lie completely inside Mammals, and Cats are separate from Dogs. So 'No dogs are cats' (iii) and 'No dogs are non-mammals' (iv) are valid. Nothing can be concluded definitely about cats and mammals, so (i) and (ii) are not valid."
    },
    {
        q: "<b>June 2014</b><br>In certain coding method, the word QUESTION is encoded as DOMESTIC. In this coding, what is the code word for the word RESPONSE ?",
        opts: ["(A) OMESUCEM", "(B) OMESICSM", "(C) OMESICEM", "(D) OMESISCM"],
        ans: 2,
        exp: "<b>(C) OMESICEM</b><br>Letter substitution: Q=D, U=O, E=M, S=E, T=S, I=T, O=I, N=C. From this, R=O and P=S (continuing the pattern). So RESPONSE = O M E S I C E M."
    },
    {
        q: "<b>June 2014</b><br>Complete the series BB, FE, II, ML, PP, ........... by choosing one of the following option given :",
        opts: ["(A) TS", "(B) ST", "(C) RS", "(D) SR"],
        ans: 0,
        exp: "<b>(A) TS</b><br>First letters: B +4 = F, F +3 = I, I +4 = M, M +3 = P, P +4 = T.<br>Second letters: B +3 = E, E +4 = I, I +3 = L, L +4 = P, P +3 = S.<br>So the next term is TS."
    },
    {
        q: "<b>June 2014</b><br>Given below is a diagram of three circles A, B & C inter-related with each other. The circle A represents the class of Indians, the circle B represents the class of scientists and circle C represents the class of politicians. p, q, r, s ... represent different regions. Select the code containing the region that indicates the class of Indian scientists who are not politicians.<br>(Diagram: three overlapping circles A (Indians), B (Scientists) and C (Politicians). Region p = A and C only, q = A, B and C, r = B and C only, s = A and B only.)<br><br>Codes :",
        opts: ["(A) q and s only", "(B) s only", "(C) s and r only", "(D) p, q and s only"],
        ans: 1,
        exp: "<b>(B) s only</b><br>Indian scientists are the common area of circles A (Indians) and B (Scientists). Of this common area, region q also lies inside C (Politicians), so only region s represents Indian scientists who are not politicians."
    },
    {
        q: "<b>June 2014</b><br>If the series 4, 5, 8, 13, 14, 17, 22, .... is continued in the same pattern, which one of the following is not a term of this series ?",
        opts: ["(A) 31", "(B) 32", "(C) 33", "(D) 35"],
        ans: 2,
        exp: "<b>(C) 33</b><br>The pattern is +1, +3, +5 repeating: 4, 5, 8, 13, 14, 17, 22, 23, 26, 31, 32, 35, 40 ... Therefore 33 is not a term of the series."
    },
    {
        q: "<b>DEC 2014</b><br>Which of the codes given below contains only the correct statements? Select the code:<br><br>Statements:<br>(a) Venn diagram represents the arguments graphically.<br>(b) Venn diagram can enhance our understanding.<br>(c) Venn diagram may be called valid or invalid.<br>(d) Venn diagram is clear method of notation.<br><br>Codes:",
        opts: ["(A) (a), (c) and (d)", "(B) (a), (b) and (c)", "(C) (a), (b) and (d)", "(D) (b), (c) and (d)"],
        ans: 2,
        exp: "<b>(C) (a), (b) and (d)</b><br>Venn diagram is a graphical method of representing classes and categorical propositions and directly testing the validity of syllogisms. In Venn diagrams, the premises are assumed to be true; the argument is valid if all of the information in the conclusion diagram is already in the premise diagram. It is the argument that is valid or invalid, so statement (c) is not counted as correct."
    },
    {
        q: "<b>June 2015</b><br>In certain code MATHURA is coded as JXQEROX. The code of HOTELS will be:",
        opts: ["(A) ELIPQB", "(B) LEQIBP", "(C) ELQBIP", "(D) LEBIQP"],
        ans: 2,
        exp: "<b>(C) ELQBIP</b><br>Each letter is moved 3 places back: M-3 = J, A-3 = X, T-3 = Q, H-3 = E, U-3 = R, R-3 = O. So H-3 = E, O-3 = L, T-3 = Q, E-3 = B, L-3 = I, S-3 = P, giving ELQBIP."
    },
    {
        q: "<b>DEC 2015</b><br>The next term in the series:<br>B2E, D5H, F12K, H27N, ? is:",
        opts: ["(A) J561", "(B) 162Q", "(C) Q62J", "(D) J58Q"],
        ans: 3,
        exp: "<b>(D) J58Q</b><br>First letters: B +2 = D, D +2 = F, F +2 = H, H +2 = J.<br>Middle numbers: 2 × 2 + 1 = 5, 5 × 2 + 2 = 12, 12 × 2 + 3 = 27, 27 × 2 + 4 = 58.<br>Last letters: E +3 = H, H +3 = K, K +3 = N, N +3 = Q.<br>So the next term is J58Q."
    },
    {
        q: "<b>JULY 2016</b><br>Given below two premise and four conclusions are drawn from them (taking singly or together). Select the code that states the conclusion validly drawn.<br><br>Premises:<br>(i) All religious persons are emotional.<br>(ii) Ram is a religious person.<br><br>Conclusion:<br>(a) Ram is emotional.<br>(b) All emotional persons are religious.<br>(c) Ram is not a non-religious person.<br>(d) Some religious persons are not emotional.<br><br>Codes:",
        opts: ["(A) (a), (b), (c) and (d)", "(B) (a) only", "(C) (a) and (c) only", "(D) (b) and (c) only"],
        ans: 2,
        exp: "<b>(C) (a) and (c) only</b><br>(a) True: all religious persons are emotional and Ram is religious, so Ram is emotional.<br>(b) False: the reverse of 'All religious persons are emotional' is not definitely true.<br>(c) True: Ram is a religious person.<br>(d) False: all religious persons are emotional."
    },
    {
        q: "<b>JULY 2016</b><br>Select the code, which is not correct about Venn diagram:",
        opts: ["(A) Venn diagram represents propositions as well as classes.", "(B) It can provide clear method of notation.", "(C) It can be either valid or invalid.", "(D) It can provide the direct method of testing the validity."],
        ans: 2,
        exp: "<b>(C) It can be either valid or invalid.</b><br>"
    },
    {
        q: "<b>JULY 2016</b><br>In the series AB, EDC, FGHI, ________? ________ OPQRST, The missing term is",
        opts: ["(A) JKLMN", "(B) JMKNL", "(C) NMLKJ", "(D) NMKLJ"],
        ans: 2,
        exp: "<b>(C) NMLKJ</b><br>The groups grow by one letter each time and alternate between forward and reversed order: AB, EDC (reversed), FGHI, then JKLMN written in reverse = NMLKJ, then OPQRST."
    },
    {
        q: "<b>JULY 2016</b><br>In certain code, SELECTION is coded as QCJCARGML. The code of AMERICANS will be",
        opts: ["(A) YKCPGAYLQ", "(B) BNFSJDBMR", "(C) QLYAGPCKY", "(D) YQKLCYPAG"],
        ans: 0,
        exp: "<b>(A) YKCPGAYLQ</b><br>Each letter is moved 2 places back: S-2 = Q, E-2 = C, L-2 = J, and so on. Similarly A-2 = Y, M-2 = K, E-2 = C, R-2 = P, I-2 = G, C-2 = A, A-2 = Y, N-2 = L, S-2 = Q, giving YKCPGAYLQ."
    },
    {
        q: "<b>AUG 2016</b><br>Given below are two premises, with four conclusions drawn from them (taking singly or together); which conclusions are validly drawn? Select the correct answer from the codes given below:<br><br>Premises:<br>(i) All bats are mammals.<br>(ii) Birds are not bats.<br><br>Conclusions:<br>(a) Birds are not mammals.<br>(b) Bats are not birds.<br>(c) All mammals are bats.<br>(d) Some mammals are bats.<br><br>Codes:",
        opts: ["(A) (a), (b) and (d)", "(B) (b) and (d)", "(C) (a) and (c)", "(D) (b), (c) and (d)"],
        ans: 1,
        exp: "<b>(B) (b) and (d)</b><br>Bats lie inside Mammals and Birds are separate from Bats. 'Bats are not birds' (b) and 'Some mammals are bats' (d) are valid. Nothing definite follows about birds and mammals (a), and the reverse of a universal affirmative (c) is not valid."
    },
    {
        q: "<b>AUG 2016</b><br>In a particular code, HOSPITALS is coded as HSOLSAPTI. The code of BIOLOGICALS will be",
        opts: ["(A) BLICOALIOSG", "(B) BOLGICAILOS", "(C) SBLAOILOBCG", "(D) BSILOALCOIG"],
        ans: 3,
        exp: "<b>(D) BSILOALCOIG</b><br>The first letter stays in place and the remaining letters are rearranged in the same fixed position pattern as HOSPITALS to HSOLSAPTI. Applying the same pattern to BIOLOGICALS gives BSILOALCOIG."
    },
    {
        q: "<b>JAN 2017</b><br>Given below are two premises ((a) and (b)). From those two premises four conclusions (i), (ii), (iii) & (iv) are drawn. Select the code that states the conclusions validly drawn from the premises (taking singly or jointly.)<br><br>Premises:<br>(a) Untouchability is a curse.<br>(b) All hot pans are untouchable.<br><br>Conclusions:<br>(i) All hot pans are curse.<br>(ii) Some untouchable things are hot pans.<br>(iii) All curses are untouchability.<br>(iv) Some curses are untouchability.<br><br>Codes:",
        opts: ["(1) (i) and (ii)", "(2) (ii) and (iii)", "(3) (iii) and (iv)", "(4) (ii) and (iv)"],
        ans: 3,
        exp: "<b>(4) (ii) and (iv)</b><br>(ii) is valid: from 'All hot pans are untouchable', 'Some untouchable things are hot pans' follows.<br>(iv) is valid: from 'Untouchability is a curse', 'Some curses are untouchability' follows.<br>(i) is not valid: 'untouchable' (things) and 'untouchability' are different terms.<br>(iii) is not valid: the reverse of a universal affirmative is not definite."
    },
    {
        q: "<b>JAN 2017</b><br>The next term in the following series YEB, WFD, UHG, SKI, ? will be",
        opts: ["(1) TLO", "(2) QOL", "(3) QLO", "(4) GQP"],
        ans: 1,
        exp: "<b>(2) QOL</b><br>First letters: -2 each time (Y, W, U, S, Q).<br>Second letters: +1, +2, +3, +4 (E, F, H, K, O).<br>Third letters: +2, +3, +2, +3 (B, D, G, I, L).<br>So the next term is QOL."
    },
    {
        q: "<b>JAN 2017</b><br>If A is coded as C, M as I, N as P, S as O, I as A, P as N, E as M, O as E and C as S, then the code of COMPANIES will be",
        opts: ["(1) SPEINMOAC", "(2) NCPSEIOMA", "(3) SMOPIEACN", "(4) SEINCPAMO"],
        ans: 3,
        exp: "<b>(4) SEINCPAMO</b><br>C = S, O = E, M = I, P = N, A = C, N = P, I = A, E = M, S = O. So COMPANIES = SEINCPAMO."
    },
    {
        q: "<b>NOV 2017</b><br>Given below are two premises (a and b), from those two premises four conclusions (i), (ii), (iii) and (iv) are drawn. Select the code that states the conclusion/conclusions drawn validity (taking the premises singularly or jointly).<br><br>Premises:<br>(a) All bats are mammals.<br>(b) No birds are bats.<br><br>Conclusions:<br>(i) No birds are mammals.<br>(ii) Some birds are not mammals.<br>(iii) No bats are birds.<br>(iv) All mammals are bats.<br><br>Code:",
        opts: ["(1) (i) and (ii) only", "(2) (iii) only", "(3) (iii) and (iv) only", "(4) (i) only"],
        ans: 1,
        exp: "<b>(2) (iii) only</b><br>Bats lie inside Mammals and Birds are separate from Bats. Only 'No bats are birds' (iii) is definitely valid."
    },
    {
        q: "<b>JULY 2018</b><br>Given below are two premises (A and B). Four conclusions are drawn from them. Select the code that states validity drawn conclusion (s) (taking the premises individually or jointly).<br><br>Premises:<br>(A) Most of the dancers are physically fit.<br>(B) Most of the singers are dancers.<br><br>Conclusions:<br>(a) Most of the singers are physically fit.<br>(b) Most of the dancers are singers.<br>(c) Most of the physically fit persons are dancers.<br>(d) Most of the physically fit persons are singers.<br><br>Code:",
        opts: ["(1) (a) and (b)", "(2) (b) and (c)", "(3) (c) and (d)", "(4) (d) and (a)"],
        ans: 1,
        exp: "<b>(2) (b) and (c)</b><br>Diagram: Singers overlap Dancers, and Dancers overlap Physically fit. From the two premises, (b) and (c) are the conclusions that follow."
    },
    {
        q: "<b>JULY 2018</b><br>Which one of the following statements is not correct in the context of Venn diagram method?",
        opts: ["(1) It is a method of testing the validity of arguments.", "(2) It represents both the premises of a syllogism in one diagram.", "(3) It requires two overlapping circles for the two premises of a standard-form categorical syllogism.", "(4) It can be used to represent classes as well as propositions."],
        ans: 2,
        exp: "<b>(3) It requires two overlapping circles for the two premises of a standard-form categorical syllogism.</b><br>To test the validity of a categorical syllogism, the Venn diagram must be filled in to reflect the contents of the premises. Each premise is diagrammed independently, and then one checks whether the conclusion has already been diagrammed. If so, the argument is valid; if not, it is invalid. A standard-form syllogism has three terms, so it needs three overlapping circles, not two."
    },
    {
        q: "<b>JULY 2018</b><br>Given below are two premises (a) and (b). Four conclusions are drawn from them. Select the code that embodies validly drawn conclusion(s) (taking the premises individually or jointly).<br><br>Premises:<br>(a) All saints are noble.<br>(b) Some religious men are saints.<br><br>Conclusions:<br>(i) Some religious men are noble.<br>(ii) All religious men are noble.<br>(iii) Some saints are religious men.<br>(iv) All noble persons are saints.<br><br>Code:",
        opts: ["(1) (i) and (ii)", "(2) (ii) and (iii)", "(3) (i) and (iii)", "(4) (i) and (iv)"],
        ans: 2,
        exp: "<b>(3) (i) and (iii)</b><br>(i) is valid: some religious men are saints and all saints are noble. (iii) is valid by conversion of 'Some religious men are saints'. (ii) and (iv) do not follow."
    },
    {
        q: "<b>DEC 2018</b><br>Given below are two premises (a) and (b). Four conclusions are drawn from them. Select the code that states validly drawn conclusion(s). [Taking the premises individually or jointly]<br><br>Premises:<br>(a) All judges are lawyers.<br>(b) No doctors are lawyers.<br><br>Conclusions:<br>(1) No lawyers are doctors.<br>(2) No doctor are judges.<br>(3) All lawyers are judges.<br>(4) Some doctor are judges.",
        opts: ["1. (1) and (3)", "2. (1) and (2)", "3. (1) and (4)", "4. (2) and (3)"],
        ans: 1,
        exp: "<b>2. (1) and (2)</b><br>Judges lie inside Lawyers, and Doctors are separate from Lawyers. So 'No lawyers are doctors' (1) and 'No doctor are judges' (2) are valid."
    },
    {
        q: "<b>JULY 2018</b><br>Choose the proper alternative given in the code to replace the question mark.<br>Cow – Milk<br>Bee – Honey<br>Teacher – ?<br><br>Code:",
        opts: ["(1) Marks", "(2) Discipline", "(3) Wisdom", "(4) Lesson"],
        ans: 3,
        exp: "<b>(4) Lesson</b><br>"
    },
    {
        q: "<b>JUNE 2019</b><br>Given below are two premises with four conclusions drawn from them. Which of the following conclusions could be validly drawn from the premises?<br><br>Premises:<br>(i) No paper is pen<br>(ii) Some paper are handmade<br><br>Conclusions:<br>(A) All paper are handmade<br>(B) Some handmade are pen<br>(C) Some handmade are not pen<br>(D) All handmade are paper",
        opts: ["(A) All paper are handmade", "(B) Some handmade are pen", "(C) Some handmade are not pen", "(D) All handmade are paper"],
        ans: 2,
        exp: "<b>(C) Some handmade are not pen</b><br>Paper is completely separate from Pen, and some paper is handmade. So those handmade things that are paper cannot be pens, which means 'Some handmade are not pen'."
    },
    {
        q: "<b>NOV 2020</b><br>Identify the features of Aristotelian syllogism from the following:<br>a. It is deductive - inductive and formal material<br>b. It is only deductive and formal<br>c. The major and minor terms stand apart in the premises<br>d. It is verbalistic<br>e. Verbal form is not the essence of inference<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (a), (c) and (e) only", "(C) (b), (c) and (d) only", "(D) (a), (d) and (e) only"],
        ans: 2,
        exp: "<b>(C) (b), (c) and (d) only</b><br>The Aristotelian syllogism is only deductive and formal. It is verbalistic. In it, the major and minor terms stand apart in the premises though they are connected by the middle term."
    },
    {
        q: "<b>Dec 2019</b><br>Given below are two premises with four conclusions drawn from them. Which of the following conclusions could be validly drawn from the premises?<br><br>Premises:<br>(i) All cats are dogs.<br>(ii) All dogs are cows.<br><br>Conclusions:<br>(a) All cats are cows.<br>(b) Some cows are cats.<br>(c) All dogs are cats.<br>(d) No cow is dog.<br><br>Select the correct answer from the options given below:",
        opts: ["(A) (b), (c) and (d)", "(B) (d) only", "(C) (a) and (b)", "(D) (b) and (d)"],
        ans: 2,
        exp: "<b>(C) (a) and (b)</b><br>Cats lie inside Dogs, which lie inside Cows. So 'All cats are cows' (a) and 'Some cows are cats' (b) are valid."
    },
    {
        q: "<b>Dec 2019</b><br>Given below are two premises with four conclusions drawn from them. Which of following conclusions could be validly drawn from the premises?<br><br>Premises:<br>P1) All fans are tubes<br>P2) Bulbs are not tubes<br><br>Conclusions:<br>(i) Fans are not bulbs<br>(ii) All tubes are fans<br>(iii) Fans are bulbs<br>(iv) No tube is bulb<br><br>Select the correct answer from the options given below:",
        opts: ["(A) (i), (ii), (iii)", "(B) (i) and (iv)", "(C) (i) only", "(D) (ii), (iii) and (iv)"],
        ans: 1,
        exp: "<b>(B) (i) and (iv)</b><br>Fans lie inside Tubes, and Bulbs are separate from Tubes. So 'Fans are not bulbs' (i) and 'No tube is bulb' (iv) are valid."
    },
    {
        q: "<b>NOV 2020</b><br>Given below are two premises with four conclusions drawn from them. Which of the following is valid conclusion drawn from the premises?<br><br>Premises:<br>(i) All diaries are copies<br>(ii) No copy is book<br><br>Conclusions:<br>(i) Some diaries are books<br>(ii) Some books are copies<br>(iii) No book is copy<br>(iv) No diary is book",
        opts: ["(A) (i) and (ii)", "(B) (iii) and (iv)", "(C) (ii) and (iii)", "(D) (i) and (iv)"],
        ans: 1,
        exp: "<b>(B) (iii) and (iv)</b><br>Diaries lie inside Copies, and Book is separate from Copies. So 'No book is copy' (iii) and 'No diary is book' (iv) are valid."
    },
    {
        q: "<b>NOV 2020</b><br>If some pens are pencils but no pencil is sharpener then<br>(A) All pencils are pens<br>(B) Some sharpeners are pencils<br>(C) some pens are not sharpener<br>(D) Some pencils are not pens<br><br>Choose the correct answer from the options given below :",
        opts: ["(a) (C) only", "(b) (B) and (C) only", "(c) (A) and (D) only", "(d) (B) and (D) only"],
        ans: 2,
        exp: "<b>(c) (A) and (D) only</b><br>Answer as given in the source sheet."
    },
    {
        q: "In a certain coding scheme 'MOTHER' is coded as 'OQVJGT', how will 'PARTNER' be coded in the same coding scheme?",
        opts: ["(A) RDUTOHU", "(B) REUTOHU", "(C) RETUOGT", "(D) RCTVPGT"],
        ans: 3,
        exp: "<b>(D) RCTVPGT</b><br>Each letter is moved 2 places forward (+2). So P+2 = R, A+2 = C, R+2 = T, T+2 = V, N+2 = P, E+2 = G, R+2 = T, giving RCTVPGT."
    },
    {
        q: "<b>Oct 2022</b><br>In a certain coding scheme, 'UNIVERSITY' is coded as 'EIINRSTUVY'. How INSTITUTION shall be coded in the same coding scheme?",
        opts: ["(A) IIINNOSTTTU", "(B) IININOSUTTT", "(C) INIINOSTUTT", "(D) IINNIOSTTTU"],
        ans: 0,
        exp: "<b>(A) IIINNOSTTTU</b><br>The letters of the word are arranged in alphabetical order. INSTITUTION arranged alphabetically gives I I I N N O S T T T U."
    },
    {
        q: "<b>Oct 2022</b><br>In a certain coding language, if 'CRICKET' is coded as 2632479, 'ROCKET' is coded as 612479, and 'KETTLE' is coded as 479907, then how 'LOCKER' shall be coded in that language?",
        opts: ["a) 102674", "b) 021647", "c) 120764", "d) 012476"],
        ans: 3,
        exp: "<b>d) 012476</b><br>From the given codes: C = 2, R = 6, I = 3, K = 4, E = 7, T = 9, O = 1, L = 0. Thus the code for LOCKER is 0 1 2 4 7 6 = 012476."
    },
    {
        q: "<b>Feb 2023</b><br>In a certain coding language; Tour is written as 4156, Screw is written as 73698 and Tear is written is 4926. How the word Sweater will be written in that language?",
        opts: ["a) 7849692", "b) 7892694", "c) 7829946", "d) 7892496"],
        ans: 3,
        exp: "<b>d) 7892496</b><br>Each alphabet has a specific number: T = 4, O = 1, U = 5, R = 6, S = 7, C = 3, E = 9, W = 8, A = 2. So SWEATER = 7 8 9 2 4 9 6 = 7892496."
    },
    {
        q: "<b>Feb 2023</b><br>If in a certain coding language 'Fraction' is Coded as 'Carfnoit' and 'System' is coded as 'Sysmet', then in that Coding language how 'material' will be coded?",
        opts: ["a) 'eltaaimr'", "b) 'lairetam'", "c) 'etamlair'", "d) 'etalmair'"],
        ans: 2,
        exp: "<b>c) 'etamlair'</b><br>The word is split into two equal parts and the letters of each part are reversed: Fraction = Frac + tion = Carf + noit; System = Sys + tem = Sys + met. For 'material' = mate + rial, reversing each part gives etam + lair = etamlair."
    },
    {
        q: "<b>Dec 2023</b><br>In a certain code:<br>(a) '3245' means you must study hard<br>(b) 567 means hard work pays<br>(c) 614 means work and study<br><br>Which of the following are the codes for pays and work respectively?<br>Choose the correct answer from the options given below:",
        opts: ["(1) 1 & 5", "(2) 5 & 6", "(3) 7 & 6", "(4) 4 & 5"],
        ans: 2,
        exp: "<b>(3) 7 & 6</b><br>'study' is common to (a) and (c) = 4. 'hard' is common to (a) and (b) = 5. 'work' is common to (b) and (c) = 6. In (b), the remaining digit 7 is 'pays'. So pays = 7 and work = 6."
    },
    {
        q: "If in a scheme, the word 'FATHER' is coded as '104', how the word 'MOTHER' will be coded in the same scheme?",
        opts: ["(a) 104", "(b) 83", "(c) 87", "(d) 102"],
        ans: 1,
        exp: "<b>(b) 83</b><br>Each letter is replaced by its position from the end of the alphabet (A = 26, B = 25, ... Z = 1) and the values are added. FATHER = 21 + 26 + 7 + 19 + 22 + 9 = 104. MOTHER = 14 + 12 + 7 + 19 + 22 + 9 = 83."
    },
    {
        q: "Find the correct sequence of five (5) missing letters which will complete the following letters series.<br>daa_bc_cda_a_c_c",
        opts: ["(a) a,b,c,a,b", "(b) a,c,b,a,c", "(c) a,c,a,b,c", "(d) a,c,a,c,b"],
        ans: 2,
        exp: "<b>(c) a,c,a,b,c</b><br>Filling the blanks with a, c, a, b, c gives daaabccc daaabccc, in which the block 'daaabccc' repeats."
    },
    {
        q: "In a certain coding scheme:<br>'Famly values are important' is written as pa, ya, si, sa<br>'Values are generally contagious' is written as ya, da, ja, sa<br>'Some diseases are contagious' is written as ka, da, sa, ro<br><br>What are the codes for Contagious and values?",
        opts: ["(a) da, sa", "(b) da, si", "(c) ka, ya", "(d) da, ya"],
        ans: 3,
        exp: "<b>(d) da, ya</b><br>'are' is common to all three statements = sa. 'values' is common to the first two statements (other than sa) = ya. 'contagious' is common to the last two statements (other than sa) = da. So contagious = da and values = ya."
    },
    {
        q: "Identify the correct sequence of letters which will complete the following letter series.<br>aabcd ----bcdbc---dcdab---",
        opts: ["(a) abaabccdd", "(b) abcabacdd", "(c) abaabdcdd", "(d) Abcadbbcd"],
        ans: 1,
        exp: "<b>(b) abcabacdd</b><br>"
    },
    {
        q: "In a certain coding language<br>(a) Aman is coded as 29<br>(b) RAMAN is coded as 47<br><br>How sham will be coded in that language?",
        opts: ["(a) 43", "(b) 28", "(c) 41", "(d) 37"],
        ans: 2,
        exp: "<b>(c) 41</b><br>The code is the sum of the alphabet positions of the letters. AMAN = 1 + 13 + 1 + 14 = 29 and RAMAN = 18 + 1 + 13 + 1 + 14 = 47. So SHAM = 19 + 8 + 1 + 13 = 41."
    }
];