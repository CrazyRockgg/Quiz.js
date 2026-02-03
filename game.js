import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Welcome to the Computer Hardware Quiz!!!");

let score = 0;

const quizQuestions = {
    "What is the brain of the computer?": "cpu",
    "Which component stores data permanently?": "hard drive",
    "What is the primary memory called?": "ram",
    "Which component processes graphics?": "graphics card",
    "What connects all components together?": "motherboard",
    "What is the power supply unit abbreviated as?": "psu",
    "Which device is used for optical disc reading?": "cd drive",
    "What is the small battery on the motherboard called?": "cmos battery",
    "Which component cools the CPU?": "heat-sink",
    "What is used to input text and commands?": "keyboard",
    "Which device displays visual output?": "monitor",
    "What is the main circuit board called?": "motherboard",
    "Which port is used for connecting external devices?": "usb",
    "What stores data temporarily while the computer is on?": "ram",
    "What is the speed of the CPU measured in?": "ghz",
};