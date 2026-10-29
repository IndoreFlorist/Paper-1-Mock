var rawQuestions = [
    {
        q: "<b>Sept 2022</b><br>Which of the following statements are correct?<br><br>Principal components of a CPU in a computer include:<br>a) The Solid-State Drive (SSD) that stores data persistently, typically using flash memory.<br>b) The Arithmetic-Logic Unit (ALU) that performs arithmetic and logic operations.<br>c) Processor registers that supply operands to the ALU and stores the results of ALU operation.<br>d) The Control Unit (CU) that orchestrates the fetching (from memory), decoding and execution of instructions.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (b), (c) and (d) only", "(C) (b) and (c) only", "(D) (a) and (d) only"],
        ans: 1,
        exp: "<b>(B) (b), (c) and (d) only</b><br>The principal components of the CPU are the ALU, the Control Unit (CU) and processor registers (internal memory). An SSD is secondary storage, not a part of the CPU, so statement (a) is wrong."
    },
    {
        q: "<b>Sept 2022</b><br>Which of the following are the principal components of the CPU of a computer system?<br><br>(a) ALU (Arithmetic-Logic Unit)<br>(b) CU (Control Unit)<br>(c) Processor Registers<br>(d) SSD (Solid-State Drive)<br>(e) VRAM (Video RAM)<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (d) only", "(B) (a), (b) and (c) only", "(C) (c), (d) and (e) only", "(D) (b), (c) and (d) only"],
        ans: 1,
        exp: "<b>(B) (a), (b) and (c) only</b><br>The CPU consists of the ALU, the Control Unit and processor registers (internal memory). SSD is secondary storage and VRAM is video memory; neither is part of the CPU."
    },
    {
        q: "<b>Sept 2022</b><br>Computers have evolved from the early mainframes to the relatively small smart devices with high computing power used today. Which of the following inventions contributed to reduce the physical size of computers?",
        opts: ["(A) Vacuum tube", "(B) Integrated circuits", "(C) Registers", "(D) Solid state memory"],
        ans: 1,
        exp: "<b>(B) Integrated circuits</b><br>The Integrated Circuit (IC) was introduced with the Third Generation of computers. These were the first steps toward computers as we know them today. Their main feature was the use of integrated circuits, which allowed them to be shrunk down to be as small as large toasters. An IC is manufactured using silicon material and mounted in a ceramic or plastic container (known as a chip). The basic components of an IC consist of electronic circuits for the digital gates."
    },
    {
        q: "<b>March 2023</b><br>The computer uses a bootstrap. Which of the following shows the part of a computer of which the bootstrap is an example?",
        opts: ["(A) application software", "(B) firmware", "(C) hard disk drive", "(D) IP address"],
        ans: 1,
        exp: "<b>(B) firmware</b><br>In computing, the term bootstrap means to boot or to load a program into a computer using a much smaller initial program to load in the desired program, which is usually an OS. For any device (computer, printer, scanner, digital camera, etc.) to start running, it should have an initial program to run when it is powered up/booted. This initial program is called firmware. It is also called the bootstrap program or BIOS."
    },
    {
        q: "<b>March 2023</b><br>In about 1945, who among the following developed the idea of a stored program computer?",
        opts: ["(A) John Von Neumann", "(B) Tim Berners Lee", "(C) Blaise Pascal", "(D) N.R. Narayana Murthy"],
        ans: 0,
        exp: "<b>(A) John Von Neumann</b><br>Modern computers are based on a stored-program concept introduced by John Von Neumann. In this concept, programs and data are stored in a separate storage unit called memory and are treated the same. It is also known as the ISA (Instruction Set Architecture) computer and has three basic units: Central Processing Unit (CPU), Main Memory Unit and Input/Output Device."
    },
    {
        q: "<b>Dec 2023</b><br>Identify the correct sequence of the following technologies A-D used in first generation to fourth generation of computers.<br><br>(A) Integrated circuits<br>(B) Microprocessors<br>(C) Transistors<br>(D) Vacuum Tubes<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (D) (C), (B), (A)", "(2) (D), (C), (A), (B)", "(3) (C), (D), (A),(B)", "(4) (B), (A), (C), (D)"],
        ans: 1,
        exp: "<b>(2) (D), (C), (A), (B)</b><br>First Generation (1940-1956): Vacuum tubes. Second Generation (1956-1963): Transistors. Third Generation (1964-1971): Integrated Circuits (IC), introduction of operating systems. Fourth Generation (1971-1980): Microprocessors (VLSI), concept of internet introduced. Fifth Generation (1980-present): ULSI technology."
    }
];