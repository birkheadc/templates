import { randomUUID } from 'crypto';
import * as seedData from './seedData.prod.json';
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { hashSync } from 'bcrypt';

(async function seed() {
  const region = process.argv[2];
  const client = new DynamoDBClient({ region: region });
  seedData.forEach(async (element) => {
    element.id.S = randomUUID();
    element.password.S = hashSync(element.password.S, 10);
    const command = new PutItemCommand({
      TableName: 'nextjsreacttemplateUsers',
      Item: element
    });
    await client.send(command);
  });
})();