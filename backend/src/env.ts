import * as dotenv from 'dotenv'
dotenv.config();

function getEnvVar(name: string): string {
    const value = process.env[name];
    if(!value){
        throw new Error(`❌ La variable ${name} n'est pas définie dans .env`);
    }
    return value;
}

export const ENV = {
    PORT: parseInt(getEnvVar('PORT'),10),
    GMAIL_USER: getEnvVar('GMAIL_USER'),
    GMAIL_PASS: getEnvVar('GMAIL_PASS'),

}


