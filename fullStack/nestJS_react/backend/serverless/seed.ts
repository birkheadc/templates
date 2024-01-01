import { randomUUID } from 'crypto';
import * as seedData from './seedData.prod.json';
import { DynamoDBClient, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { hashSync } from 'bcrypt';

(async function seed() {
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
})();