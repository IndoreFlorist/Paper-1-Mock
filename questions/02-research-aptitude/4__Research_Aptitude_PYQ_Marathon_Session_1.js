var rawQuestions = [
    {
        q: "There are two sets given below. Set - I specifies the types of research, while Set - II indicates their characteristics. Match the two and give your answer by selecting the appropriate code.<br>(a) (b) (c) (d)",
        opts: ["(1) (ii) (iv) (iii) (i)", "(2) (v) (iv) (iii) (ii)", "(3) (iii) (ii) (iii) (iv)", "(4) (ii) (iii) (iv) (v)"],
        ans: 0,
        exp: ""
    },
    {
        q: "Which of the sets of activities best indicate the cyclic nature of action research strategy?",
        opts: ["(1) Reflect, Observe, Plan, Act", "(2) Observe, Act, Reflect, Plan", "(3) Act, Plan, Observe, Reflect", "(4) Plan, Act, Observe, Reflect"],
        ans: 3,
        exp: "<b>(4) Plan, Act, Observe, Reflect</b><br>Action research proceeds in a repeating cycle: Plan, Act, Observe and Reflect, after which the next cycle begins."
    },
    {
        q: "Which of the following sequence of research steps is nearer to scientific method?",
        opts: ["(1) Suggested solution of the problem, Deducing the consequences of the solution, Perceiving the problem situation, Location of the difficulty and testing the solutions.", "(2) Perceiving the problem situation, Locating the actual problem and its definition, Hypothesizing, Deducing the consequences of the suggested solution and Testing the hypothesis in action.", "(3) Defining a problem, Identifying the causes of the problem, Defining a population, Drawing a sample, Collecting data and Analysing results.", "(4) Identifying the causal factors, Defining the problem, Developing a hypothesis, Selecting a sample, Collecting data and arriving at generalization and Conclusions."],
        ans: 1,
        exp: "<b>(2) Perceiving the problem situation, Locating the actual problem and its definition, Hypothesizing, Deducing the consequences of the suggested solution and Testing the hypothesis in action.</b><br>This follows Dewey's reflective thinking / scientific method: felt difficulty, defining the problem, hypothesis, deduction of consequences, and testing."
    },
    {
        q: "The problem of 'research ethics' is concerned with which aspect of research activities?",
        opts: ["(1) Following the prescribed format of a thesis", "(2) Data analysis through qualitative or quantitative technique", "(3) Defining the population of research", "(4) Evidence based research reporting"],
        ans: 3,
        exp: "<b>(4) Evidence based research reporting</b><br>Research ethics is concerned with honesty and integrity in conducting and reporting research, i.e. reporting findings that are based on evidence."
    },
    {
        q: "In which of the following activities, potential for nurturing creative and critical thinking is relatively greater?",
        opts: ["(1) Preparing research summary", "(2) Presenting a seminar paper", "(3) Participation in research conference", "(4) Participation in a workshop"],
        ans: 1,
        exp: "<b>(2) Presenting a seminar paper</b><br>Presenting a paper requires the researcher to organise ideas, defend them and face critical questions, which nurtures creative and critical thinking."
    },
    {
        q: "Identify the correct order of the following components which are interrelated in research.<br>(i) Observation<br>(ii) Hypothesis making<br>(iii) Developing concepts<br>(iv) Deducing the consequences of theories<br>(v) Methods employed to obtain them<br><br>Choose the correct answer from the code given below:",
        opts: ["(1) (v), (iv), (iii), (ii) and (i)", "(2) (i), (iii), (ii), (iv) and (v)", "(3) (ii), (iii), (i), (iv) and (v)", "(4) (iv), (v), (iii), (ii) and (i)"],
        ans: 1,
        exp: "<b>(2) (i), (iii), (ii), (iv) and (v)</b><br>Research begins with observation, leads to concept development, then hypothesis making, deduction of consequences and finally the methods employed to test them."
    },
    {
        q: "In the list given below, identify those statements which correctly describe the meaning and characteristics of research.<br>(i) Research is a method of improving our common sense.<br>(ii) Deductive and inductive methods get integrated in a research process.<br>(iii) Research is creativity and charisma.<br>(iv) Research is the use of scientific method to provide answers to meaningful questions.<br>(v) Method of consulting and using experience is called research.<br>(vi) The answers provided by research can be empirically verified.<br><br>Choose the correct answer from the code given below:",
        opts: ["(1) (ii), (iv) and (vi)", "(2) (i), (ii) and (iii)", "(3) (iv), (v) and (vi)", "(4) (i), (iii) and (v)"],
        ans: 0,
        exp: "<b>(1) (ii), (iv) and (vi)</b><br>Research integrates deductive and inductive methods, uses scientific method to answer meaningful questions, and its answers can be empirically verified."
    },
    {
        q: "In the two lists given below, List I provides the types of research methods, while List II indicates the critical features associated with them. Match the two lists and choose the correct answer from the code given below.<br>(a) (b) (c) (d)",
        opts: ["(1) (i) (ii) (iii) (iv)", "(2) (ii) (iii) (iv) (v)", "(3) (i) (iii) (ii) (v)", "(4) (iv) (v) (ii) (i)"],
        ans: 0,
        exp: ""
    },
    {
        q: "A researcher uses parametric test in lieu of non-parametric test for analysis and interpretation of results. This may be described as a case of",
        opts: ["(1) Unethical research practice", "(2) Malpractice in reporting of results", "(3) Technical lapse in handling data", "(4) Manipulation of research results"],
        ans: 2,
        exp: "<b>(3) Technical lapse in handling data</b><br>Choosing a wrong statistical test is a technical error in handling data, not necessarily an intentional ethical violation."
    },
    {
        q: "Which of the following provides more latitude to the researcher for creative expression?",
        opts: ["(1) Thesis writing", "(2) Writing of a research article", "(3) Presentation of a conference paper", "(4) Preparing a research synopsis"],
        ans: 0,
        exp: "<b>(1) Thesis writing</b><br>A thesis is the longest and most detailed document, giving the researcher the greatest scope for creative expression compared with articles, papers or synopses."
    },
    {
        q: "Which among the following is the best field of study to improve the ability of students Experiment and analyse?",
        opts: ["1. History", "2. Languages", "3. Economics", "4. Science"],
        ans: 3,
        exp: "<b>4. Science</b><br>Science relies on experimentation, observation and analysis, so it best develops these abilities."
    },
    {
        q: "Artifacts that arise and affect the internal validity in research are:<br>(a) History<br>(b) Randomization<br>(c) Maturity<br>(d) Instrumentation<br>(e) Experimental mortality<br>(f) Matching",
        opts: ["1. (a), (b), (c) and (d)", "2. (b), (c), (d) and (f)", "3. (a), (c), (d) and (e)", "4. (d), (e), (f) and (b)"],
        ans: 2,
        exp: "<b>3. (a), (c), (d) and (e)</b><br>Threats to internal validity include history, maturation, testing, instrumentation, selection and experimental mortality. Randomization and matching are control techniques, not threats."
    },
    {
        q: "Formulation of a research problem depends on:<br>(a) What is the object behind the researcher's choice?<br>(b) What are the specific questions?<br>(c) What is the conceptual model?<br>(d) What negative factors to research upon?<br>(e) Reasons for unlimiting the study.<br>(f) Construction of hypotheses.",
        opts: ["1. (a), (c), (e) and (f)", "2. (c), (d), (e) and (f)", "3. (b), (c), (d) and (e)", "4. (a), (b), (c) and (f)"],
        ans: 3,
        exp: "<b>4. (a), (b), (c) and (f)</b><br>Formulating a problem depends on the objective of the study, the specific questions, the conceptual model and the construction of hypotheses."
    },
    {
        q: "The components of a research design are:<br>(a) Comparison<br>(b) Control<br>(c) Reactivity<br>(d) Manipulation<br>(e) Non representativeness<br>(f) Generalization",
        opts: ["1. (c), (d), (e) and (f)", "2. (a), (c), (e) and (f)", "3. (b), (c), (d) and (e)", "4. (a), (b), (d) and (f)"],
        ans: 3,
        exp: "<b>4. (a), (b), (d) and (f)</b><br>Comparison, control, manipulation and generalization are components of research design. Reactivity and non-representativeness are problems, not components."
    },
    {
        q: "The four major operations in scientific research are:<br>(a) Demonstration of co-variance<br>(b) Elimination of spurious relations<br>(c) Sequencing in terms of time order<br>(d) Self-education<br>(e) Operationalization of personal choice<br>(f) Theorization<br><br>Codes:",
        opts: ["1. (a), (b), (c) and (d)", "2. (c), (d), (e) and (f)", "3. (a), (b), (c) and (f)", "4. (b), (c), (d) and (e)"],
        ans: 2,
        exp: "<b>3. (a), (b), (c) and (f)</b><br>The major operations are demonstration of co-variance, elimination of spurious relations, time-order sequencing and theorization."
    },
    {
        q: "A variable that is manipulated is known as:",
        opts: ["1. Dependent variable", "2. Control variable", "3. Independent variable", "4. Confounding variable"],
        ans: 2,
        exp: "<b>3. Independent variable</b><br>The independent variable is the one manipulated by the researcher to observe its effect on the dependent variable."
    },
    {
        q: "The research design is specifically related to which of the following features in research?<br>(i) Sample Selection<br>(ii) Formulation of a plan<br>(iii) Deciding about the tool for data collection<br>(iv) Hypothesis making<br>(v) Choice of a field of inquiry<br><br>Select your answer from the options given below:",
        opts: ["(A) (ii), (iii) and (iv)", "(B) (i), (ii) and (iii)", "(C) (ii), (iv) and (v)", "(D) (iii), (iv) and (v)"],
        ans: 1,
        exp: "<b>(B) (i), (ii) and (iii)</b><br>Research design is the plan of the study, covering sample selection, formulation of the plan and the choice of tools for data collection."
    },
    {
        q: "Through which research method, the manipulation of an independent variable and its effect on dependent variable is examined with reference to a hypothesis under controlled conditions?",
        opts: ["(A) Ex-post facto research", "(B) Descriptive research", "(C) Case study research", "(D) Experimental research"],
        ans: 3,
        exp: "<b>(D) Experimental research</b><br>Experimental research manipulates the independent variable under controlled conditions and examines its effect on the dependent variable."
    },
    {
        q: "In which of the following research studies interpretation and meaning get more attention than formulation of generalizations?<br>(i) Historical studies<br>(ii) Survey studies<br>(iii) Philosophical studies<br>(iv) Ethnographic studies<br>(v) Hypothetical - deductive studies<br>(vi) Ex-post facto studies<br><br>Choose your answer from the options given below:",
        opts: ["(A) (i), (ii) and (iii)", "(B) (iv), (v) and (vi)", "(C) (ii), (iv) and (v)", "(D) (i), (iii) and (iv)"],
        ans: 3,
        exp: "<b>(D) (i), (iii) and (iv)</b><br>Historical, philosophical and ethnographic studies are interpretive, giving more weight to meaning than to generalization."
    },
    {
        q: "Bibliography given in a research report",
        opts: ["(A) Helps those interested in further research", "(B) Shows the vast knowledge of the researcher", "(C) Makes the report authentic", "(D) Is an optional part of the report"],
        ans: 0,
        exp: "<b>(A) Helps those interested in further research</b><br>A bibliography lists the sources consulted so that other researchers can trace them for further study."
    },
    {
        q: "Which of the following is a plagiarism checking website?<br>(a) http://go.turnitin.com<br>(b) http://www.researhcgate.com<br>(c) http://www.editorial.elsevier.com<br>(d) http://www.grammarly.com<br><br>Options",
        opts: ["(A) (a) and (d)", "(B) (b) and (c)", "(C) (c) only", "(D) (b) only"],
        ans: 0,
        exp: "<b>(A) (a) and (d)</b><br>Turnitin and Grammarly offer plagiarism checking. ResearchGate is an academic network and Elsevier's editorial site is a manuscript submission system."
    },
    {
        q: "In using the hypothetico-deductive research paradigm which of the following sequences is considered appropriate?",
        opts: ["(A) Hypothesis making, hypothesis testing, arriving at generalization and conclusive", "(B) Establishing a research problem, hypothesis making, hypothesis testing arriving at generalisation and conclusion", "(C) Hypothesis making, establishing a research problem, hypothesis testing, arriving at generalisation and conclusion.", "(D) Hypothesis testing, hypothesis making, finalizing the research problem, arriving at the generalisation and conclusion."],
        ans: 1,
        exp: "<b>(B) Establishing a research problem, hypothesis making, hypothesis testing arriving at generalisation and conclusion</b><br>The problem must be established first, then hypotheses are made and tested, leading to generalization."
    },
    {
        q: "Which one of the following research procedures will figure under post positivistic approach?",
        opts: ["(A) Normative Survey", "(B) Experiment Study", "(C) Ethnographic Study", "(D) Ex post facto Study"],
        ans: 2,
        exp: "<b>(C) Ethnographic Study</b><br>The post-positivistic (naturalistic, qualitative) approach includes ethnographic studies, which study people in their natural settings."
    },
    {
        q: "A college teacher plans a research programme in which he/she intends to improve the socio-emotional aspect of his/her classroom climate during teaching. Which one of the following research methods will be considered appropriate in this context?",
        opts: ["(A) Experimental Method", "(B) Descriptive Method", "(C) Historical method", "(D) Action Research Method"],
        ans: 3,
        exp: "<b>(D) Action Research Method</b><br>Action research is used by practitioners to improve their own practice or situation, such as the classroom climate."
    },
    {
        q: "Which of the following steps in research are least vulnerable to research ethics?<br>A. Identifying the research variable<br>B. Defining the research variables<br>C. Data collection procedure<br>D. Data analysis procedure<br>E. Reporting research outcomes<br><br>Choose the correct answer from the options given below",
        opts: ["(A) A and B only", "(B) B and C only", "(C) C and D only", "(D) D and E only"],
        ans: 0,
        exp: "<b>(A) A and B only</b><br>Identifying and defining variables are the least exposed to ethical problems, whereas data collection, analysis and reporting are more vulnerable."
    },
    {
        q: "The personalistic styles of writing a research report are permissible in which of the following research?<br>A. Grounded theory research<br>B. Experimental research<br>C. Participant-observation based research<br>D. Historical research<br>E. Case study research<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) A, B and C only", "(B) B, C and D only", "(C) C, D and E only", "(D) A, C and E only"],
        ans: 3,
        exp: "<b>(D) A, C and E only</b><br>Qualitative approaches such as grounded theory, participant observation and case study allow a personal, first-person writing style. Experimental research requires an impersonal style."
    },
    {
        q: "Which of the following features best describe an independent variable in research?<br>a. It is the cause in the cause-effect relationship.<br>b. It is the effect in the cause-effect relationship.<br>c. It is the condition or characteristic which is manipulated in an experimental study.<br>d. It is the variable which is placed under control.<br>e. It is a kind of response variable.<br><br>Choose the correct answer from the options given below",
        opts: ["(A) (a) and (e) only", "(B) (b) and (c) only", "(C) (a) and (c) only", "(D) (d) and (e) only"],
        ans: 2,
        exp: "<b>(C) (a) and (c) only</b><br>The independent variable is the cause and is the condition manipulated in an experiment. The effect or response variable is the dependent variable."
    },
    {
        q: "When a particular statistic in a research situation is evidently declared to be significant, which of the following decisions will be considered tenable?<br>a. Null hypothesis is rejected<br>b. Alternative hypothesis is accepted<br>c. Null hypothesis is accepted<br>d. Alternative hypothesis is rejected<br>e. Null hypothesis along with the alternate hypothesis are accepted.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (c) only", "(B) (c) and (d) only", "(C) (d) and (e) only", "(D) (a) and (b) only"],
        ans: 3,
        exp: "<b>(D) (a) and (b) only</b><br>A significant result leads to rejection of the null hypothesis and acceptance of the alternative hypothesis."
    },
    {
        q: "Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason (R):<br>Assertion (A): Data must be authentic before it can be of any value in historical research, yet proof of authenticity does not establish its value, it must also be accurate<br>Reason (R): External criticism is, therefore, referred to as lower criticism of the data.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(A) Both (A) and (R) are correct and (R) is the correct explanation of (A)", "(B) Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)", "(C) (A) is correct but (R) is not correct", "(D) (A) is not correct but (R) is correct"],
        ans: 1,
        exp: "<b>(B) Both (A) and (R) are correct but (R) is NOT the correct explanation of (A)</b><br>External criticism (lower criticism) checks authenticity and internal criticism (higher criticism) checks accuracy. Both statements are true but the reason does not explain the assertion."
    },
    {
        q: "List I mentions various methods of research while List II offers their description. Match List I with List II:",
        opts: ["(A) (A) -(I), (B)-(II), (C)-(III), (D)-(IV)", "(B) (A) -(IV), (B)-(III), (C)-(II), (D)-(I)", "(C) (A)-(II), (B)-(I), (C)-(IV), (D)-(III)", "(D) (A) -(III), (B)-(IV), (C)-(I), (D)-(II)"],
        ans: 0,
        exp: ""
    },
    {
        q: "Which of the following research method employs internal and external criticism for sifting as evidences and data?",
        opts: ["(A) Ex post facto method", "(B) Experimental method", "(C) Historical method", "(D) Descriptive survey method"],
        ans: 2,
        exp: "<b>(C) Historical method</b><br>Historical research uses external criticism (authenticity) and internal criticism (accuracy and credibility) to sift evidence."
    },
    {
        q: "Given below are two statements:<br>Statement I: The population in research means a defined aggregate of something which is the focus of study.<br>Statement II: A sample is a sub-aggregate drawn from a defined aggregate to represent it.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(A) Both Statement I and Statement II are correct", "(B) Both Statement I and Statement II are incorrect", "(C) Statement I is correct but Statement II is incorrect", "(D) Statement I is incorrect but Statement II is correct"],
        ans: 0,
        exp: "<b>(A) Both Statement I and Statement II are correct</b><br>A population is the defined aggregate under study and a sample is a representative subset drawn from it."
    },
    {
        q: "Given below are two statements: one labeled as Assertion (A) and the other labeled as Reason (R):<br>Assertion (A): Research ethics is necessary to provide credibility to research findings and their use in authentic situations.<br>Reason (R): Application of ICT in research for credibility of research results.<br><br>Choose the correct answer from the options in the light of the above statements given below:",
        opts: ["(a) Both (A) and (R) are true and (R) is the correct explanation of (A)", "(b) Both (A) and (R) are true and (R) is not the correct explanation of (A)", "(c) (A) is true but (R) is false", "(d) (A) is false but (R) is true"],
        ans: 1,
        exp: "<b>(b) Both (A) and (R) are true and (R) is not the correct explanation of (A)</b><br>Ethics gives credibility to findings. ICT use in research is a separate matter and does not explain why ethics is necessary."
    },
    {
        q: "Two statements are given below:<br>Statement (I): In classroom assessment, the teacher finds that the distribution of students' score is positively skewed. Hence, the mean of scores will be greater than the median and the median value will be greater than the mode.<br>Statement (II): If the distribution of student's score is found to be normal, then all the three values of the central tendency coincide.<br><br>In the light of the above statements, choose the most appropriate level from the following options:",
        opts: ["(A) Both the statements I and II are correct", "(B) Statements I and II both are not correct.", "(C) Statement I is correct but statement II is not correct.", "(D) Statement I is not correct but statement II is correct."],
        ans: 0,
        exp: "<b>(A) Both the statements I and II are correct</b><br>In a positively skewed distribution Mean > Median > Mode. In a normal distribution mean, median and mode coincide."
    },
    {
        q: "Identify the key features of qualitative research:<br>(i) Actual settings as the source of data<br>(ii) Control, observe and measure as main operations<br>(iii) Data take the forms of words or pictures<br>(iv) Concerned with participant perspective<br>(v) Hypothesis making and hypothesis testing<br><br>Choose the most appropriate answer from the options given below:",
        opts: ["(A) (i), (iii) and (iv) only", "(B) (i), (ii) and (iii) only", "(C) (ii), (iii) and (iv) only", "(D) (iii), (iv) and (v) only"],
        ans: 0,
        exp: "<b>(A) (i), (iii) and (iv) only</b><br>Qualitative research uses natural settings, data in words or pictures and the participants' perspective. Control, measurement and hypothesis testing belong to quantitative research."
    },
    {
        q: "Which of the following research focuses on enhancing the corpus of knowledge in a given field?",
        opts: ["(A) Action Research", "(B) Applied Research", "(C) Evaluative Research", "(D) Fundamental Research"],
        ans: 3,
        exp: "<b>(D) Fundamental Research</b><br>Fundamental (basic) research aims at adding to the body of knowledge and theory in a field."
    },
    {
        q: "The personalistic styles of writing a research report are permissible in which of the following research?<br>(i) Grounded theory research<br>(ii) Experimental research<br>(iii) Participant-observation based research<br>(iv) Historical research<br>(v) Case study research<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (i), (ii) and (iii) only", "(B) (ii), (iii) and (iv) only", "(C) (iii), (iv) and (v) only", "(D) (i), (iii) and (v) only"],
        ans: 3,
        exp: "<b>(D) (i), (iii) and (v) only</b><br>Grounded theory, participant observation and case study (qualitative) research permit a personalistic writing style."
    },
    {
        q: "Which of the following steps in research are least vulnerable to research ethics?<br>(i) Identifying the research variables<br>(ii) Defining the research variables<br>(iii) Data collection procedure<br>(iv) Data analysis procedure<br>(v) Reporting research outcomes<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (i) and (ii) only", "(B) (ii) and (iii) only", "(C) (iii) and (iv) only", "(D) (iv) and (v) only"],
        ans: 0,
        exp: "<b>(A) (i) and (ii) only</b><br>Identifying and defining variables are the least exposed to ethical issues compared with data collection, analysis and reporting."
    },
    {
        q: "A college teacher plans a research program in which he/she intend to improve the socio-emotional aspect of his/her classroom climate during teaching. Which one of the following research methods will be considered appropriate in this context?",
        opts: ["(A) Experimental method", "(B) Descriptive method", "(C) Historical method", "(D) Action research method"],
        ans: 3,
        exp: "<b>(D) Action research method</b><br>Action research is used by a practitioner to improve a given situation, such as the classroom climate."
    },
    {
        q: "Which one of the following research procedures will figure under post positivistic approach?",
        opts: ["(A) Normative survey", "(B) Experimental study", "(C) Ethnographic study", "(D) Ex post facto study"],
        ans: 2,
        exp: "<b>(C) Ethnographic study</b><br>The post-positivistic (naturalistic, qualitative) approach includes ethnographic studies."
    },
    {
        q: "Which one of the following is an important characteristic of the researchers involved in qualitative study?",
        opts: ["(A) Enthusiasm", "(B) Non-partisan", "(C) Reflexivity", "(D) Transparency"],
        ans: 2,
        exp: "<b>(C) Reflexivity</b><br>Qualitative researchers reflect critically on their own role, assumptions and influence on the research process, which is called reflexivity."
    },
    {
        q: "Given below are two statements<br>Statement I: All research adds to the corpus of knowledge by advancing a theory<br>Statement II: The focus of action research is basically on the amelioration of prevalent practices<br><br>In light of the above statements choose the correct answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are true", "(B) Both Statement I and Statement II are false", "(C) Statement I is true but Statement II is false", "(D) Statement I is false but Statement II is true"],
        ans: 3,
        exp: "<b>(D) Statement I is false but Statement II is true</b><br>Not all research advances a theory (applied and action research do not). Action research focuses on improving prevalent practices."
    },
    {
        q: "Match List I with List II",
        opts: ["(A) a - i, b - ii, c - iii, d - iv", "(b) a - ii, b - i, c - iv, d - iii", "(c) a - iii, b - ii, c - iv, d - i", "(d) a - iv, b - i, c - ii, d - iii"],
        ans: 0,
        exp: ""
    },
    {
        q: "Match List I with List II<br>Choose the correct answer from the options given below:",
        opts: ["(A) a - iv, b - iii, c - ii, d - i", "(B) a - iii, b - ii, c - i, d - iv", "(C) a - i, b - ii, c - iii, d - iv", "(D) a - iii, b - iv, c - i, d - ii"],
        ans: 0,
        exp: ""
    },
    {
        q: "A teacher proposes to find out the effect of praise and encouragement during a teaching-learning session based on Skinner's theory of reinforcement. What type of research will it belong to?",
        opts: ["(A) Fundamental research", "(B) Evaluative research", "(C) Action research", "(D) Applied research"],
        ans: 3,
        exp: "<b>(D) Applied research</b><br>Applied research tests the applicability of an already established theory (here Skinner's reinforcement theory) in a practical situation."
    },
    {
        q: "Arrange the steps in hypothetico-deductive research in the correct sequence<br>a. Identifying and defining a research problem<br>b. Defining the population and drawing a sub-set therefrom<br>c. Data collection using appropriate research tasks followed by data analyses<br>d. Hypothesis formulation and developing a design of research<br>e. Taking a decision on the substantive research hypothesis via testing of the Null hypothesis<br><br>Choose the correct answer from the options given below",
        opts: ["(A) a, d, b, c, e", "(B) a, b, c, d, e", "(C) a, c, b, d, e", "(D) b, a, c, d, e"],
        ans: 0,
        exp: "<b>(A) a, d, b, c, e</b><br>Define the problem, formulate the hypothesis and design, define the population and sample, collect and analyse data, and finally decide on the hypothesis by testing the null hypothesis."
    },
    {
        q: "Which of the following sampling techniques in research imply randomization and equal probability of drawing the units?<br>a. Quota sampling<br>b. Snowball sampling<br>c. Stratified sampling<br>d. Dimensional sampling<br>e. Cluster sampling<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) a and b only", "(B) b and c only", "(C) c and e only", "(D) d and e only"],
        ans: 2,
        exp: "<b>(C) c and e only</b><br>Stratified and cluster sampling are probability sampling techniques. Quota, snowball and dimensional sampling are non-probability techniques."
    },
    {
        q: "Which of the following is a data visualization method?",
        opts: ["(A) Line", "(B) Circle and Triangle", "(C) Pie chart and Bar chart", "(D) Pentagon"],
        ans: 2,
        exp: "<b>(C) Pie chart and Bar chart</b><br>Pie charts and bar charts are standard methods for visualizing data."
    },
    {
        q: "Match List I with List II. List I gives sampling methods while List II provides their Description.<br>Choose the correct answer from the options given below:",
        opts: ["(A) (A)-(I), (B)-(II), (C)-(III), (D)-(IV)", "(B) (A)-(III), (B)-(IV), (C)-(I), (D)-(II)", "(C) (A)-(IV), (B)-(I), (C)-(II), (D)-(III)", "(D) (A)-(II), (B)-(III), (C)-(IV), (D)-(I)"],
        ans: 0,
        exp: ""
    },
    {
        q: "Identify the features of qualitative research from the following:<br>a. Researcher becomes immersed in the situation present or past<br>b. Researcher is detached from the study to avoid bias<br>c. It develops context-bound generalizations<br>d. It is based on logical positivist philosophy<br>e. It uses an emergent research design<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (b), (c) and (d) only", "(C) (a), (c) and (e) only", "(D) (c), (d) and (e) only"],
        ans: 2,
        exp: "<b>(C) (a), (c) and (e) only</b><br>Qualitative research involves immersion, context-bound generalizations and an emergent design. Detachment and logical positivism characterize quantitative research."
    },
    {
        q: "Which among the following are non parametric statistics?<br>A. t-test<br>B. f-test<br>C. Spearman's rank order correlation<br>D. Mann-Whitney - Wilcoxon test<br>E. Kendall coefficient of concordance<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) A, B and C only", "(B) B, C and D only", "(C) B, D and E only", "(D) C, D and E only"],
        ans: 3,
        exp: "<b>(D) C, D and E only</b><br>Spearman's rank correlation, the Mann-Whitney-Wilcoxon test and Kendall's coefficient of concordance are non-parametric. The t-test and f-test are parametric."
    },
    {
        q: "Which of the following are the stages of meta-analysis?<br>(a) Understand the literature<br>(b) Conduct new studies to fill the gap<br>(c) Develop inclusion and exclusion criteria of the study<br>(d) Locating primary studies<br>(e) Identify secondary data<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) a, b and d only", "(B) a, c and d only", "(C) b, c and d only", "(D) b, d and e only"],
        ans: 1,
        exp: "<b>(B) a, c and d only</b><br>Meta-analysis involves understanding the literature, setting inclusion and exclusion criteria and locating primary studies. It does not involve conducting new studies."
    },
    {
        q: "If a researcher has to test a hypothesis whether the difference between the means of two groups are significant, s/he will use:",
        opts: ["(A) Chi-square test", "(B) Correlation coefficient", "(C) Sign-test", "(D) Student's t-test"],
        ans: 3,
        exp: "<b>(D) Student's t-test</b><br>The t-test is used to test the significance of the difference between the means of two groups."
    },
    {
        q: "Given below are two statements<br>Statement I: Parametric statistics are more powerful than nonparametric statistics<br>Statement II: Parametric statistics are assumption free statistics<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement I and Statement II are false", "(B) Both Statement I and Statement II are true", "(C) Statement I is false but Statement II is true", "(D) Statement I is true but Statement II is false"],
        ans: 3,
        exp: "<b>(D) Statement I is true but Statement II is false</b><br>Parametric statistics are more powerful but they rest on assumptions (such as normality). Non-parametric statistics are assumption free (distribution free)."
    },
    {
        q: "Given below are two statements<br>Statement I: Exploratory studies mainly aim at developing hypotheses or questions for further research.<br>Statement II: The goal of formal study is to test the hypotheses or answer the questions posed.<br><br>In light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are false", "(B) Both Statement I and Statement II are true", "(C) Statement I is false but Statement II is true", "(D) Statement I is true but Statement II is false"],
        ans: 1,
        exp: "<b>(B) Both Statement I and Statement II are true</b><br>Exploratory studies generate hypotheses and questions, while formal studies test hypotheses or answer the questions posed."
    },
    {
        q: "Which of the following are examples of violation of research ethics?<br>A. Violating participant confidentiality<br>B. Making recommendations beyond the scope of data collected<br>C. Using an inappropriate research design<br>D. Changing data to meet a desired outcome<br>E. Using a quantitative method in place of a qualitative method<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) A, B and D only", "(B) A, B, C and D only", "(C) B, C, D and E only", "(D) B, D and E only"],
        ans: 0,
        exp: "<b>(A) A, B and D only</b><br>Breaching confidentiality, over-generalizing beyond the data and falsifying data are ethical violations. Inappropriate design or method choice is a technical issue."
    },
    {
        q: "Given below are two statements, one is labelled as Assertion A and the other is labelled as Reason (R)<br>Assertion A: In the case study method, the researcher collects detailed information from a limited number of participants<br>Reason R: Findings based on case study research can be used to develop research hypotheses/questions for subsequent studies.<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) A is false but R is true", "(B) A is true but R is false", "(C) Both A and R are true and R is the correct explanation of A", "(D) Both A and R are true but R is NOT the correct explanation of A"],
        ans: 3,
        exp: "<b>(D) Both A and R are true but R is NOT the correct explanation of A</b><br>Both statements are true, but the use of findings for later hypotheses does not explain why detailed information is collected from few participants."
    },
    {
        q: "Given below are two statements, one is labelled as Assertion A and the other is labelled as Reason R<br>Assertion A: The major deficiency of pre-experimental design is that they fail to provide comparison groups.<br>Reason R: Equivalence can be achieved through matching and random assignment.<br><br>In light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(A) A is false but R is true", "(B) A is true but R is false", "(C) Both A and R are true and R is the correct explanation A", "(D) Both A and R are true but R is NOT the correct explanation of A"],
        ans: 3,
        exp: "<b>(D) Both A and R are true but R is NOT the correct explanation of A</b><br>Pre-experimental designs lack comparison groups, and equivalence of groups can be achieved through matching and random assignment, but R does not explain A."
    },
    {
        q: "Given below are two statements<br>Statement I: Experimenter effects are errors introduced during the collection or analysis of experimental data due to the behavior of the experimenter.<br>Statement II: Due to the presence of certain cues in the experimental setting, the participants form an interpretation of the experiment's purpose and subconsciously change their behaviour to fit that interpretation.<br><br>In light of the above statements, choose the most appropriate answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are correct", "(B) Both Statement I and Statement II are incorrect", "(C) Statement I is correct but Statement II is incorrect", "(D) Statement I is incorrect but Statement II is correct"],
        ans: 0,
        exp: "<b>(A) Both Statement I and Statement II are correct</b><br>Statement I describes experimenter effects and Statement II describes demand characteristics, both of which are correct."
    },
    {
        q: "Discourse analysis in historical research is associated with",
        opts: ["(A) Carr", "(B) Foucault", "(C) Hobsbawn", "(D) Skinner"],
        ans: 1,
        exp: "<b>(B) Foucault</b><br>Michel Foucault is associated with discourse analysis."
    },
    {
        q: "Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I (Government of India Projects)</b></td><td><b>List II (Purpose)</b></td></tr><tr><td>A. Shodhganga</td><td>I. Expert database + Researcher network</td></tr><tr><td>B. SWAYAM PRABHA</td><td>II. Thesis database</td></tr><tr><td>C. Vidwan</td><td>III. Online content delivery platform</td></tr><tr><td>D. SAKSHAT</td><td>IV. DTH educational channel</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A-I, B-III, C-II, D-IV", "(B) A-II, B-IV, C-I, D-III", "(C) A-III, B-II, C-IV, D-I", "(D) A-IV, B-I, C-III, D-II"],
        ans: 1,
        exp: "<b>(B) A-II, B-IV, C-I, D-III</b><br>Shodhganga is a thesis database, SWAYAM PRABHA is a DTH educational channel, Vidwan is an expert database and researcher network, and SAKSHAT is an online content delivery platform."
    },
    {
        q: "Given below are two statements, one is labelled as Assertion A and the other is labelled as Reason R<br>Assertion A: Student's t-statistic is a robust statistic.<br>Reason R: Student's t-statistic can yield accurate analysis of data, even if some of the assumptions of parametric statistics are violated.<br><br>In light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) A is false but R is true", "(B) A is true but R is false", "(C) Both A and R are true and R is the correct explanation of A", "(D) Both A and R are true but R is NOT the correct explanation of A"],
        ans: 2,
        exp: "<b>(C) Both A and R are true and R is the correct explanation of A</b><br>The t-statistic is called robust precisely because it gives accurate results even when some parametric assumptions are violated."
    },
    {
        q: "Given below are two statements:<br>Statement I: Sample sizes for qualitative research vary by technique but are generally small.<br>Statement II: Qualitative research involves non-probability sampling.<br><br>In light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are false", "(B) Both Statement I and Statement II are true", "(C) Statement I is false but Statement II is true", "(D) Statement I is true but Statement II is false"],
        ans: 1,
        exp: "<b>(B) Both Statement I and Statement II are true</b><br>Qualitative research generally uses small samples chosen through non-probability sampling."
    },
    {
        q: "Which among the following is an example of descriptive statistic?",
        opts: ["(A) Chi-square", "(B) Regression", "(C) Standard deviation", "(D) t-statistic"],
        ans: 2,
        exp: "<b>(C) Standard deviation</b><br>Standard deviation describes the spread of data and is a descriptive statistic. Chi-square, regression and t are inferential."
    },
    {
        q: "Which among the following are the source of threat to external validity?<br>A. Sample characteristics<br>B. Novelty/uniqueness of stimulus<br>C. Improper manipulation of I.V.<br>D. Lack of motivation on the part of the participants<br>E. Reactivity of the assessments<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) A, B and E only", "(B) A, B and D only", "(C) B, D and E only", "(D) C, D and E only"],
        ans: 0,
        exp: "<b>(A) A, B and E only</b><br>Sample characteristics, novelty of the stimulus and reactivity of assessments limit generalizability, so they threaten external validity."
    },
    {
        q: "The exercise of reviewing the relevant literature is most closely related for which one of the following?",
        opts: ["(A) For analyzing quantitative data", "(B) Formulating research problems", "(C) Generalization of the finding", "(D) In drawing a sample for the study"],
        ans: 1,
        exp: "<b>(B) Formulating research problems</b><br>A literature review identifies gaps and helps in formulating the research problem."
    },
    {
        q: "Identify the features of empirico-inductive paradigm of research<br>(A) Research is concerned with the process rather than simply with outcomes or products<br>(B) Based on logical positivist philosophy which assumes a single objective reality<br>(C) Researchers are concerned with what are called 'participant perspectives'<br>(D) Attempts to establish universal context free generalizations<br><br>Choose the most appropriate answer from the options given below:",
        opts: ["(A) (A) and (B) only", "(B) (B) and (C) only", "(C) (C) and (D) only", "(D) (A) and (C) only"],
        ans: 3,
        exp: "<b>(D) (A) and (C) only</b><br>The empirico-inductive (qualitative) paradigm is concerned with process and participant perspectives. (B) and (D) describe the positivist, hypothetico-deductive paradigm."
    },
    {
        q: "Given below are two statements: One is labeled as Assertion A and the other is labeled as Reason R.<br>Assertion (A): A research thesis has to follow a prescribed format and style of referencing.<br>Reasons (R): This ensures the observance of research ethics.<br><br>In the light of the above statements, Choose the most appropriate answer from the options given below:",
        opts: ["(A) Both (A) and (R) are correct and (R) is the correct explanation of (A).", "(B) Both (A) and (R) are correct but (R) is NOT the correct explanation of (A).", "(C) (A) is correct but (R) is not correct", "(D) (A) is not correct but (R) is correct"],
        ans: 1,
        exp: "<b>(B) Both (A) and (R) are correct but (R) is NOT the correct explanation of (A).</b><br>A thesis follows a prescribed format and referencing style, and proper citation supports ethics, but the format is mainly required for standardization and presentation."
    },
    {
        q: "Given below are two statements:<br>Statement I: Action Research is used primarily to improve a given situation by a practitioner.<br>Statement II: Applied research is directed at exploring applicability of principles already established.<br><br>In the light of the above statements, Choose the most appropriate answer from the options given below:",
        opts: ["(A) Both Statement I and Statement II are correct.", "(B) Both Statement I and Statement II are incorrect.", "(C) Statement I is correct but Statement II is incorrect.", "(D) Statement I is incorrect but Statement II is correct."],
        ans: 0,
        exp: "<b>(A) Both Statement I and Statement II are correct.</b><br>Action research aims at improving a situation by a practitioner, and applied research explores the applicability of established principles."
    },
    {
        q: "In which method of research an independent variable is manipulated with an intent to observe concomitant changes in dependent variable?",
        opts: ["(A) Ex Post Facto method", "(B) Case study method", "(C) Descriptive survey method", "(D) Experimental method"],
        ans: 3,
        exp: "<b>(D) Experimental method</b><br>Only the experimental method manipulates the independent variable to observe changes in the dependent variable."
    },
    {
        q: "Match List I and List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I (Sampling Methods)</b></td><td><b>List II (Procedure involved)</b></td></tr><tr><td>(A) Simple Random Sampling</td><td>(I) The first member is used as informant to identify another, and the process goes on like this</td></tr><tr><td>(B) Stratified Random Sampling</td><td>(II) The units are chosen intact on the basis of their settings</td></tr><tr><td>(C) Cluster Sampling</td><td>(III) The units are chosen randomly from defined groups/levels</td></tr><tr><td>(D) Snowball sampling</td><td>(IV) The units are chosen independent and by giving equal chance to each</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (A)-(I), (B)-(II), (C)-(III), (D)-(IV)", "(B) (A)-(IV), (B)-(III), (C)-(II), (D)-(I)", "(C) (A)-(III), (B)-(IV), (C)-(I), (D)-(II)", "(D) (A)-(II), (B)-(I), (C)-(IV), (D)-(III)"],
        ans: 1,
        exp: "<b>(B) (A)-(IV), (B)-(III), (C)-(II), (D)-(I)</b><br>Simple random: equal chance to each unit. Stratified: random selection from defined groups. Cluster: intact units. Snowball: one informant identifies the next."
    },
    {
        q: "A researcher obtains the following p-values for sample correlation coefficients of different samples. Which of these can be considered significant at 1% level of significance?<br>A. 0.004<br>B. 0.99<br>C. 0.995<br>D. 0.001<br>E. 0.1<br><br>Choose the correct answer from the options given below",
        opts: ["1. B & C only", "2. B, D & E only", "3. A & D only", "4. B, C & E only"],
        ans: 2,
        exp: "<b>3. A & D only</b><br>A result is significant at the 1% level when p < 0.01. Only 0.004 and 0.001 satisfy this."
    },
    {
        q: "Given below are two statements:<br>Statement I: The standard deviation of a series of repeated measurements estimates the likely size of the chance error in a single measurement.<br>Statement II: Bias affects all the measurements the same way, pushing them in the same direction.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 0,
        exp: "<b>1. Both Statement I and Statement II are true</b><br>Standard deviation estimates random (chance) error, while bias is a systematic error that pushes all measurements in the same direction."
    },
    {
        q: "Given below are two statements:<br>Statement I: In a ratio scale, zero point is arbitrary<br>Statement II: The nominal scale allows ordering ranking of data<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 1,
        exp: "<b>2. Both Statement I and Statement II are false</b><br>A ratio scale has a true (absolute) zero, and a nominal scale only classifies and does not rank."
    },
    {
        q: "Which aspect of the researcher may cause psychosocial effect in the participant of a study?",
        opts: ["1. Age", "2. Race", "3. Sex", "4. Attitude"],
        ans: 3,
        exp: "<b>4. Attitude</b><br>Psychosocial effects arise from the researcher's psychological attributes such as attitude, whereas age, race and sex cause biosocial effects."
    },
    {
        q: "Which among the following would be the ethical issues in a research study that involves participation of human subjects?<br>A. Lack of informed consent<br>B. Physical and psychological harm<br>C. Excessive inducements<br>D. Debriefing<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B & C only", "2. B, C & D only", "3. A, C & D only", "4. A, B, C & D"],
        ans: 3,
        exp: "<b>4. A, B, C & D</b><br>All four are ethical concerns in research with human subjects: informed consent, harm, excessive inducements and debriefing."
    },
    {
        q: "Arrange the following scales of measurement from the simplest to the most evolved.<br>A. Ordinal<br>B. Nominal<br>C. Ratio<br>D. Interval<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, C, D", "2. B, C, A, D", "3. C, D, B, A", "4. B, A, D, C"],
        ans: 3,
        exp: "<b>4. B, A, D, C</b><br>The order from simplest to most evolved is Nominal, Ordinal, Interval, Ratio."
    },
    {
        q: "When the researcher's sex affect the behaviour of a participant in a study, it refers to",
        opts: ["1. Psychosocial Effect", "2. Psychological Effect", "3. Biosocial Effect", "4. Environmental Effect"],
        ans: 2,
        exp: "<b>3. Biosocial Effect</b><br>Biosocial effects are caused by biological and social attributes of the researcher such as sex, age and race."
    },
    {
        q: "Given below are two statements:<br>Statement I: In observational research, the variables are actively manipulated and the environment is as controlled as possible.<br>Statement II: Observational research allows you to eliminate the influence of many extraneous factors.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 1,
        exp: "<b>2. Both Statement I and Statement II are false</b><br>Variables are not manipulated in observational research, and it cannot eliminate extraneous factors as experimental research can."
    },
    {
        q: "When studies on a given topic lead to similar conclusions, the measurements show",
        opts: ["1. Convergent Validity", "2. Criterion Validity", "3. Divergent Validity", "4. Construct Validity"],
        ans: 0,
        exp: "<b>1. Convergent Validity</b><br>Convergent validity is shown when different measures or studies of the same concept yield similar results."
    },
    {
        q: "Which of the following p-values would signify that a sample correlation coefficient is significant at 1% level of significance?",
        opts: ["1. 0.005", "2. 0.02", "3. 0.99", "4. 0.95"],
        ans: 0,
        exp: "<b>1. 0.005</b><br>Significance at the 1% level requires p < 0.01, and only 0.005 meets this."
    },
    {
        q: "Given below are two statements:<br>Statement I: The risk of rejecting the null hypothesis when it should be confirmed, is more at 0.05 p-level than at 0.01 p-level.<br>Statement II: The risk of committing a type-I error is lower at 0.05 p-level than at 0.01 p-level<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 2,
        exp: "<b>3. Statement I is true but Statement II is false</b><br>The Type-I error risk equals the significance level, so it is higher at 0.05 than at 0.01."
    },
    {
        q: "Given below are two statements:<br>Statement I: A dichotomous variable is the one which has more than two categories.<br>Statement II: A nominal variable can have more than two categories.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 3,
        exp: "<b>4. Statement I is false but Statement II is true</b><br>A dichotomous variable has exactly two categories, while a nominal variable can have two or more."
    },
    {
        q: "According to UGC Regulations 2018 on plagiarism, common knowledge or coincidental terms, up to how many consecutive words shall be excluded while checking similarity for detection of plagiarism",
        opts: ["1. 8", "2. 12", "3. 14", "4. 18"],
        ans: 2,
        exp: "<b>3. 14</b><br>Under the UGC Regulations 2018, common knowledge or coincidental terms up to fourteen consecutive words are excluded from similarity checking."
    },
    {
        q: "When participants drop out of a study, leading to change in the nature of the sample, it would cause which of the following threats to internal validity?",
        opts: ["1. Selection threat", "2. Attrition threat", "3. History threat", "4. Testing threat"],
        ans: 1,
        exp: "<b>2. Attrition threat</b><br>Dropout of participants (attrition or mortality) changes the nature of the sample and threatens internal validity."
    },
    {
        q: "Given below are two statements:<br>Statement I: A Cohort is a population whose members have some specific characteristics in common.<br>Statement II: In a prospective study, the researcher relies on people's memories and recollections of the past.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 2,
        exp: "<b>3. Statement I is true but Statement II is false</b><br>A cohort shares specific characteristics. Relying on recollections of the past is typical of retrospective studies, whereas a prospective study follows participants forward in time."
    },
    {
        q: "The study of the behavior of humans and non humans in the natural environment without any manipulation of variables is called",
        opts: ["1. Quasi-experimental research", "2. Observational research", "3. Subjective research", "4. Anthropometric research"],
        ans: 1,
        exp: "<b>2. Observational research</b><br>Observational research studies behavior in the natural environment without manipulating variables."
    },
    {
        q: "The exercise of reviewing the relevant literature is most closely related for which one of the following?",
        opts: ["(A) For analyzing quantitative data", "(B) Formulating research problems", "(C) Generalization of the finding", "(D) In drawing a sample for the study"],
        ans: 1,
        exp: "<b>(B) Formulating research problems</b><br>A literature review identifies gaps and helps in formulating the research problem."
    },
    {
        q: "Which among the following methods is commonly used in anthropological research?",
        opts: ["(A) Case study method", "(B) Ethnographic method", "(C) Life history method", "(D) Survey method"],
        ans: 1,
        exp: "<b>(B) Ethnographic method</b><br>Anthropological research commonly uses the ethnographic method, involving immersion in and description of a culture or community."
    }
];