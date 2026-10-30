var rawQuestions = [
    {
        q: "<b>June 2019</b><br>Jatin's laptop has a LCD screen. The acronym LCD stands for:",
        opts: ["(A) Light Crystal Display", "(B) Liquid Compact Display", "(C) Light Compact Display", "(D) Liquid Crystal Display"],
        ans: 3,
        exp: "<b>(D) Liquid Crystal Display</b><br>LCD is a non-emissive (non-emitter/passive) flat panel display. Non-emissive displays use optical effects to convert sunlight or some other source into graphic patterns."
    },
    {
        q: "<b>Nov 2020</b><br>In display technology, CRT stands for",
        opts: ["(A) Cathode Ray Transmission", "(B) Computer Ray Transmission", "(C) Cathode Ray Tube", "(D) Cathode Ray Transducer"],
        ans: 2,
        exp: "<b>(C) Cathode Ray Tube</b><br>CRT is a vacuum tube in which a fluorescent projector produces a trace of an electron beam, deflected by induced magnetic and electric fields. Its purpose is to translate an electrical signal into a visual image.<br>Basic parts of a CRT: Electron Gun (generates a stream of electrons), Anodes (accelerate electrons), Vertical and Horizontal Deflection Panels (modify the regulation of electron beams), Fluorescent screen (made of phosphor, generates light when struck by the beam) and Evacuated Glass Envelope (carries the entire tube)."
    },
    {
        q: "<b>March 2023</b><br>Match List I with List II<br><table border='1' cellpadding='4' style='border-collapse:collapse;'><tr><td><b>LIST I<br>(Output Device)</b></td><td><b>LIST II<br>(Description)</b></td></tr><tr><td>(a) Inkjet printer</td><td>(I) Flat panel display that uses the light modulating properties of liquid crystals.</td></tr><tr><td>(b) LCD screen</td><td>(II) Flat panel display that uses an array of light-emitting diodes as pixels.</td></tr><tr><td>(c) LED screen</td><td>(III) Droplets of ink are propelled onto paper.</td></tr><tr><td>(d) Laser Printer</td><td>(IV) Electrically charged powdered ink is transferred onto paper.</td></tr></table><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a)-(IV),(b)-(I),(c)-(II),(d)-(III)", "(B) (a)-(IV),(b)-(II),(c)-(I),(d)-(III)", "(C) (a)-(II),(b)-(I),(c)-(III),(d)-(IV)", "(D) (a)-(III),(b)-(I),(c)-(II),(d)-(IV)"],
        ans: 3,
        exp: "<b>(D) (a)-(III),(b)-(I),(c)-(II),(d)-(IV)</b><br>Inkjet printers propel droplets of ink onto paper; LCD screens use the light modulating properties of liquid crystals; LED screens use an array of light-emitting diodes as pixels; laser printers transfer electrically charged powdered ink (toner) onto paper."
    },
    {
        q: "<b>June 2023</b><br>Danny is buying a new computer that has an LED display. Which of the following statements about LED displays are true?<br><br>(a) It is a flat panel display<br>(b) It creates images using red, green and blue diodes.<br>(c) It is not very energy efficient and gives off heat<br>(d) It can be used in mobile devices such as smartphones and tablets<br>(e) It is always a front-lit display<br><br>Choose the correct answer from the options given below:",
        opts: ["(A) (a), (b) & (d) only", "(B) (a), (c) & (e) only", "(C) (b), (d) & (e) only", "(D) (a), (b), (d) & (e) only"],
        ans: 0,
        exp: "<b>(A) (a), (b) & (d) only</b><br>LED displays are flat panel displays. They use a combination of red, green and blue light-emitting diodes to create images by adjusting the intensity of each diode. They are commonly used in smartphones, tablets and laptops because of their compact size and energy efficiency. They consume less power and generate less heat, so (c) is false. They can be either front-lit or backlit, so (e) is false."
    },
    {
        q: "<b>June 2023</b><br>Given below are two statements:<br><br>Statement (I): Using 3D printers, prosthetic limbs can be made to exactly fit the recipient.<br>Statement (II): OLEDs consume more power than LCD/LED formats and thus produce more heat.<br><br>In the light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statements (I) and Statement (II) are true.", "(B) Both Statements (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true"],
        ans: 2,
        exp: "<b>(C) Statement (I) is true but Statement (II) is false.</b><br>OLED (Organic Light Emitting Diodes) is a flat light-emitting technology made by placing a series of organic thin films between two conductors. OLEDs are emissive displays that do not require a backlight, so they are thinner and more efficient than LCD displays, with lower power consumption, better image quality (contrast, brightness, viewing angle, colour range, refresh rate), simpler design (ultra-thin, flexible, foldable, transparent displays) and better durability. Hence Statement (II) is false."
    },
    {
        q: "<b>Dec 2023</b><br>Which of the following pair of acronym and its expansion are incorrectly matched ?<br><br>(1) LED - Light Emitting Diode<br>(2) CRT - Cathode Ray Tube<br>(3) LCD - Liquid Control Display<br>(4) VDU - Video Display Unit",
        opts: ["(1) LED - Light Emitting Diode", "(2) CRT - Cathode Ray Tube", "(3) LCD - Liquid Control Display", "(4) VDU - Video Display Unit"],
        ans: 2,
        exp: "<b>(3) LCD - Liquid Control Display</b><br>LCD stands for Liquid Crystal Display, not 'Liquid Control Display'. The other three pairs are correctly matched."
    },
    {
        q: "<b>Dec 2023</b><br>Which of the following statements are correct with reference to Organic Light-Emitting Diodes (OLEDs)?<br><br>A. Because of plastic organic layers, OLEDs are much thicker and heavier than conventional LCD/LED formats<br>B. OLEDs give a brighter light than LEDs leading to more vivid colours<br>C. OLEDs produce a much larger field of view than LCD/LED formats<br>D. OLEDs require some form of back-lighting so that the screen can be lit up<br>E. OLEDs consume more power than LCD/LED formats and thus produce more heat<br><br>Choose the correct answer from the options given below",
        opts: ["1. (A), (B) and (C) only", "2. (B), (C) and (E) only", "3. (C) (D) and (E) only", "4. (B) and (C) only"],
        ans: 3,
        exp: "<b>4. (B) and (C) only</b><br>OLEDs are emissive displays that need no backlight (so D is false), are thinner and more efficient than LCDs (so A and E are false), and give improved image quality: better contrast, higher brightness, fuller viewing angle and a wider colour range (so B and C are true). OLED also scores best on colour, contrast and power consumption, but is on average the most expensive of the three technologies."
    }
];