const faker = require("faker");
const { MongoClient } = require("mongodb");

const MONGO_URI = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
const DATABASE_NAME = "talent_map"; // Replace with your database name
const COLLECTION_NAME = "candidates";

async function generateMockCandidate() {
  const startYear = faker.date.past(20, new Date("2000-01-01")).getFullYear();
  const totalExperienceYears = faker.datatype.number({ min: 15, max: 20 });
  const educationYear = startYear - 4;
  const endYear = startYear + totalExperienceYears;

  return {
    personalInformation: {
      fullName: faker.name.findName(),
      dateOfBirth: faker.date
        .between("1970-01-01", "1985-12-31")
        .toISOString()
        .split("T")[0],
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber("+91-##########"),
      address: {
        line1: faker.address.streetAddress(),
        line2: faker.address.secondaryAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: faker.address.country(),
        postalCode: faker.address.zipCode(),
      },
      governmentIdentifiers: {
        aadharNumber: faker.datatype.uuid().slice(0, 12),
        panNumber: faker.random.alphaNumeric(10).toUpperCase(),
        passportNumber: `P${faker.random.alphaNumeric(7).toUpperCase()}`,
      },
    },
    professionalDetails: {
      currentDesignation: "Software Architect",
      currentCompany: faker.company.companyName(),
      totalExperience: `${totalExperienceYears} years`,
      timeline: Array.from({ length: 4 }, (_, i) => ({
        period: {
          start: `Jan ${startYear + i * 4}`,
          end: `Dec ${startYear + (i + 1) * 4}`,
          duration: `${4} years`,
        },
        designation: i === 3 ? "Software Architect" : faker.name.jobTitle(),
        company: faker.company.companyName(),
        projects: Array.from({ length: 2 }, () => ({
          projectName: faker.commerce.productName(),
          client: faker.company.companyName(),
          projectBrief: faker.commerce.productDescription(),
          techStack: Array.from({ length: 4 }, () => faker.random.word()),
          teamSize: faker.datatype.number({ min: 5, max: 20 }),
          contribution: faker.lorem.sentences(2),
          architectureDetails: faker.lorem.sentence(),
        })),
      })),
    },
    skills: {
      technicalSkills: Array.from({ length: 8 }, () => ({
        skill: faker.random.word(),
        category: faker.helpers.randomize([
          "Language",
          "Framework",
          "Tool",
          "Concept",
        ]),
        lastUsed: `${faker.date.past(2).getFullYear()}`,
        rating: faker.datatype.number({ min: 3, max: 5 }),
        anecdote: faker.lorem.sentence(),
      })),
    },
    education: {
      highestDegree: "Master of Technology (M.Tech) in Computer Science",
      university: faker.company.companyName() + " University",
      graduationYear: educationYear,
    },
    certifications: Array.from({ length: 3 }, () =>
      faker.company.catchPhrase()
    ),
    domainKnowledge: [
      {
        domain: "Healthcare IT",
        experience: faker.lorem.sentence(),
        roles: ["Consulting", "Application Development"],
      },
      {
        domain: "E-commerce",
        experience: faker.lorem.sentence(),
        roles: ["Application Development", "Support"],
      },
      {
        domain: "Finance Technology",
        experience: faker.lorem.sentence(),
        roles: ["Application Development"],
      },
    ],
    socialMediaPresence: {
      linkedIn: faker.internet.url(),
      github: faker.internet.url(),
      twitter: faker.internet.url(),
      personalWebsite: faker.internet.url(),
    },
  };
}

async function storeCandidatesInDB(candidates) {
  const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);

    const result = await collection.insertMany(candidates);
    console.log(
      `Inserted ${result.insertedCount} candidates into the database.`
    );
  } catch (error) {
    console.error("Error storing candidates in MongoDB:", error);
  } finally {
    await client.close();
  }
}

// Generate and store candidates
(async () => {
  const numberOfCandidates = 30; // Adjust this to generate more or fewer candidates
  const candidates = await Promise.all(
    Array.from({ length: numberOfCandidates }, generateMockCandidate)
  );

  await storeCandidatesInDB(candidates);
})();
