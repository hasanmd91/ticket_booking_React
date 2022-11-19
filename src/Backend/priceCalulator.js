function priceCalculetor(city1, city2) {
  let price;

  if (city1 === city2) {
    console.log("please choose different city");
  } else if (
    (city1 === "Helsinki" && city2 === "Turku") ||
    (city1 === "Turku" && city2 === "Helsinki")
  ) {
    price = 31;
  } else if (
    (city1 === "Helsinki" && city2 === "Tampere") ||
    (city1 === "Tampere" && city2 === "Helsinki")
  ) {
    price = 22;
  } else if (
    (city1 === "Helsinki" && city2 === "Oulu") ||
    (city1 === "Oulu" && city2 === "Helsinki")
  ) {
    price = 50;
  } else if (
    (city1 === "Helsinki" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Helsinki")
  ) {
    price = 32;
  } else if (
    (city1 === "Turku" && city2 === "Tampere") ||
    (city1 === "Tampere" && city2 === "Turku")
  ) {
    price = 32;
  } else if (
    (city1 === "Turku" && city2 === "Oulu") ||
    (city1 === "Oulu" && city2 === "Turku")
  ) {
    price = 32;
  } else if (
    (city1 === "Turku" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Turku")
  ) {
    price = 32;
  } else if (
    (city1 === "Tampere" && city2 === "Oulu") ||
    (city1 === "Oulu" && city2 === "Tampere")
  ) {
    price = 32;
  } else if (
    (city1 === "Tampere" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Tampere")
  ) {
    price = 32;
  } else if (
    (city1 === "Oulu" && city2 === "Kuopio") ||
    (city1 === "Kuopio" && city2 === "Oulu")
  ) {
    price = 33;
  }

  console.log(price);
}

module.exports = priceCalculetor;
