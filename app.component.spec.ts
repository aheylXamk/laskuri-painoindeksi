import { AppComponent } from './app.component';


describe("Perustoiminnallisuus", () => {

const app = new AppComponent();

it("käynnistyy", () => {

  expect(app).toBeTruthy();

});

it("virheilmoitus kun syöte epäsopiva (cm)", () => {

  app.virhe = "";
  app.pituus = 90;
  app.laskePainoindeksi();

  expect(app.virhe).toBeTruthy();

});

it("Virheilmoitus kun syöte epäsopiva (kg)", () => {

  app.virhe ="";
  app.paino = 10;
  app.laskePainoindeksi();

  expect(app.virhe).toBeTruthy();

});

it("Tulostus kun syöte sopiva", () => {

  app.indeksi = "";
  app.paino = 60;
  app.pituus = 170;
  app.laskePainoindeksi();

  expect(app.indeksi).toBeTruthy();

});




});