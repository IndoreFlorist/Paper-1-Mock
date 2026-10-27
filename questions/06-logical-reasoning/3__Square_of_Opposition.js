var rawQuestions = [
    {
        q: "<b>June 2014</b><br>If two propositions having the same subject and predicate terms can both be true but can not both be false, the relation between those two propositions is called",
        opts: ["(A) contradictory", "(B) contrary", "(C) subcontrary", "(D) subaltern"],
        ans: 2,
        exp: "<b>(C) subcontrary</b><br>Sub-contrary (I-O): two particular propositions with the same subjects and predicates but different qualities.<br>Rules: Sub-contrary propositions cannot be false together. Sub-contrary propositions may be true together."
    },
    {
        q: "<b>Dec 2014</b><br>By which of the following proposition, the proposition \"wise men are hardly afraid of death\" is contradicted?",
        opts: ["(A) Some wise men are afraid of death.", "(B) All wise men are afraid of death.", "(C) No wise men is afraid of death.", "(D) Some wise men are not afraid of death."],
        ans: 1,
        exp: "<b>(B) All wise men are afraid of death.</b><br>'Hardly' means 'Some are not', so the given proposition is an O proposition (Some wise men are not afraid of death). Its contradictory is the A proposition 'All wise men are afraid of death'.<br>Contradictory (A-O &amp; E-I): two propositions with the same subjects and predicates but different in quantities and in qualities. Contradictory propositions cannot be true together and cannot be false together."
    },
    {
        q: "<b>June 2015</b><br>Among the following statements two are contradictory to each other. Select the correct code that represents them:<br><br>Statements:<br>(a) All poets are philosophers.<br>(b) Some poets are philosophers.<br>(c) Some poets are not philosophers.<br>(d) No philosopher is a poet.<br><br>Codes:",
        opts: ["(A) (b) and (c)", "(B) (a) and (b)", "(C) (a) and (d)", "(D) (a) and (c)"],
        ans: 3,
        exp: "<b>(D) (a) and (c)</b><br>(a) 'All poets are philosophers' is an A proposition and (c) 'Some poets are not philosophers' is an O proposition. A and O differ in both quantity and quality, so they are contradictory (A-O &amp; E-I)."
    },
    {
        q: "<b>Dec 2015</b><br>Among the following propositions two are related in such a way that they can both be true although they cannot both be false. Which are those propositions? Select the correct code.<br><br>Propositions:<br>(a) Some priests are cunning.<br>(b) No priest is cunning.<br>(c) All priests are cunning.<br>(d) Some priests are not cunning.<br><br>Codes:",
        opts: ["(A) (a) and (b)", "(B) (c) and (d)", "(C) (a) and (c)", "(D) (a) and (d)"],
        ans: 3,
        exp: "<b>(D) (a) and (d)</b><br>Propositions that can both be true but cannot both be false are sub-contrary (I-O). (a) 'Some priests are cunning' is I and (d) 'Some priests are not cunning' is O: two particular propositions with the same subject and predicate but different qualities.<br>Sub-contrary propositions cannot be false together; they may be true together."
    },
    {
        q: "<b>Dec 2015</b><br>If the proposition 'No men are honest' is taken to be false which of the following proposition/propositions can be claimed certainly to be true?<br><br>Propositions:",
        opts: ["(A) All men are honest", "(B) Some men are honest", "(C) Some men are not honest", "(D) No honest person is man"],
        ans: 1,
        exp: "<b>(B) Some men are honest</b><br>'No men are honest' is an E proposition. If E is false, its contradictory I ('Some men are honest') is certainly true. A ('All men are honest') and O ('Some men are not honest') are undetermined."
    },
    {
        q: "<b>July 2016</b><br>Among the following propositions two are related in such a way that one is the denial of the other. Which are those propositions? Select the correct code:<br><br>Propositions:<br>(a) All women are equal to men<br>(b) Some women are equal to men<br>(c) Some women are not equal to men<br>(d) No women are equal to men<br><br>Codes:",
        opts: ["(A) (a) and (b)", "(B) (a) and (d)", "(C) (c) and (d)", "(D) (a) and (c)"],
        ans: 3,
        exp: "<b>(D) (a) and (c)</b><br>Propositions where one is the denial of the other are contradictory. (a) is an A proposition and (c) is an O proposition; they differ in quantity and quality, so they cannot be true together and cannot be false together."
    },
    {
        q: "<b>July 2016</b><br>If the proposition 'All thieves are poor' is false, which of the following propositions can be claimed certainly to be true?<br><br>Propositions:",
        opts: ["(A) Some thieves are poor.", "(B) Some thieves are not poor.", "(C) No thief is poor.", "(D) No poor person is a thief."],
        ans: 1,
        exp: "<b>(B) Some thieves are not poor.</b><br>'All thieves are poor' is an A proposition. If A is false, its contradictory O ('Some thieves are not poor') is certainly true. I and E are undetermined."
    },
    {
        q: "<b>Aug 2016</b><br>If two propositions are connected in such a way that they cannot both be false although they may both be true, then their relationship is called",
        opts: ["(A) Contrary", "(B) Subcontrary", "(C) Contradictory", "(D) Subalternation"],
        ans: 1,
        exp: "<b>(B) Subcontrary</b><br>Square of Opposition:<br>Contrary: cannot be true together; can be false together.<br>Subcontrary: cannot be false together; may be true together.<br>Contradictory: cannot be true together; cannot be false together.<br>Subalternation: the relation between a universal proposition and the corresponding particular proposition."
    },
    {
        q: "<b>Jan 2017</b><br>Among the following propositions two are related in such a way that they cannot both be true but can both be false. Select the code that states those two propositions.<br><br>Propositions:<br>(a) Every student is attentive.<br>(b) Some students are attentive.<br>(c) Students are never attentive.<br>(d) Some students are not attentive.<br><br>Codes:",
        opts: ["(1) (a) and (b)", "(2) (a) and (c)", "(3) (b) and (c)", "(4) (c) and (d)"],
        ans: 1,
        exp: "<b>(2) (a) and (c)</b><br>Contrary (A-E): two propositions with the same subjects and predicates but different qualities and having the same universal quantities. Contrary propositions cannot be true together but can be false together. (a) is A and (c) is E."
    },
    {
        q: "<b>Jan 2017</b><br>If the statement 'None but the brave wins the race' is false which of the following statements can be claimed to be true?<br><br>Select the correct code:",
        opts: ["(1) All brave persons win the race.", "(2) Some persons who win the race are not brave.", "(3) Some persons who win the race are brave.", "(4) No person who wins the race is brave."],
        ans: 1,
        exp: "<b>(2) Some persons who win the race are not brave.</b><br>'None but the brave wins the race' means 'All persons who win the race are brave' (A proposition). If A is false, its contradictory O, 'Some persons who win the race are not brave', is certainly true."
    },
    {
        q: "<b>Jan 2017</b><br>If two standard form categorical propositions with the same subject and predicate are related in such a manner that if one is undetermined the other must be undetermined, what is their relation?",
        opts: ["(1) Contrary", "(2) Subcontrary", "(3) Contradictory", "(4) Sub-altern"],
        ans: 2,
        exp: "<b>(3) Contradictory</b><br>Contradictory propositions (A-O &amp; E-I) are always determined together: they cannot be true together and cannot be false together, so one is undetermined only if the other is too. (The same idea is used in the July 2018 question, where the contradictory pair A-O is the answer.)"
    },
    {
        q: "<b>Nov 2017</b><br>Given below are four statements. Among them, two are related in such a way that they can both be true but they cannot both be false. Select the code that indicates those two statements:<br><br>Statements:<br>(a) Honest people never suffer.<br>(b) Almost all honest people do suffer.<br>(c) Honest people hardly suffer.<br>(d) Each and every honest person suffers.<br><br>Code:",
        opts: ["(1) (a) and (c)", "(2) (a) and (d)", "(3) (b) and (c)", "(4) (a) and (b)"],
        ans: 2,
        exp: "<b>(3) (b) and (c)</b><br>Quantifier guide: All = each, every, 100%, any. Some = 0.1%-99.9%, almost, few, a few, many, mostly. Some Not = hardly, seldom, scarcely. No = none, never, no one, 0%.<br>(a) is E, (b) 'Almost all' is I, (c) 'hardly' is O, (d) is A. Statements that can both be true but cannot both be false are sub-contrary (I-O), i.e. (b) and (c)."
    },
    {
        q: "<b>July 2018</b><br>If the proposition 'domestic animals are hardly ferocious' is taken to be false, which of the following proposition/propositions can be claimed to be certainly true? Select the correct code:<br><br>Propositions:<br>(a) All domestic animals are ferocious.<br>(b) Most of the domestic animals are ferocious.<br>(c) No domestic animal is ferocious.<br>(d) Some domestic animals are non-ferocious.<br><br>Code:",
        opts: ["(1) (a) and (b)", "(2) (a) only", "(3) (c) and (d)", "(4) (b) only"],
        ans: 0,
        exp: "<b>(1) (a) and (b)</b><br>'Hardly' = 'Some not', so the given proposition is O. If O is false, then A is true ('All domestic animals are ferocious'), E is false and I is true ('Most...' = Some). So (a) and (b) are certainly true, while (c) E and (d) O are false."
    },
    {
        q: "<b>July 2018</b><br>Among the following, two statements are related in such a way that if one becomes undetermined, the other will also be undetermined. Select the code that refers to these two statements.<br><br>Statements:<br>(i) Every fruit is nutritious.<br>(ii) Fruits are hardly nutritious.<br>(iii) Fruits are mostly nutritious.<br>(iv) Some food items are nutritious.<br><br>Code:",
        opts: ["(1) (i) and (ii)", "(2) (ii) and (iii)", "(3) (iii) and (iv)", "(4) (i) and (iv)"],
        ans: 0,
        exp: "<b>(1) (i) and (ii)</b><br>(i) 'Every fruit is nutritious' is A and (ii) 'Fruits are hardly nutritious' is O ('hardly' = Some not). A and O are contradictory, so their truth values are always determined together."
    },
    {
        q: "<b>Dec 2018</b><br>Which one of the following can be validly inferred from the proposition - \"all animals are wild\"?",
        opts: ["1. No non-animals are wild.", "2. Some animals are not wild.", "3. No animals are wild.", "4. Some animals are wild."],
        ans: 3,
        exp: "<b>4. Some animals are wild.</b><br>Sub-alternation (A-I &amp; E-O): two propositions with the same subjects and predicates, with the same qualities and differing only in quantity. If the universal A ('All animals are wild') is true, the subaltern particular I ('Some animals are wild') is also true."
    },
    {
        q: "<b>June 2019</b><br>'All republics are grateful' and 'Some republics are not grateful' cannot both be true, and they cannot both be false. This is called as",
        opts: ["(A) contraries", "(B) contradictories", "(C) subaltern", "(D) super altern"],
        ans: 1,
        exp: "<b>(B) contradictories</b><br>Contradictory (A-O &amp; E-I): two propositions with the same subjects and predicates but different in quantities and in qualities. Contradictory propositions cannot be true together and cannot be false together."
    },
    {
        q: "<b>June 2019</b><br>If the proposition 'Houses are not bricks' is taken to be False then which of the following propositions can be True?<br><br>(a) All houses are bricks<br>(b) No house is brick<br>(c) Some houses are bricks<br>(d) Some houses are not bricks<br><br>Select the correct answer from the options given below:",
        opts: ["(A) (b) and (c)", "(B) (a) and (d)", "(C) (b) only", "(D) (c) only"],
        ans: 3,
        exp: "<b>(D) (c) only</b><br>'Houses are not bricks' is the E proposition 'No house is brick'. If E is false, its contradictory I ('Some houses are bricks') is true. (a) A and (d) O are undetermined (possible but not certain), and (b) E is false."
    },
    {
        q: "<b>June 2019</b><br>Given below is a proposition:<br>'Mahatma Gandhi is called the father of the Nation'<br><br>What Kind of classical categorical proposition is it?",
        opts: ["(A) Universal affirmative", "(B) Popular affirmative", "(C) Both A and B", "(D) Neither A nor B"],
        ans: 0,
        exp: "<b>(A) Universal affirmative</b><br>Universal Affirmative (A) is a proposition of the form 'All S are P'. A singular proposition about one individual is treated as universal, and the absence of negative words such as no, not indicates that it is affirmative. Therefore 'Mahatma Gandhi is called the father of the Nation' is a Universal affirmative."
    },
    {
        q: "<b>Dec 2019</b><br>'All Judges are fair-minded' is an example of ______ proposition.",
        opts: ["(A) Universal affirmative", "(B) Universal negative", "(C) Particular affirmative", "(D) Particular negative"],
        ans: 0,
        exp: "<b>(A) Universal affirmative</b><br>'All S are P' is an A proposition: Universal in quantity and Affirmative in quality."
    },
    {
        q: "<b>Dec 2019</b><br>If proposition 'some milk is curd' is taken to be true, then which of the following propositions can be false?",
        opts: ["(A) No milk is curd.", "(B) All milk is curd.", "(C) Some curd is milk.", "(D) Some milk is not curd."],
        ans: 0,
        exp: "<b>(A) No milk is curd.</b><br>'Some milk is curd' is an I proposition. If I is true, its contradictory E ('No milk is curd') must be false. A ('All milk is curd') and O ('Some milk is not curd') are undetermined, and 'Some curd is milk' (the converse of I) is true."
    },
    {
        q: "Which of the following refers to an attribute of every categorical proposition which is determined by whether the preposition affirms or denies class inclusion?",
        opts: ["(A) Quality", "(B) Quantity", "(C) Distribution", "(D) Comparison"],
        ans: 0,
        exp: "<b>(A) Quality</b><br>Categorical propositions can be either affirmative or negative. A proposition is affirmative if its copula does not contain the negation sign 'not' (e.g. Some students are brilliant) and negative if it does (e.g. Some students are not brilliant). Quantity (universal or particular) concerns the subject term."
    },
    {
        q: "\"All students cleared their examination\" and \"Few students did not clear their examination\". This is an instance of ____________.",
        opts: ["(A) Contradictories", "(B) Superaltern", "(C) Subaltern", "(D) Contraries"],
        ans: 0,
        exp: "<b>(A) Contradictories</b><br>'All students cleared their examination' is an A proposition and 'Few students did not clear' is an O proposition (Some students did not clear). A and O differ in both quantity and quality, so they are contradictories."
    },
    {
        q: "<b>Nov 2020</b><br>Given below are two propositions:<br><br>Some animals are fierce.<br>Some animals are not fierce.<br><br>In the classical square of opposition which one of the following is the correct option?",
        opts: ["(A) Subaltern", "(B) Contradictory", "(C) Contrary", "(D) Sub-contrary"],
        ans: 3,
        exp: "<b>(D) Sub-contrary</b><br>'Some animals are fierce' (I) and 'Some animals are not fierce' (O) are two particular propositions with the same subject and predicate but different qualities: sub-contrary (I-O)."
    },
    {
        q: "<b>Nov 2021</b><br>If the statement - \"Some animals are not birds\" is given as false, then which of the following statements can be immediately inferred to be false?",
        opts: ["(A) All animals are birds.", "(B) No animals are birds.", "(C) Some animals are birds.", "(D) Some animals can fly."],
        ans: 1,
        exp: "<b>(B) No animals are birds.</b><br>'Some animals are not birds' is an O proposition. If O is false, then A ('All animals are birds') is true, I ('Some animals are birds') is true and E ('No animals are birds') is false."
    },
    {
        q: "<b>Nov 2021</b><br>If 'All men are mortal' is given as True, then which of the following options can be validly inferred from it?<br><br>A. 'No men is mortal' is False<br>B. 'Some men are mortal' is True<br>C. 'Some men are not mortal' is True<br>D. 'Some men are not mortal' is False<br>E. 'Some men are mortal' is False<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) A, B and D only", "(B) A, B and C only", "(C) A, B, C and D only", "(D) B, C, D and E only"],
        ans: 0,
        exp: "<b>(A) A, B and D only</b><br>If A ('All men are mortal') is true, then E ('No men is mortal') is false (contrary), I ('Some men are mortal') is true (subaltern) and O ('Some men are not mortal') is false (contradictory). Hence A, B and D."
    },
    {
        q: "<b>Nov 2021</b><br>Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I - In a Square of Opposition</b></td><td><b>List II - Resultant</b></td></tr><tr><td>A. If 'Some girls are shy' is True</td><td>I. 'E' and 'I' propositions are Undetermined</td></tr><tr><td>B. If 'All men are Tall' is False</td><td>II. 'A' and 'O' are Undetermined</td></tr><tr><td>C. If 'No crows are white' is True</td><td>III. 'E' proposition is False; 'I' proposition is True</td></tr><tr><td>D. If 'some flowers are not fragrant' is False</td><td>IV. 'A' proposition is False; 'O' proposition is True</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A - I, B - III, C - IV, D - II", "(B) A - II, B - I, C - IV, D - III", "(C) A - III, B - IV, C - I, D - II", "(D) A - IV, B - II, C - I, D - III"],
        ans: 1,
        exp: "<b>(B) A - II, B - I, C - IV, D - III</b><br>A: 'Some girls are shy' (I) true, so A and O are undetermined (II).<br>B: 'All men are tall' (A) false, so E and I are undetermined (I).<br>C: 'No crows are white' (E) true, so A is false and O is true (IV).<br>D: 'Some flowers are not fragrant' (O) false, so E is false and I is true (III)."
    },
    {
        q: "<b>Nov 2021</b><br>Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I - In Square of opposition</b></td><td><b>List II - Resultant</b></td></tr><tr><td>A. If 'Some flowers are pink' is False</td><td>I. 'I' is False; 'O' is True</td></tr><tr><td>B. If 'No girls are birds' is True</td><td>II. 'A' is False; 'E' is True</td></tr><tr><td>C. If 'Some boys are not tall' is False</td><td>III. 'I' is True; 'O' is False</td></tr><tr><td>D. If 'All chocolates are sweet' is True</td><td>IV. 'E' is False; 'I' is true</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A - II, B - I, C - IV, D - III", "(B) A - III, B - IV, C - II, D - I", "(C) A - IV, B - II, C - I, D - III", "(D) A-II, B - III, C - I, D - IV"],
        ans: 0,
        exp: "<b>(A) A - II, B - I, C - IV, D - III</b><br>A: 'Some flowers are pink' (I) false, so A is false and E is true (II).<br>B: 'No girls are birds' (E) true, so I is false and O is true (I).<br>C: 'Some boys are not tall' (O) false, so E is false and I is true (IV).<br>D: 'All chocolates are sweet' (A) true, so I is true and O is false (III)."
    },
    {
        q: "<b>Sept 2022</b><br>In classical square of opposition, if 'No S is P' is given as true, then which of the following could be immediately inferred from it?<br><br>(a) 'Some S is P' is undetermined<br>(b) 'All S is P' is false<br>(c) 'Some S is not P' is undetermined<br>(d) 'Some S is P' is false<br>(e) 'Some S is not P' is true<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (e) only", "(B) (b), (c) and (d) only", "(C) (b), (d) and (e) only", "(D) (a), (b) and (d) only"],
        ans: 2,
        exp: "<b>(C) (b), (d) and (e) only</b><br>If E ('No S is P') is true: A ('All S is P') is false (contrary), I ('Some S is P') is false (contradictory) and O ('Some S is not P') is true (subaltern). So (b), (d) and (e) follow."
    },
    {
        q: "<b>Sept 2022</b><br>Given below are two statements:<br><br>Statement (I): 'Some S is P' is contrary to 'No S is P'.<br>Statement (II): 'Some S is P' is subcontrary to 'Some S is not P'.<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true", "(B) Both Statement (I) and Statement (II) are false", "(C) Statement (I) is true but Statement (II) is false", "(D) Statement (I) is false but Statement (II) is true"],
        ans: 3,
        exp: "<b>(D) Statement (I) is false but Statement (II) is true</b><br>'Some S is P' (I) and 'No S is P' (E) are contradictory, not contrary, so Statement (I) is false. 'Some S is P' (I) and 'Some S is not P' (O) are sub-contrary, so Statement (II) is true."
    },
    {
        q: "<b>March 2023</b><br>If the statement 'All tigers are mammals', is given as true, which of the following statements could be immediately inferred to be false?<br><br>(a) Some tigers are not mammals.<br>(b) Some tigers are mammals.<br>(c) No tigers are mammals.<br>(d) Some mammals are tigers.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) and (d) only", "(B) (a), (b) and (d) only", "(C) (a) and (c) only", "(D) (b) and (d) only"],
        ans: 2,
        exp: "<b>(C) (a) and (c) only</b><br>If A ('All tigers are mammals') is true: O ('Some tigers are not mammals') is false (contradictory), E ('No tigers are mammals') is false (contrary) and I ('Some tigers are mammals') is true (subaltern). Statement (d) has a different subject and predicate, so it cannot be immediately inferred from the square."
    },
    {
        q: "<b>Dec 2023</b><br>Which of the following propositions are so related that they cannot both be true, although they can both be false?<br><br>(A) No professors are materialists<br>(B) Some professors are materialists<br>(C) All professors are materialists<br>(D) Some professors are not materialists<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A) and (C) Only", "(2) (B) and (D) Only", "(3) (B) and (C) Only", "(4) (A) and (D) Only"],
        ans: 0,
        exp: "<b>(1) (A) and (C) Only</b><br>Propositions that cannot both be true but can both be false are contraries (A-E). (A) is E and (C) is A."
    },
    {
        q: "<b>Dec 2023</b><br>If the statement - \"No professors are materialists\" is given as true, then which of the following statements could be inferred to be true?",
        opts: ["(1) All professors are materialists.", "(2) Some professors are materialists.", "(3) Some professors are not materialists.", "(4) Some materialists are professors."],
        ans: 2,
        exp: "<b>(3) Some professors are not materialists.</b><br>If E ('No professors are materialists') is true: A is false (contrary), I is false (contradictory) and O ('Some professors are not materialists') is true (subaltern)."
    },
    {
        q: "<b>Dec 2023</b><br>If the statement \"Some rectangles are not squares\" is given as true, then according to the square of opposition which of the following statements can by immediately inferred to be false?",
        opts: ["(1) All rectangles are squares.", "(2) Some rectangles are squares.", "(3) No rectangles are squares.", "(4) Some squares are not rectangles."],
        ans: 0,
        exp: "<b>(1) All rectangles are squares.</b><br>'Some rectangles are not squares' is an O proposition. If O is true, its contradictory A ('All rectangles are squares') is false. I and E are undetermined."
    }
];