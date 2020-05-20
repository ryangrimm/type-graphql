import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PatientWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  firstName?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  lastName?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  email?: StringFilter | null | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PatientWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PatientWhereInput[] | null | undefined;

  @TypeGraphQL.Field(_type => [PatientWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PatientWhereInput[] | null | undefined;
}
