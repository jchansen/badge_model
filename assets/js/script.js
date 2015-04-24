
function makeToast(slug, emailkey) {
  emailkey = "loukia@iplantc.org";
  console.log("This is inside the script.js")
  //var url = "http://localhost:8080/systems/demosys/badges/" + slug + "/instances";
  //slug = "aeb7128764d977d86676f566f167b303"

  $.post(
    "http://localhost:8080/systems/demosys/badges/" + slug + "/instances",
    { email: emailkey },
    function (data, textStatus, xhr) {
      $('#earned').fadeIn(400).delay(1500).fadeOut(400);
      if (xhr.status == 200) {
        console.log(body)
      }
    },
    "json"
  );

};

function getBadges(){
  console.log("here are your badges:")

  //var url = "http://localhost:8080/systems/demosys/"+"/instances/" + "loukia@iplantc.org";
  //var obj =
    $.get(
      "http://localhost:8080/systems/demosys/"+"instances/" + "loukia@iplantc.org",
      function (data, textStatus, xhr) {
        $('#get-badges').fadeIn(400).delay(1500).fadeOut(400);
        if (xhr.status == 200) {
          console.log(data)
          parseBody(data);
        }
      },
      "json"
    );
  //parseBody(obj);
}


function parseBody(body){
  console.log("parsing response");

  var newDiv = document.createElement("div")
  newDiv.setAttribute('id', 'display')


  for (var i in body.instances){
    var s = body.instances[i].badge.slug
    console.log(body.instances[i].badge.name);

    var badge = document.createElement("img");
    // add objects to #view-area


    switch (s){
      case "1d509050d7f68341e8c09460580dd881":
        badge.setAttribute('src', '../../images/download.png')
            break;
      case "aeb7128764d977d86676f566f167b303":
        badge.setAttribute('src', '../../images/fashiondog.png')
            break;
    }

    // switch cases!!!!!!

    newDiv.appendChild(badge);

  }
  var parent = document.getElementById("featurette")
  //var sibling = document.getElementById("earned")

  parent.appendChild(newDiv);
  // made an array of badges by slugs


  //body.responseText

}

var Toggle = function(){
  $(display).toggle()
}

//$(document).ready();

