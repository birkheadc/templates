import { DynamoDBClient, ScanCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { hashSync } from "bcrypt";
import { randomUUID } from "crypto";
import * as seedData from './users/data.prod.json';

async function seedUsers() {
  const region = process.argv[2];
  const tableName = 'nextjsreacttemplateUsers';
  const client = new DynamoDBClient({ region: region });

  const command = new ScanCommand({
    TableName: tableName
  });

  const response = await client.send(command);
  if (response.Count && response.Count > 0) return;

  seedData.forEach(async (element) => {
    element.id.S = randomUUID();
    element.password.S = hashSync(element.password.S, 10);
    const command = new PutItemCommand({
      TableName: tableName,
      Item: element
    });
    await client.send(command);
  });
}

(async function seed() {
  await seedUsers();
})();