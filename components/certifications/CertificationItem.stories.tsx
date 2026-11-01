import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, waitFor, within } from "storybook/test";
import CertificationItem from "./CertificationItem";
import { certifications } from "../../config/certifications";
import { pageContent, linkContent } from "../../config/siteContent";

const meta = {
  title: "Certifications/CertificationItem",
  component: CertificationItem,
  tags: ["autodocs"],

  args: { certification: certifications[0], completedLabel: pageContent.certifications.sections[0].statusLabel, dateLabel: pageContent.certifications.sections[0].dateLabel, resultLabel: pageContent.certifications.resultLabel },
} satisfies Meta<typeof CertificationItem>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Education: Story = {};
export const Course: Story = { args: { certification: certifications[2], completedLabel: pageContent.certifications.completedLabel, dateLabel: pageContent.certifications.sections[2].dateLabel, resultLabel: pageContent.certifications.resultLabel } };

export const CourseTooltipInList: Story = {
  ...Course,
  decorators: [(Story) => (
    <div className="pt-12">
      <ul className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
        <li><Story /></li>
      </ul>
    </div>
  )],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.hover(canvas.getByRole("link"));
    await waitFor(() => expect(canvas.getByText(linkContent.destinations[1].tooltip)).toHaveStyle({ opacity: "1" }));
  },
};
