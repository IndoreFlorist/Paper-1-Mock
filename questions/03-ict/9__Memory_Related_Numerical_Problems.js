var rawQuestions = [
    {
        q: "<b>Oct 2022</b><br>If you have a storage device with a capacity of 16 gigabytes, then how many 32 kilobytes files can you fit in that device? (1KB = 1024 bytes)",
        opts: ["a) 2<sup>18</sup>", "b) 2<sup>19</sup>", "c) 2<sup>20</sup>", "d) 2<sup>14</sup>"],
        ans: 1,
        exp: "<b>b) 2<sup>19</sup></b><br>16 GB / 32 KB = (2<sup>4</sup> × 2<sup>30</sup>) / (2<sup>5</sup> × 2<sup>10</sup>) = 2<sup>34</sup> / 2<sup>15</sup> = 2<sup>19</sup>"
    },
    {
        q: "<b>Oct 2022</b><br>Match List I with List II<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>List I (Statement)</b></td><td><b>LIST II (Value)</b></td></tr><tr><td>A. The number of bits that make up a byte</td><td>I. 5</td></tr><tr><td>B. Base-10 (denary) value of the binary number 001111</td><td>II. 8</td></tr><tr><td>C. Number of minutes to upload a 75 megabyte file at 2 Megabits per second upload speed</td><td>III. 10</td></tr><tr><td>D. If there are 2<sup>P</sup> bytes in a Kilobyte then what is the Value of P?</td><td>IV. 15</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["a) A-I, B-II C-III, D-IV", "b) A-II, B-IV, C-I, D-III", "c) A-III, B-IV, C-I, D-II", "d) A-II, B-I, C-IV, D-III"],
        ans: 1,
        exp: "<b>b) A-II, B-IV, C-I, D-III</b><br>A: 1 byte = 8 bits.<br>B: binary number 001111 = 8 + 4 + 2 + 1 = 15.<br>C: 75 megabyte file at 2 Megabits per second = (75 × 2<sup>20</sup> × 2<sup>3</sup>) / (2 × 2<sup>20</sup>) = 75 × 2<sup>23</sup> / 2<sup>21</sup> = 75 × 2<sup>2</sup> = 300 sec. Number of minutes = 300 / 60 = 5 min.<br>D: Kilobyte = 2<sup>P</sup> = 2<sup>10</sup>, so P = 10."
    },
    {
        q: "<b>Oct 2022</b><br>A movie requires 16 gigabytes of storage. How long will it take to download this movie, if the download speed is 64 megabytes per second? (1KB=1024 Bytes)",
        opts: ["a) 64 seconds", "b) 128 seconds", "c) 256 seconds", "d) 512 seconds"],
        ans: 2,
        exp: "<b>c) 256 seconds</b><br>Time taken to download the movie = 16 GB / 64 MBps = (2<sup>4</sup> × 2<sup>30</sup>) / (2<sup>6</sup> × 2<sup>20</sup>) = 2<sup>34</sup> / 2<sup>26</sup> = 2<sup>8</sup> = 256 sec."
    },
    {
        q: "<b>July 2022</b><br>If you have a storage device with a capacity of 16 gigabytes, then how many 2 kilobytes files can you fit in that device? (1KB=1024 bytes)",
        opts: ["a) 2<sup>23</sup>", "b) 2<sup>25</sup>", "c) 2<sup>27</sup>", "d) 2<sup>29</sup>"],
        ans: 0,
        exp: "<b>a) 2<sup>23</sup></b><br>16 GB / 2 KB = (2<sup>4</sup> × 2<sup>30</sup>) / (2<sup>1</sup> × 2<sup>10</sup>) = 2<sup>34</sup> / 2<sup>11</sup> = 2<sup>23</sup>"
    },
    {
        q: "<b>Oct 2022</b><br>Match List I with List II:<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>List I (Question)</b></td><td><b>List II (Value)</b></td></tr><tr><td>(A) What hexadecimal value is obtained when the two hexadecimal digits C and D are added together?</td><td>I. 8</td></tr><tr><td>(B) What is the denary (base-10) value of the binary number: 00100100</td><td>II. 19</td></tr><tr><td>(C) Number of seconds to transfer a 2 megabyte file over a 2 megabits per second internet connection</td><td>III. 30</td></tr><tr><td>(D) If 1 gigabyte = 2<sup>P</sup>, then what is the value of P?</td><td>IV. 36</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["a) A-III, B-IV, C-I, D-II", "b) A-II, B-IV, C-I, D-III", "c) A-IV, B-II, C-I, D-III", "d) A-II, B-I, C-IV, D-III"],
        ans: 1,
        exp: "<b>b) A-II, B-IV, C-I, D-III</b><br>A: C = 12 = 1100, D = 13 = 1101. 12 + 13 = (25)<sub>10</sub> = (19)<sub>16</sub>.<br>B: (00100100)<sub>2</sub> = 1 × 2<sup>2</sup> + 1 × 2<sup>5</sup> = 4 + 32 = (36)<sub>10</sub>.<br>C: 2 megabyte file at 2 Megabits per second = (2 × 2<sup>20</sup> × 2<sup>3</sup>) / (2 × 2<sup>20</sup>) = 2 × 2<sup>23</sup> / 2<sup>21</sup> = 8 sec.<br>D: 1 gigabyte = 2<sup>30</sup>, so P = 30."
    },
    {
        q: "<b>Feb 2023</b><br>An Indian company designs a mobile application to process staff records. In each record, 10 bits are used to store staff ID and 20 bytes are used to store staff names. How many staff records can the mobile application support?",
        opts: ["(A) 2<sup>10</sup>", "(B) 2<sup>12</sup>", "(C) 2<sup>22</sup>", "(D) 2<sup>32</sup>"],
        ans: 0,
        exp: "<b>(A) 2<sup>10</sup></b><br>The number of distinct records is limited by the staff ID: 10 bits can represent 2<sup>10</sup> different values, so the application can support 2<sup>10</sup> staff records."
    },
    {
        q: "<b>Feb 2023</b><br>Match List I with List II<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>List I (Statement)</b></td><td><b>List II (Value)</b></td></tr><tr><td>(a) Number of bytes formed from 8 bits</td><td>(I) 6</td></tr><tr><td>(b) Base-10 (denary) value of the binary number: 110</td><td>(II) 4</td></tr><tr><td>(c) If there are 2<sup>P</sup> bytes in 1 mega byte, then what is the value of P?</td><td>(III) 1</td></tr><tr><td>(d) An ISP company advertises its broadband download speed as 128 mega bits per second. How many 4- mega byte files can be downloaded per second using the company's broad band?</td><td>(IV) 20</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)", "(B) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)", "(C) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)", "(D) (a)-(IV), (b)-(III), (c)-(I), (d)-(II)"],
        ans: 2,
        exp: "<b>(C) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)</b><br>(a) 8 bits = 1 Byte.<br>(b) (110)<sub>2</sub> = 4 + 2 + 0 = 6.<br>(c) 2<sup>P</sup> Byte = 1 MB; 2<sup>20</sup> = 1 MB, so P = 20.<br>(d) Download speed is 128 Mbps; 128 Mbps × (1/8) = 16 MBps. Dividing by the size of each file: 16 MBps / 4 MB per file = 4 files per second."
    },
    {
        q: "<b>Feb 2023</b><br>Tina has bought a 4 gigabyte MP3 player. If each song lasts 3 minutes and is recorded at 128 kilo bits per second, then how many songs can be stored on Tina's MP3 player?",
        opts: ["(A) 1156", "(B) 1256", "(C) 1356", "(D) 1456"],
        ans: 3,
        exp: "<b>(D) 1456</b><br>Since 1 minute = 60 seconds and 1 song lasts 3 minutes, a song takes up 3 × 60 = 180 seconds. Therefore, one song takes up 180 × 128 kbps.<br>Number of songs = 4 GB / (180 × 128 kbps) = 2<sup>35</sup> / (180 × 2<sup>17</sup>) = 2<sup>18</sup> / 180 = 2<sup>16</sup> / 45 = 65536 / 45 ≈ 1456."
    },
    {
        q: "<b>Feb 2023</b><br>A digital camera contains a microprocessor. The camera's specification includes:<br><br>20 megapixel resolution<br>32 gigabyte memory card<br>autofocus facility<br><br>If a compressed image file requires an average of 1 byte per pixel, then what is the maximum number of photos that can be stored on the memory card? ( 1 Kilo = 1024)",
        opts: ["a) 1638", "b) 819", "c) 409", "d) 732"],
        ans: 0,
        exp: "<b>a) 1638</b><br>1 byte per pixel, so 20 megapixels × 1 byte per pixel = 20 Megabytes = 20 MB.<br>Maximum number of photos = 32 GB / 20 MB = (2<sup>5</sup> × 2<sup>30</sup>) / (20 × 2<sup>20</sup>) = 2<sup>15</sup> / 20 = (2<sup>5</sup> × 2<sup>10</sup>) / 20 = 1.6 × 2<sup>10</sup> = 1638.4, i.e. 1638 photos."
    },
    {
        q: "<b>June 2023</b><br>Match List I with List II<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>LIST I (Question)</b></td><td><b>LIST II (Value)</b></td></tr><tr><td>(a) If the broadband data download rate is 40 megabits per second, then how many seconds will it takes to download a 60 megabytes file?</td><td>(I) 64000</td></tr><tr><td>(b) Base -10 (denary) value of the binary number: 1000001</td><td>(II) 12</td></tr><tr><td>(c) Number of 8 megabyte files that can be stored on a backup memory device having 500 gigabyte of storage.</td><td>(III) 17</td></tr><tr><td>(d) What hexadecimal value is obtained when the two hexadecimal digits B and C are added together?</td><td>(IV) 65</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)", "(B) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)", "(C) (a)-(IV), (b)-(III), (c)-(II), (d)-(I)", "(D) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)"],
        ans: 1,
        exp: "<b>(B) (a)-(II), (b)-(IV), (c)-(I), (d)-(III)</b><br>(a) 60 MB / 40 Mbps = (60 × 2<sup>23</sup>) / (40 × 2<sup>20</sup>) = 48 / 4 = 12.<br>(b) (1000001)<sub>2</sub> = 64 + 1 = 65.<br>(c) 500 GB / 8 MB = (500 × 2<sup>30</sup>) / (8 × 2<sup>20</sup>) = 500 × 1024 / 8 = 512000 / 8 = 64000.<br>(d) B + C = 11 + 12 = (23)<sub>10</sub> = (17)<sub>16</sub>."
    },
    {
        q: "<b>Dec 2023</b><br>A security system records video footage. One minute of video requires 180 MegaBytes of storage. The recording system can store several hours of video footage. How much storage would be needed for 2 hours of video footage? (1k = 1024):",
        opts: ["(1) 19.2 Giga Bytes", "(2) 20.3 Giga Bytes", "(3) 21.1 Giga Bytes", "(4) 22.4 Giga Bytes"],
        ans: 2,
        exp: "<b>(3) 21.1 Giga Bytes</b><br>1 min requires 180 MB; 2 hours = 120 min.<br>Storage needed for 2 hours of video footage = 180 MB/min × 120 min = 21600 MB.<br>21600 MB = 21600 / 1024 GB = 21.09 GB ≈ 21.1 GB."
    },
    {
        q: "<b>Dec 2023</b><br>Alisha has agreed to send Khushi a 20-megabyte file. They both have a broadband Internet connection. Alisha has to upload her file to a server and then Khushi needs to download it from the same server. The broadband data transfer rates (speeds) are 1 megabit per second to upload a file and 8 megabits per second to download a file. If P and Q represent the time taken in seconds to upload and download Alisha's file respectively then (P, Q) =",
        opts: ["1. (20, 160)", "2. (144, 18)", "3. (18, 144)", "4. (160, 20)"],
        ans: 3,
        exp: "<b>4. (160, 20)</b><br>File size = 20 MB; upload speed = 1 megabit per second; download speed = 8 megabits per second.<br>Time to upload = 20 MB / 1 Mbps = 20 × 2<sup>23</sup> / 2<sup>20</sup> = 160 sec.<br>Time to download = 20 MB / 8 Mbps = 20 × 2<sup>23</sup> / 2<sup>23</sup> = 20 sec."
    },
    {
        q: "<b>Dec 2023</b><br>What will be approximately the transmission time to send a 512-byte packet using a 56 kilobit (1 kilobit = 1000) per second modem?",
        opts: ["1. 7 milliseconds", "2. 43 milliseconds", "3. 73 milliseconds", "4. 80 milliseconds"],
        ans: 2,
        exp: "<b>3. 73 milliseconds</b><br>Transmission time = (512 × 8) / (56 × 10<sup>3</sup>) = 73.14 × 10<sup>-3</sup> sec ≈ 73 ms."
    }
];