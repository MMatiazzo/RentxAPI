import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  private static INSTANCE: SpecificationRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new SpecificationRepository();
    }
    return this.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  list(): void {
    throw new Error("Method not implemented.");
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find((specification) => {
      return specification.name === name;
    });

    return specification;
  }
}

export { SpecificationRepository };
