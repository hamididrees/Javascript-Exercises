const make_car = (manufacturer, model_name, ...car_info) => {
  car_info["manufacturer"] = manufacturer;
  car_info["model_name"] = model_name;
  return car_info;
};
let color = "blue";
let tow_package = true;
cars = make_car("suburu", "outback", color, tow_package);
console.log(cars);
