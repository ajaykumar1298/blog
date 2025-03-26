import config from "../config/config";
import { Client, ID,Databases,Storage,Query } from "appwrite";

class Service{
    constructor(){
        this.client=new Client().setEndpoint(config.appWriteUrl).setProject(config.appWriteProductId)
        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)
    }

    async createPost({title,slug,content,img,status,userId}){
        try {
            return await this.databases.createDocument(config.appWriteDatabaseID,config.appWriteCollectionId,slug,{
                title,
                slug,
                content,
                img,
                status,
                userId
            })
        } catch (error) {
            throw error
        }

    }
     
    async updatePost(slug,{title,content,img,status}){
        try {
            return await this.databases.updateDocument(config.appWriteDatabaseID,config.appWriteCollectionId,slug, {
                title,
                content,
                img,
                status
            })
        } catch (error) {
            throw error
        }

    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(config.appWriteDatabaseID,config.appWriteCollectionId,slug)
            return true
        } catch (error) {
            throw error
        }

    }

    async getPost(slug){
        try {
            return this.databases.getDocument(config.appWriteDatabaseID,config.appWriteCollectionId,slug)
            
        } catch (error) {
            throw error
            
        }

    }

    async getAllPost(){
        try {
            return this.databases.listDocuments(
                config.appWriteDatabaseID,
                config.appWriteCollectionId,
                [
                    Query.equal("status","active")
                ]
            )
            
        } catch (error) {
            throw error
        }
    }

    //upload file
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                config.appWriteBucketID,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error
            
        }
    }

    async DeleteFile(fileId){
        try {
            return await this.storage.deleteFile(
                config.appWriteBucketID,
                fileId
            )
        } catch (error) {
            throw error
        }

    }

     previewFile(fileId){

        return this.storage.getFileView(
            config.appWriteBucketID,
            fileId
        )
    }
}

let service=new Service()

export default service