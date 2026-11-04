var rawQuestions = [
    {
        q: "Statement 1: lack of vocabulary can be a serious deficiency in communication<br>Statement 2: One's vocabulary need not be too complex or simple for communication",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 0,
        exp: "<b>1. Both statement 1 and statement 2 are true</b><br>"
    },
    {
        q: "A source of Communicative inefficiency is,",
        opts: ["a. Desire for personal gratification", "b. Implications of familiar relations", "c. Peer Pressure", "d. Limited knowledge"],
        ans: 3,
        exp: "<b>d. Limited knowledge</b><br>"
    },
    {
        q: "Statement 1: Most of the time, communication is loaded with power value.<br>Statement 2: Those who do not have the power of communication always seek to possess it.",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 0,
        exp: "<b>1. Both statement 1 and statement 2 are true</b><br>"
    },
    {
        q: "Match List 1 with List 2:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>List 1 Communication codes</th><th>List 2 Description</th></tr><tr><td>a. Operational</td><td>1. Collective perception</td></tr><tr><td>b. Natural</td><td>2. Rules of appearance</td></tr><tr><td>c. Ideological</td><td>3. Practices of production</td></tr><tr><td>d. Presentational</td><td>4. Realistic</td></tr></table>",
        opts: ["1. a-2, b-4, c-3, d-1", "2. A-4, b-1, c-2, d-3", "3. A-1, b-2, c-3, d-4", "4. A-3, b-4, c-1, d-2"],
        ans: 3,
        exp: "<b>4. A-3, b-4, c-1, d-2</b><br>"
    },
    {
        q: "In a classroom, an effective listener",
        opts: ["a. Resists distractions", "b. Seeks diversions", "c. Prefers message filtering", "d. Judges the message delivery style"],
        ans: 0,
        exp: "<b>a. Resists distractions</b><br>"
    },
    {
        q: "The two way, face-to-face communication is technically referred to as",
        opts: ["a. Level one", "b. Level Two", "c. Level three", "d. Level four"],
        ans: 1,
        exp: "<b>b. Level Two</b><br>There are five levels of communication: 1. Intrapersonal 2. Interpersonal 3. Small Group Communication 4. Public Communication 5. Mass Communication."
    },
    {
        q: "From the communication perspective, which of the following variables distinguishes one culture from another?<br>a. Learning skills<br>b. Time sense<br>c. Level of gratitude<br>d. Level of honesty",
        opts: ["1. A and b only", "2. B and c only", "3. C and d only", "4. A and d only"],
        ans: 1,
        exp: "<b>2. B and c only</b><br>Time sense (Chronemics) and level of gratitude are variables that distinguish cultures."
    },
    {
        q: "Statement 1: Small group communication fulfills the relationship needs<br>Statement 2: However, small group communication does not serve task-related needs",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 2,
        exp: "<b>3. Statement 1 is true but statement 2 is false</b><br>"
    },
    {
        q: "Which of the following are media functions related to their audiences?<br>a. Creation of passive longing for media products<br>b. Omnivorous devouring of media content<br>c. Compensation through identification<br>d. Vicarious wish fulfillment<br>e. Sources of suggestion for appropriate role",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. A, b and e only", "4. C, d and e only"],
        ans: 3,
        exp: "<b>4. C, d and e only</b><br>"
    },
    {
        q: "A personal dimension of communication is",
        opts: ["a. Source of noise", "b. Field of experience", "c. Institutional affiliation", "d. Location of reception"],
        ans: 1,
        exp: "<b>b. Field of experience</b><br>"
    },
    {
        q: "Human communication involves the skills of<br>a. Not being visible<br>b. Self- presentation<br>c. Group interaction<br>d. Forging relation<br>e. Using high-brow language",
        opts: ["1. a, b and c only", "2. A, c and e only", "3. B, c and d only", "4. C, d and e only"],
        ans: 2,
        exp: "<b>3. B, c and d only</b><br>"
    },
    {
        q: "Assertion A: The sign systems of communication have fixed rules and production procedures<br>Reason R: The sign systems are invented for cross- cultural communication",
        opts: ["1. Both A and R are true and R is the correct explanation of A", "2. Both A and R are true but R is NOT the correct explanation of A", "3. A is true but R is false", "4. A is false but R is true"],
        ans: 3,
        exp: "<b>4. A is false but R is true</b><br>"
    },
    {
        q: "The disadvantages of Aristotle's model of communication are:<br>a. Weak encoding<br>b. Audience-created content<br>c. One-way communication<br>d. Stress on the speaker<br>e. Ignorance of noise",
        opts: ["1. A and b only", "2. B and c only", "3. A, d and e only", "4. C, d and e only"],
        ans: 3,
        exp: "<b>4. C, d and e only</b><br>"
    },
    {
        q: "According to the stimulus-response model, all communication is a/an ______ process.",
        opts: ["a. Collective", "b. Individual", "c. Impersonal", "d. Massive"],
        ans: 1,
        exp: "<b>b. Individual</b><br>"
    },
    {
        q: "Match List 1 with List 2:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>List 1 Types of communication Analysis</th><th>List 2 Communication factor</th></tr><tr><td>a. Control</td><td>1. 'What' aspect</td></tr><tr><td>b. Content</td><td>2. 'Channel' aspect</td></tr><tr><td>c. Media</td><td>3. 'Reach' aspect</td></tr><tr><td>d. Audience</td><td>4. 'Who' aspect</td></tr></table>",
        opts: ["1. a-3, b-4, c-1, d-2", "2. A-4, b-1, c-2, d-3", "3. A-2, b-3, c-4, d-1", "4. A-1, b-2, c-3, d-4"],
        ans: 1,
        exp: "<b>2. A-4, b-1, c-2, d-3</b><br>"
    },
    {
        q: "Successful communication with students will promote which of the following factors<br>a. Micro- view of the world<br>b. Social class struggle<br>c. Cognitive appreciation<br>d. Personality development<br>e. Cultural and aesthetic values",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. C, d and e only", "4. A, c and e only"],
        ans: 2,
        exp: "<b>3. C, d and e only</b><br>"
    },
    {
        q: "One of the barriers to reception in communication is:",
        opts: ["a. Environmental stimulus", "b. Open-mindedness", "c. Message brevity", "d. Language orderliness"],
        ans: 0,
        exp: "<b>a. Environmental stimulus</b><br>"
    },
    {
        q: "The delayed feedback in the case of intra-personal communication may happen due to",
        opts: ["a. Express acceptance of message", "b. Directness of communication", "c. Optical illusion", "d. Proximation with the self"],
        ans: 2,
        exp: "<b>c. Optical illusion</b><br>"
    },
    {
        q: "Which of the following can be considered as personal barriers in communication?<br>a. Regular message assessment<br>b. Immediate feedback<br>c. Poor retention<br>d. Failure to respond<br>e. Trust deficit in encoder",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. A, c and d only", "4. C, d and e only"],
        ans: 3,
        exp: "<b>4. C, d and e only</b><br>"
    },
    {
        q: "A kind of communication that supplements or compensates for a communication impairment is?",
        opts: ["(a) Augmented Communication", "(b) Alternative Communication", "(c) Augmentative and Alternative Communication", "(d) Impersonal communication"],
        ans: 2,
        exp: "<b>(c) Augmentative and Alternative Communication</b><br>AAC devices come in all shapes and sizes. Some examples include iPads, speech generating devices (SGD), eye gaze, communication boards, and picture books. Anything that either supplements speech or helps people communicate nonverbally counts as an AAC device."
    },
    {
        q: "Shannon and Weaver's communication model was not focused on:<br>a. Message Transmission<br>b. Content of the message<br>c. Meaning of the message<br>d. Intention behind messages<br>e. Medium of transmission",
        opts: ["1. a, b and c only", "2. B, c and d only", "3. C, d and e only", "4. A, d and e only"],
        ans: 1,
        exp: "<b>2. B, c and d only</b><br>"
    },
    {
        q: "The Laswellian model of mass communication is the foundation of media ______",
        opts: ["a. Causal theory", "b. Effects theory", "c. Ethical studies", "d. Culture analysis"],
        ans: 1,
        exp: "<b>b. Effects theory</b><br>Lasswell's Model of Communication (1948) is a linear model: Who? (Communicator) - Says What? (Message/Information) - In Which Channel? (Media/Channel) - To Whom? (Audience/Receiver) - With What Effect? (Effect analysis)."
    },
    {
        q: "For emerging field of mass communication researcher Paul Lazars Feld proved to be seminal thinker and researcher in what way?<br>A. For exploring the potential of Social Science methods. high level of entrepreneurial skill.<br>B. For providing training with a high level of entrepreneurial skills<br>C. For raising the standard of American Education System.<br>D. For making assumptions that media have limited direct effect.",
        opts: ["1. A and b only", "2. B and c only", "3. C and d only", "4. A and d only"],
        ans: 3,
        exp: "<b>4. A and d only</b><br>"
    },
    {
        q: "Statement I: Gatekeepers act as the sender in an intermediary model of communication.<br>Statement II: The intermediaries have the ability to decide, change messages, or prevent them from reaching an audience (destination).<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(a) Both Statement I and Statement II are correct.", "(b) Both Statement I and Statement II are incorrect.", "(c) Statement I is correct but Statement II is incorrect.", "(d) Statement I is incorrect but Statement II is correct."],
        ans: 3,
        exp: "<b>(d) Statement I is incorrect but Statement II is correct.</b><br>"
    },
    {
        q: "Statement 1: In communication the notion of catharsis means cleansing, purging or purification<br>Statement 2: Catharsis can take place in a person's fantasy or in the media.",
        opts: ["1. Both statement 1 and statement 2 are true", "2. Both statement 1 and statement 2 are false", "3. Statement 1 is true but statement 2 is false", "4. Statement 1 is false but statement 2 is true"],
        ans: 0,
        exp: "<b>1. Both statement 1 and statement 2 are true</b><br>Catharsis Theory was propounded by Seymour Feshbach. Feshbach's experiments in the lab showed that media content, particularly of violence, helps to vent out frustration. Students of both groups were exposed to verbal abuse; later the experimental group was shown a violent film while the other group was not. Findings indicated that the experimental group respondents had feelings of less hostility than the control group."
    },
    {
        q: "Human communication involves which of the following factors ?<br>(a) Building symbols<br>(b) Using symbols<br>(c) Manipulating symbols<br>(d) Exclusion of Culture<br>(e) Non-use of symbols<br><br>Choose the correct answer from the options given below:",
        opts: ["1. (a), (b) and (c) only", "2. (b), (c) and (d) only", "3. (c), (d) and (e) only", "4. (a), (c) and (e) only"],
        ans: 0,
        exp: "<b>1. (a), (b) and (c) only</b><br>"
    },
    {
        q: "Given below are two statements :<br>Statement (I) : Communication can create a 'feel good' factor among receivers.<br>Statement (II) : Communication can be used as an instrument to divide and alienate the receivers.<br><br>In the light of the above statements, choose the correct answer from the options given below :",
        opts: ["a. Both Statement (I) and Statement (II) are true", "b. Both Statement (I) and Statement (II) are false", "c. Statement (I) is true but Statement (II) is false", "d. Statement (I) is false but Statement (II) is true"],
        ans: 0,
        exp: "<b>a. Both Statement (I) and Statement (II) are true</b><br>"
    },
    {
        q: "Given below are two Statements :<br>Statement (I) : The direction of flow of emotional energy is changed through the process of redirection and sublimation from an undesirable goal to a socially desirable one.<br>Statement (II) : Catharsis is a desirable method in which channels are provided for the release of the emotional energy.<br><br>In the light of the above statements, choose the correct answer from the options given below :",
        opts: ["a. Both Statement (I) and Statement (II) are true", "b. Both Statement (I) and Statement (II) are false", "c. Statement (I) is true but Statement (II) is false", "d. Statement (I) is false but Statement (II) is true"],
        ans: 0,
        exp: "<b>a. Both Statement (I) and Statement (II) are true</b><br>"
    },
    {
        q: "Given below are two statements:<br>Statement (I): A study of the communicator in the communication process leads us to content analysis.<br>Statement (II): An analysis of 'says what' (the message) is control analysis.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["a. Both Statement (I) and Statement (II) are correct.", "b. Both Statement (I) and Statement (II) are incorrect.", "c. Statement (I) is correct but Statement (II) is incorrect.", "d. Statement (I) is incorrect but Statement (II) is correct."],
        ans: 1,
        exp: "<b>b. Both Statement (I) and Statement (II) are incorrect.</b><br>In Lasswell's model: Who? (Communicator) = Control Analysis; Says What? (Message) = Content Analysis; In Which Channel? (Medium) = Media Analysis; To Whom? (Audience) = Audience Analysis; With What Effect? (Effect) = Effects Analysis."
    },
    {
        q: "The concept which evaluates the larger contexts in which people and knowledge function, is identified as",
        opts: ["a. Social construction of reality", "b. Functional collection of reality", "c. Comparison of concepts of reality", "d. Qualitative presentation of reality"],
        ans: 0,
        exp: "<b>a. Social construction of reality</b><br>"
    },
    {
        q: "Given below are two statements:<br>Statement (I): All media are symbol systems and this is a fact in the case of television also.<br>Statement (II): Television is a medium that conveys messages to a homogeneous audience only.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["a. Both Statement (I) and Statement (II) are correct.", "b. Both Statement (I) and Statement (II) are incorrect.", "c. Statement (I) is correct but Statement (II) is incorrect.", "d. Statement (I) is incorrect but Statement (II) is correct."],
        ans: 2,
        exp: "<b>c. Statement (I) is correct but Statement (II) is incorrect.</b><br>"
    },
    {
        q: "Given below are two statements:<br>Statement (I): The centralised control of signs and symbols of mediated communication may affect plurality of opinions on the Internet.<br>Statement (II): The global corporate owners of Internet companies aim only at profits, not the existence of pluriverse.<br><br>In the light of the above statements, choose the correct answer from the options given below",
        opts: ["a. Both Statement (I) and Statement (II) are true", "b. Both Statement (I) and Statement (II) are false", "c. Statement (I) is true but Statement (II) is false", "d. Statement (I) is false but Statement (II) is true"],
        ans: 0,
        exp: "<b>a. Both Statement (I) and Statement (II) are true</b><br>"
    },
    {
        q: "In the ritualistic view of communication, individuals exchange understanding for",
        opts: ["a. Accumulation of information", "b. Promotion of self-interest", "c. Communion and fraternity", "d. Logocentric presence"],
        ans: 2,
        exp: "<b>c. Communion and fraternity</b><br>The ritualistic view of communication (James Carey) is a perspective that sees communication as a way of creating, maintaining, and sharing the beliefs, values, and norms of a society. It emphasizes the role of communication in creating a sense of community, communion, fraternity, identity, and culture. It also highlights communication's symbolic and expressive aspects, such as rituals, ceremonies, and traditions."
    },
    {
        q: "Given below are two statements:<br>Statement (I): A large portion of mediated cultural transmission involves traditions, language, beliefs, attitudes and values from one generation to another.<br>Statement (II): Such a process will contribute for the unconscious cultural development of individuals in the society.<br><br>OPTIONS",
        opts: ["a. Both Statement (I) and Statement (II) are true", "b. Both Statement (I) and Statement (II) are false", "c. Statement (I) is true but Statement (II) is false", "d. Statement (I) is false but Statement (II) is true"],
        ans: 0,
        exp: "<b>a. Both Statement (I) and Statement (II) are true</b><br>"
    },
    {
        q: "Given below are two statements :<br>Statement (I): There is an argument that the emergence of television audiences has brought in more personalised and interactive communication and media culture<br>Statement (II): Within an integrated communication system, messages do not acquire the elements of communicability and socialisation.<br><br>OPTIONS",
        opts: ["a. Both Statement (I) and Statement (II) are true", "b. Both Statement (I) and Statement (II) are false", "c. Statement (I) is true but Statement (II) is false", "d. Statement (I) is false but Statement (II) is true"],
        ans: 2,
        exp: "<b>c. Statement (I) is true but Statement (II) is false</b><br>"
    },
    {
        q: "The audiences of digital media are affected by",
        opts: ["a. Limited geographical area", "b. Fragmentation", "c. Passive messages", "d. Identity - crisis"],
        ans: 1,
        exp: "<b>b. Fragmentation</b><br>"
    },
    {
        q: "Which rules of effective presentation should be adopted by a classroom communicator?<br>a. Avoiding questions<br>b. Repeated rehearsals<br>c. Better level of comfort<br>d. Options for a satisfactory introduction<br>e. Preference for long pauses",
        opts: ["1. a, b and c only", "2. C, d and e only", "3. B, c and d only", "4. A, c and d only"],
        ans: 2,
        exp: "<b>3. B, c and d only</b><br>"
    },
    {
        q: "Match List 1 with List 2:<br><table border='1' cellpadding='4' style='border-collapse:collapse'><tr><th>List 1 Communication term</th><th>List 2 Subject source</th></tr><tr><td>a. Appreciative mass</td><td>1. Psychology</td></tr><tr><td>b. Collective representation</td><td>2. Sociology</td></tr><tr><td>c. Frame of reference</td><td>3. Anthropology</td></tr><tr><td>d. Stereotypes</td><td>4. Political science</td></tr></table>",
        opts: ["1. a-1, b-2, c-3, d-4", "2. A-3, b-4, c-1, d-2", "3. A-4, b-3, c-2, d-1", "4. A-2, b-3, c-1, d-4"],
        ans: 3,
        exp: "<b>4. A-2, b-3, c-1, d-4</b><br>"
    },
    {
        q: "______ is equated with high-brow cultural communication",
        opts: ["a. Film exhibition", "b. Street theatre", "c. Folk dance", "d. Classical dance"],
        ans: 3,
        exp: "<b>d. Classical dance</b><br>"
    },
    {
        q: "In constructive contexts of effective listening behavior, communication is characterized by<br>a. Trivial disturbances<br>b. Weak feelings<br>c. Identification of the common ground<br>d. Finding out the areas of mutual agreement<br>e. Search for real issues",
        opts: ["1. a, b and c only", "2. C, d and e only", "3. A, d and e only", "4. B, c and d only"],
        ans: 1,
        exp: "<b>2. C, d and e only</b><br>"
    },
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
    }
];