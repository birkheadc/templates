import { DynamoDBClient, GetItemCommand, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import {HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Credentials } from "./entities/credentials.entity";
import { hashSync } from "bcrypt";

@Injectable()
export class AuthRepository {
  private readonly tableName: string = 'project_nameUsers';
  constructor(private readonly client: DynamoDBClient) { }

  async getUserCredentialsById(id: string): Promise<Credentials> {
    // Replace this code with the commented out block below to use database.
    if (id !== 'admin') throw new HttpException('User not found', HttpStatus.INTERNAL_SERVER_ERROR);
    return {
      id: id,
      password: hashSync('password', 10)
    }
    // const command = new GetItemCommand({
    //   TableName: this.tableName,
    //   Key: { id: { S: id } }
    // });

    // const response = await this.client.send(command);
    // if (!response.Item) throw new HttpException('User not found', HttpStatus.INTERNAL_SERVER_ERROR);

    // const credentials = Credentials.fromDynamoDBObject(response.Item);
    // return credentials;
  }
}