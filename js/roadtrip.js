var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '8y5rficr1qp3',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '385ec4b6f1f21f395f6603b4083ca6ef02355f689810fdeb21efd0220b4f9cbf'
})
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
