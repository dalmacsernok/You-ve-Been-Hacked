// restore the html button in the variable "numberInput" to have the placeholder
// "possible number"
console.dir(numberInput);
numberInput.setAttribute("placeholder", "possible number");

// restore the html element in the variable "calculateHighestSalaries" to have the button text
// "Calculate highest salary"
console.dir(calculateHighestSalaries);
calculateHighestSalaries.children[1].children[0].textContent = "Calculate highest salary";

// change the salaries which have the value "-999999" to "12823" by accessing the html element
// in the variable "salaryList"
console.dir(salaryList);

for (let i = 0; i < salaryList.children.length; i++) {
  if (salaryList.children[i].children[1].textContent === '-999999') {
    salaryList.children[i].children[1].textContent = '12823';
  }
}
// restore the html element in the variable "employeeList" to have the button with the text
// "Find all matching inputs" and "btn-primary" bootstrap design.
console.dir(employeeList);
employeeList.children[2].children[0].textContent = "Find all matching inputs";
employeeList.children[2].children[0].setAttribute('style', "");

// restore the html element in the variable "employeeList" to contain employee names from
// originalEmployeeData.
console.dir(employeeList);
let originalEmployeeData = [
  "John Smith",
  "Phyllis Duncan",
  "Alexandra Cummings",
  "Ruth Martin",
  "Charissa Kinney",
  "Jared Noel",
  "Mark Osborne",
  "Andrew Johnson",
  "Macy Massey",
  "David Mcdonald",
];
for (let i = 0; i <employeeList.children[0].children.length; i++) {
  employeeList.children[0].children[i].textContent = originalEmployeeData[i];
}
// restore the html element in the variable "salariesInput" to have the original html code
// contained in the div with the id "employeeList" from "index.html".
// After restoring the button with the text "Sum salaries" restore it's click functionality
// to execute the function "sumSalaries".
console.dir(salariesInput);
salariesInput.innerHTML = "<div class=\"container rounded-3\" id=\"salariesInput\">\n" +
     "            <div class=\"p-3\">\n" +
     "                <input type=\"number\" id=\"number-1\" placeholder=\"salary 1\" class=\"form-control\" value=\"0\">\n" +
     "            </div>\n" +
     "            <div class=\"p-3\">\n" +
     "                <input type=\"number\" id=\"number-2\" placeholder=\"salary 2\" class=\"form-control\" value=\"0\">\n" +
     "            </div>\n" +
     "            <div class=\"p-3\">\n" +
     "                <input type=\"number\" id=\"number-3\" placeholder=\"salary 3\" class=\"form-control\" value=\"0\">\n" +
     "            </div>\n" +
     "            <div class=\"p-3\">\n" +
     "                <input type=\"number\" id=\"number-4\" placeholder=\"salary 4\" class=\"form-control\" value=\"0\">\n" +
     "            </div>\n" +
     "            <div class=\"p-3\">\n" +
     "                <input type=\"number\" id=\"number-5\" placeholder=\"salary 5\" class=\"form-control\" value=\"0\">\n" +
     "            </div>\n" +
     "            <div class=\"p-3\">\n" +
     "                <button id=\"compute-number-sum\" class=\"btn btn-primary\">\n" +
     "                    Sum salaries\n" +
     "                </button>\n" +
     "            </div>\n" +
     "            <div class=\"p-3\" id=\"number-sum\"></div>\n" +
     "        </div>"


let button = salariesInput.children[0].children[5].children[0];
button.addEventListener('click', sumSalaries);

function sumSalaries() {
  let sum = 0;

  for (let i = 1; i <= 5; i++) {
    let salary = document.ElementById("number-" + i).value;

    sum = sum + parseInt(salary);
  }

  document.ElementById("number-sum").innerText = sum;
}

