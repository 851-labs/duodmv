import type { Lesson } from "../../types";

export const section10Lessons: Lesson[] = [
  {
    id: "insurance-requirements",
    sectionId: "financial-insurance",
    order: 1,
    title: "Insurance Requirements",
    description: "Understanding California's auto insurance requirements",
    type: "lesson",
    xpReward: 30,
    learnContent: [
      {
        id: "insurance-intro",
        type: "text",
        title: "Proof of Insurance",
        content:
          "You must have proof of insurance (financial responsibility) whenever you drive - including for your drive test. If you're in a collision, you must show proof to other drivers involved.",
        highlight:
          "No insurance? Your license can be suspended for up to 4 years after a collision!",
      },
      {
        id: "minimum-coverage",
        type: "text",
        title: "Minimum Coverage Required",
        content: "California requires your insurance to cover at least:",
        bulletPoints: [
          "$15,000 for property damage",
          "$30,000 for injury/death of one person",
          "$60,000 for injury/death of multiple people",
        ],
        highlight: "Remember: 15/30/60",
      },
      {
        id: "minor-responsibility",
        type: "text",
        title: "Financial Responsibility",
        content:
          "If you're under 18, your parents or guardians are financially responsible for any damages you cause. At 18, you become responsible for yourself.",
      },
      {
        id: "low-cost",
        type: "tip",
        title: "Low-Cost Insurance",
        content:
          "Can't afford insurance? California offers a Low Cost Automobile Insurance Program. Visit mylowcostauto.com or call 1-866-602-8861.",
      },
      {
        id: "sr22-certificate",
        type: "text",
        title: "SR 22 Certificate",
        content:
          "An SR 22 is a certificate of financial responsibility. You may be required to file one if you:",
        bulletPoints: [
          "Were convicted of DUI",
          "Were in a collision without insurance",
          "Had your license suspended for too many points",
          "Were convicted of reckless driving",
        ],
        highlight: "SR 22 must be maintained for 3 years - cancellation means license suspension!",
      },
      {
        id: "sr1p-certificate",
        type: "text",
        title: "SR 1P Certificate",
        content:
          "An SR 1P is proof of insurance from your insurance company that's filed with DMV. It proves you have the minimum required coverage. Your insurance company typically files this automatically.",
      },
    ],
    questions: [
      {
        id: "fin-001",
        type: "multiple-choice",
        sectionId: "financial-insurance",
        lessonId: "insurance-requirements",
        difficulty: 1,
        xpValue: 10,
        question: "What is the minimum property damage coverage required in California?",
        options: ["$15,000", "$30,000", "$10,000", "$5,000"],
        correctIndex: 0,
        explanation:
          "California requires minimum coverage of $15,000 for property damage, $30,000 for single injury/death, and $60,000 for multiple injuries/deaths.",
        handbookReference: "Section 10 - Insurance Requirements",
      },
      {
        id: "fin-002",
        type: "true-false",
        sectionId: "financial-insurance",
        lessonId: "insurance-requirements",
        difficulty: 1,
        xpValue: 10,
        statement: "You must have proof of insurance when you take your drive test.",
        isTrue: true,
        explanation:
          "You must have proof of insurance whenever you drive, including during your behind-the-wheel drive test.",
        handbookReference: "Section 10 - Financial Responsibility",
      },
      {
        id: "fin-003",
        type: "multiple-choice",
        sectionId: "financial-insurance",
        lessonId: "insurance-requirements",
        difficulty: 2,
        xpValue: 15,
        question:
          "How long can your license be suspended for driving without insurance after a collision?",
        options: ["Up to 4 years", "Up to 1 year", "6 months", "30 days"],
        correctIndex: 0,
        explanation:
          "Your driving privilege will be suspended for up to four years if you're in a collision without proper insurance coverage.",
        handbookReference: "Section 10 - Driving Without Insurance",
      },
    ],
  },
  {
    id: "collisions",
    sectionId: "financial-insurance",
    order: 2,
    title: "Collisions",
    description: "What to do if you're in a collision",
    type: "lesson",
    xpReward: 30,
    requiredLessons: ["insurance-requirements"],
    learnContent: [
      {
        id: "collision-causes",
        type: "text",
        title: "Common Causes of Collisions",
        content: "Most collisions are caused by:",
        bulletPoints: [
          "Driver distractions",
          "Unsafe speed",
          "Improper turns",
          "Not following right-of-way rules",
          "Ignoring stop signals and signs",
          "Driving on wrong side of road",
        ],
      },
      {
        id: "collision-steps",
        type: "text",
        title: "What to Do After a Collision",
        content: "If you're in a collision:",
        bulletPoints: [
          "STOP - You must stop. Leaving is a hit-and-run crime.",
          "Call 911 if anyone is hurt",
          "Move vehicle out of traffic if no injuries",
          "Exchange info: license, registration, insurance, address",
          "Report to law enforcement within 24 hours if anyone injured/killed",
        ],
      },
      {
        id: "parked-car",
        type: "text",
        title: "Hitting a Parked Car",
        content:
          "If you hit a parked car or property, try to find the owner. If you can't, leave a note with your name, phone number, and address. Report it to law enforcement.",
      },
      {
        id: "dmv-report",
        type: "warning",
        title: "Report to DMV",
        content:
          "You must report to DMV within 10 days if: damage exceeds $1,000 OR anyone was injured/killed. File the SR 1 report at dmv.ca.gov/accidentreport.",
      },
      {
        id: "animal-collision",
        type: "text",
        title: "Collision with an Animal",
        content: "If you hit an animal while driving:",
        bulletPoints: [
          "Stop safely if possible",
          "Don't touch or move the injured animal - it may bite",
          "Call local humane society or animal control",
          "If it's a dog, cat, or horse, you must try to locate the owner",
          "Call law enforcement for livestock or wild animals",
          "Don't leave a domestic animal suffering on the road",
        ],
      },
      {
        id: "animal-avoid",
        type: "tip",
        title: "Avoiding Animal Collisions",
        content:
          "Be especially alert at dawn, dusk, and night when animals are most active. If an animal is in the road, brake firmly but don't swerve - swerving into traffic or off the road is more dangerous.",
      },
    ],
    questions: [
      {
        id: "fin-004",
        type: "multiple-choice",
        sectionId: "financial-insurance",
        lessonId: "collisions",
        difficulty: 1,
        xpValue: 10,
        question: "Within how many days must you report a collision to DMV?",
        options: ["10 days", "30 days", "5 days", "24 hours"],
        correctIndex: 0,
        explanation:
          "You must report a collision to DMV within 10 days if damage exceeds $1,000 or anyone was injured or killed.",
        handbookReference: "Section 10 - Reporting a Collision",
      },
      {
        id: "fin-005",
        type: "true-false",
        sectionId: "financial-insurance",
        lessonId: "collisions",
        difficulty: 1,
        xpValue: 10,
        statement: "Leaving the scene of a collision you caused is called a hit-and-run.",
        isTrue: true,
        explanation:
          "Leaving the scene of an accident (hit-and-run) is a serious crime with severe punishments.",
        handbookReference: "Section 10 - What to Do if You Are in a Collision",
      },
      {
        id: "fin-006",
        type: "multiple-choice",
        sectionId: "financial-insurance",
        lessonId: "collisions",
        difficulty: 2,
        xpValue: 15,
        question: "When must you report a collision to law enforcement?",
        options: [
          "Within 24 hours if anyone is injured or killed",
          "Within 10 days",
          "Within 1 hour",
          "Only if property damage exceeds $5,000",
        ],
        correctIndex: 0,
        explanation:
          "You must report a collision to law enforcement within 24 hours if anyone is injured or killed.",
        handbookReference: "Section 10 - What to Do if You Are in a Collision",
      },
    ],
  },
];
