import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Template`.
 */
export type TemplateProps = SliceComponentProps<Content.TemplateSlice>;

/**
 * Component for "Template" Slices.
 */
const Template = ({ slice }: TemplateProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for template (variation: {slice.variation}) Slices
    </section>
  );
};

export default Template;
