var rawQuestions = [
    {
        q: "<b>Dec 2018</b><br>The output quality of a printer is measured by:",
        opts: ["(A) Dots per cm", "(B) Digits per inch", "(C) Dots per mm", "(D) Dots per inch"],
        ans: 3,
        exp: "<b>(D) Dots per inch</b><br>The output quality of a printer is measured by Dots Per Inch (DPI). DPI represents the number of ink dots the printer can place in an area of one square inch. It refers to the physical dot density of an image when it is reproduced as a real physical entity, e.g. printed onto paper. DPI uses the CMYK (cyan, magenta, yellow and key/black) colour model, also known as the subtractive colour model. In contrast, PPI (pixels per inch) refers to the pixel density of a screen or digital image and uses the RGB (additive) colour model."
    },
    {
        q: "<b>Dec 2018</b><br>Which of the following printers use dry ink powder?",
        opts: ["(A) Dot Matrix Printer", "(B) Thermal Printer", "(C) Laser Printer", "(D) Ink Jet Printer"],
        ans: 2,
        exp: "<b>(C) Laser Printer</b><br>Laser printers are non-impact printers that use toner (dry ink powder). The laser beam produces a text or image structure on a selenium-coated drum by controlling electric charges; the charged image particles then pick up the toner. Laser printers can produce extremely high-resolution prints (300 dpi to 1200 dpi)."
    },
    {
        q: "<b>Nov 2020</b><br>The term Plotter is best described as:",
        opts: ["(A) An input device to produce good quality graphics", "(B) An output device to produce drawings and graphics", "(C) A fast storage device for storing good quality graphics", "(D) A multipurpose device for taking inputs as well as outputs"],
        ans: 1,
        exp: "<b>(B) An output device to produce drawings and graphics</b><br>A plotter is a type of printer that prints vector graphics. It interprets commands from a computer to make line drawings on paper with one or more automated pens, and can draw continuous point-to-point lines directly from vector graphic files or commands. Types: drum plotters, flatbed plotters, electrostatic plotters and inkjet plotters."
    },
    {
        q: "<b>Nov 2021</b><br>Which of the following statements are correct?<br><br>A. Laser printers use dry ink<br>B. Unlike dot matrix and inkjet printers, laser printers do not use ink when producing a document<br>C. Laser printers use the property of static electricity<br>D. Laser printers produce ozone gas and tiny toner particulates in the air<br><br>Choose the correct answer from the options given below",
        opts: ["(A) A and C only", "(B) A, B and D only", "(C) A, C and D only", "(D) B, C and D only"],
        ans: 2,
        exp: "<b>(C) A, C and D only</b><br>Laser printers use toner (dry ink powder) and rely on static electricity (charged drum) to attract the toner; they also produce ozone gas and tiny toner particulates. Statement B is incorrect because laser printers do use ink in the form of toner."
    },
    {
        q: "<b>Oct 2022</b><br>Which of the following devices from the list A - E given below are output devices only?<br>(a) Blu-Ray disc<br>(b) Buzzer<br>(c) Web-Cam<br>(d) SSD<br>(e) Laser printer<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b) and (e) only", "(B) (a) and (d) only", "(C) (c) and (e) only", "(D) (e) only"],
        ans: 0,
        exp: "<b>(A) (b) and (e) only</b><br>A buzzer and a laser printer only produce output. A Blu-Ray disc and an SSD are storage devices (they both read and write data), and a web-cam is an input device."
    },
    {
        q: "<b>Oct 2022</b><br>Consider the following incomplete sentences about printers:<br><br>A laser printer is a type of ________ printer. It produces _______ quality printouts and uses _________ to print onto paper. A _______ printer can produce carbon copies because the print head makes contact with the paper.<br><br>Identify the correct order to fill in the blank spaces using words from the list below (a - d)<br><br>(a) High<br>(b) Dot Matrix<br>(c) Non-Impact<br>(d) Toner<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (b), (a), (d), (c)", "(B) (c), (d), (a), (b)", "(C) (a), (b), (c), (d)", "(D) (c), (a), (d), (b)"],
        ans: 3,
        exp: "<b>(D) (c), (a), (d), (b)</b><br>A laser printer is a Non-Impact printer; it produces High quality printouts and uses Toner to print onto paper. A Dot Matrix printer can produce carbon copies because the print head strikes an ink-soaked ribbon against the paper (impact printing)."
    },
    {
        q: "<b>March 2023</b><br>Given below are two statements:<br><br>Statement (I): AI is an artificially created environment used to give a feeling of 'being there', whereas virtual reality learns from changing circumstances.<br>Statement (II): Unlike dot matrix and inkjet printers, laser printers don't use ink when producing documents.<br><br>In the light of the above statements, choose the correct answer from the options given below:",
        opts: ["(A) Both Statement (I) and Statement (II) are true.", "(B) Both Statement (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 1,
        exp: "<b>(B) Both Statement (I) and Statement (II) are false.</b><br>Statement (I) is false: the descriptions are swapped. Virtual reality is the artificially created environment that gives a feeling of 'being there', whereas AI learns from changing circumstances. Statement (II) is false: laser printers do use ink, in the form of toner (dry ink powder)."
    },
    {
        q: "<b>March 2023</b><br>Match List I with List II<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>LIST I<br>(Output Device)</b></td><td><b>LIST II<br>(Description)</b></td></tr><tr><td>(a) Inkjet printer</td><td>(I) Flat panel display that uses the light modulating properties of liquid crystals.</td></tr><tr><td>(b) LCD screen</td><td>(II) Flat panel display that uses an array of light-emitting diodes as pixels.</td></tr><tr><td>(c) LED screen</td><td>(III) Droplets of ink are propelled onto paper.</td></tr><tr><td>(d) Laser Printer</td><td>(IV) Electrically charged powdered ink is transferred onto paper.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(IV),(b)-(I),(c)-(II),(d)-(III)", "(B) (a)-(IV),(b)-(II),(c)-(I),(d)-(III)", "(C) (a)-(II),(b)-(I),(c)-(III),(d)-(IV)", "(D) (a)-(III),(b)-(I),(c)-(II),(d)-(IV)"],
        ans: 3,
        exp: "<b>(D) (a)-(III),(b)-(I),(c)-(II),(d)-(IV)</b><br>Inkjet printers propel droplets of ink onto paper; LCD screens use the light modulating properties of liquid crystals; LED screens use an array of light-emitting diodes as pixels; laser printers transfer electrically charged powdered ink (toner) onto paper."
    },
    {
        q: "<b>June 2023</b><br>Which of the following statements are true?<br>(a) CPU speed is measured in kilobytes (KB) and gigabytes (GB)<br>(b) The size of a monitor is measured diagonally across the screen.<br>(c) Laser Printer resolution is measured in dots per inch.<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a) and (b) only", "(B) (a) and (c) only", "(C) (b) and (c) only", "(D) (a), (b) and (c)"],
        ans: 2,
        exp: "<b>(C) (b) and (c) only</b><br>(a) is false: CPU speed (clock rate) is measured in Hertz, while KB and GB are units of storage. (b) is true: monitor size is measured diagonally across the screen. (c) is true: printer resolution is measured in dots per inch (DPI)."
    },
    {
        q: "Which of the following statements A-D apply to a laser printer?<br><br>(a) It uses a rotating drum to transfer the image to the paper.<br>(b) It uses powdered toner.<br>(c) It uses nozzles to spray droplets on to the paper.<br>(d) It uses a print head mechanism that moves side to side.<br><br>Choose the most appropriate answer from the options given below :",
        opts: ["(A) (a) and (b) only", "(B) (c) and (d) only", "(C) (a) and (c) only", "(D) (b) and (d) only"],
        ans: 0,
        exp: "<b>(A) (a) and (b) only</b><br>Laser printers use powdered toner, which is attracted to the charged areas on a rotating drum and then transferred onto the paper. Spraying droplets through nozzles (c) and a print head that moves side to side (d) are characteristics of inkjet printers, not laser printers."
    },
    {
        q: "<b>June 2023</b><br>Given below are two statements:<br><br>Statement (I): Using 3D printers, prosthetic limbs can be made to exactly fit the recipient.<br>Statement (II): OLEDs consume more power than LCD/LED formats and thus produce more heat.<br><br>In the light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statements (I) and Statement (II) are true.", "(B) Both Statements (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true"],
        ans: 2,
        exp: "<b>(C) Statement (I) is true but Statement (II) is false.</b><br>3D printing (additive manufacturing) is the construction of a three-dimensional object from a CAD model or digital 3D model, with material deposited, joined or solidified under computer control, typically layer by layer, so items such as prosthetic limbs can be custom-made. OLEDs, however, consume less power than LCD/LED formats, so Statement (II) is false."
    },
    {
        q: "<b>Dec 2023</b><br>Identify the correct order of the terms A-E to complete the following paragraph about computer devices and technology:<br>An _____ allows a user to write on a surface using a pen, and the text and drawings can then be captured and stored for later use. An ____ printer produces a hard copy of a document using _____ and piezoelectric technology. A _____ printer uses a _____ drum, and positive and negative charges, to produce a hard copy of a document.<br><br>A. inkjet<br>B. interactive whiteboard<br>C. laser<br>D. rotating<br>E. thermal bubble<br><br>Choose the correct answer from the options given below.",
        opts: ["1. BEADC", "2. BAECD", "3. ABECD", "4. EDCBA"],
        ans: 1,
        exp: "<b>2. BAECD</b><br>An interactive whiteboard (B) lets a user write with a pen and captures the text and drawings. An inkjet (A) printer produces a hard copy using thermal bubble (E) and piezoelectric technology. A laser (C) printer uses a rotating (D) drum, and positive and negative charges, to produce a hard copy."
    },
    {
        q: "<b>Dec 2023</b><br>Given below are two statements<br><br>Statement (I): An output device that creates an object by building layer upon player of material is called 3D printer. It is widely used in CAD applications<br>Statement (II): Laptops can be used even when not plugged into an electricity socket<br><br>In light of the above statements, choose the most appropriate answer from the options given below",
        opts: ["1. Both Statement (I) and Statement (II) are true", "2. Both Statement (I) and Statement (II) are false", "3. Statement (I) is true but Statement (II) is false", "4. Statement (I) is false but Statement (II) is true"],
        ans: 0,
        exp: "<b>1. Both Statement (I) and Statement (II) are true</b><br>3D printing, also known as additive manufacturing, creates a three-dimensional object layer by layer from a computer-created (CAD) design, by laying down thin layers of liquid or powdered plastic, metal or cement and fusing them together. Laptops have batteries, so they can be used without being plugged into an electricity socket."
    }
];