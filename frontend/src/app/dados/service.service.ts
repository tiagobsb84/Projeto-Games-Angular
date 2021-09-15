import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor() {
}

getLista(){
  return this.api;
}

  
  private api: any = [
      {
          "id": 1,
          "titulo": "Call of Duty 4",
          "imagem": "https://s3.amazonaws.com/comparegame/thumbnails/2818/large.jpg",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/R3JFnawb#_1aE00mOJlvXZ0X9ehFi1gZftWpfjfWzvS0eQtMgvc0"
      },
      {
          "id": 2,
          "titulo": "Call of Duty MW2",
          "imagem": "https://s3.amazonaws.com/comparegame/thumbnails/2823/large.jpg",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/Aq5xmK5R#AxSfBnlsHq5-TKlprmdMEEy_ls1oIRrr8Qcn5U85luE"
      },
      {
          "id": 3,
          "titulo": "Call of Duty MW3",
          "imagem": "https://s3.amazonaws.com/comparegame/thumbnails/2826/large.jpg",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/xip3lKZA#BEK96as81zrUjGqbjrsrQ9ySnAQ391jAXaoHMFyqcKc"
      },
      {
          "id": 4,
          "titulo": "Crysis 2",
          "imagem": "https://s3.amazonaws.com/comparegame/thumbnails/3279/large.jpg",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/YmxGnKxK#ysDGefI0f6OE3-ZiOIAMmMWaU_rbYGL0Cu1E0fxxNEc"
      },
      {
          "id": 5,
          "titulo": "Ghost Recon Future Soldier 1.2",
          "imagem": "https://www.gamingdragons.com/images/game_img/ghost3.png",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ZzoXzKTT#_x7MNknst-chKGSvpQgdmMThPgrh3nhbwrx2YMHtGm0"
      },
      {
          "id": 6,
          "titulo": "Assassins Creed 1",
          "imagem": "https://th.bing.com/th/id/OIP.ZtRB50iLgISRBs-4B7DYpgHaJT?w=143&amp;h=180&amp;c=7&amp;o=5&amp;pid=1.7",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/tzhxRRzY#nme3p454XKSsTBIDEPZoN8jTvvTxNJWrsQdRB8F7KFQ"
      },
      {
          "id": 7,
          "titulo": "Need for Speed Undercover",
          "imagem": "https://th.bing.com/th/id/OIP.3V8WlvlYGxnNKPyI5UoHNQHaKd?w=115&amp;h=180&amp;c=7&amp;o=5&amp;pid=1.7",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": ""
      },
      {
          "id": 8,
          "titulo": "Assassins creed chronicles china",
          "imagem": "https://s3.amazonaws.com/comparegame/thumbnails/41471/large.jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/1z5BEY6Y#972FMYe5Z0wQa28X-xkxi6QdTBAH7HDJU74QN97Kqtg"
      },
      {
          "id": 9,
          "titulo": "Terminator resistance",
          "imagem": "https://cdn.cdkeys.com/500x706/media/catalog/product/t/e/terminator-resistance-cd-keys-discount-steam.jpg",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/pm5kHAKI#CGLRIMCwWfAUTGbNahYRfqYtil89YoqD0bSJAADERUY"
      },
      {
          "id": 10,
          "titulo": "Payday the Heist",
          "imagem": "https://static.miraheze.org/awesomegameswiki/1/10/Pdth.png",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/cbABTaAQ#ULMCKlIC9OzjWJtGal9I9ulxTi9KXhdP0bv3iyaDKXY"
      },
      {
          "id": 11,
          "titulo": "Max Payne 1",
          "imagem": "https://upload.wikimedia.org/wikipedia/pt/4/4c/Maxpaynebox.jpg",
          "genero": "fps",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/UWpVlaxJ#BSKFFeBCV7rKW-VJlcz5D28fbviN06kCAgcID__nPWw"
      },
      {
          "id": 12,
          "titulo": "Titan Quest: Anniversary Edition",
          "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZBsg91nVSuafZ_tPM8Y4pNwEI15xMm_0A7w&usqp=CAU",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/MGoniKCK#6ZmYQ_r0dffItNnfG1gYgZeXqNObDxZlb_HDxOp-KUg"
      },
      {
          "id": 13,
          "titulo": "Car Mechanic Simulator 2018",
          "imagem": "https://cdn-products.eneba.com/resized-products/kEjGCO2Rxe91ah8weMijNCkhJ6Bw7yKdOGPL4j3_Dp8_390x400_1x-0.jpeg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/9SoXRYRY#6SvMsykjGQp0fKZcfLi5bs8OBEsdzIXui0CuKy4sboA"
      },
      {
          "id": 14,
          "titulo": "Car Mechanic Simulator 2015",
          "imagem": "https://images.g2a.com/newlayout/323x433/1x1x0/8b382bd7aeb2/590e36cc5bafe3dbc05cc960",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/kL4RBQBZ#yhoESitEUySgnBvrvoVYs9KBmPuNTo6l0MtAvNlGLh8"
      },
      {
          "id": 15,
          "titulo": "Bau Simulator 2012",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-03/1488628528_bau-simulator-2012.jpg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/pKxDDIjY#uQJ60w6Z8C-rdz7aPqZfr4udkMA8cKW06iz166sp6K4"
      },
      {
          "id": 16,
          "titulo": "Farming Simulator 2017",
          "imagem": "https://torrent-xatab.net/uploads/posts/2016-11/1479141802_farming-simulator-17.jpg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/oOZWwQSI#xrhOMnDY_UVFOQKHEy6OJTxSuS2Hx35mC94el4i05DI"
      },
      {
          "id": 17,
          "titulo": "Farming Simulator 2019",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-08/1535021373_farming-simulator-19.jpg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/weBUXA5R#SJ2mFvhr0OdiHqsNYDpNCzswuhzYDW1fsG7X4GyQmuI"
      },
      {
          "id": 18,
          "titulo": "Farming Simulator 2015",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-03/1489160945_farming-simulator-15.jpg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ZaYiUQCY#5g9YEz5FxGKsUos8islyyawDXfwh4B9kqttcgejn53w"
      },
      {
          "id": 19,
          "titulo": "Pure Farming 2018",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-11/1511360598_pure-farming-2018.jpg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/YDIETYwB#rEj6MJYats5EQ2-lJqPkR0XQaaWO4mYYJPIinjJnUbc"
      },
      {
          "id": 20,
          "titulo": "Moto GP 20",
          "imagem": "https://torrent-xatab.net/uploads/posts/2020-04/1587799118_motogp-20.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/wWZE2C5J#2XE6XB-3N9SaL9Lf1CF5e4KiqL-B1RRTArsFOurdIAg"
      },
      {
          "id": 21,
          "titulo": "Moto GP 19",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-06/1559901209_motogp-19.jpeg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/wf5BwDjC#fO7RGqdjgAcnh4_b5shfotG5wxfdAOWkfkqhWBzMfbs"
      },
      {
          "id": 22,
          "titulo": "Moto GP 18",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-06/1529773324_motogp-18.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/VDhhUTIB#KDYDzgxY4OuMOujhcshvK3qCnAYEkk2yNkPCdQS_z1A"
      },
      {
          "id": 23,
          "titulo": "Ride 3",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-12/1543748616_ride-3.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/cWohBTrS#sFnMS7sc6St2eIpwKzaAYHXQHWBWoIy7euXROSvl8hE"
      },
      {
          "id": 24,
          "titulo": "The Crew 2",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-12/1514714475_the-crew-2.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/RTxnELIY#SttLmJzQCFkpQ3Vjpj7PKctNKTOeCYXFRpQrkTyUzhw"
      },
      {
          "id": 25,
          "titulo": "Assetto Corsa",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-01/1548669179_assetto-corsa.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/BawBVLbb#tK414SvorDxtKuN9fze8HL5YFZ9lqqEakQzooLyCBI0"
      },
      {
          "id": 26,
          "titulo": "Assetto Corsa Competizione",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-06/1559377568_assetto-corsa-competizione.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/UGhnGDIL#_D5DkhZ75jGZjN0EO6WzbsuBRGUfSPOtKaEmE_sTPek"
      },
      {
          "id": 27,
          "titulo": "European Truck Racing Championship",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-07/1563463042_fia-european-truck-racing-championship.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/xGx3XbYQ#gg97fsIQWa8Kpm5aqukXMMuK7LXr9nue9_QQlX26q2A"
      },
      {
          "id": 28,
          "titulo": "Team Sonic Racing",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-05/1557674874_team-sonic-racing.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/lSwDBRzK#NJLqQWCtvdgHpkRPfHxXqEX_LFmxYRS__TqFF2fbSu0"
      },
      {
          "id": 29,
          "titulo": "Sonic All-Stars Racing Transformed",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-09/1506159908_sonic.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/kCghTRBY#9-cCqrJX9oHlkdM4k80fB7zsuVtovABlnMrc7HbQmEo"
      },
      {
          "id": 30,
          "titulo": "Road Redemption",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-10/1507139132_road-redemption.jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ULhxyZpA#7l6xFNJgiHcw9_4aVjPYNn87KENuqGZMojGsmkXi5og"
      },
      {
          "id": 31,
          "titulo": "Desperados 3",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-01/1547049043_desperados-3.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/0LxX0Jib#OAqCFXZDZpsjygyVrokAT0VzI5fQoC0K-OVvk4H6kM4"
      },
      {
          "id": 32,
          "titulo": "Mafia 3",
          "imagem": "https://torrent-xatab.net/uploads/posts/2016-11/1479030437_mafiya-3.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/RTxVETJb#9EBICSFXk8GD9H7D0d-HcRM5qo3bYXn1F804A_nA-FA"
      },
      {
          "id": 33,
          "titulo": "Mafia 3 Definitive Edition",
          "imagem": "https://torrent-xatab.net/uploads/posts/2020-05/1589959659_mafia-iii-definitive-edition.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/gWx3RDiA#wjJql5bpeyzzs87L0_WxXIu39qttAT3H7_J25dzCb9A"
      },
      {
          "id": 34,
          "titulo": "Mafia 2",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-01/1515763073_mafia-2.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/BC4VxTgY#q6AkR56QLn9WDPwIpefBSFIq496cmGh8fx7evQMNPsw"
      },
      {
          "id": 35,
          "titulo": "Mafia Definitive Edition",
          "imagem": "https://torrent-xatab.net/uploads/posts/2020-05/1590081975_mafia-definitive-edition.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ZCgFTbqR#9Mm-OGQ11boX3nsirIZxjqoY7UgPGr53QSbxIbTYClo"
      },
      {
          "id": 36,
          "titulo": "Mafia 4",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-09/1504537685_mafia-4.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/UbpBwJQb#zLgi4lnQd8SpYAlCHuKnaRE3AIF_DoQD6HRxar4vQUs"
      },
      {
          "id": 37,
          "titulo": "Surge 2",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-02/1549528491_the-surge-2.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/cLoxiJxT#8HQBf6yb-b_dYIYAPvKy-lcQOdg2C1hfByy301rYrLU"
      },
      {
          "id": 38,
          "titulo": "The Surge",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-05/1494660958_the-surge.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ALJn2AZJ#ypDDuPmt3PVAfZXpjCE0pZTevNblbTUsbe4qYQnQipg"
      },
      {
          "id": 39,
          "titulo": "Marvel Avengers",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-06/1560687132_marvels-avengers.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/IPA3Gawb#_MRHiZ_tEVTXeVV3I02blLfPisO9fne9ssvulDAr8LI"
      },
      {
          "id": 40,
          "titulo": "Lego Marvel Super Heroes",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-11/1510495815_lego-marvel-super-heroes.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/RaJ3naDS#o-DSiujzHOd1eEYvfdIh4g00EnNOWaRGYsEZAoktmQ0"
      },
      {
          "id": 41,
          "titulo": "Lego Marvel Super Heroes 2",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-11/1509547280_lego-marvel-super-heroes-2.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/dWIRDKYJ#vVSg68WKTPIHM189GI07Q4DKvXXxmQENHX_tbgoKZME"
      },
      {
          "id": 42,
          "titulo": "Lego Marvel Avengers",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-05/1558596225_lego-marvels-avengers.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/cXAXWQjC#5Ypc5VDbtUjsaMPN-OaAGzk9pYqZEkiJ6J4Ouvm83SQ"
      },
      {
          "id": 43,
          "titulo": "The Lego Ninjago Movie Video Game",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-09/1506518484_the-lego-ninjago-movie-video-game.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/laBDESbQ#0-JROBm2D5VySrFaFOYZjfuKNTIJEhRWJeDcozwN2qU"
      },
      {
          "id": 44,
          "titulo": "Lego DC Super Vellains",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-09/1536756296_lego-dc-super-villains.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/9KR0USLY#T3KNG4rkeRk20JP5HO9ocUd5fxHi_ZTIalZXuT22_Nc"
      },
      {
          "id": 45,
          "titulo": "Lego The Incredibles",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-06/1528386351_lego-the-incredibles.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/wWQUGYJI#eJIFq85ChkBRr73nLsxhJ7CUyb5a-H-IQcVmcHijssE"
      },
      {
          "id": 46,
          "titulo": "Lego City Undercover",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-05/1496063212_lego-city-undercover.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/pCASwAgI#arzGAjoomZi-rl4H6fPxsXZIn2sLhNSguPgJxG_aXuI"
      },
      {
          "id": 47,
          "titulo": "The Sinking City",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-06/1530284372_the-sinking-city.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/MPQiiCzb#4EruhaxAe_rJqBDywxFAC-Spx9A9jTHMyU3MyySvdGY"
      },
      {
          "id": 48,
          "titulo": "River City Girls",
          "imagem": "https://torrent-xatab.net/uploads/posts/2020-01/1580028815_river-city-girls.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/hPImCK6L#gfGj6VTxPk8e-pNW5ktixi8EMX1aA13CKhhtWOt1fpI"
      },
      {
          "id": 49,
          "titulo": "Metro Exodus",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-06/1528785284_metro-exodus.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ZDBWyAAY#wSHm2djC7Ihn5mVbwrZ44iqX8HQN6h5hd7CnLPZYRPM"
      },
      {
          "id": 50,
          "titulo": "Metro Last Light Redux",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-02/1488038946_metro-last-light-redux.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/VSZE1S5Z#I0klOfo95CFopqmaW2eMaBkSl__SGVQbvlHxNg00-oM"
      },
      {
          "id": 51,
          "titulo": "Metro Last Light Redux",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-02/1488038946_metro-last-light-redux.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/VSZE1S5Z#I0klOfo95CFopqmaW2eMaBkSl__SGVQbvlHxNg00-oM"
      },
      {
          "id": 52,
          "titulo": "Metro 2033 Redux",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-02/1487423636_metro-2033-redux.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/wbBCHKxT#Ekm044Xut9Ibidf40us3zq9bvmL7OhzYwyH8g6eTB00"
      },
      {
          "id": 53,
          "titulo": "Hard Reset Redux",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-01/1485454964_hard-reset-redux.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/VCZWQCyL#gwEu_5xrOiAjY7eBj83NPRz61poBLiYAaxUyNunmNoo"
      },
      {
          "id": 54,
          "titulo": "Hard Reset",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-12/1513096339_hard-reset.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/4KQyxShS#Jbm3IublxXu_6Cd9bent1LWoQeGeviGABCDlCb5lYoE"
      },
      {
          "id": 55,
          "titulo": "Grim Dawn",
          "imagem": "https://torrent-xatab.net/uploads/posts/2017-02/1487004413_grim-dawn.jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/RXhRVTDA#8e6k4llC-7MeerB96VPmsGIoG54MdoUrbnM4aZAqEYk"
      },
      {
          "id": 56,
          "titulo": "Gray Dawn",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-01/1547627883_gray-dawn.jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/wCYxWQra#tPJqMUHy6Zbir5GdTAorDufuFM98CY-NxAysUHAZ_qU"
      },
      {
          "id": 57,
          "titulo": "Attack on Titan 2 Final Battle",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-07/1562398372_attack-on-titan-2-final-battle.jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ATJX2Qba#LzV27-WTpboF4RjXMQtL5UWBndCHgxhKQVFUUPfcwCE"
      },
      {
          "id": 58,
          "titulo": "The Wolf Among US Season 2",
          "imagem": "https://torrent-xatab.net/uploads/posts/2018-01/1517222499_the-wolf-among-us-season-2.jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/RDBnyCCB#qG5L0GgkaQbXskqRVsdsSP_7xU3FE2avjA_0QcaXEvU"
      },
      {
          "id": 59,
          "titulo": "Pro Evolution 2013",
          "imagem": "https://torrent-xatab.net/uploads/posts/2019-07/1563266580_pro-evolution-soccer-2013.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/lDZkmCSY#3_HlOQtRymV0A0GAfesBNWy28TnFKczm5p2pK2LD0nM"
      },
      {
          "id": 60,
          "titulo": "Fast and Furious Crossroads Deluxe Edition",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2020/08/pUKOz72dHX1MlE_ICBiJoV8d5-jH5wMci-ikKM_53aY_390x400_1x-0.jpeg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/QDBFhaSA#6M8UqnLMYHAD_mt2cjV9BcIFb7JO-qwEK7n1iH0nuxk"
      },
      {
          "id": 61,
          "titulo": "Football Club Simulator 18",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/05/FOOTBALL-.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/8PZF0QJQ#9rbLTdJRiEXxcvjbiJxmgnk10Ety3MCUT-ZLBI6-dfY"
      },
      {
          "id": 62,
          "titulo": "Daylight",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Daylight-[MULTI6][SKIDROW]-(Poster).jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/cLhXkCDI#T2U2UdaK395Ps3kG6MdGZRY2a7wQgl6tVzEBpANN82Q"
      },
      {
          "id": 63,
          "titulo": "Jagged Alliance: Rage!",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2019/03/tspwlqalug8bjmzxkyqb.jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/4LglEaaK#Jr5rp759oOqjRx-6SKbX-ns8wycMWk_9KGlJeyI695A"
      },
      {
          "id": 64,
          "titulo": "Batman Arkham Origins Cold Cold Heart",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Batman-Arkham-Origins-Cold-Cold-Heart-[MULTI][CODEX]-(Poster).jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/kToD1aTK#Su8_w4r7h9Y4xu7pBxg_PrMI0b0huzh5nbC6i56IzsY"
      },
      {
          "id": 65,
          "titulo": "Offworld Trading Company",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2017/12/OFFWORLD.jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ta4F2SKK#c-7A5rdDzAM6vXd_vOoi7gzra7D-3R1zqRSnekF-EMQ"
      },
      {
          "id": 66,
          "titulo": "The Sims 3 Island Paradise",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/The-Sims-3-Island-Paradise-[MULTI5][P2P]-(Poster).jpg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/xa4xwQLb#lTLtmTwLdHUsiMaDo4hRrLUzeJ_zjkrqEZHR8iJYhjk"
      },
      {
          "id": 67,
          "titulo": "Atelier Dusk DX Trilogy",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2020/03/descarga.jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/gaQz2QbJ#mErgAJCjAWOxjUFI1TCNSojqu0rdH_r5AIW8K9qhINE"
      },
      {
          "id": 68,
          "titulo": "Outward",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2019/03/co1iui.jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/UTJTmQqJ#ShlidsXxvkl6fYrfg__Wxd2dgfGTta93oAfsP5z7HVw"
      },
      {
          "id": 69,
          "titulo": "ATOM RPG",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2019/03/vl0v7xy4qpfbzvgpydzw.jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ZfY3lKrT#GGVLu5hKPfjtoLyJDZjaUtePSZQroZOe7I9tvlZaHFo"
      },
      {
          "id": 70,
          "titulo": "Colin McRae DIRT",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Colin-McRae-DIRT-[English]-(Poster).jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/JeIjTY7Y#bqyDEV-nL0fX8PNi2kS_pC3NdZzIiacW2Xsa5SVwKW4"
      },
      {
          "id": 71,
          "titulo": "God Eater 3",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2019/03/co1hg9.jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/waR2yALT#O9u9LzxzkB-f2lUflKhcDteBIo5cSuL3WkObDlqtcbo"
      },
      {
          "id": 72,
          "titulo": "Sword Art Online Lost Song",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/11/SWORD.jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/8TRCiC6b#-mQr8lJ2vygsa28U3bb_WS5qB36oDY0RtdzoA1vAZjM"
      },
      {
          "id": 73,
          "titulo": "Resonance Of Fate End Of Eternity",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/11/RESONANCE.jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/hXYGEa7T#pM9EmvSpq32OsuCuAoRZT5DE7qWQ2Av5cMXG7VfU-6E"
      },
      {
          "id": 74,
          "titulo": "Doom 3 BFG Edition",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Doom-3-BFG-Edition-[MULTI6][POSTMORTEM]-(Poster).jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/VDY03ITS#wJZ7KmnizwnyH9Fw1seY41VMuEyjfExr_a4RQz7BXIQ"
      },
      {
          "id": 75,
          "titulo": "GRID Autosport",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/GRID-Autosport-[MULTI8][CRACK-ONLY][RELOADED]-(Poster).jpg",
          "genero": "corrida",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/NOQ2kSQQ#eD221lPOmwQd5IFKooRbnuMnDTsNJhJ_twrjTXMzShw"
      },
      {
          "id": 76,
          "titulo": "Killing Floor 2",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2017/12/killing-floor.png",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/8LIkAAjA#PPTHTTFegdszgz_9mwyX9fwLNql7OI8wMt9tHS5TZwM"
      },
      {
          "id": 77,
          "titulo": "Domina",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/01/domina-.jpg",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/taYnkaQa#EvHAiul490i3aHOCRomyOHUKbaFkcL0Bg8iWGb8bkGc"
      },
      {
          "id": 78,
          "titulo": " Age Of Pirates 2 City Of Abandoned Ships",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Age-Of-Pirates-2-City-Of-Abandoned-Ships-[MULTI5]-(Poster).jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/dXxRgA5a#-Qdje2Eth1wVinHUTPNFWCdlQSglhBwvvkhEn3R_NQs"
      },
      {
          "id": 79,
          "titulo": "Fallout New Vegas",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Fallout-New-Vegas-[English]-(Poster).jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/tahVECRA#E2odF9GgeuvDS56J8RPWOfrXrRwfwFugYc8XBUIVa6Y"
      },
      {
          "id": 80,
          "titulo": "Torchlight II",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Torchlight-II-[Spanish][NOVEDAD][RELOADED]-(Poster).jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/tKpRmI6L#P2nfzbGCjowPW2WTG0kFz-o2U-mBN4osJBcCQFgxVVs"
      },
      {
          "id": 81,
          "titulo": "Total War Shogun 2 Gold Edition",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2017/11/total-war-.jpg",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/lD5z0QoI#Rvrekn9cVfh7ZDeg1eMlJgacteWHdWIn2ysI7Hi0fdo"
      },
      {
          "id": 82,
          "titulo": " Lust for Darkness",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/06/Lust.jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/AKwX2IzA#BnEbK3XpAfWPu17skiFUJBjLSMw-Vy8BGkwlbL7BCq0"
      },
      {
          "id": 83,
          "titulo": "Castlevania Lords Of Shadow 2",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Castlevania-Lords-Of-Shadow-2-[MULTI6][Repack-BlackBox]-(Poster).jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ZL43CSgR#R-pO2E0Q-_ykCx6dzQ51Hrsu-X6p7ApRZgQ-8sIw7UY"
      },
      {
          "id": 84,
          "titulo": "Professional Farmer 2014",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Professional-Farmer-2014-[MULTI10][TiNYiSO]-(Poster).jpg",
          "genero": "simulador",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/xPxlTIAY#RJAROqRR2TsRIbflhc6W8b8_H1FGSN0us-L5y6VdPSI"
      },
      {
          "id": 85,
          "titulo": "Tabletop Simulator Mr Game",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Tabletop-Simulator-Mr-Game-[ENG][SKIDROW]-(Poster).jpg",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/AbwF0Ara#sivIUdPdniNNq9zq054048FIZTUztjgDs3by63UcBBE"
      },
      {
          "id": 86,
          "titulo": "The Princess And The Frog",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/The-Princess-And-The-Frog-[Spanish]-(Poster).jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/VPhRDC4J#a76gVGPj3aFuv1PbEsCUCTie3HFM9hNfg1Vs54JIykg"
      },
      {
          "id": 87,
          "titulo": "Darksiders II",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Darksiders-II-[MULTI][DLC-Pack][BAT]-(Poster).jpg",
          "genero": "acao",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/oD43iaYT#NMEUImYGnQsFsr5ry_sLw06TQm6t5w_OOIWsCFlCB4A"
      },
      {
          "id": 88,
          "titulo": "Police Tactics Imperio",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Police-Tactics-Imperio-[MULTI][CODEX]-(Poster).jpg",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/EWxHkYSI#wFfUHZeKWKcSC5GdIf82jqvVMijaYsuVjYI8XGp3hiI"
      },
      {
          "id": 89,
          "titulo": " The Settlers VI Rise Of An Empire",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/The-Settlers-VI-Rise-Of-An-Empire-[English]-(Poster).jpg",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/9DoDRCDI#IBy2xAp35zIAhl1Cjn2OhzHlY7U-2xTc95xO1nWol_Y"
      },
      {
          "id": 90,
          "titulo": "SpellForce 2 Faith In Destiny",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/SpellForce-2-Faith-In-Destiny-Digital-Deluxe-Edition-[MULTI7][PROPHET]-(Poster).jpg",
          "genero": "rpg",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/NX5XkCCQ#N5ysrsNQVltTJMvhgZrGR-G58i3Kyfn5QE4LgpKfQ2w"
      },
      {
          "id": 91,
          "titulo": "Amnesia A Machine For Pigs",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/11/AMNESIA.jpg",
          "genero": "aventura",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/tHBFySjR#DML_eUQEwft3HmpCiYauGJ2OW28O9YNotE0o_gaK3_A"
      },
      {
          "id": 92,
          "titulo": "Fallen Enchantress Legendary Heroes",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Fallen-Enchantress-Legendary-Heroes-[English][RELOADED]-(Poster).jpg",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/lLQnUKyY#epNnrK1cbJ9kBhX-_CKbRePjPy4Mo7ps_B1vPlz_aYs"
      },
      {
          "id": 93,
          "titulo": " The Settlers 7 Paths To A Kingdom",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/The-Settlers-7-Paths-To-A-Kingdom-[MULTI8][DEMO]-(Poster).jpg",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/FbRTWSwD#DZU4-atSDeuBGakiPqLEDo3HIPsg1nkXnLojqSjJylw"
      },
      {
          "id": 94,
          "titulo": "Galactic Civilizations II Gold Edition",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/portadas/Galactic-Civilizations-II-Gold-Edition-[English]-[2CDs]-(Poster).JPG",
          "genero": "estrategia",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/YCQ1HIhK#C6E0Fa8eTk9Qw_R1ND5DCE0uRuFbOYHz0L4a74E_iZE"
      },
      {
          "id": 95,
          "titulo": "FIFA 19",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2019/03/fifa19.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ILRRwKLZ#9hTbruo-M13gI8c1gla03YS_LxlfnoTzSiMbCU71L7Y"
      },
      {
          "id": 96,
          "titulo": "Pro Evolution Soccer 2019",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/11/pes.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/MaZHzKwC#hp9gQsSdxdbvNGd2j3GZVqYxV6c7n_446twvgC9PzhE"
      },
      {
          "id": 97,
          "titulo": "AO Tennis 2",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2020/03/co1xwu.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/peIFkA7C#DQUmQxnlmjsGbCTCF9humKUYbDBY5r-OoPvVZI1oR04"
      },
      {
          "id": 98,
          "titulo": "Pro Basketball Manager",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/11/PRO-BASKET.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/NCxFGKxS#B_FMk6LQQDf1yyMy63dNziBdGQ3Le8eRKBM3ULCPm0I"
      },
      {
          "id": 99,
          "titulo": "Pro Fishing Simulator",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/12/PRO.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/ZShzxAhS#gkIhKFZgqziGBACCvtevAwODkYG7TRqSSV-2YtfFw2s"
      },
      {
          "id": 100,
          "titulo": "F1 2018",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/09/F1-.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/QbojQABQ#rmLFHta-r6BK7pXunxvSyyKWCWtD7jMKAGEh_CEysdg"
      },
      {
          "id": 101,
          "titulo": "Football Manager 2019",
          "imagem": "https://www.gamestorrents.nu/wp-content/uploads/2018/11/FOOTBALL.jpg",
          "genero": "esporte",
          "descricao": "",
          "traducao": "",
          "link": "https://mega.nz/file/hT43GaoQ#YXVIPA4VgQDhyUInCW5CvmT4Z5P64ZfEdn3EXdXejiA"
      }
    ]
  }


