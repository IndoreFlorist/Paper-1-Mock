var rawQuestions = [
    {
        q: "<b>Dec 2018</b><br>A virus hoax is an untrue virus warning email. When you receive hoax such as the one below, what is the appropriate action?",
        opts: ["(A) Forward this email to your friends", "(B) Format your hard disk and re-install all software immediately", "(C) Reply to the sender", "(D) Ignore this mail"],
        ans: 3,
        exp: "<b>(D) Ignore this mail</b><br>An email hoax is a commonly used Internet scam tactic targeted to specified demographics, markets or causes, including charities (such as missing children), Nigerian scams, lottery scams, dating scams, chain letters and fake security warnings. The appropriate action is to ignore such mail."
    },
    {
        q: "<b>JUNE 2019</b><br>A virus type that is capable of transferring from one computer to another without any 'use interaction' is known as",
        opts: ["(A) Worm", "(B) Trojan", "(C) Key logging", "(D) Boot sector virus"],
        ans: 0,
        exp: "<b>(A) Worm</b><br>A worm is a self-replicating program that uses a network to send copies of itself to other nodes, without any user intervention. Unlike a virus, it does not need to attach itself to an existing program. A Trojan disguises itself as legitimate software and does not replicate; a boot sector virus infects the boot record of a hard disk; a keylogger monitors every keystroke typed on a computer."
    },
    {
        q: "<b>JUNE 2019</b><br>What is spyware in respect of computer software?",
        opts: ["(A) Software that aims to gather information about a person without his/her knowledge, and that may send such information to another entity", "(B) Legitimate software that allows companies to monitor and supervise the computers of their employees from a central location", "(C) Software used to disrupt computer operation or gain access to private compute systems", "(D) A computer program hidden within another seemingly harmless program that produces copies of itself and inserts them into another programs or files"],
        ans: 0,
        exp: "<b>(A) Software that aims to gather information about a person without his/her knowledge, and that may send such information to another entity</b><br>Spyware is a type of malware that collects personal information and gathers data about a person without consent."
    },
    {
        q: "<b>DEC 2019</b><br>Given below are two statements — one is labelled as Assertion (A) and other as Reason (R) :<br><br>Assertion (A): Sniffing may be used to steal data or information over a network.<br>Reasons (R): Sniffing is a process of monitoring and capturing all data packets passing through given network.<br><br>In the light of the above stated two statements, choose the correct option from the choices given below:",
        opts: ["(A) Both (A) and (R) are true and (R) is the correct explanation of (A)", "(B) Both (A) and (R) are true and (R) is not the correct explanation of (A)", "(C) (A) is true, but (R) is false", "(D) (A) is false, but (R) is true"],
        ans: 0,
        exp: "<b>(A) Both (A) and (R) are true and (R) is the correct explanation of (A)</b><br>Sniffing is a form of 'tapping phone wires' to learn about a conversation, also called wiretapping applied to computer networks. It is the process of monitoring and capturing all the packets passing through a given network using sniffing tools. Attackers use it to capture data packets containing sensitive information such as passwords and account information."
    },
    {
        q: "<b>NOV 2021</b><br>Which one of the following is a type of malware embedded in a program on a computer that will set off a malicious function when certain conditions are met?",
        opts: ["(A) Logic bomb", "(B) Spyware", "(C) Trojan", "(D) Worm"],
        ans: 0,
        exp: "<b>(A) Logic bomb</b><br>A logic bomb is a piece of code intentionally inserted into a software system that will set off a malicious function when specified conditions are met. Worm: spreads copies of itself from computer to computer without human interaction. Trojan: malware disguised as a legitimate program. Spyware: collects personal information without consent."
    },
    {
        q: "Which type of virus or destructive software could appear to be useful, but will actually cause damage once installed or run by a user?",
        opts: ["(A) Hoax", "(B) Worm", "(C) Trojan Horse", "(D) System Sector"],
        ans: 2,
        exp: "<b>(C) Trojan Horse</b><br>A Trojan horse looks attractive or useful at first glance, but is actually harmful: it does damage once installed or run on the computer, and can serve as a carrier for viruses."
    },
    {
        q: "<b>OCT 2022</b><br>Which Indian Act makes it illegal to knowingly spread a computer virus?",
        opts: ["(A) Data protection and Security Act, 1997", "(B) Information Security Act, 1998", "(C) Information Technology Act, 2000", "(D) Computer Misuse and Cyber Act, 2009"],
        ans: 2,
        exp: "<b>(C) Information Technology Act, 2000</b><br>The IT Act, 2000 was enacted to provide legal recognition for electronic transactions and to protect electronic data from unauthorized access, modification and destruction. Section 43 deals with penalties for damage to computer systems, including provisions for punishing those who spread computer viruses."
    },
    {
        q: "<b>OCT 2022</b><br>Which of the following statements are correct regarding CERT-IN?<br><br>(a) CERT-IN is the national nodal agency for responding to computer security incidents as and when they occur.<br>(b) CERT-IN is operational since January 2014.<br>(c) Forecast and alert of cyber security incidents is one of the functions of CERT-IN.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c)", "(B) (a) and (b) only", "(C) (a) and (c) only", "(D) (b) and (c) only"],
        ans: 2,
        exp: "<b>(C) (a) and (c) only</b><br>CERT-IN (Computer Emergency Response Team - India) is the national nodal agency for responding to computer security incidents as and when they occur. It was established in 2004 and has been operational since 2004, not since January 2014, so statement (b) is wrong."
    },
    {
        q: "Match List I with List II:<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>List I<br>(Technical Term)</b></td><td><b>List II<br>(Description)</b></td></tr><tr><td>(a) Phishing</td><td>(I) The action of illegally installing malicious code which redirects a person to a fraudulent website with the purpose of obtaining that person's bank details</td></tr><tr><td>(b) Pharming</td><td>(II) The action of sending text messages to fraudulently obtain another person's bank details</td></tr><tr><td>(c) Spam</td><td>(III) The action of sending emails to fraudulently obtain another person's bank details</td></tr><tr><td>(d) Smishing</td><td>(IV) Unsolicited bulk emails</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(I), (b)-(III), (c)-(IV), (d)-(II)", "(B) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)", "(C) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)", "(D) (a)-(III), (b)-(I), (c)-(II), (d)-(IV)"],
        ans: 2,
        exp: "<b>(C) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)</b><br>Phishing = fraudulent emails to obtain bank details; Pharming = installing malicious code that redirects a person to a fraudulent website; Spam = unsolicited bulk emails; Smishing = fraudulent text messages (SMS) to obtain bank details."
    },
    {
        q: "Match List I with List II:<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>LIST I<br>(Internet Term)</b></td><td><b>List II<br>(Description)</b></td></tr><tr><td>(a) Spyware</td><td>(I) Malicious software installed on a user's hard drive or a web server: the software re-directs the user to a fake website without their consent or knowledge.</td></tr><tr><td>(b) Phishing</td><td>(II) Websites designed to promote the building of online communities who share the same interest; usually free of charge; users can add friends, post messages to each other and update personal profiles.</td></tr><tr><td>(c) Social networking sites</td><td>(III) Legitimate-looking email sent to a user in the hope of gathering personal information; as soon as the recipient clicks on the link in email (or email attachment) they are sent to a fake website.</td></tr><tr><td>(d) Pharming</td><td>(IV) Software that secretly gathers information by monitoring key presses on a user's keyboard; this information is relayed back to person who sent the software originally.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(I),(b)-(II),(c)-(III),(d)-(IV)", "(B) (a)-(IV),(b)-(II),(c)-(III),(d)-(I)", "(C) (a)-(II),(b)-(IV),(c)-(I),(d)-(III)", "(D) (a)-(IV),(b)-(III),(c)-(II),(d)-(I)"],
        ans: 3,
        exp: "<b>(D) (a)-(IV),(b)-(III),(c)-(II),(d)-(I)</b><br>Spyware secretly gathers information (e.g. key presses) and relays it back; Phishing uses legitimate-looking emails that lead to a fake website; Social networking sites are online communities where users add friends, post messages and update profiles; Pharming redirects users to a fake website using malicious software."
    },
    {
        q: "<b>MARCH 2023</b><br>In the context of Information and Communication Technologies(ICT), which of the following statements is/are true?<br><br>(a) In an email system, Bcc: allows the sender of a message to conceal the recipient entered in the Bcc: field from the other recipients.<br>(b) Phishing is a malicious program installed on a system that stays concealed avoiding detection.<br>(c) Spamming is an attempt to acquire sensitive information for malicious reasons, by masquerading as a trustworthy entity.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (c) only", "(B) (b) only", "(C) (a) only", "(D) (a) and (c) only"],
        ans: 2,
        exp: "<b>(C) (a) only</b><br>(a) is true: Bcc (Blind Carbon Copy) conceals the recipient from the other recipients. (b) is false: phishing is an attempt to steal sensitive information (usernames, passwords, card numbers) by masquerading as a reputable source, not a concealed program. (c) is false: that describes phishing; spamming is sending unsolicited bulk messages."
    },
    {
        q: "<b>OCT 2022</b><br>Given below are two statements:<br><br>Statement (I): 'Spam' is an attempt to acquire sensitive information for malicious reasons, by masquerading as a trustworthy entity.<br>Statement (II): 'Phishing' is a type of unsolicited bulk email of identical messages sent to numerous recipients.<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 1,
        exp: "<b>(B) Both Statement (I) and Statement (II) are false.</b><br>The definitions are swapped. Phishing is the attempt to acquire sensitive information by masquerading as a trustworthy entity, while spam is unsolicited bulk email sent to numerous recipients."
    },
    {
        q: "<b>OCT 2022</b><br>Miss Madhu clicks on a web link received in a message on her phone which promises her a complimentary trip to a destination of her choice. She forwarded this message to her friend, Arun and asked him to do the same. But Arun refuses and tells Madhu that her personal and private information, such as online account names, login information and passwords can be stolen and she should be careful of such",
        opts: ["(A) Phishing", "(B) Spamming", "(C) Scamming", "(D) Plagiarism"],
        ans: 0,
        exp: "<b>(A) Phishing</b><br>Phishing is an attempt to steal sensitive information such as usernames, passwords, credit card numbers and bank account information. By masquerading as a reputable source with an enticing request, the attacker lures the victim, much as a fisherman uses bait to catch a fish."
    },
    {
        q: "<b>NOV 2021</b><br>Match List I with List II<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>List I<br>Security threats</b></td><td><b>List II<br>Meaning</b></td></tr><tr><td>A. Hacking</td><td>I. 'Clog-up' a user's inbox with unwanted emails</td></tr><tr><td>B. Phishing</td><td>II. Gives the originator access to all data entered by the keyboard</td></tr><tr><td>C. Spyware</td><td>III. Identity fraud</td></tr><tr><td>D. Spam</td><td>IV. Illegal use of personal data</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A - I, B - III, C - II, D - IV", "(B) A - II, B - IV, C - III, D - I", "(C) A - IV, B - I, C - III, D - II", "(D) A - IV, B - III, C - II, D - I"],
        ans: 3,
        exp: "<b>(D) A - IV, B - III, C - II, D - I</b><br>Hacking = illegal use of personal data; Phishing = identity fraud; Spyware = gives the originator access to all data entered by the keyboard; Spam = 'clogs up' a user's inbox with unwanted emails."
    },
    {
        q: "<b>JUNE 2023</b><br>Identify the correct order of the words A - D given below to complete the paragraph about interne security. Illegal access to a computer system is known as ___________. ________are programs that self replicate and are designed to disrupt computer systems. ___________ is where a user is sent legitimate looking emails: as soon as the email is opened and the recipient clicks on the embedded link, they are sent to a fake website. Software that monitors key presses on a user's keyboard, and relays the information back to the person who sent the software, is known as ____________.<br><br>(a) Phishing<br>(b) Hacking<br>(c) Spyware<br>(d) Viruses",
        opts: ["(A) (a), (d), (b), (c)", "(B) (b), (a), (d), (c)", "(C) (b), (d), (a), (c)", "(D) (c), (d), (a), (b)"],
        ans: 2,
        exp: "<b>(C) (b), (d), (a), (c)</b><br>Illegal access to a computer system is Hacking (b). Viruses (d) are programs that self-replicate and disrupt computer systems. Phishing (a) uses legitimate-looking emails whose links lead to a fake website. Spyware (c) monitors key presses and relays the information back to the sender."
    }
];