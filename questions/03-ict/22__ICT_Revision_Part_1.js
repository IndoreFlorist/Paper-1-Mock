var rawQuestions = [
    {
        q: "<b>[18 June 2024 Shift 1]</b><br>What is the base-10 equivalent of the base-4 number 3013 ?",
        opts: ["(1) 182", "(2) 196", "(3) 199", "(4) 190"],
        ans: 2,
        exp: "<b>(3) 199</b><br>3×4³ + 0×4² + 1×4¹ + 3×4⁰ = 192 + 0 + 4 + 3 = 199."
    },
    {
        q: "<b>[18 June 2024 Shift 1]</b><br>Identify the correct order of the following list of computer components ranked from slowest to fastest in terms of access time.<br><br>A. CPU cache<br>B. RAM<br>C. SSD<br>D. Optical Drive<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) D, C, B, A", "(2) A, B, C, D", "(3) B, A, D, C", "(4) C, D, A, B"],
        ans: 0,
        exp: "<b>(1) D, C, B, A</b><br>Optical drives are the slowest storage media.<br>SSDs are much faster than optical drives.<br>RAM is faster than SSDs.<br>CPU cache is the fastest memory."
    },
    {
        q: "<b>[18 June 2024 Shift 1]</b><br>Match List - I with List - II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>List - I (Use)</th><th>List - II (Appropriate Computer Input Device)</th></tr><tr><td>A. To input voiceovers for a presentation</td><td>I. Mouse</td></tr><tr><td>B. To input a PIN</td><td>II. Joystick</td></tr><tr><td>C. To select options from a menu</td><td>III. Microphone</td></tr><tr><td>D. To operate a flight simulator</td><td>IV. Number pad</td></tr></table>",
        opts: ["(1) A-II, B-IV, C-I, D-III", "(2) A-III, B-IV, C-I, D-II", "(3) A-IV, B-II, C-I, D-III", "(4) A-I, B-III, C-II, D-IV"],
        ans: 1,
        exp: "<b>(2) A-III, B-IV, C-I, D-II</b><br>Voiceovers → Microphone; PIN → Number pad; Menu selection → Mouse; Flight simulator → Joystick."
    },
    {
        q: "<b>[18 June 2024 Shift 1]</b><br>A device used to convert a computer's digital signal to an analogue signal for communication is called a:",
        opts: ["(1) bridge", "(2) modem", "(3) switch", "(4) Network Interface Card (NIC)"],
        ans: 1,
        exp: "<b>(2) modem</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Device</th><th>Function (In Short)</th></tr><tr><td>Modem</td><td>Converts digital signals to analog and vice-versa; enables internet connection over telephone lines.</td></tr><tr><td>Switch</td><td>Connects multiple computers/devices in a network and forwards data only to the intended device.</td></tr><tr><td>Hub</td><td>Basic device that connects multiple computers but sends data to all devices (less smart than switch).</td></tr><tr><td>Router</td><td>Connects multiple networks (like home network to the Internet) and chooses the best path for data.</td></tr><tr><td>Bridge</td><td>Connects two LAN segments and filters traffic between them.</td></tr><tr><td>Repeater</td><td>Boosts/strengthens a weak network signal to extend the length of a network.</td></tr><tr><td>Gateway</td><td>Connects different network architectures and protocols (like connecting LAN to the Internet).</td></tr><tr><td>Access Point (AP)</td><td>Allows wireless devices (Wi-Fi) to connect to a wired network.</td></tr><tr><td>Network Interface Card (NIC)</td><td>Allows a computer to connect to a network (wired or wireless).</td></tr><tr><td>Firewall</td><td>Secures a network by controlling incoming/outgoing traffic and blocking unauthorized access.</td></tr><tr><td>Proxy Server</td><td>Works as an intermediary between user and internet; provides security and anonymity.</td></tr><tr><td>Load Balancer</td><td>Distributes network or website traffic across multiple servers to avoid overload.</td></tr></table>"
    },
    {
        q: "<b>[18 June 2024 Shift 1]</b><br>Which of the following statements A-D about computer memory size is/are true?<br><br>A. 25 KB is larger than 100 MB.<br>B. 999 MB is larger than 50 GB<br>C. 3500 KB is smaller than 2 GB.<br>D. 2350 bytes is smaller than 2 KB.<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) A only", "(2) C only", "(3) B and D only", "(4) B and C only"],
        ans: 1,
        exp: "<b>(2) C only</b><br>A. 25 KB ≈ 25,600 bytes; 100 MB ≈ 104,857,600 bytes → False.<br>B. 50 GB = 50 × 1024 = 51,200 MB; 999 MB &lt; 51,200 MB → False.<br>C. 3500 KB ≈ 3.4 MB; 2 GB = 2048 MB → True.<br>D. 2 KB = 2048 bytes; 2350 bytes &gt; 2048 bytes → False."
    },
    {
        q: "<b>[18 June 2024 Shift 2]</b><br>Which of the following computer devices are output devices only ?<br><br>A. Track ball<br>B. CRT monitor<br>C. Number pad<br>D. Plotter<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) A and B only", "(2) A, B and D only", "(3) C and D only", "(4) B and D only"],
        ans: 3,
        exp: "<b>(4) B and D only</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Device</th><th>Type</th></tr><tr><td>Trackball</td><td>Input device</td></tr><tr><td>CRT Monitor</td><td>Output device</td></tr><tr><td>Number Pad</td><td>Input device</td></tr><tr><td>Plotter</td><td>Output device</td></tr></table>"
    },
    {
        q: "<b>[18 June 2024 Shift 2]</b><br>Which of the following statements about computer memories is correct ?",
        opts: ["(1) HDDs may experience a \"head crash\"", "(2) SSDs are also known as volatile memory.", "(3) HDDs do not have any moving parts.", "(4) Computers usually have more primary memory than secondary memory."],
        ans: 0,
        exp: "<b>(1) HDDs may experience a \"head crash\"</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Statement</th><th>True / False</th><th>Reason</th></tr><tr><td>(1) HDDs may experience a \"head crash\"</td><td>True</td><td>HDDs have moving read/write heads that can hit the disk surface and get damaged.</td></tr><tr><td>(2) SSDs are also known as volatile memory.</td><td>False</td><td>SSDs are non-volatile storage (they retain data without power).</td></tr><tr><td>(3) HDDs do not have any moving parts.</td><td>False</td><td>HDDs do have moving parts (spinning platters, moving heads).</td></tr><tr><td>(4) Computers usually have more primary memory than secondary memory.</td><td>False</td><td>Secondary memory (e.g., HDD/SSD) is usually much larger than primary memory (RAM).</td></tr></table>"
    },
    {
        q: "<b>[18 June 2024 Shift 2]</b><br>Match List - I with List - II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>List - I (Internet Protocol)</th><th>List - II (Internet Activity)</th></tr><tr><td>A. HTTP</td><td>I. Sends email through the Internet</td></tr><tr><td>B. SSL</td><td>II. Encrypts data for online transmission</td></tr><tr><td>C. SMTP</td><td>III. Sends TCP/IP packets to web server</td></tr><tr><td>D. FTP</td><td>IV. Transfers files over the Internet</td></tr></table>",
        opts: ["(1) A-IV, B-III, C-II, D-I", "(2) A-II, B-I, C-IV, D-III", "(3) A-I, B-IV, C-III, D-II", "(4) A-III, B-II, C-I, D-IV"],
        ans: 3,
        exp: "<b>(4) A-III, B-II, C-I, D-IV</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Protocol</th><th>Activity</th><th>Explanation</th></tr><tr><td>A. HTTP</td><td>III. Sends TCP/IP packets to web server</td><td>Used for accessing web pages</td></tr><tr><td>B. SSL</td><td>II. Encrypts data for online transmission</td><td>Secure Sockets Layer – security encryption</td></tr><tr><td>C. SMTP</td><td>I. Sends email through the Internet</td><td>Protocol for sending emails</td></tr><tr><td>D. FTP</td><td>IV. Transfers files over the Internet</td><td>File Transfer Protocol</td></tr></table>"
    },
    {
        q: "<b>[18 June 2024 Shift 2]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then identify the correct ascending order of the following numbers A-D, when converted to a base-10 number system.<br><br>A. (8B)<sub>16</sub><br>B. (212)<sub>8</sub><br>C. (260)<sub>7</sub><br>D. (10001101)<sub>2</sub><br><br>Choose the correct answer from the options given below :",
        opts: ["(1) B, A, C, D", "(2) D, C, A, B", "(3) A, B, C, D", "(4) C, D, B, A"],
        ans: 0,
        exp: "<b>(1) B, A, C, D</b><br>A. (8B)₁₆ = 8×16 + 11 = 139<br>B. (212)₈ = 2×64 + 1×8 + 2 = 138<br>C. (260)₇ = 2×49 + 6×7 + 0 = 140<br>D. (10001101)₂ = 128 + 8 + 4 + 1 = 141<br>Ascending: 138 (B) &lt; 139 (A) &lt; 140 (C) &lt; 141 (D)."
    },
    {
        q: "<b>[18 June 2024 Shift 2]</b><br>Around 1945, who developed the idea of a stored program computer that was to hold programs and data in a memory and then data would move between the memory and the processor ?",
        opts: ["(1) Alan Turing", "(2) Tim Berners - Lee", "(3) Charles Babbage", "(4) John Von Neumann"],
        ans: 3,
        exp: "<b>(4) John Von Neumann</b><br>The idea of a stored program computer, in which instructions and data are stored in the same memory, was developed around 1945 by John Von Neumann. This architecture is now known as the Von Neumann Architecture."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following software titles are examples of operating system?<br><br>A. MS-Word<br>B. Linux<br>C. MS-PowerPoint<br>D. Adobe Photoshop<br>E. Android<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, C and D only", "2. A, B, C and D only", "3. B and E only", "4. B, D and E only"],
        ans: 2,
        exp: "<b>3. B and E only</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Identify the sequence of ICT terms A-D that correctly fills the blanks in the following paragraph: _____ is permanent memory that is used to store instructions that are needed to start the computer. ______ is fast temporary memory that is used to store data and applications that are currently in use. ______ carries out processing and turns data into information. The ________ is used to plug all other components into the computer system.<br><br>A. Motherboard<br>B. RAM<br>C. CPU<br>D. ROM<br><br>Choose the correct answer from the options given below:",
        opts: ["1. D, B, A, C", "2. A, D, C, B", "3. C, A, B, D", "4. D, B, C, A"],
        ans: 3,
        exp: "<b>4. D, B, C, A</b><br>D (ROM): permanent memory used to store instructions needed to start the computer.<br>B (RAM): fast temporary memory used to store data and applications currently in use.<br>C (CPU): carries out processing and turns data into information.<br>A (Motherboard): used to plug all other components into the computer system."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following pair of acronym and its expansion is incorrectly matched?",
        opts: ["1. XML- Extensible Markup Language", "2. WWW- World Wide Web", "3. VLSI- Very Large Scale Integration", "4. SMS- Short Message Software"],
        ans: 3,
        exp: "<b>4. SMS- Short Message Software</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the List-I with List-II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (Computer Network)</th><th>LIST II (Description)</th></tr><tr><td>A. Flat Network</td><td>I. Describes today's worldwide connection of networks</td></tr><tr><td>B. Extranet</td><td>II. Describes a network that lies completely inside a trusted area of a network and is under the security control of system and network administrators</td></tr><tr><td>C. Intranet</td><td>III. Describes a network that avoids packet-looping issues, through an architecture that does not have layers</td></tr><tr><td>D. Internet</td><td>IV. Describes a network that is an extension of a selected portion of a company's Intranet to external partners</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-IV, B-III, C-I, D-II", "2. A-III, B-IV, C-II, D-I", "3. A-II, B-I, C-III, D-IV", "4. A-III, B-IV, C-I, D-II"],
        ans: 1,
        exp: "<b>2. A-III, B-IV, C-II, D-I</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the List-I with List-II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>List - I (ICT Term)</th><th>List - II (Meaning)</th></tr><tr><td>A. Software</td><td>I. The software that accesses and displays pages on the web.</td></tr><tr><td>B. Web Browser</td><td>II. A mechanism that isolates a network from the rest of the Internet, permitting only specific traffic to pass in and out.</td></tr><tr><td>C. PDA</td><td>III. A set of computer programs that enables hardware to perform different tasks.</td></tr><tr><td>D. Firewall</td><td>IV. A small mobile computing device.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(1) (A)-(I), (B)-(III), (C)-(IV), (D)-(II)", "(2) (A)-(II), (B)-(I), (C)-(IV), (D)-(III)", "(3) (A)-(III), (B)-(I), (C)-(IV), (D)-(II)", "(4) (A)-(I), (B)-(III), (C)-(II), (D)-(IV)"],
        ans: 2,
        exp: "<b>(3) (A)-(III), (B)-(I), (C)-(IV), (D)-(II)</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following statements are true in the context of Web Conferencing?<br><br>(A) It uses the Internet to permit conferencing to take place.<br>(B) Multiple computers are used with this system, all connected over the Internet.<br>(C) Delegates cannot leave the conference once they join.<br>(D) It is carried out in real-time.<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A) and (B) Only", "(2) (A), (B) and (C) Only", "(3) (C) and (D) Only", "(4) (A), (B) and (D)"],
        ans: 3,
        exp: "<b>(4) (A), (B) and (D)</b><br>(A): True. Web conferencing uses the Internet to enable conferences to take place.<br>(B): True. Multiple computers are involved, all connected over the Internet.<br>(C): False. Delegates can typically leave the conference at any time.<br>(D): True. Web conferencing is carried out in real-time, allowing participants to interact live."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Identify the correct order of the following storage devices A-D as per their increasing data storage capacity:<br><br>(A) DVD<br>(B) Hard Disk<br>(C) CDROM<br>(D) Blu-Ray Disk<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (C), (A), (D), (B)", "(2) (A), (C), (D), (B)", "(3) (B), (D), (C), (A)", "(4) (C), (A), (B), (D)"],
        ans: 0,
        exp: "<b>(1) (C), (A), (D), (B)</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following pair of acronyms and their expansion is incorrectly matched ?",
        opts: ["(1) SIM-Subscriber Identity Module", "(2) SMTP-Simple Mail Transfer Plan", "(3) SQL-Structured Query Language", "(4) URL - Uniform Resource Locator"],
        ans: 1,
        exp: "<b>(2) SMTP-Simple Mail Transfer Plan</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>In computing, which of the following is a program downloaded and installed on a computer that appears harmless, but is in fact, malicious.",
        opts: ["(1) Trojan Horse", "(2) Time Bomb", "(3) Worm", "(4) Logic Bomb"],
        ans: 0,
        exp: "<b>(1) Trojan Horse</b><br>A Trojan Horse is a type of malicious software that disguises itself as legitimate or harmless software. It appears to be useful or beneficial, but once installed, it can cause harm or provide unauthorized access to the system.<br>Time Bomb (option 2) is malicious code that activates at a specific time or event.<br>Worm (option 3) is a self-replicating malware that spreads to other computers without needing to be attached to a program.<br>Logic Bomb (option 4) is code that executes a malicious action when certain conditions are met."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the List-I with List-II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (ICT Term)</th><th>LIST II (Description)</th></tr><tr><td>A. Authentication</td><td>I. Identifies which device is connected at a given IP address</td></tr><tr><td>B. Biometrics</td><td>II. Relies on certain unique characteristics of human beings such as retina scans</td></tr><tr><td>C. IP Address</td><td>III. Verifies that data comes from a secure and trusted source and works with encryption to strengthen internet security</td></tr><tr><td>D. MAC Address</td><td>IV. Identifies where on the network a device is located.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-I, B-III, C-IV, D-III", "2. A-III, B-II, C-IV, D-I", "3. A-II, B-III, C-I, D-IV", "4. A-IV, B-III, C-II, D-I"],
        ans: 1,
        exp: "<b>2. A-III, B-II, C-IV, D-I</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then which of the following equalities are true?<br><br>A. (512.125)<sub>10</sub> = (1000000000.001)<sub>2</sub><br>B. (512.125)<sub>10</sub> = (1000.1)<sub>8</sub><br>C. (512.125)<sub>10</sub> = (200.2)<sub>16</sub><br>D. (512.125)<sub>10</sub> = (2000.02)<sub>4</sub><br><br>Choose the correct answer from the options given below:",
        opts: ["1. A and B only", "2. A and C only", "3. B, C and D only", "4. A, B and C only"],
        ans: 3,
        exp: "<b>4. A, B and C only</b><br>A. 2⁹ + 2⁻³ = 512 + 0.125 → True.<br>B. 1×8³ + 1×8⁻¹ = 512 + 0.125 → True.<br>C. 2×16² + 2×16⁻¹ = 512 + 0.125 → True.<br>D. 2×4³ + 2×4⁻² = 128 + 0.125 = 128.125 ≠ 512.125 → False."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Identify the correct logical sequence of the following four sentences A - D, arranged at random, regarding the invention of the computer mouse:<br><br>A. We use the mouse today because it is the pointing device that is most convenient to use compared to other devices like joystick, trackball, etc.<br>B. Doug Engelbart was bored sitting at a conference and started thinking about how a plane moves with two sets of wheels moving in orthogonal directions.<br>C. Doug Engelbart remembered these observations when he was trying to make a device for selecting objects on a computer screen.<br>D. Doug Engelbart told the story of how he invented the mouse.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. D, C, B, A", "2. A, B, C, D", "3. B, C, D, A", "4. D, B, C, A"],
        ans: 3,
        exp: "<b>4. D, B, C, A</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>A webpage displays the following information, in which the underlined word is a link to another webpage.<br><br><i>For digital devices, the <u>bandwidth</u> is usually expressed in bits per second (bps). For analog devices, the bandwidth is expressed in Hertz (Hz)</i><br><br>Which method of data organisation is being used?",
        opts: ["1. HTML", "2. Hypertext", "3. Storyboard", "4. Data Scheme"],
        ans: 1,
        exp: "<b>2. Hypertext</b><br>Hypertext refers to the organization of information that contains links (usually underlined words or phrases) to other pages or documents. In this case, the underlined word, which serves as a link to another webpage, is an example of hypertext.<br>HTML (option 1) is the language used to structure and display content on the web, but the organization of linked text itself is called hypertext."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>In MS-EXCEL, a formula =B$1 + C$3 + 5 in cell D9 when copied to cell F12 will become:<br><br>Choose the correct answer from the options given below:",
        opts: ["1. =D1 + E3 = 5", "2. =B$2 + C$4 + 5", "3. =C$1 + D$3 + 5", "4. =D$1 + E$3 + 5"],
        ans: 3,
        exp: "<b>4. =D$1 + E$3 + 5</b><br>In the formula =B$1 + C$3 + 5:<br>B$1: The row (1) is fixed, but the column (B) is relative.<br>C$3: The row (3) is fixed, but the column (C) is relative.<br>+5: This is a constant and remains unchanged.<br>When this formula is copied from D9 to F12, the relative column references (B and C) shift two columns to the right (D to F). The absolute row references ($1 and $3) stay the same.<br>So, the formula becomes =D$1 + E$3 + 5."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>With reference to open source software, which of the following statements are correct?<br><br>A. It is software that is distributed with the source code.<br>B. It allows anyone to modify the software as per their requirement.<br>C. It is a software that anyone can use on a trial basis before paying for it.<br>D. Linux is an example of open source software.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. Only A, B and D", "2. Only A, B, C and D", "3. Only A, C and D", "4. Only B and C"],
        ans: 0,
        exp: "<b>1. Only A, B and D</b><br>A: Open source software is distributed with the source code, which allows users to view, modify, and distribute it.<br>B: It allows anyone to modify the software as per their requirement, a key aspect of open source software.<br>C: Incorrect. Software that can be used on a trial basis before paying for it is referred to as shareware or trialware, not open source.<br>D: Linux is a well-known example of open source software."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match List I with List II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>List I (Malware types)</th><th>List II (Specifications)</th></tr><tr><td>A. Trapdoor</td><td>I. Creates multiple distinct but operationally equivalent copies of itself.</td></tr><tr><td>B. Time Bomb</td><td>II. A code that subsequently allows unauthorized rapid access.</td></tr><tr><td>C. Polymorphic virus</td><td>III. Instructions that are interpreted rather than executed.</td></tr><tr><td>D. Macrovirus</td><td>IV. Produces an action at a specified time.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-III, B-IV, C-I, D-II", "2. A-II, B-IV, C-I, D-III", "3. A-I, B-II, C-III, D-IV", "4. A-II, B-I, C-IV, D-III"],
        ans: 1,
        exp: "<b>2. A-II, B-IV, C-I, D-III</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Identify the correct order of the words A-E to fill in the blanks in the following paragraph: In the context of human-computer interaction, ______ is an interface built around visible objects and with these visible objects Windows-11 is an example of a ______. ______ is the part of the screen used to display information. ______ is a small picture used to point to folders, software, etc. while ______ is a list of options from which the user can make a selection.<br><br>A. OS<br>B. Menu<br>C. Window<br>D. Icon<br>E. GUI<br><br>Choose the correct answer from the options given below:",
        opts: ["1. E, A, C, B, D", "2. A, E, D, C, B", "3. E, A, C, D, B", "4. B, C, A, E, D"],
        ans: 2,
        exp: "<b>3. E, A, C, D, B</b><br>GUI (Graphical User Interface) is an interface built around visible objects.<br>Windows-11 is an example of an OS (Operating System).<br>A Window is the part of the screen used to display information.<br>An icon is a small picture used to point to folders, software, etc.<br>A Menu is a list of options from which the user can make a selection."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following will form the most stable computer network with the fastest data transmission?",
        opts: ["1. Using wireless access points to connect devices", "2. Wirelessly connecting devices using mobile phones", "3. Connecting devices using co-axial cables to connect them in series", "4. Connecting devices to a switch using optic fibre cables"],
        ans: 3,
        exp: "<b>4. Connecting devices to a switch using optic fibre cables</b><br>Optic fiber cables provide very high-speed data transmission with minimal loss and interference compared to wireless networks or co-axial cables. They support higher bandwidths and longer distances with lower latency. Additionally, using a switch ensures efficient network management and stability."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following electronic technologies is the key technology for making the third generation electronic computer?",
        opts: ["1. Transistor based", "2. Integrated Current (IC) based", "3. Vacuum tube based", "4. Microprocessor based"],
        ans: 1,
        exp: "<b>2. Integrated Current (IC) based</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Generation</th><th>Key points</th></tr><tr><td>First</td><td>Vacuum tubes; machine language; main memory: magnetic tapes and magnetic drums; I/O: paper tape and punched cards. Examples: IBM 650, IBM 701, ENIAC, UNIVAC1.</td></tr><tr><td>Second</td><td>Transistors; machine language and assembly language; main memory: magnetic core and magnetic tape/disk; I/O: magnetic tape and punched cards. Examples: PDP-8, IBM1400 series, IBM 7090, UNIVAC 1107, CDC 3600.</td></tr><tr><td>Third</td><td>Integrated Circuits (ICs); high-level language; introduction of operating systems; I/O: magnetic tape, monitor, keyboard, printer. Examples: IBM 360, IBM 370, PDP-11, NCR 395, B6500, UNIVAC 1108.</td></tr><tr><td>Fourth</td><td>Microprocessors (VLSI); semiconductor memory (RAM, ROM); pointing devices, optical scanning, keyboard, monitor, printer; concept of internet introduced. Examples: IBM PC, STAR 1000, APPLE II, Apple Macintosh, Altair 8800.</td></tr><tr><td>Fifth</td><td>Understands natural language (human language); trackpad, touchscreen, pen, speech input, light scanner. Examples: Desktops, laptops, tablets, smartphones.</td></tr></table>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>If (L)<sub>M</sub> represents a number L in base-M number system, then which of the following equalities are true?<br><br>A. (127.125)<sub>10</sub> = (1111111.001)<sub>2</sub><br>B. (127.125)<sub>10</sub> = (1333.02)<sub>4</sub><br>C. (127.125)<sub>10</sub> = (177.1)<sub>8</sub><br>D. (127.125)<sub>10</sub> = (7F.2)<sub>16</sub><br><br>Choose the most appropriate answer from the options given below:",
        opts: ["1. A only", "2. A and B only", "3. A, B and C only", "4. A, B, C and D"],
        ans: 3,
        exp: "<b>4. A, B, C and D</b><br>A. (1111111)₂ = 127 and (.001)₂ = 0.125 → True.<br>B. 1×64 + 3×16 + 3×4 + 3 = 127 and (.02)₄ = 2/16 = 0.125 → True.<br>C. 1×64 + 7×8 + 7 = 127 and (.1)₈ = 0.125 → True.<br>D. 7×16 + 15 = 127 and (.2)₁₆ = 2/16 = 0.125 → True."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Identify the sequence of words A-E that correctly fills the blanks in the following paragraph: The _____ is the 'brain' of the computer and the _______ processor made by Intel is an example of this. The speed of the processor is measured in ______. _______ is a volatile memory whereas _______ is used in most computers to hold a small special piece of software known as the 'boot up' program.<br><br>A. ROM<br>B. CPU<br>C. RAM<br>D. Pentium<br>E. Hertz<br><br>Choose the most appropriate answer from the options given below:",
        opts: ["1. B, D, E, C, A", "2. D, B, C, E, A", "3. C, D, E, A, B", "4. B, E, D, A, C"],
        ans: 0,
        exp: "<b>1. B, D, E, C, A</b><br>The CPU is the 'brain' of the computer.<br>The Pentium processor made by Intel is an example of this.<br>The speed of the processor is measured in Hertz.<br>RAM is a volatile memory.<br>ROM is used in most computers to hold a small special piece of software known as the 'boot up' program."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following statements best describes a blog?",
        opts: ["1. A website that allows multiple users to collaborate and create information.", "2. A chronological list of posts on a website typically written by a single author about a subject.", "3. A series of audio or video episodes that subscribers download or stream to their devices.", "4. A standardised format that allows users to subscribe to view content updates from a creator."],
        ans: 1,
        exp: "<b>2. A chronological list of posts on a website typically written by a single author about a subject.</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following electronic technologies is the key technology for making the first generation electronic computer?",
        opts: ["1. Transistor based", "2. Integrated Circuit based", "3. Vacuum Tube based", "4. Dual Core CPU based"],
        ans: 2,
        exp: "<b>3. Vacuum Tube based</b><br>First generation computers used vacuum tubes; machine language; main memory: magnetic tapes and magnetic drums; I/O: paper tape and punched cards. Examples: IBM 650, IBM 701, ENIAC, UNIVAC1, etc."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the List-I with List-II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (Malware types)</th><th>LIST II (Characteristics)</th></tr><tr><td>A. Trojan Horse</td><td>I. Propagates copies of itself through a network</td></tr><tr><td>B. Worm</td><td>II. Triggers action when certain condition occurs</td></tr><tr><td>C. Logic Bomb</td><td>III. Hooks standard OS calls to hide the existence of malware</td></tr><tr><td>D. Rootkit</td><td>IV. Contains unexpected covert effect</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-I, B-IV, C-III, D-II", "2. A-IV, B-II, C-I, D-III", "3. A-II, B-I, C-III, D-IV", "4. A-IV, B-I, C-II, D-III"],
        ans: 3,
        exp: "<b>4. A-IV, B-I, C-II, D-III</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Consider the following snapshot of MS-Excel worksheet:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th></th><th>A</th><th>B</th><th>C</th><th>D</th></tr><tr><td>17</td><td>Day</td><td>Quantity</td><td>Sales Amount (₹)</td><td></td></tr><tr><td>18</td><td>Monday</td><td>1</td><td>234</td><td></td></tr><tr><td>19</td><td>Tuesday</td><td>3</td><td>144</td><td></td></tr><tr><td>20</td><td>Wednesday</td><td>6</td><td>367</td><td></td></tr><tr><td>21</td><td>Thursday</td><td>5</td><td>674</td><td></td></tr><tr><td>22</td><td>Friday</td><td>8</td><td>1099</td><td></td></tr><tr><td>23</td><td>Saturday</td><td>3</td><td>233</td><td></td></tr></table><br>In cell D18, the value returned by the function =SUMIFS (C18: C23, B18: B23, \"&gt;3\", C18: C23, \"&gt;500\") is _____.",
        opts: ["1. 1466", "2. 2140", "3. 1773", "4. 26"],
        ans: 2,
        exp: "<b>3. 1773</b><br>C18:C23 is the range for \"Sales Amount (₹)\" and B18:B23 is the range for \"Quantity\".<br>The condition \"&gt;3\" filters rows where Quantity is greater than 3. The condition \"&gt;500\" filters rows where Sales Amount is greater than 500.<br>Thursday (quantity 5, sales ₹674) and Friday (quantity 8, sales ₹1099) satisfy both conditions, so the sum is 674 + 1099 = 1773."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following statements is true about Number system?",
        opts: ["1. The binary equivalent of the decimal number 57.625 is 111000.101", "2. (145)<sub>6</sub> = (75)<sub>10</sub>", "3. (1011)<sub>2</sub> + (1001)<sub>2</sub> = (20)<sub>10</sub>", "4. (65)<sub>10</sub> = (220)<sub>5</sub>"],
        ans: 2,
        exp: "<b>3. (1011)<sub>2</sub> + (1001)<sub>2</sub> = (20)<sub>10</sub></b><br>1. (111000.101)₂ = 32+16+8 = 56 + 0.625 = 56.625 ≠ 57.625.<br>2. (145)₆ = 1×36 + 4×6 + 5 = 65 ≠ 75.<br>3. 1011 + 1001 = 10100 = (20)₁₀ → True.<br>4. (65)₁₀ = (230)₅ ≠ (220)₅."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following statements about Read Only Memory (ROM) are correct?<br><br>A. The contents of the memory remain intact even when the power to the ROM is turned off<br>B. ROM is often used to store the start-up instructions when the computer is first switched on<br>C. As the ROM becomes full, the processor has to continually access the hard disk<br>D. ROM is a volatile memory<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A and B only", "2. B and C only", "3. A and C only", "4. A, B, C and D"],
        ans: 0,
        exp: "<b>1. A and B only</b><br>A: True – ROM is non-volatile memory, meaning it retains its data without power.<br>B: True – ROM stores the BIOS/firmware used to boot the computer.<br>C: False – ROM is not something that \"fills up\" like RAM or storage; it contains fixed instructions.<br>D: False – ROM is non-volatile memory."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following statements is true about computers?",
        opts: ["1. The quality of the pictures taken by a digital camera depends on its resolution, which is measured in megabytes", "2. USB stands for Universal Secure Bus", "3. Microsoft Excel is an example of system software", "4. The size of a computer monitor is measured diagonally across the screen"],
        ans: 3,
        exp: "<b>4. The size of a computer monitor is measured diagonally across the screen</b><br>The quality of pictures taken by a digital camera depends on its resolution, which is measured in megapixels (not megabytes).<br>USB stands for Universal Serial Bus, not Universal Secure Bus.<br>Microsoft Excel is an example of application software, not system software."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following pair of acronyms and their expansion is incorrectly matched?",
        opts: ["1. ROM-Read Only Memory", "2. WAN-Wide Area Network", "3. OMR - Optical Mark Reader", "4. USB-Universal Secure Bus"],
        ans: 3,
        exp: "<b>4. USB-Universal Secure Bus</b><br>USB stands for Universal Serial Bus."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>A keylogger, short for Keystroke logger, is a type of cyber threat. Keyloggers are a form of ________.",
        opts: ["1. Worm", "2. Trojan Horse", "3. Virus", "4. Spyware"],
        ans: 3,
        exp: "<b>4. Spyware</b><br>A Keylogger is an insidious form of spyware. Keyloggers are activity-monitoring software programs that give hackers access to your personal data – the passwords and credit card numbers you type, the webpages you visit – all by logging your keyboard strokes."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>In cyber world, Black Hat Hackers are individuals with extra-ordinary computing skills who use these skills with malicious intent. In this context, identify the correct order for a successful black hat operation.<br><br>A. Scanning<br>B. Reconnaissance<br>C. Gaining Access<br>D. Covering Tracks<br>E. Maintaining Access<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, C, E, D", "2. B, A, C, E, D", "3. C, D, B, A, E", "4. D, C, A, E, B"],
        ans: 1,
        exp: "<b>2. B, A, C, E, D</b><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>Step</th><th>Description</th></tr><tr><td>Reconnaissance</td><td>The hacker discovers vulnerabilities in computer systems and software</td></tr><tr><td>Scanning</td><td>The hacker scans for vulnerabilities</td></tr><tr><td>Gaining access</td><td>The hacker exploits the vulnerabilities to gain access to the system</td></tr><tr><td>Maintaining access</td><td>The hacker maintains access to the system</td></tr><tr><td>Covering tracks</td><td>The hacker covers their tracks</td></tr></table>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following software titles are examples of system software?<br><br>A. Ubuntu<br>B. Google Docs<br>C. MS-Office 365<br>D. Android<br>E. Chrome OS<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, D and E only", "2. B and C only", "3. A, D and E only", "4. C, D and E only"],
        ans: 2,
        exp: "<b>3. A, D and E only</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the List-I with List-II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (Unit of Data Capacity)</th><th>LIST II (Approximate Size)</th></tr><tr><td>A. Kilobyte</td><td>I. 8 billion bits</td></tr><tr><td>B. Gigabyte</td><td>II. 8 million bits</td></tr><tr><td>C. Terabyte</td><td>III. 8 thousands bits</td></tr><tr><td>D. Megabyte</td><td>IV. 8 trillion bits</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-III, B-I, C-IV, D-II", "2. A-IV, B-II, C-I, D-III", "3. A-III, B-IV, C-I, D-II", "4. A-I, B-III, C-II, D-IV"],
        ans: 0,
        exp: "<b>1. A-III, B-I, C-IV, D-II</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>In the context of Computer Networks, which of the following best describes the transmission of a message using packet switching?",
        opts: ["1. Data packets may follow different routes and may arrive at different times in different order.", "2. Data packets will always follow the same route and arrive at the same time in the same order", "3. Data packets will always follow the same route but could arrive at different times in different order", "4. Data packets may follow different routes but will always arrive at the same time in the same order"],
        ans: 0,
        exp: "<b>1. Data packets may follow different routes and may arrive at different times in different order.</b><br>In packet switching, data is broken down into packets that can travel independently across the network. These packets may take different paths to reach the destination, leading to variations in arrival times and potentially arriving in a different order than they were sent. This is a fundamental aspect of how packet-switched networks operate, allowing efficient and flexible data transmission."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (Description)</th><th>LIST II (Appropriate)</th></tr><tr><td>A. A storage medium that stores data on the Internet</td><td>I. RAM</td></tr><tr><td>B. Internal storage where the current instructions are stored</td><td>II. Cloud Storage</td></tr><tr><td>C. A solid-state storage that is used in digital cameras</td><td>III. Blu-ray Disc</td></tr><tr><td>D. An optical storage medium that stores high definition (HD) movies</td><td>IV. Flash Memory</td></tr></table>",
        opts: ["1. A-II, B-IV, C-I, D-III", "2. A-III, B-IV, C-I, D-II", "3. A-II, B-I, C-IV, D-III", "4. A-I, B-II, C-III, D-IV"],
        ans: 2,
        exp: "<b>3. A-II, B-I, C-IV, D-III</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>What is the contribution of Douglas Engelbart in the evolution of computer?",
        opts: ["1. Developed the first mouse", "2. Developed the first Operating System (OS)", "3. Developed the first Vacuum Tube", "4. Developed the World Wide Web (WWW)"],
        ans: 0,
        exp: "<b>1. Developed the first mouse</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following are associated with heavy use of Internet?<br><br>A. Internet addiction<br>B. Depression<br>C. Distraction<br>D. Atomization<br>E. Media Literacy<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, C, D Only", "2. B, C, D, E Only", "3. A, B, E Only", "4. A, B, C, E Only"],
        ans: 0,
        exp: "<b>1. A, B, C, D Only</b><br>A. Internet addiction: Heavy use of the Internet can lead to addiction.<br>B. Depression: There is a correlation between heavy Internet use and depression.<br>C. Distraction: Heavy Internet use often leads to distraction from other tasks.<br>D. Atomization: The fragmentation of social interactions and relationships due to heavy Internet use, a negative consequence.<br>E. Media Literacy: While important, it does not imply negative consequences associated with heavy Internet use."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Identify the sequence of words A-E that correctly fills the blanks in the following paragraph on computer networking:<br><br>IPv4 addresses are _____ long, and IPv6 addresses are _____ long. The MAC address on the other hand, is _____ long. A MAC address is oriented - towards _____, whereas IP address is oriented - towards _____<br><br>A. 128-bit<br>B. 32-bit<br>C. Software<br>D. hardware<br>E. 48-bit<br><br>Choose the correct answer from the options given below:",
        opts: ["1. B, E, A, D, C", "2. B, A, E, D, C", "3. E, B, A, C, D", "4. A, B, E, D, C"],
        ans: 1,
        exp: "<b>2. B, A, E, D, C</b><br>IPv4 = 32-bit; IPv6 = 128-bit; MAC address = 48-bit. A MAC address is oriented towards hardware, whereas an IP address is oriented towards software."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>With reference to the computers, which of the following statements are correct?<br><br>A. CPU follows fetch-decode-execute-store cycle to run instructions.<br>B. Intel and AMD are two manufactures of CPUs<br>C. The clock speed of a CPU is usually measured in Megabytes<br>D. Fans are required to cool down most CPUs so that they do not overheat<br>E. CPU is the brain of the computers and modern CPUs cannot have multiple processing cores.<br><br>Choose the correct answer from the options given below:",
        opts: ["1. A, B, C and D Only", "2. A and B Only", "3. C and D Only", "4. A, B and D Only"],
        ans: 3,
        exp: "<b>4. A, B and D Only</b><br>A: Correct. The CPU follows the fetch-decode-execute-store cycle.<br>B: Correct. Intel and AMD are well-known manufacturers of CPUs.<br>C: Incorrect. Clock speed is usually measured in gigahertz (GHz), not megabytes.<br>D: Correct. Fans are required to cool down most CPUs to prevent overheating.<br>E: Incorrect. Modern CPUs can have multiple processing cores (multi-core processors)."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (ICT Tools)</th><th>LIST II (Example)</th></tr><tr><td>A. Learning Management System (LMS)</td><td>I. Zoom</td></tr><tr><td>B. Virtual Reality</td><td>II. Canvas</td></tr><tr><td>C. Video Conferencing</td><td>III. Audacity</td></tr><tr><td>D. Podcast</td><td>IV. Virbela</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["1. A-IV, B-I, C-II, D-III", "2. A-I, B-III, C-IV, D-II", "3. A-II, B-IV, C-I, D-III", "4. A-III, B-II, C-I, D-IV"],
        ans: 2,
        exp: "<b>3. A-II, B-IV, C-I, D-III</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Based on the following, which of the following statements is true. A CD contains 12 music tracks which are of lengths (in minutes): 3, 7, 4, 3, 5, 6, 4, 5, 4, 7, 8, 8 and each minute of music requires 12 MB of storage.",
        opts: ["1. 512 MB of memory is used for the 12 music tracks.", "2. 1 GB of memory is used for the 12 music tracks.", "3. 768 MB of memory is used for the 12 music tracks.", "4. If the tracks are to be stored in MP3 format, then each music track will be reduced in size by 90%. The storage that the 12 tracks would require is 69.12 MB."],
        ans: 2,
        exp: "<b>3. 768 MB of memory is used for the 12 music tracks.</b><br>Total length of the tracks = 3+7+4+3+5+6+4+5+4+7+8+8 = 64 minutes. Total storage = 64 × 12 = 768 MB.<br>1. 512 MB is incorrect.<br>2. 1 GB = 1024 MB, but the required storage is 768 MB, so incorrect.<br>3. 768 MB is correct.<br>4. A 90% reduction means 10% of the original size: 768 × 0.1 = 76.8 MB, so the claim of 69.12 MB is incorrect."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>With reference to ICT, which of the following statements is true?",
        opts: ["1. Global Positioning Systems (GPSs) in cars send signals to satellite which then work out where they are and send this data back to the car.", "2. HTTP stands for HyperText Transfer policy.", "3. RAM stands for Rapid Access Menory.", "4. Geographic Information System (GIS) is a computer based tool for mapping and analysing things that exist and events that happen on earth."],
        ans: 3,
        exp: "<b>4. Geographic Information System (GIS) is a computer based tool for mapping and analysing things that exist and events that happen on earth.</b><br>GPS receivers in cars do not send signals to satellites; they receive signals from multiple GPS satellites to calculate their location.<br>HTTP stands for HyperText Transfer Protocol, not policy.<br>RAM stands for Random Access Memory, not Rapid Access Memory.<br>GIS is a tool used for mapping and analyzing spatial and geographical data."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>In computer Networking, MAC addresses are unique to each device. Which of the following is the meaning of the term MAC?",
        opts: ["1. Medium Access Card", "2. Media Address Command", "3. Modem Addressing Card", "4. Media Access Control"],
        ans: 3,
        exp: "<b>4. Media Access Control</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match the lists:<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>LIST I (Computer Components)</th><th>LIST II (Description)</th></tr><tr><td>A. ALU</td><td>I. Immediate access storage</td></tr><tr><td>B. Control Unit</td><td>II. Carries out arithmetical and logical calculations</td></tr><tr><td>C. Pen Drive</td><td>III. Directs the input and output flow in the CPU</td></tr><tr><td>D. Main Memory</td><td>IV. Secondary offline storage</td></tr></table>",
        opts: ["1. A-II, B-III, C-IV, D-I", "2. A-II, B-I, C-IV, D-III", "3. A-I, B-III, C-IV, D-II", "4. A-IV, B-III, C-II, D-I"],
        ans: 0,
        exp: "<b>1. A-II, B-III, C-IV, D-I</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Which of the following electronic technologies is the key technology for making the Personal Computer (PC) in the 1970s ?",
        opts: ["(1) Transistor based", "(2) Integrated components (ICs) based", "(3) Microprocessor based", "(4) Vacuum tube based"],
        ans: 2,
        exp: "<b>(3) Microprocessor based</b><br>The invention of the microprocessor, starting with Intel's 4004 in 1971, was the key technological development that enabled the creation of personal computers. Microprocessors integrated the functions of a computer's CPU on a single chip, making computers smaller, more affordable, and accessible for personal use."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Computer security breaches can be minimized by incorporating which feature into a computer system's operation?",
        opts: ["(1) Installation of software of user's choice", "(2) The ability to log into multiple nodes, using only one account", "(3) Forced log off from the system if no activity has been detected", "(4) Allowing the uploading and downloading of files to the system"],
        ans: 2,
        exp: "<b>(3) Forced log off from the system if no activity has been detected</b><br>Forced log off due to inactivity helps prevent unauthorized access when users forget to log off or leave their computers unattended.<br>(1) Installing software of the user's choice can increase risk (unverified or malicious software).<br>(2) Logging into multiple nodes with one account is more vulnerable if the account is compromised.<br>(4) Allowing uploading and downloading of files could introduce malware."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Identify the sequence of words A-E that correctly fills the blanks in the following paragraph:<br><br>_____ is used to connect the smartwatch and wireless headphone to the phone and is a _____ range wireless technology. _____ is used to connect the phone and the laptop to the outside world called the \"Internet\" and it uses radio waves to allow high-speed data transfer over short distances. _____ is used to connect the phone to countless services via the \"Internet\" and is _____ range wireless technology.<br><br>(A) Short<br>(B) Long<br>(C) Wifi<br>(D) 3G/4G/5G<br>(E) Bluetooth<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (E), (A), (C), (D), (B)", "(2) (B), (A), (C), (D), (E)", "(3) (A), (E), (B), (C), (D)", "(4) (E), (C), (A), (B), (D)"],
        ans: 0,
        exp: "<b>(1) (E), (A), (C), (D), (B)</b><br>"
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>With reference to computer components, which of the following statements are correct?<br><br>(A) A hard drive has no moving parts.<br>(B) Fan is required to cool down CPUs so that these do not overheat.<br>(C) Accessing information in a hard drive is faster than accessing information stored in RAM.<br>(D) When power is switched off, any information stored in a hard drive is lost.<br>(E) For a given amount of memory, RAM is more expensive than a hard drive.<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A), (B) and (E) only", "(2) (C) and (D) only", "(3) (C), (D) and (E) only", "(4) (B) and (E) only"],
        ans: 3,
        exp: "<b>(4) (B) and (E) only</b><br>(A) Incorrect. Traditional hard drives (HDDs) have moving parts (spinning disks and a read/write head); only SSDs have no moving parts.<br>(B) Correct. Fans are essential to prevent CPUs from overheating.<br>(C) Incorrect. RAM is much faster than a hard drive.<br>(D) Incorrect. Hard drives are non-volatile; data is retained when power is off.<br>(E) Correct. RAM is significantly more expensive per GB than a hard drive."
    },
    {
        q: "<b>[RENET 2024 – September 2024]</b><br>Match List I with List II<br><br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><th>List - I (Computer Components)</th><th>List - II (Meaning)</th></tr><tr><td>(A) RAM</td><td>(I) Brain of the computer</td></tr><tr><td>(B) ROM</td><td>(II) Stores the date, time and system configuration for BIOS</td></tr><tr><td>(C) CMOS</td><td>(III) Memory that can be written to and read from</td></tr><tr><td>(D) CPU</td><td>(IV) Stores 'boot up' program</td></tr></table>",
        opts: ["1. A-II, B-IV, C-I, D-III", "2. A-III, B-IV, C-I, D-II", "3. A-II, B-I, C-IV, D-III", "4. A-III, B-IV, C-II, D-I"],
        ans: 3,
        exp: "<b>4. A-III, B-IV, C-II, D-I</b><br>RAM – memory that can be written to and read from; ROM – stores the 'boot up' program; CMOS – stores date, time and system configuration for BIOS; CPU – brain of the computer."
    }
];