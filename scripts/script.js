var getLegislatorData = function(sunlightObj) {
    var legislatorStr = ''
    legislatorStr += '<div class="legislator">' + '<h1 class="name">' + sunlightObj.first_name + ' ' + sunlightObj.last_name + '</h1>'
    legislatorStr += '<h2 class="partyAndState">' + sunlightObj.title + ' -- ' + sunlightObj.party + '-' + sunlightObj.state_name + '</h2>'
    legislatorStr += '<ul class="contact">'

    // if sunlightObj.* is truthy (has value), proceed with code. if falsy (null/undefined), skip building the line
    if (sunlightObj.office) {
        legislatorStr += '<li>' + 'email: ' + sunlightObj.oc_email + '</li>'
    }
    if (sunlightObj.website) {
        legislatorStr += '<li>' + 'website: ' + sunlightObj.website + '</li>'
    }
    if (sunlightObj.facebook_id) {
        legislatorStr += '<li>' + 'facebook: ' + sunlightObj.facebook_id + '</li>'
    }
    if (sunlightObj.twitter_id) {
        legislatorStr += '<li>' + 'twitter: ' + sunlightObj.twitter_id + '</li>'
    }
    legislatorStr += '</ul>'
    legislatorStr += '<h3 class="term_end">' + sunlightObj.term_end + '</h3>' + '</div>'

    console.log(sunlightObj)

    return legislatorStr
}

var handleResponse = function(apiResponse) {
    var stringHTML = '' // create blank slate to build text
    var containerNode = document.querySelector('.container') // grab container node

    for (var i = 0; i < apiResponse.results.length; i++) { // for every iteration through api responses...
        stringHTML += getLegislatorData(apiResponse.results[i]) // ... add to string w/ legislator data using above function
    }
    containerNode.innerHTML = stringHTML    // build string
}


var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=123') // returns sunlight info in JSON format

promise.then(handleResponse) // returns promise
