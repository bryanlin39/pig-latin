<!-- template tricks:
-to change pairs to .pairs, "mv pairs .pairs"
-to delete the .git, "rm -rf .git"  -->


# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Specifications

* _Program adds "ay" to the end of a word_
  * _Example: i => iay_
* _For words beginning with a single consonant (including "y"), program moves consonant to end of word before adding "ay"._
  * _Example: car => arcay_
* _For words beginning with consecutive consonants, program moves consonants to end of word and adds "ay"._
  * _Example: scare => arescay_
* _Y is only treated as a consant when it is the first letter_
  * _Example: yes => esyay, bryan => Yanbray_
* _For words beginning with "qu", program moves the "qu" to end of word and adds "ay"._
  * _Example: question => estionquay_
* _For words beginning with a sequence of consonants ending in "qu", program moves the "u" along with the consonants to end of word and adds "ay"._
  * _Example: squeal => ealsquay_
* _Program splits sentences into words and performs pig latin rules on all words_
  * _Example: This is a sentence => isthay isay aay entencesay_
* _Program removes capitalization from word-beginning consonants and moves it to the vowel that begins the word after pig-latin transformation_
  * _Example: Bryan => Yanbray_
* _The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels._
  * _Example: 3 => 3_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**
