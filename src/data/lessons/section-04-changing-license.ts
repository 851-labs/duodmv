import type { Lesson } from "../../types";

export const section4Lessons: Lesson[] = [
  {
    id: "changing-replacing",
    sectionId: "changing-license",
    order: 1,
    title: "Changing, Replacing & Renewing",
    description: "Learn how to update, replace, or renew your driver's license",
    type: "lesson",
    xpReward: 20,
    learnContent: [
      {
        id: "name-changes",
        type: "text",
        title: "Changes to Your License",
        content:
          "If you legally change your name or need an update to your driver's license, such as your physical description or gender identity, you can make these changes online at dmv.ca.gov/dlservices.",
      },
      {
        id: "address-change",
        type: "warning",
        title: "Change Your Address",
        content:
          "If you move, you must notify DMV of your new address within ten days. Submit a change of address online at dmv.ca.gov/addresschange or by mail. You do not automatically get a new license when you change your address.",
      },
      {
        id: "replace-renew",
        type: "text",
        title: "Replace or Renew Your License",
        content:
          "It is against the law to drive with an expired driver's license. To renew or replace a lost, stolen, or damaged driver's license, visit dmv.ca.gov/dlservices.",
        bulletPoints: [
          "You may need to provide additional proof of identity",
          "Your license and identity document may expire on the same date",
          "If you're a minor, a parent or guardian must sign the application",
          "Once you receive your replacement, your old card is no longer valid",
        ],
      },
      {
        id: "license-extension",
        type: "tip",
        title: "Extend Your License While Out-of-State",
        content:
          "If you are out-of-state and cannot renew, you may request a one-year extension of your driver's license. Before your license expires, submit a request to dl-extensions@dmv.ca.gov with your name, license number, birth date, and addresses.",
        highlight: "Limited-term driver's licenses are not eligible for this extension.",
      },
    ],
    questions: [
      {
        id: "cl-001",
        type: "multiple-choice",
        sectionId: "changing-license",
        lessonId: "changing-replacing",
        difficulty: 1,
        xpValue: 10,
        question: "How many days do you have to notify DMV after moving to a new address?",
        options: ["5 days", "10 days", "30 days", "60 days"],
        correctIndex: 1,
        explanation:
          "You must notify DMV of your new address within ten days of moving. You can do this online at dmv.ca.gov/addresschange.",
        handbookReference: "Section 4 - Change Your Address",
      },
      {
        id: "cl-002",
        type: "true-false",
        sectionId: "changing-license",
        lessonId: "changing-replacing",
        difficulty: 1,
        xpValue: 10,
        statement: "It is legal to drive with an expired driver's license.",
        isTrue: false,
        explanation:
          "It is against the law to drive with an expired driver's license. You must renew before it expires or replace it if lost, stolen, or damaged.",
        handbookReference: "Section 4 - Replace or Renew Your Driver's License",
      },
      {
        id: "cl-003",
        type: "true-false",
        sectionId: "changing-license",
        lessonId: "changing-replacing",
        difficulty: 1,
        xpValue: 10,
        statement:
          "When you change your address, you automatically receive a new driver's license with your updated address.",
        isTrue: false,
        explanation:
          "You do not automatically get a new driver's license when you change your address. You may request a replacement for a fee.",
        handbookReference: "Section 4 - Change Your Address",
      },
      {
        id: "cl-004",
        type: "multiple-choice",
        sectionId: "changing-license",
        lessonId: "changing-replacing",
        difficulty: 2,
        xpValue: 15,
        question:
          "If you are out-of-state and cannot renew your license, how long of an extension can you request?",
        options: ["6 months", "1 year", "2 years", "Extensions are not available"],
        correctIndex: 1,
        explanation:
          "If you are out-of-state and cannot renew, you may request a one-year extension of your driver's license before it expires.",
        handbookReference: "Section 4 - Extend Your Driver's License",
      },
    ],
  },
];
