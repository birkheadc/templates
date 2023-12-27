import * as seedData from './seedData.json';
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

(async function seed() {
  const client = new DynamoDBClient({ region: 'ap-southeast-2' });
  seedData.forEach(async (element) => {
    const command = new PutItemCommand({
      TableName: 'nextjsreacttemplateUsers',
      Item: element
    });
    await client.send(command);
  });
})();