//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/check-dest', function (req, res) {


  var Destination = req.session.data['whereDoYouLive']

  // Check whether the variable matches a condition
  if (Destination == "Moon"){
    // Send user to next page
    res.redirect('/confirmation-moon')
  } else {
    // Send user to ineligible page
    res.redirect('/confirmation-mars')
  }

})