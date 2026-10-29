var rawQuestions = [
    {
        q: "<b>Dec 2018</b><br>The computer software that runs a computer, including scheduling tasks, managing storage and handling communication with peripherals is called:",
        opts: ["(A) Operating system", "(B) Bluetooth technology", "(C) Device driver", "(D) Application suite"],
        ans: 0,
        exp: "<b>(A) Operating system</b><br>An operating system acts as an interface between the software and the different parts of the computer hardware and manages all the resources of the computer. It lies in the category of system software. An Operating System (OS) is a collection of software that manages computer hardware resources and provides common services for computer programs.<br><br>Parts of an OS: the Shell is the outermost layer that handles user interaction (prompting the user for input, interpreting it for the OS and handling the output). The Kernel is the heart and core of the OS; it is the primary interface between the OS and the hardware, controls devices, networking, file systems, and process and memory management, is loaded first and remains in memory until shutdown."
    },
    {
        q: "<b>Dec 2018</b><br>Which of the following are operating systems?<br>(a) UNIX<br>(b) Ubuntu<br>(c) Mac<br>(d) Ada<br>Code:",
        opts: ["(A) Only (a), (c) and (d)", "(B) Only (a) and (c)", "(C) Only (b) and (d)", "(D) Only (a), (b) and (c)"],
        ans: 3,
        exp: "<b>(D) Only (a), (b) and (c)</b><br>UNIX, Ubuntu (a Linux distribution) and Mac (macOS) are operating systems. Ada is a programming language."
    },
    {
        q: "<b>Dec 2018</b><br>In computer terminology, which of the following best describes a device driver?",
        opts: ["A. Software that allows the user to control the operating system.", "B. Hardware that allows the user to control the operating system.", "C. Software that allows interaction between peripheral devices and the operating system.", "D. Hardware that allows interaction between peripheral devices and the operating, system."],
        ans: 2,
        exp: "<b>C. Software that allows interaction between peripheral devices and the operating system.</b><br>A device driver is a specific type of software application that controls a specific hardware device and enables different hardware devices to communicate with the computer's Operating System. It is a software interface that manages the communication with, and control of, a specific device or type of device. Its task is to convert the logical requests from the user into specific commands directed to the device itself."
    },
    {
        q: "<b>June 2019</b><br>Select the true statement about an operating system (OS)?",
        opts: ["A. An OS controls peripheral, allocates memory and organizes data into fields and records.", "B. An OS provides protection against viruses and controls peripherals.", "C. An OS controls peripheral, and allocates memory and processor time.", "D. An OS controls the processor and peripherals and allows the user to connect to the internet."],
        ans: 2,
        exp: "<b>C. An OS controls peripheral, and allocates memory and processor time.</b><br>Functions of an OS include resource management (memory, CPU time and other hardware resources), process management, memory management, security, job accounting, file management, device management, networking, backup and recovery, performance monitoring and virtualization. Organizing data into fields and records is done by a database, and virus protection and internet connection are not core OS functions."
    },
    {
        q: "<b>June 2019</b><br>You need to use automatic calculations in preparing a budget. Which software application should be used?",
        opts: ["(A) Spreadsheet", "(B) Presentation", "(C) Word processing", "(D) Desktop publishing"],
        ans: 0,
        exp: "<b>(A) Spreadsheet</b><br>A spreadsheet is application software designed for automatic calculations using formulas, making it suitable for preparing a budget.<br><br>Application software performs special functions beyond the basic operation of the computer and is designed to perform a specific task for end-users. System software directly operates the computer hardware, provides basic functionality to users and other software, and acts as an interface between hardware and user applications."
    },
    {
        q: "<b>Nov 2020</b><br>Which of the following is NOT a system software?",
        opts: ["(A) Compiler", "(B) Operating System", "(C) Application Software", "(D) Editor"],
        ans: 2,
        exp: "<b>(C) Application Software</b><br>Compiler, Operating System and Editor (a language-processing/utility tool) are system software. Application software is a separate category designed to fulfil specific end-user requirements."
    },
    {
        q: "<b>Nov 2020</b><br>Match List I with List II : List I consists components of computer system and List II is the examples<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I</b></td><td><b>List II</b></td></tr><tr><td>a. Output Device</td><td>(I) Operating system</td></tr><tr><td>b. System Software</td><td>(II) Printer</td></tr><tr><td>c. Storage Device</td><td>(III) MS-office</td></tr><tr><td>d. Application software</td><td>(IV) RAM</td></tr></table><br>Choose the correct answer from the options given below :",
        opts: ["(1) (a)-(I), (b)-(II), (c)-(IV), (d)-(III)", "(2) (a)-(IV), (b)-(III), (c)-(II), (d)-(I)", "(3) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)", "(4) (a)-(III), (b)-(I), (c)-(II), (d)-(IV)"],
        ans: 2,
        exp: "<b>(3) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)</b><br>Printer is an output device, Operating system is system software, RAM is a storage (memory) device, and MS-Office is application software."
    },
    {
        q: "<b>Nov 2020</b><br>Given below are two statements<br>Statement I: Operating systems are hardware<br>Statement II: Algorithm is a step-by-step procedure to solve a problem<br>In light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are true", "(B) Both Statement I and Statement II are false", "(C) Statement I is correct, but Statement II is false", "(D) Statement I is incorrect, but Statement II is true"],
        ans: 3,
        exp: "<b>(D) Statement I is incorrect, but Statement II is true</b><br>An operating system is system software, not hardware, so Statement I is incorrect. An algorithm is a step-by-step procedure to solve a problem, so Statement II is true."
    },
    {
        q: "<b>Nov 2020</b><br>Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I</b></td><td><b>List II</b></td></tr><tr><td>a. Programming Language</td><td>i. Wide Area Network</td></tr><tr><td>b. Operating System</td><td>ii. MS PowerPoint</td></tr><tr><td>c. Internet</td><td>iii. Windows XP</td></tr><tr><td>d. Application Software</td><td>iv. C++</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) a - i, b - ii, c - iii, d - iv", "(B) a - iv, b - iii, c - i, d - ii", "(C) a - iv, b - ii, c - iii, d - i", "(D) a - ii, b - iii, c - i, d - iv"],
        ans: 1,
        exp: "<b>(B) a - iv, b - iii, c - i, d - ii</b><br>C++ is a programming language, Windows XP is an operating system, the Internet is a Wide Area Network, and MS PowerPoint is application software."
    },
    {
        q: "<b>Nov 2021</b><br>Given below are two statements : One is labelled as Assertion (A) and the other is labelled as Reason (R).<br>Assertion (A) : Every general-purpose computer must have an Operating System (OS) installed on it.<br>Reasons (R) : Man, and Computer cannot communicate directly.<br>In the light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both (A) and (R) are true and (R) is the correct explanation of (A)", "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A)", "(C) (A) is true but (R) is false", "(D) (A) is false but (R) is true"],
        ans: 0,
        exp: "<b>(A) Both (A) and (R) are true and (R) is the correct explanation of (A)</b><br>The OS serves two basic purposes: it controls the allocation and use of the computing system's resources among the various users and tasks, and it provides an interface between the computer hardware and the programmer that simplifies the coding, creation and debugging of application programs. Humans communicate with computers through programs and data, and cannot communicate directly with the hardware; that is why an OS is needed."
    },
    {
        q: "<b>Nov 2021</b><br>A device driver is",
        opts: ["A. A port that connects a device and a system,", "B. A software that communicates with the operating system and translates data into a format understood by the device", "C. A software that performs disk compression", "D. A software that performs disk defragmentation"],
        ans: 1,
        exp: "<b>B. A software that communicates with the operating system and translates data into a format understood by the device</b><br>A device driver is a specific type of software application that controls a specific hardware device and enables it to communicate with the computer's Operating System. Its task is to convert the logical requests from the user into specific commands directed to the device itself."
    },
    {
        q: "<b>Nov 2021</b><br>What is a Utility program?",
        opts: ["A. It is a part of the operating system which carries out defragmentation or disk formatting", "B. It makes copies of files on another storage device", "C. It permits the sharing and exchange of data", "D. It translates data into a format understood by the device"],
        ans: 0,
        exp: "<b>A. It is a part of the operating system which carries out defragmentation or disk formatting</b><br>A utility program is a system application that executes a specific task, generally pertaining to optimal maintenance or operation of the system resources. Operating systems such as Windows, macOS and Linux come with their own utility programs, which also assist with the management of computer functions, resources and files."
    },
    {
        q: "<b>Nov 2021</b><br>Which Operating System is used by the Apple computer systems (an American technology company)",
        opts: ["(A) Linux", "(B) Mac", "(C) Solaris", "(D) Windows"],
        ans: 1,
        exp: "<b>(B) Mac</b><br>Apple computer systems use the Mac operating system (macOS)."
    },
    {
        q: "<b>Nov 2021</b><br>Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I</b></td><td><b>List II</b></td></tr><tr><td>A. System Software</td><td>I. Library Management System</td></tr><tr><td>B. Application Software</td><td>II. Firewall</td></tr><tr><td>C. Security Software</td><td>III. Compiler</td></tr><tr><td>D. Embedded Software</td><td>IV. Automatic fridge</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A -I , B -III , C -IV , D -II", "(B) A -II , B -IV , C -I , D -III", "(C) A -III , B -I , C -II , D -IV", "(D) A -III , B -IV , C -I , D -II"],
        ans: 2,
        exp: "<b>(C) A -III , B -I , C -II , D -IV</b><br>A compiler is system software, a Library Management System is application software, a firewall is security software, and an automatic fridge uses embedded software.<br><br>Embedded software is specialized programming in a chip or firmware in an embedded device that controls its functions. It controls the limited, set functions of hardware devices, doesn't generally need input, and is not typically worked with directly by users."
    },
    {
        q: "<b>Oct 2022</b><br>A software company requires 1 GB RAM minimum and 2 GB RAM recommended for its new Operating System (OS) software. The likely outcome of attempting to install this OS on a computer with 1 GB RAM would be that",
        opts: ["(A) files will fail to save", "(B) peripheral devices will fail to work", "(C) the OS will fail to install and therefore the computer will not run", "(D) the computer will not run at its optimum performance"],
        ans: 3,
        exp: "<b>(D) the computer will not run at its optimum performance</b><br>1 GB is the minimum required, so the OS can be installed, but the recommended 2 GB is what the company suggests for optimal performance. With only the minimum RAM, the system will likely run slowly with degraded performance due to insufficient resources."
    },
    {
        q: "<b>Oct 2022</b><br>Which of the following are broad functions of an Operating System in computers?<br>(a) Handling of files and folders<br>(b) Converting from high-level language to low-level language<br>(c) Interfacing between user and hardware<br>(d) Helping to run application software<br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (c) and (d) only", "(B) (b), (c) and (d) only", "(C) (a) and (c) only", "(D) (a), (b), (c) and (d)"],
        ans: 0,
        exp: "<b>(A) (a), (c) and (d) only</b><br>Converting a high-level language to a low-level language is done by a compiler/translator, not the OS.<br><br>Functions of an Operating System: Resource Management, Process Management, Memory Management, Security, Job Accounting, File Management, Device Management, Networking, User Interface, Backup and Recovery, Virtualization, Performance Monitoring, Time-Sharing, System Calls, Error-detecting Aids."
    },
    {
        q: "<b>Oct 2022</b><br>Which two of the following tasks are carried out by all operating systems?<br>(a) Repairing mouse<br>(b) Data logging<br>(c) Managing system resources including memory<br>(d) Transferring data to printer<br>(e) Drawing image<br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) and (d) only", "(B) (b) and (c) only", "(C) (c) and (d) only", "(D) (c) and (e) only"],
        ans: 2,
        exp: "<b>(C) (c) and (d) only</b><br>Every OS manages system resources including memory (resource and memory management) and handles transfer of data to peripheral devices such as a printer (device management). Repairing a mouse, data logging and drawing images are not functions carried out by all operating systems."
    },
    {
        q: "<b>March 2023</b><br>Given below are two statements:<br>Statement (I): One always uses CD-ROMs to save data.<br>Statement (II): A computer has 2048 MB of RAM. That means computer has 1.2 GB of RAM.<br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true"],
        ans: 1,
        exp: "<b>(B) Both Statement (I) and Statement (II) are false.</b><br>Statement I is false: CD-ROMs are read-only, and data is not always saved on CD-ROMs (other media such as hard disks and flash drives are used). Statement II is false: 2048 MB equals 2 GB, not 1.2 GB."
    },
    {
        q: "<b>June 2023</b><br>Which of the following are functions of an operating system?<br>(a) Checking spellings in a document<br>(b) Managing the processes that run on the system<br>(c) Providing an user interface to the user<br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) and (b) only", "(B) (a) and (c) only", "(C) (b) and (c) only", "(D) (a), (b) and (c) only"],
        ans: 2,
        exp: "<b>(C) (b) and (c) only</b><br>Process management and providing a user interface are functions of an OS. Checking spellings in a document is done by application software such as a word processor."
    },
    {
        q: "<b>DEC 2023</b><br>Which of the following statements is/are true?<br>(A) BIOS is an example of Application Software<br>(B) A utility software is an example of firmware<br>(C) Spyware is an example of malware<br>Choose the correct answer from the options given below :",
        opts: ["(1) (A) Only", "(2) (B) Only", "(3) (C) Only", "(4) (B) and (C) Only"],
        ans: 2,
        exp: "<b>(3) (C) Only</b><br>Spyware is a type of malware. BIOS is firmware, not application software, and utility software is system software, not firmware.<br><br>BIOS stands for Basic Input/Output System. It is the first program to run when the computer starts, is a ROM (EEPROM) chip found on the motherboard, and is used for hardware initialization during booting. It checks that all components are in place and working, then loads the operating system into RAM from the hard disk. BIOS firmware is now stored in flash memory so it can be rewritten; the latest advancement is UEFI (Unified Extensible Firmware Interface)."
    }
];