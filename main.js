function Plant(nome, family, genus, origin) {
    this.nome = nome;
    this.family = family;
    this.genus = genus;
    this.origin = origin;
}

function Local(data, local) {
    this.data = data;
    this.local = local;
}

function Adubo(dataAdubo, nameAdubo, nome, family, genus, origin, data, local) {
    this.dataAdubo = dataAdubo;
    this.nameAdubo = nameAdubo;

    Plant.call(this, nome, family, genus, origin)
    Local.call(this, data, local)
}

function Frase (adubo){
    console.log(`${adubo.nome} é pertencente a família ${adubo.family}, originário da ${adubo.origin}. Aqui em casa se encontra na ${adubo.local} e foi colocado nesse local na data ${adubo.data}. A última vez que foi adubado utilizei o adubo ${adubo.nameAdubo} no dia ${adubo.dataAdubo}.`);
}

const plant1 = new Plant("Anthurium veitchii", "Anthurium", "Araceae", "Colombia");
const plant2 = new Plant("Philodendron verrucosum", "Philodendron", "Araceae", "Colombia, Costa Rica, Ecuador, Panamá, Peru");
const plant3 = new Plant("Hoya amorosoae", "Apocynaceae", "Philippines");

const local1 = new Local("05/08/2023", "GreenHouse");
const local2 = new Local("12/02/2022", "GreenHouse");
const local3 = new Local("05/04/2020", "janela");

const adubo1 = new Adubo("15/09/2024", "Bio-Bizz", plant1.nome, plant1.family, plant1.genus, plant1.origin, local1.data, local1.local);
const adubo2 = new Adubo("15/09/2024", "Bio-Bizz", plant2.nome, plant2.family, plant2.genus, plant2.origin, local2.data, local2.local);
const adubo3 = new Adubo("15/09/2024", "Bio-Bizz", plant3.nome, plant3.family, plant3.genus, plant3.origin, local3.data, local3.local);


Frase (adubo1)
Frase (adubo2)
Frase (adubo3)