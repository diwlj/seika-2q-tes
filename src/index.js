import JustValidate from 'just-validate';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const validator = new JustValidate('#basic_form');

		validator
		.addField('#basic_name', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'minLength',
			value: 3,
			errorMessage: '3文字以上で入力してください。',
		},
		{
			rule: 'maxLength',
			value: 15,
			errorMessage: '最大入力文字数は15文字です。',
		},
		])
		.addField('#basic_email', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'email',
			errorMessage: '形式が正しくありません。',
		},
		])
		.addField('#basic_password', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'password',
			errorMessage: 'パスワードは8文字以上で入力してください。',
		},
		])
		.addField('#basic_age', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'number',
			errorMessage: '数字で入力してください',
		},
		{
			rule: 'minNumber',
			value: 18,
			errorMessage: '18以上の数字を入力してください。',
		},
		{
			rule: 'maxNumber',
			value: 150,
			errorMessage: '18以上の数字を入力してください。',
		},
		])
		.addField('#basic_address', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		])
		.onSuccess((event) =>{
			let formData = new FormData(event.target);
			console.log(formData.get("name"));
			console.log(formData.get("email"));
			console.log(formData.get("password"));
			console.log(formData.get("age"));
			console.log(formData.get("address"));
		});

const swiper = new Swiper('.swiper-1', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	    
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	    
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	    
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	    });

	    //スライドが切り替わったときに呼び出されるように
	    //onメソッドを使ってイベントを受け取る
	    const swiperTitle = document.getElementById('swiper-title');
	    const titleText = 'スライド' + swiper.realIndex + 'を表示しています。';
	    let titleElement = document.createTextNode(titleText);
	    swiperTitle.appendChild(titleElement);

	    swiper.on('slideChange', function () {
		console.log('slide changed');

		if(titleElement){
			titleElement.remove();
		}
		const titleText = 'スライド' + swiper.realIndex + 'を表示しています。';
		titleElement = document.createTextNode(titleText);

		swiperTitle.appendChild(titleElement);
	    });

	    //swiper-2
const swiper2 = new Swiper('.swiper-2', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
	    
		// If we need pagination
		pagination: {
		  el: '.swiper-pagination',
		},
	    
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	    
		// And if we need scrollbar
		scrollbar: {
		  el: '.swiper-scrollbar',
		},
	    });

	    const titlelist = [
		'1つめのタイトル',
		'2つめのタイトル',
		'3つめのタイトル',
		'4つめのタイトル',
	    ];

	     //スライドが切り替わったときに呼び出されるように
	    //onメソッドを使ってイベントを受け取る
	    const swiperTitle2 = document.getElementById('swiper-title-2');
	    const titleText2 = titlelist[swiper.realIndex];
	    let titleElement2 = document.createTextNode(titleText2);
	    swiperTitle2.appendChild(titleElement2);

	    swiper2.on('slideChange', function () {
		console.log('slide changed');

		if(titleElement2){
			titleElement2.remove();
		}
		const titleText = titlelist[swiper2.realIndex];
		titleElement2 = document.createTextNode(titleText);

		swiperTitle2.appendChild(titleElement2);
	    });