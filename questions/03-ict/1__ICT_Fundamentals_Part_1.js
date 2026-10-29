var rawQuestions = [
    {
        q: "<b>June 2015</b><br>Which of the following is not an output device?",
        opts: ["(A) Keyboard", "(B) Printer", "(C) Speaker", "(D) Monitor"],
        ans: 0,
        exp: "<b>(A) Keyboard</b><br>Keyboard is an input device. Printer, Speaker and Monitor are output devices.<br><br><b>Input devices:</b> Graphics Tablets, Video Capture Hardware, Trackballs, Barcode reader, Digital camera, MIDI keyboard, Gamepad, Joystick, Keyboard, Cameras, Microphone, Mouse (pointing device), Scanner, Webcam, Touchpads, Electronic Whiteboard, OMR, OCR, Pen Input, Punch card reader, MICR (Magnetic Ink Character Reader), Magnetic Tape Drive.<br><b>Output devices:</b> LCD Projection Panels, Monitor (LED, LCD, CRT etc), Printers (all types), Plotters, Microfiche Projector, Head Phone, Computer Output Microfilm (COM), Speaker(s), Visual Display Unit, Film Recorder."
    },
    {
        q: "<b>Dec 2015</b><br>Which of the following is not an input device?",
        opts: ["(A) Microphone", "(B) Keyboard", "(C) Joystick", "(D) Monitor"],
        ans: 3,
        exp: "<b>(D) Monitor</b><br>Monitor is an output device. Microphone, Keyboard and Joystick are input devices."
    },
    {
        q: "<b>Dec 2015</b><br>NMEICT stands for:",
        opts: ["(A) National Mission on Education through ICT", "(B) National Mission on E-governance through ICT", "(C) National Mission on E-commerce through ICT", "(D) National Mission on E-learning through ICT"],
        ans: 0,
        exp: "<b>(A) National Mission on Education through ICT</b><br>The National Mission on Education through ICT (NMEICT) was launched on February 3, 2009 at Tirupati, Andhra Pradesh as a Centrally Sponsored Scheme to leverage the potential of ICT in the teaching and learning process.<br>It was expected to be a major intervention in enhancing the Gross Enrolment Ratio (GER) in Higher Education by 5 percentage points during the Five Year Plan period.<br>The three cardinal principles of Education Policy, viz. access, equity and quality, could be served well by providing connectivity to all colleges and universities, providing low cost and affordable access-cum-computing devices to students and teachers, and providing high quality e-content free of cost to all learners in the country.<br>It seeks to bridge the digital divide, i.e. the gap in the skills to use computing devices for teaching and learning among urban and rural teachers/learners in the Higher Education domain, and empower those who have hitherto remained untouched by the digital revolution and have not been able to join the mainstream of the knowledge economy."
    },
    {
        q: "<b>July 2016</b><br>The statement “the study, development, implementation, support or management of computer-based information systems, particularly software applications and computer hardware” refers to",
        opts: ["(A) Information Technology (IT)", "(B) Information and collaborative Technology (ICT)", "(C) Information and data Technology (IDT)", "(D) Artificial Intelligence (AI)"],
        ans: 0,
        exp: "<b>(A) Information Technology (IT)</b><br>IT, or Information Technology, refers to the use of computers and other technology to manage information. IT can be used to store, retrieve, and share data; to communicate information between people and machines; and to process information quickly and efficiently. It is a powerful tool that can help organizations function more effectively.<br><br>ICT is an abbreviation for Information and Communications Technology. It encompasses all forms of technology used to generate, store, process, and distribute information, from traditional forms of communication such as telephone and television to more modern forms such as the internet and computer software."
    },
    {
        q: "<b>Jan 2017</b><br>Read the following two statements:<br>I. Information and Communication Technology (ICT) is considered a subset of Information Technology (IT).<br>II. The 'right to use' a piece of software is termed as copyright.<br>Which of the above statement(s) is/are CORRECT?",
        opts: ["(1) Both I and II", "(2) Neither I nor II", "(3) II only", "(4) I only"],
        ans: 1,
        exp: "<b>(2) Neither I nor II</b><br>Statement I is wrong: IT is a subset of ICT (ICT is the broader term). Statement II is wrong: the 'right to use' software is a license, not copyright.<br><br>Software is protected using the copyright system. The same protection is given as on books, music, or film, and the buyer of software has licensed the use of a copy of the product. Software is usually not purchased but a license is given to use it. Copyrights are used to protect computer software, but not all use copyrights to have rights in the software. Some use copyrights so that no one may have any rights in software; there is a new word for it: 'copyleft'."
    },
    {
        q: "<b>July 2018</b><br>Which of the following statements, regarding the term ICT is/are TRUE?<br>P: ICT is an acronym that stands for Indian Classical Technology.<br>Q: Converging technologies that exemplify ICT include the merging of audio-visual, telephone and computer networks through a common cabling system.",
        opts: ["(1) P Only", "(2) Q Only", "(3) P and Q", "(4) Neither P nor Q"],
        ans: 1,
        exp: "<b>(2) Q Only</b><br>ICT stands for Information and Communication Technology, so P is false. Q is true: ICT covers converging technologies such as audio-visual, telephone and computer networks.<br><br>Information and communication technologies (ICT) is defined as a diverse set of technological tools and resources used to transmit, store, create, share or exchange information. These include computers, the Internet (websites, blogs and emails), live broadcasting technologies (radio, television and webcasting), recorded broadcasting technologies (podcasting, audio and video players, and storage devices) and telephony (fixed or mobile, satellite, visio/video-conferencing, etc.)."
    },
    {
        q: "<b>July 2018</b><br>Which of the following statement(s) regarding the term ICT is/are true?<br><br>P: A digital divide is an economic and social equality with regard to access to, use of, or impact of ICT.<br>Q: ICT helps in international development by bridging the digital divide and providing equitable access to technologies.<br><br>Choose the correct answer from the following:",
        opts: ["(1) P only", "(2) Q only", "(3) P and Q", "(4) Neither P nor Q"],
        ans: 1,
        exp: "<b>(2) Q only</b><br>The digital divide is an economic and social <i>inequality</i> (not equality) with regard to access to, use of, or impact of ICT, so P is false. Q is true.<br><br>Digital Divide: the gap between those individuals in a society who are computer literate and have access to information resources like the Internet and those who are not. The term 'Digital' refers to Information and Communication Technology (ICT) while 'Divide' means differences, disparity, or gap. Those who have access to ICT benefit from its use; hence the digital divide is the socioeconomic difference between people in their access to ICT."
    },
    {
        q: "<b>Dec 2018</b><br>Which piece of the computer hardware is known as the “brain” of the computer and is responsible for processing instructions?",
        opts: ["(A) CPU", "(B) RAM", "(C) Motherboard", "(D) ROM"],
        ans: 0,
        exp: "<b>(A) CPU</b><br>The Central Processing Unit (CPU) is the brain of the computer. The CPU 'controls' what the computer does and is responsible for performing calculations and data processing. It also handles the movement of data to and from system memory. CPUs come in a variety of speeds known as 'clock rates', measured in 'Hertz'. Generally, the faster the clock rate, the faster the performance of the computer."
    },
    {
        q: "<b>Dec 2018</b><br>Which of the following are pointing devices?<br>a) Trackball<br>b) Touchscreen<br>c) Graphic tablet<br>d) Joystick<br>Codes:",
        opts: ["(A) (a) only", "(B) (a) and (d)", "(C) (a), (b) and (d)", "(D) (a), (b), (c) and (d)"],
        ans: 3,
        exp: "<b>(D) (a), (b), (c) and (d)</b><br>Common pointing devices include Mouse, Trackball, Joystick, Pointing stick, Wii Remote, Finger tracking, Graphics tablet and Stylus."
    },
    {
        q: "<b>Dec 2018</b><br>Computer peripherals are external devices connected to a computer. Which list contain input peripheral device only",
        opts: ["(A) speaker, scanner, mouse, modern", "(B) keyboard, projector, mouse, flash drive", "(C) microphone, track-ball mouse, scanner, touch screen", "(D) laser printer, graphic tablet, barcode reader, hard disk"],
        ans: 2,
        exp: "<b>(C) microphone, track-ball mouse, scanner, touch screen</b><br>All four in option (C) are input devices. Speaker, projector and laser printer are output devices; flash drive, hard disk and modem are not purely input devices.<br><br>A peripheral device is an internal or external auxiliary device of a computer system that is not involved in the primary operation of the computer but helps to put information into the computer or get information out of a computer. A peripheral may be an external device, an internal device, an input device, an output device, or a combination of those."
    }
];