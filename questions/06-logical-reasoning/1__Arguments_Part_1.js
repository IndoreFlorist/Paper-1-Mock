var rawQuestions = [
    {
        q: "<b>June 2014</b><br>“If a large diamond is cut up into little bits, it will lose its value just as an army is divided up into small units of soldiers, it loses its strength.”<br><br>The argument put above may be called as",
        opts: ["(A) Analogical", "(B) Deductive", "(C) Statistical", "(D) Causal"],
        ans: 0,
        exp: "<b>(A) Analogical</b><br>Analogical reasoning (argument by analogy) suggests that if two or more things are similar in one way, they are probably similar in other ways. Analogical arguments are a type of inductive argument: they use the similarities between two things to infer that they are alike in some other aspect as well."
    },
    {
        q: "<b>June 2014</b><br>Given below are some characteristics of logical argument. Select the code which expresses a characteristic which is not of inductive in character.",
        opts: ["(A) The conclusion is claimed to follow from its premises.", "(B) The conclusion is based on causal relation.", "(C) The conclusion conclusively follows from its premises.", "(D) The conclusion is based on observation and experiment."],
        ans: 2,
        exp: "<b>(C) The conclusion conclusively follows from its premises.</b><br>In the inductive approach, the premises give some evidence, not full assurance; the conclusion follows with probability, not conclusively."
    },
    {
        q: "<b>DEC 2014</b><br>“A man ought no more to value himself for being wiser than a woman if he owes his advantage to a better education, than he ought to boast of his courage for beating a man when his hands were tied.” The above passage is an instance of",
        opts: ["(A) Deductive argument", "(B) Hypothetical argument", "(C) Analogical argument", "(D) Factual argument"],
        ans: 2,
        exp: "<b>(C) Analogical argument</b><br>A hypothetical argument presents a hypothetical scenario (\"if...then...\") and explores its implications. Factual arguments attempt to establish whether something is or is not so. This passage compares two situations on the basis of similarity, so it is an analogical argument."
    },
    {
        q: "<b>DEC 2014</b><br>When in a group of propositions, one proposition is claimed to follow from the others, that group of propositions is called",
        opts: ["(A) An argument", "(B) A valid argument", "(C) An explanation", "(D) An invalid argument"],
        ans: 0,
        exp: "<b>(A) An argument</b><br>Arguments are a set of statements (premises and conclusion). The premises provide evidence, reasons and grounds for the conclusion, which is what is being argued for. An argument expresses an inference: a process of reasoning from the truth of the premises to the truth of the conclusion."
    },
    {
        q: "<b>JUNE 2015</b><br>When the purpose of a definition is to explain the use or to eliminate ambiguity the definition is called:",
        opts: ["(A) Persuasive", "(B) Stipulative", "(C) Theoretical", "(D) Lexical"],
        ans: 3,
        exp: "<b>(D) Lexical</b><br>Lexical definition (dictionary or reporting definition) closely matches the meaning of the term in common usage. It is used to avoid ambiguity, e.g., a ewe is a female sheep."
    },
    {
        q: "<b>JUNE 2015</b><br>A deductive argument is invalid if:",
        opts: ["(A) Its premises and conclusions are all true", "(B) Its premises and conclusions are all false", "(C) Its premises are true but its conclusion is false", "(D) Its premises are false but its conclusion is true"],
        ans: 2,
        exp: "<b>(C) Its premises are true but its conclusion is false</b><br>Valid arguments may have true premises with true conclusion, false premises with false conclusion, or false premises with true conclusion. A valid deductive argument can never have true premises and a false conclusion; if it does, it is invalid."
    },
    {
        q: "<b>JUNE 2015</b><br>Inductive reasoning is grounded on:",
        opts: ["(A) Harmony of nature", "(B) Integrity of nature", "(C) Unity of nature", "(D) Uniformity of nature"],
        ans: 3,
        exp: "<b>(D) Uniformity of nature</b><br>The inductive method is a \"bottom-up\" approach: we begin with specific observations, detect patterns and regularities, formulate tentative hypotheses and end up developing general conclusions or theories."
    },
    {
        q: "<b>JUNE 2015</b><br>If we want to seek new knowledge of facts about the world, we must rely on reason of the type:",
        opts: ["(A) Physiological", "(B) Inductive", "(C) Deductive", "(D) Demonstrative"],
        ans: 1,
        exp: "<b>(B) Inductive</b><br>Inductive reasoning moves from specific observations to general conclusions and so provides new knowledge about matters of fact."
    },
    {
        q: "<b>DEC 2015</b><br>Consider the argument given below:<br>'Pre - employment testing of teachers is quite fair because doctors, architects and engineers who are now employed had to face such a testing.'<br>What type of argument it is?",
        opts: ["(A) Deductive", "(B) Analogical", "(C) Psychological", "(D) Biological"],
        ans: 1,
        exp: "<b>(B) Analogical</b><br>It infers that teachers should face pre-employment testing because they are similar to doctors, architects and engineers, who do. This is an argument by analogy."
    },
    {
        q: "<b>DEC 2015</b><br>A Cluster of propositions with a structure that exhibits some inference is called",
        opts: ["(A) An inference", "(B) An argument", "(C) An explanation", "(D) A valid argument"],
        ans: 1,
        exp: "<b>(B) An argument</b><br>An argument is a set of statements (premises and conclusion) whose structure exhibits an inference."
    },
    {
        q: "<b>DEC 2015</b><br>A definition that has a meaning that is deliberately assigned to some symbol is called:",
        opts: ["(A) Lexical", "(B) Precising", "(C) Stipulative", "(D) Persuasive"],
        ans: 2,
        exp: "<b>(C) Stipulative</b><br>A stipulative definition assigns a meaning to a word for the first time. It may involve coining a new word or giving a new meaning to an old word."
    },
    {
        q: "<b>JULY 2016</b><br>Select the code, which is not correct in the context of deductive argument with two premises:",
        opts: ["(A) An argument with one true premise, one false premise and a false conclusion may be valid.", "(B) An argument with two true premises and a false conclusion may be valid.", "(C) An argument with one true premise, one false premise and a false conclusion may be valid.", "(D) An argument with two false premises and a false conclusion may be valid."],
        ans: 1,
        exp: "<b>(B) An argument with two true premises and a false conclusion may be valid.</b><br>A valid deductive argument can never have true premises and a false conclusion."
    },
    {
        q: "<b>JULY 2016</b><br>Consider the following statement and select the correct code stating the nature of the argument involved in it: To suppose that the earth is the only populated world in the infinite space is as absurd as to assert that in an entire field of millet only one grain will grow.",
        opts: ["(A) Astronomical", "(B) Anthropological", "(C) Deductive", "(D) Analogical"],
        ans: 3,
        exp: "<b>(D) Analogical</b><br>The statement compares two situations on the basis of similarity; it is an analogical argument."
    },
    {
        q: "<b>AUG 2016</b><br>Which one among the following is not a characteristic of a deductive type of argument?",
        opts: ["(A) The conclusion follows from the premise/premises necessarily.", "(B) The argument admits degree of complexity.", "(C) The argument provides us knowledge about matters of fact.", "(D) The argument must be either valid or invalid."],
        ans: 2,
        exp: "<b>(C) The argument provides us knowledge about matters of fact.</b><br>Deductive arguments are either valid or invalid and the conclusion follows necessarily. Knowledge about matters of fact comes from inductive arguments."
    },
    {
        q: "<b>AUG 2016</b><br>Select the code which states the condition of an invalid deductive argument:",
        opts: ["(A) All the premises are true but the conclusion is false.", "(B) Some of the premises are true but the conclusion is false.", "(C) All the premises are false and the conclusion is also false.", "(D) All the premises are true and the conclusion is also true."],
        ans: 0,
        exp: "<b>(A) All the premises are true but the conclusion is false.</b><br>If all the premises are true and the conclusion is false, the deductive argument is invalid."
    },
    {
        q: "<b>AUG 2016</b><br>When a definition implies a proposal to use the definition to mean what is meant by the definiens it is called",
        opts: ["(A) Lexical definition", "(B) Stipulative definition", "(C) Precising definition", "(D) Persuasive definition"],
        ans: 1,
        exp: "<b>(B) Stipulative definition</b><br>A stipulative definition assigns a meaning to a word for the first time; its purpose is to replace a more complex expression with a simple one."
    },
    {
        q: "<b>AUG 2016</b><br>Select the code which is not correct: An analogical argument is strengthened by",
        opts: ["(A) Increasing the number of entities.", "(B) Increasing the number of similar respects.", "(C) Reducing the claim made earlier stronger.", "(D) Making the conclusion stronger when premises remain unchanged"],
        ans: 3,
        exp: "<b>(D) Making the conclusion stronger when premises remain unchanged</b><br>Making the conclusion stronger while the premises remain unchanged weakens, not strengthens, an analogical argument."
    },
    {
        q: "<b>JAN 2017</b><br>Men and woman may have different reproductive strategies but neither can be considered inferior or superior to the other, any more than a bird's wings can be considered superior or inferior to a fish's fins. What type of argument it is ?",
        opts: ["(1) Biological", "(2) Physiological", "(3) Analogical", "(4) Hypothetical"],
        ans: 2,
        exp: "<b>(3) Analogical</b><br>The passage draws a comparison between two situations; it is an analogical argument."
    },
    {
        q: "<b>NOV 2017</b><br>It is Truism to say that no one was there when life first appeared on earth. Any assertion about life's origin thus, should be treated as a theory.<br>The above two statements constitute:",
        opts: ["(1) A narrative", "(2) An argument", "(3) A conjecture", "(4) A historical explanation"],
        ans: 1,
        exp: "<b>(2) An argument</b><br>The second statement is claimed to follow from the first, so together they form an argument."
    },
    {
        q: "<b>JULY 2018</b><br>Superiority of intellect depends upon its power of concentration on one theme in the same way as a concave mirror collects all the rays that strike upon it into one point.",
        opts: ["(1) Mathematical", "(2) Psychological", "(3) Analogical", "(4) Deductive"],
        ans: 2,
        exp: "<b>(3) Analogical</b><br>The passage compares intellect with a concave mirror on the basis of similarity; it is an analogical argument."
    },
    {
        q: "<b>JULY 2018</b><br>Which one is not correct in the context of deductive and inductive reasoning?",
        opts: ["(1) A deductive argument makes the claim that its conclusion is supported by its premises conclusively.", "(2) A valid deductive argument may have all false premises and true conclusion.", "(3) An inductive argument claims the probability of its conclusion.", "(4) An inductive argument cannot provide us any new information about matters of fact"],
        ans: 3,
        exp: "<b>(4) An inductive argument cannot provide us any new information about matters of fact</b><br>Inductive arguments do provide new information about matters of fact."
    },
    {
        q: "<b>JULY 2018</b><br>When the purpose of the definition is to explain some established use of a term, the definition is called",
        opts: ["(1) Stipulative", "(2) Lexical", "(3) Persuasive", "(4) Theoretical"],
        ans: 1,
        exp: "<b>(2) Lexical</b><br>Lexical definition (dictionary or reporting definition) explains the established use of a term."
    },
    {
        q: "<b>DEC 2018</b><br>Under which of the conditions an argument may be valid? Select the correct answer from the code given below:<br><br>Statements:<br>(a) When its conclusion and premises are true<br>(b) Even when its conclusion and one or more of its premises are false<br>(c) Only when its conclusion is true",
        opts: ["1. (c) only", "2. (a) and (b)", "3. (a) and (c)", "4. (a) only"],
        ans: 1,
        exp: "<b>2. (a) and (b)</b><br>Valid arguments may have true premises with a true conclusion, false premises with a false conclusion, or false premises with a true conclusion."
    },
    {
        q: "<b>DEC 2018</b><br>Truth and falsity are attributes of:",
        opts: ["1. Debates", "2. Propositions", "3. Opinions", "4. Arguments"],
        ans: 1,
        exp: "<b>2. Propositions</b><br>A proposition is the basic building block of logic. It is a declarative sentence that is either true or false. Truth is the attribute of a proposition that asserts what reality is the case."
    },
    {
        q: "<b>Nov 2021</b><br>Which of the following statements correctly apply to deductive arguments?<br><br>(a) Deductive arguments are either valid or invalid<br>(b) There must be a necessary relation between the premises and the conclusion<br>(c) Adding new premises improves the validity<br>(d) False premises may lead to a true conclusion<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) a, b and d only", "(B) a, b and c only", "(C) a, c and d only", "(D) b, c and d only"],
        ans: 0,
        exp: "<b>(A) a, b and d only</b><br>"
    },
    {
        q: "<b>Nov 2021</b><br>Which of the following statements is/ are true?<br><br>A. The terms 'true' and 'false' apply to arguments.<br>B. The terms 'true' and 'false' apply to statements.<br>C. The terms 'valid' and 'invalid' apply to arguments.<br>D. The terms 'cogent' and 'non-cogent' apply to statements.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) A and C only", "(B) A and D only", "(C) B and C only", "(D) C and D only"],
        ans: 2,
        exp: "<b>(C) B and C only</b><br>An argument is valid if and only if, whenever all of the premises are true, the conclusion must be true. Arguments are subject to validity and invalidity; statements can be true or false."
    },
    {
        q: "<b>Sep 2022</b><br>Given below are two statements:<br>Statement (I): Analogical argument is a type of inductive argument.<br>Statement (II): In an analogical argument, it is concluded that two entities alike in some respects, are therefore alike in some other respect.<br><br>In light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are correct", "(B) Both Statement (I) and Statement (II) are incorrect", "(C) Statement (I) is correct but Statement (II) is incorrect", "(D) Statement (I) is incorrect but Statement (II) is correct"],
        ans: 0,
        exp: "<b>(A) Both Statement (I) and Statement (II) are correct</b><br>Statement I is correct because analogical arguments are a type of inductive argument. Statement II is also correct: the conclusion is drawn based on the similarities between two things; since two entities are alike in some respects, they must also be alike in some other respect not yet known."
    },
    {
        q: "<b>Sep 2022</b><br>Given below are two statements:<br>Statement (I): Analogical reasoning is based on a likeness drawn between two or more entities in one or more respects.<br>Statement (II): There could be argumentative as well as nonargumentative uses of analogy.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 0,
        exp: "<b>(A) Both Statement (I) and Statement (II) are true.</b><br>Statement I: analogical reasoning finds a shared relational structure between two instances or domains. Statement II: argument by analogy (e.g., 'There might be life on Europa because it has an atmosphere that contains oxygen just like the Earth') is argumentative, whereas 'Capitalists are like vampires' is a non-argumentative use of analogy (metaphor/simile)."
    },
    {
        q: "<b>Sep 2022</b><br>Given below are two statements:<br>Statement (I): The statement - \"A person without a purpose is like a car with no engine. And that's a useless piece of machinery\" is an example of analogical argument.<br>Statement (II): The statement - \"A person with no purpose is like a car with no engine. And that's a useless piece of machinery\" is an example of non-argumentative use of analogy.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 3,
        exp: "<b>(D) Statement (I) is false but Statement (II) is true.</b><br>Statement I is false: the statement is not an argument from analogy (a special type of inductive argument in which perceived similarities are used to infer a further similarity). Statement II is true: non-argument analogies are explanatory comparisons, such as explaining email as like mail sent to a post office box."
    },
    {
        q: "<b>Sep 2022</b><br>Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R).<br>Assertion (A): A valid deductive argument with all true premises will lead to a true conclusion.<br>Reason (R): In a valid deductive argument, the conclusion follows from the premises with absolute necessity.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both (A) and (R) are true and (R) is the correct explanation of (A)", "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(C) (A) is true but (R) is false", "(D) (A) is false but (R) is true"],
        ans: 0,
        exp: "<b>(A) Both (A) and (R) are true and (R) is the correct explanation of (A)</b><br>A deductive argument is valid if and only if its form makes it impossible for the premises to be true and the conclusion nevertheless false. Hence (A) is correct, and (R) explains why: the conclusion follows from the premises with absolute necessity."
    },
    {
        q: "<b>Sep 2022</b><br>a, b, c, d all have the attributes P and Q.<br>a, b, c all have the attribute R.<br>Therefore, d probably has the attribute R.<br><br>Which of the following is true regarding the above argument?<br>(a) It is a deductive argument.<br>(b) It is an inductive argument.<br>(c) It is an analogical argument.<br>(d) It is a valid argument.<br>(e) It is an invalid argument.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (c) only", "(B) (a) and (d) only", "(C) (b) and (d) only", "(D) (b) and (e) only"],
        ans: 0,
        exp: "<b>(A) (b) and (c) only</b><br>The entities share attributes P and Q, and a, b, c also have R, so d probably has R. This is an inductive argument based on analogy (an analogical argument), with a probable conclusion."
    },
    {
        q: "<b>JUNE 2023</b><br>Match List I with List II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>LIST I (Concept)</b></td><td><b>LIST II (Definition)</b></td></tr><tr><td>A. Argument</td><td>I. A deductive argument that either is invalid or has atleast one false premise</td></tr><tr><td>B. Strong argument</td><td>II. An inductive argument in which the conclusion does not follow probably from the premises</td></tr><tr><td>C. Unsound argument</td><td>III. An inductive argument in which the conclusion follow probably from the premises</td></tr><tr><td>D. Weak argument</td><td>IV. A set of statements in which a claims (conclusion) is defended with reason (premise)</td></tr></table><br><br>Choose the correct answer from the options given below:",
        opts: ["1. A-I, B-II, C-III, D-IV", "2. A-II, B-IV, C-III, D-I", "3. A-III, B-I, C-II, D-IV", "4. A-IV, B-III, C-I, D-II"],
        ans: 3,
        exp: "<b>4. A-IV, B-III, C-I, D-II</b><br>Argument: a set of statements in which a claim is defended with reason. Strong argument: inductive, conclusion follows probably. Unsound argument: deductive, invalid or with at least one false premise. Weak argument: inductive, conclusion does not follow probably."
    },
    {
        q: "<b>JUNE 2023</b><br>Observe the following argument and pick the correct answer.<br>\"All pigs are sheep<br>All sheep are goat<br>Therefore, all pigs are goats\"<br><br>A. A valid argument because if the premises were true the conclusion would have been true<br>B. An invalid argument because the conclusion does not follow from the premises.<br>C. The conclusion is probably true<br>D. It is a weak argument<br><br>Choose the correct answer from the options given below",
        opts: ["1. A only", "2. B & D only", "3. C & D only", "4. D only"],
        ans: 0,
        exp: "<b>1. A only</b><br>The argument has the valid form 'All A are B; all B are C; therefore all A are C'. If the premises were true, the conclusion would have to be true, so it is valid even though the premises are false."
    },
    {
        q: "Given below are two statements<br>Statement I: A valid deductive argument that also has all true premises is called a \"sound\" argument<br>Statement II: A strong inductive argument that has all true premises is called a \"cogent\" argument<br><br>In the light of the above statements, choose the most appropriate answer from the options given below",
        opts: ["1. Both Statement I and Statement II are correct", "2. Both Statement I and Statement II are incorrect", "3. Statement I is correct but Statement II is incorrect", "4. Statement I is correct bur Statement II is correct"],
        ans: 0,
        exp: "<b>1. Both Statement I and Statement II are correct</b><br>A valid deductive argument with all true premises is sound; a strong inductive argument with all true premises is cogent."
    },
    {
        q: "Given below are two statements. one is labelled as Assertion A and the other is labelled as Reason R<br>Assertion A: Deductive arguments are either invalid or valid.<br>Reason R: A valid deductive argument that also has all true premises is called a \"sound\" argument.<br><br>In the light of the above statements. choose the most appropriate answer from the options given below.",
        opts: ["1. Both A and R are correct and R is the correct explanation of A", "2. Both A and R are correct and R is NOT the correct explanation of A", "3. A is correct but R is not correct", "4. A is not correct but R is correct"],
        ans: 1,
        exp: "<b>2. Both A and R are correct and R is NOT the correct explanation of A</b><br>Deductive arguments are either valid or invalid, and a valid deductive argument with all true premises is sound, but the soundness definition does not explain why deductive arguments are either valid or invalid."
    },
    {
        q: "Given below are two statements<br>Statement I:In deductive arguments, the claim is made that conclusions follow with certainly from their premises<br>Statement II: Any inductive argument if is good, brings to light in its conclusion what was already burried in its premises<br><br>In the light of the above statements, choose the most appropriate answer from the options given below",
        opts: ["1. Both Statement I and Statement II are correct", "2. Both Statement I and Statement II are incorrect", "3. Statement I is correct but Statement II is incorrect", "4. Statement I is incorrect but Statement II is correct"],
        ans: 2,
        exp: "<b>3. Statement I is correct but Statement II is incorrect</b><br>Statement I is correct: deductive conclusions follow with certainty. Statement II is incorrect: it describes a deductive argument; a good inductive argument goes beyond its premises and its conclusion only follows with probability."
    }
];