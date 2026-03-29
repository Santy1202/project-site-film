const movies = [
  // ================= ФАНТАСТИКА (fantasy) =================
  {
    title: "Аватар",
    type: "movie",
    genre: "fantasy",
    img: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg",
    info: "2009 • Реж. Джеймс Кемерон • У ролях: Сем Вортінгтон, Зої Салдана.<br><br>Колишній морпіх Джейк Саллі прибуває на планету Пандору. Він опиняється в центрі конфлікту між людством, що видобуває цінні ресурси, та місцевим народом На'ві. Завдяки програмі 'Аватар' він отримує нове тіло і шанс змінити долю цілого світу."
  },
  {
    title: "Інтерстеллар",
    type: "movie",
    genre: "fantasy",
    img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    info: "2014 • Реж. Крістофер Нолан • У ролях: Меттью Макконахі, Енн Гетевей.<br><br>Земля виснажена, і людство стоїть на межі вимирання. Група дослідників бере на себе найважливішу місію в історії: вирушити крізь червоточину за межі нашої галактики, щоб знайти нову придатну для життя планету."
  },
  {
    title: "Дивні дива",
    type: "series",
    genre: "fantasy",
    img: "https://cdn.27.ua/sc--media--prod/default/03/7a/44/037a4436-d7de-4e97-b358-44b2cb8a5754.jpg ",
    seasons: [
      { name: "Сезон 1", info: "2016 • У тихому містечку Гоукінс безслідно зникає хлопчик. Розслідування приводить до секретних урядових експериментів та дівчинки з телекінезом." },
      { name: "Сезон 2", info: "2017 • Минув рік після подій першого сезону, але тінь Зворотного боку продовжує нависати над містом. З'являється новий, набагато страшніший монстр." },
      { name: "Сезон 3", info: "2019 • Літо 1985 року. Герої дорослішають, відкривається новий торговий центр, а радянські шпигуни намагаються відкрити ворота у Зворотний бік." }
    ]
  },
  {
    title: "Початок (Inception)",
    type: "movie",
    genre: "fantasy",
    img: "https://upload.wikimedia.org/wikipedia/uk/e/e1/%D0%9F%D0%BE%D1%87%D0%B0%D1%82%D0%BE%D0%BA_%D1%84%D1%96%D0%BB%D1%8C%D0%BC%2C_2010.jpg",
    info: "2010 • Реж. Крістофер Нолан • У ролях: Леонардо ДіКапріо, Том Гарді.<br><br>Дом Кобб — талановитий злодій, який краде цінні секрети з глибин підсвідомості під час сну. Тепер йому пропонують неможливе: не вкрасти ідею, а впровадити її в мозок спадкоємця імперії."
  },
  {
    title: "Матриця",
    type: "movie",
    genre: "fantasy",
    img: "https://upload.wikimedia.org/wikipedia/uk/f/f1/Matrix_poster.jpg",
    info: "1999 • Реж. Вачовскі • У ролях: Кіану Рівз, Лоренс Фішберн.<br><br>Програміст Нео дізнається страшну правду: весь світ навколо — це лише комп'ютерна ілюзія, Матриця, створена машинами, щоб тримати людство в рабстві."
  },
  {
    title: "Дюна: Частина перша",
    type: "movie",
    genre: "fantasy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-5xBjRNtR1pHTqt6so3LwTynpUlx1dMPMA&s",
    info: "2021 • Реж. Дені Вільньов • У ролях: Тімоті Шаламе, Зендея.<br><br>Спадкоємець могутнього дому Атрідів відправляється на найнебезпечнішу планету у Всесвіті — Арракіс, де видобувають найціннішу речовину, здатну подовжувати життя і розширювати свідомість."
  },
  {
    title: "Гра престолів",
    type: "series",
    genre: "fantasy",
    img: "https://s5.vcdn.biz/static/f/7133775611/image.jpg/pt/r375x0x4",
    seasons: [
      { name: "Сезон 1", info: "2011 • Король Робб Баратеон просить свого старого друга Неда Старка стати Правицею Короля. Починається велика гра за Залізний Трон." },
      { name: "Сезон 2", info: "2012 • Війна П'яти Королів розгорається з новою силою, тоді як на півночі збирається армія здичавілих." }
    ]
  },
  {
    title: "Володар перснів",
    type: "movie",
    genre: "fantasy",
    img: "https://upload.wikimedia.org/wikipedia/uk/0/0c/The_Fellowship_Of_The_Ring.jpg",
    info: "2001 • Реж. Пітер Джексон • У ролях: Елайджа Вуд, Іен Маккеллен.<br><br>Хоббіт Фродо отримує в спадок Єдиний Перстень, який може знищити весь світ. Він вирушає у небезпечну подорож до гори Ородруїн, щоб знищити артефакт."
  },


  {
    title: "Втеча з Шоушенка",
    type: "movie",
    genre: "drama",
    img: "https://upload.wikimedia.org/wikipedia/uk/8/87/Втеча_з_Шоушенка.jpg",
    info: "1994 • Реж. Френк Дарабонт • У ролях: Тім Роббінс, Морган Фрімен.<br><br>Банкіра Енді Дюфрейна несправедливо засуджують до довічного ув'язнення за вбивство дружини. У суворій в'язниці Шоушенк він знаходить друзів і планує неймовірну втечу, яка триватиме десятиліття."
  },
  {
    title: "Форрест Гамп",
    type: "movie",
    genre: "drama",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBymYT7IPnQQX577YPthlcONUMEx5XX0N2wQ&s",
    info: "1994 • Реж. Роберт Земекіс • У ролях: Том Генкс, Робін Райт.<br><br>Історія життя хлопця з низьким IQ, але неймовірно добрим серцем. Фантастичним чином він стає свідком і учасником найважливіших подій історії США другої половини 20 століття."
  },
  {
    title: "Пуститися берега",
    type: "series",
    genre: "drama",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADJ7hVhXgEcpJsnvi-sjLFnA65INtwVkdqA&s .",
    seasons: [
      { name: "Сезон 1", info: "2008 • Вчитель хімії Волтер Вайт дізнається, що хворий на рак. Щоб забезпечити родину після своєї смерті, він починає варити мет." },
      { name: "Сезон 2", info: "2009 • Бізнес Волтера і Джессі розширюється, але з'являються нові проблеми з наркокартелями та поліцією." }
    ]
  },
  {
    title: "Зелена миля",
    type: "movie",
    genre: "drama",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4618Fc3r2IEQ9B4RoGtw8LIKarzaqJPtxw&s",
    info: "1999 • Реж. Френк Дарабонт • У ролях: Том Генкс, Майкл Кларк Дункан.<br><br>У блок смертників прибуває темношкірий гігант Джон Коффі, звинувачений у жахливому злочині. Але охоронець Пол Еджкомб починає сумніватися в його провині, відкриваючи в ньому надприродний дар."
  },
  {
    title: "Бійцівський клуб",
    type: "movie",
    genre: "drama",
    img: "https://uakino.best/uploads/post/Fight%20Club/imCVaunF2Wl3ZRYOH1XB047sTyb.jpg",
    info: "1999 • Реж. Девід Фінчер • У ролях: Бред Пітт, Едвард Нортон.<br><br>Офісний працівник, який страждає на безсоння, знайомиться з харизматичним продавцем мила Тайлером Дерденом. Разом вони створюють підпільний клуб, де чоловіки вибивають один з одного стрес."
  },
  {
    title: "Титанік",
    type: "movie",
    genre: "drama",
    img: "https://uaserials.my/posters/2073.webp",
    info: "1997 • Реж. Джеймс Кемерон • У ролях: Леонардо ДіКапріо, Кейт Вінслет.<br><br>На тлі першого і останнього рейсу розкішного лайнера розгортається історія кохання багатійки Рози та бідного художника Джека, яким судилося пережити найвідомішу морську катастрофу."
  },
  {
    title: "Гострі картузи",
    type: "series",
    genre: "drama",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqs5FE_hTGNQAY2k3L-giSQwmcu1WiLsycTw&s",
    seasons: [
      { name: "Сезон 1", info: "2013 • Бірмінгем після Першої світової війни. Сім'я Шелбі керує жорстоким бандитським угрупованням 'Гострі картузи', а її лідер Томас має великі амбіції." }
    ]
  },

 
  {
    title: "Джон Уік",
    type: "movie",
    genre: "action",
    img: "https://static.hdrezka.ac/i/2023/11/15/d9fe92ed24504rz56b20q.jpeg",
    info: "2014 • Реж. Чад Стахелскі • У ролях: Кіану Рівз, Віллем Дефо.<br><br>Джон Уік — колишній найманий вбивця, який вийшов на пенсію. Але коли син російського мафіозі вбиває його собаку — останній подарунок покійної дружини — Джон дістає свою зброю, щоб помститися."
  },
  {
    title: "Шалений Макс: Дорога гніву",
    type: "movie",
    genre: "action",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQDyhUA3uMVkZLbPG4Lyg5wnqkEhF59l6bQ&s",
    info: "2015 • Реж. Джордж Міллер • У ролях: Том Гарді, Шарліз Терон.<br><br>У постапокаліптичному світі, де вода і бензин — найбільша цінність, воїн-одинак Макс об'єднується з імператрицею Фюріозою, щоб втекти від тирана Несмертного Джо на бойовій фурі."
  },
  {
    title: "Темний лицар",
    type: "movie",
    genre: "action",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXsQM0iEM2h28KCGLBJx7c_Dz6fTqnE9l66Q&s",
    info: "2008 • Реж. Крістофер Нолан • У ролях: Крістіан Бейл, Гіт Леджер.<br><br>Бетмен продовжує очищати Готем від криміналу, але на його шляху стає новий, абсолютно божевільний і геніальний злочинець — Джокер, який хоче занурити місто в анархію."
  },
  {
    title: "Хлопаки (The Boys)",
    type: "series",
    genre: "action",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpCX5yCsI8_ol6-ZFuwBIgMDZdnxx51c_lNA&s",
    seasons: [
      { name: "Сезон 1", info: "2019 • У світі, де супергерої — розбещені знаменитості, що працюють на можутьню корпорацію, група звичайних людей вирішує вивести їх на чисту воду і помститися." },
      { name: "Сезон 2", info: "2020 • Протистояння 'Хлопаків' із Патріотом та корпорацією Vought виходить на новий рівень жорстокості." }
    ]
  },
  {
    title: "Месники: Завершення",
    type: "movie",
    genre: "action",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbXOefJN4jWYz7k8t4o7T_VsqpmoBwRL3wQ&s",
    info: "2019 • Реж. Брати Руссо • У ролях: Роберт Дауні мол., Кріс Еванс.<br><br>Ті Месники, що вижили після клацання Таноса, повинні знайти спосіб повернути все назад. Вони розробляють відчайдушний план подорожей у часі, щоб зібрати Камені Нескінченності."
  },
  {
    title: "Міцний горішок",
    type: "movie",
    genre: "action",
    img: "https://uakino.best/uploads/posts/2022-07/1657355158_covera9ea13109996d2ae_md.jpg",
    info: "1988 • Реж. Джон МакТірнан • У ролях: Брюс Вілліс, Алан Рікман.<br><br>Поліцейський з Нью-Йорка Джон Макклейн приїжджає в Лос-Анджелес до дружини на різдвяну вечірку. Але будівлю захоплюють терористи, і тепер порятунок заручників залежить тільки від нього."
  },
  {
    title: "Гладіатор",
    type: "movie",
    genre: "action",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJU0BKniqRqdwCCg2rtUdHetXBi066IZN1nA&s",
    info: "2000 • Реж. Рідлі Скотт • У ролях: Рассел Кроу, Хоакін Фенікс.<br><br>Великий римський полководець Максимус стає жертвою зради нового імператора Коммода. Втративши родину і честь, він змушений стати гладіатором, щоб вижити і помститися."
  },

  // ================= КРИМІНАЛ (crime) =================
  {
    title: "Кримінальне чтиво",
    type: "movie",
    genre: "crime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxEtuBLjVeHf1xe-4BRLtXqGu36-1LBulPCQ&s",
    info: "1994 • Реж. Квентін Тарантіно • У ролях: Джон Траволта, Семюел Л. Джексон, Ума Турман.<br><br>Кілька пов'язаних між собою історій про бандитів, дружину кримінального боса, старіючого боксера та парочку грабіжників-невдах у Лос-Анджелесі."
  },
  {
    title: "Сім (Se7en)",
    type: "movie",
    genre: "crime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlD4Glzt_-jJ7Ty8O8ngchjEoXJCf_G_U_xg&s",
    info: "1995 • Реж. Девід Фінчер • У ролях: Бред Пітт, Морган Фрімен.<br><br>Двоє детективів — ветеран і молодий напарник — розслідують серію жахливих вбивств. Серійний вбивця карає своїх жертв за вчинення одного з семи смертних гріхів."
  },
  {
    title: "Клан Сопрано",
    type: "series",
    genre: "crime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl5-hPDYec62J5l6bOOBfmUIthaR7LqjxfhQ&s",
    seasons: [
      { name: "Сезон 1", info: "1999 • Бос мафії Тоні Сопрано намагається балансувати між проблемами власної сім'ї та управлінням кримінальним синдикатом, через що у нього починаються панічні атаки і він таємно йде до психотерапевта." },
      { name: "Сезон 2", info: "2000 • Тиск на Тоні зростає: поліція сідає на хвіст, а старі вороги виходять з в'язниці." }
    ]
  },
  {
    title: "Справжній детектив",
    type: "series",
    genre: "crime",
    img: "https://upload.wikimedia.org/wikipedia/uk/7/72/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%B6%D0%BD%D1%96%D0%B9_%D0%94%D0%B5%D1%82%D0%B5%D0%BA%D1%82%D0%B8%D0%B2-2.png",
    seasons: [
      { name: "Сезон 1", info: "2014 • Двоє детективів з Луїзіани розслідують дивне і моторошне ритуальне вбивство. Їхня історія розтягується на 17 років, змінюючи їхні життя назавжди." }
    ]
  },
  {
    title: "Мовчання ягнят",
    type: "movie",
    genre: "crime",
    img: "https://uaserials.com/posters/2067.jpg",
    info: "1991 • Реж. Джонатан Деммі • У ролях: Джоді Фостер, Ентоні Гопкінс.<br><br>Молода курсантка ФБР Кларіс Старлінг змушена звернутися за допомогою до ув'язненого геніального маніяка-канібала Ганнібала Лектера, щоб спіймати іншого серійного вбивцю."
  },
  {
    title: "Вовк з Волл-стріт",
    type: "movie",
    genre: "crime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTZ2nPhFqWTK95nWvT1zqSZ1PNx-v54rkS4Q&s",
    info: "2013 • Реж. Мартін Скорсезе • У ролях: Леонардо ДіКапріо, Джона Гілл.<br><br>Біографічна історія Джордана Белфорта, який заснував брокерську компанію і стрімко розбагатів завдяки фінансовим махінаціям. Гроші, наркотики, вечірки та неминуча увага ФБР."
  },
  {
    title: "Старим тут не місце",
    type: "movie",
    genre: "crime",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdErbH8WQYku5vPMAD0V8bsU4YXhb_okHzcQ&s",
    info: "2007 • Реж. Брати Коен • У ролях: Хав'єр Бардем, Джош Бролін.<br><br>Звичайний роботяга випадково знаходить у пустелі гору трупів, наркотики та валізу з двома мільйонами доларів. Він забирає гроші, і тепер по його сліду йде безжальний кілер."
  }
];

