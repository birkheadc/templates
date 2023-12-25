import { DynamoDBClient, GetItemCommand, PutItemCommand, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import {HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Credentials } from "./entities/credentials.entity";
import { hashSync } from "bcrypt";

@Injectable()
export class AuthRepository {
  private readonly tableName: string = 'project_nameUsers';
  constructor(private readonly client: DynamoDBClient) { }

  async getUserCredentialsById(id: string): Promise<Credentials> {
    const command = new GetItemCommand({
      TableName: this.tableName,
      Key: { id: { S: id } }
    });

    try {
      const response = await this.client.send(command);
      if (!response.Item) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

      const credentials = Credentials.fromDynamoDBObject(response.Item);
      return credentials;
    } catch (error) {
      console.log('Error in getUserCredentialsById', error);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  async changePassword(newCredentials: Credentials): Promise<Credentials> {
    const command = new PutItemCommand({
      TableName: this.tableName,
      Item: Credentials.toItemObject(newCredentials),
      ReturnValues: 'ALL_OLD'
    })
    try {
      const response = await this.client.send(command);
      if (response.Attributes == null) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      return newCredentials;
    } catch (error) {
      console.log('Error in changePassword', error);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    
  }
}