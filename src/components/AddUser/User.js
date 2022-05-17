const API = "http://localhost:3000";

const data = {
  name: "",
  totalScore: 0
};

fetch(`${API}/users`, {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json"
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });