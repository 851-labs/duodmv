import type { Lesson } from "../../types";

export const section3Lessons: Lesson[] = [
  {
    id: "knowledge-test",
    sectionId: "testing-process",
    order: 1,
    title: "The Knowledge Test",
    description: "What to expect on the written DMV test",
    type: "lesson",
    xpReward: 30,
    learnContent: [
      {
        id: "test-overview",
        type: "text",
        title: "About the Knowledge Test",
        content:
          "The knowledge test has multiple choice questions based on the California Driver's Handbook. You must pass this test to get your instruction permit.",
        bulletPoints: [
          "Questions cover traffic laws, signs, and safe driving",
          "You have 3 attempts to pass before reapplying",
          "Minors must wait 7 days between failed attempts",
        ],
      },
      {
        id: "test-rules",
        type: "warning",
        title: "Important Rules",
        content:
          "You are NOT allowed to use any testing aids during the knowledge test. This includes the Driver's Handbook, cell phones, or notes.",
      },
      {
        id: "test-tips",
        type: "text",
        title: "Tips for Success",
        content: "How to prepare for the knowledge test:",
        bulletPoints: [
          "Study the entire Driver's Handbook",
          "Focus on numbers: distances, speeds, BAC limits",
          "Learn the meaning of all signs and signals",
          "Take practice tests",
          "Get a good night's sleep before the test",
        ],
      },
      {
        id: "elearning",
        type: "tip",
        title: "eLearning Option",
        content:
          "When renewing, you may have an eLearning option - a self-paced online course with quizzes instead of a traditional test.",
      },
    ],
    questions: [
      {
        id: "test-001",
        type: "multiple-choice",
        sectionId: "testing-process",
        lessonId: "knowledge-test",
        difficulty: 1,
        xpValue: 10,
        question: "How many attempts do you get to pass the knowledge test?",
        options: ["3 attempts", "2 attempts", "Unlimited attempts", "1 attempt"],
        correctIndex: 0,
        explanation:
          "You are allowed three attempts to pass the knowledge test before you must reapply and pay the fee again.",
        handbookReference: "Section 3 - Knowledge Test",
      },
      {
        id: "test-002",
        type: "true-false",
        sectionId: "testing-process",
        lessonId: "knowledge-test",
        difficulty: 1,
        xpValue: 10,
        statement: "You can use the Driver's Handbook during the knowledge test.",
        isTrue: false,
        explanation:
          "No testing aids are allowed during the knowledge test, including the handbook, cell phones, or notes.",
        handbookReference: "Section 3 - Knowledge Test",
      },
      {
        id: "test-003",
        type: "multiple-choice",
        sectionId: "testing-process",
        lessonId: "knowledge-test",
        difficulty: 2,
        xpValue: 15,
        question: "How long must minors wait to retake a failed knowledge test?",
        options: ["7 days", "14 days", "30 days", "No waiting period"],
        correctIndex: 0,
        explanation:
          "Minors must wait seven days to retake a failed knowledge test, not including the day of failure.",
        handbookReference: "Section 3 - Knowledge Test",
      },
    ],
  },
  {
    id: "drive-test",
    sectionId: "testing-process",
    order: 2,
    title: "The Driving Test",
    description: "What to expect on the behind-the-wheel test",
    type: "lesson",
    xpReward: 35,
    requiredLessons: ["knowledge-test"],
    learnContent: [
      {
        id: "drive-test-intro",
        type: "text",
        title: "Behind-the-Wheel Test",
        content:
          "The drive test evaluates your ability to safely operate a vehicle. The examiner will give you instructions and observe how you drive.",
        highlight:
          "The examiner may give multiple instructions at once to test your comprehension.",
      },
      {
        id: "what-to-bring",
        type: "text",
        title: "What to Bring",
        content: "On test day, you must bring:",
        bulletPoints: [
          "Your instruction permit or license",
          "Licensed driver 18+ (25+ for minors) unless already licensed",
          "A vehicle that is safe to drive",
          "Valid proof of insurance and registration",
        ],
      },
      {
        id: "vehicle-check",
        type: "text",
        title: "Pre-Test Vehicle Check",
        content: "Before the test, the examiner will check your vehicle for:",
        bulletPoints: [
          "Working driver window (must open)",
          "Clear windshield (no major cracks)",
          "At least 2 rearview mirrors",
          "Working brake lights",
          "Good tires (at least 1/32 inch tread)",
          "Working horn (audible from 200 feet)",
          "Functional seat belts",
        ],
      },
      {
        id: "demonstrate",
        type: "text",
        title: "Demonstrate Controls",
        content: "You'll be asked to show you know where these are:",
        bulletPoints: [
          "Turn signals and arm signals",
          "Emergency/parking brake",
          "Foot brake",
          "Horn",
          "Windshield wipers",
        ],
      },
      {
        id: "test-failure",
        type: "warning",
        title: "If You Fail",
        content:
          "If your vehicle doesn't meet requirements, the test will be rescheduled. Minors must wait 14 days to retake a failed drive test.",
      },
    ],
    questions: [
      {
        id: "test-004",
        type: "multiple-choice",
        sectionId: "testing-process",
        lessonId: "drive-test",
        difficulty: 1,
        xpValue: 10,
        question: "What documents must you bring to your drive test?",
        options: [
          "Permit/license, insurance, and registration",
          "Only your permit",
          "Only proof of insurance",
          "No documents needed",
        ],
        correctIndex: 0,
        explanation:
          "You must bring your instruction permit or license, valid proof of insurance, and vehicle registration.",
        handbookReference: "Section 3 - Behind-the-Wheel Drive Test",
      },
      {
        id: "test-005",
        type: "multiple-choice",
        sectionId: "testing-process",
        lessonId: "drive-test",
        difficulty: 2,
        xpValue: 15,
        question: "Your horn must be audible from at least how many feet?",
        options: ["200 feet", "100 feet", "500 feet", "50 feet"],
        correctIndex: 0,
        explanation:
          "Your horn must be designed for the vehicle, in working condition, and loud enough to be heard from at least 200 feet.",
        handbookReference: "Section 3 - Behind-the-Wheel Drive Test",
      },
      {
        id: "test-006",
        type: "multiple-choice",
        sectionId: "testing-process",
        lessonId: "drive-test",
        difficulty: 2,
        xpValue: 15,
        question: "How long must minors wait to retake a failed behind-the-wheel test?",
        options: ["14 days", "7 days", "30 days", "No waiting period"],
        correctIndex: 0,
        explanation:
          "Minors must wait 14 days to retake a failed behind-the-wheel test, not including the day of failure.",
        handbookReference: "Section 3 - Behind-the-Wheel Drive Test",
      },
      {
        id: "test-007",
        type: "true-false",
        sectionId: "testing-process",
        lessonId: "drive-test",
        difficulty: 1,
        xpValue: 10,
        statement: "You can use a donut (spare) tire during your drive test.",
        isTrue: false,
        explanation:
          "The use of a donut tire is not allowed during a drive test. Your tires must have at least 1/32 inch of tread depth.",
        handbookReference: "Section 3 - Behind-the-Wheel Drive Test",
      },
    ],
  },
];
