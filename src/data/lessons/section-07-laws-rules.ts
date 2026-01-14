import type { Lesson } from "../../types";

export const section7Lessons: Lesson[] = [
  {
    id: "right-of-way",
    sectionId: "laws-rules",
    order: 1,
    title: "Right of Way Rules",
    description: "Learn who goes first at intersections and crossings",
    type: "lesson",
    xpReward: 25,
    learnContent: [
      {
        id: "row-intro",
        type: "text",
        title: "What is Right of Way?",
        content:
          "Right of way rules determine who goes first when drivers, pedestrians, and cyclists meet. These rules prevent collisions and keep traffic flowing safely.",
        highlight:
          "Right of way is given, not taken. Even if you have the right of way, always be prepared to yield to avoid an accident.",
      },
      {
        id: "row-intersection-example",
        type: "image",
        title: "Right of Way at Intersections",
        content:
          "At intersections, the vehicle that arrives first has the right of way. If two vehicles arrive at the same time, yield to the vehicle on your right.",
        imageUrl: "/images/intersection-right-of-way.png",
      },
      {
        id: "row-pedestrians",
        type: "image",
        title: "Pedestrians Have Priority",
        content:
          "Drivers must always yield to pedestrians in crosswalks. This includes people using wheelchairs, tricycles, and other mobility devices.",
        imageUrl: "/images/warning-pedestrian-crossing.png",
        highlight: "Pedestrians ALWAYS have the right of way in crosswalks.",
      },
      {
        id: "row-mobility-devices",
        type: "text",
        title: "Pedestrian Mobility Devices",
        content:
          "People using wheelchairs, motorized wheelchairs, tricycles, and mobility scooters are considered pedestrians and have the same right of way protections.",
        bulletPoints: [
          "Wheelchairs (manual and motorized)",
          "Three-wheeled mobility devices (tricycles)",
          "Four-wheeled mobility scooters",
          "Electric personal assistive mobility devices",
        ],
      },
      {
        id: "row-mobility-wheelchair",
        type: "image",
        title: "Manual Wheelchair",
        content:
          "Users of manual wheelchairs are pedestrians. Always yield to them at crosswalks and give them time to cross safely.",
        imageUrl: "/images/mobility-wheelchair.png",
      },
      {
        id: "row-mobility-motorized",
        type: "image",
        title: "Motorized Wheelchair",
        content:
          "Motorized wheelchairs travel faster than manual ones but users still have pedestrian rights. Watch for them at intersections.",
        imageUrl: "/images/mobility-motorized-wheelchair.png",
      },
      {
        id: "row-mobility-scooter",
        type: "image",
        title: "Mobility Scooter",
        content:
          "Four-wheeled mobility scooters are common among seniors and people with disabilities. They have full pedestrian protections.",
        imageUrl: "/images/mobility-scooter.png",
      },
      {
        id: "row-mobility-tricycle",
        type: "image",
        title: "Three-Wheeled Mobility Device",
        content:
          "Hand-powered tricycles and similar three-wheeled devices are used by people with mobility challenges. Yield to them as pedestrians.",
        imageUrl: "/images/mobility-tricycle.png",
      },
      {
        id: "row-emergency",
        type: "warning",
        title: "Emergency Vehicles",
        content:
          "When an emergency vehicle approaches with sirens and flashing lights, pull to the right edge of the road and stop. Wait until the emergency vehicle has passed before resuming.",
        highlight: "Pull RIGHT, stop, and wait.",
      },
      {
        id: "row-emergency-image",
        type: "image",
        title: "Yielding to Emergency Vehicles",
        content:
          "When you hear sirens or see flashing lights, safely pull to the right edge of the road and stop. Let the emergency vehicle pass before you resume driving.",
        imageUrl: "/images/emergency-firetruck.png",
      },
      {
        id: "row-school-bus",
        type: "image",
        title: "School Buses",
        content:
          "When a school bus displays flashing red lights and a stop sign arm, ALL traffic in BOTH directions must stop. Wait until the lights stop flashing before proceeding.",
        imageUrl: "/images/school-bus-stop.png",
        highlight: "Stop for school buses with red lights flashing - it's the law!",
      },
      {
        id: "row-two-cars",
        type: "image",
        title: "Two Vehicles at Intersection",
        content:
          "When two vehicles approach an uncontrolled intersection at the same time, the driver on the left must yield to the driver on the right.",
        imageUrl: "/images/intersection-two-cars.png",
      },
      {
        id: "row-bus-intersection",
        type: "image",
        title: "Buses at Intersections",
        content:
          "Large vehicles like buses need extra space to turn. Give them room and don't try to pass them in an intersection.",
        imageUrl: "/images/intersection-bus.png",
      },
      {
        id: "row-bus-turning",
        type: "image",
        title: "Bus Making Turn",
        content:
          "Buses and large trucks make wide turns. Stay back and don't squeeze between them and the curb when they're turning.",
        imageUrl: "/images/intersection-bus-turning.png",
      },
      {
        id: "row-bus-wide-turn",
        type: "image",
        title: "Large Vehicle Wide Turn",
        content:
          "Large vehicles swing wide when turning. The rear wheels track inside the front wheels, so they may start a turn from the left lane to turn right.",
        imageUrl: "/images/intersection-bus-turning-2.png",
      },
      {
        id: "row-right-of-way-scenario",
        type: "image",
        title: "Right of Way Scenario",
        content:
          "This shows a typical intersection scenario. The vehicle that arrived first proceeds, or if arriving together, yield to the vehicle on your right.",
        imageUrl: "/images/intersection-right-of-way-2.png",
      },
    ],
    questions: [
      {
        id: "row-001",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "right-of-way",
        difficulty: 1,
        xpValue: 10,
        question: "At an intersection without signs or signals, who has the right of way?",
        options: [
          "The vehicle that arrived first",
          "The larger vehicle",
          "The vehicle turning left",
          "The vehicle on the busier street",
        ],
        correctIndex: 0,
        explanation:
          "At an uncontrolled intersection, the first vehicle to arrive has the right of way. If two vehicles arrive at the same time, yield to the vehicle on your right.",
        handbookReference: "Section 7 - Right of Way",
      },
      {
        id: "row-002",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "right-of-way",
        difficulty: 1,
        xpValue: 10,
        statement: "Pedestrians always have the right of way in a crosswalk.",
        isTrue: true,
        explanation:
          "Drivers must always yield to pedestrians in marked and unmarked crosswalks. This is one of the most important safety rules.",
        handbookReference: "Section 7 - Right of Way",
      },
      {
        id: "row-003",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "right-of-way",
        difficulty: 2,
        xpValue: 15,
        question:
          "When two vehicles arrive at a four-way stop at the same time, who should go first?",
        options: [
          "The vehicle on the right",
          "The vehicle on the left",
          "The vehicle going straight",
          "The vehicle turning right",
        ],
        correctIndex: 0,
        explanation:
          "When vehicles arrive at the same time at a four-way stop, the driver on the left must yield to the driver on the right.",
        handbookReference: "Section 7 - Right of Way",
      },
      {
        id: "row-004",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "right-of-way",
        difficulty: 1,
        xpValue: 10,
        statement:
          "You must yield to traffic already on the freeway when entering from an on-ramp.",
        isTrue: true,
        explanation:
          "When entering a freeway, you must yield to vehicles already on the highway. Use the acceleration lane to merge safely.",
        handbookReference: "Section 7 - Right of Way",
      },
      {
        id: "row-005",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "right-of-way",
        difficulty: 2,
        xpValue: 15,
        question:
          "What should you do when an emergency vehicle approaches with sirens and flashing lights?",
        options: [
          "Pull over to the right and stop",
          "Speed up to get out of the way",
          "Stop immediately wherever you are",
          "Continue at the same speed",
        ],
        correctIndex: 0,
        explanation:
          "When an emergency vehicle approaches, pull over to the right edge of the road and stop. If you're in an intersection, go through it first, then pull over.",
        handbookReference: "Section 7 - Right of Way",
      },
      {
        id: "row-006",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "right-of-way",
        difficulty: 2,
        xpValue: 15,
        question: "At a T-intersection without signs, who has the right of way?",
        options: [
          "Traffic on the through road",
          "Traffic on the terminating road",
          "Whoever arrives first",
          "The vehicle making a right turn",
        ],
        correctIndex: 0,
        explanation:
          "At a T-intersection, vehicles on the through road have the right of way. Traffic on the terminating road must yield.",
        handbookReference: "Section 7 - Right of Way",
      },
    ],
  },
  {
    id: "speed-limits",
    sectionId: "laws-rules",
    order: 2,
    title: "Speed Limits",
    description: "California speed limits and when to slow down",
    type: "lesson",
    xpReward: 25,
    requiredLessons: ["right-of-way"],
    learnContent: [
      {
        id: "speed-intro",
        type: "text",
        title: "California Speed Limits",
        content:
          "Speed limits are set to protect you and others on the road. Always obey posted limits and adjust your speed based on conditions.",
        bulletPoints: [
          "65 mph: Maximum on most highways",
          "55 mph: Two-lane undivided highways",
          "25 mph: Residential and business districts",
          "15 mph: Alleys, railroad crossings (limited view)",
        ],
      },
      {
        id: "speed-basic-law",
        type: "warning",
        title: "The Basic Speed Law",
        content:
          "California's Basic Speed Law states you may never drive faster than is safe for current conditions, regardless of the posted speed limit.",
        highlight:
          "Even if the limit is 65 mph, you must slow down in fog, rain, heavy traffic, or road hazards.",
      },
      {
        id: "speed-school-zones",
        type: "text",
        title: "School Zones",
        content:
          "When children are present near schools, the speed limit is 25 mph. Some school zones have flashing lights indicating when the lower limit is in effect.",
        highlight: "Watch for children - they may not watch for you!",
      },
      {
        id: "speed-railroad",
        type: "image",
        title: "Railroad Crossings",
        content:
          "At railroad crossings where you cannot see 400 feet in both directions, you must not exceed 15 mph. Use the posted emergency number if your vehicle gets stuck on tracks.",
        imageUrl: "/images/sign-railroad-emergency.png",
      },
      {
        id: "speed-construction",
        type: "image",
        title: "Construction Zones",
        content:
          "Slow down in construction zones. Workers may be present, and fines are doubled in these areas. Watch for flaggers directing traffic.",
        imageUrl: "/images/sign-flagger-ahead.png",
        highlight: "Fines are DOUBLED in construction zones!",
      },
    ],
    questions: [
      {
        id: "spd-001",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "speed-limits",
        difficulty: 1,
        xpValue: 10,
        question: "What is the maximum speed limit on most California highways?",
        options: ["65 mph", "55 mph", "70 mph", "60 mph"],
        correctIndex: 0,
        explanation:
          "The maximum speed limit on most California highways is 65 mph. Some rural interstates may have limits up to 70 mph where posted.",
        handbookReference: "Section 7 - Speed Limits",
      },
      {
        id: "spd-002",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "speed-limits",
        difficulty: 1,
        xpValue: 10,
        question: "What is the speed limit in a residential district unless otherwise posted?",
        options: ["25 mph", "30 mph", "35 mph", "20 mph"],
        correctIndex: 0,
        explanation:
          "The speed limit in residential and business districts is 25 mph unless otherwise posted.",
        handbookReference: "Section 7 - Speed Limits",
      },
      {
        id: "spd-003",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "speed-limits",
        difficulty: 2,
        xpValue: 15,
        question: "What is the speed limit in a school zone when children are present?",
        options: ["25 mph", "15 mph", "20 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "The speed limit near schools is 25 mph while children are outside or crossing the street. Some school zones may have even lower limits when flashing.",
        handbookReference: "Section 7 - Speed Limits",
      },
      {
        id: "spd-004",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "speed-limits",
        difficulty: 1,
        xpValue: 10,
        statement: "You may drive faster than the posted speed limit to keep up with traffic flow.",
        isTrue: false,
        explanation:
          "The posted speed limit is the maximum legal speed. Driving faster than the limit is illegal regardless of traffic flow.",
        handbookReference: "Section 7 - Speed Limits",
      },
      {
        id: "spd-005",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "speed-limits",
        difficulty: 2,
        xpValue: 15,
        question:
          "What is the speed limit when approaching a railroad crossing without a clear view 400 feet in each direction?",
        options: ["15 mph", "25 mph", "20 mph", "10 mph"],
        correctIndex: 0,
        explanation:
          "You must not exceed 15 mph when you cannot see clearly 400 feet in both directions at a railroad crossing.",
        handbookReference: "Section 7 - Speed Limits",
      },
      {
        id: "spd-006",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "speed-limits",
        difficulty: 2,
        xpValue: 15,
        statement:
          "The 'Basic Speed Law' means you must never drive faster than is safe for current conditions.",
        isTrue: true,
        explanation:
          "California's Basic Speed Law states you may never drive faster than is safe for current conditions, regardless of the posted speed limit.",
        handbookReference: "Section 7 - Speed Limits",
      },
    ],
  },
  {
    id: "traffic-signals",
    sectionId: "laws-rules",
    order: 3,
    title: "Traffic Signals",
    description: "What traffic lights and signals mean",
    type: "lesson",
    xpReward: 25,
    requiredLessons: ["speed-limits"],
    learnContent: [
      {
        id: "signals-intro",
        type: "text",
        title: "Traffic Light Colors",
        content:
          "Traffic lights use three colors to control traffic flow. Understanding what each color means is essential for safe driving.",
        bulletPoints: [
          "RED: Stop and remain stopped",
          "YELLOW: Light is about to turn red - stop if safe",
          "GREEN: Go if the intersection is clear",
        ],
      },
      {
        id: "signals-red-variations",
        type: "text",
        title: "Red Light Variations",
        content: "Red lights come in different forms, each with specific rules.",
        bulletPoints: [
          "Solid Red: Stop and wait for green",
          "Red Arrow: Stop, no turn in arrow direction",
          "Flashing Red: Stop, then proceed when safe (like a stop sign)",
        ],
        highlight: "You may turn right on red after stopping, unless a sign prohibits it.",
      },
      {
        id: "signals-yellow-variations",
        type: "text",
        title: "Yellow Light Variations",
        content: "Yellow lights warn you that the signal is changing.",
        bulletPoints: [
          "Solid Yellow: Light is about to turn red - stop if safe",
          "Yellow Arrow: Protected turn is ending",
          "Flashing Yellow: Proceed with caution (no stop required)",
        ],
      },
      {
        id: "signals-green-variations",
        type: "text",
        title: "Green Light Variations",
        content:
          "Green lights indicate you may proceed, but always check that the intersection is clear first.",
        bulletPoints: [
          "Solid Green: Go straight or turn (yield to oncoming traffic)",
          "Green Arrow: Protected turn - oncoming traffic has red",
        ],
      },
      {
        id: "signals-warning-sign",
        type: "image",
        title: "Signal Ahead Warning",
        content:
          "This yellow warning sign alerts you that a traffic signal is ahead. Be prepared to stop.",
        imageUrl: "/images/warning-signal-ahead.png",
      },
      {
        id: "signals-malfunctioning",
        type: "warning",
        title: "Malfunctioning Signals",
        content:
          "If a traffic signal is completely out or malfunctioning, treat the intersection as a four-way stop. Stop, then proceed in order of arrival.",
        highlight: "No lights = Four-way stop rules apply",
      },
    ],
    questions: [
      {
        id: "sig-001",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "traffic-signals",
        difficulty: 1,
        xpValue: 10,
        question: "What does a flashing red traffic light mean?",
        options: [
          "Stop, then proceed when safe",
          "Slow down and proceed with caution",
          "Stop and wait for green",
          "Yield to cross traffic",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red light means STOP. After stopping, you may proceed when safe, treating it like a stop sign.",
        handbookReference: "Section 7 - Traffic Signals",
      },
      {
        id: "sig-002",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "traffic-signals",
        difficulty: 1,
        xpValue: 10,
        question: "What does a flashing yellow traffic light mean?",
        options: [
          "Slow down and proceed with caution",
          "Stop, then proceed when safe",
          "Speed up to clear the intersection",
          "Stop and wait for the light to change",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow light means slow down and proceed with caution. You don't need to stop unless necessary for safety.",
        handbookReference: "Section 7 - Traffic Signals",
      },
      {
        id: "sig-003",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "traffic-signals",
        difficulty: 1,
        xpValue: 10,
        statement: "You may turn right on a red light after stopping, unless a sign prohibits it.",
        isTrue: true,
        explanation:
          "In California, you may turn right on red after coming to a complete stop, unless there's a 'No Turn on Red' sign.",
        handbookReference: "Section 7 - Traffic Signals",
      },
      {
        id: "sig-004",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "traffic-signals",
        difficulty: 2,
        xpValue: 15,
        question: "What should you do when a traffic signal is not working?",
        options: [
          "Treat the intersection as a four-way stop",
          "Proceed through quickly",
          "Turn around and find another route",
          "Honk and proceed",
        ],
        correctIndex: 0,
        explanation:
          "When a traffic signal is completely out, treat the intersection as a four-way stop. Stop, then proceed in order of arrival.",
        handbookReference: "Section 7 - Traffic Signals",
      },
      {
        id: "sig-005",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "traffic-signals",
        difficulty: 2,
        xpValue: 15,
        statement:
          "A green arrow means you have the right of way to turn in the direction of the arrow.",
        isTrue: true,
        explanation:
          "A green arrow gives you protected right of way to turn in that direction. Oncoming traffic has a red light.",
        handbookReference: "Section 7 - Traffic Signals",
      },
      {
        id: "sig-006",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "traffic-signals",
        difficulty: 2,
        xpValue: 15,
        question: "What does a yellow (amber) traffic light mean?",
        options: [
          "The light is about to turn red - stop if safe",
          "Speed up to beat the red light",
          "Proceed with caution",
          "Stop immediately",
        ],
        correctIndex: 0,
        explanation:
          "A yellow light warns that the light is about to turn red. Stop if you can do so safely; don't speed up to 'beat the light.'",
        handbookReference: "Section 7 - Traffic Signals",
      },
    ],
  },
  {
    id: "lane-usage",
    sectionId: "laws-rules",
    order: 4,
    title: "Lane Usage & Passing",
    description: "Proper lane usage and when you can pass other vehicles",
    type: "lesson",
    xpReward: 25,
    requiredLessons: ["traffic-signals"],
    learnContent: [
      {
        id: "lane-intro",
        type: "text",
        title: "Lane Markings",
        content:
          "Lane markings tell you when you can change lanes and what each lane is for. Understanding these markings is key to safe driving.",
        bulletPoints: [
          "White lines: Separate traffic going the same direction",
          "Yellow lines: Separate traffic going opposite directions",
          "Dashed lines: Lane changes allowed",
          "Solid lines: Lane changes restricted",
        ],
      },
      {
        id: "lane-merge",
        type: "image",
        title: "Merging Traffic",
        content:
          "This sign warns that traffic is merging from the right. Prepare to adjust your speed or position to allow vehicles to merge safely.",
        imageUrl: "/images/warning-merge.png",
      },
      {
        id: "lane-ends",
        type: "image",
        title: "Lane Ends",
        content:
          "This sign warns that your lane is ending. You must merge into an adjacent lane. Begin merging early and yield to traffic already in that lane.",
        imageUrl: "/images/warning-lane-ends.png",
      },
      {
        id: "lane-added",
        type: "image",
        title: "Added Lane",
        content:
          "This sign indicates a new lane is being added. Traffic entering from the ramp has its own lane and doesn't need to merge immediately.",
        imageUrl: "/images/warning-added-lane.png",
      },
      {
        id: "lane-divided",
        type: "image",
        title: "Divided Highway",
        content:
          "This sign indicates the road ahead becomes a divided highway with a median or barrier separating opposing traffic.",
        imageUrl: "/images/warning-divided-highway.png",
      },
      {
        id: "lane-two-way",
        type: "image",
        title: "Two-Way Traffic",
        content:
          "This sign warns that you're entering a two-way roadway. Oncoming traffic will be in the lane next to you.",
        imageUrl: "/images/warning-two-way-traffic.png",
      },
      {
        id: "lane-center-turn",
        type: "warning",
        title: "Center Left-Turn Lane",
        content:
          "The center left-turn lane (marked with double yellow lines on both sides) is ONLY for making left turns. Never use it as a travel lane.",
        highlight: "Maximum 200 feet of travel in a center turn lane.",
      },
      {
        id: "lane-curves",
        type: "image",
        title: "Winding Road Ahead",
        content:
          "This sign warns of a series of curves ahead. Reduce your speed and stay in your lane through the curves.",
        imageUrl: "/images/warning-winding-road.png",
      },
    ],
    questions: [
      {
        id: "lane-001",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "lane-usage",
        difficulty: 1,
        xpValue: 10,
        question: "On a two-lane road, when may you pass another vehicle on the right?",
        options: [
          "When the vehicle ahead is making a left turn",
          "Anytime if you can do so safely",
          "Never - passing on the right is always illegal",
          "Only on one-way streets",
        ],
        correctIndex: 0,
        explanation:
          "You may pass on the right when the vehicle ahead is making or about to make a left turn, or on a one-way street with two or more lanes.",
        handbookReference: "Section 7 - Lane Usage",
      },
      {
        id: "lane-002",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "lane-usage",
        difficulty: 1,
        xpValue: 10,
        statement: "You may cross a double yellow line to pass another vehicle.",
        isTrue: false,
        explanation:
          "Double yellow lines mean no passing from either direction. You may only cross them to turn into a driveway or to turn around.",
        handbookReference: "Section 7 - Lane Usage",
      },
      {
        id: "lane-003",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "lane-usage",
        difficulty: 2,
        xpValue: 15,
        question: "What does a white dashed line between lanes mean?",
        options: [
          "You may change lanes when safe",
          "You must stay in your lane",
          "Passing is prohibited",
          "The lane is ending",
        ],
        correctIndex: 0,
        explanation:
          "White dashed lines separate lanes of traffic going in the same direction and indicate you may change lanes when it's safe.",
        handbookReference: "Section 7 - Lane Usage",
      },
      {
        id: "lane-004",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "lane-usage",
        difficulty: 2,
        xpValue: 15,
        question: "When driving on a freeway, which lane should you use for normal driving?",
        options: [
          "The right-hand lanes",
          "The left-most lane",
          "The center lanes only",
          "Any lane you prefer",
        ],
        correctIndex: 0,
        explanation:
          "On freeways, use the right-hand lanes for driving. The left lanes are for passing. Move right after passing.",
        handbookReference: "Section 7 - Lane Usage",
      },
      {
        id: "lane-005",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "lane-usage",
        difficulty: 2,
        xpValue: 15,
        statement: "You may use the center left-turn lane to merge into traffic.",
        isTrue: false,
        explanation:
          "The center left-turn lane is only for making left turns. You may not use it as a merging or travel lane.",
        handbookReference: "Section 7 - Lane Usage",
      },
      {
        id: "lane-006",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "lane-usage",
        difficulty: 3,
        xpValue: 20,
        question: "What is the maximum distance you can travel in a center left-turn lane?",
        options: ["200 feet", "100 feet", "300 feet", "No limit"],
        correctIndex: 0,
        explanation:
          "You should not travel more than 200 feet in a center left-turn lane before making your turn.",
        handbookReference: "Section 7 - Lane Usage",
      },
    ],
  },
  {
    id: "laws-checkpoint",
    sectionId: "laws-rules",
    order: 5,
    title: "Laws & Rules Review",
    description: "Test your knowledge of California traffic laws",
    type: "checkpoint",
    xpReward: 40,
    requiredLessons: ["lane-usage"],
    questions: [
      {
        id: "chk-001",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "laws-checkpoint",
        difficulty: 2,
        xpValue: 15,
        question:
          "You're at a four-way stop and another car arrived at the same time on your right. Who goes first?",
        options: [
          "The vehicle on your right",
          "You - vehicle on the left",
          "Whoever starts moving first",
          "The vehicle going straight",
        ],
        correctIndex: 0,
        explanation:
          "At a four-way stop with simultaneous arrival, yield to the vehicle on your right.",
        handbookReference: "Section 7 - Right of Way",
      },
      {
        id: "chk-002",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "laws-checkpoint",
        difficulty: 2,
        xpValue: 15,
        question: "What is the speed limit in an alley?",
        options: ["15 mph", "25 mph", "10 mph", "20 mph"],
        correctIndex: 0,
        explanation: "The speed limit in any alley is 15 mph.",
        handbookReference: "Section 7 - Speed Limits",
      },
      {
        id: "chk-003",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "laws-checkpoint",
        difficulty: 2,
        xpValue: 15,
        statement:
          "You may make a U-turn at an intersection controlled by a traffic signal unless a sign prohibits it.",
        isTrue: true,
        explanation:
          "U-turns are legal at intersections with traffic signals unless prohibited by a sign. Make sure to yield to oncoming traffic.",
        handbookReference: "Section 7 - Lane Usage",
      },
      {
        id: "chk-004",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "laws-checkpoint",
        difficulty: 3,
        xpValue: 20,
        question:
          "When must you yield to a blind pedestrian carrying a white cane or using a guide dog?",
        options: [
          "Always",
          "Only at crosswalks",
          "Only when they have a walk signal",
          "Only in school zones",
        ],
        correctIndex: 0,
        explanation:
          "You must ALWAYS yield to blind pedestrians. They have the right of way at all times, even outside crosswalks.",
        handbookReference: "Section 7 - Right of Way",
      },
      {
        id: "chk-005",
        type: "multiple-choice",
        sectionId: "laws-rules",
        lessonId: "laws-checkpoint",
        difficulty: 2,
        xpValue: 15,
        question: "What should you do before changing lanes?",
        options: [
          "Signal, check mirrors, and look over your shoulder",
          "Just check your rearview mirror",
          "Signal and change lanes immediately",
          "Honk your horn",
        ],
        correctIndex: 0,
        explanation:
          "Before changing lanes: signal, check mirrors, and look over your shoulder to check your blind spot.",
        handbookReference: "Section 7 - Lane Usage",
      },
      {
        id: "chk-006",
        type: "true-false",
        sectionId: "laws-rules",
        lessonId: "laws-checkpoint",
        difficulty: 2,
        xpValue: 15,
        statement: "If you are being tailgated, you should speed up to create more space.",
        isTrue: false,
        explanation:
          "If tailgated, don't speed up. Instead, move to another lane or gently slow down to encourage passing. Never brake suddenly.",
        handbookReference: "Section 7 - Safe Driving",
      },
    ],
  },
];
