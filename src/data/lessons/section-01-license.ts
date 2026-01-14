import type { Lesson } from "../../types";

export const section1Lessons: Lesson[] = [
  {
    id: "license-types",
    sectionId: "driver-license",
    order: 1,
    title: "Types of Licenses",
    description: "Understanding different driver's license classes",
    type: "lesson",
    xpReward: 25,
    learnContent: [
      {
        id: "license-intro",
        type: "text",
        title: "California Driver's License",
        content:
          "A California driver's license allows you to drive on public roads. You must have the correct license class for your vehicle type.",
        highlight: "Most people need a noncommercial Class C driver's license.",
      },
      {
        id: "license-classes",
        type: "text",
        title: "License Classes",
        content: "Different license classes cover different vehicle types:",
        bulletPoints: [
          "Class C: Standard cars, SUVs, pickups, and vans",
          "Class M: Motorcycles and motor-driven cycles",
          "Class A/B: Commercial vehicles like trucks and buses",
        ],
      },
      {
        id: "real-id",
        type: "text",
        title: "REAL ID",
        content:
          "Starting May 2025, you need a REAL ID compliant license to board domestic flights, enter military bases, and access most federal facilities.",
        highlight: "Look for the gold bear and star on REAL ID cards.",
      },
      {
        id: "license-designations",
        type: "text",
        title: "Special Designations",
        content: "Your license can include special designations:",
        bulletPoints: [
          "Organ Donor: Indicates you wish to donate organs",
          "Veteran: Shows military service",
          "REAL ID: Gold bear/star indicates federal compliance",
        ],
      },
    ],
    questions: [
      {
        id: "lic-001",
        type: "multiple-choice",
        sectionId: "driver-license",
        lessonId: "license-types",
        difficulty: 1,
        xpValue: 10,
        question: "What license class do most drivers need for a regular car?",
        options: ["Class C", "Class A", "Class M", "Class B"],
        correctIndex: 0,
        explanation:
          "Most people need a noncommercial Class C license to drive standard vehicles like cars, SUVs, pickups, and vans.",
        handbookReference: "Section 1 - The California Driver's License",
      },
      {
        id: "lic-002",
        type: "multiple-choice",
        sectionId: "driver-license",
        lessonId: "license-types",
        difficulty: 1,
        xpValue: 10,
        question: "What type of license do you need to ride a motorcycle?",
        options: ["Class M", "Class C", "Class A", "Class B"],
        correctIndex: 0,
        explanation: "Class M license is required for motorcycles and motor-driven cycles.",
        handbookReference: "Section 1 - The California Driver's License",
      },
      {
        id: "lic-003",
        type: "true-false",
        sectionId: "driver-license",
        lessonId: "license-types",
        difficulty: 2,
        xpValue: 15,
        statement: "Starting May 2025, you need a REAL ID to board domestic flights.",
        isTrue: true,
        explanation:
          "REAL ID compliant licenses are required starting May 2025 for domestic flights, military base access, and most federal facilities.",
        handbookReference: "Section 1 - REAL ID",
      },
    ],
  },
  {
    id: "who-needs-license",
    sectionId: "driver-license",
    order: 2,
    title: "Who Needs a License",
    description: "Requirements for getting a California driver's license",
    type: "lesson",
    xpReward: 25,
    requiredLessons: ["license-types"],
    learnContent: [
      {
        id: "need-license",
        type: "text",
        title: "Who Needs a License?",
        content:
          "Anyone who drives a motor vehicle on California public roads must have a valid driver's license. This includes residents and visitors who stay beyond a certain period.",
        bulletPoints: [
          "California residents must get a CA license within 10 days of becoming a resident",
          "New residents should visit DMV promptly",
          "Visitors from other states can use their home state license temporarily",
        ],
      },
      {
        id: "tests-required",
        type: "text",
        title: "Tests Required",
        content: "To get a California driver's license, you must pass:",
        bulletPoints: [
          "Knowledge test: Multiple choice questions from the handbook",
          "Vision test: Ensures you can see well enough to drive",
          "Behind-the-wheel test: Tests your actual driving ability",
        ],
      },
      {
        id: "id-cards",
        type: "text",
        title: "ID Cards vs. Driver's Licenses",
        content:
          "ID cards are for identification purposes only - they do NOT permit you to drive. They can be issued to people of any age.",
        highlight: "ID card ≠ Driver's license. An ID card does not allow you to drive!",
      },
    ],
    questions: [
      {
        id: "lic-004",
        type: "multiple-choice",
        sectionId: "driver-license",
        lessonId: "who-needs-license",
        difficulty: 1,
        xpValue: 10,
        question: "What tests must you pass to get a California driver's license?",
        options: [
          "Vision, knowledge, and behind-the-wheel tests",
          "Only a written test",
          "Only a driving test",
          "A background check only",
        ],
        correctIndex: 0,
        explanation:
          "You must pass three tests: a vision test, a knowledge test (written), and a behind-the-wheel drive test.",
        handbookReference: "Section 1 - The California Driver's License",
      },
      {
        id: "lic-005",
        type: "true-false",
        sectionId: "driver-license",
        lessonId: "who-needs-license",
        difficulty: 1,
        xpValue: 10,
        statement: "A California ID card allows you to drive.",
        isTrue: false,
        explanation:
          "ID cards are for identification purposes only. They do NOT permit you to drive any vehicle.",
        handbookReference: "Section 1 - ID Cards",
      },
      {
        id: "lic-006",
        type: "multiple-choice",
        sectionId: "driver-license",
        lessonId: "who-needs-license",
        difficulty: 2,
        xpValue: 15,
        question: "How soon must new California residents get a CA driver's license?",
        options: ["Within 10 days", "Within 30 days", "Within 6 months", "Within 1 year"],
        correctIndex: 0,
        explanation:
          "California residents must obtain a California driver's license within 10 days of becoming a resident.",
        handbookReference: "Section 1 - The California Driver's License",
      },
    ],
  },
];
