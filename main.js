import './style.css'

const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next'
    }
  });

const contact = document.querySelector("#btncontact");

contact.addEventListener("click", function go (event) {
	event.preventDefault();
	event.stopImmediatePropagation();
	const app = document.querySelector('#app');
	app.classList.add('blur');

	const popup = document.querySelector('.popup');
	popup.classList.add('openpop');
	app.addEventListener('click', function (event) {
		app.classList.remove('blur');
		popup.classList.remove('openpop');
		app.removeEventListener('click');
	});

});

const form = document.querySelector("#gender");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	const name = form.elements['prenom'];
	
	fetch("https://api.genderize.io?name=" + name.value)
	.then(response => {
	  response.json().then(rep => {
		if (rep.gender === "male")
			alert('Rosebud');
		else if (rep.gender === "female")
			alert('We rob banks');
		else
			alert('It\'s a trap !');
	  });
	})
});
