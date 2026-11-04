var rawQuestions = [
    {
        q: "Statement 1: When messages are delivered by popular sources, they have higher attention and recall of the receivers<br>Statement 2: A highly credible source may not score much in the areas of expertise, trustworthiness and likability",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 2,
        exp: "<b>3. Statement 1 is true but statement 2 is false</b><br>"
    },
    {
        q: "Which of the following are objectives in marketing communication?<br>a. Belittling competitive brands<br>b. Category need<br>c. Brand awareness<br>d. Brand attitude<br>e. Brand purchase intention",
        opts: ["1. a, b, c and d only", "2. B, c, d and e only", "3. A, c, d and e only", "4. A, b, d and e only"],
        ans: 1,
        exp: "<b>2. B, c, d and e only</b><br>"
    },
    {
        q: "Which of the following is a communication barrier?",
        opts: ["a. Communicatee attention", "b. Semantic distortion", "c. Amplified image", "d. Infographic"],
        ans: 1,
        exp: "<b>b. Semantic distortion</b><br>"
    },
    {
        q: "In an implicit business agreement, communication is",
        opts: ["a. Ambiguous", "b. Fragmented", "c. Contrived", "d. Extensive"],
        ans: 3,
        exp: "<b>d. Extensive</b><br>"
    },
    {
        q: "Which of the following can be considered as semantic barriers in communication?<br>a. Functional specialization<br>b. Organisational policy<br>c. Faulty transition<br>d. Use of technical language<br>e. Unqualified assumptions",
        opts: ["1. a, b and c only", "2. C, d and e only", "3. B, c and d only", "4. B, d and e only"],
        ans: 1,
        exp: "<b>2. C, d and e only</b><br>"
    },
    {
        q: "Which of the following are useful in overcoming the communication barriers in a classroom?<br>a. Identifying the level of redundancy<br>b. Use of unfamiliar words<br>c. Ignoring the students' vocabulary<br>d. Fragmented sentences<br>e. Voice inflexion<br>f. Contextualizing the speech",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. C, d and f only", "4. A, e and f only"],
        ans: 3,
        exp: "<b>4. A, e and f only</b><br>"
    },
    {
        q: "Which of the following are to be carefully observed and followed while writing?<br>a. Long Introduction<br>b. Abrupt end<br>c. Relevant Content<br>d. Correct syntax<br>e. Diction and Punctuation marks",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. C, d and e only", "4. A, c and e only"],
        ans: 2,
        exp: "<b>3. C, d and e only</b><br>"
    },
    {
        q: "Language barriers in communication exist due to:",
        opts: ["(a) The difference in the sender's recognition vocabulary and the receiver's user vocabulary", "(b) The difference in sender's user vocabulary and the receiver's recognition vocabulary", "(c) The sender's user vocabulary and the receiver's recognition vocabulary being alike", "(d) The sender's recognition vocabulary and the receiver's user vocabulary being the same"],
        ans: 1,
        exp: "<b>(b) The difference in sender's user vocabulary and the receiver's recognition vocabulary</b><br>"
    },
    {
        q: "The most important barrier which affects the communication in a classroom is:",
        opts: ["(a) Noise outside the classroom", "(b) Noise inside the classroom", "(c) Lack of teaching aids", "(d) Confusion on the part of the teacher"],
        ans: 3,
        exp: "<b>(d) Confusion on the part of the teacher</b><br>"
    },
    {
        q: "Which of the following will not hamper effective communication in the class?",
        opts: ["(a) A statement which allows the listener to draw his/her own conclusions.", "(b) A precise statement", "(c) An ambiguous statement", "(d) A lengthy statement."],
        ans: 1,
        exp: "<b>(b) A precise statement</b><br>"
    },
    {
        q: "Match LIST A with LIST B:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>LIST A</th><th>LIST B</th></tr><tr><td>a. Jargon</td><td>1. Anger</td></tr><tr><td>b. Physical barrier</td><td>2. Unfamiliar technical terms</td></tr><tr><td>c. Attitudinal barrier</td><td>3. Increases effectiveness of communication</td></tr><tr><td>d. Emotional intelligence</td><td>4. Resistance to change</td></tr><tr><td>e. Psychological barrier</td><td>5. Geographic distance</td></tr></table>",
        opts: ["1. a-1, b-2, c-3, d-4, e-5", "2. A-2, b-4, c-5, d-3, e-1", "3. A-2, b-5, c-4, d-3, e-1", "4. A-5, b-1, c-4, d-3, e-2"],
        ans: 2,
        exp: "<b>3. A-2, b-5, c-4, d-3, e-1</b><br>"
    },
    {
        q: "Which one is not the organizational barriers in communication?",
        opts: ["(a) Complexity in organization", "(b) Too rigid or loose organizational policy", "(c) Premature evaluation", "(d) Poor organizational facilities"],
        ans: 2,
        exp: "<b>(c) Premature evaluation</b><br>Organizational barriers include rules and policies, hierarchical positions/structure, silo mentality, resistance to change, organizational politics and complex organizational structure."
    },
    {
        q: "Physical barriers to communication are rapidly disappearing, but psychological obstacles remain owing to which of the following?<br>(A) By formal language<br>(B) By visual presentation<br>(C) By use of technology<br>(D) By emotional appeal<br>(E) By cultural attitude<br><br>Choose the correct answer from the options given below:",
        opts: ["(a) (A), (D) and (E) only", "(b) (A), (B) and (C) only", "(c) (B), (C) and (D) only", "(d) (C), (D) and (E) only"],
        ans: 0,
        exp: "<b>(a) (A), (D) and (E) only</b><br>"
    },
    {
        q: "The least contributor to noise in communication system by the audience is",
        opts: ["(a) Selective attention", "(b) Selective perception", "(c) Selective retention", "(d) Selective intention"],
        ans: 3,
        exp: "<b>(d) Selective intention</b><br>Selective intention refers to the intentional decision of the audience to ignore or filter out certain messages or information while focusing on specific content. It is a psychological process where individuals selectively choose what they want to pay attention to and disregard other stimuli or messages."
    },
    {
        q: "Which of the following is a physical/environmental barrier to communication?",
        opts: ["(a) Culture", "(b) Personality", "(c) Power", "(d) Time"],
        ans: 3,
        exp: "<b>(d) Time</b><br>"
    },
    {
        q: "Which of the following is not a feedback loop in classroom communication?",
        opts: ["(a) Answering a question", "(b) Taking down the notes", "(c) Creating disturbance", "(d) Cross-questioning the teacher"],
        ans: 2,
        exp: "<b>(c) Creating disturbance</b><br>"
    },
    {
        q: "In communication, semantic barrier refers to:",
        opts: ["(a) Denotative meaning", "(b) Varied connotations", "(c) Truth", "(d) Singular meaning"],
        ans: 1,
        exp: "<b>(b) Varied connotations</b><br>Denotative meaning is the literal meaning; connotation is the implied meaning."
    },
    {
        q: "According to the ancient Indian texts, the ultimate goal of both internal and external communication is",
        opts: ["a. Achieving social status", "b. Capturing political power", "c. Self-realization", "d. Accumulation of wealth"],
        ans: 2,
        exp: "<b>c. Self-realization</b><br>"
    },
    {
        q: "The three divisions of signs identified by Charles Pierce are:<br>a. Modular<br>b. Prescriptive<br>c. Iconic<br>d. Indexical<br>e. Symbolic",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. C, d and e only", "4. A, b and e only"],
        ans: 2,
        exp: "<b>3. C, d and e only</b><br>Peirce classified signs as iconic (resemble what they represent), indexical (direct causal relationship to what they represent) and symbolic (arbitrary relationship to what they represent)."
    },
    {
        q: "Match LIST 1 with LIST 2:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>LIST 1 Sign Category</th><th>LIST 2 Examples</th></tr><tr><td>a. Iconic</td><td>1. Language</td></tr><tr><td>b. Indexical</td><td>2. Photographs</td></tr><tr><td>c. Symbolic</td><td>3. Smoke</td></tr><tr><td>d. Profusion of signs</td><td>4. Letters of alphabets</td></tr></table>",
        opts: ["1. a-2, b-3, c-4, d-1", "2. A-3, b-4, c-1, d-2", "3. A-2, b-4, c-3, d-1", "4. A-1, b-2, c-4, d-3"],
        ans: 0,
        exp: "<b>1. a-2, b-3, c-4, d-1</b><br>Iconic signs resemble what they represent (photographs); indexical signs have a direct causal relationship (smoke); symbolic signs have an arbitrary relationship (language, letters of the alphabet)."
    },
    {
        q: "Find out the correct sequence of selectively stages in mass communication?<br>a. Exposure<br>b. Retention<br>c. Attitudinal change<br>d. Perception<br>e. Attention",
        opts: ["1. a, b, c, e, d", "2. B, c, d, e ,a", "3. C, e, d, a, b", "4. A, e, d, b, c"],
        ans: 3,
        exp: "<b>4. A, e, d, b, c</b><br>"
    },
    {
        q: "Statement 1 : The disadvantage of inter-personal communication is the availability of immediate feedback<br>Statement 2: The greatest advantage of mass communication is its delayed feedback",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 1,
        exp: "<b>2. Both statement 1 and statement 2 are false</b><br>"
    },
    {
        q: "Assertion A: While Communicating with students, a teacher should go beyond what is prescribed.<br>Reason R: Non-verbal cues definitely convey what is intended by the teacher",
        opts: ["1. A is false but R is true", "2. A is true but R is false.", "3. Both A and R are true and R is the correct explanation of A.", "4. Both A and R are true but R is not the correct explanation of A."],
        ans: 3,
        exp: "<b>4. Both A and R are true but R is not the correct explanation of A.</b><br>"
    },
    {
        q: "Which of the following are the orders of signification in communication?<br>(A) Denotation<br>(B) Connotation<br>(C) Myth<br>(D) Credibility<br>(E) Attribution<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A), (B) and (C) Only", "(2) (B), (C) and (D) Only", "(3) (C), (D) and (E) Only", "(4) (A), (D) and (E) Only"],
        ans: 0,
        exp: "<b>(1) (A), (B) and (C) Only</b><br>Roland Barthes: the first order of signification is denotation; connotation is the second order (socio-cultural and personal associations); denotation and connotation combine to produce ideology/myth, sometimes described as a third order of signification."
    },
    {
        q: "Statement I: The semiotics of Charles Pierce cannot be called a Theory of Communication.<br>Statement II: Charles Pierce prepared a system of concepts with a common basis of expression and narration.",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 3,
        exp: "<b>4. Statement 1 is false but statement 2 is true</b><br>"
    },
    {
        q: "Statement I: The semiotic approach in communication emphasizes the manipulative power of the text.<br>Statement II: It is the ideological approach that questions the basic value systems in different societies in order to help seek a new humanism.",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 0,
        exp: "<b>1. Both statement 1 and statement 2 are true</b><br>"
    },
    {
        q: "When media consumers search for knowledge as a motive, the need becomes",
        opts: ["(A) Biased", "(B) Selective", "(C) Affective", "(D) Cognitive"],
        ans: 3,
        exp: "<b>(D) Cognitive</b><br>"
    },
    {
        q: "Assertion (A): There is a decline in the popularity of the old media as new media penetrates the society.<br>Reason (R): Because the ownership of new media is not centered on one person or one organization.",
        opts: ["(A) Both (A) and (R) are true, and R is correct explanation of A", "(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).", "(C) (A) is true, but (R) is false.", "(D) (A) is false, but (R) is true."],
        ans: 1,
        exp: "<b>(B) Both (A) and (R) are true, but (R) is not the correct explanation of (A).</b><br>"
    }
];