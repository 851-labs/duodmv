import type { Lesson } from "../../types";

export const section12Lessons: Lesson[] = [
  {
    id: "driver-safety-evaluation",
    sectionId: "driver-safety",
    order: 1,
    title: "Driver Safety & Evaluation",
    description: "Learn about evaluating driving skills and the DMV reexamination process",
    type: "lesson",
    xpReward: 20,
    learnContent: [
      {
        id: "self-evaluation",
        type: "text",
        title: "Evaluating Your Driving",
        content:
          "Eventually, every driver will need to evaluate and assess their driving skills and abilities. If you are concerned about your driving, ask a trusted driver with a valid license to sit in the passenger seat and observe your driving.",
        bulletPoints: [
          "Have your observer note any dangerous driving behaviors",
          "Listen carefully to suggestions for improvement",
          "Apply what you have learned",
          "Consider professional driving lessons or classes",
        ],
      },
      {
        id: "reexamination-intro",
        type: "warning",
        title: "DMV Reexamination",
        content:
          "The Vehicle Code allows DMV to investigate and reexamine every driver's ability to operate a motor vehicle safely. A physical or mental condition or poor driver's record can be the basis for a reexamination.",
        highlight:
          "Reexamination is based on ability, not age. Anyone can be referred by a physician, law enforcement, or family member.",
      },
      {
        id: "cognitive-conditions",
        type: "text",
        title: "Conditions That Affect Driving",
        content:
          "Cognitive disorders present a significant challenge to safe driving. Individuals suffering from these conditions may lose their ability to drive safely.",
        bulletPoints: [
          "Dementia",
          "Seizure disorder",
          "Brain tumor",
          "Parkinson's disease",
          "Stroke",
          "Vertigo",
        ],
      },
      {
        id: "dmv-actions",
        type: "text",
        title: "What DMV May Do",
        content: "If referred for reexamination, DMV may take several actions:",
        bulletPoints: [
          "Request medical information from you or your physician",
          "Conduct an in-person or telephone reexamination",
          "Require knowledge, vision, or driving tests",
          "Issue a limited term driver's license",
          "Suspend or revoke your license if you pose an immediate threat",
          "Take no action against your driving privilege",
        ],
      },
      {
        id: "priority-reexam",
        type: "warning",
        title: "Priority Reexamination",
        content:
          "If you receive a Notice of Priority Reexamination from law enforcement, you have five working days to contact DMV to initiate the process.",
        highlight:
          "Failure to contact DMV within 5 working days will result in automatic suspension of your driving privilege.",
      },
    ],
    questions: [
      {
        id: "ds-001",
        type: "multiple-choice",
        sectionId: "driver-safety",
        lessonId: "driver-safety-evaluation",
        difficulty: 1,
        xpValue: 10,
        question: "What is the basis for DMV reexamination?",
        options: [
          "Driver's age only",
          "Physical/mental condition or poor driving record",
          "Number of years with a license",
          "Type of vehicle driven",
        ],
        correctIndex: 1,
        explanation:
          "A physical or mental condition or poor driver's record can be the basis for a reexamination, not a driver's age.",
        handbookReference: "Section 12 - Reexamination",
      },
      {
        id: "ds-002",
        type: "multiple-choice",
        sectionId: "driver-safety",
        lessonId: "driver-safety-evaluation",
        difficulty: 2,
        xpValue: 15,
        question:
          "If you receive a Notice of Priority Reexamination, how many working days do you have to contact DMV?",
        options: ["3 working days", "5 working days", "10 working days", "30 working days"],
        correctIndex: 1,
        explanation:
          "You have five working days to contact DMV to initiate the process or your driving privilege will be automatically suspended.",
        handbookReference: "Section 12 - Priority Reexamination",
      },
      {
        id: "ds-003",
        type: "true-false",
        sectionId: "driver-safety",
        lessonId: "driver-safety-evaluation",
        difficulty: 1,
        xpValue: 10,
        statement: "Only family members can refer a driver to DMV for reexamination.",
        isTrue: false,
        explanation:
          "Drivers can be referred to DMV by a physician, law enforcement, or family member by submitting a Request for Driver Reexamination form.",
        handbookReference: "Section 12 - Reexamination",
      },
      {
        id: "ds-004",
        type: "true-false",
        sectionId: "driver-safety",
        lessonId: "driver-safety-evaluation",
        difficulty: 1,
        xpValue: 10,
        statement:
          "DMV can immediately suspend your license if your condition poses an immediate threat to public safety.",
        isTrue: true,
        explanation:
          "DMV may immediately suspend or revoke your driving privilege if your physical or mental condition presents an immediate threat to public safety.",
        handbookReference: "Section 12 - Reexamination",
      },
    ],
  },
];
