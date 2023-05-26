import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WorkspaceMemberCreateNestedManyWithoutWorkspaceInput } from '../workspace-member/workspace-member-create-nested-many-without-workspace.input';
import { CompanyCreateNestedManyWithoutWorkspaceInput } from '../company/company-create-nested-many-without-workspace.input';
import { PersonCreateNestedManyWithoutWorkspaceInput } from '../person/person-create-nested-many-without-workspace.input';

@InputType()
export class WorkspaceCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => String, {nullable:false})
    domainName!: string;

    @Field(() => String, {nullable:false})
    displayName!: string;

    @Field(() => WorkspaceMemberCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    WorkspaceMember?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput;

    @Field(() => CompanyCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    companies?: CompanyCreateNestedManyWithoutWorkspaceInput;

    @Field(() => PersonCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    people?: PersonCreateNestedManyWithoutWorkspaceInput;
}