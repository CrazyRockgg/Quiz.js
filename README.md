# Computer Hardware Quiz Game

A simple command-line quiz application that tests your knowledge about computer hardware components.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Quiz Questions](#quiz-questions)
- [Scoring](#scoring)
- [Project Structure](#project-structure)

## About

This interactive quiz game challenges users with questions about computer hardware components including CPU, memory, storage, graphics, motherboards, and more. It's designed as an educational tool to help learn and test computer hardware knowledge.

## Features

- **Interactive Command-Line Interface**: Questions appear one at a time with real-time user input
- **Case-Insensitive Answers**: User input is normalized to lowercase for flexible matching
- **Scoring System**: Tracks correct and incorrect answers throughout the quiz
- **Immediate Feedback**: Users receive instant feedback after each answer
- **15 Comprehensive Questions**: Covers various computer hardware topics

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed (version 12 or higher recommended)

2. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd quiz-app
   ```

3. Install the required dependency:
   ```bash
   npm install
   ```

## Usage

1. Run the quiz game:
   ```bash
   node game.js
   ```

2. Read the welcome message and start answering questions

3. Type your answer and press Enter for each question

4. View your final score when the quiz ends

### Example Session

```
Welcome to the Computer Hardware Quiz!!!
What is the brain of the computer? cpu
That's correct!!
Which component stores data permanently? hard drive
That's correct!!
What is the primary memory called? RAM
That's correct!!
...
Quiz finished! Your final score is: 14
```

## Quiz Questions

The quiz includes 15 questions covering:

| Topic | Question |
|-------|----------|
| CPU | What is the brain of the computer? |
| Storage | Which component stores data permanently? |
| Memory | What is the primary memory called? |
| Graphics | Which component processes graphics? |
| Motherboard | What connects all components together? |
| Power | What is the power supply unit abbreviated as? |
| Optical Drive | Which device is used for optical disc reading? |
| CMOS | What is the small battery on the motherboard called? |
| Cooling | Which component cools the CPU? |
| Input | What is used to input text and commands? |
| Output | Which device displays visual output? |
| Circuit Board | What is the main circuit board called? |
| Connectivity | Which port is used for connecting external devices? |
| Temporary Storage | What stores data temporarily while the computer is on? |
| Performance | What is the speed of the CPU measured in? |

## Scoring

- **+1 point** for each correct answer
- **-1 point** for each incorrect answer
- Final score can range from -15 to +15

### Score Interpretation

| Score Range | Rating |
|-------------|--------|
| 13-15 | Excellent! Hardware Expert |
| 10-12 | Very Good! Hardware Enthusiast |
| 7-9 | Good! Average User |
| 4-6 | Needs Improvement |
| 0-3 | Beginner |
| Negative | Keep Learning! |

## Project Structure

```
quiz-app/
├── game.js              # Main quiz application
├── package.json         # Node.js dependencies
├── package-lock.json    # Locked dependency versions
└── README.md           # This file
```

## Technical Details

### Dependencies

- **prompt-sync**: Enables synchronous user input in the command line

### Key Functions

- `normalizeAnswer(input)`: Converts user input to lowercase for case-insensitive comparison
- `checkAnswer(userAnswer, correctAnswer)`: Validates user answer and updates score

## Customization

### Adding New Questions

Navigate to line 23 of game .js and add new question and answer pairs

```javascript
const quizQuestions = {
    "Your new question here?": "answer",
    // Add more questions...
};
```

## Contributing

Feel free to contribute by:
- Adding more hardware questions
- Improving the scoring system
- Enhancing the user interface
- Adding language translations

## License

This project is open source and available under the MIT License.

## Author

Created as an educational tool for learning computer hardware components.
