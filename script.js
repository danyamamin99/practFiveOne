// первое задание
function move() {
  $('.square')
  .animate({
    marginLeft: "300px",
    marginTop: "230px"
  }, 3000)
  .animate({
    marginTop: "0px"
  }, 3000)
  .animate({
    marginLeft: "0px",
    marginTop: "230px"
  }, 3000)
  .animate({
    marginTop: "0px"
  }, 3000)
}
setInterval(move, 3000);
// второе задание
function formSub(e) {
  e.preventDefault();
  let name = $("#name").val();
  let browser = $("input[type='radio']:checked").val() || 'не выбрано';
  let comment = $("#comment").val() || 'пусто';

  alert(`Ваше имя: ${name}\nПользуетесь браузером: ${browser}\nВаш комментарий: ${comment}`);
  $(".form").trigger('reset');
}
$(".form").submit(formSub);
// третье задание - слайдер
$('.slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1
});