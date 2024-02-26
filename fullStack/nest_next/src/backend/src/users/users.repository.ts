import { DynamoDBClient, GetItemCommand, PutItemCommand, QueryCommand, ScanCommand, ScanCommandInput } from "@aws-sdk/client-dynamodb";
import {HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersRepository {
  private readonly tableName: string = 'nestnexttemplateUsers';
  constructor(private readonly client: DynamoDBClient) { }

  async getUserById(id: string): Promise<User> {
    console.log(`looking for user: (${id})`);
    const command = new GetItemCommand({
      TableName: this.tableName,
      Key: { id: { S: id } }
    });

    try {
      const response = await this.client.send(command);
      if (!response.Item) {
        console.log('no item in response:', response);
        throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      }

      const user = User.fromDynamoDBObject(response.Item);
      return user;
    } catch (error) {
      console.log('Error in getUserById', error);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  async getUserByEmailAddress(emailAddress: string): Promise<User | null> {
    console.log({emailAddress});
    const command = new QueryCommand({
      TableName: this.tableName,
      IndexName: 'emailAddress',
      KeyConditionExpression: 'emailAddress = :emailAddress',
      ExpressionAttributeValues: {
        ':emailAddress': { S: emailAddress }
      }
    });

    try {
      const response = await this.client.send(command);
      if (!response.Items || Object.keys(response.Items).length < 1) return null;
      const user = User.fromDynamoDBObject(response.Items.pop());
      return user;
    } catch (error) {
      console.log('Error in getUserByEmailAddress', error);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
  }

  async putUser(user: User): Promise<User> {
    const command = new PutItemCommand({
      TableName: this.tableName,
      Item: User.toItemObject(user),
      ReturnValues: 'ALL_OLD'
    });
    try {
      const response = await this.client.send(command);
      // TODO: This is attempting to check whether the command failed, and throw if it did. But I'm not sure if that's what is actually happening.
      if (response.Attributes == null) throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
      return user;
    } catch (error) {
      console.log('Error in putUser', error);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }    
  }
}