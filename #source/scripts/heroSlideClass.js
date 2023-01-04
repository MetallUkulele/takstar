class HeroSlide {
	constructor (name, subtitle,price, img) {
		this.name = name;
		this.subtitle = subtitle;
		this.price = price;
		this.img = img;
	}	
}

let forge = new HeroSlide('forge', `Вибір <strong>справжнього</strong> геймера, є все для <strong>комфортної</strong> гри`, '2 974 грн', './img/hero/forge.png')

let shade = new HeroSlide('shade', '<strong>Надлегкі</strong> та <strong>комфортні</strong>, забезпечать вам <strong>довгу</strong> та водночас <strong>комфортну</strong> гру','3 032 грн', './img/hero/shade.png',)

let flit = new HeroSlide('flit', '<strong>Найгучніший</strong> звук завдяки динаміку діаметром <strong>53мм</strong>','2 427 грн', './img/hero/flit.png')


