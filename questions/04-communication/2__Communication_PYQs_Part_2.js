var rawQuestions = [
    {
        q: "Match List 1 with List 2:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>List 1 Type of Communication</th><th>List 2 Description</th></tr><tr><td>a. Phatic</td><td>1. Decoder becomes encoder</td></tr><tr><td>b. Feedback</td><td>2. Communication about communication</td></tr><tr><td>c. Meta message</td><td>3. Between equals</td></tr><tr><td>d. Lateral communication</td><td>4. To greet</td></tr></table>",
        opts: ["1. a-1, b-2, c-4, d-3", "2. A-2, b-3, c-4, d-1", "3. A-3, b-4, c-1, d-2", "4. A-4, b-1, c-2, d-3"],
        ans: 3,
        exp: "<b>4. A-4, b-1, c-2, d-3</b><br>Phatic communication (making small talk) is verbal or non-verbal communication that has a social function, such as to start a conversation, greet someone, or say goodbye, rather than an informative function."
    },
    {
        q: "Statement 1 : The disadvantage of inter-personal communication is the availability of immediate feedback<br>Statement 2: The greatest advantage of mass communication is its delayed feedback",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 1,
        exp: "<b>2. Both statement 1 and statement 2 are false</b><br>"
    },
    {
        q: "Which of the following are true with regard to mass Communication?<br>a. Messages are prepared by non-professionals<br>b. Messages are prepared by Professionals<br>c. Messages are rapidly disseminated<br>d. Messages are supposed to be understood<br>e. Media audiences are homogeneous",
        opts: ["1. a, b and c only", "2. C, d and e only", "3. B, c and d only", "4. A, d and e only"],
        ans: 2,
        exp: "<b>3. B, c and d only</b><br>"
    },
    {
        q: "Assertion A: Students do not form part of the media audience<br>Reason R: Due to the all-pervasive digital technology, students have become interactive media users",
        opts: ["1. A is false but R is true", "2. A is true but R is false.", "3. Both A and R are true and R is the correct explanation of A.", "4. Both A and R are true but R is not the correct explanation of A."],
        ans: 0,
        exp: "<b>1. A is false but R is true</b><br>"
    },
    {
        q: "When the classroom communication is circular, the teacher-encoder will be a/an?",
        opts: ["a. Active decoder", "b. Passive observer", "c. Negative receiver", "d. Restive coder"],
        ans: 0,
        exp: "<b>a. Active decoder</b><br>"
    },
    {
        q: "Successful Communication inside the classroom depends upon<br>a. Detailed and long description of the topic<br>b. Describing the theme<br>c. Use of persuasive words and phrases<br>d. Clarity in explanation offered<br>e. Repetitive anecdotes<br>f. Unstructured delivery of message",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. C, d and e only", "4. D, e and f only"],
        ans: 1,
        exp: "<b>2. B, c and d only</b><br>"
    },
    {
        q: "Assertion A: While Communicating with students, a teacher should go beyond what is prescribed.<br>Reason R: Non-verbal cues definitely convey what is intended by the teacher",
        opts: ["1. A is false but R is true", "2. A is true but R is false.", "3. Both A and R are true and R is the correct explanation of A.", "4. Both A and R are true but R is not the correct explanation of A."],
        ans: 3,
        exp: "<b>4. Both A and R are true but R is not the correct explanation of A.</b><br>"
    },
    {
        q: "Find out the correct sequence of selectively stages in mass communication?<br>a. Exposure<br>b. Retention<br>c. Attitudinal change<br>d. Perception<br>e. Attention",
        opts: ["1. a, b, c, e, d", "2. B, c, d, e ,a", "3. C, e, d, a, b", "4. A, e, d, b, c"],
        ans: 3,
        exp: "<b>4. A, e, d, b, c</b><br>"
    },
    {
        q: "The impact of classroom communication should be so regulated that it should result in",
        opts: ["a. Exchange of ideas and information", "b. Top-down designer communication", "c. Back room learning", "d. Minimum opportunity for feedback"],
        ans: 0,
        exp: "<b>a. Exchange of ideas and information</b><br>"
    },
    {
        q: "Match List 1 with List 2:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>List 1 Activity</th><th>List 2 Function</th></tr><tr><td>a. Non-verbal communication</td><td>1. Reflects confidence in one's own self</td></tr><tr><td>b. Listening</td><td>2. Occupies more space of personal communication</td></tr><tr><td>c. Empathetic Conversation</td><td>3. Helps internalize messages</td></tr><tr><td>d. Stress management through communication</td><td>4. Seeing things from other's viewpoint</td></tr></table>",
        opts: ["1. a-1, b-2, c-4, d-3", "2. A-2, b-3, c-4, d-1", "3. A-3, b-1, c-4, d-2", "4. A-4, b-1, c-2, d-3"],
        ans: 1,
        exp: "<b>2. A-2, b-3, c-4, d-1</b><br>"
    },
    {
        q: "The English word 'Communication' is derived from the words",
        opts: ["a. Communis and communicare", "b. Communist and commune", "c. Communism and communalism", "d. Communion and common sense"],
        ans: 0,
        exp: "<b>a. Communis and communicare</b><br>"
    },
    {
        q: "Communication usually begins with",
        opts: ["a. Confused ideas", "b. Semantic noise", "c. Apprehension", "d. Pictures in the mind"],
        ans: 3,
        exp: "<b>d. Pictures in the mind</b><br>"
    },
    {
        q: "Two persons sitting facing each other are engrossed in thinking. In this situation",
        opts: ["a. There is non-verbal communication", "b. There is no communication", "c. There is two-way non-verbal communication", "d. There is less verbal communication"],
        ans: 1,
        exp: "<b>b. There is no communication</b><br>"
    },
    {
        q: "Which factor leads to the most successful communication?",
        opts: ["a. Speaker's knowledge about the process of communication", "b. Empathy with the receiver", "c. Use of multiple channels", "d. Admiration from the receiver"],
        ans: 1,
        exp: "<b>b. Empathy with the receiver</b><br>"
    },
    {
        q: "A speech that is outlined, practiced and delivered in a conversation style is",
        opts: ["a. Hat speech", "b. Indirect speech", "c. Extemporaneous", "d. manuscripted"],
        ans: 2,
        exp: "<b>c. Extemporaneous</b><br>Four methods of speech delivery: Impromptu speaking is the presentation of a short message without advance preparation. Manuscript speaking is the word-for-word iteration of a written message. Extemporaneous speaking is the delivery of a carefully planned and rehearsed speech in a conversational manner using brief notes. Memorized speaking is the rote recitation of a written message that the speaker has committed to memory."
    },
    {
        q: "In a classroom context, when innumerable meaningful messages emanate from a finite number of linguistic signals, it is called",
        opts: ["a. Semanticism", "b. Cognition", "c. Productivity", "d. Information processing"],
        ans: 2,
        exp: "<b>c. Productivity</b><br>"
    },
    {
        q: "In communication, attributing our own thoughts and feelings to others is called",
        opts: ["a. Stereotyping", "b. Projection", "c. Halo effect", "d. Barrier"],
        ans: 1,
        exp: "<b>b. Projection</b><br>"
    },
    {
        q: "Communication means ________ of information<br>a. Suppression<br>b. Exchange<br>c. Understanding<br>d. Contextualisation<br>e. Abstraction",
        opts: ["1. a, b and e only", "2. A, b and c only", "3. B, c and d only", "4. C, d and e only"],
        ans: 2,
        exp: "<b>3. B, c and d only</b><br>"
    },
    {
        q: "Which of the following set of statements is correct for describing the human communication process?<br>a. Non-verbal communication can stimulate ideas<br>b. Communication is a learned ability<br>c. Communication is not a universal panacea<br>d. Communication cannot break down<br>e. More communication means more effective learning by students<br>f. Value of what is learned through classroom communication is not an issue for students",
        opts: ["1. a, c, e and f", "2. B, d, e and f", "3. A, b, c and d", "4. A, d, e and f"],
        ans: 2,
        exp: "<b>3. A, b, c and d</b><br>"
    },
    {
        q: "The positive impact of communication depends upon<br>a. Acceptance of barriers<br>b. Planning<br>c. Sudden expression<br>d. Media selection<br>e. Use of language",
        opts: ["1. a, b and d only", "2. B, d and e only", "3. C, d and e only", "4. A, d and e only"],
        ans: 1,
        exp: "<b>2. B, d and e only</b><br>"
    },
    {
        q: "Which of the following are characteristics and features of communication?<br>a. It involves the exchange of ideas, facts and opinions<br>b. It is a continuous process<br>c. It is both verbal and non-verbal<br>d. It is synchronous in nature",
        opts: ["1. a, b and d only", "2. B, c and d only", "3. A, c and d only", "4. A, b and c only"],
        ans: 3,
        exp: "<b>4. A, b and c only</b><br>"
    },
    {
        q: "Match LIST 1 with LIST 2:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>LIST 1</th><th>LIST 2</th></tr><tr><td>a. Channel</td><td>1. A person or thing that transmits</td></tr><tr><td>b. Intermediary</td><td>2. The imparting or interchange of thoughts</td></tr><tr><td>c. Transmitter</td><td>3. Spreading rumors</td></tr><tr><td>d. Grapevine</td><td>4. A go-between or mediator</td></tr></table>",
        opts: ["1. a-3, b-2, c-1, d-4", "2. A-2, b-4, c-1, d-3", "3. A-4, b-2, c-3, d-1", "4. A-2, b-4, c-3, d-1"],
        ans: 1,
        exp: "<b>2. A-2, b-4, c-1, d-3</b><br>"
    },
    {
        q: "Politeness and tone of the voice can be a part of",
        opts: ["a. Haptics", "b. Paralanguage", "c. Verbal language", "d. Visual language"],
        ans: 1,
        exp: "<b>b. Paralanguage</b><br>"
    },
    {
        q: "Which of the following is considered as an effective form of verbal communication?",
        opts: ["a. Storytelling", "b. Sloganeering", "c. Use of high pitch of voice", "d. Monologues"],
        ans: 0,
        exp: "<b>a. Storytelling</b><br>"
    },
    {
        q: "The chronological order of non-verbal communication is",
        opts: ["a. signs, symbols, codes and colours", "b. Symbols, codes, signs and colours", "c. Colours, signs, codes and symbols", "d. Codes, colours, symbols and signs"],
        ans: 0,
        exp: "<b>a. signs, symbols, codes and colours</b><br>"
    },
    {
        q: "A class conducted on Google Meet in which students and teachers are engaged in discussion is an instance of",
        opts: ["a. Downward communication", "b. Group communication", "c. Intrapersonal communication", "d. Mass communication"],
        ans: 1,
        exp: "<b>b. Group communication</b><br>"
    },
    {
        q: "In the linear model of communication, the expected result is",
        opts: ["a. Psychological disruption", "b. Removal of physical noise", "c. High level of obstruction", "d. Semantic accuracy"],
        ans: 3,
        exp: "<b>d. Semantic accuracy</b><br>Weaver and Shannon believed that semantic accuracy is the result of the linear model of communication."
    },
    {
        q: "In intrapersonal communication",
        opts: ["a. Sender sends and receives the message", "b. Sender sends and another receiver receives the message", "c. Sender sends and two receivers receive the message", "d. Sender sends and the group receives the message"],
        ans: 0,
        exp: "<b>a. Sender sends and receives the message</b><br>"
    },
    {
        q: "More and more informal exchanges within a group to resolve conflicts is an example of",
        opts: ["a. Vertical communication", "b. Horizontal communication", "c. Risk communication", "d. Personal communication"],
        ans: 1,
        exp: "<b>b. Horizontal communication</b><br>"
    },
    {
        q: "Assertion (A): verbal communication takes place in real-time<br>Reason (R): written communication is synchronous in character as it appears at different intervals",
        opts: ["1. Both A and R are true and R is the correct explanation of A", "2. Both A and R are true but R is NOT the correct explanation of A", "3. A is true but R is false", "4. A is false but R is true"],
        ans: 2,
        exp: "<b>3. A is true but R is false</b><br>"
    },
    {
        q: "Which of the following can be categorized as non-verbal communication?<br>a. Pleasant Voice<br>b. Postures<br>c. Gestures<br>d. Facial expressions<br>e. Vociferous greetings",
        opts: ["1. a, b and c only", "2. B, c and e only", "3. C, d and e only", "4. B, c and d only"],
        ans: 3,
        exp: "<b>4. B, c and d only</b><br>"
    },
    {
        q: "Assertion(A): To communicate well in the classroom is a natural ability<br>Reason (R): Effective teaching in the classroom demands knowledge of the communication process",
        opts: ["1. Both A and R are true and R is the correct explanation of A", "2. Both A and R are true but R is NOT the correct explanation of A", "3. A is true but R is false", "4. A is false but R is true"],
        ans: 3,
        exp: "<b>4. A is false but R is true</b><br>"
    },
    {
        q: "A good communicator begins his/her presentation with a:",
        opts: ["a. Complex question", "b. Non-sequitur", "c. Repetitive phrase", "d. Ice-breaker"],
        ans: 3,
        exp: "<b>d. Ice-breaker</b><br>"
    },
    {
        q: "In a classroom, the probability of message reception can be enhanced by:",
        opts: ["a. Establishing a viewpoint", "b. Exposing the ignorance of students", "c. Increasing the information load", "d. Using high decibel audio tools"],
        ans: 0,
        exp: "<b>a. Establishing a viewpoint</b><br>"
    },
    {
        q: "Expressive communication is driven by",
        opts: ["a. Passive aggression", "b. Encoder's personality characteristics", "c. External clues", "d. Encoder-decoder contract"],
        ans: 3,
        exp: "<b>d. Encoder-decoder contract</b><br>"
    },
    {
        q: "Identify the important element a teacher has to take cognizance of while addressing students in a classroom",
        opts: ["a. Avoidance of proximity", "b. Voice modulation", "c. Repetitive pause", "d. Fixed posture"],
        ans: 1,
        exp: "<b>b. Voice modulation</b><br>"
    },
    {
        q: "What are the barriers to effective communication?",
        opts: ["a. moralizing, being judgemental and comments of consolation", "b. Dialogue, summary and self-review", "c. Use of simple words, cool reaction and defensive attitude", "d. Personal statements, eye contact and simple narration"],
        ans: 0,
        exp: "<b>a. moralizing, being judgemental and comments of consolation</b><br>"
    }
];