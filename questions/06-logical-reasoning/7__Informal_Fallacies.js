var rawQuestions = [
    {
        q: "<b>DEC 2019</b><br>A fallacy in which an opponent position is depicted as being more extreme or unreasonable than is justified by what was actually asserted is called",
        opts: ["(A) Argumentum ad Baculum", "(B) The red herring", "(C) Argumentum ad Hominem", "(D) Straw man"],
        ans: 3,
        exp: "<b>(D) Straw man</b><br>Straw Man: a way of arguing against some view by presenting an opponent's position as one that is easily torn apart. It is much easier to win a fight against a man made of straw than against one made of flesh and blood. The fallacy results when we adopt the most extreme view possible."
    },
    {
        q: "<b>DEC 2019</b><br>\"Everyone is going to the party. You should go too.\" This inference commits which kind of fallacy?",
        opts: ["(A) Ad Populum", "(B) Equivocation", "(C) Ad Verecundiam", "(D) Ad Ignorantiam"],
        ans: 0,
        exp: "<b>(A) Ad Populum</b><br>Ad Populum (bandwagon fallacy, appeal to people): something is considered true or good solely because it is popular."
    },
    {
        q: "<b>DEC 2019</b><br>The inference \"A mouse is an animal. Therefore, a large mouse is a large animal\" commits which one of the following fallacies?",
        opts: ["(A) Straw man", "(B) Slipper slope", "(C) Equivocation", "(D) Fallacy of composition"],
        ans: 2,
        exp: "<b>(C) Equivocation</b><br>Equivocation (doublespeak): using an ambiguous term in more than one sense, thus making an argument misleading. Here the word 'large' is used with different meanings."
    },
    {
        q: "<b>DEC 2019</b><br>An informed fallacy in which the conclusion of an argument is stated or assumed in any one of the premises is known as:<br>(i) Begging the question<br>(ii) Circular argument<br>(iii) Ignoratioelenchi<br>(iv) Petitioprincipii<br><br>Choose the correct option from the following:",
        opts: ["(A) (i), (ii) and (iv)", "(B) (i) and (iii)", "(C) (iii) only", "(D) (ii), (iii) and (iv)"],
        ans: 0,
        exp: "<b>(A) (i), (ii) and (iv)</b><br>Begging the question (Petitio principii) is the fallacy of presumption: cleverly assuming the conclusion in the premises instead of proving it. It is also called a circular argument. Ignoratio elenchi is the irrelevant conclusion, a different fallacy."
    },
    {
        q: "<b>DEC 2019</b><br>\"In this hospital, some nurses don't wear white dress. some doctors have private practice and medicines prescribed are of high cost. Therefore. treatment in this hospital is of poor quality\". What fallacy does this argument make?",
        opts: ["(A) Fallacy of composition", "(B) Slippery slope", "(C) Fallacy of accident", "(D) Fallacy of division"],
        ans: 1,
        exp: "<b>(B) Slippery slope</b><br>Slippery slope (absurd extrapolation): a relatively insignificant first event is suggested to lead to a more significant event, which in turn leads to a more significant event, and so on. (Answer as per the source PDF.)"
    },
    {
        q: "<b>DEC 2019</b><br>'Mr. X lives in a slum and is unemployed. Therefore, Mr X deserves to be a minister.' Which kind of fallacy is committed in this argument?",
        opts: ["(A) Fallacy of Composition", "(B) Ad misericordiam", "(C) Fallacy of Division", "(D) Fallacy of Accident"],
        ans: 1,
        exp: "<b>(B) Ad misericordiam</b><br>Ad Misericordiam (appeal to pity): the argument boils down to an appeal to a 'merciful heart' or a related emotion to gain acceptance of the conclusion."
    },
    {
        q: "<b>NOV 2020</b><br>\"Everyone believes that there is a soul. Therefore, you should also believe it.\" This inference commits which kind of fallacy?",
        opts: ["(A) Adhominem", "(B) Adpopulum", "(C) Fallacy of Accident", "(D) Fallacy of Ambiguity."],
        ans: 1,
        exp: "<b>(B) Adpopulum</b><br>Argumentum ad populum (appeal to the people): a proposition must be true because most people believe it to be true - 'If many believe so, it is so'."
    },
    {
        q: "<b>NOV 2020</b><br>\"God is great because He does great things\". This inference commits which kind of fallacy?",
        opts: ["(A) Ad populum", "(B) Fallacy of Composition", "(C) Fallacy of Division", "(D) PetitioPrincipii"],
        ans: 3,
        exp: "<b>(D) PetitioPrincipii</b><br>Petitio Principii (begging the question) is also known as a circular argument: the premises presume, openly or covertly, the very conclusion that is to be demonstrated."
    },
    {
        q: "<b>NOV 2020</b><br>\"Have you stopped telling lies?\"<br>This type of question commits which kind of fallacy?",
        opts: ["a) Fallacy of Complex Question", "b) Fallacy of Ambiguity", "c) Fallacy of Equivocation", "d) Fallacy of Accident"],
        ans: 0,
        exp: "<b>a) Fallacy of Complex Question</b><br>Complex question (loaded question, trick question, fallacy of many questions): the answer to a given question presupposes a prior answer to a prior question."
    },
    {
        q: "<b>NOV 2020</b><br>\"Planets are big. Therefore, the atoms from which they are made are big\". This inference commits which kind of fallacy?",
        opts: ["a) Fallacy of Division", "b) Fallacy of Ambiguity", "c) Fallacy of Equivocation", "d) Ad populum"],
        ans: 0,
        exp: "<b>a) Fallacy of Division</b><br>Fallacy of Division: inferring that something is true of one or more of the parts from the fact that it is true of the whole."
    },
    {
        q: "<b>NOV 2020</b><br>\"Mr. X is penniless. Therefore, he should be preferred for admission to college\". This reasoning represents which kind of fallacy?",
        opts: ["1. Ad hominem", "2. Ad misericordiam", "3. Ad baculum", "4. Lgnoratioelenchi"],
        ans: 1,
        exp: "<b>2. Ad misericordiam</b><br>Ad misericordiam (appeal to pity, appeal to sympathy): the arguer tries to win support by evoking pity from the listener."
    },
    {
        q: "<b>NOV 2020</b><br>What fallacy is committed in the following argument?<br>\"Mr. X is wrong in what he said because he is undisciplined by nature\"",
        opts: ["(A) Ad hominem", "(B) Ad populum", "(C) Ad hoc", "(D) Ad misericordiam"],
        ans: 0,
        exp: "<b>(A) Ad hominem</b><br>Ad hominem (against the person, abusive fallacy): the arguer attacks his/her opponent's character instead of his/her argument."
    },
    {
        q: "<b>DEC 2021</b><br>Which of the following pertains to fallacy of ambiguity?",
        opts: ["(A) Equivocation", "(B) Hasty generalization", "(C) The red herring", "(D) The straw man"],
        ans: 0,
        exp: "<b>(A) Equivocation</b><br>Fallacies of ambiguity: Equivocation, Amphiboly, Accent, Composition and Division. Hasty generalization is a fallacy of weak induction; the red herring and straw man are fallacies of relevance."
    },
    {
        q: "<b>DEC 2021</b><br>Identify the fallacy committed in the following argument:<br>\"American Indians are disappearing.<br>That man is an American Indian.<br>Therefore, that man is disappearing.\"",
        opts: ["(A) Fallacy of Accident", "(B) Fallacy of Composition", "(C) Fallacy of Converse Accident", "(D) Fallacy of Division"],
        ans: 3,
        exp: "<b>(D) Fallacy of Division</b><br>Fallacy of Division: inferring that something true of the whole (the group) is true of its part (one member)."
    },
    {
        q: "<b>NOV 2021</b><br>Identify the fallacy committed in the argument: \"Since all humans are mortal, the human race must some day come to an end\".",
        opts: ["(A) Fallacy of Amphiboly", "(B) Fallacy of Composition", "(C) Fallacy of Converse Accident", "(D) Fallacy of Division"],
        ans: 1,
        exp: "<b>(B) Fallacy of Composition</b><br>Fallacy of Composition arises when somebody infers that something applies to the whole because it is true of its parts."
    },
    {
        q: "<b>NOV 2021</b><br>Identify the fallacy committed in the argument:<br>\"The policies suggested by him have no merit since he was once charged with embezzlement\".",
        opts: ["(A) Appeal to Inappropriate Authority", "(B) Appeal to Pity", "(C) Argument ad Hominem (abusive)", "(D) Argument from Ignorance"],
        ans: 2,
        exp: "<b>(C) Argument ad Hominem (abusive)</b><br>An ad hominem fallacy uses personal attacks rather than logic: it rejects a point of view based on personal characteristics or other non-relevant traits of the person who holds it."
    },
    {
        q: "<b>NOV 2021</b><br>\"Whoever thrusts a knife into another person should be arrested. Surgeons thrust a knife into another person when operating. Therefore surgeons should be arrested\". Which fallacy is committed in the following argument?",
        opts: ["(A) Hasty generalization", "(B) Fallacy of accident", "(C) Red Herring", "(D) Appeal to unqualified authority"],
        ans: 1,
        exp: "<b>(B) Fallacy of accident</b><br>The accident fallacy applies a generalization to a situation where it does not apply. The premise refers to unlawful stabbing, but the conclusion applies it to surgeons."
    },
    {
        q: "<b>NOV 2021</b><br>\"Famous Singer Himanshu says that Coffeehill chocolates are groovy. We can only conclude that Coffeehill chocolates are groovy indeed\". Which of the fallacy is committed in the above statement?",
        opts: ["(A) Hasty Generalisation", "(B) Appeal to unqualified authority", "(C) Slippery slope", "(D) Missing the point"],
        ans: 1,
        exp: "<b>(B) Appeal to unqualified authority</b><br>Appeal to Unqualified Authority: the authority gives advice or testimony outside their field of knowledge. A singer's opinion on chocolates is outside his expertise."
    },
    {
        q: "<b>OCT 2022</b><br>Which of the following is a type of Fallacy of Relevance?",
        opts: ["(A) The Appeal to Force", "(B) The Argument from Ignorance", "(C) Complex Question", "(D) Fallacy of Composition"],
        ans: 0,
        exp: "<b>(A) The Appeal to Force</b><br>Fallacies of relevance include argument ad baculum (appeal to force), ad misericordiam, ad populum, ad hominem, straw man, red herring and tu quoque."
    },
    {
        q: "<b>OCT 2022</b><br>Which of the logical informal fallacy is committed in the following argument \"Mr. X used abusive language toward the child who threw a stone at his car. Since child abuse is a crime, he should be reported to the authorities\"?",
        opts: ["(A) Appeal to Emotion", "(B) Hasty generalisation", "(C) Equivocation", "(D) Appeal to force"],
        ans: 2,
        exp: "<b>(C) Equivocation</b><br>Equivocation: the word 'abuse' is used in two different senses - abusive language and child abuse (physical, sexual or emotional harm) - which are not equivalent."
    },
    {
        q: "<b>OCT 2022</b><br>Which informal logical fallacy is committed in the following argument - No one has shown that aliens did not create the crop circles. So, the crop circles must have been made by the aliens?",
        opts: ["(A) Begging the question", "(B) Appeal to Ignorance", "(C) Fallacy of accident", "(D) Appeal to authority"],
        ans: 1,
        exp: "<b>(B) Appeal to Ignorance</b><br>Appeal to Ignorance (argumentum ad ignorantiam): assuming a conclusion based primarily on lack of evidence to the contrary. Absence of evidence is not evidence of absence."
    },
    {
        q: "<b>OCT 2022</b><br>Match List I with List II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I</b></td><td><b>List II</b></td></tr><tr><td>(a) Fallacy that occurs due to appeal to non- rational methods of intimidation</td><td>(I) Argumentum ad Hominem</td></tr><tr><td>(b) Fallacy that occurs when an argument makes an appeal to the character of the person</td><td>(II) Accident Fallacy</td></tr><tr><td>(c) Fallacy that occurs when an argument is in the form of emotional \"appeal to the gallery\"</td><td>(III) Argumentum ad Populum</td></tr><tr><td>(d) Fallacy that occurs when a general rule is applied to a case in which the rule is inapplicable</td><td>(IV) Argumentum ad Baculum (force)</td></tr></table><br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(I), (b)-(II), (c)-(III), (d)-(IV)", "(B) (a)-(III), (b)-(II), (c)-(I), (d)-(IV)", "(C) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)", "(D) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)"],
        ans: 3,
        exp: "<b>(D) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)</b><br>Intimidation is argumentum ad baculum (force); appeal to the character of the person is ad hominem; appeal to the gallery is ad populum; applying a general rule where it is inapplicable is the accident fallacy."
    },
    {
        q: "<b>OCT 2022</b><br>Which logical informal fallacy is committed in the following argument, \"No one has proved that global warming is actually occurring, so there is no reason to believe that it is actually occurring.\"?",
        opts: ["(A) Begging the question", "(B) Equivocation", "(C) Appeal to ignorance", "(D) Hasty generalization"],
        ans: 2,
        exp: "<b>(C) Appeal to ignorance</b><br>Appeal to ignorance: the conclusion is assumed true (or false) merely because there is no evidence against (or for) it."
    },
    {
        q: "<b>OCT 2022</b><br>A wise sage has said, \"The hunger for knowledge is more difficult to remove than the hunger for food. Therefore, one should stick to the food.\" Which fallacy is committed in this argument?",
        opts: ["(A) Begging the Question", "(B) False Dilemma", "(C) Ignoration elenchi (irrelevant conclusion)", "(D) Appeal to Emotion"],
        ans: 2,
        exp: "<b>(C) Ignoration elenchi (irrelevant conclusion)</b><br>Ignoratio elenchi (irrelevant conclusion): the argument fails to address the subject in question. The conclusion 'one should stick to the food' does not follow from the premise about the hunger for knowledge."
    },
    {
        q: "<b>OCT 2022</b><br>\"We should value the Moon more than the Sun because the Moon shines when it is dark whereas the Sun shines when there is light anyway.\" This statement commits the fallacy of:",
        opts: ["(A) Appeal to Emotion", "(B) Fallacy of False Cause", "(C) False Dilemma", "(D) Equivocation"],
        ans: 1,
        exp: "<b>(B) Fallacy of False Cause</b><br>False Cause: claiming a cause is true or false based on what we know about the effect, in a claim of causality that has not been properly established. (Answer as per the source PDF.)"
    },
    {
        q: "<b>MAR 2023</b><br>Which informal fallacy is committed in the following statement - \"Of course you want to buy XYZ toothpaste. There must be a reason, why, 90 per cent of India brushes with XYZ toothpaste\"",
        opts: ["(A) Slippery slope", "(B) Hasty generalization", "(C) Argumentum ad populum", "(D) Strawman Fallacy"],
        ans: 2,
        exp: "<b>(C) Argumentum ad populum</b><br>Argumentum ad populum: something is considered good or true solely because it is popular (90 per cent of India uses it). Note: the source PDF marks (A) Slippery slope, which does not fit the argument; ad populum is the fitting fallacy."
    },
    {
        q: "<b>MAR 2023</b><br>\"Number 3 is a prime number, so are numbers 5 and 7. Therefore, it is clear that all odd numbers are prime numbers.\" Which fallacy is committed in the above argument?",
        opts: ["(A) Missing the point", "(B) Irrelevant conclusion", "(C) Hasty Generalisation", "(D) Slippery Slope"],
        ans: 2,
        exp: "<b>(C) Hasty Generalisation</b><br>Hasty Generalisation (converse accident, overgeneralisation): drawing a conclusion based on a small sample size."
    },
    {
        q: "<b>MAR 2023</b><br>\"Does the distinguished Member of the Parliament really believe that the Indian public is so naive that they will endorse just any stopgap measure\"? Which fallacy is committed in the above argument?",
        opts: ["(A) Begging the question", "(B) Red Herring", "(C) Appeal to Ignorance", "(D) Complex Question"],
        ans: 3,
        exp: "<b>(D) Complex Question</b><br>A complex question contains a presupposition (that the Indian public is naive) that is not explicitly stated; the question cannot be answered without first agreeing to it."
    },
    {
        q: "<b>MAR 2023</b><br>Identify the fallacy committed in the following argument: \"My opponent cheated on his taxes. He hired an illegal migrant as a nanny. His views on tax reforms simply cannot be trusted\".",
        opts: ["(A) Inappropriate authority", "(B) Ad hominem", "(C) Appeal to ignorance", "(D) Begging the question"],
        ans: 1,
        exp: "<b>(B) Ad hominem</b><br>Ad hominem: the opponent's character is attacked instead of the argument."
    },
    {
        q: "<b>MAR 2023</b><br>\"Although I am very happy to win the lottery, I am also a little worried. The last time I had won a lottery, my pocket was picked the next morning.\" Which logical fallacy is committed in the above argument?",
        opts: ["(A) Post hoc", "(B) Hasty generalisation", "(C) Red herring", "(D) False alternative"],
        ans: 0,
        exp: "<b>(A) Post hoc</b><br>The post hoc fallacy is also known as the false cause fallacy, questionable cause or faulty causation: assuming that because one event followed another, the first caused the second."
    },
    {
        q: "<b>MAR 2023</b><br>Which fallacy is committed in the following argument ?<br>\"When I called you, you were neither in your class nor in the laboratory. Why are you avoiding me?\"",
        opts: ["(A) Circular argument", "(B) 'Red herring'", "(C) Complex question", "(D) Slippery slope"],
        ans: 1,
        exp: "<b>(B) 'Red herring'</b><br>A red herring introduces irrelevant information to divert attention away from the main topic. The listener's absence from class or laboratory is not relevant to why the call was not answered."
    },
    {
        q: "<b>MAR 2023</b><br>\"Critics of Freudian theory should get themselves psychoanalyzed because opposition to the theory is itself caused by unconscious resistance arising from the Oedipal complex. Which according to Freud distorts one's thinking.\" Which logical fallacy is committed in the above argument?",
        opts: ["(A) Appeal to authority", "(B) Slippery slope", "(C) Begging the Question", "(D) Hasty generalization"],
        ans: 2,
        exp: "<b>(C) Begging the Question</b><br>Begging the Question (petitio principii, circular argument): the conclusion is assumed in one of the premises."
    },
    {
        q: "<b>Dec 2023</b><br>To solve our transportation problems, we have to put more money into production of bicycles. The CEO of ABCD Company limited says so. \"Which of the following fallacy is committed in the above argument ?",
        opts: ["(1) Slippery Slope", "(2) Appeal to Inappropriate Authority", "(3) Ad Hominem", "(4) Hasty Generalisation"],
        ans: 1,
        exp: "<b>(2) Appeal to Inappropriate Authority</b><br>Appeal to inappropriate authority: the authority giving the testimony (a company CEO with a stake in bicycles) is not a qualified or neutral authority on the transportation problem."
    },
    {
        q: "<b>Dec 2023</b><br>Which fallacy is committed in the following argument ? \"The universe must be spherical in form because all its constituent parts are spherical in form\"?",
        opts: ["(1) Circular argument", "(2) Red herring", "(3) Slippery slope", "(4) Fallacy of composition"],
        ans: 3,
        exp: "<b>(4) Fallacy of composition</b><br>Fallacy of composition: inferring that something is true of the whole because it is true of its parts."
    },
    {
        q: "<b>Dec 2023</b><br>\"More laws have been added on the books in past five years than ever before, yet the number of crimes committed during the same period has significantly increased. Therefore, to bring the crime rate down, we must eliminate the laws\". Which fallacy is committed in the above statement?",
        opts: ["(1) Red herring", "(2) Straw man", "(3) Slippery slope", "(4) False cause"],
        ans: 3,
        exp: "<b>(4) False cause</b><br>"
    },
    {
        q: "<b>Dec 2023</b><br>\"It is so obvious that this world was created by an intelligent God Just look at the amazing degree of organization that the world displays.\" Which fallacy is committed in this argument?",
        opts: ["1. Fallacy of composition", "2. Begging the Question", "3. Straw man", "4. False Cause"],
        ans: 1,
        exp: "<b>2. Begging the Question</b><br>"
    },
    {
        q: "<b>Dec 2023</b><br>\"No one has been ever able to prove that Glaciers in the arctic region are melting because of Global warming. Therefore, glaciers in the arctic region must be melting on their own.\" Which fallacy is committed in the above statement?",
        opts: ["1. Fallacy of Accident", "2. Slippery Slope", "3. Hasty Generalisation", "4. Appeal to Ignorance"],
        ans: 3,
        exp: "<b>4. Appeal to Ignorance</b><br>Appeal to Ignorance: arguing that a conclusion must be true because there is no evidence against it, wrongly shifting the burden of proof away from the one making the claim."
    },
    {
        q: "<b>Dec 2023</b><br>\"Either you let me go to Las Vegas for a vacation or I will be miserable for the rest of my life. I am sure you don't want to see me miserable so you have a clear decision to allow me to go for a vacation to Las Vegas.\" Which fallacy is committed in this statement?",
        opts: ["1. Appeal to force", "2. False Dichotomy", "3. False Cause", "4. Complex Question"],
        ans: 1,
        exp: "<b>2. False Dichotomy</b><br>A false dilemma (false dichotomy, false binary) is an informal fallacy based on a premise that erroneously limits what options are available."
    }
];