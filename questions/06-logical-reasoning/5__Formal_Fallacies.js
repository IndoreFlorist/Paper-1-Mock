var rawQuestions = [
    {
        q: "<b>Dec 2019</b><br>Consider the following statements and choose the right option<br><br>(i) Middle term should be distributed in at least one premise<br>(ii) Middle term should be present in the conclusion<br>(iii) Both premises can be particular in a valid argument<br>(iv) Both premises can be negative in a valid argument<br><br>Codes:",
        opts: ["(A) (iii) and (iv)", "(B) Only (iii)", "(C) Only (i)", "(D) (ii) and (iii)"],
        ans: 2,
        exp: "<b>(C) Only (i)</b><br>Six Rules for the Validity of Syllogisms:<br>Rule 1: Exactly three categorical terms.<br>Rule 2: A distributed middle term.<br>Rule 3: If a term is distributed in the conclusion, it must be distributed in the premises.<br>Rule 4: A valid syllogism can't have two negative premises.<br>Rule 5: The conclusion of a syllogism must be negative, if either premise is negative.<br>Rule 6: No particular conclusion can be drawn from two universal premises."
    },
    {
        q: "<b>Dec 2019</b><br>“If it rains, then the drought will end. The drought has ended. Therefore. it rained”.<br><br>Which kind of fallacy does this commit?",
        opts: ["(A) Deductive fallacy", "(B) Inductive fallacy", "(C) Abductive fallacy", "(D) Informal fallacy"],
        ans: 0,
        exp: "<b>(A) Deductive fallacy</b><br>Deductive fallacy is applicable where the extension of the conclusion is less or equivalent to its premises. A formal fallacy exists because of an error in the structure of the argument; it is defined as a deductive argument that is invalid. The argument itself could have true premises, but still have a false conclusion.<br>Inductive fallacy: reasoning that is never treated as conclusively valid.<br>Abductive fallacy occurs when a best-in-field fallacy is committed and presented; the conclusion of a good abductive argument is merely the best explanation we know of.<br>Informal fallacy originates in an error in reasoning other than an improper logical form; there is no violation of any rule of inference as such."
    },
    {
        q: "<b>Nov 2021</b><br>Identify the fallacy committed in the argument.<br><br>All men who understand women are potentially perfect husbands.<br>All potentially perfect husbands are men of infinite patience.<br>Therefore, some men of infinite patience are men who understand women.",
        opts: ["a) Existential fallacy", "b) Fallacy of Illicit Major", "c) Fallacy of Illicit Minor", "d) Fallacy of Undistributed Middle"],
        ans: 0,
        exp: "<b>a) Existential fallacy</b><br>Both premises are universal (All) but the conclusion is particular (some).<br>In valid categorical syllogisms particular propositions cannot be drawn properly from universal premises."
    },
    {
        q: "<b>Nov 2021</b><br>Identify the fallacy committed in the argument<br><br>No tragic actors are happy men.<br>Some comedians are not happy men.<br>Therefore, some comedians are not tragic actors.",
        opts: ["(A) Existential fallacy", "(B) Fallacy of Exclusive Premises", "(C) Fallacy of Illicit Major", "(D) Fallacy of Undistributed"],
        ans: 1,
        exp: "<b>(B) Fallacy of Exclusive Premises</b><br>Both premises are negative (No ... / Some ... not).<br>A valid categorical syllogism may not have two negative premises."
    },
    {
        q: "<b>Nov 2021</b><br>Identify the fallacy committed in the argument below.<br><br>Some good actors are not strong men.<br>All professional wrestlers are strong men.<br><br>Therefore, all professional wrestlers are good actors.",
        opts: ["(A) Fallacy of drawing affirmative conclusions from negative premise", "(B) Fallacy of Illict Major", "(C) Fallacy of Illict Minor", "(D) Fallacy of Undistributed Middle"],
        ans: 0,
        exp: "<b>(A) Fallacy of drawing affirmative conclusions from negative premise</b><br>One premise is negative (Some good actors are not strong men) but the conclusion is affirmative.<br>If either premise of a valid categorical syllogism is negative, the conclusion must be negative."
    },
    {
        q: "<b>Nov 2021</b><br>Identify the fallacy committed in the argument:<br><br>Some birds are not beautiful creatures.<br>All dogs are beautiful creatures.<br><br>Therefore, no dogs are birds.",
        opts: ["(A) Fallacy of Exclusive Premises", "(B) Fallacy of the Illicit Process of Major Term", "(C) Fallacy of the Illicit Process of Minor Term", "(D) Fallacy of the Undistributed Middle Term"],
        ans: 1,
        exp: "<b>(B) Fallacy of the Illicit Process of Major Term</b><br>The term 'birds' is distributed in the conclusion (No dogs are birds) but is not distributed in the premise (Some birds are not ...). No proposition has both subject and predicate distributed here.<br>In a valid categorical syllogism if a term is distributed in the conclusion, it must be distributed in the premises."
    },
    {
        q: "<b>DEC 2021</b><br>The Fallacy committed in the argument<br><br>\"All textbooks are books intended for careful study.<br>Some reference books are books intended for careful study.<br><br>Therefore, some reference books are textbooks.\" is",
        opts: ["(A) Fallacy of four Terms", "(B) Illicit Major", "(C) Illicit Minor", "(D) Undistributed Middle"],
        ans: 3,
        exp: "<b>(D) Undistributed Middle</b><br>The middle term 'books intended for careful study' is the predicate of an A proposition and the predicate of an I proposition, so it is not distributed in either premise.<br>In a valid categorical syllogism the middle term must be distributed in at least one of the premises."
    },
    {
        q: "<b>DEC 2021</b><br>Identify the fallacy committed in the argument<br><br>All cats are animals.<br>All dogs are animals.<br><br>Therefore, all dogs are cats.",
        opts: ["(A) Existential Fallacy", "(B) Fallacy of Four Terms", "(C) Fallacy of the Exclusive Premises", "(D) Fallacy of the Undistributed Middle Term"],
        ans: 3,
        exp: "<b>(D) Fallacy of the Undistributed Middle Term</b><br>The middle term 'animals' is not distributed in either premise.<br>In a valid categorical syllogism the middle term must be distributed in at least one of the premises."
    },
    {
        q: "<b>DEC 2021</b><br>Identify the fallacy committed in the argument<br>some spaniels are not good hunters.<br>All spaniels are gentle dogs.<br><br>Therefore, no gentle dogs are good hunters.",
        opts: ["(A) Fallacy of Exclusive Premises", "(B) Fallacy of Four Terms", "(C) Fallacy of Illicit Major", "(D) Fallacy of Illicit Minor"],
        ans: 3,
        exp: "<b>(D) Fallacy of Illicit Minor</b><br>The minor term here is 'gentle dogs', which is not distributed in the minor premise \"All spaniels are gentle dogs\" because this premise is only defining a property of possibly some dogs, yet it is distributed in the conclusion."
    },
    {
        q: "<b>DEC 2021</b><br>Name the fallacy committed in the argument.<br><br>All household pets are domestic animals.<br>No unicorns are domestic animals.<br>Therefore, some unicorns are not household pets.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) Affirmative conclusion from Negative Premises", "(B) Exclusive fallacy", "(C) Existential fallacy", "(D) Undistributed Middle"],
        ans: 2,
        exp: "<b>(C) Existential fallacy</b><br>Both premises are universal (All / No) but the conclusion is particular (some).<br>In valid categorical syllogisms particular propositions cannot be drawn properly from universal premises."
    },
    {
        q: "<b>DEC 2021</b><br>Given below are two statements:<br><br>Statement I: An informal fallacy is one that may be identified through mere inspection of the form or structure of an argument.<br><br>Statement II: Formal fallacy is one that can be detected only through analysis of the content of the argument.<br><br>In the light of the above statements, Choose the most appropriate answer from the options given below:",
        opts: ["(A) Both Statement I and Statement II are correct.", "(B) Both Statement I and Statement II are incorrect.", "(C) Statement I is correct but Statement II is incorrect.", "(D) Statement I is incorrect but Statement II is correct."],
        ans: 1,
        exp: "<b>(B) Both Statement I and Statement II are incorrect.</b><br>Statement I is incorrect: a formal fallacy (not an informal one) is identified by inspecting the form or structure of an argument. A formal fallacy occurs when a deductive argument is invalid; it always has a flaw in its logical structure.<br>Statement II is incorrect: an informal fallacy is a logical error found in the argument's content, not in its form or logic. A formal fallacy is not one detected only through analysis of content."
    },
    {
        q: "<b>DEC 2021</b><br>Given below are two statements :<br><br>Statement I : A formal fallacy is one that may be identified through mere inspection of the form or structure of an argument.<br><br>Statement II : Formal fallacies are found only in deductive arguments that have identifiable forms.<br><br>In the light of the above statements, Choose the correct answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are true.", "(B) Both Statement I and Statement II are false.", "(C) Statement I is true but Statement II is false.", "(D) Statement I is false but Statement II is true."],
        ans: 0,
        exp: "<b>(A) Both Statement I and Statement II are true.</b><br>Formal fallacy is defined as a deductive argument that is invalid. The conclusions do not follow from the premises. Formal fallacies are identified by critically examining the structure of the argument exclusive of the individual statements, and are found only in deductive arguments with identifiable forms. They look like and mimic valid logical arguments, but are in fact invalid.<br>Example: Premise: All humans are mammals. Premise: All cats are mammals. Conclusion: All humans are cats. Both premises are true, but the conclusion is false."
    },
    {
        q: "<b>Oct 2022</b><br>Which one of the following formal fallacies is committed in the given argument?<br><br>All athletes are sportspersons.<br>No actor is an athlete.<br><br>Therefore, no actors are sportspersons.",
        opts: ["(A) Fallacy of Illicit process of Major Term", "(B) Fallacy of Illicit process of Minor Term", "(C) Fallacy of Exclusive Premises", "(D) Existential Fallacy"],
        ans: 0,
        exp: "<b>(A) Fallacy of Illicit process of Major Term</b><br>The major term is 'sportspersons'. It is distributed in the conclusion (negative proposition) but is not distributed in the major premise (All athletes are sportspersons). Thus, the Fallacy of the Illicit process of Major Term is committed."
    },
    {
        q: "<b>Oct 2022</b><br>Which one of the following formal fallacies is committed in the given argument?<br><br>All snakes are reptiles.<br>Some snakes are poisonous creatures.<br><br>Therefore, all poisonous creatures are reptiles.",
        opts: ["(A) Fallacy of Illicit process of major term", "(B) Fallacy of Illicit process of minor term", "(C) Fallacy of undistributed middle term", "(D) Fallacy of four terms"],
        ans: 1,
        exp: "<b>(B) Fallacy of Illicit process of minor term</b><br>A categorical syllogism that uses an illicit minor is faulty because the minor term is not distributed in the minor premise but is distributed in the conclusion.<br>Form: All A are B. Some A are C. Therefore, all C are B.<br>Here snakes (A), reptiles (B), poisonous creatures (C)."
    },
    {
        q: "<b>Oct 2022</b><br>Identify the formal fallacy committed in the argument:<br><br>All criminals are human beings.<br>All saints are human beings<br><br>Therefore, all saints are criminals.",
        opts: ["(A) Fallacy of Illicit process of Major Term", "(B) Fallacy of Illicit process of Minor Team", "(C) Fallacy of undistributed Middle Term", "(D) Fallacy of Four Terms"],
        ans: 2,
        exp: "<b>(C) Fallacy of undistributed Middle Term</b><br>'Human beings' is the common term between the two premises (the middle term) but is never distributed, so this syllogism is invalid. Human beings would be distributed by introducing a premise that states either All human beings are criminals or Some human beings are criminals."
    },
    {
        q: "<b>Oct 2022</b><br>‘If Sneha tampered with the examination script, then she is guilty of a crime.<br><br>Sneha did not tamper with the examination script.<br>Therefore, sneha is not guilty of a crime’.<br><br>Which fallacy is committed in the above argument?",
        opts: ["(A) Fallacy of affirming the antecedent", "(B) Fallacy of composition", "(C) Fallacy of denying the antecedent", "(D) Fallacy of affirming the consequent"],
        ans: 2,
        exp: "<b>(C) Fallacy of denying the antecedent</b><br>Denying the Antecedent (Fallacy of the inverse):<br>If A is true, then B is true.<br>A is not true.<br>Therefore, B is not true.<br>Valid forms for contrast: Modus Ponens (affirming the antecedent) and Modus Tollens (denying the consequent)."
    },
    {
        q: "<b>Feb 2023</b><br>\"If capital punishment actually deterred people from committing serious crimes, then it would be justified. But as it does not have that deterrent effect, it is not a justifiable practice\". Which formal fallacy is committed in the above argument ?",
        opts: ["(A) Affirming the consequent", "(B) Undistributed middle", "(C) Existential fallacy", "(D) Denying the antecedent"],
        ans: 3,
        exp: "<b>(D) Denying the antecedent</b><br>If capital punishment actually deterred people from committing serious crimes, then it would be justified. It does not have that deterrent effect. Therefore, it is not justifiable.<br>Denying the Antecedent (Fallacy of the inverse): If A then B; A is not true; therefore B is not true."
    },
    {
        q: "<b>March 2023</b><br>\"If I were, a heavy smoker, smoking would shorten my life. That's why I do not smoke. And I expect to live a long and healthy life\". Which fallacy is committed in the above argument?",
        opts: ["(A) Existential fallacy", "(B) Undistributed middle", "(C) Affirming the consequent", "(D) Denying the antecedent"],
        ans: 3,
        exp: "<b>(D) Denying the antecedent</b><br>If I were a heavy smoker (A), smoking would shorten my life (B). I am not a heavy smoker (not A). Therefore, I will not have a shortened life (not B).<br>This is Denying the Antecedent (Fallacy of the inverse)."
    },
    {
        q: "<b>March 2023</b><br>“Supporters of the ABC Political Party are against gun control and Republicans are also against gun control, so some Republicans must be supporters of ABC Political Party.” Identify the fallacy in the above argument.",
        opts: ["(A) Affirming the consequent", "(B) Denying the antecedent", "(C) Ad hominem", "(D) Undistributed Middle"],
        ans: 3,
        exp: "<b>(D) Undistributed Middle</b><br>The middle term 'against gun control' is the predicate of two affirmative propositions, so it is not distributed in either premise.<br>Supporters of ABC Political Party are against gun control; Republicans are against gun control; so some Republicans must be supporters of ABC Political Party."
    },
    {
        q: "<b>March 2023</b><br>\"If Ramirez is a member of the animal rights society; then he opposes cock fighting. Ramirez opposes cock fighting. Therefore Ramirez is a member of the animal rights Society.\" Identify the fallacy in the above argument.",
        opts: ["(A) Denying the antecedent", "(B) Affirming the consequent", "(C) Existential fallacy", "(D) Undistributed middle"],
        ans: 1,
        exp: "<b>(B) Affirming the consequent</b><br>Affirming the Consequent (Fallacy of the converse):<br>If A is true, then B is true.<br>B is true.<br>Therefore, A is true."
    },
    {
        q: "<b>June 2023</b><br>\"If the plane takes off from the airstrip B then it is south bound. The plane did not take off from the airstrip B, therefore it is not southbound.\" Identify the formal fallacy in the above argument.",
        opts: ["(A) Exclusive premises", "(B) Fallacy of four terms", "(C) Affirming the consequent", "(D) Denying the antecedent"],
        ans: 3,
        exp: "<b>(D) Denying the antecedent</b><br>Denying the Antecedent (Fallacy of the inverse):<br>If A is true, then B is true.<br>A is not true.<br>Therefore, B is not true."
    },
    {
        q: "<b>June 2023</b><br>\"No poets are scientists. Some artists are poets. Therefore some artists are scientists.\" Which formal fallacy is committed in this argument?",
        opts: ["(A) Denying the antecedent", "(B) Exclusive premises", "(C) Fallacy of drawing an affirmative conclusion from a negative premise", "(D) Existential fallacy"],
        ans: 2,
        exp: "<b>(C) Fallacy of drawing an affirmative conclusion from a negative premise</b><br>One premise is negative (No poets are scientists) but the conclusion is affirmative.<br>If either premise of a valid categorical syllogism is negative, the conclusion must be negative."
    },
    {
        q: "<b>June 2023</b><br>Identify the formal fallacy committed in the following argument. \"All household pets are domestic animals. No unicorns are domestic animals. Therefore some unicorns are not household pets\".",
        opts: ["(A) Existential fallacy", "(B) Denying the antecedent", "(C) Affirming the consequent", "(D) Drawing affirmative conclusion from negative premises"],
        ans: 0,
        exp: "<b>(A) Existential fallacy</b><br>Both premises are universal but the conclusion is particular.<br>In valid categorical syllogisms particular propositions cannot be drawn properly from universal premises."
    },
    {
        q: "<b>June 2023</b><br>Which formal fallacy is committed in the following argument: \"if your pet is a cat, then it as a tail.<br>Your pet is not a cat. therefore your pet does not have a tail\"?",
        opts: ["(A) Existential fallacy", "(B) Denying the antecedent", "(C) Exclusive Premises", "(D) Affirming the Consequent"],
        ans: 1,
        exp: "<b>(B) Denying the antecedent</b><br>Denying the Antecedent (Fallacy of the inverse):<br>If A is true, then B is true.<br>A is not true.<br>Therefore, B is not true."
    },
    {
        q: "<b>June 2023</b><br>Identify the formal fallacy committed in the following argument: \"Some good actors are not powerful Athletes, All professional wrestlers are powerful athletes. Therefore all professional wrestlers are good actors\".",
        opts: ["(A) Exclusive premises", "(B) Existential fallacy", "(C) Affirmative conclusion from negative premises", "(D) Affirming the consequent"],
        ans: 2,
        exp: "<b>(C) Affirmative conclusion from negative premises</b><br>One premise is negative but the conclusion is affirmative.<br>If either premise of a valid categorical syllogism is negative, the conclusion must be negative."
    }
];