import lozad from 'lozad';
import SimpleLightbox from 'simplelightbox';


let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function (e) {
	console.log(e); // some usefull information
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); // some usefull information
});
//if javascript isn't active
document.documentElement.classList.remove('no-js');

// lazy loads elements with default selector as '.lozad'
const observer = lozad();
observer.observe();

window.onscroll = () => {
	const topNav = document.getElementById('top-navbar');
	scrollY > 20
		? topNav.classList.add('scrolling')
		: topNav.classList.remove('scrolling');
};

// var container = document.getElementById('toggleMe');

// document.getElementById('mini').addEventListener('click', toggleFcn);

// const toggleFcn = event => {
// 	event.preventDefault();
// 	console.log('click');
// 	if (!container.classList.contains('active')) {
// 		container.classList.add('active');
// 		container.style.height = 'auto';

// 		var height = container.clientHeight + 'px';

// 		container.style.height = '0px';

// 		setTimeout(function () {
// 			container.style.height = height;
// 		}, 0);
// 	} else {
// 		container.style.height = '0px';

// 		container.addEventListener(
// 			'transitionend',
// 			function () {
// 				container.classList.remove('active');
// 			},
// 			{
// 				once: true,
// 			}
// 		);
// 	}
// };
