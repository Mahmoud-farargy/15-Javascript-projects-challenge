// lists
const tabsList = [
  {id:"ufsiofefwh", title: "history" ,content: "I'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombucha glossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, woke fixie banjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral direct trade hoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaid pop-up.", innerList: []},
  {id:"jiofejoffe", title: "vision" ,content: "Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.", innerList: ["Breaking Bad", "Family Guy", "Friends"]},
  {id:"hpfejifofg", title: "goals" ,content: "Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.", innerList: []}
]
// target elements
const tabBtns = document.querySelectorAll("#tabsHeader button");
const tabBody = document.getElementById("tabsBody");

// functions
function handleTabSwitching (dataId) {
  const lowerCasedDataId = dataId.toLowerCase();
  if(lowerCasedDataId ){
    // get item index by title
    const currentItemIdx = tabsList.map(item => item.title).indexOf(dataId);
    // show body accordingly  
    if(currentItemIdx >= 0){
      const currentTabData = tabsList[currentItemIdx];
      // const 
      tabBody.innerHTML =`
        <h4>${currentTabData.title}</h4>
        <p class="tab-text">${currentTabData.content}</p>
        ${
          currentTabData.innerList && currentTabData.innerList.length > 0
           ? currentTabData.innerList?.map(el => {
             return `
              <ul>
                <li><h5>${el}</h5></li>
              </ul>
             `;
           }).join("") : ""
        }
      `;
    }
  };
}
tabBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    tabBtns.forEach(item => item.classList.remove("active-tab"));
    btn.classList.add("active-tab");
    handleTabSwitching(btn.getAttribute("data-id"));
  });
});

// events

window.addEventListener("DOMContentLoaded", function() {
  handleTabSwitching(tabsList[0].title);
},false);