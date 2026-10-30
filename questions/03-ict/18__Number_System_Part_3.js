var rawQuestions = [
    {
        q: "Which of the following is the binary equivalent of the decimal number 35?",
        opts: ["a) 100001", "b) 100101", "c) 100011", "d) 101001"],
        ans: 2,
        exp: "<b>c) 100011</b><br>Divide 35 repeatedly by 2 and read the remainders from bottom to top: 35 &rarr; 17 (rem 1), 17 &rarr; 8 (rem 1), 8 &rarr; 4 (rem 0), 4 &rarr; 2 (rem 0), 2 &rarr; 1 (rem 0), last quotient 1. Therefore 35<sub>10</sub> = 100011<sub>2</sub>. (Check: 32 + 2 + 1 = 35)"
    },
    {
        q: "NOV 2021: What is the binary equivalent of the decimal number 67.625?",
        opts: ["a) 1000010.110", "b) 1000011.110", "c) 1000010.101", "d) 1000011.101"],
        ans: 3,
        exp: "<b>d) 1000011.101</b><br>Integer part: 67 = 1000011<sub>2</sub> (repeated division by 2, remainders read bottom to top).<br>Fractional part (multiply by 2): 0.625 &times; 2 = 1.25 (1); 0.25 &times; 2 = 0.5 (0); 0.5 &times; 2 = 1.0 (1). So (0.625) = (101)<sub>2</sub>.<br>Hence 67.625 = 1000011.101<sub>2</sub>."
    },
    {
        q: "NOV 2021: Given below are two statements<br><br>Statement I: The largest decimal number that can be represented using a 7-bit binary number is 128.<br>Statement II: Minimum number of bits required to store largest 2-digit decimal number is 7.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 3,
        exp: "<b>4. Statement I is false but Statement II is true</b><br>Statement I: The largest unsigned number with n bits is 2^n - 1 (all bits 1). For n=7, 128 - 1 = 127, so Statement I is incorrect.<br>Statement II: The largest 2-digit decimal number is 99. Its binary equivalent is 1100011, which is formed by 7 binary digits. Hence Statement II is correct."
    },
    {
        q: "NOV 2021: Given below are two statements<br><br>Statement I: The base of the binary number system is 2.<br>Statement II: Binary addition is just like decimal addition except that the rules are much simpler.<br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["1. Both Statement I and Statement II are true", "2. Both Statement I and Statement II are false", "3. Statement I is true but Statement II is false", "4. Statement I is false but Statement II is true"],
        ans: 0,
        exp: "<b>1. Both Statement I and Statement II are true</b><br>The four rules of binary addition are:<br>0 + 0 = 0<br>0 + 1 = 1<br>1 + 0 = 1<br>1 + 1 = 10"
    },
    {
        q: "NOV 2021: The next number P in the sequence of binary numbers 0, 10, 100, 110, P is:",
        opts: ["(A) 111", "(B) 1000", "(C) 1010", "(D) 1001"],
        ans: 1,
        exp: "<b>(B) 1000</b><br>The binary numbers 0, 10, 100, 110 equal 0, 2, 4, 6 in decimal (increasing by 2), so the next number is 8 = 1000<sub>2</sub>.<br>Binary groups of four: 0-0000, 1-0001, 2-0010, 3-0011, 4-0100, 5-0101, 6-0110, 7-0111, 8-1000."
    },
    {
        q: "Sept 2022: Given below are two statements:<br><br>Statement (I): 8 megabytes = 2<sup>13</sup> gigabytes<br>Statement (II): The decimal equivalent of the binary number (11101.101)<sub>2</sub> is (29.625)<sub>10</sub>.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 3,
        exp: "<b>(D) Statement (I) is false but Statement (II) is true.</b><br>Statement I: 8 MB = 2<sup>13</sup> KB (not gigabytes). Thus, Statement I is false.<br>Statement II: (11101.101)<sub>2</sub> = 1&times;2<sup>4</sup> + 1&times;2<sup>3</sup> + 1&times;2<sup>2</sup> + 0&times;2<sup>1</sup> + 1&times;2<sup>0</sup> . 1&times;2<sup>-1</sup> + 0&times;2<sup>-2</sup> + 1&times;2<sup>-3</sup> = 16 + 8 + 4 + 1 + 0.5 + 0.125 = 29.625. Thus Statement II is true."
    },
    {
        q: "Oct 2022: Which of the following three numbers (A-C) in decimal, octal and hexadecimal notations, respectively, is/are equivalent to (11011001)2 in binary notation?<br><br>(a) (217)10<br>(b) (661)8<br>(c) (D9)16<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) only", "(B) (b) only", "(C) (a) and (b) only", "(D) (a) and (c) only"],
        ans: 3,
        exp: "<b>(D) (a) and (c) only</b><br>Binary to decimal: (11011001)2 = 128 + 64 + 0 + 16 + 8 + 0 + 0 + 1 = (217)10<br>Binary to Octal: 3-bit groups = 011 011 001 = (331)8, so (661)8 is not equal.<br>Binary to Hexadecimal: 4-bit groups = 1101 1001 = (D9)16"
    },
    {
        q: "Oct 2022: Given below are two statements:<br><br>Statement (I): The binary equivalent of decimal number (19)<sub>10</sub> is (10101)<sub>2</sub><br>Statement (II): (1011)<sub>2</sub> + (110)<sub>2</sub> = (10101)<sub>2</sub><br><br>In light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true", "(B) Both Statement (I) and Statement (II) are false", "(C) Statement (I) is true but Statement (II) is false", "(D) Statement (I) is false but Statement (II) is true"],
        ans: 1,
        exp: "<b>(B) Both Statement (I) and Statement (II) are false</b><br>(10101)2 = 16 + 4 + 1 = (21)10, not 19, so Statement I is false.<br>1011 + 110 = 10001 (not 10101), so Statement II is false."
    },
    {
        q: "March 2023: The hardware address of a computer network device consists of 48 bits. Which of the following is a valid address in hexadecimal numbers?",
        opts: ["(A) 00E0071944A0", "(B) 0A23B5", "(C) 1EO7FG124372", "(D) 398A7E9412110408"],
        ans: 0,
        exp: "<b>(A) 00E0071944A0</b><br>In a hardware address, each hexadecimal character represents 4 bits. 12 characters correspond to 12 &times; 4 = 48 bits. The hexadecimal system uses base 16 with valid characters 0-9 and A-F. 00E0071944A0 consists of valid characters and is exactly 12 characters long, so it is a valid 48-bit hardware address."
    },
    {
        q: "March 2023: Two binary numbers are added as given below:<br><br><table style='font-family:monospace;'><tr><td>&nbsp;&nbsp;0 b 0 1</td></tr><tr><td>+ c 1 1 a</td></tr><tr><td>-----------</td></tr><tr><td>&nbsp;&nbsp;1 0 d 1</td></tr></table><br>Then (a, b, c, d) = __.",
        opts: ["(A) (0, 0, 1, 1)", "(B) (0, 1, 0, 1)", "(C) (1, 0, 0, 1)", "(D) (1, 0, 1, 0)"],
        ans: 1,
        exp: "<b>(B) (0, 1, 0, 1)</b><br>Using the binary addition rules (0+0=0, 0+1=1, 1+0=1, 1+1=0 carry 1), working from the right: 1 + a = 1 so a = 0; 0 + 1 = 1 so d = 1; b + 1 = 0 with carry 1 so b = 1; 0 + c + 1 (carry) = 1 so c = 0.<br>Hence (a, b, c, d) = (0, 1, 0, 1)."
    },
    {
        q: "June 2023: Consider two binary numbers P=10110001 and Q=01001110. If X=P or Q and Y=P and Q, then what will be the values of X and Y respectively?",
        opts: ["(A) 01001110, 10110001", "(B) 10110001, 00000000", "(C) 10110001, 11111111", "(D) 11111111, 00000000"],
        ans: 3,
        exp: "<b>(D) 11111111, 00000000</b><br>Logical OR (X = P or Q): P = 10110001, Q = 01001110, X = 11111111.<br>Logical AND (Y = P and Q): P = 10110001, Q = 01001110, Y = 00000000."
    },
    {
        q: "June 2023: Given below are two statements:<br><br>Statement (I): A binary number that ends in a 1, e.g. 110011, is always an odd decimal number.<br>Statement (II): HTML is a set of rules that must be obeyed when transferring files across the Internet<br><br>In the light of the above statement, choose the correct answer from the options given below.",
        opts: ["(A) Both Statements (I) and Statement (II) are true.", "(B) Both Statements (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true"],
        ans: 2,
        exp: "<b>(C) Statement (I) is true but Statement (II) is false.</b><br>Statement I is true because a binary number that ends in a 1 is always an odd decimal number (the last bit has place value 1, and all other place values are even).<br>Statement II is false because HTML is a markup language used to create web pages. It is not a protocol and does not govern how files are transferred across the internet."
    },
    {
        q: "DEC 2023: Given below are two statements:<br><br>Statement 1: (25)<sub>16</sub> = (00100101)<sub>2</sub><br>Statement II: (00011011)<sub>2</sub> = (1B)<sub>16</sub><br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(1) Both Statement I and Statement II are correct", "(2) Both Statement I and Statement II are incorrect", "(3) Statement I is correct but Statement II is incorrect", "(4) Statement I is incorrect but Statement II is correct"],
        ans: 0,
        exp: "<b>(1) Both Statement I and Statement II are correct</b><br>(00100101)2 = form 4-bit groups for hexadecimal = (0010 0101) = (25)16<br>(00011011)2 = form 4-bit groups for hexadecimal = (0001 1011) = (1B)16<br>A=10, B=11, C=12, D=13, E=14, F=15"
    },
    {
        q: "DEC 2023: If (P)<sub>8</sub> represents the number P in base - 8, then (144)<sub>8</sub> + (175)<sub>8</sub> =",
        opts: ["(1) (225)<sub>8</sub>", "(2) (341)<sub>8</sub>", "(3) (441)<sub>8</sub>", "(4) (314)<sub>8</sub>"],
        ans: 1,
        exp: "<b>(2) (341)<sub>8</sub></b><br>4 + 5 = 9 = (11)<sub>8</sub>, sum = 1, carry = 1<br>4 + 7 + 1 = 12 = (14)<sub>8</sub>, sum = 4, carry = 1<br>1 + 1 + 1 = (3)<sub>8</sub>, sum = 3, carry = 0<br>Sum = (341)<sub>8</sub>"
    },
    {
        q: "DEC 2023: If (P)<sub>8</sub> represents the number P in base - 8, then (124)<sub>8</sub> + (165)<sub>8</sub> =",
        opts: ["(1) (201)<sub>8</sub>", "(2) (289)<sub>8</sub>", "(3) (274)<sub>8</sub>", "(4) (311)<sub>8</sub>"],
        ans: 3,
        exp: "<b>(4) (311)<sub>8</sub></b><br>4 + 5 = 9 = (11)<sub>8</sub>, sum = 1, carry = 1<br>2 + 6 + 1 = 9 = (11)<sub>8</sub>, sum = 1, carry = 1<br>1 + 1 + 1 = (3)<sub>8</sub>, sum = 3, carry = 0<br>Sum = (311)<sub>8</sub>"
    },
    {
        q: "DEC 2023: Given below are two statements:<br><br>Statement (I): (1011101)<sub>2</sub> = (5D)<sub>16</sub><br>Statement (II): (C2)<sub>16</sub> = (11000010)<sub>2</sub><br><br>In the light of the above statements, choose the most appropriate answer from the options given below:",
        opts: ["(1) Both Statement I and Statement II are correct", "(2) Both Statement I and Statement II are incorrect", "(3) Statement I is correct but Statement II is incorrect", "(4) Statement I is incorrect but Statement II is correct"],
        ans: 0,
        exp: "<b>(1) Both Statement I and Statement II are correct</b><br>(1011101)2 = form 4-bit groups for hexadecimal = (0101 1101) = (5D)16<br>(11000010)2 = form 4-bit groups for hexadecimal = (1100 0010) = (C2)16<br>A=10, B=11, C=12, D=13, E=14, F=15"
    },
    {
        q: "DEC 2023: Consider the base - 10 number 100. In base - 6, it would be represented as",
        opts: ["1. (442)<sub>6</sub>", "2. (200)<sub>6</sub>", "3. (242)<sub>6</sub>", "4. (244)<sub>6</sub>"],
        ans: 3,
        exp: "<b>4. (244)<sub>6</sub></b><br>(100)10 = (?)6. Divide repeatedly by 6: 100 / 6 = 16 remainder 4; 16 / 6 = 2 remainder 4; 2 / 6 = 0 remainder 2. Reading the remainders from bottom to top gives (244)<sub>6</sub>."
    }
];