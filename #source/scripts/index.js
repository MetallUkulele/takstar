let forge = new Product(
  "forge",
  `Вибір <strong>справжнього</strong> геймера, є все для <strong>комфортної</strong> гри`,
  "2974",
  "./img/hero/forge.png",
  [
    "7.1 об’ємний звук",
    "Власний еквалайзер",
    "Фірмова піна з памяттю форми",
    "RGB освітлення — 16млн кольорів",
  ],
  [
    "Номінальна потужність: 10 мВт",
    "Максимальна потужність: 30 мВт",
    "Тип роз'єму: USB",
    "Кабель гарнітури: Ø4 мм x 1,3 м",
    "Вага нетто:  приблизно 322 г",
  ],
  ["1", "2", "3", "4", "5", "6"],
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum illum in ipsam magnam natus non nostrum obcaecati quae. Alias aliquam aut dolore fugiat impedit, inventore mollitia omnis soluta voluptate.",
  ["Навушники", "Інструкція"]
);

let shade = new Product(
  "shade",
  "<strong>Надлегкі</strong> та <strong>комфортні</strong>, забезпечать вам <strong>довгу</strong> та водночас <strong>комфортну</strong> гру",
  "3032",
  "./img/hero/shade.png",
  [
    "Надлегкі — 235г",
    "Фірмова піна з памяттю форми",
    "З’ємний мікрофон з высокою чутливістю",
  ],
  [
    "Номінальна потужність: 15 мВт",
    "Максимальна потужність: 40 мВт",
    "Тип роз'єму: 3,5 мм",
    "Кабель гарнітури: Ø4 мм x 1,2 м",
    "Подовжувач Y-типу: Ø4 мм x 2 м",
    "Вага нетто: приблизно 235 г (без кабелю)",
  ],
  ["1", "2", "3", "4"],
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum illum in ipsam magnam natus non nostrum obcaecati quae. Alias aliquam aut dolore fugiat impedit, inventore mollitia omnis soluta voluptate.",
  ["Навушники", "Інструкція"]
);

let flit = new Product(
  "flit",
  "<strong>Найгучніший</strong> звук завдяки динаміку діаметром <strong>53мм</strong>",
  "2427",
  "./img/hero/flit.png",
  [
    "Потужний звук в 250мВт",
    "Фірмова піна з памяттю форми",
    "З’ємний мікрофон з высокою чутливістю",
  ],
  [
    "Номінальна потужність: 100 мВт",
    "Максимальна потужність: 250 мВт",
    "Тип роз'єму: 3,5 мм",
    "Кабель гарнітури: Ø4 мм x 1,3 м",
    "Подовжувач Y-типу: Ø4 мм x 2 м",
    "Вага нетто: приблизно 260 г",
  ],
  ["1", "2", "3"],
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum illum in ipsam magnam natus non nostrum obcaecati quae. Alias aliquam aut dolore fugiat impedit, inventore mollitia omnis soluta voluptate.",
  ["Навушники", "Інструкція"]
);

let products = new Products();
products.addProduct(forge, shade, flit);

let newSlider = new HeroSlider();
newSlider.addSlide(forge, shade, flit);
newSlider.createSlide();

let prod = new Product360();
prod.addProduct(forge, shade, flit);
prod.createProducts();

let readMoreBlock = new ProductsMore(forge, shade, flit);
readMoreBlock.createProductMore();

let cart = new Cart();

