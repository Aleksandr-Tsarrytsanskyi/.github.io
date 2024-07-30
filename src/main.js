document.addEventListener("DOMContentLoaded", init);

 function init() {
   const homeTexts = {
    logo: {
      ua: "сила змін",
      de: "Kraft der Veränderung",
      pl: "siła zmiany",
      en: "power of change",
    },
    home: {
      ua: "Додому",
      de: "Heim",
      pl: "Dom",
      en: "Home",
    },
    aboutus: {
      ua: "Про нас",
      de: "über uns",
      pl: "Onas",
      en: "About us",
    },
    contact: {
      ua: "Контакт",
      de: "Kontakt",
      pl: "Kontakt",
      en: "Contact",
    },
    contacts: {
      ua: "Контакт",
      de: "Kontakte",
      pl: "Łączność",
      en: "Contacts",
    },
    feedback: {
      ua: "Зворотній зв'язок",
      de: "Rückmeldung",
      pl: "Informacja zwrotna",
      en: "Feedback",
    },
    title: {
      ua: "ELPOW-Компанія",
      de: "ELPOW-Unternehmen",
      pl: "ELPOW-Firma",
      en: "ELPOW-Company",
    },
    h1: {
      ua: "Дистриб’ютор нового покоління  <br>з повним набором послуг <br>і доданою вартістю",
      de: "Full-Service-Value-Added-Distributor <br>der neuen Generation",
      pl: "Dystrybutor o wartości dodanej nowej <br>generacji oferujący pełen zakres usług",
      en: "New generation distributorwith a full <br>range of services and added value",
    },
    company: {
      ua: "Представлення компанії",
      de: "Unternehmensvorstellung",
      pl: "Przedstawienie firmy",
      en: "Company introduction",
    },
    titlevision: {
      ua: "Наше бачення",
      de: "Unsere Vision",
      pl: "Nasza wizja",
      en: "Our vision",
    },
    ourvisiontop: {
      ua: "Ми прагнемо змінити традиційний підхід до дистрибуції та стати стратегічним партнером для виробників електроніки, розробників інформаційних технологій та клієнтів, сприяючи їхньому успіху та розкриваючи потенціал кожного продукту.",
      de: "Mein Ziel ist es, traditionelle Vertriebsstrategien und Partnerschaften für Elektro- und Elektronikunternehmen zu entwickeln. Kunden, die sich auf eine erfolgreiche Zusammenarbeit mit einem potenziellen Kunden freuen.",
      pl: "Mein Ziel ist es, tradycjielle Vertriebsstrategien und Partnerschaften für Elektro- und Elektronikunternehmen zu entwickeln. Kunden, die sich auf eine erfolgreiche Zusammenarbeit mit einem potenziellen Kunden freuen.",
      en: "We aim to change the traditional approach to distribution and become a strategic partner for electronics manufacturers, information technology developers and customers, contributing to their success and unlocking the potential of each product.",
    },
    ourvisionbottom: {
      ua: "Ми впроваджуємо інновації та розширюємо свою присутність на ринках України та світу. Наше партнерство базується на прозорих взаємовигідних відносинах, спільних цілях і довірі.",
      de: "We implement innovations and expand their presence on the markets of Ukraine and the world. Our partnership is based on transparent mutually beneficial relations, common goals and trust.",
      pl: "We implement innovations and expand their presence on the markets of Ukraine and the world. Our partnership is based on transparent mutually beneficial relations, common goals and trust.",
      en: "We introduce innovations and expand our presence on the markets of Ukraine and the world. Our partnership is based on transparent mutually beneficial relations, common goals and trust.",
    },
    titlemission: {
      ua: "Наша місія:",
      de: "Unsere Aufgabe:",
      pl: "Nasza misja:",
      en: "Our mission",
    },
    ourmission: {
      ua: "Створення ефективної екосистеми між виробниками електроніки та партнерами для синергії бізнесу та розвитку раціонального життя споживачів з інформаційними технологіями та пристроями.",
      de: "Schaffung eines effektiven Ökosystems zwischen Elektronikherstellern und Partnern für Geschäftssynergien und die Entwicklung eines rationalen Lebens der Verbraucher mit Informationstechnologien und -geräten.",
      pl: "Stworzenie efektywnego ekosystemu pomiędzy producentami elektroniki i partnerami dla synergii biznesowej i rozwoju racjonalnego życia konsumentów dzięki technologiom i urządzeniom informatycznym",
      en: "Creating an effective ecosystem between electronics manufacturers and partners for business synergy and the development of a rational consumer life with information technologies and devices.",
    },
    ecosystem: {
      ua: "наша ефективна екосистема – це мережа відносин, яка самовдосконалюється та сприяє продуктивності, інноваціям і конкурентоспроможності всіх учасників.",
      de: "Unser effektives Ökosystem – es ist ein Netzwerk von Beziehungen, das sich selbst verbessert und die Produktivität, Innovation und Wettbewerbsfähigkeit aller Teilnehmer fördert.",
      pl: "nasz efektywny ekosystem - to sieć relacji, która samodoskonali się i promuje produktywność, innowacyjność i konkurencyjność wszystkich uczestników.",
      en: "our efficient ecosystem is a network of relationships that self-improves and promotes productivity, innovation and competitiveness for all participants.",
    },
    titledistributor: {
      ua: "Дистриб’ютор із доданою вартістю",
      de: "Mehrwertverteiler",
      pl: "Dystrybutor z wartością dodaną",
      en: "",
    },
    distributor: {
      ua: "Філософія ELPOW полягає в тому будувати міцні відносини з виробниками та розвивати бренди на ринку на основі партнерської співпраці. Наша бізнес-стратегія базується на довгострокових цілях та інвестиціях, які окупляться в майбутньому.",
      de: "ELPOW ist Aufbau starker Beziehungen zu Herstellern und Entwicklung von Marken auf dem Markt auf der Grundlage einer partnerschaftlichen Zusammenarbeit. Unsere Geschäftsstrategie basiert auf langfristigen Zielen und Investitionen, die sich auszahlen in der Zukunft.",
      pl: "Filozofią ELPOW jest budować silne relacje z producentami i rozwijać marki na rynku w oparciu o partnerską współpracę. Nasza strategia biznesowa opiera się na długoterminowych celach i inwestycjach, które się opłacią w przyszłości.",
      en: "",
    },
    titlework: {
      ua: "Чому варто працювати з нами?",
      de: "mit uns zusammenzuarbeiten?",
      pl: "Dlaczego warto z nami współpracować?",
      en: "",
    },
    p1: {
      ua: "Усі наші процеси автоматизовані.",
      de: "sind automatisiert.",
      pl: "Wszystkie nasze procesy są zautomatyzowane.",
      en: "",
    },
    p2: {
      ua: "Ми оперативні в роботі та спілкуванні.",
      de: "Arbeit und Kommunikation zeitnah.",
      pl: "Jesteśmy szybcy w naszej pracy i komunikacji.",
      en: "",
    },
    p3: {
      ua: "Ми чесні та прозорі.",
      de: "Wir sind ehrlich und transparent.",
      pl: "Jesteśmy uczciwi i przejrzyści.",
      en: "",
    },
    p4: {
      ua: "У нас сучасний підхід до бізнесу.",
      de: "Wir haben einen modernen Geschäftsansatz.",
      pl: "Mamy nowoczesne podejście do biznesu.",
      en: "",
    },
    p5: {
      ua: "Ми на крок попереду технологічних трендів і пропонуємо передові рішення.",
      de: "Wir haben einen modernen Geschäftsansatz.",
      pl: "Mamy nowoczesne podejście do biznesu.",
      en: "",
    },
    p6: {
      ua: "Ми даємо більше, ніж ви очікуєте.",
      de: "Wir geben mehr, als Sie erwarten.",
      pl: "Dajemy więcej niż oczekujesz.",
      en: "",
    },

    titlecommerce: {
      ua: "Електронна комерція для виробників",
      de: "E-Commerce für Hersteller",
      pl: "E-commerce dla producentów",
      en: "E-commerce for manufacturers",
    },
    commerce: {
      ua: "Ми використовуємо всі важливі та ефективні інструменти для залучення клієнтів та збільшення продажів. <br>Ось кілька кроків, які можуть бути корисними для вашої компанії:",
      de: "Wir nutzen alle wichtigen und wirksamen Instrumente, um Kunden zu gewinnen und den Umsatz zu steigern.<br> Hier sind einige Schritte, die für Ihr Unternehmen hilfreich sein können:",
      pl: "Wykorzystujemy wszystkie ważne i skuteczne narzędzia, aby pozyskać klientów i zwiększyć sprzedaż. <br>Oto kilka kroków, które mogą być pomocne dla Twojej firmy:",
      en: "We use all important and effective tools to attract customers and increase sales.<br> Here are some steps that may be helpful for your company:",
    },
    p7: {
      ua: "присутність на ринки",
      de: "Präsenz auf Marktplätze",
      pl: "obecność na targowiska",
      en: "market presence",
    },
    p8: {
      ua: "інтеграція онлайн система оплати",
      de: "Integration des Online Bezahlsystem",
      pl: "integracja internetu system płatności",
      en: "integration of the online payment system",
    },
    p9: {
      ua: "ефективний контроль запасів і обробка замовлень",
      de: "effektive Bestandskontrolle und Auftragsabwicklung",
      pl: "efektywna kontrola zapasów i realizacja zamówień",
      en: "effective inventory control and order processing",
    },
    p10: {
      ua: "відділ продажів, який опрацьовує замовлення та контролює клієнта на кожному етапі взаємодії",
      de: "die Vertriebsabteilung, die Bestellungen für den Kunden bearbeitet und den Kunden in jeder Phase der Interaktion überwacht",
      pl: "dział sprzedaży, który realizuje zamówienia i monitoruje klienta na każdym etapie interakcji",
      en: "a sales department that processes the order and monitors the customer at each stage of the interaction",
    },
    p11: {
      ua: "e-mail - маркетинг",
      de: "E-Mail Marketing",
      pl: "e-mail - marketing",
      en: "e-mail - marketing",
    },
    p12: {
      ua: "юридичний супровід",
      de: "Rechtsbeistand",
      pl: "wsparcie prawne",
      en: "legal support",
    },
    etitlecommerce: {
      ua: "Електронна комерція для виробників",
      de: "E-Commerce für Hersteller",
      pl: "E-commerce dla producentów",
      en: "E-commerce for manufacturers",
    },
    etitletop: {
      ua: "У нас є експерти з маркетингу, продажів і аналітики, які розуміються на ефективному просуванні.",
      de: "Wir verfügen über Experten für Marketing, Vertrieb und Analyse, die sich mit effektiver Werbung auskennen.",
      pl: "Mamy ekspertów w dziedzinie marketingu, sprzedaży i analityki, którzy wiedzą, na czym polega skuteczna promocja.",
      en: "We have experts in marketing, sales and analytics who understand effective promotion.",
    },
    etitlebottom: {
      ua: "Ми надаємо повний спектр послуг: від виведення на ринок,на юридичний супровід,<br> тестування та просування продукту на ринку.",
      de: "Wir bieten eine umfassende Palette an Dienstleistungen: von der Markteinführung über<br> die rechtliche Unterstützung bis hin zum Testen und der Vermarktung des Produkts auf dem Markt.",
      pl: "Oferujemy pełen zakres usług: od wprowadzenia produktu na rynek,po wsparcie prawne,<br> testowanie i promocję produktu na rynku.",
      en: "We provide a full range of services: from introduction to the market,<br> to legal support, testing and promotion of the product on the market.",
    },
    p13: {
      ua: "PR і ЗМІ",
      de: "PR und Medien",
      pl: "PR i media.",
      en: "PR and media",
    },
    p14: {
      ua: "Цифрові рекламні кампанії",
      de: "Digitale Werbekampagnen",
      pl: "Kampanie reklamowe w Internecie",
      en: "Digital advertising campaigns",
    },
    p15: {
      ua: "Соц.медіа",
      de: "Sozialen Medien",
      pl: "Media społecznościowe",
      en: "Social media",
    },
    p16: {
      ua: "Співпраця з торговими партнерами",
      de: "Zusammenarbeit mit Handelspartnern",
      pl: "Współpraca z partnerami handlowymi",
      en: "Cooperation with trading partners",
    },
    p17: {
      ua: "Інфлюенсер маркетинг",
      de: "nfluencer-Marketing",
      pl: "Marketing wpływowy",
      en: "Influencer marketing",
    },
    p18: {
      ua: "Створення контенту",
      de: "Inhaltserstellung",
      pl: "Tworzenie treści",
      en: "Content creation",
    },
    contacts: {
      ua: "Контакти",
      de: "Kontakte",
      pl: "Łączność",
      en: "",
    },
  };
  const aboutUsTexts = {
    logo: {
      ua: "сила змін",
      de: "Kraft der Veränderung",
      pl: "siła zmiany",
      en: "power of change",
    },
    home: {
      ua: "Додому",
      de: "Heim",
      pl: "Dom",
      en: "Home",
    },
    aboutus: {
      ua: "Про нас",
      de: "über uns",
      pl: "Onas",
      en: "About us",
    },
    contact: {
      ua: "Контакт",
      de: "Kontakt",
      pl: "Kontakt",
      en: "Contact",
    },
    feedback: {
      ua: "Зворотній зв'язок",
      de: "Rückmeldung",
      pl: "Informacja zwrotna",
      en: "Feedback",
    },
    contacts: {
      ua: "Контакт",
      de: "Kontakte",
      pl: "Łączność",
      en: "Contacts",
    },
    titleaboutus: {
      ua: "Про нас",
      de: "Über uns",
      pl: "O nas",
      en: "About us",
    },
    topcontent: {
      ua: "Наша сучасна бізнес-філософія, гнучкість у світі, що швидко змінюється, а також наша відданість і мотивація допомогли ми виділяємося на ринку дистрибуції",
      de: "Unsere moderne Geschäftsphilosophie, unsere Flexibilität in einer sich schnell verändernden Welt sowie unser Engagement und unsere Motivation haben uns geholfen, uns auf dem Vertriebsmarkt hervorzuheben.",
      pl: "Nasza nowoczesna filozofia biznesowa, elastyczność w szybko zmieniającym się świecie oraz zaangażowanie i motywacja pomogły nam wyróżnić się na rynku dystrybucyjnym.",
      en: "Our modern business philosophy, flexibility in a rapidly changing world, as well as our commitment and motivation, helped us stand out in the distribution market.",
    },
    trustus: {
      ua: "Чому ви можете довіряти нам:",
      de: "Warum Sie uns vertrauen können:",
      pl: "Dlaczego możesz nam zaufać:",
      en: "Why you can trust us:",
    },
    text: {
      ua: "ми підходимо до роботи комплексно.Вам не потрібно <br>шукати сторонні організації або ресурси, щоб завершити той чи інший процес.",
      de: "Wir gehen die Arbeit ganzheitlich an. Sie müssen <br>nicht nach Drittorganisationen oder -ressourcen suchen,<br> um diesen oder jenen Prozess abzuschließen.",
      pl: "podchodzimy do pracy kompleksowo. Nie musisz <br>szukać organizacji lub zasobów zewnętrznych,<br> aby ukończyć ten lub inny proces.",
      en: "we approach work comprehensively. You don't <br>need to look for third-party organizations or<br> resources to complete this or that process.",
    },
    text1: {
      ua: "у нас є всі інструменти, ресурси та <br>механізми для просування продукції.",
      de: "Wir verfügen über alle Werkzeuge, <br>Ressourcen und Mechanismen, um für Produkte zu werben.",
      pl: "dysponujemy wszystkimi narzędziami, <br>zasobami i mechanizmami potrzebnymi do promowania produktów.",
      en: "we have all the tools, resources and<br> mechanisms to promote products.",
    },
    text2: {
      ua: "Наш штат складається з експертів з маркетингу, <br>продажів, права та аналітики, які розуміються на ефективному<br> просуванні та забезпеченні життя продукту.",
      de: "Zu unserem Personal gehören Experten für <br>Marketing, Vertrieb, Recht und Analytik, die sich mit <br>wirksamer Werbung und der Gewährleistung der Lebensdauer eines Produkts auskennen.",
      pl: "w naszym zespole znajdują się eksperci w <br>dziedzinie marketingu, sprzedaży, prawa i analityki, <br>którzy wiedzą, jak skutecznie promować produkt i przedłużyć jego żywotność.",
      en: "our staff includes experts in marketing, sales,<br> law and analytics, who understand effective <br>promotion and ensuring the life of a product.",
    },
    text3: {
      ua: "ми надаємо повний спектр послуг: <br>від виведення на ринок, до юридичного супроводу, тестування<br> та просування продукту на ринку.",
      de: "Wir bieten eine umfassende Palette an Dienstleistungen an: <br>von der Markteinführung über die rechtliche <br>Unterstützung bis hin zum Testen und der Vermarktung des Produkts auf dem Markt.",
      pl: "Zajmujemy się kompleksową obsługą: <br>od wprowadzenia produktu na rynek, poprzez wsparcie prawne, testowanie <br>i promocję produktu na rynku.",
      en: "we are engaged in a full range of services: from <br>introduction to the market, to legal support, testing<br> and promotion of the product on the market.",
    },
    text4: {
      ua: "у нас відкрита політика.",
      de: "wir verfolgen eine offene Politik.",
      pl: "mamy otwartą politykę.",
      en: "we have an open policy.",
    },
    text5: {
      ua: "разом створимо стратегію – прозору та<br> взаємовигідну.",
      de: "Wir entwickeln gemeinsam eine Strategie – transparent und<br> für beide Seiten gewinnbringend.",
      pl: "wspólnie stworzymy strategię - przejrzystą <br>i korzystną dla obu stron.",
      en: "we will create a strategy together - transparently and<br> mutually beneficial.",
    },
    text6: {
      ua: "Ми працюємо на всіх платформах Marketplace і<br> маємо відділ продажів.",
      de: "wir arbeiten auf allen Marktplatzplattformen und<br> verfügen über eine Vertriebsabteilung.",
      pl: "działamy na wszystkich platformach rynkowych i<br> mamy dział sprzedaży.",
      en: "we work on all marketplace platforms and have a<br> sales department.",
    },
    text7: {
      ua: "Ми працюємо на всіх платформах Marketplace і маємо відділ продажів.",
      de: "wir verfügen über ein eigenes Service-Center.",
      pl: "mamy własne centrum serwisowe.",
      en: "we have our own service center.",
    },
    titledistributor: {
      ua: "Дистриб’ютор із доданою вартістю",
      de: "Mehrwertverteiler",
      pl: "Dystrybutor z wartością dodaną",
      en: "Value-added distributor",
    },
    distributor: {
      ua: "Філософія ELPOW полягає в тому будувати міцні відносини з виробниками та розвивати бренди на ринку на основі партнерської співпраці. Наша бізнес-стратегія базується на довгострокових цілях та інвестиціях, які окупляться в майбутньому.",
      de: "ELPOW ist Aufbau starker Beziehungen zu Herstellern und Entwicklung von Marken auf dem Markt auf der Grundlage einer partnerschaftlichen Zusammenarbeit. Unsere Geschäftsstrategie basiert auf langfristigen Zielen und Investitionen, die sich auszahlen in der Zukunft.",
      pl: "Filozofią ELPOW jest budować silne relacje z producentami i rozwijać marki na rynku w oparciu o partnerską współpracę. Nasza strategia biznesowa opiera się na długoterminowych celach i inwestycjach, które się opłacią w przyszłości.",
      en: "The philosophy of ELPOW is to uild strong relationships with manufacturers and develop brands on the market based on partnership cooperation. Our business strategy is based on long-term goals and investments that will pay off in the uture.",
    },
    titlework: {
      ua: "Чому варто працювати з нами?",
      de: "mit uns zusammenzuarbeiten?",
      pl: "Dlaczego warto z nami współpracować?",
      en: "Why it is worth to work with us?",
    },
    p1: {
      ua: "Усі наші процеси автоматизовані.",
      de: "sind automatisiert.",
      pl: "Wszystkie nasze procesy są zautomatyzowane.",
      en: "All our processes are automated.",
    },
    p2: {
      ua: "Ми оперативні в роботі та спілкуванні.",
      de: "Arbeit und Kommunikation zeitnah.",
      pl: "Jesteśmy szybcy w naszej pracy i komunikacji.",
      en: "We are prompt in our work and communications.",
    },
    p3: {
      ua: "Ми чесні та прозорі.",
      de: "Wir sind ehrlich und transparent.",
      pl: "Jesteśmy uczciwi i przejrzyści.",
      en: "We are honest and transparent.",
    },
    p4: {
      ua: "У нас сучасний підхід до бізнесу.",
      de: "Wir haben einen modernen Geschäftsansatz.",
      pl: "Mamy nowoczesne podejście do biznesu.",
      en: "We have a modern approach to business.",
    },
    p5: {
      ua: "Ми на крок попереду технологічних трендів і пропонуємо передові рішення.",
      de: "Wir haben einen modernen Geschäftsansatz.",
      pl: "Mamy nowoczesne podejście do biznesu.",
      en: "We are one step ahead of technological trends and <br>offer advanced solutions.",
    },
    p6: {
      ua: "Ми даємо більше, ніж ви очікуєте.",
      de: "Wir geben mehr, als Sie erwarten.",
      pl: "Dajemy więcej niż oczekujesz.",
      en: "We give more than you expect.",
    },
    titleservice: {
      ua: "Гарантійне обслуговування виробників",
      de: "After-Sales-Service für Hersteller",
      pl: "Obsługa posprzedażowa dla producentów",
      en: "After-sales service for manufacturers",
    },
    servicetext1: {
      ua: "Одна з наших додаткових можливостей, яку ми пропозицією для наших партнерів є надання послуг з обслуговування.",
      de: "Eine unserer zusätzlichen Leistungen, die wir unseren Partnern anbieten, ist die Bereitstellung von Wartungsdiensten.",
      pl: "Jedną z naszych dodatkowych możliwości, którą oferujemy naszym partnerom, jest świadczenie usług konserwacyjnych.",
      en: "One of our additional capabilities that we offer to our partners is the provision of maintenance services.",
    },
    servicetext2: {
      ua: "Наш штат включає ліцензованих інженерів та співробітників. Взаємодія з клієнтом базується на чесному та прозорому спілкуванні.",
      de: "Zu unserem Personal gehören lizenzierte Ingenieure und Angestellte. Die Interaktion mit dem Kunden basiert auf ehrlicher und transparenter Kommunikation.",
      pl: "Nasz personel obejmuje licencjonowanych inżynierów i pracowników. Interakcja z klientem opiera się na uczciwej i przejrzystej komunikacji.",
      en: "Our staff includes licensed engineers and employees. Interaction with the client is based on honest and transparent communication.",
    },
    servicetext3: {
      ua: "Політика компанії спрямована на постійне вдосконалення технологій і методів ремонту.",
      de: "Die Unternehmenspolitik zielt auf eine ständige Verbesserung der Reparaturtechnologien und -methoden ab.",
      pl: "Polityka firmy ukierunkowana jest na ciągłe doskonalenie technologii i metod napraw.",
      en: "The company's policy is aimed at constant improvement of repair technologies and methods.",
    },
    contacts: {
      ua: "Контакти",
      de: "Kontakte",
      pl: "Łączność",
      en: "Сontacts",
    }
  }
  const language = document.querySelector("header .hover");
  const lastchild = document.querySelector("#lng");
  const ua = document.querySelector("header .ua");
  const de = document.querySelector("header .de");
  const pl = document.querySelector("header .pl");
  const eng = document.querySelector("header .eng");
  const headerContent  = document.querySelector("header .text_transform p");
  const service  = document.querySelector("#service .position h2");
  const aboutusH3  = document.querySelector("#aboutus h3");
  const distributorH4  = document.querySelector("#aboutus .distributor h4");
  console.log(distributorH4);
  const languageColor = document.querySelector("header .english");
  const images_lang = document.querySelector("header #language");
  const langButtons = document.querySelectorAll("[data-btn]");
  let currentLang = "en";

  const currentPathName = window.location.pathname;
  let currentTexts = {};
  language.addEventListener("mouseover", function (event) {
    changesAboutUs();
    languageColor.classList.add("red");
    lastchild.classList.add("show_anime");
    addImageLenguage(images_lang, "hide");
  });
  lastchild.addEventListener("mouseout", function (event) {
    removeClassList(languageColor, "red");
    lastchild.classList.remove("show_anime");
    languageColor.classList.add("white");
    removeClassList(images_lang, "hide");
    addImageLenguage(images_lang, "show");
  });

  function checkPagePathName() {
    switch (currentPathName) {
      case "/index.html":
        currentTexts = homeTexts;
        break;
      case "/aboutus.html":
      	currentTexts = aboutUsTexts;
        langButtons.forEach((btn) => {
          btn.addEventListener("click", (event) => {
            lastchild.hidden = true;
            if (!event.target.classList.contains("header__btn_active")) {
              currentLang = event.target.dataset.btn;
              let evtive = event.target.innerHTML;
              languageColor.textContent = evtive;
              changeLang();
              if (btn.dataset.btn == "ua") {
                addImageLenguage(aboutusH3, "distributorsize");
                addImageLenguage(distributorH4, "distributorH4");
                hideElement(ua)
              } else {
                showElement(ua)
                removeClassList(aboutusH3, "distributorsize");
                removeClassList(distributorH4, "distributorH4");
              }
              if (btn.dataset.btn == "de") {
                hideElement(de)
                addImageLenguage(headerContent, "header_title_top")
                addImageLenguage(service, "service_de")
              } else {
                showElement(de)
                removeClassList(headerContent, "header_title_top")
                removeClassList(service, "service_de")
              }
              if (btn.dataset.btn == "pl") {
                addImageLenguage(distributorH4, "distributorsize")
                addImageLenguage(distributorH4, "changedistributorH4")
                addImageLenguage(service, "title_service")
                hideElement(pl)
              } else {
                removeClassList(distributorH4, "distributorsize")
                removeClassList(distributorH4, "changedistributorH4")
                removeClassList(service, "title_service")
                showElement(pl)
              }
              if (btn.dataset.btn == "eng") {
                hideElement(eng)
              } else {
                showElement(eng)
              }
            }
          });
        });
      	break;

      default:
        currentTexts = homeTexts;
        break;
    }
  }
  checkPagePathName();

  // Изменение языка у текстов
  function changeLang() {
    for (const key in currentTexts) {
      let elem = document.querySelector(`[data-lang=${key}]`);
      if (elem) {
        elem.innerHTML = currentTexts[key][currentLang];
      }
    }
  }
  changeLang();

  function addImageLenguage(elem, addclassList) {
    return elem.classList.add(addclassList);
  }

  function removeClassList(elem, addclassList) {
    return elem.classList.remove(addclassList);
  }

  function hideElement(element) {
    element.hidden = true;
  }
  function showElement(element) {
    element.hidden = false;
  }
function changesAboutUs() {
  langButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      lastchild.hidden = true;
      if (!event.target.classList.contains("header__btn_active")) {
        currentLang = event.target.dataset.btn;
        let evtive = event.target.innerHTML;
        languageColor.textContent = evtive;
        changeLang();
        if (btn.dataset.btn == "ua") {
          hideElement(ua)
        } else {
          showElement(ua)
        }
        if (btn.dataset.btn == "de") {
          hideElement(de)
        } else {
          showElement(de)
        }
        if (btn.dataset.btn == "pl") {
          hideElement(pl)
        } else {
          showElement(pl)
        }
        if (btn.dataset.btn == "eng") {
          hideElement(eng)
        } else {
          showElement(eng)
        }
      }
    });
  });
}
 
}
