import { Client, Account, ID} from "appwrite0";

export class AuthenticationService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(appwriteUrl)
            .setProject(appwriteProjectId)
        this.account = new Account(this.account)    
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const AuthenticationService = new AuthenticationService();
export default AuthenticationService