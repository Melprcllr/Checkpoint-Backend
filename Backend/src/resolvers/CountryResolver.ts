import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Country } from "../entities/Country";
import { dataSource } from "../dataSource/dataSource";

@Resolver()
export class CountryResolver {
    
  @Query(() => [Country])
  // Récupère la liste de tous les pays avec leurs attributs (code, nom, emoji)
  async countries(): Promise<Country[]> {
    const countryRepository = dataSource.getRepository(Country);
    return await countryRepository.find();
  }

  @Query(() => Country, { nullable: true })
  // Récupère un pays spécifique en fonction de son code
  async country(@Arg("code") code: string): Promise<Country | null> {
    const countryRepository = dataSource.getRepository(Country);
    return await countryRepository.findOne({ where: { code } });
  }

  
  @Mutation(() => Country)
  // Ajoute un pays avec le code, nom, emoji et continent
  async addCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string,
    @Arg("continent") continent: string
  ): Promise<Country> {
    const countryRepository = dataSource.getRepository(Country);
    const country = countryRepository.create({ code, name, emoji });
    return await countryRepository.save(country);
  }

  @Query(() => [Country])
  // Récupère tous les pays d'un continent donné en fonction du code du continent
  async countriesByContinent(@Arg("continent") continent: string): Promise<Country[]> {
    const countryRepository = dataSource.getRepository(Country);
    return await countryRepository.find({ where: { continent } });
  }

}
