
$(document).ready(function(){

  // function elementOut (element,time) {
    //    if(time>5000||time<1000||isNaN(time)){
      //      return false;
       // } else {
         //   var className ="."+element;
           // $(className).slideUp(time).slideDown(time);
       // }
  //  }
  //  elementOut('presentation',5000);
   // $('.heroes').addClass('active');
  // $('.blog img').each(function(){
    //   if($(this).attr('src')=='img/QRDS89UEN0RE1632780764194.png') {
      //     $(this).fadeOut(5000);
      // }
  // })
 // $('.portrait-container a').mouseover(function(){
  //  $('.wrapper-portrait-image').css({
    //    'transform' : 'skew(25rad) scale(1.3)',
   //     'background-color' : '#ff9c00'
  //  })
  //  $('.person-name').css({
   //     'transition':'background-color 0s ease-out',
  //      'background-color':'#f6f6f6'
//})
 // })
 // $('.portrait-container a').mouseout(function(){
 //   $('.wrapper-portrait-image').css({
   //     'transform' : '',
   //     'background-color' : 'rgba(51,51,51,.9)'
  //  })
  //  $('.person-name').css({
   //     'transition':'background-color .15s ease-in',
  //      'background-color':''
  //  })
  //)
 // $('.portrait-container1 a').mouseover(function(){
   // $('.wrapper-portrait-image').css({
  //      'transform' : 'skew(25rad) scale(1.3)',
  //      'background-color' : '#ff9c00'
  //  })
  //  $('.person-name').css({
   //     'transition':'background-color 0s ease-out',
   //     'background-color':'#f6f6f6'
  //  })
 // })
  var elem = document.getElementById('nav');
  function elemclick(){
    alert('ks lol');
  }
    elem.onclick = elemclick;


    //создание массивов для данных картинок и текста
    var dva = ['img/heroes/D.VA.png','D.VA','Бывшая киберспортсменка, ныне —<br> знаменитый пилот новейшей боевой мехи на<br> страже родины.']
    var ana = ['img/heroes_2/ana.png','АНА','После долгих лет отсутствия верная сторонница Overwatch вернулась, чтобы защитить новое поколение агентов.']
    
    //
    $('.portrait-container #1').hover(function(){
      var attr1 = $('.portrait-container a .person-name').attr('id')
      if($(attr1==1)) {
        $('.presentation img').attr('src','img/heroes/D.VA.png')
        $('.presentation h3').text('D.VA')
        $('.presentation h4').text('Бывшая киберспортсменка, ныне — знаменитый пилот новейшей боевой мехи на страже родины.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #2').hover(function(){
      var attr2 = $('.portrait-container a .person-name').attr('id')
      if($(attr2==2)) {
        $('.presentation img').attr('src','img/heroes_2/ana.png')
        $('.presentation h3').text('АНА')
        $('.presentation h4').text('После долгих лет отсутствия верная сторонница Overwatch вернулась, чтобы защитить новое поколение агентов.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #3').hover(function(){
      var attr3 = $('.portrait-container a .person-name').attr('id')
      if($(attr3==3)) {
        $('.presentation img').attr('src','img/heroes_2/angel.png')
        $('.presentation h3').text('АНГЕЛ')
        $('.presentation h4').text('Ангел-хранитель, самоотверженный целитель, талантливый врач, блестящий ученый и горячая заступница мира во всем мире.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #4').hover(function(){
      var attr4 = $('.portrait-container a .person-name').attr('id')
      if($(attr4==4)) {
        $('.presentation img').attr('src','img/heroes_2/bastion.png')
        $('.presentation h3').text('БАСТИОН')
        $('.presentation h4').text('Робот-трансформер, который жаждет исследовать мир. Природа его очаровывает, люди — вызывают подозрение.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #5').hover(function(){
      var attr5 = $('.portrait-container a .person-name').attr('id')
      if($(attr5==5)) {
        $('.presentation img').attr('src','img/heroes_2/batist.png')
        $('.presentation h3').text('БАТИСТ')
        $('.presentation h4').text('Опытный военный врач с арсеналом экспериментальной медицинской техники.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #6').hover(function(){
      var attr6 = $('.portrait-container a .person-name').attr('id')
      if($(attr6==6)) {
        $('.presentation img').attr('src','img/heroes_2/briggita.png')
        $('.presentation h3').text('БРИГГИТА')
        $('.presentation h4').text('Эта закованная в броню воительница всегда готова броситься на помощь тем, кто в ней нуждается.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #7').hover(function(){
      var attr7 = $('.portrait-container a .person-name').attr('id')
      if($(attr7==7)) {
        $('.presentation img').attr('src','img/heroes_2/gendzi.png')
        $('.presentation h3').text('ГЕНДЗИ')
        $('.presentation h4').text('Этот киборг-ниндзя и смертельно опасный воин смог найти умиротворение, обретя свое механическое тело')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #8').hover(function(){
      var attr8 = $('.portrait-container a .person-name').attr('id')
      if($(attr8==8)) {
        $('.presentation img').attr('src','img/heroes_2/dzen.png')
        $('.presentation h3').text('ДЗЕНЬЯТТА')
        $('.presentation h4').text('Робот-монах, странствующий по свету в поисках духовного просветления.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #9').hover(function(){
      var attr9 = $('.portrait-container a .person-name').attr('id')
      if($(attr9==9)) {
        $('.presentation img').attr('src','img/heroes_2/repear.png')
        $('.presentation h3').text('ЖНЕЦ')
        $('.presentation h4').text('Беспощадный убийца, который сеет смерть на своем пути, преследуя агентов Overwatch.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #10').hover(function(){
      var attr10 = $('.portrait-container a .person-name').attr('id')
      if($(attr10==10)) {
        $('.presentation img').attr('src','img/heroes_2/zarya.png')
        $('.presentation h3').text('ЗАРЯ')
        $('.presentation h4').text('Одна из самых сильных женщин планеты, которая поставила безопасность страны выше собственной славы.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #11').hover(function(){
      var attr11 = $('.portrait-container a .person-name').attr('id')
      if($(attr11==11)) {
        $('.presentation img').attr('src','img/heroes_2/rat.png')
        $('.presentation h3').text('КРЫСАВЧИК')
        $('.presentation h4').text('Помешанный на взрывах псих, единственная мечта которого — сеять хаос и разрушение.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #12').hover(function(){
      var attr12 = $('.portrait-container a .person-name').attr('id')
      if($(attr12==12)) {
        $('.presentation img').attr('src','img/heroes_2/fist.png')
        $('.presentation h3').html('КУЛАК СМЕРТИ')
        $('.presentation h4').text('Блестящий тактик, стремящийся изменить мир. Полагается на свой ум, природное обаяние и грубую силу.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #13').hover(function(){
      var attr13 = $('.portrait-container a .person-name').attr('id')
      if($(attr13==13)) {
        $('.presentation img').attr('src','img/heroes_2/kessedi.png')
        $('.presentation h3').text('КЕССИДИ')
        $('.presentation h4').text('Меткий стрелок, который жаждет восстановить справедливость. Но понимает он ее по-своему.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #14').hover(function(){
      var attr14 = $('.portrait-container a .person-name').attr('id')
      if($(attr14==14)) {
        $('.presentation img').attr('src','img/heroes_2/lucio.png')
        $('.presentation h3').text('ЛУСИО')
        $('.presentation h4').text('Звезда международного масштаба, своей музыкой и своими действиями Лусио вдохновляет людей на перемены.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #15').hover(function(){
      var attr15 = $('.portrait-container a .person-name').attr('id')
      if($(attr15==15)) {
        $('.presentation img').attr('src','img/heroes_2/moira.png')
        $('.presentation h3').text('МОЙРА')
        $('.presentation h4').text('Блестящий генетик, который ставит научный прогресс превыше любых этических норм.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #16').hover(function(){
      var attr16 = $('.portrait-container a .person-name').attr('id')
      if($(attr16==16)) {
        $('.presentation img').attr('src','img/heroes_2/mey.png')
        $('.presentation h3').text('МЕЙ')
        $('.presentation h4').text('Мэй — ученый-климатолог, и она решила взять в свои руки дело по спасению окружающей среды.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #17').hover(function(){
      var attr17 = $('.portrait-container a .person-name').attr('id')
      if($(attr17==17)) {
        $('.presentation img').attr('src','img/heroes_2/orisa.png')
        $('.presentation h3').text('ОРИСА')
        $('.presentation h4').text('Робот-миротворец, созданный для защиты жителей Нумбани.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #18').hover(function(){
      var attr18 = $('.portrait-container a .person-name').attr('id')
      if($(attr18==18)) {
        $('.presentation img').attr('src','img/heroes_2/hardt.png')
        $('.presentation h3').text('РАЙНХАРДТ')
        $('.presentation h4').text('Рыцарь, живущий согласно кодексу чести, справедливости и мужества.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #19').hover(function(){
      var attr19 = $('.portrait-container a .person-name').attr('id')
      if($(attr19==19)) {
        $('.presentation img').attr('src','img/heroes_2/vdova.png')
        $('.presentation h3').text('РОКОВАЯ ВДОВА')
        $('.presentation h4').text('Идеальный убийца: терпеливая, беспощадная, эффективная, без тени эмоций или сомнений.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #20').hover(function(){
      var attr20 = $('.portrait-container a .person-name').attr('id')
      if($(attr20==20)) {
        $('.presentation img').attr('src','img/heroes_2/sigma.png')
        $('.presentation h3').text('СИГМА')
        $('.presentation h4').text('Эксцентричный астрофизик, превратившийся в живое оружие в результате неудачного эксперимента на орбитальной станции.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #21').hover(function(){
      var attr21 = $('.portrait-container a .person-name').attr('id')
      if($(attr21==21)) {
        $('.presentation img').attr('src','img/heroes_2/simetra.png')
        $('.presentation h3').text('СИММЕТРА')
        $('.presentation h4').text('Симметра в буквальном смысле искажает реальность, манипулируя конструкциями из «жесткого» света.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #22').hover(function(){
      var attr22 = $('.portrait-container a .person-name').attr('id')
      if($(attr22==22)) {
        $('.presentation img').attr('src','img/heroes_2/soldier.png')
        $('.presentation h3').text('СОЛДАТ-76')
        $('.presentation h4').text('Загадочный боец, стремящийся раскрыть миру причины краха Overwatch.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #23').hover(function(){
      var attr23 = $('.portrait-container a .person-name').attr('id')
      if($(attr23==23)) {
        $('.presentation img').attr('src','img/heroes_2/sombra.png')
        $('.presentation h3').text('СОМБРА')
        $('.presentation h4').text('Известный хакер, охотящийся за секретами — и властью, которую они дают.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #24').hover(function(){
      var attr24 = $('.portrait-container a .person-name').attr('id')
      if($(attr24==24)) {
        $('.presentation img').attr('src','img/heroes_2/taran.png')
        $('.presentation h3').text('ТАРАН')
        $('.presentation h4').text('Этим катящимся танком управляет генетически модифицированный хомяк с Луны.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #25').hover(function(){
      var attr25 = $('.portrait-container a .person-name').attr('id')
      if($(attr25==25)) {
        $('.presentation img').attr('src','img/heroes_2/tor.png')
        $('.presentation h3').text('ТОРБЬОРН')
        $('.presentation h4').text('Гениальный инженер, который кует оружие из расплавленного металла прямо на поле боя.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container #26').hover(function(){
      var attr26 = $('.portrait-container a .person-name').attr('id')
      if($(attr26==26)) {
        $('.presentation img').attr('src','img/heroes_2/tracer.png')
        $('.presentation h3').text('ТРЕЙСЕР')
        $('.presentation h4').text('Бывший агент Overwatch, путешественница во времени с душой нараспашку.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container1 #27').hover(function(){
      var attr27 = $('.portrait-container a .person-name').attr('id')
      if($(attr27==27)) {
        $('.presentation img').attr('src','img/heroes_2/svin.png')
        $('.presentation h3').text('ТУРБОСВИН')
        $('.presentation h4').text('Этот грозный и беспощадный убийца известен своей жестокостью и тягой к разрушению.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container1 #28').hover(function(){
      var attr28 = $('.portrait-container a .person-name').attr('id')
      if($(attr28==28)) {
        $('.presentation img').attr('src','img/heroes_2/yinston.png')
        $('.presentation h3').text('УИНСТОН')
        $('.presentation h4').text('Сверхразумная генетически модифицированная горилла и блестящий ученый в одном лице.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container1 #29').hover(function(){
      var attr29 = $('.portrait-container a .person-name').attr('id')
      if($(attr29==29)) {
        $('.presentation img').attr('src','img/heroes_2/farra.png')
        $('.presentation h3').text('ФАРРА')
        $('.presentation h4').text('Боец, получивший множество наград за боевые заслуги, теперь патрулирует небеса в экспериментальном боевом костюме Raptora.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container1 #30').hover(function(){
      var attr30 = $('.portrait-container a .person-name').attr('id')
      if($(attr30==30)) {
        $('.presentation img').attr('src','img/heroes_2/handzo.png')
        $('.presentation h3').text('ХАНДЗО')
        $('.presentation h4').text('Непревзойденный лучник и убийца.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container1 #31').hover(function(){
      var attr31 = $('.portrait-container a .person-name').attr('id')
      if($(attr31==31)) {
        $('.presentation img').attr('src','img/heroes_2/exo.png')
        $('.presentation h3').text('ЭХО')
        $('.presentation h4').text('Эхо — высокотехнологичный робот, управляемый быстро адаптирующимся искусственным интеллектом.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    $('.portrait-container1 #32').hover(function(){
      var attr32 = $('.portrait-container a .person-name').attr('id')
      if($(attr32==32)) {
        $('.presentation img').attr('src','img/heroes_2/esh.png')
        $('.presentation h3').text('ЭШ')
        $('.presentation h4').text('Лидер знаменитой банды Мертвецов, которая держит в ужасе американский Юго-Запад.')
      } 
      else{
        $('.presentation img').attr('src')
      }
    })
    
});
 
let count = 0;
let word = "";

function cc(card) {
  // Only change code below this line
switch(card) {
  case 2:
  case 3:
  case 4: 
  case 5: 
  case 6:
    count++;
    break;
  case 7:
  case 8:
  case 9:
    count += 0;
    break;
    case 10:
    case "J" :
    case "Q":
    case "K":
    case "A":
      count--;
      break;  
}
if(count > 0) {
  re
} else if (count <= 0) {
  count = count +  "Hold"
}else {

  return "Change Me";}
  // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(count);