import * as seedData from './seedData.json';
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

(async function seed() {
  const region = process.argv[0];
  const client = new DynamoDBClient({ region: region });
  seedData.forEach(async (element) => {
    const command = new PutItemCommand({
      TableName: 'nextjsreacttemplateUsers',
      Item: element
    });
    await client.send(command);
  });
})();