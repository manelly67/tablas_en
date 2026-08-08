import { Contenido } from "./class-content";
import { name } from "./personalInfo";

const project1 = new Contenido("langEn");

project1.titleAbout = "Spreadsheets for small business management"; // Hojas de cálculo
project1.middleContent = [
  "Do you really know how much you earn each month?",
  "Many small businesses sell every day, but don't know their real profits",
];
project1.textContentAbout =
  "I developed a management system in Google Sheets that helps control the main areas of the business. No monthly subscription and no technical knowledge required. It uses dynamic and structured tables to automatically generate summaries by month, year, categories, and various parameters. Advanced formulas such as QUERY, FILTER, INDEX, MATCH, and VLOOKUP are implemented to extract and consolidate complex data on specific request, ensuring accuracy and speed in the analysis. A custom menu with functions designed in Google Apps Script is included to automate repetitive tasks or make the tool easier to use for people without technical knowledge.";
project1.subtitle1 = "Structured design through modules";
project1.headContactMe = "Contact me";
project1.textContactMe = `I am ${name}, if you want a design for yourself, get in touch with me. Write directly to the email`;
project1.projectName = "";
project1.projectDescription1 = "Management for PRODUCER";

project1.projectDescription2 = "Management for SELLER";

project1.projectDescription3 = "The price includes";
project1.projectDescription3_array = [
  "Customization",
  "A one-hour training session",
  "WhatsApp support for one month",
];

project1.projectDescription5_array = [
  "In all modules, information updates automatically with each data entry.",
  "Adapted to each client's needs",
];

project1.arrayAbout = [
  "📊 Design of a management system in Google Sheets that shows, month by month, how much the business really sells, how much it costs to sell, how much it spends, and what its financial result is. No monthly subscription and no technical knowledge required",
  "📁 Contains:",
  [
    "🗂️ Product catalog",
    ["✅ Customizable.", "✅ Can be used by merchants or manufacturers."],
  ],
  [
    "💰 Sales management",
    [
      "📝 Sales record.",
      "🛒 Sales channel.",
      "⚙️ Additional configurable parameter.",
      "🔄 Automatic consolidation using pivot tables.",
    ],
  ],
  [
    "🧮 Sales costing",
    "Automatically calculates the cost of what was sold.",
    [
      "🏬 Trading companies → uses the purchase price.",
      "🏭 Manufacturing companies → uses the production cost.",
    ],
  ],
  [
    "💸 Expense management",
    [
      "📝 Expense record.",
      "🏷️ Free classification by the user (expense category, suppliers).",
      "🧾 Management classification defined by the system.",
    ],
  ],
  [
    "Management income statement",
    "Automatically integrates:",
    [
      "💵 Sales",
      "📦 Cost of sales",
      "👷 Labor",
      "🏗️ Depreciation",
      "🗃️ Administrative expenses",
      "📣 Selling expenses",
    ],
    "✨ To show the business's financial result.",
  ],
  [
    "🤖 A custom menu with functions designed in Google Apps Script is included to automate repetitive tasks or make the tool easier to use for people without technical knowledge.",
  ],
];
// additional information
project1.projectDescription4_array = [
  "Try this free website to control your expenses",
  "Consolidated management module",
  "Individual modules",
  "One-time purchase of the cost module, no renewal required.",
  [
    "Sales Module",
    "Expenses Module",
    "Costs Module",
    "Consolidated Management Module",
    "Comprehensive Management System",
    "Free charts",
  ],
];

project1.language = "english";

const arrayProjects = [project1];

export { arrayProjects };
