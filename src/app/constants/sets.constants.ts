import { Set } from "../interfaces/sets.interface";

export const cardSets: Set[] = [
  {
    id: 1,
    name: "Hangeul Level 1",
    description: "Review your basic vowels.",
    cards: [
      {
        front: "으",
        back: '"eu"',
        extra: "Neutral (unhappy face) sound.",
      },
      {
        front: "오 ",
        back: '"oh"',
        extra: `The "o" sound from "bold".`,
      },
      {
        front: "우 ",
        back: '"Ooh"',
        extra: "",
      },
      {
        front: "이",
        back: '"ee"',
        extra: "",
      },
      {
        front: "어",
        back: '"uh", or "eo"',
        extra: "",
      },
      {
        front: "아",
        back: '"ah"',
        extra: "",
      },
      {
        front: "ㅇ",
        back: "Placeholder consonant.",
        extra:
          "Makes no sound at the beginning of a syllable. Turns a vowel into a full syllable block by forming a pair. ",
      },
      {
        front: "What does ㅣ represent?",
        back: "Symbol representing human beings",
        extra: "",
      },
      {
        front: "What does . represent?",
        back: "Smybol representing sky",
        extra: "",
      },
      {
        front: "What does ㅡ represent?",
        back: "Symbol representing ground",
        extra: "",
      },
      {
        front: "How English words are Koreanized",
        back: "Adding ㅡ to the end where it doesn't end in a vowel already.",
        extra: "",
      },
    ],
  },
  {
    id: 3,
    name: "Hangeul Level 2",
    description: "Review your introductory consonants.",
    cards: [
      {
        front: "ㄱ",
        back: '"G" or "K", a "clicky" G. ',
        extra:
          "Push your tongue forward slightly more forward than an English G would normally require.",
      },
      {
        front: "ㅋ",
        back: '"K".',
        extra: "",
      },
      {
        front: "ㄴ ",
        back: '"N" sound',
        extra: 'Tongue bottom of upper teeth. It\'s a "soft N".',
      },
      {
        front: "ㄷ",
        back: "D/Th",
        extra: "Keep tongue on top lower teeth",
      },
      {
        front: "ㄹ",
        back: 'A rolling "R". Can resemble the "L" sound in the middle of a word. ',
        extra: "",
      },
      {
        front: "ㅁ",
        back: '"M"',
        extra: "",
      },
      {
        front: "ㅂ",
        back: 'A soft "B".',
        extra: "",
      },
      {
        front: "ㄲ",
        back: '"G".',
        extra: "",
      },
      {
        front: "ㄸ",
        back: '"D". ',
        extra: "",
      },
      {
        front: "ㅌ",
        back: '"T".',
        extra: "",
      },
      {
        front: "ㅍ",
        back: '"P".',
        extra: "",
      },
      {
        front: "ㅃ",
        back: '"B".',
        extra: "",
      },
      {
        front:
          "The thing that happens to the sound of a consonant when you add lines to it.",
        back: "More friction in the sound, and higher pitch.",
        extra: "",
      },
    ],
  },
  {
    id: 5,
    name: "Hangeul Level 3",
    description: "Review ㅅ variations, and the ㅎ sound.",
    cards: [
      {
        front: "ㅅ",
        back: 'A soft "s"',
        extra: "",
      },
      {
        front: "ㅈ",
        back: 'Between "ch" and "j", light with the tongue.',
        extra: "",
      },
      {
        front: "What does ㅎ do when in a syllable block?",
        back: 'More friction when you let air through your mouth, like an "H".',
        extra: "오 = eo. 호 = heo.",
      },
      {
        front: "ㅊ",
        back: 'ㅊ= added friction and air to ㅈ (between "j" and "ch"). ',
        extra: "",
      },
      {
        front: "ㅆ",
        back: '"S"',
        extra: "Less air escape",
      },
      {
        front: "ㅉ",
        back: 'Added friction to (ㅈ) like "t". ',
        extra: "",
      },
    ],
  },
  {
    id: 6,
    name: "Hangeul Level 4",
    description: "Review your diphthongs, or compound vowels.",
    cards: [
      {
        front: "ㅘ",
        back: '"Wah". ',
        extra: "",
      },
      {
        front: "ㅝ",
        back: '"Wuh"',
        extra: "",
      },
      {
        front: "ㅐ",
        back: 'Ai without a mouth change, like "eh"',
        extra: "",
      },
      {
        front: "ㅔ",
        back: 'Ai, or "eh" much like ㅐ(which is more open). ',
        extra: "In most cases, functionally identical",
      },
      {
        front: "ㅞ",
        back: '"Weh", but with a hint of "ai"',
        extra: "",
      },
      {
        front: "ㅚ",
        back: '"Weh" with an "ai" sound',
        extra:
          'This one is less intuitive because there\'s no "ee" or "oh" sounds',
      },
      {
        front: "ㅙ",
        back: '"Weh", but with a hint of "ai"',
        extra: "",
      },
      {
        front: "ㅟ",
        back: '"We"',
        extra: "",
      },
      {
        front: "ㅢ",
        back: "eu-ee",
        extra: "This is phonetic, say as seen. ",
      },
    ],
  },
  {
    id: 7,
    name: "Hangeul Level 5",
    description: 'Quickly review the "Y" sound.',
    cards: [
      {
        front: 'Execution of "Y" in Hangeul',
        back: 'Adding an extra dot or line on a vowel will prepend a new sound of "Y".',
        extra: `You can take the following vowels:ㅏ,ㅓ,ㅗ,ㅜ,ㅐ,ㅔ. And add a line to them:ㅑ,ㅕ,ㅛ,ㅠ,ㅒ,ㅖ. Which adds a "y" sound to the beginning. ㅏ(Ah) would become ㅑ(Yah).`,
      },
    ],
  },
  {
    id: 8,
    name: "Hangeul Level 6",
    description: "Quick review of batchim and ending sounds.",
    cards: [
      {
        front: "ㅇ ending in a syllable block.",
        back: 'Ending "ng" sound, like sting and ring. ',
        extra: "",
      },
      {
        front: "How do you handle a consonant at the end of a word?",
        back: `Called "Batchim", a short stop.`,
        extra:
          'Most consonants are said normally at the end, but some are reduced to a simple form. These rules are called "batchim".',
      },
    ],
  },
  {
    id: 9,
    name: "Grammar - Beginner 1",
    description:
      "Review your grammar introduction with basic words and phrases.",
    cards: [
      {
        front: "안녕하세요",
        back: "Hello",
        extra:
          "안녕 = well-being, peace, health. 하세요 = you do, do you?, please do.",
      },
      {
        front: "감사합니다",
        back: "Thank you.",
        extra:
          "감사 = appreciation, thankfulness, gratitude. 합니다 = I do, I am doing. ",
      },
      {
        front: "네",
        back: "Yes",
        extra: "I agree. Affirmative. Yes? Uh huh. Yeah.",
      },
      {
        front: "아니요",
        back: "No.",
        extra: "I disagree. ",
      },
      {
        front: "맞아요",
        back: "You are right",
        extra: 'Can be used after 네 to say "Yes, you are right".',
      },
      {
        front: "안녕히 계세요",
        back: "Goodbye (they are staying)",
        extra: "Stay in peace",
      },
      {
        front: "안녕히 가세요",
        back: "Goodbye (they are going)",
        extra: "Go in peace",
      },
      {
        front: "죄송합니다",
        back: "I apologize",
        extra: "Chweh-song hamnida",
      },
      {
        front: "저기요",
        back: "Excuse me. (over there!) ",
        extra: 'Politely, "hey you over there!"',
      },
      {
        front: "잠시만요",
        back: "Just a second",
        extra: `"Excuse me" (passing through crowd bumping into people)`,
      },
    ],
  },
  {
    id: 10,
    name: "Grammar - Beginner 2",
    description:
      'Review "this", states of being, contextual locations, and more.',
    cards: [
      {
        front: "이거 (in 이거 뭐예요)",
        back: "This (thing)",
        extra: 'What is "THIS?" Also 이거 물이에요 - "This is water"',
      },
      {
        front: "뭐 in 뭐예요",
        back: "What? As in what is it?",
        extra: "",
      },
      {
        front: "이에요 and 예요",
        back: '"it is" or "is it"',
        extra: "The state of being.",
      },
      {
        front: "이",
        back: "This (near you)",
        extra: "",
      },
      {
        front: "저",
        back: "That (over there, not nearby other person)",
        extra: "",
      },
      {
        front: "그",
        back: "The / that (near the other person)",
        extra: "",
      },
      {
        front: "아니에요 ",
        back: "To be not (polite, present tense).",
        extra: "Can also be said in response to 'thank you'.",
      },
      {
        front: "은/는",
        back: "Marks the topic of the sentence, and puts emphasis on it.",
        extra: "이 책은 = This book (topic of this sentence)",
      },
    ],
  },
];
