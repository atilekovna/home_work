var CardTransfers = {
  Type: "Золотая Корона",
  Pan: "1458 2514 2451 8795",
  ExpiryDate: "01.01.2025",
  PrintName: "vjgf"
};

 
switch (CardTransfers.Type) {
  case "Юнистрим":
    console.log("transfers from Unestream...");
    break;

  case "Золотая Корона":
    console.log("transfers from Gold Crown...");
    break;

  case "РИА":
    console.log("transfers from RIA...");
    break;

  case "Контакт":
    console.log("transfers from Contact...");
    break;

  default:
    console.log("Unknown card processing");
    break;
}