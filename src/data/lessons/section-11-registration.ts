import type { Lesson } from "../../types";

export const section11Lessons: Lesson[] = [
  {
    id: "vehicle-registration",
    sectionId: "vehicle-registration",
    order: 1,
    title: "Vehicle Registration",
    description: "Understanding California vehicle registration requirements",
    type: "lesson",
    xpReward: 25,
    learnContent: [
      {
        id: "reg-intro",
        type: "text",
        title: "Why Register?",
        content:
          "You must register your vehicle in California to legally drive it on public roads. Registration ensures your vehicle meets safety and emission standards.",
        highlight: "Visit dmv.ca.gov/vrservices for registration services.",
      },
      {
        id: "buying-selling",
        type: "text",
        title: "Buying or Selling a Vehicle",
        content: "Important deadlines when buying or selling:",
        bulletPoints: [
          "BUYING: Transfer ownership to your name within 10 days",
          "SELLING: Notify DMV within 5 days using Notice of Transfer and Release of Liability",
        ],
        highlight: "Seller: Notify DMV within 5 days at dmv.ca.gov/nrl",
      },
      {
        id: "out-of-state",
        type: "text",
        title: "Out-of-State Vehicles",
        content:
          "If you become a California resident or get a job here, you have 20 days to register your out-of-state vehicle.",
        bulletPoints: [
          "Vehicle must meet California emission standards",
          "DMV cannot register vehicles that don't qualify",
          "May need smog check before registration",
        ],
      },
      {
        id: "reg-tip",
        type: "tip",
        title: "Keep Registration Current",
        content:
          "Always carry your current registration card in your vehicle. Display your registration sticker on your license plate. Expired registration can result in fines.",
      },
    ],
    questions: [
      {
        id: "reg-001",
        type: "multiple-choice",
        sectionId: "vehicle-registration",
        lessonId: "vehicle-registration",
        difficulty: 1,
        xpValue: 10,
        question: "How many days do you have to transfer ownership after buying a vehicle?",
        options: ["10 days", "30 days", "5 days", "20 days"],
        correctIndex: 0,
        explanation: "When you buy a vehicle, you have 10 days to transfer ownership to your name.",
        handbookReference: "Section 11 - Buying or Selling a Vehicle",
      },
      {
        id: "reg-002",
        type: "multiple-choice",
        sectionId: "vehicle-registration",
        lessonId: "vehicle-registration",
        difficulty: 2,
        xpValue: 15,
        question: "How many days does a seller have to notify DMV after selling a vehicle?",
        options: ["5 days", "10 days", "30 days", "20 days"],
        correctIndex: 0,
        explanation:
          "When you sell a vehicle, you must notify DMV within 5 days by completing a Notice of Transfer and Release of Liability.",
        handbookReference: "Section 11 - Buying or Selling a Vehicle",
      },
      {
        id: "reg-003",
        type: "multiple-choice",
        sectionId: "vehicle-registration",
        lessonId: "vehicle-registration",
        difficulty: 2,
        xpValue: 15,
        question:
          "How many days do new California residents have to register an out-of-state vehicle?",
        options: ["20 days", "10 days", "30 days", "60 days"],
        correctIndex: 0,
        explanation:
          "You have 20 days to register your vehicle after becoming a California resident or getting a job here.",
        handbookReference: "Section 11 - Out-of-State Vehicles",
      },
    ],
  },
];
