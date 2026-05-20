import { Contenido } from "./class-content";
import { name } from "./personalInfo";
import { email } from "./personalInfo";

const project1 = new Contenido('langES');
project1.titleAbout = 'Tables for managing small businesses';  // Hojas de cálculo
project1.textContentAbout = 'Design of spreadsheets in Google Sheets using dynamic and structured tables to generate automatic consolidations by month, year, category, and various parameters. Advanced formulas such as QUERY, FILTER, INDEX, MATCH, and VLOOKUP are implemented to extract and consolidate complex data based on specific requests, ensuring accuracy and efficiency in analysis.';
project1.subtitle1 = 'Modular design';
project1.headContactMe = 'Contact me';
project1.textContactMe = `My name is ${name}, If you'd like a custom design, please contact me. Send me an email directly`;
project1.projectName = '';
project1.projectDescription1 =
  'Sales Module';
project1.projectDescription1_array = [
  'Base table with a list of products, prices, and features.',
  'Sales Details Data Entry Table.',
  'Data validation and appendix for the daily reconciliation.',
  'Consolidated report by month, by product, by sales channel, and by parameters as requested.',
];
project1.projectDescription2 =
  'Expense Module';
project1.projectDescription2_array = [
  'Data entry table for expense details.',
  'Base table with expense categories.',
  'Appendix on Labor.',
  'Consolidated report by month, category, supplier, and custom parameters.',
];
project1.projectDescription3 =
  'Cost Module';
project1.projectDescription3_array = [
  'Base table with unit prices for materials.',
  'Built-in formula tables that allow you to calculate the cost of materials for each product based on specified parameters and set a suggested retail price.',
  'Total raw material cost calculator based on products sold. (Requires the Sales module)',
];
project1.projectDescription4 =
  'Consolidated Management Module';
project1.projectDescription4_array = [
  'This requires at least the sales module and the expenses module to be installed beforehand.',
  'A spreadsheet designed to display monthly and year-to-date management results.',
];

project1.projectDescription5_array = [
  'In all modules, the information is automatically updated with each data entry.',
  'Reusable for future years.',
  "Tailored to each client's needs",
];

project1.projectDescription6 =
  'Dashboards and Scripts';
project1.projectDescription6_array = [
  'Dashboard from','with four charts.',
  'Custom scripts written in Google Apps Script for repetitive or specific tasks, starting at', 'depending on the complexity.',
];

project1.projectDescription7 =
  'Administrative Support or Improvement Support';
project1.projectDescription7_array = [
  'less than 5 hours, at ','per hour',
  'More than 5 hours in a week at','per hour',
];


project1.language = 'english';

const arrayProjects = [
  project1
];

export { arrayProjects };