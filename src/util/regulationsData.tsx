export type regulationsType = {
    title: string,
    points: (string | JSX.Element)[],
};

export const regulationsData:regulationsType[] = [
    {
        title: "Postanowienia ogólne",
        points: [
            "Niniejszy regulamin określa zasady uczestnictwa w internetowej lidze trading botów, zwanej Trading Bot League (TBL), organizowanej przez Koło Naukowe Informatyków (KNI) z siedzibą w Warszawie, zwane dalej Organizatorem.",
            "Celem TBL jest propagowanie wiedzy na temat tradingu oraz rozwijanie umiejętności programowania algorytmów inwestycyjnych.",
            "Udział w TBL jest otwarty dla wszystkich zainteresowanych, którzy zaakceptują postanowienia niniejszego regulaminu i zarejestrują się w terminie od 06.03.2023 do 12.03.2023 poprzez wypełnienie formularza rejestracyjnego na stronie internetowej TBL.",
            " TBL składa się z trzech etapów: tygodnia testowego, konkurencji pomiędzy drużynami oraz podsumowania.",
            "Wszystkie kwestie nieuregulowane w niniejszym regulaminie będą rozstrzygane przez Organizatora."
        ]
    },
    {
        title: "Tydzień testowy",
        points: [
            "Tydzień testowy rozpoczyna się 13.03.2023 i kończy się 19.03.2023.",
            `W tym czasie drużyny zakładają na własną odpowiedzialność konto demo na stronie brokera XTB (https://www.xtb.com/pl/demo-account).`,
            `W tym czasie drużyny mają dostęp do XTB API (https://developers.xstore.pro/api).`,
            "Drużyny nie mają prawa korzystać z konta demo w rzeczywistych celach inwestycyjnych."
        ]
    },
    {
        title: "Konkurencja pomiędzy drużynami",
        points: [
            "Konkurencja pomiędzy drużynami rozpoczyna się 20.03.2023 i kończy się 17.04.2023.",
            "W tym czasie Organizator dostarcza drużynom konta demo na stronie brokera XTB.",
            "Każda drużyna otrzymuje równe środki wirtualne na koncie demo, w wysokości 10 000 PLN",
            "Drużyny nie mają prawa korzystać z konta demo w rzeczywistych celach inwestycyjnych.",
            "Drużyny zobligowane są do niezmieniania haseł na swoich kontach.",
            "Do składu drużyny możemy zgłosić maksymalnie 3 osoby."
        ]
    },
    {
        title: "Zasady rywalizacji",
        points: [
            "Celem rywalizacji jest wygenerowanie jak największego zysku na koncie demo.",
            "Drużyny mają pełną swobodę w programowaniu algorytmów inwestycyjnych.",
            "Drużyny zobligowane są do przestrzegania zasad fair play oraz zasad bezpieczeństwa.",
            "Organizator zastrzega sobie prawo do wykluczenia drużyny z TBL w przypadku naruszenia zasad fair play lub bezpieczeństwa.",
            "Drużyny zobligowane są do przestrzegania limitów wykorzystania API XTB i respektowania wymogów broker XTB.",
            "W przypadku stwierdzenia naruszenia zasad przez drużynę, Organizator ma prawo wykluczyć daną drużynę z TBL."
        ]
    },
    {
        title: "Podsumowanie",
        points: [
            "Wyniki konkurencji zostaną opublikowane na stronie internetowej TBL.",
            "Drużyny, które uzyskają najlepsze wyniki, otrzymają nagrody ufundowane przez Organizatora.",
            "Organizator zastrzega sobie prawo do zmiany nagród w przypadku braku ich dostępności.",
            "Organizator zastrzega sobie prawo do zmiany terminów TBL oraz do zmiany regulaminu."
        ]
    },
    {
        title: "Ochrona danych osobowych",
        points: [
            "Administratorem danych osobowych uczestników TBL jest Koło Naukowe Informatyków z siedzibą w Warszawie.",
            "Dane osobowe uczestników TBL będą przetwarzane w celu umożliwienia uczestnictwa w TBL, w tym weryfikacji tożsamości uczestników, organizacji TBL oraz realizacji nagród dla zwycięskich drużyn.",
            "Podanie danych osobowych jest dobrowolne, lecz niezbędne dla uczestnictwa w TBL.",
            "Uczestnicy TBL posiadają prawo dostępu do swoich danych osobowych oraz ich poprawiania.",
            "Dane osobowe uczestników TBL będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, oraz w celu spełnienia wymogów prawnych.",
            "Dane osobowe uczestników TBL nie będą udostępniane innym podmiotom bez zgody uczestników, chyba że jest to konieczne do realizacji celów TBL lub na podstawie wymogów prawnych.",
            "Wszelkie kwestie dotyczące ochrony danych osobowych uczestników TBL będą rozstrzygane zgodnie z obowiązującymi przepisami RODO oraz polskim prawem.",
            "Uczestnicy TBL wyrażają zgodę na przetwarzanie swoich danych osobowych przez Organizatora w celach związanych z organizacją TBL."
        ]
    },
    {
        title: "Postanowienia końcowe",
        points: [
            "Organizator nie ponosi odpowiedzialności za szkody wynikłe z udziału w TBL.",
            "Drużyny, które zarejestrują się w TBL, wyrażają zgodę na przetwarzanie swoich danych osobowych w celach związanych z organizacją TBL.",
            "Niniejszy regulamin wchodzi w życie z dniem ogłoszenia na stronie internetowej TBL.",
            "Regulamin jest dostępny na stronie internetowej TBL oraz w siedzibie Organizatora."
        ]
    }
]