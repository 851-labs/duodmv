import type { Lesson } from "../../types";

export const section9Lessons: Lesson[] = [
  {
    id: "dui-laws",
    sectionId: "alcohol-drugs",
    order: 1,
    title: "DUI Laws & BAC Limits",
    description: "Blood alcohol limits and DUI consequences",
    type: "lesson",
    xpReward: 25,
    learnContent: [
      {
        id: "bac-limits",
        type: "text",
        title: "Blood Alcohol Concentration (BAC) Limits",
        content:
          "California has strict limits on how much alcohol you can have in your system while driving:",
        bulletPoints: [
          "0.08% BAC: Legal limit for drivers 21 and older",
          "0.04% BAC: Limit for commercial vehicle drivers",
          "0.01% BAC: Limit for drivers under 21 (zero tolerance)",
          "0.01% BAC: Limit for anyone on DUI probation",
        ],
        highlight:
          "You can be charged with DUI even below these limits if your driving is impaired!",
      },
      {
        id: "implied-consent",
        type: "text",
        title: "Implied Consent Law",
        content:
          "By driving in California, you automatically consent to chemical testing (breath, blood, or urine) if lawfully arrested for DUI.",
        bulletPoints: [
          "Refusing a test results in automatic 1-year license suspension",
          "Refusal can be used against you in court",
          "Second refusal = 2-year suspension",
          "Third refusal = 3-year suspension",
        ],
        highlight: "Refusing the test doesn't prevent a DUI conviction!",
      },
      {
        id: "dui-penalties",
        type: "warning",
        title: "First DUI Penalties",
        content:
          "A first DUI conviction carries serious consequences: up to 6 months in jail, $390-$1,000 in fines (plus fees totaling $2,000+), 4-month license suspension, and a required DUI program. DUI convictions stay on your record for 10 years.",
      },
      {
        id: "open-container",
        type: "text",
        title: "Open Container Laws",
        content: "It's illegal to have an open container of alcohol in your vehicle:",
        bulletPoints: [
          "All alcohol must be sealed and unopened",
          "Open containers must be in the trunk",
          "Or stored where passengers don't sit",
          "This applies to drivers AND passengers",
        ],
      },
      {
        id: "cannabis-rules",
        type: "text",
        title: "Cannabis Laws for Drivers",
        content: "Even though cannabis is legal in California, strict rules apply:",
        bulletPoints: [
          "Never smoke or consume cannabis while driving",
          "Cannabis containers must be sealed/unopened in the vehicle",
          "Open containers must be in the trunk",
          "Driving under the influence of cannabis is DUI",
          "No cannabis in commercial vehicles - ever",
        ],
      },
      {
        id: "boat-dui",
        type: "tip",
        title: "Boating Under the Influence",
        content:
          "The same BAC limits apply when operating boats and watercraft. A BUI (boating under influence) conviction counts against your driving record.",
      },
    ],
    questions: [
      {
        id: "dui-001",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "dui-laws",
        difficulty: 1,
        xpValue: 10,
        question:
          "What is the legal blood alcohol concentration (BAC) limit for drivers 21 and older in California?",
        options: ["0.08%", "0.05%", "0.10%", "0.02%"],
        correctIndex: 0,
        explanation:
          "In California, it's illegal to drive with a BAC of 0.08% or higher if you're 21 or older.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "dui-002",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "dui-laws",
        difficulty: 1,
        xpValue: 10,
        question: "What is the legal BAC limit for drivers under 21?",
        options: ["0.01%", "0.02%", "0.05%", "0.00%"],
        correctIndex: 0,
        explanation:
          "California has a 'zero tolerance' law for underage drivers. Any BAC of 0.01% or higher is illegal for drivers under 21.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "dui-003",
        type: "true-false",
        sectionId: "alcohol-drugs",
        lessonId: "dui-laws",
        difficulty: 1,
        xpValue: 10,
        statement:
          "You can refuse a chemical test if you're stopped for DUI without any consequences.",
        isTrue: false,
        explanation:
          "California's 'Implied Consent' law means refusing a chemical test results in automatic license suspension and other penalties.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "dui-004",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "dui-laws",
        difficulty: 2,
        xpValue: 15,
        question: "What is the BAC limit for commercial vehicle drivers in California?",
        options: ["0.04%", "0.08%", "0.02%", "0.05%"],
        correctIndex: 0,
        explanation:
          "Commercial vehicle drivers have a stricter BAC limit of 0.04% - half the limit for regular drivers.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "dui-005",
        type: "true-false",
        sectionId: "alcohol-drugs",
        lessonId: "dui-laws",
        difficulty: 2,
        xpValue: 15,
        statement: "A first DUI conviction in California can result in up to 6 months in jail.",
        isTrue: true,
        explanation:
          "A first DUI offense can result in up to 6 months in jail, plus fines, license suspension, and mandatory DUI programs.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "dui-006",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "dui-laws",
        difficulty: 2,
        xpValue: 15,
        question:
          "If you're under 21 and caught driving with a BAC of 0.01% or higher, what happens to your license?",
        options: [
          "Suspended for 1 year",
          "Suspended for 6 months",
          "Suspended for 30 days",
          "Warning only",
        ],
        correctIndex: 0,
        explanation:
          "If you're under 21 and have any measurable BAC, your license will be suspended for 1 year.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
    ],
  },
  {
    id: "impaired-driving",
    sectionId: "alcohol-drugs",
    order: 2,
    title: "Impaired Driving Effects",
    description: "How alcohol and drugs affect your driving ability",
    type: "lesson",
    xpReward: 25,
    requiredLessons: ["dui-laws"],
    learnContent: [
      {
        id: "alcohol-effects",
        type: "text",
        title: "How Alcohol Affects Driving",
        content:
          "Alcohol impairs driving ability in many ways, starting with judgment - often before you 'feel' drunk:",
        bulletPoints: [
          "Judgment and decision-making impaired FIRST",
          "Slowed reaction time",
          "Reduced coordination",
          "Blurred or double vision",
          "Difficulty concentrating",
          "Overconfidence in abilities",
        ],
        highlight: "Your judgment is impaired before you feel drunk!",
      },
      {
        id: "sobering-myths",
        type: "warning",
        title: "Sobering Up Myths",
        content:
          "Nothing speeds up the sobering process - only time works. Coffee, cold showers, fresh air, food, and exercise do NOT help. Your liver processes about one standard drink per hour.",
      },
      {
        id: "drug-impairment",
        type: "text",
        title: "Drug Impairment",
        content: "Many substances impair driving, not just alcohol:",
        bulletPoints: [
          "Marijuana: Slowed reaction time, impaired judgment",
          "Prescription drugs: May cause drowsiness, dizziness",
          "Over-the-counter medicines: Antihistamines cause drowsiness",
          "Combination of drugs and alcohol: Effects multiply",
        ],
      },
      {
        id: "minor-consequences",
        type: "text",
        title: "Consequences for Minors",
        content: "If you're under 21 and caught with alcohol in your vehicle:",
        bulletPoints: [
          "Vehicle may be impounded for 30 days",
          "License suspended for 1 year",
          "This applies even if you weren't drinking",
          "You don't have to be driving - possession is enough",
        ],
      },
      {
        id: "designated-driver",
        type: "tip",
        title: "Always Have a Plan",
        content:
          "Before drinking, always plan a safe way home: use a designated driver, call a taxi or rideshare, stay overnight, or use public transit. Never let impaired friends drive.",
      },
    ],
    questions: [
      {
        id: "imp-001",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "impaired-driving",
        difficulty: 1,
        xpValue: 10,
        question: "Which driving ability is affected first by alcohol?",
        options: ["Judgment and decision-making", "Vision", "Physical coordination", "Hearing"],
        correctIndex: 0,
        explanation:
          "Judgment is impaired first, often before you feel 'drunk.' This is why impaired people often think they're fine to drive.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "imp-002",
        type: "true-false",
        sectionId: "alcohol-drugs",
        lessonId: "impaired-driving",
        difficulty: 1,
        xpValue: 10,
        statement: "Coffee, fresh air, or a cold shower can sober you up faster.",
        isTrue: false,
        explanation:
          "Nothing speeds up the sobering process except time. Your liver processes about one drink per hour.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "imp-003",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "impaired-driving",
        difficulty: 2,
        xpValue: 15,
        question: "Which of the following can impair your driving like alcohol?",
        options: [
          "All of these",
          "Prescription medications",
          "Over-the-counter cold medicine",
          "Marijuana",
        ],
        correctIndex: 0,
        explanation:
          "Many substances impair driving, including prescription drugs, over-the-counter medications, and marijuana. It's illegal to drive impaired by any substance.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "imp-004",
        type: "true-false",
        sectionId: "alcohol-drugs",
        lessonId: "impaired-driving",
        difficulty: 2,
        xpValue: 15,
        statement:
          "It's legal to drive after using marijuana if you have a medical marijuana card.",
        isTrue: false,
        explanation:
          "It's illegal to drive under the influence of marijuana regardless of whether you have a prescription or medical card.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "imp-005",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "impaired-driving",
        difficulty: 2,
        xpValue: 15,
        question:
          "About how long does it take the average person's body to remove the alcohol from one drink?",
        options: ["1 hour", "30 minutes", "2 hours", "15 minutes"],
        correctIndex: 0,
        explanation:
          "The body processes approximately one standard drink per hour. There's no way to speed this up.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
      {
        id: "imp-006",
        type: "multiple-choice",
        sectionId: "alcohol-drugs",
        lessonId: "impaired-driving",
        difficulty: 3,
        xpValue: 20,
        question: "What is a 'designated driver'?",
        options: [
          "Someone who agrees not to drink to drive others home safely",
          "A professional taxi driver",
          "Someone with a commercial license",
          "The car owner",
        ],
        correctIndex: 0,
        explanation:
          "A designated driver is someone in the group who agrees not to drink alcohol so they can safely drive everyone home.",
        handbookReference: "Section 9 - Alcohol and Drugs",
      },
    ],
  },
];
