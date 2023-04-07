import { PromptTemplate } from "langchain/prompts";

const TASK_CREATION_TEMPLATE = "Create tasks to achieve the following objective: {objective}";

export const TASK_CREATION_PROMPT = new PromptTemplate({
    template: TASK_CREATION_TEMPLATE,
    inputVariables: ["objective"],
});