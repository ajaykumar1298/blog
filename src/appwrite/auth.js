import config from "../config/config";
import { Client, Account, ID } from "appwrite";

class Auth{
    constructor(){
        this.client=new Client().setEndpoint(config.appWriteUrl).setProject(config.appWriteProductId)
        this.account=new Account(this.client)
    }

    async addUser({email,pass}){
        try {
          let user=  await this.account.create(ID.unique(),email,pass)
          if(user){
            return this.login({email,pass}) 
          }else{
            return 
          }
        } catch (error) {
            throw error
            
        }
    }
    async login({email,pass}){
        try {
          return  await this.account.createEmailPasswordSession(email,pass)
        } catch (error) {
            throw error
            
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions()
            return true
        } catch (error) {
            throw error
            
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            
        } catch (error) {
            
            throw error
            
        }
    }
}

let auth=new Auth()
export default auth