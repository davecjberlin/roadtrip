// Make it rain!
console.log("helloworld")

var daveLocation = 0;

$( function() {
    var handle = $( "#custom-handle" );
    $( "#slider" ).slider({
      max: 30,
      create: function() {
        handle.text( $( this ).slider( "value" ) );
      },
      slide: function( event, ui ) {
        handle.text( ui.value );
        console.log(ui.value);
        var daveLocation = ui.value;
        updateLocation(daveLocation);
        updateDetail(daveLocation);

      },
      
    });

    });

function updateLocation (daveLocation) {
  var car_element = $( "#carimage");
  car_element.removeClass()
  car_element.addClass(`day_${daveLocation}`)
}

var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '8y5rficr1qp3',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '385ec4b6f1f21f395f6603b4083ca6ef02355f689810fdeb21efd0220b4f9cbf'
})


function updateDetail (daveLocation){
  client.getEntries({
    content_type: 'destination',
    'fields.day': daveLocation
  })
  .then((entries) => {
    console.log(entries)
    document.getElementById('name').innerHTML = entries.items[0].fields.name
    document.getElementById('description').innerHTML = entries.items[0].fields.description
    document.getElementById('image').attr("src") = entries.items[0].fields.image.file.url
    document.getElementById('image').src = entries.items[0].fields.pictures[0].file.url

  })
}




// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client.getEntry('4MuNksnBaU0EIUmUacOgQa')
.then((entry) => {
  document.getElementById('title').innerHTML = entry.fields.title
  document.getElementById('introduction').innerHTML = entry.fields.introduction
})





client.getEntries({
  content_type:'destination'
})
.then((entries) => {
  console.log(entries)
  document.getElementById('destinations')
  var entrieshtml = ''
  entries.items.forEach((entry) => {
    entrieshtml += '<p class="destinationname">'+entry.fields.name+'</p>'

  })
  document.getElementById('destinations').innerHTML = entrieshtml
})


    // if (daveLocation == 2) {
    //   console.log ("day2"); }
    //   else {
    //     console.log ("otherday");
    //   }
    




    // var = currentPosition;
// if (ui.value = 2) {

//           console.log("day2");
//         };

  

// I want to get the value from the slider



// Then I want to take that value, and apply a specific class to the html (probably an src link,
 // and the text)


// The link should then update so you can see which destination has been selected

// var location = "yellowstone" -> oops, this changes where the browser is pointing (takes it to yellowstone.html!)


// console.log("Dave is at 'location'")

// var rng = document.querySelector("input");

// var listener = function() {
//   window.requestAnimationFrame(function() {
//     document.querySelector("h2").innerHTML = rng.value;
//   });
// };

// rng.addEventListener("mousedown", function() {
//   listener();
//   rng.addEventListener("mousemove", listener);
// });
// rng.addEventListener("mouseup", function() {
//   rng.removeEventListener("mousemove", listener);
// });

// // include the following line to maintain accessibility
// // by allowing the listener to also be fired for
// // appropriate keyboard events
// rng.addEventListener("keydown", listener);


// var date;

// $('#range').on('change', function(){

// })