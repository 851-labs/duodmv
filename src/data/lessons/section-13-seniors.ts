import type { Lesson } from "../../types";

export const section13Lessons: Lesson[] = [
  {
    id: "seniors-driving",
    sectionId: "seniors-driving",
    order: 1,
    title: "Seniors and Driving",
    description: "Special considerations and resources for senior drivers",
    type: "lesson",
    xpReward: 20,
    learnContent: [
      {
        id: "seniors-intro",
        type: "text",
        title: "Unique Needs of Senior Drivers",
        content:
          "Senior drivers often have unique needs and concerns about driving. Driving requires certain physical, visual, and mental abilities. We all want to continue driving as long as we can, but the time may come when we must limit or stop driving temporarily or permanently.",
      },
      {
        id: "warning-signs",
        type: "warning",
        title: "Warning Signs of an Unsafe Driver",
        content: "Be aware of these warning signs that may indicate unsafe driving:",
        bulletPoints: [
          "Getting lost in familiar places",
          "Dents and scrapes on the car, fences, mailbox, garage doors, etc.",
          "Frequent close calls or collisions",
        ],
        highlight: "If you notice these signs, it may be time to evaluate your driving abilities.",
      },
      {
        id: "safe-driving-tips",
        type: "tip",
        title: "Tips for Safer Driving",
        content: "Senior drivers may consider these strategies to drive more safely:",
        bulletPoints: [
          "Limiting or not driving at night (choose well-lit routes if necessary)",
          "Driving during times when traffic is light",
          "Avoiding difficult intersections",
          "Driving for short distances or limiting driving to essential places",
          "Avoiding freeway driving",
          "Installing an additional right-side mirror",
        ],
      },
      {
        id: "renewal-70",
        type: "warning",
        title: "License Renewal at 70+",
        content:
          "If you are 70 years old or older when your license expires, you are required to renew your license in person and pass a vision test. In some cases, other exams may be required.",
        highlight:
          "DMV sends a renewal notice about 90 days before your license expires. If you don't receive one, apply online or visit a DMV office.",
      },
      {
        id: "mature-driver-program",
        type: "tip",
        title: "Mature Driver Improvement Program",
        content:
          "The Mature Driver Improvement Program is an eight-hour course for drivers 55 years old and older. It covers topics of special interest to mature drivers.",
        highlight: "Your insurance company may offer discounts if you complete the program.",
      },
      {
        id: "community-liaison",
        type: "text",
        title: "DMV Community Liaison",
        content:
          "DMV's Community Liaison represents public safety interests with a focus on senior drivers and teens. They can assist as a go-between to ensure drivers are treated fairly and with dignity.",
        bulletPoints: [
          "Provides useful tools and information",
          "Cannot represent you in a DMV hearing",
          "Contact: (833) 493-0675",
        ],
      },
    ],
    questions: [
      {
        id: "sen-001",
        type: "multiple-choice",
        sectionId: "seniors-driving",
        lessonId: "seniors-driving",
        difficulty: 1,
        xpValue: 10,
        question: "At what age must you renew your driver's license in person?",
        options: [
          "60 years old or older",
          "65 years old or older",
          "70 years old or older",
          "75 years old or older",
        ],
        correctIndex: 2,
        explanation:
          "If you are 70 years old or older at the time your license expires, you are required to renew in person and pass a vision test.",
        handbookReference: "Section 13 - Driver's License Renewal",
      },
      {
        id: "sen-002",
        type: "multiple-choice",
        sectionId: "seniors-driving",
        lessonId: "seniors-driving",
        difficulty: 1,
        xpValue: 10,
        question: "How many hours is the Mature Driver Improvement Program?",
        options: ["4 hours", "6 hours", "8 hours", "12 hours"],
        correctIndex: 2,
        explanation:
          "The Mature Driver Improvement Program is an eight-hour course for drivers 55 years old and older.",
        handbookReference: "Section 13 - Mature Driver Program",
      },
      {
        id: "sen-003",
        type: "true-false",
        sectionId: "seniors-driving",
        lessonId: "seniors-driving",
        difficulty: 1,
        xpValue: 10,
        statement:
          "Getting lost in familiar places may be a warning sign of an unsafe driver.",
        isTrue: true,
        explanation:
          "Getting lost in familiar places is one of the warning signs that may indicate unsafe driving abilities.",
        handbookReference: "Section 13 - Warning Signs",
      },
      {
        id: "sen-004",
        type: "true-false",
        sectionId: "seniors-driving",
        lessonId: "seniors-driving",
        difficulty: 1,
        xpValue: 10,
        statement:
          "Insurance companies may offer discounts if you complete the Mature Driver Improvement Program.",
        isTrue: true,
        explanation:
          "Your insurance company may offer discounts if you complete the Mature Driver Improvement Program.",
        handbookReference: "Section 13 - Mature Driver Program",
      },
    ],
  },
];
