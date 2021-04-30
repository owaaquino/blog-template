export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      options: {
        layout: "checkbox",
      },
    },
    {
      name: "tags",
      title: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tags" } }],
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      validation: Rule => [
        Rule.required()
          .min(50)
          .error("A summary of min. 10 characters is required"),
        Rule.max(250).warning("Shorter titles are usually better"),
      ],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
}
