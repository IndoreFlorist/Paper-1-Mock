var rawQuestions = [
    {
        q: "<b>[03-01-2025 First Shift]</b><br>What is the correct sequence, from minimum to maximum flux of following components of electromagnetic radiation in solar radiation reaching earth?<br><br>(a) Infra red rays<br>(b) Visible rays<br>(c) Gamma rays<br>(d) Ultraviolet rays<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (c), (d), (b), (a)", "(B) (d), (c), (b), (a)", "(C) (d), (c), (a), (b)", "(D) (c), (d), (a), (b)"],
        ans: 0,
        exp: "<b>(A) (c), (d), (b), (a)</b><br>Solar radiation that reaches Earth contains different types of electromagnetic waves, and their flux is not the same:<br>Gamma rays (c) – very tiny fraction, almost blocked by atmosphere.<br>Ultraviolet rays (d) – small amount reaches Earth (most filtered by ozone).<br>Visible rays (b) – larger portion, about 40–45% of incoming radiation.<br>Infrared rays (a) – largest portion, around 50% of solar energy.<br>Increasing order of flux: Gamma &lt; Ultraviolet &lt; Visible &lt; Infrared."
    },
    {
        q: "<b>[03-01-2025 First Shift]</b><br>Radha tries different ways to explore the alternative methods of getting the average value of the numbers as indicated in the worksheet below:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td>1</td><td>12</td><td></td><td></td><td></td></tr><tr><td>2</td><td></td><td>5</td><td></td><td></td></tr><tr><td>3</td><td></td><td></td><td>10</td><td></td></tr><tr><td>4</td><td></td><td></td><td></td><td></td></tr></table><br>Which of the following formulae A – E when entered in cell A4, would give an incorrect result?<br><br>(a) AVERAGE (A1 – C3)<br>(b) AVERAGE (A1 : C3)<br>(c) SUM (A1 : C3)÷3<br>(d) SUM (A1 : C3)÷9<br>(e) SUM (A1, B2, C3)÷3<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (c) Only", "(B) (a) and (d) Only", "(C) (c) and (e) Only", "(D) (a), (b) and (d) Only"],
        ans: 1,
        exp: "<b>(B) (a) and (d) Only</b><br>The three numbers are 12, 5 and 10 (sum 27, average 9).<br>(a) A1 – C3 is a subtraction (A1 minus C3), not a range → incorrect.<br>(b) AVERAGE(A1:C3) ignores blank cells → 27/3 = 9 → correct.<br>(c) SUM(A1:C3)÷3 = 27/3 = 9 → correct.<br>(d) SUM(A1:C3)÷9 = 27/9 = 3 → incorrect.<br>(e) SUM(A1, B2, C3)÷3 = 27/3 = 9 → correct."
    },
    {
        q: "<b>[03-01-2025 First Shift]</b><br>Match LIST-I with LIST-II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST – I (Description)</th><th>LIST – II (ICT Term)</th></tr><tr><td>(a) Name of an operating system</td><td>(I) WWW</td></tr><tr><td>(b) Name of a CPU manufacturer</td><td>(II) CPU</td></tr><tr><td>(c) Links web pages</td><td>(III) Android</td></tr><tr><td>(d) Brain of Computer</td><td>(IV) Intel</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(IV), (c)-(II), (d)-(I)", "(B) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)", "(C) (a)-(I), (b)-(III), (c)-(II), (d)-(IV)", "(D) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)"],
        ans: 3,
        exp: "<b>(D) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)</b><br>"
    },
    {
        q: "<b>[03-01-2025 First Shift]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then identify the correct descending order of the following numbers A-D when converted to decimal number system.<br><br>(a) (10110.11)<sub>2</sub><br>(b) (110.2)<sub>4</sub><br>(c) (32.5)<sub>8</sub><br>(d) (14.6)<sub>16</sub><br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (c), (a), (b), (d)", "(B) (c), (b), (d), (a)", "(C) (a), (c), (d), (b)", "(D) (b), (c), (a), (d)"],
        ans: 0,
        exp: "<b>(A) (c), (a), (b), (d)</b><br>(a) (10110.11)₂ = 22.75<br>(b) (110.2)₄ = 16 + 4 + 0 + 0.5 = 20.5<br>(c) (32.5)₈ = 24 + 2 + 0.625 = 26.625<br>(d) (14.6)₁₆ = 16 + 4 + 0.375 = 20.375<br>Descending: 26.625 (c) &gt; 22.75 (a) &gt; 20.5 (b) &gt; 20.375 (d)."
    },
    {
        q: "<b>[03-01-2025 First Shift]</b><br>The measurement for screen resolution for a Laptop is 1280 × 1024. Which of the following is the unit used to measure screen resolution?",
        opts: ["(A) Inch", "(B) Mbps", "(C) Pixel", "(D) Hertz"],
        ans: 2,
        exp: "<b>(C) Pixel</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Option</th><th>Meaning</th><th>Relevance</th></tr><tr><td>(A) Inch</td><td>Unit of physical screen size (diagonal length of display)</td><td>Not used for resolution</td></tr><tr><td>(B) Mbps</td><td>Megabits per second, unit of data transfer / internet speed</td><td>Not related to screen resolution</td></tr><tr><td>(C) Pixel</td><td>Tiny dots that make up the screen image; resolution measures number of pixels</td><td>Correct unit for screen resolution</td></tr><tr><td>(D) Hertz</td><td>Unit of frequency; measures refresh rate</td><td>Not used for resolution</td></tr></table>"
    },
    {
        q: "<b>[03-01-2025 Second Shift]</b><br>Jatin's smartphone has a SIM card installed but Amit's Tablet is without a SIM card. Amit would like to access the internet using Jatin's smartphone network connection. Which of the following could be used to connect the tablet device to the internet?",
        opts: ["(A) GPS", "(B) Notifications", "(C) Tethering", "(D) Messaging"],
        ans: 2,
        exp: "<b>(C) Tethering</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Option</th><th>Meaning</th><th>Relevant?</th></tr><tr><td>GPS</td><td>Location-tracking system</td><td>Not for internet</td></tr><tr><td>Notifications</td><td>Alerts/messages shown on device</td><td>Not for internet</td></tr><tr><td>Tethering</td><td>Sharing mobile data connection with other devices</td><td>Used to access internet</td></tr><tr><td>Messaging</td><td>SMS or chat services</td><td>Not for internet access</td></tr></table>"
    },
    {
        q: "<b>[03-01-2025 Second Shift]</b><br>World Wide Web (WWW) can be best described as",
        opts: ["(A) an another name for the Internet", "(B) a network of computers accessible by people living in a wide geographical area.", "(C) a system of interlinked hypertext documents accessed through the Internet.", "(D) A company's private digital workspace."],
        ans: 2,
        exp: "<b>(C) a system of interlinked hypertext documents accessed through the Internet.</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Option</th><th>Explanation</th></tr><tr><td>(A) Another name for the Internet</td><td>Incorrect — WWW is a service that runs on the Internet, not the Internet itself</td></tr><tr><td>(B) A wide area network</td><td>Incorrect — this describes WAN, not WWW</td></tr><tr><td>(C) Interlinked hypertext documents accessed via Internet</td><td>Correct definition of WWW</td></tr><tr><td>(D) Company's private digital workspace</td><td>Incorrect — refers to an intranet</td></tr></table>"
    },
    {
        q: "<b>[03-01-2025 Second Shift]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then identify the correct ascending order of the following numbers A-D when converted to decimal number system.<br><br>(a) (11001.11)<sub>2</sub><br>(b) (123.2)<sub>4</sub><br>(c) (31.5)<sub>8</sub><br>(d) (19.6)<sub>16</sub><br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (d), (a), (c), (b)", "(B) (b), (c), (d), (a)", "(C) (c), (d), (a), (b)", "(D) (d), (c), (a), (b)"],
        ans: 3,
        exp: "<b>(D) (d), (c), (a), (b)</b><br>(a) (11001.11)₂ = 25.75<br>(b) (123.2)₄ = 16 + 8 + 3 + 0.5 = 27.5<br>(c) (31.5)₈ = 24 + 1 + 0.625 = 25.625<br>(d) (19.6)₁₆ = 16 + 9 + 0.375 = 25.375<br>Ascending: 25.375 (d) &lt; 25.625 (c) &lt; 25.75 (a) &lt; 27.5 (b)."
    },
    {
        q: "<b>[03-01-2025 Second Shift]</b><br>Match the LIST - I with LIST – II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Phrase)</th><th>LIST - II (ICT Term)</th></tr><tr><td>(a) An example of high-level computer programming language</td><td>(I) Mainframe</td></tr><tr><td>(b) A non-volatile memory that you can read from but not write to</td><td>(II) LAN</td></tr><tr><td>(c) These computers are used by airline companies to handle the large volume of data such as ticket reservations</td><td>(III) Java</td></tr><tr><td>(d) A type of network where computers are connected together within a home or a company</td><td>(IV) ROM</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)", "(B) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)", "(C) (a)-(II), (b)-(III), (c)-(I), (d)-(IV)", "(D) (a)-(I), (b)-(II), (c)-(IV), (d)-(III)"],
        ans: 1,
        exp: "<b>(B) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)</b><br>"
    },
    {
        q: "<b>[03-01-2025 Second Shift]</b><br>With reference to the snapshot of MS-EXCEL worksheet given below, which of the following formulae A-E when entered into cell A4 can be used to add the values 10, 20 and 30?<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th></th><th>A</th><th>B</th><th>C</th></tr><tr><td>1</td><td>10</td><td></td><td></td></tr><tr><td>2</td><td>20</td><td></td><td></td></tr><tr><td>3</td><td>30</td><td></td><td></td></tr><tr><td>4</td><td></td><td></td><td></td></tr></table><br>(a) = SUM (A1:A3)<br>(b) = SUM (A1, A3)<br>(c) = A1+A2+A3<br>(d) = SUM (A1, A2, A3)<br>(e) = SUM (A1-A3)<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (c) and (d) Only", "(B) (b), (c) and (d) Only", "(C) (d) and (e) Only", "(D) (a), (c), (d) and (e) Only"],
        ans: 0,
        exp: "<b>(A) (a), (c) and (d) Only</b><br>(a), (c) and (d) all give 10 + 20 + 30 = 60. (b) adds only A1 and A3 (= 40). (e) SUM(A1-A3) subtracts A3 from A1 (= −20)."
    },
    {
        q: "<b>[06-01-2025 First Shift]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then identify the correct ascending order of the following numbers A-D when converted to decimal number system.<br><br>(a) (11011.11)<sub>2</sub><br>(b) (131.2)<sub>4</sub><br>(c) (25.5)<sub>8</sub><br>(d) (16.6)<sub>16</sub><br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (c), (d), (b), (a)", "(B) (c), (d), (a), (b)", "(C) (a), (c), (d), (b)", "(D) (b), (a), (c), (d)"],
        ans: 1,
        exp: "<b>(B) (c), (d), (a), (b)</b><br>(a) (11011.11)₂ = 27.75<br>(b) (131.2)₄ = 16 + 12 + 1 + 0.5 = 29.5<br>(c) (25.5)₈ = 16 + 5 + 0.625 = 21.625<br>(d) (16.6)₁₆ = 16 + 6 + 0.375 = 22.375<br>Ascending: 21.625 (c) &lt; 22.375 (d) &lt; 27.75 (a) &lt; 29.5 (b)."
    },
    {
        q: "<b>[06-01-2025 First Shift]</b><br>Match the LIST - I with LIST – II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST – I (Question)</th><th>LIST – II (Answer)</th></tr><tr><td>(a) The speed of a CPU is measured in _______.</td><td>(I) Inches</td></tr><tr><td>(b) Storage capacity of data is measured in ______.</td><td>(II) Hertz</td></tr><tr><td>(c) Network bandwidth is measured in _______.</td><td>(III) bits per second</td></tr><tr><td>(d) Size of a computer monitor is measured in _______ diagonally from corner to the opposite corner.</td><td>(IV) Bytes</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(I), (b)-(III), (c)-(IV), (d)-(II)", "(B) (a)-(III), (b)-(II), (c)-(I), (d)-(IV)", "(C) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)", "(D) (a)-(II), (b)-(IV), (c)-(III), (d)-(I)"],
        ans: 3,
        exp: "<b>(D) (a)-(II), (b)-(IV), (c)-(III), (d)-(I)</b><br>"
    },
    {
        q: "<b>[06-01-2025 First Shift]</b><br>Which of the following is an independent malicious program that propagates itself across a network by exploiting security flaws in widely-used services?",
        opts: ["(A) Computer Worm", "(B) Computer Virus", "(C) Trojan Horse", "(D) Logic Bomb"],
        ans: 0,
        exp: "<b>(A) Computer Worm</b><br>Computer Worm: a self-replicating malicious program that spreads independently across networks by exploiting security vulnerabilities. It does not need to attach itself to another program.<br>Computer Virus: needs a host file or program to spread.<br>Trojan Horse: appears legitimate but contains malicious code; does not replicate itself.<br>Logic Bomb: executes malicious actions when specific conditions are met."
    },
    {
        q: "<b>[06-01-2025 First Shift]</b><br>Android is a mobile operating system developed by _______.",
        opts: ["(A) IBM", "(B) Apple", "(C) Microsoft", "(D) Google"],
        ans: 3,
        exp: "<b>(D) Google</b><br>"
    },
    {
        q: "<b>[06-01-2025 First Shift]</b><br>Which of the following statements A-D are true with reference to high-level computer programming languages?<br><br>(a) These need to be translated into machine code in order to run on a computer.<br>(b) These are written using mnemonic codes.<br>(c) These are specific to the computer's hardware.<br>(d) These are portable languages.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (c) only", "(B) (a) and (b) only", "(C) (a) and (d) only", "(D) (c) and (d) only"],
        ans: 2,
        exp: "<b>(C) (a) and (d) only</b><br>(a) True — They must be translated into machine code using a compiler or interpreter.<br>(b) False — Mnemonic codes are used in assembly language, not high-level languages.<br>(c) False — High-level languages are not hardware specific; that is true for low-level languages.<br>(d) True — High-level languages are generally portable across different computer systems."
    },
    {
        q: "<b>[06-01-2025 Second Shift]</b><br>In the context of cyber security, which of the following is a risk of phishing for the target users?",
        opts: ["(A) Connectivity fault", "(B) Data deletion", "(C) Fraudulent activity", "(D) Power reduction"],
        ans: 2,
        exp: "<b>(C) Fraudulent activity</b><br>Phishing is an online scam where attackers trick users into revealing sensitive information (like passwords, bank details), leading to fraudulent financial or identity misuse. So the major risk is fraudulent activity."
    },
    {
        q: "<b>[06-01-2025 Second Shift]</b><br>Which of the following is the first completely open source mobile operating system developed by Google, meaning that it is free to any cell phone mobile network?",
        opts: ["(A) Symbian", "(B) iOS", "(C) Android", "(D) Windows"],
        ans: 2,
        exp: "<b>(C) Android</b><br>The first completely open-source mobile operating system developed by Google, available freely to manufacturers and carriers, is Android."
    },
    {
        q: "<b>[06-01-2025 Second Shift]</b><br>With reference to digital communication, which of the following are examples of simplex type of communication?<br><br>(a) Radio broadcasting<br>(b) Television broadcasting<br>(c) Computer to Printer communication<br>(d) Keyboard to computer communication<br>(e) Walkie-Talkie communication<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (e) only", "(B) (a), (b), (c) and (d) only", "(C) (a), (c) and (e) only", "(D) (d) and (e) only"],
        ans: 1,
        exp: "<b>(B) (a), (b), (c) and (d) only</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Communication</th><th>Type</th><th>Reason</th></tr><tr><td>(a) Radio broadcasting</td><td>Simplex</td><td>Only transmitter → receivers</td></tr><tr><td>(b) Television broadcasting</td><td>Simplex</td><td>Only broadcast → viewers</td></tr><tr><td>(c) Computer to Printer</td><td>Simplex</td><td>Data flows only from computer to printer</td></tr><tr><td>(d) Keyboard to Computer</td><td>Simplex</td><td>Signals travel only from keyboard to computer</td></tr><tr><td>(e) Walkie-Talkie</td><td>Not simplex (Half-duplex)</td><td>Two-way but only one direction at a time</td></tr></table>"
    },
    {
        q: "<b>[06-01-2025 Second Shift]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then identify the correct ascending order of the following numbers A-D when converted to decimal number system:<br><br>(a) (11101.11)<sub>2</sub><br>(b) (130.2)<sub>4</sub><br>(c) (34.5)<sub>8</sub><br>(d) (15.6)<sub>16</sub><br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (d), (b), (c)", "(B) (b), (a), (c), (d)", "(C) (c), (a), (d), (b)", "(D) (d), (b), (c), (a)"],
        ans: 3,
        exp: "<b>(D) (d), (b), (c), (a)</b><br>(a) (11101.11)₂ = 29.75<br>(b) (130.2)₄ = 16 + 12 + 0 + 0.5 = 28.5<br>(c) (34.5)₈ = 24 + 4 + 0.625 = 28.625<br>(d) (15.6)₁₆ = 16 + 5 + 0.375 = 21.375<br>Ascending: 21.375 (d) &lt; 28.5 (b) &lt; 28.625 (c) &lt; 29.75 (a)."
    },
    {
        q: "<b>[06-01-2025 Second Shift]</b><br>Match the LIST - I with LIST – II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Example of Automatic Data Capture)</th><th>LIST - II (Appropriate Direct Data Entry Device)</th></tr><tr><td>(a) Contactless Credit Cards</td><td>(I) Bar Code Reader</td></tr><tr><td>(b) Multiple-choice answers in an examination paper</td><td>(II) RFID Reader</td></tr><tr><td>(c) Scan items at a computerized till</td><td>(III) OCR</td></tr><tr><td>(d) Convert printed or handwritten documents into an editable electronic format</td><td>(IV) OMR</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)", "(B) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)", "(C) (a)-(I), (b)-(III), (c)-(II), (d)-(IV)", "(D) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)"],
        ans: 3,
        exp: "<b>(D) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)</b><br>"
    },
    {
        q: "<b>[07-01-2025 First Shift]</b><br>Rita's smartphone uses an open source operating system. Which of the following best describes the source code in an open source operating system?",
        opts: ["(A) It is owned by the company who developed it.", "(B) It is made available to users.", "(C) It is more secure.", "(D) It uses less processing power."],
        ans: 1,
        exp: "<b>(B) It is made available to users.</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Option</th><th>Meaning</th></tr><tr><td>(A) Owned by the company</td><td>Not true—open source means code is publicly accessible</td></tr><tr><td>(B) Made available to users</td><td>Correct—users can view, modify, and redistribute source code</td></tr><tr><td>(C) More secure</td><td>Not always guaranteed</td></tr><tr><td>(D) Uses less processing power</td><td>Not necessarily true</td></tr></table>"
    },
    {
        q: "<b>[07-01-2025 First Shift]</b><br>Match the LIST - I with LIST – II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Malware Type)</th><th>LIST - II (Definition)</th></tr><tr><td>(a) Polymorphic Virus</td><td>(I) A seemingly useful program that contains hidden harmful program code</td></tr><tr><td>(b) Metamorphic Virus</td><td>(II) Changes its signature with each copy made during replication</td></tr><tr><td>(c) Trojan Horse</td><td>(III) A malware that spreads copies of itself through a network without user interaction</td></tr><tr><td>(d) Worm</td><td>(IV) Completely rewrites itself each time it is replicated, sometimes changing its behaviour</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)", "(B) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)", "(C) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)", "(D) (a)-(I), (b)-(III), (c)-(IV), (d)-(II)"],
        ans: 2,
        exp: "<b>(C) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Malware Type</th><th>Definition</th></tr><tr><td>(a) Polymorphic Virus</td><td>(II) Changes its signature with each copy</td></tr><tr><td>(b) Metamorphic Virus</td><td>(IV) Rewrites its own code every time it replicates</td></tr><tr><td>(c) Trojan Horse</td><td>(I) Appears useful but contains harmful code</td></tr><tr><td>(d) Worm</td><td>(III) Spreads by itself through networks without user action</td></tr></table>"
    },
    {
        q: "<b>[07-01-2025 First Shift]</b><br>With reference to digital communication, which of the following statements A-D are true?<br><br>(a) A Radio broadcast is an example of automatic type of transmission mode.<br>(b) A Keyboard communicating with a computer is an example of simplex type of transmission mode.<br>(c) Walkie-Talkies operate on half-duplex transmission mode.<br>(d) Telephone calls are an example of full-duplex transmission mode.<br><br>Choose the most appropriate answer from the options given below:",
        opts: ["(A) (a) and (b) Only", "(B) (b) and (c) Only", "(C) (a) and (c) Only", "(D) (b), (c) and (d) Only"],
        ans: 3,
        exp: "<b>(D) (b), (c) and (d) Only</b><br>(a) Incorrect — Radio broadcasting is simplex, not called \"automatic transmission mode.\"<br>(b) True — Data flows only one way: keyboard → computer.<br>(c) True — Communication is two-way but not simultaneous; users take turns.<br>(d) True — Both parties can speak and listen simultaneously."
    },
    {
        q: "<b>[07-01-2025 First Shift]</b><br>If the formula = $B$2 * $C$2 is entered into cell E2, and the formula is then copied to cells E3 and E4, then the values in cells E2, E3 and E4 will be<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th><th>E</th></tr><tr><td>1</td><td>Item</td><td>Quantity</td><td>Price</td><td>Revenue</td><td></td></tr><tr><td>2</td><td>A-11</td><td>12</td><td>5</td><td>60</td><td></td></tr><tr><td>3</td><td>B-32</td><td>31</td><td>9</td><td>279</td><td></td></tr><tr><td>4</td><td>C-44</td><td>24</td><td>12</td><td>288</td><td></td></tr></table>",
        opts: ["(A) 60, 60 and 60, respectively", "(B) 60, 279 and 288, respectively", "(C) 0, 0 and 0, respectively", "(D) 60, 40 and 36, respectively"],
        ans: 0,
        exp: "<b>(A) 60, 60 and 60, respectively</b><br>$B$2 and $C$2 are absolute references, so they do not change when the formula is copied. Every cell gives 12 × 5 = 60."
    },
    {
        q: "<b>[07-01-2025 First Shift]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then identify the correct ascending order of the following numbers A-D when converted to decimal number system:<br><br>(a) (11111.11)<sub>2</sub><br>(b) (102.3)<sub>6</sub><br>(c) (42.5)<sub>8</sub><br>(d) (32.6)<sub>16</sub><br><br>Choose the most appropriate answer from the options given below:",
        opts: ["(A) (b), (a), (c), (d)", "(B) (a), (c), (b), (d)", "(C) (c), (a), (d), (b)", "(D) (d), (c), (b), (a)"],
        ans: 1,
        exp: "<b>(B) (a), (c), (b), (d)</b><br>(a) (11111.11)₂ = 31.75<br>(b) (102.3)₆ = 36 + 0 + 2 + 0.5 = 38.5<br>(c) (42.5)₈ = 32 + 2 + 0.625 = 34.625<br>(d) (32.6)₁₆ = 48 + 2 + 0.375 = 50.375<br>Ascending: 31.75 (a) &lt; 34.625 (c) &lt; 38.5 (b) &lt; 50.375 (d)."
    },
    {
        q: "<b>[07-01-2025 Second Shift]</b><br>WiMAX stands for _______.",
        opts: ["(A) World Wide interoperability for Microwave Access", "(B) Web interoperability for Microwave Access", "(C) World Wide interoperation for Microwave Access", "(D) World Wide interoperability for Multimedia Access"],
        ans: 0,
        exp: "<b>(A) World Wide interoperability for Microwave Access</b><br>"
    },
    {
        q: "<b>[07-01-2025 Second Shift]</b><br>Acronym 'HTTPS' Stands for",
        opts: ["(A) Hyper Text Transfer Protocol Secure", "(B) Hyper Terminal Telephonic Pairty Self", "(C) Hyper Terminal Telephonic Pairty Secure", "(D) Hyper Terminal Telephonic Pairty Service"],
        ans: 0,
        exp: "<b>(A) Hyper Text Transfer Protocol Secure</b><br>"
    },
    {
        q: "<b>[07-01-2025 Second Shift]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Computer Security Term)</th><th>LIST - II (Description)</th></tr><tr><td>(a) Eavesdropping</td><td>(I) Looks like a legitimate software</td></tr><tr><td>(b) Snooping</td><td>(II) Just hacks the system for the fun of it</td></tr><tr><td>(c) Grey hat hacker</td><td>(III) Process of secret capture</td></tr><tr><td>(d) Trojan</td><td>(IV) An unauthorised real time interception</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(IV), (b)-(III), (c)-(II), (d)-(I)", "(B) (a)-(I), (b)-(II), (c)-(III), (d)-(IV)", "(C) (a)-(II), (b)-(III), (c)-(IV), (d)-(I)", "(D) (a)-(IV), (b)-(II), (c)-(I), (d)-(III)"],
        ans: 0,
        exp: "<b>(A) (a)-(IV), (b)-(III), (c)-(II), (d)-(I)</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST – I</th><th>LIST – II</th></tr><tr><td>(a) Eavesdropping</td><td>(IV) An unauthorized real-time interception</td></tr><tr><td>(b) Snooping</td><td>(III) Process of secret capture</td></tr><tr><td>(c) Grey hat hacker</td><td>(II) Just hacks the system for fun / curiosity without malicious intent</td></tr><tr><td>(d) Trojan</td><td>(I) Looks like legitimate software</td></tr></table>"
    },
    {
        q: "<b>[07-01-2025 Second Shift]</b><br>In the context of computer networking, the acronym 'MVNO' stands for.",
        opts: ["(A) Mobile Virtual Network Operator", "(B) Multimedia Virtual Network Operation", "(C) Multimedia Voice Noise Operation", "(D) Multimedia Voice Noise Operator"],
        ans: 0,
        exp: "<b>(A) Mobile Virtual Network Operator</b><br>"
    },
    {
        q: "<b>[08-01-2025 First Shift]</b><br>Which of the following is a free and open source software for creating and delivering online course?",
        opts: ["(A) Moodle", "(B) Udemy", "(C) Coursera", "(D) edx"],
        ans: 0,
        exp: "<b>(A) Moodle</b><br>Moodle is a free and open-source Learning Management System (LMS) used for creating and delivering online courses. Udemy, Coursera and edX are online learning platforms, but they are not open-source software for course creation."
    },
    {
        q: "<b>[08-01-2025 First Shift]</b><br>Arrange in the following in ascending order as per their storage space:<br><br>(a) Petabyte<br>(b) Gigabyte<br>(c) Terabyte<br>(d) Kilobyte<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (d), (b), (c), (a)", "(B) (c), (b), (a), (d)", "(C) (a), (c), (b), (d)", "(D) (a), (b), (c), (d)"],
        ans: 0,
        exp: "<b>(A) (d), (b), (c), (a)</b><br>"
    },
    {
        q: "<b>[08-01-2025 First Shift]</b><br>Which of the following is a malware?<br><br>(a) Virus<br>(b) Worms<br>(c) Ransomware<br>(d) Trojan<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) only", "(B) (a) and (d) only", "(C) (a), (b), (c) and (d)", "(D) (b) and (c) only"],
        ans: 2,
        exp: "<b>(C) (a), (b), (c) and (d)</b><br>"
    },
    {
        q: "<b>[08-01-2025 Second Shift]</b><br>Arrange the evolution of Operating System in chronological order:<br><br>(a) Real-time<br>(b) Multi Processing<br>(c) Batch processing<br>(d) Single User Single Tasking<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b), (d), (c)", "(B) (c), (d), (b), (a)", "(C) (c), (d), (a), (b)", "(D) (a), (b), (c), (d)"],
        ans: 1,
        exp: "<b>(B) (c), (d), (b), (a)</b><br>1. Batch Processing – earliest OS type (1950s–60s)<br>2. Single User Single Tasking – early personal computers (1970s–80s)<br>3. Multi-processing – multiple CPUs working together (1970s–80s)<br>4. Real-time OS – later specialized systems for time-critical applications (80s onward)"
    },
    {
        q: "<b>[08-01-2025 Second Shift]</b><br>Which of the following statements are correct in the context of programming languages?<br><br>(a) Algorithm solves a problem in a finite number of steps<br>(b) Assembly language is a low level programming language<br>(c) A code written in machine language is highly portable<br>(d) Algorithms are implemented using programming languages<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) & (c) only", "(B) (a), (b) & (d) only", "(C) (b), (c) & (d) only", "(D) (a), (c) & (d) only"],
        ans: 1,
        exp: "<b>(B) (a), (b) & (d) only</b><br>(a) True — Finite steps are a key property of algorithms.<br>(b) True — Assembly is one step above machine language and hardware-dependent.<br>(c) False — Machine language is hardware-specific, so it is not portable.<br>(d) True — Programs translate algorithms into executable code."
    },
    {
        q: "<b>[08-01-2025 Second Shift]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Computer Type)</th><th>LIST - II (Example)</th></tr><tr><td>(a) Super Computer</td><td>(I) IBM S/390</td></tr><tr><td>(b) Mainframe Computer</td><td>(II) IBM PC</td></tr><tr><td>(c) Minicomputer</td><td>(III) PDP-II</td></tr><tr><td>(d) Microcomputer</td><td>(IV) CRAY-1</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)", "(B) (a)-(I), (b)-(IV), (c)-(III), (d)-(II)", "(C) (a)-(III), (b)-(II), (c)-(IV), (d)-(I)", "(D) (a)-(II), (b)-(III), (c)-(IV), (d)-(I)"],
        ans: 0,
        exp: "<b>(A) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Type</th><th>Used for</th><th>Examples</th></tr><tr><td>Supercomputers</td><td>Weather forecasting, space research, nuclear simulations</td><td>CRAY-1, PARAM (India), Summit (USA), Fugaku (Japan), Titan, Sunway TaihuLight (China)</td></tr><tr><td>Mainframe Computers</td><td>Banking, airlines reservation, government and large companies</td><td>IBM S/390, IBM zSeries, UNIVAC, HP NonStop, Hitachi Z800</td></tr><tr><td>Minicomputers</td><td>Small organizations for lab data processing and departmental tasks</td><td>PDP-11, VAX 11/780, IBM AS/400, DEC Alpha, HP 3000</td></tr><tr><td>Microcomputers</td><td>Personal and office computing</td><td>IBM PC, Apple Macintosh, Dell Desktop, HP Laptop, Tablets & Smartphones, Raspberry Pi</td></tr></table>"
    },
    {
        q: "<b>[08-01-2025 Second Shift]</b><br>What is the full form of the acronym 'VoIP'.",
        opts: ["(A) Voice over Internet Protocol", "(B) Voice over Intranet Protocol", "(C) Vaccum over Internet Protocol", "(D) Vaccum over Intranet Protocol"],
        ans: 0,
        exp: "<b>(A) Voice over Internet Protocol</b><br>"
    },
    {
        q: "<b>[08-01-2025 Second Shift]</b><br>POST is performed by ______.",
        opts: ["(A) Operating system", "(B) Assembler", "(C) BIOS", "(D) Linker"],
        ans: 2,
        exp: "<b>(C) BIOS</b><br>"
    },
    {
        q: "<b>[09-01-2025 First Shift]</b><br>Which of the following is not an optical storage device?",
        opts: ["(A) CD-ROM", "(B) DVD-ROM", "(C) RAM", "(D) CD-R"],
        ans: 2,
        exp: "<b>(C) RAM</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Device</th><th>Type</th></tr><tr><td>CD-ROM</td><td>Optical</td></tr><tr><td>DVD-ROM</td><td>Optical</td></tr><tr><td>CD-R</td><td>Optical</td></tr><tr><td>RAM</td><td>Volatile semiconductor memory (not optical)</td></tr></table>"
    },
    {
        q: "<b>[09-01-2025 First Shift]</b><br>Who coined the term Artificial Intelligence in the year 1956?",
        opts: ["(A) John McCarthy", "(B) John McLuhan", "(C) Rhiengold", "(D) Curran, J"],
        ans: 0,
        exp: "<b>(A) John McCarthy</b><br>"
    },
    {
        q: "<b>[09-01-2025 First Shift]</b><br>Choose the correct statements in the context of DBMS.<br><br>(a) DBMS is a software to create and manage databases.<br>(b) Database schema is the design of the database.<br>(c) Foreign key in a relation is used for unique identification of tables.<br>(d) Primary key is used to relate two tables or relations.<br>(e) SQL stands for Structured Query Language.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (b), (c) and (d) only", "(C) (a), (b) and (e) only", "(D) (a), (c) and (d) only"],
        ans: 2,
        exp: "<b>(C) (a), (b) and (e) only</b><br>(a) True. (b) True.<br>(c) False — A primary key uniquely identifies records; a foreign key links tables.<br>(d) False — A foreign key is used to relate tables, not the primary key.<br>(e) True."
    },
    {
        q: "<b>[09-01-2025 First Shift]</b><br>Which of the following is not an example of Application software?",
        opts: ["(A) Compiler", "(B) Spreadsheet", "(C) Word Processor", "(D) Computer-aided design"],
        ans: 0,
        exp: "<b>(A) Compiler</b><br>A compiler is system software, not application software. Spreadsheet, Word Processor and CAD are all examples of application software used by end users."
    },
    {
        q: "<b>[09-01-2025 First Shift]</b><br>________ allows a user to share ideas, activities, events and interests, among the people.",
        opts: ["(A) Adware", "(B) Social networking sites", "(C) Cookies", "(D) Open source software"],
        ans: 1,
        exp: "<b>(B) Social networking sites</b><br>"
    },
    {
        q: "<b>[09-01-2025 First Shift]</b><br>Arrange the following programming languages according to their generations in ascending order:<br><br>(a) Machine language<br>(b) High level language<br>(c) Assembly language<br>(d) Very high level language<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (d), (b), (a), (c)", "(B) (b), (d), (c), (a)", "(C) (a), (c), (d), (b)", "(D) (a), (c), (b), (d)"],
        ans: 3,
        exp: "<b>(D) (a), (c), (b), (d)</b><br>1. Machine language → 1st generation<br>2. Assembly language → 2nd generation<br>3. High-level language → 3rd generation<br>4. Very high-level language → 4th generation"
    },
    {
        q: "<b>[09-01-2025 First Shift]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST – I (Internet keyword)</th><th>LIST – II (Function)</th></tr><tr><td>(a) FTP</td><td>(I) Used to create hypertext documents for use on the web</td></tr><tr><td>(b) Ping</td><td>(II) A message sent to check if a server is running</td></tr><tr><td>(c) HTML</td><td>(III) A set of rules to exchange documents on the web</td></tr><tr><td>(d) HTTP</td><td>(IV) Program that enables users to transfer files from one computer to another</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(I), (b)-(III), (c)-(II), (d)-(IV)", "(B) (a)-(I), (b)-(III), (c)-(IV), (d)-(II)", "(C) (a)-(IV), (b)-(II), (c)-(I), (d)-(III)", "(D) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)"],
        ans: 2,
        exp: "<b>(C) (a)-(IV), (b)-(II), (c)-(I), (d)-(III)</b><br>"
    },
    {
        q: "<b>[09-01-2025 Second Shift]</b><br>The full form of WWW is.",
        opts: ["(A) World White Web", "(B) World Wide Web", "(C) Worst Wide Web", "(D) Worst White Web"],
        ans: 1,
        exp: "<b>(B) World Wide Web</b><br>"
    },
    {
        q: "<b>[09-01-2025 Second Shift]</b><br>Match the LIST - I with LIST – II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (Network Devices)</th><th>LIST - II (Functions)</th></tr><tr><td>(a) Bridge</td><td>(I) Device that can receive the data, analyse it and transmit it to other networks</td></tr><tr><td>(b) Router</td><td>(II) Set of rules that decides how computers and other devices connect with each other through cables in a LAN</td></tr><tr><td>(c) Gateway</td><td>(III) Serves as the entry and exit point of a network</td></tr><tr><td>(d) Ethernet</td><td>(IV) Device that connects one LAN to another LAN that uses the same protocol</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(II), (b)-(III), (c)-(I), (d)-(IV)", "(B) (a)-(III), (b)-(II), (c)-(I), (d)-(IV)", "(C) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)", "(D) (a)-(I), (b)-(IV), (c)-(III), (d)-(II)"],
        ans: 2,
        exp: "<b>(C) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)</b><br>"
    },
    {
        q: "<b>[09-01-2025 Second Shift]</b><br>Which of the following is an example of non-impact printer?",
        opts: ["(A) Dot Matrix", "(B) Daisy Wheel", "(C) Line", "(D) Laser"],
        ans: 3,
        exp: "<b>(D) Laser</b><br>Impact printers physically strike the paper through a ribbon (Dot Matrix, Daisy Wheel, Line). Non-impact printers print without striking the paper (Laser, Inkjet, Thermal printers)."
    },
    {
        q: "<b>[09-01-2025 Second Shift]</b><br>Arrange the steps of Data processing cycle in correct sequence:<br><br>(a) Input<br>(b) Output<br>(c) Processing<br>(d) Storage<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (d), (a), (c), (b)", "(B) (a), (c), (d), (b)", "(C) (a), (b), (c), (d)", "(D) (b), (a), (c), (d)"],
        ans: 1,
        exp: "<b>(B) (a), (c), (d), (b)</b><br>"
    },
    {
        q: "<b>[09-01-2025 Second Shift]</b><br>Which of the following are correct in context of network security?<br><br>(a) Virus, worms, and Trojan horse are examples of Malware<br>(b) Trojan horse is a non-self-replicating malicious software<br>(c) After receiving payment, if the product is not delivered it is an example of phishing<br>(d) In https, 's' stands for Secure<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (b), (c) and (d) only", "(C) (a), (c) and (d) only", "(D) (a), (b) and (d) only"],
        ans: 3,
        exp: "<b>(D) (a), (b) and (d) only</b><br>(a) True — These are common types of malicious software.<br>(b) True — Unlike worms and viruses, a Trojan does not replicate itself.<br>(c) False — That is online fraud or a scam, not phishing. Phishing is stealing sensitive information by deception (fake emails/websites).<br>(d) True — HTTPS means HyperText Transfer Protocol Secure."
    },
    {
        q: "<b>[10-01-2025 First Shift]</b><br>Which of the following is not a security risk?",
        opts: ["(A) Hacking", "(B) Firewall", "(C) Phishing", "(D) Pharming"],
        ans: 1,
        exp: "<b>(B) Firewall</b><br>A firewall protects the system, whereas hacking, phishing, and pharming are security attacks."
    },
    {
        q: "<b>[10-01-2025 First Shift]</b><br>Which of the following statements are correct in the context of operating system?<br><br>(a) Utility program is the first program loaded into the computer during booting<br>(b) Multiprogramming was introduced for interleaved execution of multiple jobs by the same CPU<br>(c) DOS is an example of single user operating system.<br>(d) Mainframe computer uses multiuser operating system.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (a), (b) and (d) only", "(C) (b), (c) and (d) only", "(D) (a), (c) and (d) only"],
        ans: 2,
        exp: "<b>(C) (b), (c) and (d) only</b><br>"
    },
    {
        q: "<b>[10-01-2025 First Shift]</b><br>Identify the advantages of video conferencing.<br><br>(a) Increased productivity<br>(b) going green<br>(c) lack of personal contact<br>(d) clarity of audio and video always<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (d) only", "(B) (a) and (c) only", "(C) (a), (b) and (c) only", "(D) (a) and (b) only"],
        ans: 3,
        exp: "<b>(D) (a) and (b) only</b><br>"
    },
    {
        q: "<b>[10-01-2025 First Shift]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Device)</th><th>LIST - II (Function)</th></tr><tr><td>(a) CPU</td><td>(I) stores data temporarily</td></tr><tr><td>(b) Monitor</td><td>(II) stores data permanently</td></tr><tr><td>(c) RAM</td><td>(III) Processes Instructions</td></tr><tr><td>(d) Hard disk</td><td>(IV) Displays visual output</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(IV), (c)-(II), (d)-(I)", "(B) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)", "(C) (a)-(I), (b)-(II), (c)-(III), (d)-(IV)", "(D) (a)-(I), (b)-(II), (c)-(IV), (d)-(III)"],
        ans: 1,
        exp: "<b>(B) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)</b><br>"
    },
    {
        q: "<b>[10-01-2025 First Shift]</b><br>Arrange the following OSI layers in correct sequence:<br><br>(a) Data link layer<br>(b) Physical layer<br>(c) Network layer<br>(d) Presentation layer<br>(e) Application layer<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (e), (d), (b), (a), (c)", "(B) (e), (d), (a), (c), (b)", "(C) (b), (a), (c), (e), (d)", "(D) (b), (a), (c), (d), (e)"],
        ans: 3,
        exp: "<b>(D) (b), (a), (c), (d), (e)</b><br>The OSI (Open Systems Interconnection) model has 7 layers. From bottom to top, the layers relevant here are:<br>Physical layer (b) – hardware transmission of raw bits<br>Data Link layer (a) – error-free data transfer between adjacent nodes<br>Network layer (c) – routing and addressing of data<br>Presentation layer (d) – formats and translates data (encryption, compression)<br>Application layer (e) – closest to the user; supports applications like email, web browsing"
    },
    {
        q: "<b>[10-01-2025 First Shift]</b><br>The form of computing utilized by an email service is",
        opts: ["(A) Distributed", "(B) Grid", "(C) P2P", "(D) Cloud"],
        ans: 3,
        exp: "<b>(D) Cloud</b><br>Email services (like Gmail, Outlook, Yahoo Mail) operate over the internet and store data on remote servers accessible from anywhere. This is an example of Cloud computing."
    },
    {
        q: "<b>[10-01-2025 Second Shift]</b><br>Which of the following statements are true?<br><br>(a) Two computers can have the same MAC address.<br>(b) Wireless notebooks may suffer from electromagnetic interference.<br>(c) Terrestrial microwave supports line-of-sight communication.<br>(d) In distributed computing, computers are located in the different geographical area.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (a), (b) and (d) only", "(C) (b), (c) and (d) only", "(D) (a), (c) and (d) only"],
        ans: 2,
        exp: "<b>(C) (b), (c) and (d) only</b><br>(b) Wireless signals can be affected by microwave ovens, Bluetooth devices, cordless phones, etc.<br>(c) Terrestrial microwave transmission requires a clear line of sight (LOS) between antennas.<br>(d) Distributed computing involves multiple connected computer systems often spread over different geographical locations.<br>(a) is false because a MAC address is unique to each device."
    },
    {
        q: "<b>[10-01-2025 Second Shift]</b><br>Which one of the following is the fastest memory element?",
        opts: ["(A) Registers", "(B) Cache", "(C) RAM", "(D) HDD"],
        ans: 0,
        exp: "<b>(A) Registers</b><br>(A) Registers: located inside the CPU, store data currently being processed; fastest access time and very small in size.<br>(B) Cache: high-speed memory between CPU and RAM; faster than RAM but slower than registers.<br>(C) RAM: main memory for active programs and data; slower than cache and registers, but faster than secondary memory; volatile.<br>(D) HDD: secondary storage; much slower than RAM, cache and registers; non-volatile."
    },
    {
        q: "<b>[10-01-2025 Second Shift]</b><br>The topology in which each communicating device is connected to a central node is called",
        opts: ["(A) Ring topology", "(B) Bus topology", "(C) Mesh topology", "(D) Star topology"],
        ans: 3,
        exp: "<b>(D) Star topology</b><br>(A) Ring: devices are connected in a circular loop.<br>(B) Bus: all devices are connected to a single central cable (backbone).<br>(C) Mesh: each device is connected to every other device, providing multiple paths.<br>(D) Star: all devices are connected to a central node (hub, switch, or server). If the central node fails, the entire network goes down."
    },
    {
        q: "<b>[10-01-2025 Second Shift]</b><br>Arrange the instruction cycle in correct sequence:<br><br>(a) Decode<br>(b) Store<br>(c) Fetch<br>(d) Execute<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (d), (b), (a), (c)", "(B) (c), (a), (d), (b)", "(C) (a), (c), (d), (b)", "(D) (d), (b), (c), (a)"],
        ans: 1,
        exp: "<b>(B) (c), (a), (d), (b)</b><br>1. Fetch – the CPU retrieves the instruction from memory.<br>2. Decode – the fetched instruction is interpreted.<br>3. Execute – the decoded instruction is executed by the CPU.<br>4. Store – the result is stored back to memory or a register."
    },
    {
        q: "<b>[16-01-2025 First Shift]</b><br>Which of the following statements A-D about Read Only Memory (ROM) are true?<br><br>(a) The data stored in ROM is temporary.<br>(b) It is also known as firmware.<br>(c) The contents don't change even if it is read many times.<br>(d) EPROM is a type of ROM that can be erased by exposing it to ultraviolet rays.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b), (c) and (d) Only", "(B) (a) and (c) Only", "(C) (b) and (d) Only", "(D) (a), (b), (c) and (d)"],
        ans: 0,
        exp: "<b>(A) (b), (c) and (d) Only</b><br>(b) ROM often stores firmware, which is permanent software embedded into hardware.<br>(c) Reading ROM does not affect the stored data.<br>(d) EPROM (Erasable Programmable ROM) uses UV light to erase contents before rewriting.<br>(a) is false: data in ROM is permanent (non-volatile)."
    },
    {
        q: "<b>[16-01-2025 First Shift]</b><br>Consider the following MS-EXCEL function entered in cell C1:<br>=IF(A1&gt;B1, 1, IF (A1=10, 2, IF(A1&lt;B1, 3, 4)))<br><br>The above function will return a value of 4 in cell C1 if the values in cell A1 and cell B1 are _______ respectively.",
        opts: ["(A) 11 and 10", "(B) 9 and 10", "(C) 11 and 11", "(D) 10 and 10"],
        ans: 2,
        exp: "<b>(C) 11 and 11</b><br>The function returns 4 only when A1 is not greater than B1, A1 is not equal to 10 and A1 is not less than B1, i.e. A1 = B1 and A1 ≠ 10. That is true for 11 and 11. (11, 10) gives 1; (9, 10) gives 3; (10, 10) gives 2."
    },
    {
        q: "<b>[16-01-2025 First Shift]</b><br>Which of the following about cloud computing is false?",
        opts: ["(A) Cloud computing is Internet - based computing where shared resources, software, and information are provided to firms on demand.", "(B) Cloud computing can easily host enterprise system applications.", "(C) If the internet connection goes down, then the cloud system will not function.", "(D) Data stored in a cloud computing system is always secure."],
        ans: 3,
        exp: "<b>(D) Data stored in a cloud computing system is always secure.</b><br>Data security in the cloud is not guaranteed to be always secure. Cloud security depends on service providers and user practices."
    },
    {
        q: "<b>[16-01-2025 First Shift]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Concept)</th><th>LIST - II (Example)</th></tr><tr><td>(a) Internet of content</td><td>(I) Social Media</td></tr><tr><td>(b) Internet of People</td><td>(II) Smartwatch</td></tr><tr><td>(c) Internet of Things</td><td>(III) Internet</td></tr><tr><td>(d) Network of Networks</td><td>(IV) Searching 'Taj Mahal' on Google</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(I), (b)-(IV), (c)-(III), (d)-(II)", "(B) (a)-(II), (b)-(III), (c)-(I), (d)-(IV)", "(C) (a)-(III), (b)-(II), (c)-(IV), (d)-(I)", "(D) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)"],
        ans: 3,
        exp: "<b>(D) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)</b><br>"
    },
    {
        q: "<b>[16-01-2025 Second Shift]</b><br>Which of the following are examples of an application software?<br><br>(a) Internet Explorer<br>(b) Mozilla Firefox<br>(c) Microsoft office<br>(d) Apache Open office<br>(e) Apple iOS<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (a), (b), (c) and (d) only", "(C) (d) and (e) only", "(D) (a), (b), (c), (d) and (e)"],
        ans: 1,
        exp: "<b>(B) (a), (b), (c) and (d) only</b><br>(a) Internet Explorer – web browser – application software<br>(b) Mozilla Firefox – web browser – application software<br>(c) Microsoft Office – productivity suite – application software<br>(d) Apache OpenOffice – productivity suite – application software<br>(e) Apple iOS – not application software; it is an Operating System (system software) for Apple mobile devices"
    },
    {
        q: "<b>[16-01-2025 Second Shift]</b><br>The abbreviation S/MIME implies _________.",
        opts: ["(A) Secure / Multimedia Internet Mailing Extensions", "(B) Secure / Multipurpose Internet Multimedia Extensions", "(C) Standard / Multimedia Internet Media Extensions", "(D) Secure / Multipurpose Internet Mail Extensions"],
        ans: 3,
        exp: "<b>(D) Secure / Multipurpose Internet Mail Extensions</b><br>"
    },
    {
        q: "<b>[16-01-2025 Second Shift]</b><br>Match the LIST - I with LIST – II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Malware term)</th><th>LIST - II (Definition)</th></tr><tr><td>(a) Payload</td><td>(I) A program that can replicate itself and travels over network</td></tr><tr><td>(b) Worm</td><td>(II) Scam in which a perpetrator sends an official looking email message that attempts to obtain personal and/or financial information</td></tr><tr><td>(c) Phishing</td><td>(III) Destructive event or prank, a virus was created to deliver</td></tr><tr><td>(d) Spamming</td><td>(IV) E-mailing an unsolicited message to many people at the same time</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)", "(B) (a)-(III), (b)-(I), (c)-(II), (d)-(IV)", "(C) (a)-(II), (b)-(III), (c)-(IV), (d)-(I)", "(D) (a)-(III), (b)-(II), (c)-(I), (d)-(IV)"],
        ans: 1,
        exp: "<b>(B) (a)-(III), (b)-(I), (c)-(II), (d)-(IV)</b><br>"
    },
    {
        q: "<b>[16-01-2025 Second Shift]</b><br>Identify the correct order of the terms A-E related to document production to complete the following paragraph.<br><br>The unit used to measure the size of a font is called ________. A page orientation can be either _________ or _________. The special margin that is placed at the top or edge to clear the text from the fold in a page is called the _________. When the first line of a paragraph appears in the last line of a page, then this is called _________.<br><br>(a) Portrait<br>(b) Gutter<br>(c) Point<br>(d) Orphan<br>(e) Landscape<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (c), (a), (e), (b), (d)", "(B) (b), (e), (a), (c), (d)", "(C) (a), (d), (b), (c), (e)", "(D) (c), (b), (a), (d), (e)"],
        ans: 0,
        exp: "<b>(A) (c), (a), (e), (b), (d)</b><br>"
    },
    {
        q: "<b>[16-01-2025 Second Shift]</b><br>Performance of computer hardware components is measured in different ways. Which of the following hardware component's performance is measured in Hertz?",
        opts: ["(A) Hard Disk Drive (HDD)", "(B) Solid State Drive (SSD)", "(C) CPU", "(D) Laser Printer"],
        ans: 2,
        exp: "<b>(C) CPU</b><br>(A) HDD: measured in RPM (Revolutions Per Minute) and data transfer speed in MB/s.<br>(B) SSD: measured in read/write speed (MB/s or GB/s).<br>(C) CPU: measured in Hertz (Hz, MHz, GHz) — indicates clock speed.<br>(D) Laser Printer: measured in pages per minute (PPM)."
    },
    {
        q: "<b>[21-01-2025 First Shift]</b><br>Which of the following statements about ICT are true?<br><br>(a) The Uniform Resource Locator (URL) specifies the protocol, domain, path and resource.<br>(b) A web browser is the application software used to access content on WWW.<br>(c) A website is a collection of webpages usually on the same topic or theme.<br>(d) A web server is a computer with software that makes files available on the OCR.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (b), (c) and (d) only", "(C) (a) and (d) only", "(D) (a), (b), (c) and (d)"],
        ans: 0,
        exp: "<b>(A) (a), (b) and (c) only</b><br>"
    },
    {
        q: "<b>[21-01-2025 First Shift]</b><br>Ravi draws a picture on a piece of paper of 5 inch × 4 inches in size. He wants to use a scanner to scan the picture with 500 pixels per square inch and 16-bit color. Without file compression what is the approximate file size of the scanned image (in MB)?",
        opts: ["(A) 7.82", "(B) 6.33", "(C) 8.66", "(D) 9.54"],
        ans: 3,
        exp: "<b>(D) 9.54</b><br>Picture size = 5 inch × 4 inch; resolution = 500 pixels per inch (interpreted as linear resolution, otherwise the size would be too small to match the options); colour depth = 16-bit = 2 bytes per pixel; no compression.<br>Pixels = (5 × 500) × (4 × 500) = 2500 × 2000 = 5,000,000. Size = 5,000,000 × 2 = 10,000,000 bytes ≈ 9.54 MB."
    },
    {
        q: "<b>[21-01-2025 First Shift]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST - I (Malware Example)</th><th>LIST – II (Type of Malware)</th></tr><tr><td>(a) WannaCry</td><td>(I) Trojan</td></tr><tr><td>(b) Stuxnet</td><td>(II) Worm</td></tr><tr><td>(c) Emotet</td><td>(III) Spyware</td></tr><tr><td>(d) Pegasus</td><td>(IV) Ransomware</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(I), (c)-(II), (d)-(IV)", "(B) (a)-(II), (b)-(III), (c)-(IV), (d)-(I)", "(C) (a)-(IV), (b)-(II), (c)-(I), (d)-(III)", "(D) (a)-(I), (b)-(IV), (c)-(III), (d)-(II)"],
        ans: 2,
        exp: "<b>(C) (a)-(IV), (b)-(II), (c)-(I), (d)-(III)</b><br>"
    },
    {
        q: "<b>[21-01-2025 First Shift]</b><br>Which of the following is the correct order of computer networks A-D from largest to smallest?<br><br>(a) WAN<br>(b) MAN<br>(c) LAN<br>(d) PAN<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b), (c), (d) only", "(B) (b), (d), (a), (c) only", "(C) (c), (a), (b), (d) only", "(D) (d), (c), (a), (b) only"],
        ans: 0,
        exp: "<b>(A) (a), (b), (c), (d) only</b><br>WAN (Wide Area Network) – covers countries or continents<br>MAN (Metropolitan Area Network) – covers a city or large campus<br>LAN (Local Area Network) – covers a building or small office<br>PAN (Personal Area Network) – covers a few meters around a person (e.g., Bluetooth)"
    },
    {
        q: "<b>[27-01-2025 Second Shift]</b><br>Identify the correct order in which the following actions A-D take place in an interaction between a web browser and a web server when you plan to visit Amazon website to purchase a Solid State Drive (SSD).<br><br>(a) The web browser requests a webpage using HTTP<br>(b) The web browser establishes a TCP connection with the Amazon's web server<br>(c) The web server sends the requested webpage using HTTP<br>(d) The web browser finds the IP address of Amazon's website using DNS<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b), (d), (c)", "(B) (b), (a), (c), (d)", "(C) (c), (d), (b), (a)", "(D) (d), (b), (a), (c)"],
        ans: 3,
        exp: "<b>(D) (d), (b), (a), (c)</b><br>DNS lookup – the browser first finds the IP address (d).<br>TCP connection – the browser creates a TCP connection to the server (b).<br>HTTP request – the browser asks for the webpage (a).<br>HTTP response – the server sends the requested webpage back (c)."
    },
    {
        q: "<b>[27-01-2025 Second Shift]</b><br>Arrange the following social media platforms in correct chronological order (from the earliest to latest).<br><br>(a) Instagram<br>(b) WhatsApp<br>(c) Twitter (now X)<br>(d) Facebook<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (d), (c), (b), (a)", "(B) (d), (b), (c), (a)", "(C) (d), (c), (a), (b)", "(D) (d), (b), (a), (c)"],
        ans: 0,
        exp: "<b>(A) (d), (c), (b), (a)</b><br>Facebook — launched in 2004<br>Twitter (now \"X\") — launched in 2006<br>WhatsApp — launched in 2009<br>Instagram — launched in 2010"
    },
    {
        q: "<b>[27-01-2025 Second Shift]</b><br>Aman installs a web camera in the waiting area of a clinic for security purposes and finds that a 1-minute video takes up approximately 10 MB. Which of the following is the required storage capacity of a daily backup in GB (correct to three significant figures)?",
        opts: ["(A) 12.3 GB", "(B) 15.6 GB", "(C) 14.1 GB", "(D) 13.4 GB"],
        ans: 2,
        exp: "<b>(C) 14.1 GB</b><br>One day = 24 × 60 = 1440 minutes. Storage = 1440 × 10 MB = 14,400 MB. In GB (÷ 1024) = 14.0625 ≈ 14.1 GB."
    },
    {
        q: "<b>[27-01-2025 Second Shift]</b><br>Ubiquitous Computing means:",
        opts: ["(A) Capability of computing everywhere", "(B) Creating creative computing ideas", "(C) Designing layouts for interactive computing", "(D) Planning and designing computational product"],
        ans: 0,
        exp: "<b>(A) Capability of computing everywhere</b><br>"
    },
    {
        q: "<b>[27-01-2025 Second Shift]</b><br>Match the LIST - I with LIST – II:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (Computer attack/cyber crime)</th><th>LIST - II (Definition)</th></tr><tr><td>(a) Worm</td><td>(I) Misdirecting users to a fraudulent website without their knowledge or consent</td></tr><tr><td>(b) Bot</td><td>(II) A malware that replicates itself in order to spread to other computers across the network</td></tr><tr><td>(c) Denial-of-Service</td><td>(III) Flooding sites with useless traffic to overwhelm a network</td></tr><tr><td>(d) Pharming</td><td>(IV) A malware that responds to external commands sent by an attacker</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(II), (b)-(IV), (c)-(III), (d)-(I)", "(B) (a)-(I), (b)-(III), (c)-(IV), (d)-(II)", "(C) (a)-(III), (b)-(II), (c)-(I), (d)-(IV)", "(D) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)"],
        ans: 0,
        exp: "<b>(A) (a)-(II), (b)-(IV), (c)-(III), (d)-(I)</b><br>"
    },
    {
        q: "<b>[27-01-2025 Second Shift]</b><br>Renu uses WAV format instead of MP3 format when recording music performance. What are the benefits of doing this?<br><br>(a) The size of audio file is larger<br>(b) The audio quality is better<br>(c) There are no cross-platform issues<br>(d) Audio file is uncompressed and lossless<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) and (c) only", "(B) (b) and (d) only", "(C) (c) and (d) only", "(D) (a), (b) and (d) only"],
        ans: 1,
        exp: "<b>(B) (b) and (d) only</b><br>"
    }
];