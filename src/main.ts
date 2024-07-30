import {languages} from "./intarface"
import "./styles/style.scss"


document.addEventListener("DOMContentLoaded", init);
function init() {
   const homeTexts: languages = {  
      "home" : {
          "ua": "Додому",
          "de": "Heim",
          "pl": "Dom",
          "en": ""
      },
      "aboutus" : {
          "ua": "Про нас",
          "de": "über uns",
          "pl": "Onas",
          "en": ""
      },
      "contact" : {
          "ua": "Контакт",
          "de": "Kontakt",
          "pl": "Kontakt",
          "en": ""
      },
      "feedback" : {
          "ua": "Зворотній зв'язок",
          "de": "Rückmeldung",
          "pl": "Informacja zwrotna",
          "en": ""
      },
      "title": {
          "ua": "ELPOW-Компанія",
          "de": "ELPOW-Unternehmen",
          "pl": "ELPOW-Firma",
          "en": "ELPOW-Company"
      },
      "h1": {
          "ua": "Дистриб’ютор нового покоління  <br>з повним набором послуг <br>і доданою вартістю",
          "de": "Full-Service-Value-Added-Distributor <br>der neuen Generation",
          "pl": "Dystrybutor o wartości dodanej nowej generacji oferujący pełen zakres usług",
          "en": ""
      },
      "titlevision": {
          "ua": "Наше бачення",
          "de": "Unsere Vision",
          "pl": "Nasza wizja",
          "en": ""
      },
      "ourvisiontop": {
          "ua": "Ми прагнемо змінити традиційний підхід до дистрибуції та стати стратегічним партнером для виробників електроніки, розробників інформаційних технологій та клієнтів, сприяючи їхньому успіху та розкриваючи потенціал кожного продукту.",
          "de": "Mein Ziel ist es, traditionelle Vertriebsstrategien und Partnerschaften für Elektro- und Elektronikunternehmen zu entwickeln. Kunden, die sich auf eine erfolgreiche Zusammenarbeit mit einem potenziellen Kunden freuen.",
          "pl": "Mein Ziel ist es, tradycjielle Vertriebsstrategien und Partnerschaften für Elektro- und Elektronikunternehmen zu entwickeln. Kunden, die sich auf eine erfolgreiche Zusammenarbeit mit einem potenziellen Kunden freuen.",
          "en": ""
      },
      "ourvisionbottom": {
          "ua": "Ми впроваджуємо інновації та розширюємо свою присутність на ринках України та світу. Наше партнерство базується на прозорих взаємовигідних відносинах, спільних цілях і довірі.",
          "de": "We implement innovations and expand their presence on the markets of Ukraine and the world. Our partnership is based on transparent mutually beneficial relations, common goals and trust.",
          "pl": "We implement innovations and expand their presence on the markets of Ukraine and the world. Our partnership is based on transparent mutually beneficial relations, common goals and trust.",
          "en": ""
      },
      "titlemission": {
          "ua": "Наша місія:",
          "de": "Unsere Aufgabe:",
          "pl": "Nasza misja:",
          "en": ""
      },
      "ourmission": {
          "ua": "Створення ефективної екосистеми між виробниками електроніки та партнерами для синергії бізнесу та розвитку раціонального життя споживачів з інформаційними технологіями та пристроями.",
          "de": "Schaffung eines effektiven Ökosystems zwischen Elektronikherstellern und Partnern für Geschäftssynergien und die Entwicklung eines rationalen Lebens der Verbraucher mit Informationstechnologien und -geräten.",
          "pl": "Stworzenie efektywnego ekosystemu pomiędzy producentami elektroniki i partnerami dla synergii biznesowej i rozwoju racjonalnego życia konsumentów dzięki technologiom i urządzeniom informatycznym",
          "en": ""
      },
      "ecosystem": {
          "ua": "наша ефективна екосистема – це мережа відносин, яка самовдосконалюється та сприяє продуктивності, інноваціям і конкурентоспроможності всіх учасників.",
          "de": "Unser effektives Ökosystem – es ist ein Netzwerk von Beziehungen, das sich selbst verbessert und die Produktivität, Innovation und Wettbewerbsfähigkeit aller Teilnehmer fördert.",
          "pl": "nasz efektywny ekosystem - to sieć relacji, która samodoskonali się i promuje produktywność, innowacyjność i konkurencyjność wszystkich uczestników.",
          "en": ""
      },
      "titledistributor": {
          "ua": "Дистриб’ютор із доданою вартістю",
          "de": "Mehrwertverteiler",
          "pl": "Dystrybutor z wartością dodaną",
          "en": ""
      },
      "distributor": {
          "ua": "Філософія ELPOW полягає в тому будувати міцні відносини з виробниками та розвивати бренди на ринку на основі партнерської співпраці. Наша бізнес-стратегія базується на довгострокових цілях та інвестиціях, які окупляться в майбутньому.",
          "de": "ELPOW ist Aufbau starker Beziehungen zu Herstellern und Entwicklung von Marken auf dem Markt auf der Grundlage einer partnerschaftlichen Zusammenarbeit. Unsere Geschäftsstrategie basiert auf langfristigen Zielen und Investitionen, die sich auszahlen in der Zukunft.",
          "pl": "Filozofią ELPOW jest budować silne relacje z producentami i rozwijać marki na rynku w oparciu o partnerską współpracę. Nasza strategia biznesowa opiera się na długoterminowych celach i inwestycjach, które się opłacią w przyszłości.",
          "en": ""
      },
      "titlework": {
          "ua": "Чому варто працювати з нами?",
          "de": "mit uns zusammenzuarbeiten?",
          "pl": "Dlaczego warto z nami współpracować?",
          "en": ""
      },
      "p1": {
          "ua": "Усі наші процеси автоматизовані.",
          "de": "sind automatisiert.",
          "pl": "Wszystkie nasze procesy są zautomatyzowane.", 
          "en": ""
      },
      "p2": {
          "ua": "Ми оперативні в роботі та спілкуванні.",
          "de": "Arbeit und Kommunikation zeitnah.",
          "pl": "Jesteśmy szybcy w naszej pracy i komunikacji.", 
          "en": ""
      },
      "p3": {
          "ua": "Ми чесні та прозорі.",
          "de": "Wir sind ehrlich und transparent.",
          "pl": "Jesteśmy uczciwi i przejrzyści.", 
          "en": ""
      },
      "p4": {
          "ua": "У нас сучасний підхід до бізнесу.",
          "de": "Wir haben einen modernen Geschäftsansatz.",
          "pl": "Mamy nowoczesne podejście do biznesu.", 
          "en": ""
      },
      "p5": {
          "ua": "Ми на крок попереду технологічних трендів і пропонуємо передові рішення.",
          "de": "Wir haben einen modernen Geschäftsansatz.",
          "pl": "Mamy nowoczesne podejście do biznesu.",
          "en": "" 
      },
      "p6": {
          "ua": "Ми даємо більше, ніж ви очікуєте.",
          "de": "Wir geben mehr, als Sie erwarten.",
          "pl": "Dajemy więcej niż oczekujesz." ,
          "en": ""
      },
      
      "titlecommerce": {
          "ua": "Електронна комерція для виробників",
          "de": "E-Commerce für Hersteller",
          "pl": "E-commerce dla producentów",
          "en": ""
      },
      "commerce": {
          "ua": "Ми використовуємо всі важливі та ефективні інструменти для залучення клієнтів та збільшення продажів. Ось кілька кроків, які можуть бути корисними для вашої компанії:",
          "de": "Wir nutzen alle wichtigen und wirksamen Instrumente, um Kunden zu gewinnen und den Umsatz zu steigern. Hier sind einige Schritte, die für Ihr Unternehmen hilfreich sein können:",
          "pl": "Wykorzystujemy wszystkie ważne i skuteczne narzędzia, aby pozyskać klientów i zwiększyć sprzedaż. Oto kilka kroków, które mogą być pomocne dla Twojej firmy:",
          "en": ""
      },
      "p7": {
          "ua": "присутність на ринки",
          "de": "Präsenz auf Marktplätze",
          "pl": "obecność na targowiska",
          "en": "" 
      },
      "p8": {
          "ua": "інтеграція онлайн система оплати",
          "de": "Integration des Online Bezahlsystem",
          "pl": "integracja internetu system płatności",
          "en": "" 
      },
      "p9": {
          "ua": "ефективний контроль запасів і обробка замовлень",
          "de": "effektive Bestandskontrolle und Auftragsabwicklung",
          "pl": "efektywna kontrola zapasów i realizacja zamówień",
          "en": "" 
      },
      "p10": {
          "ua": "відділ продажів, який опрацьовує замовлення та контролює клієнта на кожному етапі взаємодії",
          "de": "die Vertriebsabteilung, die Bestellungen für den Kunden bearbeitet und den Kunden in jeder Phase der Interaktion überwacht",
          "pl": "dział sprzedaży, który realizuje zamówienia i monitoruje klienta na każdym etapie interakcji",
          "en": "" 
      },
      "p11": {
          "ua": "e-mail - маркетинг",
          "de": "E-Mail Marketing",
          "pl": "e-mail - marketing",
          "en": "" 
      },
      "p12": {
          "ua": "юридичний супровід",
          "de": "Rechtsbeistand",
          "pl": "wsparcie prawne",
          "en": "" 
      },
      "contacts": {
          "ua": "Контакти",
          "de": "Kontakte",
          "pl": "Łączność",
          "en": "" 
      }
  }
    const language = document.querySelector("header .hover") as HTMLElement
    const lastchild = document.querySelector("#lng") as HTMLElement
    const languageColor = document.querySelector("header .english") as HTMLElement
    const images_lang = document.querySelector("header #language")
    const langButtons = document.querySelectorAll("[data-btn]");
    let currentLang = "ua";
    
    const currentPathName = window.location.pathname;
    let currentTexts:any = {};
    language.addEventListener("mouseover", function(event) {
      languageColor.classList.toggle("red")
      lastchild.classList.add("show_anime")
      addImageLenguage(images_lang, "hide")
    })
    lastchild.addEventListener("mouseout", function(event) {
        lastchild.classList.remove("show_anime");
        languageColor.classList.add("white")
         addImageLenguage(images_lang, "show")
})


function checkPagePathName() {
	switch (currentPathName) {
		case "/index.html":
			currentTexts = homeTexts;
			break;
		// case "/another_page.html":
		// 	currentTexts = anotherTexts;
		// 	break;

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

function addImageLenguage(elem:any, addclassList: String) {
    return elem.classList.add(addclassList)
}

function removeClassList(elem:any, addclassList: String) {
    return elem.classList.remove(addclassList)
}

langButtons.forEach((btn) => {
	btn.addEventListener("click", (event: any) => {
        
        if (!event.target.classList.contains("header__btn_active")) {
			currentLang = event.target.dataset.btn;
            let evtive =  event.target.innerHTML;
             languageColor.textContent = evtive
		;
			changeLang();
		}
	});
});


}