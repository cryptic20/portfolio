export const getSteamEndpoint = (interfaceName, methodName, version) => {
  return `https://cors-anywhere.herokuapp.com/https://api.steampowered.com/${interfaceName}/${methodName}/v${version}/?key=${process.env.REACT_APP_STEAM_KEY}&steamids=76561198072052850&format=json`
}
