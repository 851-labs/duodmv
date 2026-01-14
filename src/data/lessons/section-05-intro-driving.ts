import type { Lesson } from "../../types";

export const section5Lessons: Lesson[] = [
  {
    id: "signaling",
    sectionId: "intro-driving",
    order: 1,
    title: "Signaling",
    description: "When and how to signal your intentions to other drivers",
    type: "lesson",
    xpReward: 25,
    learnContent: [
      {
        id: "signal-intro",
        type: "text",
        title: "Signaling",
        content:
          "Always signal when you turn, change lanes, slow down, or stop. Signaling tells other drivers what you plan to do, helping everyone stay safe on the road.",
        highlight:
          "Signal at least 100 feet before turning in residential/city areas, and 200 feet on highways.",
      },
      {
        id: "signal-types",
        type: "text",
        title: "Two Ways to Signal",
        content:
          "You can signal using your vehicle's signal lights or using hand-and-arm positions. If your signal lights are not functioning, or bright sunlight makes your signal lights hard to see, use hand signals.",
        bulletPoints: [
          "Use turn signals (blinkers) for most situations",
          "Use hand signals as a backup when lights don't work",
          "Hand signals are also used by cyclists",
        ],
      },
      {
        id: "hand-signal-left",
        type: "image",
        title: "Left Turn Signal",
        content:
          "Extend your left arm STRAIGHT OUT the driver's window. This signals a LEFT TURN to other drivers.",
        imageUrl: "/images/signals/left-turn.png",
        highlight: "Arm straight out = LEFT TURN",
      },
      {
        id: "hand-signal-right",
        type: "image",
        title: "Right Turn Signal",
        content:
          "Extend your left arm out the window and bend it UPWARD at 90 degrees (forearm pointing up). This signals a RIGHT TURN.",
        imageUrl: "/images/signals/right-turn.png",
        highlight: "Arm bent UP = RIGHT TURN",
      },
      {
        id: "hand-signal-stop",
        type: "image",
        title: "Slow Down / Stop Signal",
        content:
          "Extend your left arm out the window and bend it DOWNWARD at 90 degrees (forearm pointing down). This signals SLOWING DOWN or STOPPING.",
        imageUrl: "/images/signals/slow-stop.png",
        highlight: "Arm bent DOWN = SLOW/STOP",
      },
      {
        id: "signal-timing",
        type: "text",
        title: "When to Signal",
        content:
          "Start signaling before you begin your maneuver to give other drivers time to react.",
        bulletPoints: [
          "Signal at least 100 feet before turning in cities",
          "Signal at least 200 feet before turning on highways",
          "Signal before every lane change",
          "Signal before pulling over to stop",
          "Keep signaling while turning or changing lanes",
        ],
        highlight: "Don't forget to turn OFF your signal after completing your maneuver!",
      },
      {
        id: "signal-tips",
        type: "tip",
        title: "Pro Tips",
        content:
          "Check that your signal is actually blinking by looking at the dashboard indicator. A fast-blinking signal usually means one of your turn signal bulbs is burned out.",
      },
    ],
    questions: [
      {
        id: "sig-001",
        type: "multiple-choice",
        sectionId: "intro-driving",
        lessonId: "signaling",
        difficulty: 1,
        xpValue: 10,
        question: "How far before a turn should you signal in a residential area?",
        options: ["At least 100 feet", "At least 50 feet", "At least 200 feet", "At least 25 feet"],
        correctIndex: 0,
        explanation:
          "You should signal at least 100 feet before turning in residential or city areas. On highways, signal at least 200 feet before turning.",
        handbookReference: "Section 5 - Signaling",
      },
      {
        id: "sig-002",
        type: "multiple-choice",
        sectionId: "intro-driving",
        lessonId: "signaling",
        difficulty: 1,
        xpValue: 10,
        question: "What does a left arm extended straight out the window mean?",
        options: ["Left turn", "Right turn", "Slow or stop", "Lane change"],
        correctIndex: 0,
        explanation:
          "Arm straight out means LEFT TURN. Remember: arm up = right turn, arm down = slow/stop.",
        handbookReference: "Section 5 - Signaling",
      },
      {
        id: "sig-003",
        type: "multiple-choice",
        sectionId: "intro-driving",
        lessonId: "signaling",
        difficulty: 2,
        xpValue: 15,
        question: "What does a left arm bent upward at 90 degrees out the window mean?",
        options: ["Right turn", "Left turn", "Slow or stop", "Go ahead"],
        correctIndex: 0,
        explanation:
          "Arm bent UP at 90 degrees means RIGHT TURN. Think of it as pointing up to the right side of the car.",
        handbookReference: "Section 5 - Signaling",
      },
      {
        id: "sig-004",
        type: "multiple-choice",
        sectionId: "intro-driving",
        lessonId: "signaling",
        difficulty: 2,
        xpValue: 15,
        question: "What does a left arm bent downward at 90 degrees mean?",
        options: ["Slowing down or stopping", "Right turn", "Left turn", "Changing lanes"],
        correctIndex: 0,
        explanation:
          "Arm bent DOWN at 90 degrees means SLOW or STOP. Think of it as pushing down to slow down.",
        handbookReference: "Section 5 - Signaling",
      },
      {
        id: "sig-005",
        type: "true-false",
        sectionId: "intro-driving",
        lessonId: "signaling",
        difficulty: 1,
        xpValue: 10,
        statement: "You should signal before changing lanes on the freeway.",
        isTrue: true,
        explanation:
          "Always signal before changing lanes, whether on city streets or freeways. This lets other drivers know your intentions.",
        handbookReference: "Section 5 - Signaling",
      },
      {
        id: "sig-006",
        type: "true-false",
        sectionId: "intro-driving",
        lessonId: "signaling",
        difficulty: 2,
        xpValue: 15,
        statement: "On highways, you should signal at least 200 feet before turning.",
        isTrue: true,
        explanation:
          "On highways where speeds are higher, signal at least 200 feet before turning to give other drivers more time to react.",
        handbookReference: "Section 5 - Signaling",
      },
    ],
  },
  {
    id: "steering",
    sectionId: "intro-driving",
    order: 2,
    title: "Steering & Posture",
    description: "Proper hand position and driving posture",
    type: "lesson",
    xpReward: 20,
    requiredLessons: ["signaling"],
    learnContent: [
      {
        id: "steering-intro",
        type: "text",
        title: "Steering Wheel Position",
        content:
          "Keep both hands on the steering wheel for maximum control. The recommended hand positions have changed over the years due to airbag safety.",
        highlight: "The recommended position is now 9 and 3 o'clock (or 8 and 4 o'clock).",
      },
      {
        id: "steering-why",
        type: "text",
        title: "Why 9 and 3?",
        content:
          "The old 10 and 2 position is no longer recommended because if the airbag deploys, your arms could be thrown into your face, causing injury.",
        bulletPoints: [
          "9 and 3 keeps hands out of the airbag deployment zone",
          "Provides good control for turning",
          "Reduces arm fatigue on long drives",
          "Never drive with just one hand or let the wheel spin freely",
        ],
      },
      {
        id: "steering-posture",
        type: "text",
        title: "Driving Posture",
        content: "Good posture helps you stay alert and maintain control of the vehicle.",
        bulletPoints: [
          "Sit upright with your back against the seat",
          "Adjust seat so you can fully press the pedals",
          "Keep at least 10 inches between your chest and the steering wheel",
          "Adjust mirrors after setting your seat position",
        ],
      },
      {
        id: "seatbelt-safety",
        type: "image",
        title: "Seatbelt & Airbag Safety",
        content:
          "Always wear your seatbelt properly with the lap belt across your hips and the shoulder belt across your chest. Keep at least 10 inches from the steering wheel for airbag safety.",
        imageUrl: "/images/handbook/img-2133.png",
        highlight: "Seatbelts save lives - wear yours every trip!",
      },
    ],
    questions: [
      {
        id: "steer-001",
        type: "multiple-choice",
        sectionId: "intro-driving",
        lessonId: "steering",
        difficulty: 1,
        xpValue: 10,
        question: "What is the recommended hand position on the steering wheel?",
        options: [
          "9 and 3 o'clock",
          "10 and 2 o'clock",
          "12 o'clock with one hand",
          "11 and 1 o'clock",
        ],
        correctIndex: 0,
        explanation:
          "The recommended position is 9 and 3 (or 8 and 4) to keep your hands out of the airbag deployment zone.",
        handbookReference: "Section 5 - Steering",
      },
      {
        id: "steer-002",
        type: "true-false",
        sectionId: "intro-driving",
        lessonId: "steering",
        difficulty: 1,
        xpValue: 10,
        statement: "You should keep at least 10 inches between your chest and the steering wheel.",
        isTrue: true,
        explanation:
          "Keeping at least 10 inches from the steering wheel gives the airbag room to deploy safely and protects you from injury.",
        handbookReference: "Section 5 - Steering",
      },
      {
        id: "steer-003",
        type: "multiple-choice",
        sectionId: "intro-driving",
        lessonId: "steering",
        difficulty: 2,
        xpValue: 15,
        question: "Why is the 10 and 2 hand position no longer recommended?",
        options: [
          "Risk of arm injury from airbag deployment",
          "It's harder to turn the wheel",
          "It causes back pain",
          "It blocks the dashboard",
        ],
        correctIndex: 0,
        explanation:
          "At 10 and 2, your arms are in the airbag deployment zone. If the airbag deploys, your arms could be thrown into your face.",
        handbookReference: "Section 5 - Steering",
      },
    ],
  },
];
