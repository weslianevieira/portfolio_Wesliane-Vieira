
(function () {
  emailjs.init("s_5KCjf4VnUf9qV-4");
})();

function sendmail() {
  let fullName = document.getElementById("name").value;
  let userEmail = document.getElementById("email").value;
  let userMessage = document.getElementById("message").value;

  var contactParams = {
    from_name: fullName,
    from_email: userEmail,
    message: userMessage
  };

  emailjs.send('service_a7qh7si', 'template_bhpvbvn', contactParams).then(function (res) {
    console.log(res);
    alert('Thanks, your message was seccussfully sent!')
  })
}