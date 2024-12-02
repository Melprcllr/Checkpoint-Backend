import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/CountryResolver";
import { dataSource } from "./dataSource/dataSource";
import { startStandaloneServer } from "@apollo/server/standalone";


const port = 4000;

const startServer = async () => {
  // Initialisation de connexion à la BDD
  await dataSource.initialize();

  // Construction du schéma GraphQL à partir des resolvers
  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  // Tranmission du schema à Apollo
  const server = new ApolloServer({ schema });

  // Démarrage du serveur sur le port 4000
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at ${url}`);
};

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
