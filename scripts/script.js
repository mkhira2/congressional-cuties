var getLegislatorData = function(sunlightObj) {
    var legislatorStr = ''
    legislatorStr += '<div class="legislator">' + '<h1 class="name">' + sunlightObj.first_name + ' ' + sunlightObj.last_name + '</h1>'
    legislatorStr += '<h2 class="partyAndState">' + sunlightObj.title + ' -- ' + sunlightObj.party + '-' + sunlightObj.state_name + '</h2>'
    legislatorStr += '<ul class="contact">'
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
    var stringHTML = ''
    var containerNode = document.querySelector('.container')

    for (var i = 0; i < apiResponse.results.length; i++) {
        stringHTML += getLegislatorData(apiResponse.results[i])
    }
    containerNode.innerHTML = stringHTML
}


var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators/')

promise.then(handleResponse)
