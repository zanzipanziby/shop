import type {Meta, StoryObj} from "@storybook/react";
import {Typography} from "./typography";


const meta = {
    title: "Components/Typography",
    component: Typography,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'string',
        as: 'h1',
        variant: 'h1'
    },
};
