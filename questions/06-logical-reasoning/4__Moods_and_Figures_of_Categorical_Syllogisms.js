var rawQuestions = [
    {
        q: "<b>June 2019</b><br>Identify the minor term in the following syllogism:<br><br>\"Some books are not edifying<br>All books are interesting<br><br>Therefore, some interesting things are not edifying\"",
        opts: ["(A) Subject of the conclusion and predicate of the second premises", "(B) Predicate of the conclusion and predicate of the first premises", "(C) Subject of the both premises", "(D) Predicate of the both premises"],
        ans: 0,
        exp: "<b>(A) Subject of the conclusion and predicate of the second premises</b><br>Categorical syllogism: a syllogism of three categorical propositions containing three distinct terms, each appearing in exactly two of the three propositions. The three terms are the major term (predicate of the conclusion), the minor term (subject of the conclusion) and the middle term (the term that does NOT appear in the conclusion). Here the minor term is 'interesting things', the subject of the conclusion and the predicate of the second premise.<br><br>Example: All mammals are creatures that have hair. All dogs are mammals. Therefore, all dogs are creatures that have hair. (Middle term: mammals; minor term: dogs; major term: creatures that have hair.)<br><br>Standard premise order: the premise containing the major term is the major premise and the premise containing the minor term is the minor premise. The standard form demands that the major premise ALWAYS be listed first."
    },
    {
        q: "<b>June 2019</b><br>Statements:<br>No Musicians are Japanese.<br>All Barbers are Musicians.<br>No Barbers are Japanese.<br><br>Identify the Middle Term in the above syllogism",
        opts: ["(A) Subject in the first premise and predicate in the second premise.", "(B) Predicate in the first premise and subject in the second premise.", "(C) Predicate in the both premises.", "(D) Subject in both the premises."],
        ans: 0,
        exp: "<b>(A) Subject in the first premise and predicate in the second premise.</b><br>Major Term: the predicate term of the conclusion. Minor Term: the subject term of the conclusion. Middle Term: the term that does NOT appear in the conclusion. Here the middle term is 'Musicians', which is the subject in the first premise and the predicate in the second premise."
    },
    {
        q: "<b>June 2019</b><br>In the statement \"No dogs are reptiles\", which terms are distributed?",
        opts: ["(A) Only subject term", "(B) Only predicate term", "(C) Both subject and predicate terms", "(D) Neither subject nor predicate term"],
        ans: 2,
        exp: "<b>(C) Both subject and predicate terms</b><br>'No dogs are reptiles' is an E proposition (No S is P: Universal Negative), in which both the subject and the predicate are distributed.<br><br>A: All S are P - Universal, Affirmative - Subject distributed, Predicate undistributed.<br>E: No S is P - Universal, Negative - Subject distributed, Predicate distributed.<br>I: Some S is P - Particular, Affirmative - Subject undistributed, Predicate undistributed.<br>O: Some S is not P - Particular, Negative - Subject undistributed, Predicate distributed."
    },
    {
        q: "<b>Dec 2019</b><br>Consider the following statements with reference to the proposition \"Some girls are not students\"<br><br>(i) Subject term students is distributed<br>(ii) Predicate term girls is undistributed<br>(iii) Predicate term students is distributed<br>(iv) Subject term girls is undistributed<br><br>Choose the correct option from those given below:",
        opts: ["(A) Only (i) and (iii) are correct", "(B) Only (ii) and (iii) are correct", "(C) Only (i) and (iv) are correct", "(D) Only (iii) and (iv) are correct"],
        ans: 3,
        exp: "<b>(D) Only (iii) and (iv) are correct</b><br>'Some girls are not students' is an O proposition (Some S is not P: Particular, Negative). In an O proposition the subject (girls) is undistributed and the predicate (students) is distributed. So (iii) and (iv) are correct."
    },
    {
        q: "<b>Dec 2019</b><br>Consider the following statements with reference to categorical propositions :<br><br>(i) \"Some birds are mammals\" is a particular subject term alone.<br>(ii) \"Some birds are mammals\" is a particular predicate term alone.<br>(iii) \"Some birds are mammals\" is a particular both subject and predicate terms.<br>(iv) \"Some birds are mammals\" is a particular neither subject term nor predicate term.<br><br>Choose the correct option from below :",
        opts: ["(A) Only (i) and (iv) are correct", "(B) Only (iii) and (iv) are correct", "(C) Only (ii) is correct", "(D) Only (iv) is correct"],
        ans: 3,
        exp: "<b>(D) Only (iv) is correct</b><br>A categorical proposition is a proposition that relates two classes of objects. Categorical propositions contain a subject and a predicate term; the subject term comes first and the predicate term comes second in a standard-form categorical proposition. 'Some birds are mammals' is an I proposition (Particular Affirmative), in which neither the subject term nor the predicate term is distributed."
    },
    {
        q: "<b>Dec 2019</b><br>Which one of the following is true with respect to the first figure of categorical syllogism?",
        opts: ["(A) The middle term is the subject of the major premise and the predicate of the minor premise", "(B) The middle term is the predicate of the major premise and subject of the minor premise", "(C) The middle term is the subject of the major premise and the predicate of the conclusion", "(D) The middle term is the subject of the minor premise and the predicate of the conclusion"],
        ans: 0,
        exp: "<b>(A) The middle term is the subject of the major premise and the predicate of the minor premise</b><br>Mood and Figure: putting a categorical syllogism in standard form allows us to analyze the form of the argument for validity. There are two elements of this analysis: mood and figure.<br>Mood: a series of three letters corresponding to the type of proposition (A, E, I or O) of the major premise, the minor premise and the conclusion.<br>Figure: a number which corresponds to the placement of the middle terms. There are four figures (M = middle term, P = predicate of conclusion, S = subject of conclusion):<br>Fig. 1: Major premise M-P; Minor premise S-M; Conclusion S-P.<br>Fig. 2: P-M; S-M; S-P.<br>Fig. 3: M-P; M-S; S-P.<br>Fig. 4: P-M; M-S; S-P."
    },
    {
        q: "<b>Dec 2019</b><br>Consider the following argument:<br><br>Statements:<br>Some chairs are curtains.<br>All curtains are bedsheets.<br><br>Conclusion: Some chairs are bedsheets.<br><br>What is the Mood of the above proposition?",
        opts: ["(A) IAI", "(B) IAA", "(C) IIA", "(D) AII"],
        ans: 3,
        exp: "<b>(D) AII</b><br>Mood is a series of three letters (A, E, I or O) for the major premise, the minor premise and the conclusion, written in standard premise order. The standard form demands that the major premise (the one containing the major term) ALWAYS be listed first. The major term is 'bedsheets' (predicate of the conclusion), so the major premise is 'All curtains are bedsheets' (A), the minor premise is 'Some chairs are curtains' (I) and the conclusion 'Some chairs are bedsheets' is (I). Mood: AII."
    },
    {
        q: "<b>Nov 2020</b><br>Which one of the following decides the figure of a categorical proposition?",
        opts: ["(A) Major term", "(B) Minor term", "(C) Middle term", "(D) Copula"],
        ans: 2,
        exp: "<b>(C) Middle term</b><br>Figure: understanding the placement of the middle term. There are four figures: I, II, III, IV, each with a distinct arrangement of the middle term (M) in the major premise and minor premise (Fig. 1: M-P, S-M; Fig. 2: P-M, S-M; Fig. 3: M-P, M-S; Fig. 4: P-M, M-S; conclusion always S-P)."
    },
    {
        q: "<b>Nov 2020</b><br>In a proposition which is particular affirmative,",
        opts: ["(A) Subject term is distributed but the predicate is not distributed", "(B) Neither the subject nor the predicate is distributed", "(C) Both subject and predicate are distributed", "(D) Subject is undistributed but predicate is distributed"],
        ans: 1,
        exp: "<b>(B) Neither the subject nor the predicate is distributed</b><br>A particular affirmative proposition is an I proposition (Some S is P). In an I proposition both the subject and the predicate are undistributed."
    },
    {
        q: "<b>Nov 2020</b><br>In the figure of categorical syllogism, Quantity and Quality of a proposition determine:<br><br>1. Validity of Syllogism<br>2. Figure of the Syllogism<br>3. Mood of the Syllogism<br>4. Fallacy of the Syllogism",
        opts: ["(1) Validity of Syllogism", "(2) Figure of the Syllogism", "(3) Mood of the Syllogism", "(4) Fallacy of the Syllogism"],
        ans: 2,
        exp: "<b>(3) Mood of the Syllogism</b><br>The quantity (universal or particular) and quality (affirmative or negative) of a categorical proposition determine its type (A, E, I or O). The mood of a syllogism is the series of these three letters for the major premise, minor premise and conclusion."
    },
    {
        q: "<b>Nov 2020</b><br>In Universal Negative Proposition, how are the terms distributed? Choose the correct option from the following :",
        opts: ["(A) Subject is distributed, predicate is undistributed", "(B) Subject is undistributed, predicate is distributed", "(C) Both the terms are distributed", "(D) Neither the subject is distributed nor the predicate"],
        ans: 2,
        exp: "<b>(C) Both the terms are distributed</b><br>A Universal Negative proposition is an E proposition (No S is P), in which both the subject and the predicate are distributed."
    },
    {
        q: "<b>Nov 2021</b><br>Pick the correct option to represent the given argument<br><br>All artists are egoists<br>Some artists are paupers<br>Therefore, some paupers are egoists<br><br>Choose the correct answer from the options given below",
        opts: ["(A) A II - I figure", "(B) A II - II figure", "(C) A II - III figure", "(D) A II - IV figure"],
        ans: 2,
        exp: "<b>(C) A II - III figure</b><br>The major premise 'All artists are egoists' is A, the minor premise 'Some artists are paupers' is I and the conclusion 'Some paupers are egoists' is I, so the mood is AII. The middle term (artists) is the subject of both premises (M-P, M-S), which is the third figure.<br>Fig. 3: Major premise M-P; Minor premise M-S; Conclusion S-P."
    },
    {
        q: "Which of the following codes correctly represents the figure and mood of the argument?<br><br>No nuclear powered submarines are commercial vessels, so no warships are commercial vessels, since all nuclear powered submarines are warships.",
        opts: ["1. EAE-IV", "2. AEE-II", "3. EAE-III", "4. EEA-II"],
        ans: 2,
        exp: "<b>3. EAE-III</b><br>Standard form:<br>No nuclear-powered submarines are commercial vessels. (E)<br>All nuclear-powered submarines are warships. (A)<br>Therefore no warships are commercial vessels. (E)<br>Mood: EAE. The middle term (nuclear-powered submarines) is the subject of both premises, so Figure: III."
    }
];