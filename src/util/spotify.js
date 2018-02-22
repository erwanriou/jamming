//user variable  and URI (Have to be the domainname where you are hosting your website)- see this documentation - https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow - https://beta.developer.spotify.com/dashboard/applications
const redirectURI = "http://localhost:3000/"
const client_id = "03317009f2e84c71ae43443aa5848b8a";


//we Create the acces token variable here. We will use it in the function below.
let accessToken;
let expiresIn;

// Spotify API that regroup the 3 function token, GET and POST.
const Spotify = {
  // The first method to get the token
  getAccessToken() {
    if (accessToken) {
      return new Promise(resolve => resolve(accessToken));
    }
    // step 79 - we use the function match to found the specific accestoken and expires in the spotify API url
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    // step 80 condition statement on accesoken and expiration
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      expiresIn = Number(expiresInMatch[1]);

      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      //we finally get the accessToken from the URL (its when you already are registered, to avoid to passs trough spotify again)
      return accessToken;
    } else {
      // step 83 Setting up the Url of the GET
      const Url = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      window.location = Url;
    }
  },
  // The second method that is the GET
  async search(term) {
    if(accessToken === undefined) {
				this.getAccessToken();
			}
    try {
      let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
      if (response.ok) {
        let jsonResponse = await response.json();
   			let tracks = jsonResponse.tracks.items.map(track => ({
   				id: track.id,
   				name: track.name,
   				artist: track.artists[0].name,
   				album: track.album.name,
   				uri: track.uri
   			}));
   			return tracks;
 			}
      throw new Error('Request failed!');
    } catch(error) {
      console.log(error);
    }
  }
}

export default Spotify
