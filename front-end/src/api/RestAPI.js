export const getSteamEndpoint = (interfaceName, methodName, version) => {
  return `https://cors-anywhere.herokuapp.com/http://api.steampowered.com/${interfaceName}/${methodName}/v${version}/?key=${process.env.REACT_APP_GITHUB_KEY}&format=json`
}
