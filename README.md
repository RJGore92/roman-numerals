# Epicodus Intro to Programming Unit 3.4 Practice: Roman Numerals

#### Roman Numeral Converter Project, 01/24/2019 start date, 01/25/2019.

#### By **Robert James "Jimmy" Gore**

## Description

This project's primary purpose is to convert numbers within a specific range into Roman Numerals utilizing skills learned in previous assignments

## Setup/Installation Requirements

* Install Git Bash for Git repository cloning of the project
* Install Atom for review and edit of Code
* To access repository for project and review code, first clone repository at the appropriate link, then use Git Bash and/or Atom to open the project folder.
* GitHub Repository link is https://github.com/RJGore92/roman-numerals.

## Known Bugs

No known bugs are present in this project.

## Assignment Specs

#### Below are input examples for the Roman Numeral Converter assignment and their expected outputs, as well as details about limitations for inputs.

* Inputs are restricted to numeric-type, with inputs limited in range between 1 and 3,999.  Negative numbers, zeroes, and numbers greater than 3,999 have no true roman numeral output.

* Roman Numerals, by definition, have a set or rules to follow beyond the limitations above.  Examples of such rules are as follows:
1. The most basic rule is that you add all roman numeral values in the present chain.  III is 3, LXVI is 66, CXV is 115, etc.
2. The exception to rule number one is that there may not be more than three of the same Roman Numeral in a consecutive chain at any point in the numeric value.  For instance, 4 (while incorrectly represented as IIII at times on clocks) is properly represented as IV.  Further examples are IX for 9, XL for 40, XC for 90, and so on.  Limitations of Roman Numeral values and symbols prevent any number at 4,000 or above mostly because of this rule.
3. The values in thousands, hundreds, tens, and ones must all be separated in chain.  As described within the rules of Roman Numerals,  XCIX is the proper calculation and output for the number 99, not IC.  An additional example of this limitation is 999, which is represented by CMXCIX, not IM.

* Below are further input examples beyond what are listed above in the rules stated.  Inputs are in standard numeric values, and outputs are the Roman Numeral conversions of the input.
1. Input: 248, Output: CCXLVIII
2. Input: 1170, Output: MCLXX
3. Input: 944, Output: CMXLIV


## Technologies Used

* Git Bash
* Atom
* HTML
* MD
* CSS
* Bootstrap
* JavaScript
* jQuery

### License

Copyright (c) 2019 **Robert James "Jimmy" Gore**
