var rawQuestions = [
    {
        q: "<b>JUNE 2014</b><br>Which one of the following is not a/an image/graphic file format ?",
        opts: ["(A) PNG", "(B) GIF", "(C) BMP", "(D) GUI"],
        ans: 3,
        exp: "<b>(D) GUI</b><br>GUI (Graphical User Interface) is not an image format. Common image formats: JPEG (Joint Photographic Experts Group), GIF (Graphics Interchange Format), PNG (Portable Network Graphics), TIFF (Tagged Image File Format), BMP (Bitmap), PDF (Portable Document Format), PSD (Photoshop Document), EPS (Encapsulated PostScript), SVG (Scalable Vector Graphics), HEIF (High-Efficiency Image File Format), AI (Adobe Illustrated Document)."
    },
    {
        q: "<b>DEC 2014</b><br>CSS stands for",
        opts: ["(A) Cascading Style Sheets", "(B) Collecting Style Sheets", "(C) Comparative Style Sheets", "(D) Comprehensive Style Sheets"],
        ans: 0,
        exp: "<b>(A) Cascading Style Sheets</b><br>CSS describes how HTML elements are to be displayed on screen, paper, or in other media. It saves a lot of work because it can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files."
    },
    {
        q: "<b>DEC 2014</b><br>Binary equivalent of decimal number 35 is",
        opts: ["(A) 100011", "(B) 110001", "(C) 110101", "(D) 101011"],
        ans: 0,
        exp: "<b>(A) 100011</b><br>35 = 32 + 2 + 1 = 2<sup>5</sup> + 2<sup>1</sup> + 2<sup>0</sup>, so the binary equivalent is 100011."
    },
    {
        q: "<b>DEC 2014</b><br>gif, jpg, bmp, png are used as extensions for files which store",
        opts: ["(A) Audio data", "(B) Image data", "(C) Video data", "(D) Text data"],
        ans: 1,
        exp: "<b>(B) Image data</b><br>GIF, JPG (JPEG), BMP and PNG are all image/graphic file formats."
    },
    {
        q: "<b>DEC 2014</b><br>Symbols A-F are used in which one of the following?",
        opts: ["(A) Binary number system", "(B) Decimal number system", "(C) Hexadecimal number system", "(D) Octal number system"],
        ans: 2,
        exp: "<b>(C) Hexadecimal number system</b><br>The hexadecimal system has base 16 and uses the digits 0-9 and the symbols A-F (A = 10, B = 11, C = 12, D = 13, E = 14, F = 15)."
    },
    {
        q: "<b>JUNE 2015</b><br>Which one of the following represents the binary equivalent of the decimal number 25?",
        opts: ["(A) 11011", "(B) 10101", "(C) 01101", "(D) 11001"],
        ans: 3,
        exp: "<b>(D) 11001</b><br>25 = 16 + 8 + 1 = 2<sup>4</sup> + 2<sup>3</sup> + 2<sup>0</sup>, so the binary equivalent is 11001."
    },
    {
        q: "<b>JUNE 2015</b><br>Which is an instant messenger that is used for chatting?",
        opts: ["(A) Google Talk", "(B) AltaVista", "(C) MAC", "(D) Microsoft Office"],
        ans: 0,
        exp: "<b>(A) Google Talk</b><br>Google Talk became available in a Gmail user's window in 2005 to allow easy communication between email contacts. AltaVista is a search engine, MAC is a computer platform/address type, and Microsoft Office is a productivity suite."
    },
    {
        q: "<b>DEC 2015</b><br>Which of the following is an instant messaging application?<br>(a) WhatsApp<br>(b) Google Talk<br>(c) Viber<br><br>Select the correct answer from the codes given below:",
        opts: ["(A) (a) and (b) only", "(B) (b) and (c) only", "(C) (a) only", "(D) (a), (b) and (c)"],
        ans: 3,
        exp: "<b>(D) (a), (b) and (c)</b><br>WhatsApp, Google Talk and Viber are all instant messaging applications."
    },
    {
        q: "<b>DEC 2015</b><br>Which of the following enables us to send the same letter to different persons in MS Word?",
        opts: ["(A) Mail join", "(B) Mail copy", "(C) Mail insert", "(D) Mail merge"],
        ans: 3,
        exp: "<b>(D) Mail merge</b><br>Mail Merge is a powerful tool for writing a personalized e-mail or letter to many people at the same time. It uses data from a data source (e.g. a spreadsheet) and replaces placeholders/merge fields throughout the message with the relevant information for each individual."
    },
    {
        q: "<b>JULY 2016</b><br>An ASCII is a character-encoding scheme that is employed by personal computers in order to represent various characters, number and control keys that the computer user selects on the keyboard. ASCII is an acronym for",
        opts: ["(A) American Standard Code for Information Interchange", "(B) American Standard Code for Intelligent Information", "(C) American Standard Code for Information Integrity", "(D) American Standard Code for Isolated Information"],
        ans: 0,
        exp: "<b>(A) American Standard Code for Information Interchange</b><br>ASCII is a standard data-encoding format for electronic communication between computers. It assigns standard numeric values to letters, numerals, punctuation marks and other characters used in computers."
    },
    {
        q: "<b>JULY 2016</b><br>An unsolicited e-mail message sent to many recipients at once is a ________",
        opts: ["(A) Worm", "(B) Virus", "(C) Threat", "(D) Spam"],
        ans: 3,
        exp: "<b>(D) Spam</b><br>Email spam, also known as junk email, refers to unsolicited email messages, usually sent in bulk to a large list of recipients."
    },
    {
        q: "<b>JULY 2016</b><br>If the binary equivalent of the decimal number 48 is 110000, then the binary equivalent of the decimal number 51 is given by",
        opts: ["(A) 110011", "(B) 110010", "(C) 110001", "(D) 110100"],
        ans: 0,
        exp: "<b>(A) 110011</b><br>51 = 48 + 3. Adding 3 (binary 11) to 110000 gives 110011."
    },
    {
        q: "<b>JULY 2016</b><br>The process of copying files to a CD-ROM is known as ________",
        opts: ["(A) Burning", "(B) Zipping", "(C) Digitizing", "(D) Ripping"],
        ans: 0,
        exp: "<b>(A) Burning</b><br>'Burn' is a colloquial term meaning to write content to a CD, DVD or another recordable disc, using a special device called a CD burner or CD-R drive. The process is called burning because a laser in the drive uses heat to record the data on the disc."
    },
    {
        q: "<b>August 2016</b><br>Which of the following statements regarding the features of Information and Communication Technology (ICT) is/are true?<br><br>I. ICT are the main instruments for the creation of computer networks and the applications based on them.<br>II. ICT supports the spread of information and knowledge, separating the content from the place where it belongs physically.<br>III. The digital and virtual nature of most of ICT products allow the expenditure for them to be maximized.<br><br>Codes:",
        opts: ["(A) I and II only", "(B) I and III only", "(C) II and III only", "(D) I, II and III"],
        ans: 0,
        exp: "<b>(A) I and II only</b><br>Statements I and II correctly describe ICT. Statement III is wrong: the digital and virtual nature of most ICT products allows the expenditure on them to be minimized, not maximized."
    },
    {
        q: "<b>August 2016</b><br>With regard to e-mail, what does Bcc: mean?",
        opts: ["(A) Blind Computer Communication: - The users specified in the Bcc: field will get the e-mail and see the addresses in the to : and cc : fields.", "(B) Blind Carbon Copy: - The users specified in the Bcc: field will get the e-mail and see the addresses in the to: and cc: fields.", "(C) Blind Computer Communication:- The users specified in the Bcc : field will get the e-mail but it will be an audio file because this is how blind people get e-mail.", "(D) Blind Carbon Copy: The users specified in the Bcc: field will get the e-mail but will not see the addresses in the to: and cc: fields."],
        ans: 1,
        exp: "<b>(B) Blind Carbon Copy: - The users specified in the Bcc: field will get the e-mail and see the addresses in the to: and cc: fields.</b><br>Answer as marked in the source PDF. Bcc stands for Blind Carbon Copy. The PDF's CC vs BCC comparison notes: in CC all recipients can see each other's mail address, whereas in BCC the recipients cannot see each other's addresses, so BCC is preferred for mass emails and email lists."
    },
    {
        q: "<b>JAN 2017</b><br>Which of the following statement(s) is/are TRUE?<br><br>S1: The decimal number 11 is larger than the hexadecimal number 11.<br>S2: In the binary number 1110.101, the fractional part has the decimal value as 0.625.",
        opts: ["(1) S1 only", "(2) S2 only", "(3) Both S1 and S2", "(4) Neither S1 nor S2"],
        ans: 1,
        exp: "<b>(2) S2 only</b><br>S1 is false: hexadecimal 11 = 1 × 16 + 1 = 17, which is larger than decimal 11. S2 is true: the fractional part .101 = 1/2 + 0/4 + 1/8 = 0.5 + 0.125 = 0.625."
    },
    {
        q: "<b>JAN 2017</b><br>With regard to a word processing software, the process of combining static information in a publication together with variable information in a data source to create one merged publication is called",
        opts: ["(1) Electronic mail", "(2) Data sourcing", "(3) Mail merge", "(4) Spam mail"],
        ans: 2,
        exp: "<b>(3) Mail merge</b><br>Mail merge combines static content (the main document) with variable information from a data source (replacing merge fields) to create merged documents such as personalized letters."
    },
    {
        q: "<b>JAN 2017</b><br>DVD technology uses an optical media to store the digital data. DVD is an acronym for",
        opts: ["(1) Digital Vector Disc", "(2) Digital Volume Disc", "(3) Digital Versatile Disc", "(4) Digital Visualization Disc"],
        ans: 2,
        exp: "<b>(3) Digital Versatile Disc</b><br>DVD stands for Digital Versatile Disc (also commonly expanded as Digital Video Disc), an optical disc format used to store digital data."
    },
    {
        q: "<b>JAN 2017</b><br>Which of the following is a characteristic of Web2.0 applications?",
        opts: ["(1) Multiple users schedule their time to use Web2.0 applications one by one.", "(2) Web2.0 applications are focused on the ability for people to collaborate and share information online.", "(3) Web2.0 applications provide users with content rather than facilitating users to create it.", "(4) Web2.0 applications use only static pages."],
        ans: 1,
        exp: "<b>(2) Web2.0 applications are focused on the ability for people to collaborate and share information online.</b><br>Web 2.0 is the read-write / social web: dynamic pages, interactive content, user participation, software as a service and collaborative platforms (e.g. social networking sites, blogs, wikis, YouTube, Flickr). It was first coined by Darcy DiNucci in 1999. In contrast, Web 1.0 is the read-only web with static pages."
    }
];