### Viikon 2 tehtävä

[Palaa takaisin](index.md)

Miten Jekyll-sivustoa voi automatisoida GitHub Actions -toimintoja käyttäen? YAML-pohjaisia työnkulkuja käyttämällä voidaan määrittää, että jokaisen muutoksen jälkeen sivusto rakennus ja julkaisuprosessi käynnistyy automaattisesti. Esimerkki: Kun koodi päivitetään, GitHub Actions rakentaa uuden version sivustosta ja julkaisee sen automaattisesti GitHub Pages -palveluun. 

CI/CD-putkiston kehitystyökaluja ja -tekniikoita ovat esimerkiksi:
 - Git(kaikessa kehityksessä käytettävä versionhallintajärjestelmä.) 
 - GitHub (Automatisoitu julkaisuväylä, repositorit ja versiohistoria) 
 - GitHubActions ja Jenkins (mahdollistavat koodin automaattisen rakentamisen, testauksen ja validaation.) 
 - GitLAb (Repositorit ja versiohistoria, sisäänrakennettu CI/CD – mahdollisuus rakentaa ja julkaista sovelluksia suoraan alustasta)
 - CircleCI (Yksi suosituimmista pilvipohjaisista CI/CD-työkaluista. Tarjoaa hyvän skaalautuvuudet ja nopean testausdatan hallinnan)

CI/CD työkaluja valitessa tulee ottaa huomioon projektin koko ja se kuinka monisyinen projekti on. Pienten tiimien tai yksinkertaisten sovellusten kohdalla riittää usein kevyemmät työkalut. Suuremmat, yritystason tiimit, jotka tekevät monimutkaisempia ja laajempia sovelluksia, voivat hyötyä kehittyneemmistä ja skaalautuvista työkaluista. Työkalut nopeuttaa automaation avulla uusien ominaisuuksien julkaisemista. Kehittäjät voivat keskittyä koodin kirjoittamiseen toistuvien manuaalisten tehtävien sijaan. Tuo luotettavuutta, inhimilliset virheet vähenevät ja ohjelmiston laatu paranee.

Lähteet: 
Visure, 2025. Yli 20 parasta CI/CD-ohjelmistoratkaisua ja -työkalua vuodelle 2025. Luettavissa: https://visuresolutions.com/fi/almu-opas/parhaat-ci-cd--ty%C3%B6kalut#elementor-toc__heading-anchor-1. Luettu: 28.10.2025

Tämän tekstin sisällön ideoinnissa on hyödynnetty ChatGPT 4.0 -kielimallia. Syötteenä käytettiin:"Miten Jekyll sivustoa voisi automatisoida käyttäen GitHub Actions-toimintoja" ja ”Millaisilla kehitystyökaluilla ja -tekniikoilla saataisiin CI/CD-putkisto rakennettua web-sovellukselle.”.
