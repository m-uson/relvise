const navItems = document.querySelectorAll(".header__menu li a");
const burgerBtn = document.querySelector(".header__burger-btn");
const menuBtn = document.querySelector(".header__menu");
const body = document.querySelector("body"); // .body-lock {overflow: hidden}
const menuList = document.querySelectorAll("li a");
const inputBtn = (document.getElementById("input-btn").onclick = myClick);

function myClick() {
	const input = document.getElementById("input");
	input.value = "";
}

burgerBtn.addEventListener("click", function () {
	burgerBtn.classList.toggle("active");
	menuBtn.classList.toggle("menu-active");
	body.classList.toggle("body-lock");
	menuList.forEach((a) => {
		a.addEventListener("click", () => {
			burgerBtn.classList.remove("active");
			menuBtn.classList.remove("menu-active");
		});
	});
});

navItems.forEach((a) => {
	a.addEventListener("click", () => {
		navItems.forEach((item) => {
			item.classList.remove("is-active");
		});
		a.classList.add("is-active");
	});
});

const iconOne = "./img/icn.svg";
const iconTwo = "./img/settings.svg";
const iconThree = "./img/ic.svg";

function headerBottom() {
	const items = document.querySelector("div.items");

	const obj = [
		{
			title: "Environmental Consulting",
			img: iconOne,
			des: "We focus on ergonomics and meeting you where you work. ",
		},
		{
			title: "Finance and consultancy ",
			img: iconTwo,
			des: "Just type what's on your mind and we'll get you there.",
		},
		{
			title: "Safe as houses",
			img: iconThree,
			des: "Your data’s locked up with bank-level encryption to keep your money safe.",
		},
	];

	for (let ob of obj) {
		const item = document.createElement("div");
		item.className = "item";

		const desc = `  
        <div class="item-title">${ob.title}</div>
        <div class="item-des">${ob.des}</div>
    `;

		const image = `<img class="item-image" src="${ob.img}" >`;

		item.innerHTML = `
		${image} ${desc}
		`;

		items.append(item);
	}
}

headerBottom();

AOS.init();
