var rawQuestions = [
    {
        q: "<b>June 2014</b><br>When a computer is booting, BIOS is loaded to the memory by",
        opts: ["(A) RAM", "(B) ROM", "(C) CD-ROM", "(D) TCP"],
        ans: 1,
        exp: "<b>(B) ROM</b><br>Cold booting refers to starting up a computer for the first time or after it has been completely shut down. When the power button is pressed, the computer reads the Basic Input/Output System (BIOS) instructions stored in the ROM. These instructions guide the system in loading the operating system into the main memory.<br><br>Warm booting (rebooting) occurs when a computer restarts while powered on, e.g. via a reset button or Ctrl+Alt+Del. When two operating systems are installed on a computer, it is called dual booting."
    },
    {
        q: "<b>August 2016</b><br>Random Access Memory (RAM), a form of computer storage, is a ______ memory.",
        opts: ["(A) Non-volatile", "(B) Volatile", "(C) Permanent", "(D) Secondary"],
        ans: 1,
        exp: "<b>(B) Volatile</b><br>RAM is a volatile memory: data is present only as long as the computer is ON and is erased when the computer is turned OFF. It is part of the main (primary) memory, also known as Read Write Memory, is present on the motherboard, supports both read and write, and is expensive since memory can be accessed directly.<br><br>Types of RAM: SRAM and DRAM. Types of DRAM: SDRAM (Synchronous DRAM), DDR SDRAM (Double Data Rate, double the speed of SDRAM), ECC DRAM (Error Correcting Code, can find and sometimes fix corrupted data), RDRAM (Rambus DRAM), and DDR2, DDR3, DDR4 (successors of DDR SDRAM)."
    },
    {
        q: "<b>Jan 2017</b><br>Which of the following correctly lists computer memory types from highest to lowest speed?",
        opts: ["A. Secondary Storage; Main Memory (RAM); Cache Memory; CPU Registers", "B. CPU Registers; Cache Memory; Secondary Storage; Main Memory (RAM)", "C. CPU Registers; Cache Memory; Main Memory (RAM); Secondary Storage", "D. Cache Memory; CPU Registers; Main Memory (RAM); Secondary Storage"],
        ans: 2,
        exp: "<b>C. CPU Registers; Cache Memory; Main Memory (RAM); Secondary Storage</b><br>In the memory hierarchy, going from Registers to Cache (SRAM: L1, L2, L3) to Main Memory (DRAM) to Flash/USB, Solid State, Magnetic Disk (Hard Disk), Optical Disk and Magnetic Tape, capacity and access time increase and cost per bit decreases. Hence speed is highest for registers and lowest for secondary storage."
    },
    {
        q: "<b>July 2018</b><br>With regard to computer memory, which of the following statement (s) is/are TRUE?<br><br>P: Read Only Memory (ROM) is ‘volatile’ memory.<br>Q: Random Access Memory (RAM) is ‘volatile’ memory.<br>R: Secondary Memory is ‘volatile’ memory.",
        opts: ["(1) P only", "(2) Q only", "(3) P and Q only", "(4) P and R only"],
        ans: 1,
        exp: "<b>(2) Q only</b><br>RAM is volatile. ROM and secondary memory are non-volatile.<br><br>Volatile memory keeps its content only while the system is on; it stores data temporarily, is faster, supports both read and write, is expensive per unit size (best example: RAM). Non-volatile memory keeps data even when powered off, stores data permanently, is slower, is cheaper per unit size (best example: ROM).<br>Volatile: Registers, Cache (SRAM), Main Memory (DRAM). Non-volatile: ROM, Flash/USB, Solid State, Magnetic Disk, Hard Disk, Optical Disk, Magnetic Tape."
    },
    {
        q: "<b>July 2018</b><br>A new Laptop has been produced that weighs less, is smaller and uses less power previous Laptop models. Which of the following technologies has been used to accomplish this?",
        opts: ["(1) Universal Serial Bus Mouse", "(2) Faster Random Access Memory", "(3) Blu Ray Drive", "(4) Solid State Hard Drive"],
        ans: 3,
        exp: "<b>(4) Solid State Hard Drive</b><br>SSD (Solid State Drive) has no mechanical parts (only electronic parts like ICs), is lighter in weight, more compact in size, has shorter read/write time, lower latency, more I/O operations per second, random access data transfer, no noise and is more reliable. HDD has moving mechanical parts, is heavier and larger, and is cheaper per unit storage. SSDs are suitable for fast data retrieval and for laptops or desktops because of low power consumption and size.<br><br>NVMe (Non-Volatile Memory Express), introduced in 2013, is the fastest drive type; it is flash storage with no moving parts, connected directly to the motherboard via PCI Express."
    },
    {
        q: "<b>June 2019</b><br>Which statement is true about Random Access Memory (RAM) in a computer system?",
        opts: ["A. RAM is non-volatile and the amount of RAM in a computer system cannot affect its performance", "B. RAM is non-volatile and the amount of RAM in a computer system can affect its performance", "C. RAM is volatile and the amount of RAM in a computer cannot affect its performance", "D. RAM is volatile and the amount of RAM in a computer system can affect its performance"],
        ans: 3,
        exp: "<b>D. RAM is volatile and the amount of RAM in a computer system can affect its performance</b><br>RAM is volatile (data is lost when power is switched off). Volatile memory affects the performance of the computer system, since RAM stores the data of operations currently being performed by the CPU."
    },
    {
        q: "<b>June 2019</b><br>Which of the following storage devices stores maximum amount of data?",
        opts: ["(a) Compact disc", "(b) Floppy disc", "(c) Hard disc", "(d) Magnetic optic disc"],
        ans: 2,
        exp: "<b>(c) Hard disc</b><br>Storage capacities: Hard Disk: max 32 TB; Solid State Disk: max 100 TB; Floppy Disk: 1.44 MB; Magnetic Tape: max 16 TB; Magnetic optic disc: 128 MB to 2.3 GB; CD: 700 MB; DVD: 4.7 GB - 17 GB; Blu-ray disk: 25 GB - 50 GB. Among the given options, the hard disc stores the most data."
    },
    {
        q: "<b>Dec 2019</b><br>Select the option that contains only optical storage media",
        opts: ["(A) USB memory stick, Blu-Ray disk, CD-ROM, DVD", "(B) DVD, CD-ROM, USB memory stick, CD-RW", "(C) Hard disk, USB memory stick, CD-ROM, DVD", "(D) DVD, CD-R, Blu-Ray Disk, CD-RW"],
        ans: 3,
        exp: "<b>(D) DVD, CD-R, Blu-Ray Disk, CD-RW</b><br>Optical storage devices include Blu-ray disc, CD-ROM, CD-R, CD-RW and DVD. USB memory stick is flash memory and hard disk is a magnetic storage device.<br><br>Types of storage devices: Magnetic (floppy diskette, hard drive, magnetic strip, Super Disk, tape cassette, Zip diskette); Optical (Blu-ray disc, CD-ROM, CD-R, CD-RW); Flash memory (USB flash drive, Compact flash, memory card, NVMe, SD card, SSD, Sony Memory Stick); Online cloud storage (cloud storage, network media)."
    },
    {
        q: "<b>Nov 2020</b><br>Identify the correct order of following different types of storage/memory components in a computer on the basis of price per bytes of storage from most expensive to least expensive:<br><br>(i) DDR4RAM<br>(ii) HDD<br>(iii) SSD<br>(iv) CPU Cache<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (i), (iv). (iii), (ii)", "(B) (iv), (i), (iii), (ii)", "(C) (i), (ii), (iii), (iv)", "(D) (iv), (i), (ii), (iii)"],
        ans: 1,
        exp: "<b>(B) (iv), (i), (iii), (ii)</b><br>In the memory hierarchy, cost per bit increases as we move up: Registers and Cache (SRAM) are the most expensive, then Main Memory (DRAM, e.g. DDR4 RAM), then Flash/Solid State memory (SSD), then Magnetic Disk (HDD), which is the cheapest of these."
    },
    {
        q: "<b>Nov 2021</b><br>Given below are two statements regarding the Hard Disk Drive (HDD)<br>Statement I: HDD use circular platters coated in magnetic material.<br>Statement II: Access to data is faster than with RAM<br>In light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statement I and Statement II are false", "(B) Both Statement I and Statement II are true", "(C) Statement I is false but Statement II is true", "(D) Statement I is true but Statement II is false"],
        ans: 3,
        exp: "<b>(D) Statement I is true but Statement II is false</b><br>HDDs use circular platters coated in magnetic material (Statement I is true). Data access in an HDD is much slower than in RAM (Statement II is false), because RAM is a primary, volatile memory with much shorter access time."
    },
    {
        q: "<b>Nov 2021</b><br>Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>List I (Memory devices)</b></td><td><b>List II (Memory Type)</b></td></tr><tr><td>A. pen drive</td><td>I. Optical memory</td></tr><tr><td>B. Hard drive</td><td>II. Flash memory</td></tr><tr><td>C. CD ROM</td><td>III. Magnetic memory</td></tr><tr><td>D. RAM</td><td>IV. Volatile Memory</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A -II , B -III , C -I , D -IV", "(B) A -II , B -III , C -IV , D -I", "(C) A -III , B -II , C -I , D -IV", "(D) A -IV , B -III , C -II , D -I"],
        ans: 0,
        exp: "<b>(A) A -II , B -III , C -I , D -IV</b><br>Pen drive is flash memory, Hard drive is magnetic memory, CD ROM is optical memory, and RAM is volatile memory."
    },
    {
        q: "<b>March 2023</b><br>Match List I with List II<br><table border=\"1\" cellpadding=\"4\" style=\"border-collapse:collapse;\"><tr><td><b>LIST I (Storage Device)</b></td><td><b>LIST II (Description)</b></td></tr><tr><td>(a) RAM</td><td>(I) Optical storage media that uses a single spiral track and uses dual layer technology, allowing high data storage capacity.</td></tr><tr><td>(b) ROM</td><td>(II) Optical storage media that uses concentric tracks allowing writing and reading to take place at the same time.</td></tr><tr><td>(c) DVD</td><td>(III) Non-volatile semiconductor memory; the contents cannot be changed.</td></tr><tr><td>(d) DVD – RAM</td><td>(IV) Volatile semiconductor memory; stores data and instructions the user is currently working on.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) – (IV), (b) – (III), (c) – (I), (d) – (II)", "(B) (a) – (I), (b) – (II), (c) – (III), (d) – (IV)", "(C) (a) – (III), (b) – (II), (c) – (I), (d) – (IV)", "(D) (a) – (II), (b) – (IV), (c) – (III) , (d) – (I)"],
        ans: 0,
        exp: "<b>(A) (a) – (IV), (b) – (III), (c) – (I), (d) – (II)</b><br>RAM is volatile semiconductor memory holding the data and instructions currently in use. ROM is non-volatile semiconductor memory whose contents cannot be changed. DVD is optical media using a single spiral track (with dual layer technology for high capacity). DVD-RAM uses concentric tracks, allowing writing and reading at the same time."
    },
    {
        q: "<b>March 2023</b><br>Given below are two statements, one is labelled as Assertion (A) and the other is labelled as Reason (R).<br>Assertion (A): Static RAM is typically used for PC's main memory while Dynamic RAM is used for CPU cache<br>Reason (R): Static RAM is faster and more expensive than Dynamic RAM.<br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both (A) and (R) are true and (R) is the correct explanation of (A).", "(B) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).", "(C) (A) is true but (R) is false.", "(D) (A) is false but (R) is true."],
        ans: 3,
        exp: "<b>(D) (A) is false but (R) is true.</b><br>Assertion (A) is false: Dynamic RAM (DRAM) is used for the PC's main memory, while Static RAM (SRAM) is used for CPU cache. Reason (R) is true: SRAM is faster and more expensive than DRAM."
    },
    {
        q: "<b>March 2023</b><br>Which of the following hardware components will lose data when the power to a computer is switched off?<br><br>(a) Processor Registers<br>(b) Cache Memory<br>(c) SSD<br>(d) RAM<br>(e) ROM<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (d) only", "(B) (a), (c) and (d) only", "(C) (a), (b) and (c) only", "(D) (a), (b) and (d) only"],
        ans: 3,
        exp: "<b>(D) (a), (b) and (d) only</b><br>Volatile memory: Registers, Cache Memory (SRAM, L1/L2/L3) and Main Memory (DRAM/RAM). Non-volatile memory: ROM, Flash/USB memory, Solid State memory (SSD), Magnetic Disk, Hard Disk, Optical Disk and Magnetic Tape."
    },
    {
        q: "<b>June 2023</b><br>Consider the following computer memory hierarchy diagram:<br>(Registers → Cache Memory (SRAM: Level 1, 2, 3) → Main Memory (DRAM) → Flash/USB Memory → Solid State Memory → Magnetic Disk (Hard Disk) → Optical Disk → Magnetic Tape)<br><br>As you travel down the memory hierarchy diagram shown above, then which of the following is true?",
        opts: ["(A) decreasing cost per bit and decreasing access time", "(B) increasing cost per bit and increasing access time", "(C) increasing cost per bit and decreasing access time", "(D) decreasing cost per bit and increasing access time"],
        ans: 3,
        exp: "<b>(D) decreasing cost per bit and increasing access time</b><br>Moving down the memory hierarchy (from registers towards magnetic tape), capacity and access time increase while cost per bit decreases."
    },
    {
        q: "<b>June 2023</b><br>Which of the following memory/storage devices are considered as offline storage?<br><br>(a) Hard disk drive (HDD)<br>(b) Blu-ray disk<br>(c) DVD/CD<br>(d) USB memory stick<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) and (c) only", "(B) (a), (c) and (d) only", "(C) (b), (c) and (d) only", "(D) (a), (b), (c) and (d)"],
        ans: 2,
        exp: "<b>(C) (b), (c) and (d) only</b><br>Offline storage is storage that must be physically connected or inserted into a computer system every time you want to use it. It is not built into the system. Blu-ray disks, DVD/CD and USB memory sticks are offline (removable) storage, whereas the internal hard disk drive is built into the system."
    },
    {
        q: "<b>June 2023</b><br>Given below are two statements:<br>Statement (I): Solid State Drives (SSDs) are considerably faster then Hard Disk Drives (HDDs) when it comes to data access.<br>Statement (II): RAM is much faster to write to or read from in caparison to secondary memory such as hard disk, but its main drawback is its volatility.<br>In the light of the above statements, choose the correct answer from the options given below.",
        opts: ["(A) Both Statement (I) and Statement (II) are true", "(B) Both Statement (I) and Statement (II) are false", "(C) Statement (I) is true but Statement (II) is false", "(D) Statement (I) is false but Statement (II) is true"],
        ans: 0,
        exp: "<b>(A) Both Statement (I) and Statement (II) are true</b><br>SSD data access speed is much higher than HDD (no moving parts, lower latency). RAM is much faster than secondary memory such as a hard disk, but it is volatile, losing its data when power is switched off."
    },
    {
        q: "<b>Dec 2023</b><br>In comparison to secondary computer storage, primary storage is :",
        opts: ["(1) Slower, more expensive per unit of storage and persistent", "(2) Faster, less expensive per unit of storage and persistent", "(3) Faster more expensive per unit of storage and not persistent", "(4) Faster, less expensive per unit of storage and not persistent"],
        ans: 2,
        exp: "<b>(3) Faster more expensive per unit of storage and not persistent</b><br>Primary storage (RAM) is volatile (not persistent), faster and more expensive per unit of storage than secondary storage (hard disk, SSD, optical disk, tape)."
    },
    {
        q: "<b>Dec 2023</b><br>A computer uses RAM and ROM to store data. Which of the following statements describing ROM is/are true?<br>A. It stores the programs and data that are currently in use<br>B. It is used to boot up the computer when power is turned on<br>C. Its contents are retained when power is turned off.<br><br>Choose the correct answer from the options given below",
        opts: ["1. A only", "2. B only", "3. A and B only", "4. B and C only"],
        ans: 3,
        exp: "<b>4. B and C only</b><br>ROM (Read Only Memory) is non-volatile (retains contents when power is lost), stores information permanently, is used only for reading, is cheaper than RAM, and stores the booting instructions of a computer (used in firmware and microcontrollers). Statement A describes RAM, which stores the immediate instructions and data required by the processor."
    },
    {
        q: "<b>Dec 2023</b><br>Which of the following computer memory types are volatile ?<br>(A) CMOS memory<br>(B) Cache memory<br>(C) Flash memory<br>(D) Hard disk<br>(E) RAM<br><br>Choose the correct answer from the options given below :",
        opts: ["(1) (A), (B) and (E) Only", "(2) (A), (C) and (D) Only", "(3) (B), (C) and (E) Only", "(4) (B) and (E) Only"],
        ans: 3,
        exp: "<b>(4) (B) and (E) Only</b><br>Cache memory (SRAM) and RAM are volatile. Flash memory and hard disk are non-volatile. CMOS is an onboard, battery-powered semiconductor chip that stores information such as system time/date and hardware settings; it is alternatively known as non-volatile RAM. The CMOS battery powers the CMOS RAM (which retains BIOS configuration settings) and the real-time clock (RTC)."
    }
];