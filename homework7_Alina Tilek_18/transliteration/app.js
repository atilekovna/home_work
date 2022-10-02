const clients = [
  "Иванов Иван",
  "Смирнов Павел",
  "Дугин Юрий",
  "Старовойтова Елизавета",
  "Петрова Ксения",
  "Киселев Евгений",
  "Чибисов Вадим",
];

let newClients = [];

clients.map((client) => {
  newClients.push([...client].map((symbol) => getValue(symbol)).join(""));
});

console.log(clients);
console.log(newClients);

function getValue(symbol) {
  switch (symbol) {
    case " ":
      return " ";
    case "И":
      return "I";
    case "и":
      return "i";
    case "в":
      return "v";
    case "а":
      return "a";
    case "н":
      return "n";
    case "о":
      return "o";
    case "с":
      return "s";
    case "С":
      return "S";
    case "м":
      return "m";
    case "р":
      return "r";
    case "П":
      return "P";
    case "п":
      return "p";
    case "е":
      return "e";
    case "л":
      return "l";
    case "Д":
      return "D";
    case "д":
      return "d";
    case "у":
      return "u";
    case "г":
      return "g";
    case "Ю":
      return "Yu";
    case "й":
      return "i";
    case "т":
      return "t";
    case "Е":
      return "E";
    case "л":
      return "l";
    case "з":
      return "z";
    case "К":
      return "K";
    case "c":
      return "s";
    case "я":
      return "ia";
    case "Ч":
      return "Ch";
    case "б":
      return "b";
    case "В":
      return "V";
    case "д":
      return "d";
  }
}
