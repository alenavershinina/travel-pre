function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let season = document.querySelector('input[name="season"]:checked').value;
  let subject = document.getElementById("subject").value;

  alert(
    `Имя: ${name}\nГород: ${city}\nСезон: ${season}\nСообщение: ${subject}`
  );
}
