#!/usr/bin/env python3
"""
UGC NET Paper 1 – Ignition Batch Repository Scaffolder
Run this script once inside your local Git repository folder (`python setup_repo.py`)
to automatically create all 13 Subject Folders and a MANIFEST.md of all 144 PYQ file paths.

Note: You can ALSO initialize all 13 folders directly from your web browser
using the "Auto-Create 13 Repo Folders" button inside the 1-Click GitHub Publisher modal in index.html!
"""

import os
import re

SUBJECTS = [
    ("01-teaching-aptitude", "1. Teaching Aptitude", [
        "Teaching Aptitude PYQs - Part 1",
        "Teaching Aptitude PYQs - Part 2",
        "Teaching Aptitude PYQs - Part 3",
        "Teaching Aptitude PYQs - Part 4",
        "Teaching Aptitude PYQs - Part 5",
        "Teaching Aptitude PYQs - Part 6"
    ]),
    ("02-research-aptitude", "2. Research Aptitude", [
        "Research Aptitude PYQs - Session 1",
        "Research Aptitude PYQs - Session 2",
        "Research Aptitude PYQs - Session 3",
        "Research Aptitude PYQ Marathon - Session 1",
        "Research Aptitude PYQ Marathon - Session 2",
        "Research Aptitude PYQ Marathon - Session 3",
        "Research Aptitude PYQ Marathon - Session 4",
        "Research Aptitude - Revision Class"
    ]),
    ("03-ict", "3. Information and Communication Technology (ICT)", [
        "ICT Fundamentals - Part 1",
        "ICT Fundamentals - Part 2",
        "ICT Fundamentals - Part 3",
        "Computer Memory System - Part 1",
        "Computer Memory System - Part 2",
        "Operating Systems",
        "Types of Computer Software",
        "Units of Memory Measurement",
        "Memory-Related Numerical Problems",
        "Display Devices",
        "Printers and Printing Devices",
        "Internet-Related Terms - Part 1",
        "Internet-Related Terms - Part 2",
        "Malware and Its Types - Part 1",
        "Malware and Its Types - Part 2",
        "Number System - Part 1",
        "Number System - Part 2",
        "Number System - Part 3",
        "Miscellaneous ICT Topics",
        "MS Excel - Part 1",
        "MS Excel - Part 2",
        "ICT Revision - Part 1",
        "ICT Revision - Part 2",
        "ICT Revision - Part 3",
        "Current Technologies and Digital Communication Systems (DCS)",
        "Generations of Computers, Programming Languages, Web Technologies, Software and Memory Hierarchy"
    ]),
    ("04-communication", "4. Communication", [
        "Communication PYQs - Part 1",
        "Communication PYQs - Part 2",
        "Communication PYQs - Part 3"
    ]),
    ("05-mathematical-reasoning", "5. Mathematical Reasoning and Aptitude", [
        "Average - Part 1",
        "Average - Part 2",
        "Percentage",
        "Ratio and Proportion",
        "Problems on Ages - Part 1",
        "Problems on Ages - Part 2, and Time and Work",
        "Time, Speed and Distance, including Boats and Streams",
        "Simple Interest and Compound Interest",
        "Mixture and Alligation, Profit and Loss - Part 1",
        "Mixture and Alligation, Profit and Loss - Part 2",
        "Practice Session and Doubt-Clearing Session (DCS)",
        "New Topics for June 2025 - Part 1",
        "New Topics for June 2025 - Part 2",
        "Mathematical Reasoning and Aptitude - Revision Part 1",
        "Mathematical Reasoning and Aptitude - Revision Part 2",
        "Mathematical Reasoning and Aptitude - Revision Part 3",
        "Mathematical Reasoning and Aptitude - Revision Part 4"
    ]),
    ("06-logical-reasoning", "6. Logical Reasoning", [
        "Arguments - Part 1",
        "Arguments - Part 2",
        "Square of Opposition",
        "Moods and Figures of Categorical Syllogisms",
        "Formal Fallacies",
        "Immediate Inference",
        "Informal Fallacies",
        "Syllogisms",
        "Coding and Decoding",
        "Blood Relations and Direction Sense"
    ]),
    ("07-higher-education", "7. Higher Education", [
        "Higher Education - Previous Year Questions, Session 1",
        "Higher Education - Previous Year Questions, Session 2",
        "Higher Education - Previous Year Questions, Session 3",
        "Higher Education - Previous Year Questions, Session 4",
        "Higher Education - Previous Year Questions, Session 5",
        "Higher Education - Previous Year Questions, Session 6",
        "Higher Education PYQs - Part 1",
        "Higher Education PYQs - Part 2",
        "Higher Education PYQs - Part 3",
        "Higher Education PYQs - Part 4, Entry 1",
        "Higher Education PYQs - Part 4, Entry 2",
        "Higher Education PYQs - Part 5",
        "Agencies and Institutions in Higher Education - Part 2",
        "Higher Education - Revision Part 1",
        "Higher Education - Revision Part 2",
        "Higher Education - Revision Part 3"
    ]),
    ("08-pde", "8. People, Development and Environment (PDE)", [
        "PDE-Previous Year Questions, Session 1",
        "PDE - Previous Year Questions, Session 2",
        "PDE - Previous Year Questions, Session 3",
        "PDE - Previous Year Questions, Session 4",
        "PDE PYQs - Part 1",
        "PDE PYQs - Part 2",
        "PDE PYQs - Part 3",
        "PDE PYQs - Part 4",
        "PDE Session 1 - Topic Not Specified",
        "PDE Session 2 - Topic Not Specified",
        "PDE Session 3 - Topic Not Specified",
        "PDE Session 4 - Topic Not Specified",
        "PDE Session 5 - Topic Not Specified",
        "PDE Session 6 - Topic Not Specified",
        "Digital Communication Systems (DCS) - MCQ Practice Session",
        "MCQ Practice Session",
        "PDE - Revision Part 1",
        "PDE - Revision Part 2",
        "PDE - Revision Part 3",
        "December 2025 PYQs",
        "June 2025 PYQs",
        "DCS and MCQ Practice Session (2020-2024)",
        "PDE PYQs - Additional Entry"
    ]),
    ("09-data-interpretation", "9. Data Interpretation (DI)", [
        "Data Interpretation - Revision Part 1",
        "Data Interpretation - Revision Part 2",
        "Data Interpretation - Revision Part 3",
        "DI Practice Set 1",
        "DI Practice Set 2 and Doubt-Clearing Session",
        "DI Practice Set 3",
        "Divisibility Rules and Doubt-Clearing Session",
        "DI Practice Set 4",
        "DI Practice Set 5",
        "DI Practice Set 6",
        "DI Practice Set 7"
    ]),
    ("10-crash-course", "10. Crash Course", [
        "Research Aptitude - Complete Revision",
        "Logical Reasoning - Complete Revision"
    ]),
    ("11-indian-logic", "11. Indian Logic", [
        "Indian Logic PYQs - Part 1",
        "Indian Logic - Revision Part 1",
        "Indian Logic - Revision Part 2"
    ]),
    ("12-counselling-session", "12. Counselling Session", [
        "Counselling Session"
    ]),
    ("13-free-sessions", "13. Free Sessions", [
        "Free Sessions"
    ])
]


