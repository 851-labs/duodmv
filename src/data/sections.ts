import type { Section } from "../types";

export const sections: Section[] = [
	{
		id: "driver-license",
		number: 1,
		title: "The California Driver's License",
		description: "Learn about license types, requirements, and who needs one",
		icon: "id-card",
		color: "#58cc02",
		totalLessons: 3,
		estimatedMinutes: 15,
	},
	{
		id: "permit-license",
		number: 2,
		title: "Getting Your Permit & License",
		description: "Steps to obtain your instruction permit and driver's license",
		icon: "clipboard-list",
		color: "#1cb0f6",
		totalLessons: 3,
		estimatedMinutes: 15,
	},
	{
		id: "testing-process",
		number: 3,
		title: "The Testing Process",
		description: "What to expect on the written and driving tests",
		icon: "file-check",
		color: "#ff9600",
		totalLessons: 2,
		estimatedMinutes: 10,
	},
	{
		id: "intro-driving",
		number: 5,
		title: "Introduction to Driving",
		description: "Basic vehicle controls and preparing to drive",
		icon: "car",
		color: "#ce82ff",
		totalLessons: 3,
		estimatedMinutes: 15,
	},
	{
		id: "navigating-roads",
		number: 6,
		title: "Navigating the Roads",
		description: "Road signs, lane markings, turns, and highway driving",
		icon: "map",
		color: "#ff4b4b",
		totalLessons: 5,
		estimatedMinutes: 25,
	},
	{
		id: "laws-rules",
		number: 7,
		title: "Laws and Rules of the Road",
		description: "Speed limits, right of way, and traffic laws",
		icon: "scale",
		color: "#58cc02",
		totalLessons: 5,
		estimatedMinutes: 25,
	},
	{
		id: "safe-driving",
		number: 8,
		title: "Safe Driving",
		description: "Defensive driving, hazards, and emergency situations",
		icon: "shield",
		color: "#1cb0f6",
		totalLessons: 4,
		estimatedMinutes: 20,
	},
	{
		id: "alcohol-drugs",
		number: 9,
		title: "Alcohol and Drugs",
		description: "DUI laws, BAC limits, and impaired driving consequences",
		icon: "alert-triangle",
		color: "#ff9600",
		totalLessons: 2,
		estimatedMinutes: 10,
	},
	{
		id: "financial-insurance",
		number: 10,
		title: "Financial Responsibility",
		description: "Insurance requirements and collision procedures",
		icon: "dollar-sign",
		color: "#ce82ff",
		totalLessons: 2,
		estimatedMinutes: 10,
	},
	{
		id: "vehicle-registration",
		number: 11,
		title: "Vehicle Registration",
		description: "Registration requirements and procedures",
		icon: "file-text",
		color: "#ff4b4b",
		totalLessons: 1,
		estimatedMinutes: 5,
	},
];

export function getSectionById(id: string): Section | undefined {
	return sections.find((s) => s.id === id);
}

export function getSectionByNumber(number: number): Section | undefined {
	return sections.find((s) => s.number === number);
}
