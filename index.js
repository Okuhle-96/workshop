const color = document.querySelector('.colors');
const brand = document.querySelector('.brands');
const car = document.querySelector('.cars');

const colorTemplateText = document.querySelector(".colorTemplate");
const colorTemplate = Handlebars.compile(colorTemplateText.innerHTML)

const brandTemplateText = document.querySelector(".brandTemplate");
const brandTemplate = Handlebars.compile(brandTemplateText.innerHTML)

const carTemplateText = document.querySelector(".carTemplate");
const carTemplate = Handlebars.compile(carTemplateText.innerHTML)

axios
.get('http://api-tutor.herokuapp.com/v1/colors')
.then(function(result){
   color.innerHTML = colorTemplate({
    colors : result.data
   });
});

axios
.get('http://api-tutor.herokuapp.com/v1/makes')
.then(function(result){
   brand.innerHTML = brandTemplate({
    brands : result.data
   });
});

axios
.get('http://api-tutor.herokuapp.com/v1/cars')
.then(function(result){
   car.innerHTML = carTemplate({
    cars : result.data
   });
});