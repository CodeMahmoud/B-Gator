import {readConfig, setUser} from "./config";


function main() {
  setUser("myName")
  const updatedConfig = readConfig();
  console.log(updatedConfig);
}

main();
