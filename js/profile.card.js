window.addEventListener("DOMContentLoaded",function(){
  var ProfileCards=document.getElementsByTagName('profile');
  if(ProfileCards.length != 0){
  var ProfileCards=ProfileCards[0];
  var name=ProfileCards.dataset.name;
  var title=ProfileCards.dataset.title;
  var summary=ProfileCards.dataset.summary;
  ProfileCards.innerHTML=`
    <div class="profile_card_box">
      <div>
        <div style="display: flex;align-items: center;margin-bottom: 0.5rem;">
          <div class="profile_card title">
            <div style="display: inline-block;line-height: normal;vertical-align: middle;margin: auto;">
              <img class="profile_card logo" src="../img/profile.card/profile.card.man.png">
              <img class="profile_card logo user" src="../img/profile.card/profile.card.user.jpg">
            </div>
            <span class="profile_card name">${name}</span>
          </div>
          <div style="display: inline-flex;">
            <span class="profile_card flag_item">
              <img class="profile_card icon" src="../img/profile.card/ui.svg">
            </span>
            <span class="profile_card flag_item">
              <img class="profile_card icon" src="../img/profile.card/ux.svg">
            </span>
            <span class="profile_card flag_item">
              <img class="profile_card icon" src="../img/profile.card/code.svg">
            </span>
            <span class="profile_card flag_item">
              <img class="profile_card icon" src="../img/profile.card/app.svg">
            </span>
            <span class="profile_card flag_item">
              <img class="profile_card icon" src="../img/profile.card/motion.svg">
            </span>
          </div>
        </div>
        <p class="profile_card wenzi">${title}</p>
        <p class="profile_card wenzi1">${summary}</p>
      </div>
      <div class="profile_card user_photo">
        <img class="profile_card user_photo photo" src="../img/profile.card/profile.card.user.jpg">
        <img class="profile_card user_photo icon" src="../img/profile.card/power-plus.png">
      </div>
    </div>
    `;
  }
},false);