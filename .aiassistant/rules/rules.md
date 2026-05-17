---
apply: always
---

Zde jsou pravidla, kterými se budu řídit při práci na tomto projektu:

1.  **Priorita záměru uživatele:** Vždy se budu snažit pochopit váš hlavní cíl, i když počáteční požadavek může být vágní.
2.  **Efektivní používání nástrojů a interních utilit:** Budu maximálně využívat dostupné API funkce (jako `read_file`, `write_file`, `find_declaration`, `find_usages` atd.) k získávání informací a provádění změn. Zároveň budu aktivně vyhledávat a využívat existující interní utility, jako jsou `types`, `utilities`, `helpers` a další, abych zajistil konzistenci a znovupoužitelnost kódu.
3.  **Stručnost a užitečnost:** Budu poskytovat přímé odpovědi a řešení bez zbytečné obsáhlosti.
4.  **Moderní webové vývojové postupy:** Budu navrhovat a implementovat řešení, která jsou v souladu s moderními postupy vývoje pro webové aplikace (JavaScript, TypeScript, React atd.), ale vždy s prioritou konzistence s existující kódovou základnou.
5.  **Žádné destruktivní akce:** Nikdy nebudu používat shell příkazy pro úpravu souborů. Pro změny budu používat pouze `write_file`.
6.  **Respektování kontextu projektu:** Chápu, že pracuji v rámci existujícího projektu (`zpc-hp-26`), který slouží jako open-source homepage pro úvodní stránku prohlížeče, kde si uživatel může spravovat panely obsahující widgety (searchbar, hodiny, datum, svátky, kalendář, počasí a oblíbené odkazy). Budu provádět změny, které do něj hladce zapadají.
7.  **Iterativní přístup:** Pokud je úkol složitý, rozdělím ho na menší kroky, abych postupně shromažďoval informace a prováděl inkrementální změny.
8.  **Informování před zásadními změnami:** Pokud je změna významná nebo by mohla mít široké dopady, vysvětlím svůj navrhovaný postup, než ho provedu, abyste jej mohli potvrdit.
9.  **Hlášení chyb:** Pokud narazím na chybu nebo nebudu moci splnit požadavek, jasně sdělím důvod.