def sanitize_filename(idx: int, title: str) -> str:
    clean = re.sub(r"^\d+[\.\s]+", "", title)
    clean = re.sub(r"[^a-zA-Z0-9]+", "_", clean)
    clean = clean.strip("_")
    return f"{idx}__{clean}.js"


def main():
    base_dir = "questions"
    os.makedirs(base_dir, exist_ok=True)
    manifest_lines = [
        "# UGC NET Paper 1 – Ignition Batch File Path Manifest\n",
        "All 13 Subjects & 144 Sessions mapped to their exact `.js` paths.\n\n"
    ]

    total_files = 0
    for folder, name, topics in SUBJECTS:
        folder_path = os.path.join(base_dir, folder)
        os.makedirs(folder_path, exist_ok=True)

        # Create .gitkeep so Git tracks empty directories immediately
        gitkeep_path = os.path.join(folder_path, ".gitkeep")
        with open(gitkeep_path, "w", encoding="utf-8") as f:
            f.write(f"# {name}\n")

        manifest_lines.append(f"## {name} (`questions/{folder}/`)\n")
        for i, topic in enumerate(topics, start=1):
            fname = sanitize_filename(i, topic)
            rel_path = f"questions/{folder}/{fname}"
            manifest_lines.append(f"- **{i}. {topic}** → `{rel_path}`\n")
            total_files += 1
        manifest_lines.append("\n")

    with open("MANIFEST.md", "w", encoding="utf-8") as mf:
        mf.writelines(manifest_lines)

    print(f"Created 13 subject folders under 'questions/' and mapped {total_files} PYQ sessions in MANIFEST.md!")


if __name__ == "__main__":
    main()