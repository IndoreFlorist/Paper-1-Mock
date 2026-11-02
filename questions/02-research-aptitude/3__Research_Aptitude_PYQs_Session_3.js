var rawQuestions = [
    {
        q: "In a thesis, figures and tables are included in",
        opts: ["(A) the appendix", "(B) a separate chapter", "(C) the concluding chapter", "(D) the text itself"],
        ans: 3,
        exp: "<b>(D) the text itself</b><br>"
    },
    {
        q: "A thesis statement is",
        opts: ["(A) an observation.", "(B) a fact", "(C) an assertion", "(D) a discussion"],
        ans: 2,
        exp: "<b>(C) an assertion</b><br>A thesis statement is an assertion, takes a stand, answers a specific question and is debatable."
    },
    {
        q: "The research approach of Max Weber to understand how people create meanings in natural settings is identified as",
        opts: ["(A) positive paradigm", "(B) critical paradigm", "(C) natural paradigm", "(D) interpretative paradigm"],
        ans: 3,
        exp: "<b>(D) interpretative paradigm</b><br>The interpretive paradigm is focused on the study of social phenomena from the perspective of those who are involved in them. Max Weber was a leading proponent of interpretivism. He said that social behavior should be studied in interpretive methods focusing on understanding the purpose and meaning that people attach to their own acts.<br><br>Interpretivism: reality is subjective, constructed and interpreted by individuals based on their experiences (Subjectivity); social science aims to understand social phenomena from the perspective of the individual, not to predict or control it (Understanding / Verstehen). Methods: participant observation, interviews, hermeneutics, ethnography, document analysis, phenomenology, narrative analysis."
    },
    {
        q: "Which one of the following is a non-probability sampling?",
        opts: ["(A) Simple random", "(B) Purposive", "(C) Systematic", "(D) Stratified"],
        ans: 1,
        exp: "<b>(B) Purposive</b><br>Types of non-probability sampling: convenience, consecutive, judgmental or purposive, quota and snowball sampling. Simple random, systematic and stratified sampling are probability sampling methods."
    },
    {
        q: "The research stream of immediate application is",
        opts: ["(A) Conceptual research", "(B) Action research", "(C) Fundamental research", "(D) Empirical research"],
        ans: 1,
        exp: "<b>(B) Action research</b><br>Its primary aim is to solve an immediate problem. It is cyclic in nature.<br>It is a form of interpretive research to study human actions and social practices with the participation of the researcher.<br>It is applied research, which is focused on immediate application, not to develop any theory for general applications.<br>It refers to the application of research to educational problems in a particular classroom setting."
    },
    {
        q: "The core elements of dissertation are",
        opts: ["(A) Introduction; Data Collection; Data Analysis; Conclusions and Recommendations", "(B) Executive Summary; Literature review; Data gathered; Conclusions; Bibliography", "(C) Research Plan; Research Data; Analysis; References", "(D) Introduction; Literature Review; Research Methodology; Results; Discussion and Conclusion"],
        ans: 3,
        exp: "<b>(D) Introduction; Literature Review; Research Methodology; Results; Discussion and Conclusion</b><br>"
    },
    {
        q: "What is a Research Design?",
        opts: ["(A) A way of conducting research that is not grounded in theory.", "(B) The choice between using qualitative or quantitative methods.", "(C) The style in which you present your research findings e.g. a graph.", "(D) A framework for every stage of the collection and analysis of data."],
        ans: 3,
        exp: "<b>(D) A framework for every stage of the collection and analysis of data.</b><br>"
    },
    {
        q: "\"Sampling Cases\" means",
        opts: ["(A) Sampling using a sampling frame", "(B) Identifying people who are suitable for research", "(C) Literally the researcher's brief case", "(D) Sampling of people, newspapers, television programmes etc."],
        ans: 3,
        exp: "<b>(D) Sampling of people, newspapers, television programmes etc.</b><br>Sampling case is identifying people who are suitable for research."
    },
    {
        q: "The frequency distribution of a research data which is symmetrical in shape similar to a normal distribution but center peak is much higher, is",
        opts: ["(A) Skewed", "(B) Mesokurtic", "(C) Leptokurtic", "(D) Platykurtic"],
        ans: 2,
        exp: "<b>(C) Leptokurtic</b><br>Frequency distribution, in statistics, is a graph or data set organized to show the frequency of occurrence of each possible outcome of a repeatable event observed many times.<br><br><b>Normal Distribution:</b> Also known as a Gaussian distribution or \"bell curve\", it is the most common frequency distribution. It is symmetrical, with most values falling towards the center and long tails to the left and right. It is a continuous distribution, with no gaps between values.<br><br><b>Skewed Distribution:</b> When a normal curve slopes to the left or right, it is known as a skewed distribution. The location of the long tail (not the peak) gives it its name. A long tail on the right is right-skewed or positively skewed; a long tail on the left is left-skewed or negatively skewed.<br><br><b>Kurtosis:</b> A statistical measure used to describe the degree to which scores cluster in the tails or the peak of a frequency distribution. There are three types:<br><b>Mesokurtic:</b> moderate in breadth, with a medium peaked height.<br><b>Leptokurtic:</b> more values in the distribution tails and more values close to the mean (sharply peaked with heavy tails).<br><b>Platykurtic:</b> fewer values in the tails and fewer values close to the mean (flat peak, more dispersed scores with lighter tails)."
    },
    {
        q: "When planning to do social research, it is better to",
        opts: ["(A) Approach the topic with an open mind", "(B) Do a pilot study before getting stuck into it", "(C) Be familiar with literature on the topic", "(D) Forget about theory because this is a very practical"],
        ans: 0,
        exp: "<b>(A) Approach the topic with an open mind</b><br>Social Research is a method used by social scientists and researchers to learn about people and societies so that they can design products/services that cater to various needs of the people. Different socio-economic groups belonging to different parts of a country think differently."
    },
    {
        q: "When academicians are called to deliver lecture or presentations to an audience on certain topics or a set of topics of educational nature, it is called",
        opts: ["(A) Training Program", "(B) Seminar", "(C) Workshop", "(D) Symposium"],
        ans: 1,
        exp: "<b>(B) Seminar</b><br>A seminar is a form of academic instruction, either at an academic institution or organized by a professional organization."
    },
    {
        q: "Which of the following steps are required to design a questionnaire?<br><br>(a) Writing primary and secondary aims of the study.<br>(b) Review of the current literature.<br>(c) Prepare a draft of questionnaire.<br>(d) Revision of the draft.<br><br>Select the correct answer from the codes given below:",
        opts: ["(A) (a), (b), (c) and (d)", "(B) (a), (b) and (c)", "(C) (a), (c) and (d)", "(D) (b), (c) and (d)"],
        ans: 0,
        exp: "<b>(A) (a), (b), (c) and (d)</b><br>A questionnaire is a research tool that is used to collect data from individuals. It typically consists of a set of questions designed to elicit specific information from respondents. When preparing a questionnaire, several factors should be considered to ensure that the data collected is reliable and valid.<br>&bull; <b>The purpose of research:</b> The questions should align with the research objectives and provide relevant information.<br>&bull; <b>Brevity of questions:</b> The questions should be clear, concise and easy to understand. Long and complex questions can confuse respondents and lead to inaccurate responses.<br>&bull; <b>Avoidance of leading questions:</b> Leading questions suggest a particular answer or bias the respondent towards a particular response; avoiding them keeps the data unbiased."
    },
    {
        q: "The conclusions/findings of which type of research cannot be generalized to other situations?",
        opts: ["(A) Causal Comparative Research", "(B) Historical Research", "(C) Descriptive Research", "(D) Experimental Research"],
        ans: 1,
        exp: "<b>(B) Historical Research</b><br>&bull; Historical research is a study and analysis of past events to predict the future.<br>&bull; It involves the systematic collection and objective evaluation of data related to past events.<br>&bull; It is a process of reconstructing the past.<br>&bull; It constitutes a narrative account of the past events written on the basis of interpretation of those events, to recapture personalities, ideas, and environment of those times that shaped the events."
    },
    {
        q: "A good thesis writing should involve:<br><br>(a) Reduction of punctuation and grammatical errors to a minimum.<br>(b) Careful checking of references.<br>(c) Consistency in the way the thesis is written.<br>(d) A clear and well written abstract.<br><br>Select the correct answer from the codes given below:",
        opts: ["(A) (b), (c) and (d)", "(B) (a), (b), (c) and (d)", "(C) (a), (b) and (c)", "(D) (a), (b) and (d)"],
        ans: 1,
        exp: "<b>(B) (a), (b), (c) and (d)</b><br>"
    },
    {
        q: "Which of the following statements regarding the meaning of research are correct?<br><br>(a) Research refers to a series of systematic activity or activities undertaken to find out the solution of a problem.<br>(b) It is a systematic, logical and an unbiased process wherein verification of hypothesis, data analysis, interpretation and formation of principles can be done.<br>(c) It is an intellectual enquiry or quest towards truth.<br>(d) It leads to enhancement of knowledge.<br><br>Select the correct answer from the codes given below:",
        opts: ["(A) (a), (b), (c) and (d)", "(B) (a), (b) and (c)", "(C) (b), (c) and (d)", "(D) (a), (c) and (d)"],
        ans: 0,
        exp: "<b>(A) (a), (b), (c) and (d)</b><br>According to all these definitions of research, we can broadly sum up that research is:<br>&bull; An intellectual activity of a high order<br>&bull; An investigation of a phenomenon, event or activity<br>&bull; Aims to discover data and facts and their interpretations<br>&bull; To arrive at conclusions to formulate new theories and laws or revise the already established theories and laws<br>&bull; To communicate the results for peer review<br>&bull; To be accepted or rejected before adding this new knowledge to the already existing general pool of knowledge<br>&bull; An organized inquiry to explain the unexplained phenomenon<br>&bull; To correct the misconceived facts."
    },
    {
        q: "Jean Piaget gave a theory of cognitive development of humans on the basis of his:",
        opts: ["(A) Evaluation Research", "(B) Fundamental Research", "(C) Applied Research", "(D) Action Research"],
        ans: 1,
        exp: "<b>(B) Fundamental Research</b><br>"
    },
    {
        q: "\"Male and female students perform equally well in a numerical aptitude test.\" This statement indicates a:",
        opts: ["(A) Statistical hypothesis", "(B) Research hypothesis", "(C) Null hypothesis", "(D) Directional hypothesis"],
        ans: 2,
        exp: "<b>(C) Null hypothesis</b><br>"
    },
    {
        q: "Which of the following statements is not true in the context of participatory research?",
        opts: ["(A) It recognizes knowledge as power.", "(B) It emphasises on people as experts.", "(C) It is a collective process of enquiry.", "(D) Its sole purpose is production of knowledge."],
        ans: 3,
        exp: "<b>(D) Its sole purpose is production of knowledge.</b><br>&bull; Participatory research integrates scientific investigation with education and political action.<br>&bull; Researchers work with members of a community to understand and resolve community problems, to empower community members, and to democratize research.<br>&bull; The methods of participatory research include group discussions of personal experience, interviews, surveys, and analysis of public documents.<br>&bull; Topics that have been investigated with this approach include community issues such as polluted water supplies and the school curriculum, employment issues such as working conditions and unionization, and theoretical issues about consent and resistance to domination."
    },
    {
        q: "Which of the following statements is true in the context of the testing of a hypothesis?",
        opts: ["(A) It is only the alternative hypothesis that can be tested.", "(B) It is only the null hypothesis that can be tested.", "(C) Both, the alternative and the null hypotheses can be tested.", "(D) Both, the alternative and the null hypotheses cannot be tested."],
        ans: 1,
        exp: "<b>(B) It is only the null hypothesis that can be tested.</b><br>The statement being tested in a test of statistical significance is called the null hypothesis. The test of significance is designed to assess the strength of the evidence against the null hypothesis, or a statement of 'no effect' or 'no difference'. It is often symbolized as H0."
    },
    {
        q: "Which of the following are the basic rules of APA style of referencing format?<br><br>(a) Italicize titles of shorter works such as journal articles or essays<br>(b) Invert authors' names (last name first)<br>(c) Italicize titles of longer works such as books and journals<br>(d) Alphabetically index reference list<br><br>Select the correct answer from the codes given below:",
        opts: ["(A) (a) and (b)", "(B) (b), (c) and (d)", "(C) (c) and (d)", "(D) (a), (b), (c) and (d)"],
        ans: 1,
        exp: "<b>(B) (b), (c) and (d)</b><br>"
    },
    {
        q: "Which of the following are the characteristics of a seminar?<br><br>(a) It is a form of academic instruction.<br>(b) It involves questioning, discussion and debates.<br>(c) It involves large groups of individuals.<br>(d) It needs involvement of skilled persons.<br><br>Select the correct answer from the codes given below",
        opts: ["(A) (b) and (c)", "(B) (b) and (d)", "(C) (b), (c) and (d)", "(D) (a), (b) and (d)"],
        ans: 3,
        exp: "<b>(D) (a), (b) and (d)</b><br>Seminar can be a part of academic instructions, questioning or debates. It also involves skilled persons but never includes large group of individuals."
    },
    {
        q: "A researcher is interested in studying the prospects of a particular political party in an urban area. What tool should he prefer for the study?",
        opts: ["(A) Rating scale", "(B) Interview", "(C) Questionnaire", "(D) Schedule"],
        ans: 2,
        exp: "<b>(C) Questionnaire</b><br>A questionnaire is similar to a form where a number of questions are given and the person is supposed to answer them. When the person answers all the questions, it becomes easier to ascertain his thinking. Thus a questionnaire will be the best way to study the prospects of a political party."
    },
    {
        q: "Ethical norms in research do not involve guidelines for:",
        opts: ["(A) Thesis format", "(B) Copyright", "(C) Patenting policy", "(D) Data sharing policies"],
        ans: 0,
        exp: "<b>(A) Thesis format</b><br>"
    },
    {
        q: "Which of the following steps are required to design a questionnaire?<br><br>(a) Writing primary and secondary aims of the study.<br>(b) Review of the current literature.<br>(c) Prepare a draft of questionnaire.<br>(d) Revision of the draft.<br><br>Select the correct answer from the codes given below:",
        opts: ["(A) (a), (b), (c) and (d)", "(B) (a), (b) and (c)", "(C) (a), (c) and (d)", "(D) (b), (c) and (d)"],
        ans: 0,
        exp: "<b>(A) (a), (b), (c) and (d)</b><br>A questionnaire is a research tool that is used to collect data from individuals. It typically consists of a set of questions designed to elicit specific information from respondents. When preparing a questionnaire, several factors should be considered to ensure that the data collected is reliable and valid.<br>&bull; <b>The purpose of research:</b> The questions should align with the research objectives and provide relevant information.<br>&bull; <b>Brevity of questions:</b> The questions should be clear, concise and easy to understand. Long and complex questions can confuse respondents and lead to inaccurate responses.<br>&bull; <b>Avoidance of leading questions:</b> Leading questions suggest a particular answer or bias the respondent towards a particular response; avoiding them keeps the data unbiased."
    },
    {
        q: "From the following list of statement identify the set, which has negative implications for 'research ethics':<br><br>i. A researcher critically looks at the findings of another research.<br>ii. Related studies are cited without proper references.<br>iii. Research findings are made the basis for policymaking.<br>iv. Conduct of practitioner is screened in terms of reported research evidences.<br>v. A research study is replicated with a view to verify the evidences from other researches.<br>vi. Both policy making and policy implementing processes are regulated in terms of preliminary studies.",
        opts: ["(A) i, ii and iii", "(B) ii, iii and iv", "(C) ii, iv and vi", "(D) i, iii and v"],
        ans: 2,
        exp: "<b>(C) ii, iv and vi</b><br>"
    },
    {
        q: "In research on the effect of child-rearing practices on stress-proneness of children in competing school projects, the hypothesis formulated is that 'child rearing practices do influence stress-proneness'. At the data-analysis stage a null hypothesis is advanced to find out the tenability of research hypothesis. On the basis of the evidence available, the null hypothesis is rejected at 0.01 level of significance. What decision may be warranted in respect of the research hypothesis?",
        opts: ["(A) The research hypothesis will also be rejected.", "(B) The research hypothesis will be accepted.", "(C) Both the research hypothesis and the null hypothesis will be rejected.", "(D) No decision can be taken in respect of the research hypothesis."],
        ans: 1,
        exp: "<b>(B) The research hypothesis will be accepted.</b><br>"
    },
    {
        q: "A research intends to explore the effect of possible factors for the organization of effective mid-day meal interventions. Which research method will be most appropriate for this study?",
        opts: ["(A) Historical method", "(B) Descriptive survey method", "(C) Experimental method", "(D) Ex-post facto method"],
        ans: 3,
        exp: "<b>(D) Ex-post facto method</b><br>&bull; Mainly in the ex-post facto method, the existing groups with qualities are compared on some dependent variable.<br>&bull; The research has a control or a comparison group.<br>&bull; The behaviour, action, event or the treatment or the independent variable of the research cannot be manipulated or changed.<br>&bull; The research focuses on the effects.<br>&bull; The research tries to analyse the 'how' and 'what' aspect of an event.<br>&bull; Explores possible effects and causes."
    },
    {
        q: "Which of following is an initial mandatory requirement for pursuing research?",
        opts: ["(A) Developing a research design", "(B) Formulating a research question", "(C) Deciding about the data analysis procedure", "(D) Formulating a research hypothesis"],
        ans: 1,
        exp: "<b>(B) Formulating a research question</b><br>"
    },
    {
        q: "The format of thesis writing is the same as in",
        opts: ["(A) Preparation of a research paper/article", "(B) Writing of seminar presentation", "(C) A research dissertation", "(D) Presenting a workshop/conference paper"],
        ans: 2,
        exp: "<b>(C) A research dissertation</b><br><b>Thesis / Dissertation:</b><br>&bull; A detailed document presenting the author's research and findings on a particular topic of choice, submitted at the end of an academic degree.<br>&bull; A dissertation leads up to degrees such as MSc/MPhil etc. and a thesis leads to a doctoral degree.<br>&bull; In the dissertation, already collected information is used to prepare it, whereas in the thesis, a researcher has to conduct research by himself.<br>&bull; The structure or format of a dissertation or thesis writing is prescribed by the university to the students."
    },
    {
        q: "In a Ph.D. thesis which one is the correct sequence for showing scheme of Chapterisation?",
        opts: ["(A) Survey of related studies, Introduction, Design of the study, Data-Analysis and interpretation, conclusions and generalisations, suggested further study, References, Appendix", "(B) Introduction, Design of study, Data Analysis and Interpretation, Generalizations, Conclusions and Survey of related studies and suggestions for further research, References and Appendix", "(C) Introduction, Survey of related studies, Design of study, Data-presentation; analysis & Interpretation, Formulation of generalization & Conclusions, Suggestions for further research, References & Appendix", "(D) Survey of related studies, References, Introduction, Design of study, Data analysis and interpretation, Conclusions and generalizations, Suggestions for further research, Appendix"],
        ans: 2,
        exp: "<b>(C) Introduction, Survey of related studies, Design of study, Data-presentation; analysis & Interpretation, Formulation of generalization & Conclusions, Suggestions for further research, References & Appendix</b><br>"
    },
    {
        q: "Which of the following is not the critical feature of qualitative research?",
        opts: ["(A) Actual settings are the direct source of data.", "(B) Data take the forms of words or pictures.", "(C) Seeking to establish relationships among measured social facts.", "(D) Researcher becomes immersed in the situation, present or past related to the phenomena."],
        ans: 2,
        exp: "<b>(C) Seeking to establish relationships among measured social facts.</b><br>&bull; Qualitative research involves collecting and analyzing non-numerical data (e.g., text, video, or audio) to understand concepts, opinions, or experiences.<br>&bull; It can be used to gather in-depth insights into a problem or generate new ideas for research.<br>&bull; It relies on data obtained by the researcher from first-hand observation, interviews, questionnaires, focus groups, participant-observation, recordings made in natural settings, documents, and artefacts.<br>&bull; Qualitative methods include ethnography, grounded theory, discourse analysis, and interpretative phenomenological analysis.<br>&bull; The data sources include in-depth interviews, focus groups, standardized interviews, and artefacts such as books or works of art.<br>&bull; The case study method exemplifies qualitative researchers' preference for depth, detail, and context.<br>&bull; It is concerned with understanding human behaviour from the informant's perspective. It is focused on the development of hypotheses and theories."
    },
    {
        q: "A detailed description of methodology of research is required in",
        opts: ["(A) Thesis/Dissertation", "(B) Symposium/Workshop", "(C) Seminar paper/Articles", "(D) Conference and Seminar Papers"],
        ans: 0,
        exp: "<b>(A) Thesis/Dissertation</b><br>A research methodology describes the techniques and procedures used to identify and analyze information regarding a specific research topic. It is a process by which researchers design their study so that they can achieve their objectives using the selected research instruments."
    },
    {
        q: "Research ethics has a direct connection more often with which stages of research?",
        opts: ["(A) Defining and delimiting the scope of research.", "(B) Problem formulation and reporting of research findings.", "(C) Defining the population and deciding the sampling technique for research.", "(D) Deciding about statistical techniques and data analysis."],
        ans: 1,
        exp: "<b>(B) Problem formulation and reporting of research findings.</b><br>&bull; While performing data analysis and interpretation, information collected by researchers personally may be damaging to either individuals or a community if disclosed to a third party for their own benefit.<br>&bull; Collecting data by unfair means or fake data collection and drawing inferences from it is ethically wrong.<br>&bull; To be accurately presented in the research records, change or omission of data and manipulation of research processes should be avoided."
    },
    {
        q: "There are two sets given below, Set-I consists of methods of research and Set-II indicates their procedural characteristics. Match the two sets and choose your answer from the codes given below:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Set-I (Research Method)</b></td><td><b>Set-II (Procedural Characteristics)</b></td></tr><tr><td>a. Experimental Method</td><td>i. Interventions to ameliorate a given situation.</td></tr><tr><td>b. Expost facto method</td><td>ii. Explaining patterns of behaviour in terms of meanings and their representations which people share.</td></tr><tr><td>c. Descriptive Method</td><td>iii. Manipulating an independent variable in controlled conditions and measuring its effect on dependent variable.</td></tr><tr><td>d. Symbolic Interactionism</td><td>iv. Depending on primary and secondary sources of data.</td></tr><tr><td>e. Action Research</td><td>v. Obtaining information concerning the current status of phenomena.</td></tr><tr><td></td><td>vi. Observing the effect on dependent variable and making probes into factors/variables which explain it.</td></tr><tr><td></td><td>vii. Exegetic analysis.</td></tr></table><br>Codes (a b c d e):",
        opts: ["(A) i iii iv v vii", "(B) iii iv v vi vii", "(C) i ii iii iv v", "(D) iii vi v ii i"],
        ans: 3,
        exp: "<b>(D) iii vi v ii i</b><br>"
    },
    {
        q: "In finalizing a thesis writing format which of the following would form part of supplementary pages?<br><br>(1) Table of contents<br>(2) Conclusions of the study<br>(3) Bibliography and Appendices<br>(4) List of tables and figures",
        opts: ["(1) Table of contents", "(2) Conclusions of the study", "(3) Bibliography and Appendices", "(4) List of tables and figures"],
        ans: 2,
        exp: "<b>(3) Bibliography and Appendices</b><br>"
    },
    {
        q: "Which of the following research types focuses on ameliorating the prevailing situations?",
        opts: ["(1) Applied Research", "(2) Action Research", "(3) Experimental Research", "(4) Fundamental Research"],
        ans: 1,
        exp: "<b>(2) Action Research</b><br>&bull; Action research is similar to applied research, but the only difference is that applied research is carried out on a larger sample resulting in more universally applicable findings, whereas action research is conducted on the immediately available small sample to solve the immediate problem for the same group.<br>&bull; It refers to an extensive range of evaluative, investigative and analytical methods of research designed to diagnose the problems in educational institutes and help teachers gain practical implementation of solutions and work more efficiently.<br>&bull; It is undertaken by educational practitioners or teachers to make better decisions and engage in better teaching practices and enhancing teaching competencies.<br>&bull; A teacher conducts action research to improve his/her own teaching. Similarly, a school administrator conducts action research to improve his administrative behaviour.<br>&bull; Many educational practitioners see in action research one of the most promising avenues for teacher growth, professional improvement and the development of a better system of education."
    },
    {
        q: "A researcher attempts to evaluate the effect of method of feeding on anxiety-proneness children. Which method of research would be appropriate for this?",
        opts: ["(1) Experimental method", "(2) Ex-post-facto method", "(3) Survey method", "(4) Case study method"],
        ans: 1,
        exp: "<b>(2) Ex-post-facto method</b><br>&bull; Ex post facto study or after-the-fact research is a category of research design in which the investigation starts after the fact has occurred without interference from the researcher.<br>&bull; The researcher predicts the possible causes behind an effect that has already occurred.<br>&bull; For example, if a child is delinquent (that is, one who indulges in criminal activities), then in order to find the basic reason behind such delinquency, the researcher would try to find out the various events that have occurred and the many possibilities that could have contributed to the concerned delinquent behavior.<br>&bull; The expected possibilities may be a lack of discipline at school/family history/peer effect/neighborhood or socialization.<br>&bull; Ex-post-facto research can be defined as an empirically based investigation that does not involve the researchers' direct control over the independent variables because they have already led to effects which can no more be manipulated.<br>&bull; The conclusions regarding the relationship between the variables are inferred without intervening or varying the independent or dependent variable."
    },
    {
        q: "Which of the following is susceptible to the issue of research ethics?",
        opts: ["(1) Faulty research design", "(2) Choice of sampling technique", "(3) Reporting of research findings", "(4) Inaccurate application of statistical techniques"],
        ans: 2,
        exp: "<b>(3) Reporting of research findings</b><br>Reporting of research findings is susceptible to the issue of research ethics. The principles which govern the way in which a research involving interaction between the researcher and other humans is designed, managed and conducted are known as research ethics."
    },
    {
        q: "In which of the following arrangements a wider spectrum of ideas and issues may be made possible?",
        opts: ["(1) Workshop mode", "(2) Conference", "(3) Symposium", "(4) Research Article"],
        ans: 1,
        exp: "<b>(2) Conference</b><br>A conference is a formal meeting of people with shared interests, involving discussion, problem-solving and consultation. It can focus on more general topics and can last for several days."
    },
    {
        q: "Among the following, identify the continuous type of data:",
        opts: ["(1) Number of languages a person speaks", "(2) Number of children in a household", "(3) Population of cities", "(4) Weight of students in a class"],
        ans: 3,
        exp: "<b>(4) Weight of students in a class</b><br>Discrete data is a count that involves only integers; the discrete values cannot be subdivided into parts (e.g., number of children in a class, number of workers in a company). Continuous data can be meaningfully divided into finer levels and can be measured on a scale or continuum (e.g., height of children, weight, the amount of time required to complete a project, the square footage of a two-bedroom house, the speed of cars)."
    },
    {
        q: "In doing action research what is the usual sequence of steps?",
        opts: ["(1) Reflect, observe, plan, act", "(2) Plan, act, observe, reflect", "(3) Plan, reflect, observe, act", "(4) Act, observe, plan, reflect"],
        ans: 1,
        exp: "<b>(2) Plan, act, observe, reflect</b><br>"
    },
    {
        q: "Which sequence of research steps is logical in the list given below?",
        opts: ["(1) Problem formulation, Analysis, Development of Research design, Hypothesis making, Collection of data, Arriving at generalizations and conclusions.", "(2) Development of Research design, Hypothesis making, Problem formulation, Data analysis, Arriving at conclusions and data collection.", "(3) Problem formulation, Hypothesis making, Development of a Research design, Collection of data, Data analysis and formulation of generalizations and conclusions.", "(4) Problem formulation, Deciding about the sample and data collection tools, Formulation of hypothesis, Collection and interpretation of research evidence."],
        ans: 2,
        exp: "<b>(3) Problem formulation, Hypothesis making, Development of a Research design, Collection of data, Data analysis and formulation of generalizations and conclusions.</b><br>"
    },
    {
        q: "Below are given two sets research methods (Set-I) and data collection tools (Set-II). Match the two sets and indicate your answer by selecting the correct code:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>Set I (Research Methods)</b></td><td><b>Set II (Data Collection Tools)</b></td></tr><tr><td>a. Experimental method</td><td>i. Using primary and secondary sources</td></tr><tr><td>b. Ex post-facto method</td><td>ii. Questionnaire</td></tr><tr><td>c. Descriptive survey method</td><td>iii. Standardized tests</td></tr><tr><td>d. Historical method</td><td>iv. Typical characteristic tests</td></tr></table><br>Codes (a b c d):",
        opts: ["(1) ii i iii iv", "(2) iii iv ii i", "(3) ii iii i iv", "(4) ii iv iii i"],
        ans: 1,
        exp: "<b>(2) iii iv ii i</b><br>"
    },
    {
        q: "The issue of 'research ethics' may be considered pertinent at which stage of research?",
        opts: ["(1) At the stage of problem formulation and its definition", "(2) At the stage of defining the population of research", "(3) At the stage of data collection and interpretation", "(4) At the stage of reporting the findings."],
        ans: 2,
        exp: "<b>(3) At the stage of data collection and interpretation</b><br>"
    }
];