const grid = document.getElementById("grid");

function render(list) {
  grid.innerHTML = "";
  if (list.length === 0) {
    grid.innerHTML = `<h3 style="text-align:center; width: 100%; grid-column: 1 / -1;">Нічого не знайдено 😢</h3>`;
    return;
  }
  
  list.forEach(m => {
    // Додаємо alt="${m.title}" про всяк випадок
    grid.innerHTML += `
      <div class="card" onclick="openItem('${m.title}')">
        <img src="${m.img}" alt="Постер ${m.title}" onerror="this.src='https://via.placeholder.com/300x450/141928/eaf4ff?text=Постер+відсутній';">
        <div class="title">${m.title}</div>
      </div>
    `;
  });
}

render(movies);

function filterGenre(g) {
  if (g === "all") return render(movies);
  render(movies.filter(m => m.genre === g || m.type === g));
}

function openItem(title) {
  const item = movies.find(m => m.title === title);
  const modal = document.getElementById("modal");
  const content = document.getElementById("modalContent");

  modal.style.display = "flex";

  if (item.type === "series") {
    content.innerHTML = `
      <h2>${item.title}</h2>
      <p style="color: var(--accent); margin-bottom: 15px;">Обери сезон для перегляду інформації:</p>
      ` +
      item.seasons.map(s =>
        `<div class="list-item" onclick="openSeason(event, '${title}','${s.name}')">${s.name}</div>`
      ).join("");
  } else {
    content.innerHTML = `
      <h2 style="color: var(--accent);">${item.title}</h2>
      <p style="line-height: 1.5;">${item.info}</p>
    `;
  }
}

function openSeason(event, title, season) {
  event.stopPropagation(); 
  const item = movies.find(m => m.title === title);
  const s = item.seasons.find(x => x.name === season);

  document.getElementById("modalContent").innerHTML =
    `<h2 style="color: var(--accent);">${title} - ${season}</h2>
     <p style="line-height: 1.5;">${s.info}</p>
     <br>
     <div class="list-item" style="text-align:center;" onclick="openItem('${title}')">⬅ Повернутися до сезонів</div>`;
}

function searchMovies(value) {
  render(movies.filter(m =>
    m.title.toLowerCase().includes(value.toLowerCase())
  ));
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

document.getElementById("modal").onclick = (event) => {
  if (event.target.id === "modal") {
    document.getElementById("modal").style.display = "none";
  }
};
<script src="booty.js"></script>