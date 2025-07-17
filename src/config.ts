import fs from "fs";
import os from "os";
import path from "path";


type Config = {
    dbUrl: string,
    currentUserName: string
};

export function readConfig() {
    const configPath = path.join(os.homedir(), ".gatorconfig.json");
    const parsedConfig = validateConfig(JSON.parse(fs.readFileSync(configPath, 'utf-8')));
   return parsedConfig
}

export function setUser(username: string) {
    const currentConfig = readConfig();

    const configPath = path.join(os.homedir(), ".gatorconfig.json");

    currentConfig.currentUserName = username;

        const jsonConfig = {
        db_url: currentConfig.dbUrl,
        current_user_name: currentConfig.currentUserName
    };

    fs.writeFileSync(configPath, JSON.stringify(jsonConfig));
}

function validateConfig(rawConfig: any): Config {
    return {
        dbUrl: rawConfig.db_url,
        currentUserName: rawConfig.current_user_name
    }
}
