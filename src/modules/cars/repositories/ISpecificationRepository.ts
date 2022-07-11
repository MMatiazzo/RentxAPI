import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}
interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  list(): void;
  findByName(name: string): Specification;
}

export { ISpecificationRepository, ICreateSpecificationDTO };
