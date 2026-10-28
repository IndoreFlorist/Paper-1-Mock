var rawQuestions = [
    {
        q: "<b>JUNE 2019</b><br>The proposition 'No historians are non-mathematician' is equivalent to which of the following proposition?",
        opts: ["(A) All historians are mathematicians", "(B) No historians are mathematicians", "(C) Some historians are mathematicians", "(D) Some historians are not mathematicians"],
        ans: 0,
        exp: "<b>(A) All historians are mathematicians</b><br>'No historians are non-mathematician' is obverted: the quality is changed (No to All) and the predicate is negated (non-mathematician to mathematician).<br>Obversion: change the quality of the proposition and replace the predicate with its complement (A to E, E to A, I to O, O to I); valid for A, E, I and O."
    },
    {
        q: "<b>NOV 2021</b><br>''All radically egalitarian societies are societies that do not preserve individual liberties''. Which of the following statements is true with reference to the above statement?",
        opts: ["(A) ''No radically egalitarian societies are societies that preserve individual liberties'' is obverse of the given statement and it is logically equivalent.", "(B) ''No radically egalitarian societies are societies that preserve individual liberties'' is obverse of the given statement and it is not logically equivalent.", "(C) ''Some radically egalitarian societies are societies that preserve individual liberties'' is converse of the given statement and it is logically equivalent.", "(D) ''Some radically egalitarian societies are not societies that preserve individual liberties'' is converse of the given statement and it is logically equivalent."],
        ans: 0,
        exp: "<b>(A) ''No radically egalitarian societies are societies that preserve individual liberties'' is obverse of the given statement and it is logically equivalent.</b><br>Obverse: quality changed + negation of predicate, giving 'No radically egalitarian societies are societies that preserve individual liberties'. Obversion is always valid, so the obverse is logically equivalent.<br>Converse means interchanging subject and predicate, which is not what the options (C) and (D) do."
    },
    {
        q: "<b>OCT 2022</b><br>Which of the following statements are logically equivalent?<br>(a) Some animals are birds.<br>(b) Some birds are animals.<br>(c) Some animals are not non-birds.<br>(d) Some animals are non-birds.<br>(e) Some non-birds are not non-animals.<br><br>Choose the most appropriate answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (a), (c) and (d) only", "(C) (b) and (c) only", "(D) (b), (c), (d) and (e) only"],
        ans: 0,
        exp: "<b>(A) (a), (b) and (c) only</b><br>(a) Some animals are birds -> converse -> Some birds are animals (b).<br>(c) Some animals are not non-birds -> obverse -> Some animals are birds -> converse -> Some birds are animals.<br>(d) Some animals are non-birds -> obverse -> Some animals are not birds (not equivalent).<br>(e) Some non-birds are not non-animals -> obverse -> Some non-birds are animals (not equivalent)."
    },
    {
        q: "<b>Oct 2022</b><br>Given below are two statements<br>Statement I: No immediate inference can ever be drawn from only one premise.<br>Statement II: In Aristotelian syllogism, the conclusion is drawn from the first premise through the mediation of the second.<br><br>In the light of the above statements, choose the correct answer from the options given below",
        opts: ["a) Both Statement I and Statement II are true", "b) Both Statement I and Statement II are false", "c) Statement I is true but Statement II is false", "d) Statement I is false but Statement II is true"],
        ans: 3,
        exp: "<b>d) Statement I is false but Statement II is true</b><br>Immediate inference is inference made from only one statement or proposition, so Statement I is false.<br>A mediate inference, or syllogism, consists of two premises and a conclusion which flows from the two conjointly, so Statement II is true."
    },
    {
        q: "<b>Oct 2022</b><br>Which of the following statements are logically equivalent?<br>A. No S is P<br>B. No P is S<br>C. All S are non-P<br>D. All non-P are non-S<br><br>Choose the correct answer from the options given below:",
        opts: ["a) A, C and D only", "b) A, B and C only", "c) B, C and D only", "d) A, B, C and D only"],
        ans: 1,
        exp: "<b>b) A, B and C only</b><br>No S is P -> converse -> No P is S.<br>All S are non-P -> obverse -> No S is P -> converse -> No P is S.<br>'All non-P are non-S' is not equivalent."
    },
    {
        q: "<b>Oct 2022</b><br>For which of the following forms of categorical propositions conversion is valid?<br>(A) Some S is P<br>(B) Some S is not P<br>(C) No S is P<br>(D) All S is P<br><br>Choose the correct answer from the options given below:",
        opts: ["a) A, B, C, D Only", "b) A, C and D Only", "c) B, C and D Only", "d) A, B and D Only"],
        ans: 1,
        exp: "<b>b) A, C and D Only</b><br>(A) Some S is P -> Some P is S (valid). (B) Some S is not P -> no converse. (C) No S is P -> No P is S (valid). (D) All S is P -> Some P is S (valid, by limitation)."
    },
    {
        q: "<b>Oct 2022</b><br>Given below are two statements<br>Statement I: To obvert a propositions, we change its quality and replace the predicate term with its complement.<br>Statement II: Obversion is valid for any standard form categorical proposition.<br><br>in light of the above statements, choose the correct answer from the options given below",
        opts: ["a) Both Statement I and Statement II are true", "b) Both Statement I and Statement II are false", "c) Statement I is true but Statement II is false", "d) Statement I is false but Statement II is true"],
        ans: 0,
        exp: "<b>a) Both Statement I and Statement II are true</b><br>Obversion: change the quality of the proposition and replace the predicate with its complement (A to E, E to A, I to O, O to I); valid for A, E, I and O."
    },
    {
        q: "<b>Oct 2022</b><br>Given below are two statements:<br>Statement I: Conversion is an inference that proceeds by interchanging the subject and predicate terms of the proposition.<br>Statement II: All conversions are valid inferences.<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["a) Both Statement I and Statement II are true", "b) Both Statement I and Statement II are false", "c) Statement I is true but Statement II is false", "d) Statement I is false but Statement II is true"],
        ans: 2,
        exp: "<b>c) Statement I is true but Statement II is false</b><br>Conversion: interchange subject and predicate; valid for E and I, invalid for A (only by limitation) and O. Hence not all conversions are valid."
    },
    {
        q: "<b>Feb 2023</b><br>Which of the following statements is logically equivalent to the statement - \"All women are honest human beings\"",
        opts: ["(A) Some women are non-honest human beings.", "(B) Some honest human beings are women.", "(C) Some women are honest human beings.", "(D) No women are non-honest human beings."],
        ans: 3,
        exp: "<b>(D) No women are non-honest human beings.</b><br>All women are honest human beings -> obverse (quality changed + negation of predicate) -> No women are non-honest human beings."
    },
    {
        q: "<b>Feb 2023</b><br>Which of the following statements are logically equivalent?<br>(a) No philosophers are industrialists.<br>(b) No industrialists are philosophers.<br>(c) All non-industrialists are non-philosophers.<br>(d) All philosophers are non-industrialists.<br><br>Choose the most appropriate answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (a), (b) and (d) only", "(C) (a), (c) and (d) only", "(D) (b), (c) and (d) only"],
        ans: 1,
        exp: "<b>(B) (a), (b) and (d) only</b><br>No philosophers are industrialists -> converse -> No industrialists are philosophers.<br>-> obverse -> All philosophers are non-industrialists.<br>-> contraposition -> No non-industrialists are non-philosophers (E contraposes only by limitation, so (c) is not equivalent)."
    },
    {
        q: "<b>Feb 2023</b><br>Which of the following statements are logically equivalent?<br>(a) Some cats are aggressive animals<br>(b) Some aggressive animals are cats.<br>(c) Some cats are not non-aggressive animals.<br>(d) All cats are aggressive animals.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (c) and (d) only", "(B) (a), (b) and (d) only", "(C) (b) and (d) only", "(D) (a), (b) and (c) only"],
        ans: 3,
        exp: "<b>(D) (a), (b) and (c) only</b><br>(a) Some cats are aggressive -> converse -> (b). (c) Some cats are not non-aggressive animals -> obverse -> Some cats are aggressive animals. (d) is an A proposition and is not equivalent to the I proposition."
    },
    {
        q: "<b>Feb 2023</b><br>Which of the following statements are logically equivalent?<br>(a) Some plants are non-fungi.<br>(b) Some plants are not fungi.<br>(c) Some fungi are plants.<br>(d) Some non-fungi are not non-plants.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b), (c) and (d) only", "(B) (b) and (c) only", "(C) (a), (c) and (d) only", "(D) (a), (b) and (d) only"],
        ans: 3,
        exp: "<b>(D) (a), (b) and (d) only</b><br>(a) Some plants are non-fungi -> obverse -> Some plants are not fungi (b). (d) Some non-fungi are not non-plants -> obverse -> Some non-fungi are plants -> converse -> Some plants are non-fungi. (c) is a different proposition."
    },
    {
        q: "<b>Feb 2023</b><br>Which of the following statement is logically equivalent to the statement \"All tigers are hunting animals\"?",
        opts: ["(A) Some hunting animals are tigers.", "(B) No tigers are non-hunting animals.", "(C) No hunting animals are tigers.", "(D) Some hunting animals are not tigers."],
        ans: 1,
        exp: "<b>(B) No tigers are non-hunting animals.</b><br>All tigers are hunting animals -> obverse (quality + negation of predicate) -> No tigers are non-hunting animals."
    },
    {
        q: "<b>Feb 2023</b><br>Which of the following statements are logically equivalent?<br>(a) All aeroplanes are polluting vehicles.<br>(b) No polluting vehicles are aeroplanes.<br>(c) All non-polluting vehicles are non-aeroplanes.<br>(d) No aeroplanes are non-polluting vehicles.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (c) only", "(B) (b) and (d) only", "(C) (a) and (d) only", "(D) (a), (c) and (d) only"],
        ans: 3,
        exp: "<b>(D) (a), (c) and (d) only</b><br>(a) All aeroplanes are polluting vehicles -> obverse -> No aeroplanes are non-polluting vehicles (d) -> contraposition -> All non-polluting vehicles are non-aeroplanes (c). (b) is an E proposition and is not equivalent."
    },
    {
        q: "<b>Feb 2023</b><br>Match List I with List II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I (OBVERTEND)</b></td><td><b>List II (OBVERSE)</b></td></tr><tr><td>A. All S is P</td><td>I. Some S is non-P</td></tr><tr><td>B. No S is P</td><td>II. No S is non-P</td></tr><tr><td>C. Some S is P</td><td>III. All S is non-P</td></tr><tr><td>D. Some S is not P</td><td>IV. Some S is not non-P</td></tr></table><br><br>Choose the correct answer from the options given below.",
        opts: ["a) A-I, B-III, C-IV, D-II", "b) A-II, B-III, C-I, D-IV", "c) A-II, B-III, C-IV, D-I", "d) A-III, B-II, C-IV, D-I"],
        ans: 2,
        exp: "<b>c) A-II, B-III, C-IV, D-I</b><br>A. All S is P -> No S is non-P.<br>B. No S is P -> All S is non-P.<br>C. Some S is P -> Some S is not non-P.<br>D. Some S is not P -> Some S is non-P.<br>A is obverted to E, E to A, I to O, O to I."
    },
    {
        q: "<b>Feb 2023</b><br>Given below are two statements<br>Statement I: To form the contrapositive of a given proposition, we replace its subject term with the complement of its predicate term and we replace its predicate term with the complement of its subject term.<br>Statement II: All contra positions are valid.<br><br>In the light of the above statements, choose the correct answer from the options given below",
        opts: ["a) Both Statement I and Statement II are true", "b) Both Statement I and Statement II are false", "c) Statement I is true but Statement II is false", "d) Statement I is false but Statement II is true"],
        ans: 2,
        exp: "<b>c) Statement I is true but Statement II is false</b><br>Contraposition: replace the subject with the complement of the predicate and the predicate with the complement of the subject; valid for A and O, invalid for E and I (E only by limitation)."
    },
    {
        q: "<b>Feb 2023</b><br>Which of the following statements are logically equivalent ?<br>(a) Some animals are birds.<br>(b) Some animals are not non-birds.<br>(c) Some non-birds are not non-animals.<br>(d) Some birds are animals.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (c) only", "(B) (b),(c),(d) only", "(C) (a),(b) and (d) only", "(D) (a),(b) and (c) only."],
        ans: 2,
        exp: "<b>(C) (a),(b) and (d) only</b><br>(b) Some animals are not non-birds -> obverse -> Some animals are birds (a) -> converse -> Some birds are animals (d). (c) Some non-birds are not non-animals -> obverse -> Some non-birds are animals, which is a different proposition."
    },
    {
        q: "<b>June 2023</b><br>Which of the following statements are logically equivalent?<br>(A) Some cricketers are kind men.<br>(B) Some kind men are cricketers.<br>(C) Some cricketers are not non-kind men.<br>(D) Some non-kind men are not non-cricketers.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b), (c) and (d) Only", "(B) (c) and (d) Only", "(C) (a), (b) and (c) Only", "(D) (a) and (d) Only"],
        ans: 2,
        exp: "<b>(C) (a), (b) and (c) Only</b><br>(A) converse -> (B). (C) Some cricketers are not non-kind men -> obverse -> Some cricketers are kind men (A). (D) obverse -> Some non-kind men are cricketers, a different proposition."
    },
    {
        q: "<b>June 2023</b><br>Which of the following statements are logically equivalent?<br>(a) All saints are materialists.<br>(b) No saints are non-materialists.<br>(c) All non-materialists are non-saints.<br>(d) No materialists are saints.<br><br>Choose the most appropriate answer from the options given below",
        opts: ["(A) (b), (c) and (d) only", "(B) (a) and (c) only", "(C) (a) and (b) only", "(D) (a), (b) and (c) only"],
        ans: 3,
        exp: "<b>(D) (a), (b) and (c) only</b><br>(a) All saints are materialists -> obverse -> No saints are non-materialists (b) -> contraposition -> All non-materialists are non-saints (c). (d) is an E proposition and is not equivalent."
    },
    {
        q: "Which of the following statements is logically equivalent to the statement- \"No professors are materialists\"?",
        opts: ["(1) Some non-materialists are not non-professors", "(2) Some professors are non-materialists", "(3) All professors are non-materialists", "(4) All non-materialists are non-professors"],
        ans: 2,
        exp: "<b>(3) All professors are non-materialists</b><br>No professors are materialists -> obverse (quality changed + negation of predicate) -> All professors are non-materialists."
    },
    {
        q: "Which of the following statements are logically equivalent ?<br>(A) No liquids are beverages.<br>(B) No beverages are liquids.<br>(C) All non-beverages are non-liquids.<br>(D) All non-liquids are non-beverages.<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A) and (B) Only", "(2) (A) and (C) Only", "(3) (B) and (D) Only", "(4) (C) and (D) Only"],
        ans: 0,
        exp: "<b>(1) (A) and (B) Only</b><br>No liquids are beverages -> converse -> No beverages are liquids. The other statements are not equivalent."
    },
    {
        q: "Which of the following statements are logically equivalent?<br>A. Some apes are not non-monkeys.<br>B. Some monkeys are not non-apes.<br>C. Some monkeys are apes.<br>D. Some apes are monkeys.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A and B only", "2. C and D only", "3. B, C and D only", "4. A, B, C and D"],
        ans: 3,
        exp: "<b>4. A, B, C and D</b><br>A obverts to 'Some apes are monkeys' (D), which converts to 'Some monkeys are apes' (C). B obverts to C. All four are equivalent."
    }
];