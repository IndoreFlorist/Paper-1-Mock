var rawQuestions = [
    {
        q: "<b>June 2015</b><br>Which of the following represents one billion characters?",
        opts: ["(A) Terabyte", "(B) Kilobyte", "(C) Megabyte", "(D) Gigabyte"],
        ans: 3,
        exp: "<b>(D) Gigabyte</b><br>1 Byte = 1 alphanumeric character; 1 KB = about 1000 characters (or 1024 Bytes); 1 MB = about 1 million characters (or 1024 KB); 1 GB = about 1 billion characters (or 1024 MB); 1 TB = about 1 trillion characters (or 1024 GB)."
    },
    {
        q: "<b>Dec 2015</b><br>In a Computer a byte generally consists of:",
        opts: ["(A) 4 bits", "(B) 8 bits", "(C) 16 bits", "(D) 10 bits"],
        ans: 1,
        exp: "<b>(B) 8 bits</b><br>A bit stands for Binary Digit and stores just a 0 or 1. One byte = collection of 8 bits (e.g. 01011010). One byte can store one character, e.g. 'A' or 'x' or '$'."
    },
    {
        q: "<b>Aug 2016</b><br>If one GigaByte is equal to 2<sup>30</sup> Bytes of data storage, then 1024 TeraBytes is equal to _____ bits of data storage.",
        opts: ["(A) 2<sup>50</sup>", "(B) 2<sup>53</sup>", "(C) 2<sup>40</sup>", "(D) 2<sup>56</sup>"],
        ans: 1,
        exp: "<b>(B) 2<sup>53</sup></b><br>1 GigaByte = 2<sup>30</sup> Bytes<br>1 TeraByte = 2<sup>40</sup> Bytes<br>1024 TeraBytes = 1024 × 2<sup>40</sup> Bytes = 1024 × 2<sup>40</sup> × 8 bits = 2<sup>10</sup> × 2<sup>40</sup> × 2<sup>3</sup> = 2<sup>53</sup> bits"
    },
    {
        q: "<b>Nov 2017</b><br>The data storage hierarchy consists of:",
        opts: ["(1) Bits, bytes, fields, records, files and databases", "(2) Bits, bytes, records, fields, files and databases", "(3) Bits, bytes, fields, files, records and databases", "(4) Bytes, bits, fields, records, files and databases"],
        ans: 0,
        exp: "<b>(1) Bits, bytes, fields, records, files and databases</b><br>The hierarchy from smallest to largest is: Bit (0 or 1) → Byte (e.g. 01000001, letter A in ASCII) → Field (e.g. NAME field) → Record (e.g. Name, Course, Grade of one student) → File (collection of records) → Database (collection of files)."
    },
    {
        q: "<b>Nov 2017</b><br>Which of the following represents billion characters?",
        opts: ["(1) Megabytes", "(2) Kilobytes", "(3) Gigabytes", "(4) Terabytes"],
        ans: 2,
        exp: "<b>(3) Gigabytes</b><br>1 Giga Byte (GB) = about 1 billion characters (or 1024 MB). 1 MB = about 1 million characters, 1 KB = about 1000 characters, 1 TB = about 1 trillion characters."
    },
    {
        q: "<b>July 2018</b><br>Put the following units of storage into the correct order, starting with the smallest unit first and going down to the largest unit:<br><br>(a) Kilobyte<br>(b) Byte<br>(c) Megabyte<br>(d) Terabyte<br>(e) Gigabyte<br>(f) Bit<br><br>Give your answer from the following code:",
        opts: ["(1) (f), (b), (a), (c), (d), (e)", "(2) (f), (b), (a), (d), (e), (c)", "(3) (f), (b), (a), (c), (e), (d)", "(4) (f), (b), (a), (d), (c), (e)"],
        ans: 2,
        exp: "<b>(3) (f), (b), (a), (c), (e), (d)</b><br>Bit (b) = Binary digit = 0 or 1; Nibble = 4 bits; Byte (B) = 8 bits; Kilo Byte (KB) = 1024 B = 2<sup>10</sup> B; Mega Byte (MB) = 1024 KB = 2<sup>20</sup> B; Giga Byte (GB) = 1024 MB = 2<sup>30</sup> B; Tera Byte (TB) = 1024 GB = 2<sup>40</sup> B; Peta Byte (PB) = 2<sup>50</sup> B; Exa Byte (EB) = 2<sup>60</sup> B; Zetta Byte (ZB) = 2<sup>70</sup> B; Yotta Byte (YB) = 2<sup>80</sup> B; Bronto Byte (BB) = 2<sup>90</sup> B; Geop Byte (GPB) = 2<sup>100</sup> B."
    },
    {
        q: "<b>Dec 2018</b><br>A Terabyte is equal to :",
        opts: ["(A) 1024 Megabytes", "(B) 1024 Gigabytes", "(C) 1024 x 1024 Kilobytes", "(D) 1024 Kilobytes"],
        ans: 1,
        exp: "<b>(B) 1024 Gigabytes</b><br>1024 Gigabytes = 1 TB. Also, 1024 Megabytes = 1 GB; 1024 × 1024 Kilobytes = 1024 × 1 MB = 1 GB; 1024 Kilobytes = 1 MB."
    },
    {
        q: "<b>June 2019</b><br>A computer has main memory of 960 Kbytes. What is the exact number of bytes contained in this memory?",
        opts: ["(A) 960 × 8", "(B) 960 × 1000", "(C) 960 × 1024", "(D) 960 × 1024 × 1024"],
        ans: 2,
        exp: "<b>(C) 960 × 1024</b><br>1 KB = 1024 B, so 960 KB = 960 × 1024 B."
    },
    {
        q: "<b>June 2019</b><br>One Terabyte (TB) of memory is equal to:",
        opts: ["(A) 1024 KB", "(B) 1024 × 1024 KB", "(C) 1024 × 1024 × 1024 KB", "(D) 1024 × 1024 × 1024 Bytes"],
        ans: 2,
        exp: "<b>(C) 1024 × 1024 × 1024 KB</b><br>1024 × 1024 × 1024 KB = 1024 × 1024 × 1 MB = 1 TB.<br>(A) 1024 KB = 1 MB; (B) 1024 × 1024 KB = 1024 × 1 MB = 1 GB; (D) 1024 × 1024 × 1024 Bytes = 1024 × 1024 × 1 KB = 1 GB."
    },
    {
        q: "<b>Dec 2019</b><br>The term one gigabyte refers to",
        opts: ["(A) 1024 petabytes", "(B) 1024 megabytes", "(C) 1024 kilobytes", "(D) 1024 bytes"],
        ans: 1,
        exp: "<b>(B) 1024 megabytes</b><br>1 Giga Byte (GB) = 1024 MB = 2<sup>30</sup> B."
    },
    {
        q: "<b>Nov 2020</b><br>Which of the following number systems uses two numbers to represent data in computer?",
        opts: ["(A) Bicentennial", "(B) Biometric", "(C) Binary", "(D) Byte"],
        ans: 2,
        exp: "<b>(C) Binary</b><br>The binary number system uses only two digits, 0 and 1, to represent data in a computer."
    },
    {
        q: "<b>Nov 2020</b><br>Which one of the following represents one billion characters?",
        opts: ["1. 1 Kilobyte", "2. 1 Megabyte", "3. 1 Gigabyte", "4. 1 Terabyte"],
        ans: 2,
        exp: "<b>3. 1 Gigabyte</b><br>1 Giga Byte (GB) = about 1 billion characters (or 1024 MB)."
    },
    {
        q: "<b>Nov 2020</b><br>How many unique combinations of 0's and 1's can be made with 5-binary-digit code?",
        opts: ["(A) 16", "(B) 32", "(C) 64", "(D) 128"],
        ans: 1,
        exp: "<b>(B) 32</b><br>n bits can represent 2<sup>n</sup> different values (1 bit: 2 patterns; 2 bits: 4 patterns; 3 bits: 8 patterns). So 5 bits give 2<sup>5</sup> = 32 combinations."
    },
    {
        q: "<b>Nov 2020</b><br>Which of the following is correct with respect to the size of the storage units?",
        opts: ["(A) Terabyte < Petabyte < Exabyte < Zettabyte", "(B) Petabyte < Exabyte < Zettabyte < Terabyte", "(C) Exabyte < Zettabyte < Terabyte < Petabyte", "(D) Zettabyte < Exabyte < Petabyte < Terabyte"],
        ans: 0,
        exp: "<b>(A) Terabyte < Petabyte < Exabyte < Zettabyte</b><br>TB = 2<sup>40</sup> B, PB = 2<sup>50</sup> B, EB = 2<sup>60</sup> B, ZB = 2<sup>70</sup> B, so the increasing order is Terabyte < Petabyte < Exabyte < Zettabyte."
    },
    {
        q: "<b>Nov 2021</b><br>Identify the correct order of the following storage capacities ranked from largest to smallest capacity<br><br>(A) 1500 M Bytes<br>(B) 5 K Bytes<br>(C) 1 G Bytes<br>(D) 2 T Bytes<br><br>Choose the correct answer from the option given below :",
        opts: ["(A) (D), (A), (C), (B)", "(B) (A), (D), (C), (B)", "(C) (A), (B), (C), (D)", "(D) (D), (C), (A), (B)"],
        ans: 0,
        exp: "<b>(A) (D), (A), (C), (B)</b><br>(A) 1500 M Bytes ≈ 2<sup>11</sup> × 2<sup>20</sup> = 2<sup>31</sup><br>(B) 5 K Bytes ≈ 2<sup>3</sup> × 2<sup>10</sup> = 2<sup>13</sup><br>(C) 1 G Bytes ≈ 2<sup>0</sup> × 2<sup>30</sup> = 2<sup>30</sup><br>(D) 2 T Bytes ≈ 2<sup>1</sup> × 2<sup>40</sup> = 2<sup>41</sup><br>Largest to smallest: (D), (A), (C), (B)."
    },
    {
        q: "<b>Nov 2021</b><br>Identify the correct order of the following computer storage capacities ranked from smallest to largest capacity.<br><br>(A) 100 GBytes<br>(B) 10000000000 Bytes<br>(C) 1 TBytes<br>(D) 100000 MBytes<br>(E) 1000000 KBytes<br><br>Choose the correct answer from the options given below :",
        opts: ["1. (D), (B), (E), (A), (C)", "2. (E), (B), (D), (A), (C)", "3. (B), (E), (D), (A), (C)", "4. (E), (B), (D), (C), (A)"],
        ans: 1,
        exp: "<b>2. (E), (B), (D), (A), (C)</b><br>(A) 100 GBytes = 10<sup>2</sup> × 10<sup>9</sup> = 10<sup>11</sup><br>(B) 10000000000 Bytes = 10<sup>10</sup><br>(C) 1 TBytes = 1 × 10<sup>12</sup> = 10<sup>12</sup><br>(D) 100000 MBytes = 10<sup>5</sup> × 10<sup>6</sup> = 10<sup>11</sup><br>(E) 1000000 KBytes = 10<sup>6</sup> × 10<sup>3</sup> = 10<sup>9</sup><br>Smallest to largest: (E), (B), (D), (A), (C)."
    },
    {
        q: "Match the list I and II<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>List I<br>Name of Memory Size</b></td><td><b>List II<br>Number of bits</b></td></tr><tr><td>A. MB (Megabyte)</td><td>I. 2<sup>30</sup></td></tr><tr><td>B. GB (Gigabyte)</td><td>II. 2<sup>50</sup></td></tr><tr><td>C. TB (Terabyte)</td><td>III. 2<sup>20</sup></td></tr><tr><td>D. PB (Petabyte)</td><td>IV. 2<sup>40</sup></td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) A - II, B - I, C - III, D - IV", "(B) A - II, B - III, C - I, D - IV", "(C) A - III, B - I, C - IV, D - II", "(D) A - III, B - II, C - I, D - IV"],
        ans: 2,
        exp: "<b>(C) A - III, B - I, C - IV, D - II</b><br>MB = 2<sup>20</sup>, GB = 2<sup>30</sup>, TB = 2<sup>40</sup>, PB = 2<sup>50</sup>. So A-III, B-I, C-IV, D-II."
    },
    {
        q: "<b>Oct 2022</b><br>Identify the correct arrangement of the following storage capacities in the decreasing order<br><br>(a) 10 Mega Bytes.<br>(b) 10 Tera bytes<br>(c) 10 Exa bytes<br>(d) 10 Yota bytes<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (d), (c), (b), (a)", "(B) (c), (d), (b), (a)", "(C) (c), (b), (d), (a)", "(D) (b), (c), (d), (a)"],
        ans: 0,
        exp: "<b>(A) (d), (c), (b), (a)</b><br>Yotta Byte (2<sup>80</sup> B) > Exa Byte (2<sup>60</sup> B) > Tera Byte (2<sup>40</sup> B) > Mega Byte (2<sup>20</sup> B). So the decreasing order is (d), (c), (b), (a)."
    },
    {
        q: "<b>March 2023</b><br>If one MegaByte is equal to 2<sup>20</sup> Bytes of computer data storage, then 2048 TeraBytes is equal to ______ bits of data storage.",
        opts: ["(A) 2<sup>51</sup>", "(B) 2<sup>44</sup>", "(C) 2<sup>54</sup>", "(D) 2<sup>57</sup>"],
        ans: 2,
        exp: "<b>(C) 2<sup>54</sup></b><br>1 MegaByte = 2<sup>20</sup> Bytes<br>1 TeraByte = 2<sup>40</sup> Bytes<br>2048 TeraBytes = 2<sup>11</sup> × 2<sup>40</sup> × 2<sup>3</sup> bits = 2<sup>54</sup> bits."
    },
    {
        q: "<b>March 2023</b><br>Which is the smallest of these data storage capacities?",
        opts: ["(A) 2 KB", "(B) 2049 Bytes", "(C) 0.5 MB", "(D) 3 GB"],
        ans: 0,
        exp: "<b>(A) 2 KB</b><br>2 KB = 2 × 1024 = 2048 Bytes, which is smaller than 2049 Bytes, 0.5 MB and 3 GB."
    },
    {
        q: "<b>Dec 2023</b><br>Identify the correct sequence of the missing units of data A-D that can be used to represent the size of a file, as it changes in size. The units of data increase in size from smallest to largest as given below.<br>bit<br>________<br>________<br>kilo Byte (KB)<br>________<br>________<br>tera Byte (TB)<br><br>(A) byte<br>(B) gigaByte (GB)<br>(C) megaByte (MB)<br>(D) nibble<br><br>Choose the correct answer from the options given below:",
        opts: ["(1) (D), (A), (C), (B)", "(2) (A), (C), (D), (B)", "(3) (D), (A), (B), (C)", "(4) (A), (D), (C), (B)"],
        ans: 0,
        exp: "<b>(1) (D), (A), (C), (B)</b><br>The order of increasing size is: bit → nibble (4 bits) → byte (8 bits) → kilo Byte → megaByte → gigaByte → tera Byte."
    }
];