var rawQuestions = [
    {
        q: "<b>June 2015</b><br>Which of the following is not open source software?",
        opts: ["(A) Apache HTTP server", "(B) Internet explorer", "(C) Fedora Linux", "(D) Open office"],
        ans: 1,
        exp: "<b>(B) Internet explorer</b><br>Internet Explorer is proprietary software from Microsoft. Apache HTTP server, Fedora Linux and Open Office are open source.<br><br>Open source software (OSS) is distributed with its source code, making it available for use, modification and distribution with its original rights. Proprietary software is copyrighted and bears limits against use, distribution and modification imposed by its publisher, vendor or developer. Shareware can be downloaded from the internet with a trial period. Freeware is completely free of cost, but users cannot modify or resell it. Betaware is software still in the development and testing phase before final release.<br>Examples of open source applications: GIMP, Python, Mozilla Firefox, PyTorch, GNU, VLC Media Player, Audacity, WordPress, BitTorrent, PHP, Brave Browser, Blender, MySQL, Linux, Ruby on Rails, FileZilla, Inkscape, Apache OpenOffice, Krita, KeePass, LibreOffice, VirtualBox, Zimbra, 7-Zip."
    },
    {
        q: "<b>June 2019</b><br>Software that you can download for free, but have to pay to continue its use after a trial period is called:",
        opts: ["(A) public domain software", "(B) freeware", "(C) open-source software", "(D) Shareware"],
        ans: 3,
        exp: "<b>(D) Shareware</b><br>Shareware can be downloaded from the internet with a trial period during which customers can use the software for free; payment is required to continue using it.<br><br>Types of shareware: Adware (a type of malware with pop-up ads), Nagware (never-ending reminders to pay), Donationware (fully operational software that requests donations), Freemium (free basic features, payment to upgrade), Trialware (timed free period before the user is locked out), Crippleware (disables key features for non-paying users).<br>Examples: Doom (demoware), Adobe Photoshop (shareware), WinRAR (nagware), Skype (adware)."
    },
    {
        q: "<b>June 2019</b><br>Which of the following is an example of proprietary system software?",
        opts: ["(1) Linux", "(2) Microsoft Internet explorer", "(3) Microsoft office", "(4) Microsoft windows"],
        ans: 3,
        exp: "<b>(4) Microsoft windows</b><br>Windows is an operating system (system software) that is proprietary. Linux is open source, while Internet Explorer and Microsoft Office are proprietary application software.<br><br>Proprietary software remains the property of its owner/creator and is used by end-users/organizations under predefined conditions. It may also be called closed-source or commercial software. Conditions include: re-distribution, re-sale and modification are not allowed. Examples: MS Windows, Apple Safari, Yahoo Chat client, WinRAR, iTunes, Microsoft Office, Skype, Mac, Google Earth, Gmail, Adobe Acrobat, McAfee."
    },
    {
        q: "Which of the following is an open source software ?",
        opts: ["(1) MS Word", "(2) Windows", "(3) Mozilla Firefox", "(4) Acrobat Reader"],
        ans: 2,
        exp: "<b>(3) Mozilla Firefox</b><br>Mozilla Firefox is open source. MS Word, Windows and Acrobat Reader are proprietary software."
    },
    {
        q: "<b>November 2021</b><br>Which one of the following is a disadvantage of using proprietary software rather than open source software?",
        opts: ["(A) Proprietary software can only be accessed with a password", "(B) Proprietary software can only be used on proprietary systems", "(C) Proprietary software can only be used with an Internet connection", "(D) Proprietary software is usually more expensive"],
        ans: 3,
        exp: "<b>(D) Proprietary software is usually more expensive</b><br>Proprietary software is commercial software owned by its creator and used under predefined conditions (no re-distribution, re-sale or modification), and it usually costs more than open source software, which is available in source code form without additional cost."
    },
    {
        q: "<b>November 2021</b><br>Given below are two statements :<br>Statement I : CPU executes software directly from secondary memory.<br>Statement II : A software is termed as Open Source Software if it can be downloaded from the Internet.<br>In the light of the above statements, Choose the correct answer from the options given below :",
        opts: ["(A) Both Statement I and Statement II are true.", "(B) Both Statement I and Statement II are false.", "(C) Statement I is true but Statement II is false.", "(D) Statement I is false but Statement II is true."],
        ans: 1,
        exp: "<b>(B) Both Statement I and Statement II are false.</b><br>The CPU executes a program stored as a sequence of machine language instructions in the main (primary) memory, by repeatedly fetching an instruction from memory and executing it; secondary memory is auxiliary memory that stores data permanently. So Statement I is false. Software is open source if its source code is available to share, study and modify, not merely because it can be downloaded from the Internet, so Statement II is false."
    },
    {
        q: "<b>October 2022</b><br>A software is termed as an open-source software if",
        opts: ["(A) the developer company is open 24 x 7", "(B) its source code is available to share, study and modify", "(C) it can be downloaded from the Internet", "(D) it is available free of cost"],
        ans: 1,
        exp: "<b>(B) its source code is available to share, study and modify</b><br>Open-source software (OSS) is computer software whose source is open, so the general public can access and use it. It is released through a license that makes its source code legally available to end-users, and it is distributed with its source code, available for use, modification and distribution with its original rights."
    },
    {
        q: "<b>October 2022</b><br>Miss Anita is excited to use a new software which is freely available to download but she cannot modify or change the source code, Anita is using:",
        opts: ["(A) Freeware", "(B) Open-source software", "(C) Firmware", "(D) Liveware"],
        ans: 0,
        exp: "<b>(A) Freeware</b><br>Freeware is completely free of cost and can be downloaded from the Internet. However, users are only given the right to use the software; they are not allowed to modify and/or resell it. Freeware differs from free software, as the latter allows a user to modify source code for republishing or integration with other software. Examples: Adobe Reader, Audacity, ImgBurn, Skype, TeamViewer, Yahoo Messenger, Telegram, WeChat."
    },
    {
        q: "<b>June 2023</b><br>What is the name of the computing term described below?<br>Software that gives the user the chance to try it out free of charge before actually buying it. The software is subject to the usual copyright laws. As a rule, not all the features found in the full version are available at this stage.",
        opts: ["(A) Freeware", "(B) Shareware", "(C) Firmware", "(D) Malware"],
        ans: 1,
        exp: "<b>(B) Shareware</b><br>Shareware can be downloaded from the internet with a trial period during which customers can use the software for free. It remains under copyright and often has limited features until purchased."
    },
    {
        q: "<b>June 2023</b><br>Given below are two statements:<br>Statement (I): Shareware is a software that the users can try out for a trial period only, before being charged.<br>Statement (II): Freeware is a software that the users can download free of charge, but they cannot modify the source code in any way.<br>In the light of the above statements, choose the correct answer from the options given below",
        opts: ["(A) Both Statements (I) and Statement (II) are true.", "(B) Both Statements (I) and Statement (II) are false.", "(C) Statement (I) is true but Statement (II) is false.", "(D) Statement (I) is false but Statement (II) is true."],
        ans: 0,
        exp: "<b>(A) Both Statements (I) and Statement (II) are true.</b><br>Shareware is available for a free trial period before the user is charged. Freeware is completely free to download and use, but users are not allowed to modify or resell it."
    }
];