//generate a Personal Access Token for the GitHub API

//create a function that accepts a GitHub username and returns a promise that resolves
//returning just the date of the last commit that user made.

// function getLastCommit(username) {
//     let url = `https://api.github.com/repos/${owner}/${repo}/commits`;
//
//     return fetch(url, {headers{'Authorization': `token ${gitHub_Key}`}})
//         .then(resp => resp.json()
//             .then( data => data[0].created_at));
// }

// TODO: FUNCTION CALLS
getGitHubAPI('mersedyes', 'codeup-web-exercises')
    .then(data => console.log(data[0].commit.author.date))
    .catch(error => console.log(`This is an error: ${error}`))


//TODO: FUNCTION DECLARATION
async function getGitHubAPI(owner, repo){
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {headers:{'Authorization':GITHUB_KEY}})
    if (!response.ok) {
        new Error(`HTTP Error, status: ${response.status}`)
    } else {
        return await response.json();
    }
}