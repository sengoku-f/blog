window.addEventListener("DOMContentLoaded",function(){
  var ProfileCards=document.getElementsByTagName('profile');
  if(ProfileCards.length != 0){
  var ProfileCards=ProfileCards[0];
  var name=ProfileCards.dataset.name;
  var title=ProfileCards.dataset.title;
  var summary=ProfileCards.dataset.summary;
  ProfileCards.innerHTML=`
    <div class="sspai_card_box">
      <div style="/* position: absolute;top: 50%;transform: translateY(-50%); */">
        <div style="display: flex;align-items: center;margin-bottom: 0.5rem;">
          <div class="sspai_card title">
            <div style="display: inline-block;line-height: normal;vertical-align: middle;margin: auto;">
              <img class="sspai_card logo" src="../img/profile.card/profile.card.man.png">
              <img class="sspai_card logo user" src="../img/profile.card/profile.card.user.jpg">
            </div>
            <span class="sspai_card name">${name}</span>
          </div>
          <div style="display: inline-flex;">
            <span class="sspai_card flag_item">
              <img class="sspai_card icon" src="../img/profile.card/ui.svg">
            </span>
            <span class="sspai_card flag_item">
              <img class="sspai_card icon" src="../img/profile.card/ux.svg">
            </span>
            <span class="sspai_card flag_item">
              <img class="sspai_card icon" src="../img/profile.card/code.svg">
            </span>
            <span class="sspai_card flag_item">
              <img class="sspai_card icon" src="../img/profile.card/app.svg">
            </span>
            <span class="sspai_card flag_item">
              <img class="sspai_card icon" src="../img/profile.card/motion.svg">
            </span>
          </div>
        </div>
        <p class="sspai_card wenzi">${title}</p>
        <p class="sspai_card wenzi1">${summary}</p>
      </div>
      <div class="sspai_card user_photo">
        <img class="sspai_card user_photo photo" src="../img/profile.card/profile.card.user.jpg">
        <img class="sspai_card user_photo icon" src="../img/profile.card/power-plus.png">
      </div>
    </div>`
  ;
  }
},false);