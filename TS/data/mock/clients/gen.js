const faker = require("faker");
const { MongoClient } = require("mongodb");

const generateMockClients = async (numClients) => {
  const services = [
    "IT Services",
    "Consulting",
    "Product Development",
    "Research",
  ];
  const statuses = ["active", "closed"];
  const pocNames = [
    "Amit Sharma",
    "Priya Menon",
    "Rajesh Iyer",
    "Sneha Gupta",
    "Rohan Deshmukh",
  ];

  // Generate unique company names and descriptions
  const uniqueCompanies = new Set();
  const uniqueDescriptions = new Set();
  const mockClients = [];

  while (uniqueCompanies.size < numClients) {
    const name = faker.company.companyName();
    const desc = faker.lorem.paragraphs(5); // Long company profile
    if (!uniqueCompanies.has(name)) {
      uniqueCompanies.add(name);
      uniqueDescriptions.add(desc);
    }
  }

  const companyNames = Array.from(uniqueCompanies);
  const descriptions = Array.from(uniqueDescriptions);

  for (let i = 0; i < numClients; i++) {
    const id = faker.datatype.uuid();
    const code = faker.random.alphaNumeric(8).toUpperCase(); // Unique 8-character alphanumeric code
    const name = companyNames[i];
    const service = services[Math.floor(Math.random() * services.length)];
    const revenue = faker.finance.amount(100000, 1000000, 2); // Revenue between $100,000 and $1,000,000
    const desc = descriptions[i];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const poc = pocNames[Math.floor(Math.random() * pocNames.length)];
    const active_jobs = Math.floor(Math.random() * 31); // Random number between 0-30

    mockClients.push({
      id,
      code,
      name,
      services: service,
      revenue,
      desc,
      status,
      poc,
      active_jobs,
    });
  }

  return mockClients;
};

const insertIntoMongoDB = async (data) => {
  const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("talent_map"); // Replace with your database name
    const collection = database.collection("clients"); // Replace with your collection name

    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} records inserted into MongoDB.`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
};

const main = async () => {
  const numClients = 20; // Number of clients to generate
  const mockClients = await generateMockClients(numClients);
  console.log("Generated Mock Clients:", mockClients);

  await insertIntoMongoDB(mockClients); // Push data into MongoDB
};

main();
