import { NamesOfGroupIds, Set } from "../interfaces/sets.interface";

export const namesOfGroupIds: NamesOfGroupIds = {
  1: "Hangeul",
  2: "Grammar - Beginner",
};

export const cardSets: Set[] = [
  {
    id: 1,
    groupId: 1,
    name: "Hangeul Level 1",
    description: "Review your basic vowels.",
    cards: [
      {
        front: "으",
        back: '"eu"',
        extra: "Neutral (unhappy face) sound. ㅡ represents the ground.",
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
        extra: "ㅣ represents human beings.",
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
        front: ". (representation)",
        back: "This symbol represents the sky.",
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
    id: 2,
    groupId: 1,
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
    id: 3,
    groupId: 1,
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
    id: 5,
    groupId: 1,
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
    id: 5,
    groupId: 1,
    name: "Hangeul Level 5",
    description:
      'Quick review of batchim and ending sounds. "Y" is covered briefly.',
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
      {
        front: 'Execution of "Y" in Hangeul',
        back: 'Adding an extra dot or line on a vowel will prepend a new sound of "Y".',
        extra: `You can take the following vowels:ㅏ,ㅓ,ㅗ,ㅜ,ㅐ,ㅔ. And add a line to them:ㅑ,ㅕ,ㅛ,ㅠ,ㅒ,ㅖ. Which adds a "y" sound to the beginning. ㅏ(Ah) would become ㅑ(Yah).`,
      },
    ],
  },
  {
    id: 6,
    groupId: 1,
    name: "Hangeul Level 7 (Batchim)",
    description:
      'Review of batchim and ending sounds - in depth',
    cards: [
      {
        front: "Sound as final consonants: ㄱ, ㅋ, and ㄲ",
        back: 'Each has ending sound of ㄱ',
        extra: "",
      },
      {
        front: "Sound as final consonant: ㄴ",
        back: 'Has ending sound of ㄴ',
        extra: "",
      },
      {
        front: "Sound as final consonants: ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, and ㅎ",
        back: 'Each has ending sound of ㄷ',
        extra: "",
      },
      {
        front: "Sound as final consonant: ㄹ",
        back: 'Has ending sound of ㄹ',
        extra: "",
      },
      {
        front: "Sound as final consonant: ㅁ",
        back: 'Has ending sound of ㅁ',
        extra: "",
      },
      {
        front: "Sound as final consonants: ㅂ, and ㅍ",
        back: 'Each has ending sound of ㅂ',
        extra: "",
      },
      {
        front: "Sound as final consonant: ㅇ",
        back: 'Has ending sound of ㅇ',
        extra: "",
      },
    ],
  },
  {
    id: 8,
    groupId: 2,
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
    id: 9,
    groupId: 2,
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
    ],
  },
  {
    id: 10,
    groupId: 2,
    name: "Grammar - Beginner 3",
    description: "Review participles and word markers, and more words",
    cards: [
      {
        front: "은/는",
        back: 'Marks the topic of the sentence, and puts emphasis on it. Topic: about something, "as for" something, or unlike other things or different from other things (comparison). As if to say "this is about what we are speaking".',
        extra:
          '이 책은 = This book (topic of this sentence). "This book <unlike other books>"',
      },
      {
        front: "이/가",
        back: "Marks the subject of the sentence.",
        extra:
          '이 책이 = This book (subject of this sentence). "This book <other books notwithstanding>"',
      },
      {
        front: "이 책은 vs 이 책이 vs just 이 책",
        back: "이 책은 = This book (topic of this sentence), 이 책이 = This book (subject of this sentence), 이 책 = This book (no emphasis on topic or subject).",
        extra: `If you say "This book is good <topic marker>", you are saying it's better than all other books. If you say "This book is good <subject marker>", you are saying it's good, not compared to anything else or other books notwithstanding.`,
        alwaysFrontFirst: true,
      },
      {
        front: "있어요",
        back: "Does exist, is there, is in possession of.",
        extra: `The noun goes in front. 물 있어요 = Water + there is`,
      },
      {
        front: "없어요",
        back: "Does not exist, is not there, is not in possession of.",
        extra: "The noun goes in front. 물 없어요 = Water + there is not",
      },
      {
        front: "주세요",
        back: "<thing> - please give me",
        extra: "Informal and formal, works in all contexts.",
      },
      { front: "맛", back: "Taste", extra: `"Mat"` },
      {
        front: "맛있어요",
        back: "It is tasty / It is delicious.",
        extra: `Literally "It has taste"`,
      },
      {
        front: "맛없어요",
        back: "It is not tasty. / It is not delicious. / It tastes awful.",
        extra: `Literally "It does not have taste"`,
      },
      {
        front: "잘 먹겠습니다",
        back: `"I am going to eat well” or “I will eat well."`,
        extra: "",
      },
      {
        front: "잘 먹었습니다",
        back: "I have eaten well.",
        extra: `This is a common way of saying "Thank you for the food"`,
      },
    ],
  },
  {
    id: 11,
    groupId: 2,
    name: "Grammar - Beginner 4",
    description: "Review participles and word markers, and more words",
    cards: [
      {
        front: "고 싶어요",
        back: 'I want to <verb>',
        extra: '',
      },
      {
        front: "가고 싶어요",
        back: 'I want to go',
        extra: '',
      },
      {
        front: "보고 싶어요",
        back: 'I want to see',
        extra: '(or look, or watch)',
      },
      {
        front: "먹고 싶어요",
        back: 'I want to eat',
        extra: '',
      },
      {
        front: "가다",
        back: 'To go',
        extra: '',
      },
      {
        front: "보다",
        back: 'To see',
        extra: '',
      },
      {
        front: "먹다",
        back: 'To eat',
        extra: '',
      },
      {
        front: "더",
        back: 'More',
        extra: '',
      },
      {
        front: "더 먹고 싶어요",
        back: 'I want to eat more',
        extra: '',
      },
      {
        front: "더 주세요 ",
        back: 'Please give me more',
        extra: '',
      },
    ],
  },
];

/*       {
        front: "",
        back: '',
        extra: '',
      }, */