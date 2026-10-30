var rawQuestions = [
    {
        q: "Nov 2021: Match List I with List II<br><br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>List I (Network Security Technique)</th><th>List II (Implementation Technique)</th></tr><tr><td>A. Symmetric encryption</td><td>I. Public and private key</td></tr><tr><td>B. Asymmetric encryption</td><td>II. Digital signature</td></tr><tr><td>C. Authentication</td><td>III. Secret key</td></tr><tr><td>D. Denial of Service Avoidance</td><td>IV. Email filter</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A - I, B- III, C-IV, D II", "(B) A II, B-I, C-III, D-IV", "(C) A-II, B-I, C-IV, D III", "(D) A - III, B-I, C-II, D-IV"],
        ans: 3,
        exp: "<b>(D) A - III, B-I, C-II, D-IV</b><br>Symmetric encryption uses a single secret key for both encryption and decryption (III). Asymmetric encryption uses a public and private key pair (I). Authentication is done using a digital signature (II). A DoS attack can be prevented by filtering emails from malicious attackers and IP addresses (IV).<br>Symmetric: fast, one key (128 or 256 bits), used for large data, only confidentiality; examples: 3DES, AES, DES, RC4. Asymmetric: slow, two keys (2048 bits or higher), used for small data, provides confidentiality, authenticity and non-repudiation; examples: Diffie-Hellman, ECC, El Gamal, DSA, RSA."
    },
    {
        q: "Sept 2022: Which of the following statements are correct regarding VoLTE?<br><br>(a) VOLTE stands for 'Voice over Long-Term Evaluation'.<br>(b) It is a digital packet voice service delivery over IP via an LTE access network.<br>(c) Provides more efficient use of spectrum than traditional voice.<br>(d) Eliminates the need to have voice on one network and data on another network.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b), (c) and (d) only", "(B) (b), (c) and (d) only", "(C) (a), (b) and (c) only", "(D) (a), (c) and (d) only"],
        ans: 1,
        exp: "<b>(B) (b), (c) and (d) only</b><br>VoLTE stands for Voice over Long-Term Evolution (not 'Evaluation'), so (a) is wrong. It is a digital packet voice service supplied over IP over an LTE access network using IMS technology. It utilises spectrum more efficiently than traditional voice, and it eliminates the need to have voice on one network and data on another."
    },
    {
        q: "Sept 2022: Aman adds a video file to his social networking page. Which one of these describes a video that has been watched by a lot of people over a short period of time?",
        opts: ["(A) Digital", "(B) Tagged", "(C) Viral", "(D) Open source"],
        ans: 2,
        exp: "<b>(C) Viral</b><br>A viral video is a video that gains popularity online on social networking websites or apps, being watched by many people in a short period of time."
    },
    {
        q: "Sept 2022: Given below are two statements:<br><br>Statement (I): Artificial Intelligence (AI) learns from changing circumstances, whereas virtual reality is an artificially created environment used to give a feeling of 'being there'.<br><br>Statement (II): QR, a type of more sophisticated barcode which uses a matrix of dark squares on a light background, stands for Quick Reaction.<br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are correct", "(B) Both Statement (I) and Statement (II) are incorrect", "(C) Statement (I) is correct but Statement (II) is incorrect", "(D) Statement (I) is incorrect but Statement (II) is correct"],
        ans: 2,
        exp: "<b>(C) Statement (I) is correct but Statement (II) is incorrect</b><br>Statement I is correct: AI is the simulation of human intelligence in machines that can learn and improve over time, while virtual reality creates a simulated environment that users can interact with, giving a feeling of immersion.<br>Statement II is incorrect: QR stands for Quick Response, not Quick Reaction."
    },
    {
        q: "March 2023: Which one of the following is the context in which the term \"qubit\" is mentioned?",
        opts: ["(A) Cloud Services", "(B) Quantum Computing", "(C) Visible Light Communication Technologies", "(D) Wireless Communication Technologies"],
        ans: 1,
        exp: "<b>(B) Quantum Computing</b><br>Quantum computing uses the laws of quantum mechanics to solve problems too large or complex for traditional computers. Quantum bits, or qubits, are the basic unit of information in quantum computing. Qubits use superposition to be in multiple states at one time, whereas binary bits can only represent 0 or 1."
    },
    {
        q: "March 2023: Given below are two statements:<br><br>Statement (I): Chatbot is an example of Digital Intelligence.<br>Statement (II): Amazon's 'Alexa' and Apple's 'Siri' are examples of Artificial Intelligence.<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 0,
        exp: "<b>(A) Both Statement (I) and Statement (II) are true.</b><br>Digital Intelligence is a type of intelligence derived from digital data and algorithms that enables machines to perform tasks that would otherwise require human intervention. Chatbots can be considered an example of digital intelligence. Amazon's 'Alexa' and Apple's 'Siri' are virtual assistants that use AI technologies such as natural language processing and machine learning to understand and respond to user commands."
    },
    {
        q: "March 2023: Given below are two statements:<br><br>Statement (I): Podcasts are digital audio or video files containing meaningful content.<br>Statement (II): Blogs are personal websites that contain content like a Journal or diary.<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 0,
        exp: "<b>(A) Both Statement (I) and Statement (II) are true.</b><br>Podcasts are a form of digital media (audio or video) that you can download or stream; they are not limited by time slots or geography and can cover a broad range of topics.<br>Blogs (web logs) are websites updated regularly with new content called posts. Originally they were personal online diaries or journals."
    },
    {
        q: "June 2023: A webpage displays the following information in which each understood word is a link to another webpage. For digital devices, the bandwidth is usually expressed in bits per second. For analog devices, the bandwidth is expressed in Hertz.<br><br>Which method of data organisation is being used?",
        opts: ["(A) HTML", "(B) Hypertext", "(C) Storyboard", "(D) Data schema"],
        ans: 1,
        exp: "<b>(B) Hypertext</b><br>Hypertext is a method of organising information in which words or phrases in a text are links to other pages or documents."
    },
    {
        q: "June 2023: Clickjacking, a type of cyber attack, is",
        opts: ["(A) A device that sends and receives data at every click in a bit per second.", "(B) A device which counts clicks on Internet", "(C) A malicious technique of tricking web users into revealing confidential information.", "(D) A digital process that is used to display an image on mobile."],
        ans: 2,
        exp: "<b>(C) A malicious technique of tricking web users into revealing confidential information.</b><br>Clickjacking tricks you into clicking on an unpredicted (and often invisible) element within a website to redirect your traffic to a malicious site that collects your personal data or infects a connected device with malware."
    },
    {
        q: "June 2023: Match List I with list II<br><br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>List I (Computer Terms)</th><th>List II (Definition)</th></tr><tr><td>(a) Tweening</td><td>(I) The procedure where one image is changed into another image in a smooth way (uses tweening to give the transition effect)</td></tr><tr><td>(b) Morphing</td><td>(II) Artificially created environment</td></tr><tr><td>(c) Rendering</td><td>(III) The generation of intermediate frames between images gives the impression that the first image Evolves slowly into the second image</td></tr><tr><td>(d) Virtual Reality</td><td>(IV) The generation of an image from a model using software</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)", "(B) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)", "(C) (a)-(I), (b)-(III), (c)-(IV), (d)-(II)", "(D) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)"],
        ans: 3,
        exp: "<b>(D) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)</b><br>Tweening (inbetweening) is the process of generating intermediate frames between the initial and final images (III). Morphing transforms one image or object shape into another smoothly (I). Rendering is the process of generating an image from a 2D or 3D model by means of a computer program (IV). Virtual reality is an artificially created environment (II)."
    },
    {
        q: "June 2023: Match List I with List II<br><br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th>LIST I (Description)</th><th>LIST II (Internet Technical Term)</th></tr><tr><td>(a) Numerical ID of 32-bit or 128-bit device on the internet</td><td>(I) Virtualization</td></tr><tr><td>(b) Unique ID for a network interface card (NIC)</td><td>(II) MAC address</td></tr><tr><td>(c) An arrangement whereby a user remotely accesses software, hardware, or other resources via a browser</td><td>(III) IP address</td></tr><tr><td>(d) The process of running multiple machines on one physical server</td><td>(IV) Cloud Computing</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(IV), (c)-(II), (d)-(I)", "(B) (a)-(I), (b)-(II), (c)-(IV), (d)-(III)", "(C) (a)-(II), (b)-(III), (c)-(IV), (d)-(I)", "(D) (a)-(III), (b)-(II), (c)-(IV), (d)-(I)"],
        ans: 3,
        exp: "<b>(D) (a)-(III), (b)-(II), (c)-(IV), (d)-(I)</b><br>An IP address is the numerical ID of a 32-bit (IPv4) or 128-bit (IPv6) device (III). A MAC address is the unique ID of a network interface card (II). Cloud computing is remote access to resources via a browser (IV). Virtualization is running multiple machines on one physical server (I)."
    },
    {
        q: "June 2023: Both Wi-Fi and Bluetooth devices provide wireless communication between devices. Bluetooth is useful when<br><br>(a) Transferring data between two or more devices that are less than 30 metres apart.<br>(b) The speed of data transmission is not important.<br>(c) Using high bandwidth applications (for example, sending music files from a mobile phone to a headset).<br><br>Choose the most appropriate answer from the options given below:",
        opts: ["(A) (a) and (b) only", "(B) (a) and (c) only", "(C) (b) and (c) only", "(D) (a), (b) and (c)"],
        ans: 0,
        exp: "<b>(A) (a) and (b) only</b><br>Bluetooth range is 8-30 metres, has low power consumption and narrow bandwidth, so it suits short-distance data transfer where speed is not important. It is not suited to high-bandwidth applications, so (c) is wrong.<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><th></th><th>Wi-fi</th><th>Bluetooth</th><th>Zigbee</th></tr><tr><td>Distance</td><td>20-150 meters</td><td>8-30 meters</td><td>20-150 meters</td></tr><tr><td>Safety</td><td>Low, could be hacked easily</td><td>Good</td><td>Good, used for industry</td></tr><tr><td>Power Consumption</td><td>High</td><td>Low</td><td>Lowest</td></tr><tr><td>Bandwidth</td><td>Wide, used for many data transmission</td><td>Narrow</td><td>Narrow, good for M2M communication</td></tr></table>"
    },
    {
        q: "Which of the following statements regarding guided and unguided media in computer Networking are correct?<br><br>(A) Guided media transmission supports higher data speeds than unguided media transmission<br>(B) Guided media is subjected to less interference than unguided media<br>(C) Unguided media transmission is more secure than guided media transmission<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A) and (B) Only", "(2) (A) and (C) Only", "(3) (B) and (C) Only", "(4) (A), (B) and (C)"],
        ans: 0,
        exp: "<b>(1) (A) and (B) Only</b><br>Guided (wired) media such as twisted pair, coaxial cable and optical fibre support higher speeds and suffer less interference. Unguided (wireless) media propagate signals through the air, have lower security and are easier to hack, so (C) is incorrect."
    },
    {
        q: "Given below are two statements:<br><br>Statement (I): Dropbox is an example of e-mail service on the internet.<br>Statement (II): Google Docs is an online word processor.<br><br>In light of the above statements, choose the most appropriate answer from the options given below.",
        opts: ["1. Both Statement (I) and Statement (II) are true.", "2. Both Statement (I) and Statement (II) are false.", "3. Statement (I) is true but Statement (II) is false.", "4. Statement (I) is false but Statement (II) is true."],
        ans: 3,
        exp: "<b>4. Statement (I) is false but Statement (II) is true.</b><br>Dropbox is a cloud storage (file hosting) service, not an e-mail service. Google Docs is an online word processor (the Google Workspace counterpart of Microsoft Word)."
    },
    {
        q: "Which of the following statements about quantum computing are correct?<br><br>A. Principles of quantum physics are applied in it.<br>B. Quantum bits (qubits) are used as the information unit.<br>C. Quantum Computers emit radiation fatal to humans/users.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. (A) and (B) only", "2. (A) and (C) only", "3. (B) and (C) only", "4. (A), (B) and (C)"],
        ans: 0,
        exp: "<b>1. (A) and (B) only</b><br>Quantum computing applies the principles of quantum mechanics and uses qubits as the basic unit of information. Statement C is false: quantum computers do not emit radiation that is fatal to users."
    },
    {
        q: "The cyberspace is normally compared to a type of electronic :",
        opts: ["(1) Screen", "(2) Salon", "(3) Complex", "(4) Agora"],
        ans: 3,
        exp: "<b>(4) Agora</b><br>Cyberspace is normally compared to an electronic agora, a public open space (marketplace) where people meet, exchange ideas and interact."
    }
];