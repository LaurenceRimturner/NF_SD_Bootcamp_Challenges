console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const formNameValue = formElements.firstName.value;
  const formAgeValue = Number(formElements.age.value);
  const formBadnessValue = Number(formElements.badness.value);
  const sumOfBadAge = formAgeValue + formBadnessValue;

  const dataform = {
    firstName: formNameValue,
    lastName: formElements.lastName.value,
    age: formAgeValue,
    email: formElements.email.value,
    complaint: formElements.complaint.value,
    details: formElements.details.value,
    Badness: formBadnessValue,
    orderDate: formElements.orderDate.value,
    tos: formElements.tos.value,
  };
  console.log(dataform);
  console.log("The age-badness-sum of " + formNameValue + " is " + sumOfBadAge);
  form.reset();
  formElements.firstName.focus();
});
