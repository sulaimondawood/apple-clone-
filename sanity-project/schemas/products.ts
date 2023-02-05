export default {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'string',
    },

    {
      name: 'ratings',
      title: 'Rate',
      type: 'string',
    },
    {
      name: 'leftBtn',
      title: 'Learn More',
      type: 'string',
    },
    {
      name: 'rightBtn',
      title: 'Order / Buy',
      type: 'string',
    },

    {
      name: 'desc',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
